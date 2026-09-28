'use client';

import React, { useState } from 'react';
import { FiCheckCircle, FiAlertCircle, FiSend, FiLoader } from 'react-icons/fi';

export default function InvestmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    investmentType: 'General Shareholder',
    projectInterest: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required.';
    }
    if (!formData.investmentType) {
      errs.investmentType = 'Please select an investment category.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    // Simulate frontend validation & processing state
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div
      className="luxury-card"
      style={{
        padding: 'clamp(2rem, 4vw, 3.5rem)',
        background: '#FFFFFF',
        borderRadius: '24px',
        border: '1.5px solid rgba(197, 155, 39, 0.35)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <h3
          style={{
            fontSize: '1.5rem',
            color: 'var(--color-primary-blue)',
            marginBottom: '0.5rem',
          }}
        >
          Investment Application Form
        </h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
          Submit your expression of interest for review by the Spectrum EduCare Secretariat and Management Board.
        </p>
      </div>

      {isSubmitted ? (
        <div
          style={{
            padding: '2.5rem',
            background: 'rgba(30, 58, 95, 0.04)',
            borderRadius: '16px',
            border: '1px solid rgba(197, 155, 39, 0.3)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(30, 58, 95, 0.08)',
              color: 'var(--color-primary-blue)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              marginBottom: '1rem',
            }}
          >
            <FiCheckCircle style={{ color: 'var(--color-gold-border)' }} />
          </div>
          <h4 style={{ fontSize: '1.3rem', color: 'var(--color-primary-blue)', marginBottom: '0.75rem' }}>
            Application Recorded Locally
          </h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.7', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            Thank you, <strong>{formData.fullName}</strong>. Your expression of interest for <strong>{formData.investmentType}</strong> has been received by the client interface. For direct inquiries, please also reach our Secretariat at <strong>01726-208154</strong> or <strong>spectrumeducareltd@gmail.com</strong>.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                organization: '',
                email: '',
                phone: '',
                investmentType: 'General Shareholder',
                projectInterest: '',
                message: '',
              });
            }}
            className="btn-outline"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-blue)', marginBottom: '0.4rem' }}
              >
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Dr. Mahmudul Hasan"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  border: errors.fullName ? '1.5px solid #D9383A' : '1px solid rgba(197, 155, 39, 0.3)',
                  background: '#FAF8F5',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              {errors.fullName && (
                <span style={{ fontSize: '0.8rem', color: '#D9383A', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                  <FiAlertCircle /> {errors.fullName}
                </span>
              )}
            </div>

            {/* Organization */}
            <div>
              <label
                htmlFor="organization"
                style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-blue)', marginBottom: '0.4rem' }}
              >
                Organization / Institution
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Company or institution name"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(197, 155, 39, 0.3)',
                  background: '#FAF8F5',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-blue)', marginBottom: '0.4rem' }}
              >
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organization.com"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  border: errors.email ? '1.5px solid #D9383A' : '1px solid rgba(197, 155, 39, 0.3)',
                  background: '#FAF8F5',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              {errors.email && (
                <span style={{ fontSize: '0.8rem', color: '#D9383A', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                  <FiAlertCircle /> {errors.email}
                </span>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-blue)', marginBottom: '0.4rem' }}
              >
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 01726-000000"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  border: errors.phone ? '1.5px solid #D9383A' : '1px solid rgba(197, 155, 39, 0.3)',
                  background: '#FAF8F5',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              {errors.phone && (
                <span style={{ fontSize: '0.8rem', color: '#D9383A', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                  <FiAlertCircle /> {errors.phone}
                </span>
              )}
            </div>

            {/* Investment Type */}
            <div>
              <label
                htmlFor="investmentType"
                style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-blue)', marginBottom: '0.4rem' }}
              >
                Investment Type *
              </label>
              <select
                id="investmentType"
                name="investmentType"
                value={formData.investmentType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(197, 155, 39, 0.3)',
                  background: '#FAF8F5',
                  fontSize: '0.95rem',
                  outline: 'none',
                  color: 'var(--color-text-main)',
                }}
              >
                <option value="General Shareholder">General Shareholder (Equity Ownership)</option>
                <option value="Project Shareholder">Project Shareholder (Project-Specific)</option>
                <option value="Short & Long-Term Business Investor">Short & Long-Term Business Investor (Shariah Contract)</option>
              </select>
            </div>

            {/* Project Interest */}
            <div>
              <label
                htmlFor="projectInterest"
                style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-blue)', marginBottom: '0.4rem' }}
              >
                Investment Interest / Project
              </label>
              <input
                id="projectInterest"
                name="projectInterest"
                type="text"
                value={formData.projectInterest}
                onChange={handleChange}
                placeholder="e.g. Savar Campus / SIT / General Equity"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(197, 155, 39, 0.3)',
                  background: '#FAF8F5',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label
              htmlFor="message"
              style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-blue)', marginBottom: '0.4rem' }}
            >
              Statement of Interest / Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your background or investment preferences..."
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '10px',
                border: '1px solid rgba(197, 155, 39, 0.3)',
                background: '#FAF8F5',
                fontSize: '0.95rem',
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', margin: 0 }}>
              * All applications are subject to Board review and Shariah compliance evaluation.
            </p>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-gold"
              style={{ minWidth: '220px' }}
            >
              {isLoading ? (
                <>
                  <FiLoader className="spinning" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <FiSend />
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
