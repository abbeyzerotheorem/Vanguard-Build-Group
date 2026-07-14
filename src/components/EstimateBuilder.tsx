'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Loader2, ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface FormData {
  projectType: string;
  projectScope: string;
  projectSize: string;
  budget: string;
  timeline: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

const initialFormData: FormData = {
  projectType: '',
  projectScope: '',
  projectSize: '',
  budget: '',
  timeline: 'asap',
  fullName: '',
  email: '',
  phone: '',
  notes: '',
};

const projectTypes = [
  { value: 'residential', label: 'Residential Construction' },
  { value: 'commercial', label: 'Commercial Construction' },
  { value: 'institutional', label: 'Institutional / Public' },
  { value: 'renovation', label: 'Renovation & Remodeling' },
  { value: 'infrastructure', label: 'Infrastructure & Civil' },
];

const projectSizes = [
  { value: 'small', label: 'Small (< 500 m²)' },
  { value: 'medium', label: 'Medium (500 – 2 000 m²)' },
  { value: 'large', label: 'Large (2 000 – 10 000 m²)' },
  { value: 'xlarge', label: 'Extra Large (> 10 000 m²)' },
];

const budgetRanges = [
  { value: 'under500k', label: 'Under R500,000' },
  { value: '500k-2m', label: 'R500,000 – R2,000,000' },
  { value: '2m-10m', label: 'R2,000,000 – R10,000,000' },
  { value: '10m-50m', label: 'R10,000,000 – R50,000,000' },
  { value: 'over50m', label: 'Over R50,000,000' },
];

const timelineOptions = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '1-3months', label: '1 – 3 months' },
  { value: '3-6months', label: '3 – 6 months' },
  { value: '6-12months', label: '6 – 12 months' },
  { value: 'planning', label: 'Still planning' },
];

const steps = [
  { step: 1, title: 'Project Type', description: 'What kind of project?' },
  { step: 2, title: 'Project Scope', description: 'Size & details' },
  { step: 3, title: 'Budget & Timeline', description: 'Constraints' },
  { step: 4, title: 'Contact Info', description: 'How to reach you' },
];

export default function EstimateBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (currentStep === 1 && !formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }
    if (currentStep === 2) {
      if (!formData.projectScope.trim()) {
        newErrors.projectScope = 'Please describe your project scope.';
      }
      if (!formData.projectSize) {
        newErrors.projectSize = 'Please select an approximate size.';
      }
    }
    if (currentStep === 3) {
      if (!formData.budget) {
        newErrors.budget = 'Please select a budget range.';
      }
      if (!formData.timeline) {
        newErrors.timeline = 'Please select a timeline.';
      }
    }
    if (currentStep === 4) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required.';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Estimate Request Submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-zinc-900">Estimate Request Received!</h2>
        <p className="mt-2 text-zinc-600">
          Thank you, {formData.fullName.split(' ')[0]}. Our team will review your project and reach
          out within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Step Indicators */}
      <nav className="mb-8" aria-label="Progress">
        <ol className="flex items-center">
          {steps.map((s, idx) => (
            <li key={s.step} className={cn('flex items-center', idx < steps.length - 1 && 'flex-1')}>
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors',
                    currentStep > s.step
                      ? 'bg-amber-600 text-white'
                      : currentStep === s.step
                        ? 'border-2 border-amber-600 bg-amber-50 text-amber-700'
                        : 'border-2 border-zinc-300 bg-white text-zinc-400'
                  )}
                  aria-current={currentStep === s.step ? 'step' : undefined}
                >
                  {currentStep > s.step ? <Check className="h-5 w-5" /> : s.step}
                </span>
                <span
                  className={cn(
                    'mt-1 hidden text-xs font-medium sm:block',
                    currentStep >= s.step ? 'text-zinc-900' : 'text-zinc-400'
                  )}
                >
                  {s.title}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={cn(
                    'mx-2 h-0.5 flex-1 sm:mx-4',
                    currentStep > s.step ? 'bg-amber-600' : 'bg-zinc-200'
                  )}
                />
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form Card */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">
                What type of project are you planning?
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Select the category that best describes your construction project.
              </p>
              <fieldset className="mt-6 space-y-3">
                {projectTypes.map((pt) => (
                  <label
                    key={pt.value}
                    className={cn(
                      'flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors',
                      formData.projectType === pt.value
                        ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-500'
                        : 'border-zinc-200 hover:border-zinc-300'
                    )}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value={pt.value}
                      checked={formData.projectType === pt.value}
                      onChange={(e) => updateField('projectType', e.target.value)}
                      className="h-4 w-4 accent-amber-600"
                    />
                    <span className="text-sm font-medium text-zinc-900">{pt.label}</span>
                  </label>
                ))}
              </fieldset>
              {errors.projectType && <p className="mt-1 text-xs text-red-600">{errors.projectType}</p>}
            </div>
          )}

          {/* Step 2: Project Scope */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">
                Tell us about your project scope
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Provide details about the size and scope of your project.
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="projectSize" className="block text-sm font-medium text-zinc-700 mb-1">
                    Approximate size
                  </label>
                  <select
                    id="projectSize"
                    value={formData.projectSize}
                    onChange={(e) => updateField('projectSize', e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="">Select size…</option>
                    {projectSizes.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  {errors.projectSize && <p className="mt-1 text-xs text-red-600">{errors.projectSize}</p>}
                </div>
                <div>
                  <label htmlFor="projectScope" className="block text-sm font-medium text-zinc-700 mb-1">
                    Project details
                  </label>
                  <textarea
                    id="projectScope"
                    rows={4}
                    value={formData.projectScope}
                    onChange={(e) => updateField('projectScope', e.target.value)}
                    placeholder="Describe your project scope, special requirements, and any other relevant details…"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                  {errors.projectScope && <p className="mt-1 text-xs text-red-600">{errors.projectScope}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Budget & Timeline */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Budget & Timeline</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Help us understand your budget range and desired timeline.
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-zinc-700 mb-1">
                    Budget range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => updateField('budget', e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="">Select budget range…</option>
                    {budgetRanges.map((b) => (
                      <option key={b.value} value={b.value}>{b.label}</option>
                    ))}
                  </select>
                  {errors.budget && <p className="mt-1 text-xs text-red-600">{errors.budget}</p>}
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-zinc-700 mb-1">
                    Desired timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => updateField('timeline', e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  >
                    {timelineOptions.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  {errors.timeline && <p className="mt-1 text-xs text-red-600">{errors.timeline}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Your Contact Information</h2>
              <p className="mt-1 text-sm text-zinc-500">
                We&apos;ll use this info to send your estimate.
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-zinc-700 mb-1">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="+27 82 123 4567"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-zinc-700 mb-1">
                    Additional notes (optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => updateField('notes', e.target.value)}
                    placeholder="Anything else we should know?"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors',
              currentStep === 1
                ? 'cursor-not-allowed text-zinc-300'
                : 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50'
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-700"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                'Submit Estimate Request'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
