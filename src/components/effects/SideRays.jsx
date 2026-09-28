'use client';

import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './SideRays.css';

function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map(x => x + x).join('');
  }
  const num = parseInt(c, 16);
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uRayColor1;
uniform vec3 uRayColor2;
uniform float uIntensity;
uniform float uSpread;
uniform vec2 uOrigin;
uniform float uTilt;
uniform float uSaturation;
uniform float uBlend;
uniform float uFalloff;
uniform float uOpacity;

varying vec2 vUv;

// Simple pseudo noise
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
    vec2 coord = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 pos = (coord - uOrigin) * aspect;
    
    // Apply tilt
    float c = cos(uTilt);
    float s = sin(uTilt);
    pos = mat2(c, -s, s, c) * pos;

    float dist = length(pos);
    float angle = atan(pos.y, pos.x);

    // Multi-octave light rays
    float rays = sin(angle * (uSpread * 8.0) + uTime * 0.4) * 0.5;
    rays += sin(angle * (uSpread * 14.0) - uTime * 0.6) * 0.3;
    rays += sin(angle * (uSpread * 26.0) + uTime * 0.8) * 0.2;
    rays = clamp(rays * 0.5 + 0.5, 0.0, 1.0);
    rays = pow(rays, 2.2);

    // Smooth falloff
    float falloff = exp(-dist * uFalloff);

    // Blend between rayColor1 and rayColor2
    float colorMix = clamp(sin(angle * 2.0 + uTime * 0.2) * 0.5 + 0.5, 0.0, 1.0);
    vec3 color = mix(uRayColor1, uRayColor2, mix(0.5, colorMix, uBlend));

    // Adjust saturation
    float gray = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(vec3(gray), color, uSaturation);

    float alpha = rays * falloff * uIntensity * uOpacity;

    gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
}
`;

export default function SideRays({
  speed = 2.5,
  rayColor1 = '#C59B27',
  rayColor2 = '#4A90E2',
  intensity = 1.3,
  spread = 2.9,
  origin = 'bottom-right',
  tilt = 0,
  saturation = 1.2,
  blend = 0.75,
  falloff = 1.6,
  opacity = 0.28,
  className = '',
}) {
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let originVec = [1.0, 0.0];
    if (origin === 'bottom-right') originVec = [1.0, 0.0];
    else if (origin === 'top-right') originVec = [1.0, 1.0];
    else if (origin === 'bottom-left') originVec = [0.0, 0.0];
    else if (origin === 'top-left') originVec = [0.0, 1.0];
    else if (origin === 'center') originVec = [0.5, 0.5];

    let renderer;
    try {
      renderer = new Renderer({
        alpha: true,
        premultipliedAlpha: false,
        powerPreference: 'low-power',
      });
    } catch (e) {
      console.warn('WebGL not supported for SideRays', e);
      return;
    }

    rendererRef.current = renderer;
    const gl = renderer.gl;
    const canvas = gl.canvas;
    canvas.className = 'siderays-canvas';
    container.appendChild(canvas);

    const geometry = new Triangle(gl);
    const color1 = hexToRgb(rayColor1);
    const color2 = hexToRgb(rayColor2);

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight] },
        uRayColor1: { value: color1 },
        uRayColor2: { value: color2 },
        uIntensity: { value: intensity },
        uSpread: { value: spread },
        uOrigin: { value: originVec },
        uTilt: { value: tilt },
        uSaturation: { value: saturation },
        uBlend: { value: blend },
        uFalloff: { value: falloff },
        uOpacity: { value: opacity },
      },
      transparent: true,
      depthTest: false,
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let lastTime = performance.now();
    const render = (time) => {
      animFrameRef.current = requestAnimationFrame(render);
      if (!isVisible) return;
      const dt = (time - lastTime) * 0.001;
      lastTime = time;
      program.uniforms.uTime.value += dt * speed;
      renderer.render({ scene: mesh });
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      const ext = gl.getExtension('WEBGL_lose_context');
      if (ext) ext.loseContext();
    };
  }, [
    speed,
    rayColor1,
    rayColor2,
    intensity,
    spread,
    origin,
    tilt,
    saturation,
    blend,
    falloff,
    opacity,
  ]);

  return <div ref={containerRef} className={`siderays-container ${className}`} aria-hidden="true" />;
}
