'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn, formatCurrency } from '@/lib/utils';
import {
  Loader2,
  ArrowLeft,
  ArrowRight,
  Check,
  Calculator,
  Clock,
  Ruler,
} from 'lucide-react';
import { constructionConfig } from '@/data/construction';
import type {
  ProjectTypeValue,
  ProjectSizeValue,
  BudgetValue,
  TimelineValue,
  EstimateTier,
} from '@/types';

interface FormData {
  projectType: ProjectTypeValue | '';
  projectScope: string;
  projectSize: ProjectSizeValue | '';
  budget: BudgetValue | '';
  timeline: TimelineValue;
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

const { estimate, estimateTiers } = constructionConfig;

const steps = [
  { step: 1, title: 'Project Type', description: 'What kind of project?' },
  { step: 2, title: 'Project Scope', description: 'Size & details' },
  { step: 3, title: 'Budget & Timeline', description: 'Constraints' },
  { step: 4, title: 'Contact Info', description: 'How to reach you' },
];

function findTiers(projectType: string, projectSize: string): EstimateTier[] {
  if (!projectType || !projectSize) return [];
  const exactId = `${projectType}-${projectSize}`;
  const exact = estimateTiers.find((t) => t.id === exactId);
  if (exact) return [exact];
  return estimateTiers.filter((t) => t.id.startsWith(projectType));
}

function computeEstimate(
  projectType: string,
  projectSize: string,
  budget: string,
): { min: number; max: number; label: string; months: number } | null {
  const tiers = findTiers(projectType, projectSize);
  if (tiers.length === 0) return null;
  const tier = tiers[0];
  const months = tier.months[projectSize as keyof typeof tier.months] ?? tier.months.medium;
  let min = tier.min;
  let max = tier.max;
  if (budget) {
    const budgetUpperMap: Record<string, number> = {
      under500k: 500_000,
      '500k-2m': 2_000_000,
      '2m-10m': 10_000_000,
      '10m-50m': 50_000_000,
      over50m: 130_000_000,
    };
    const upper = budgetUpperMap[budget] ?? max;
    min = Math.min(min, upper * 0.6);
    max = Math.min(max, upper);
  }
  min = Math.max(min, 250_000);
  max = Math.max(max, min + 100_000);
  return { min, max, label: tier.label, months };
}

export default function EstimateBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const estimateResult = useMemo(
    () => computeEstimate(formData.projectType, formData.projectSize, formData.budget),
    [formData.projectType, formData.projectSize, formData.budget],
  );

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
    }
    if (currentStep === 4) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Please enter your name.';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Please enter your email.';
      } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Please enter your phone number.';
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-forest-500/30 bg-forest-500/5 p-8 sm:p-10 text-center"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-forest-500/10">
          <Check className="h-8 w-8 text-forest-500" strokeWidth={2.5} />
        </div>
        <h3 className="text-display-xs font-display font-bold text-ink">
          Estimate Request Received!
        </h3>
        <p className="mt-3 max-w-lg mx-auto text-sm sm:text-base text-ink-500 leading-relaxed">
          Thanks, {formData.fullName}! We&rsquo;ll review your project details and get back
          within <strong className="text-ink">48 hours</strong> with a detailed line-item estimate.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData(initialFormData);
            setCurrentStep(1);
            setIsSubmitted(false);
          }}
          className="btn-primary mt-8"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-bone-50/10 bg-ink-800/60 backdrop-blur-sm shadow-structural-lg overflow-hidden">
      {/* Live Estimate Preview */}
      <AnimatePresence>
        {estimateResult && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-brass-300/10 bg-gradient-to-r from-brass-500/10 via-brass-500/5 to-brass-500/10"
          >
            <div className="px-6 py-5 sm:px-8 sm:py-6">
              <p className="inline-flex items-center gap-2 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.18em] text-brass-400 mb-2">/ Estimated Range</p>
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="font-display text-display-sm font-bold text-white">
                  {formatCurrency(estimateResult.min)}
                  <span className="text-display-xs text-bone-50/50 mx-1.5">&ndash;</span>
                  {formatCurrency(estimateResult.max)}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brass-300/30 bg-brass-500/20 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-brass-300">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {estimateResult.months} months
                </span>
              </div>
              <p className="mt-1 text-xs text-bone-50/50">{estimateResult.label}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Steps */}
      <div className="border-b border-bone-50/10 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between">
          {steps.map((step) => {
            const isActive = currentStep === step.step;
            const isCompleted = currentStep > step.step;
            return (
              <div key={step.step} className="flex items-center gap-2">
                <span
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300',
                    isActive
                      ? 'bg-brass-500 text-bone-50 shadow-brass'
                      : isCompleted
                        ? 'bg-forest-500 text-bone-50'
                        : 'border border-white/20 text-bone-50/60',
                  )}
                >
                  {isCompleted ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : step.step}
                </span>
                <span
                  className={cn(
                    'hidden text-sm font-medium transition-colors sm:inline',
                    isActive ? 'text-white' : 'text-bone-50/60',
                  )}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8 sm:py-8">
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {/* Step 1: Project Type */}
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-display-xs font-display font-bold text-bone-50">Select Project Type</h3>
                <p className="mt-1.5 text-sm text-bone-50/60">What kind of construction project are you planning?</p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {estimate.projectTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => updateField('projectType', type.value)}
                      className={cn(
                        'group relative flex items-center gap-3 rounded-xl border px-5 py-4 text-left text-sm font-medium transition-all duration-300',
                        formData.projectType === type.value
                          ? 'border-brass-400 bg-brass-50 text-ink ring-2 ring-brass-400/20'
                          : 'border-border bg-paper text-ink-500 hover:border-ink-400 hover:text-ink',
                      )}
                    >
                      <span
                        className={cn(
                          'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all',
                          formData.projectType === type.value
                            ? 'border-brass-500 bg-brass-500'
                            : 'border-ink-400 group-hover:border-ink',
                        )}
                      >
                        {formData.projectType === type.value && (
                          <Check className="h-3 w-3 text-bone-50" strokeWidth={3} />
                        )}
                      </span>
                      <span>{type.label}</span>
                    </button>
                  ))}
                </div>
                {errors.projectType && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs font-medium text-rust-500"
                  >
                    {errors.projectType}
                  </motion.p>
                )}
              </motion.div>
            )}

            {/* Step 2: Project Scope */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-display-xs font-display font-bold text-bone-50">Project Scope</h3>
                <p className="mt-1.5 text-sm text-bone-50/60">Describe your project and its size.</p>
                <div className="mt-5 space-y-5">
                  <div>
                    <label htmlFor="scope" className="block text-sm font-medium text-ink mb-1.5">
                      Project description <span className="text-rust-500">*</span>
                    </label>
                    <textarea
                      id="scope"
                      rows={3}
                      value={formData.projectScope}
                      onChange={(e) => updateField('projectScope', e.target.value)}
                      placeholder="Describe the scope, key requirements, and any special considerations..."
                      className="w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-ink placeholder-ink-400 transition-all duration-200 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
                    />
                    {errors.projectScope && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs font-medium text-rust-500"
                      >
                        {errors.projectScope}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2.5">
                      Approximate project size <span className="text-rust-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {estimate.projectSizes.map((size) => (
                        <button
                          key={size.value}
                          type="button"
                          onClick={() => updateField('projectSize', size.value)}
                          className={cn(
                            'rounded-xl border px-3 py-3 text-center text-xs font-medium transition-all duration-200 sm:text-sm',
                            formData.projectSize === size.value
                              ? 'border-brass-400 bg-brass-50 text-ink ring-2 ring-brass-400/20'
                              : 'border-border bg-paper text-ink-500 hover:border-ink-400 hover:text-ink',
                          )}
                        >
                          <Ruler className="mx-auto mb-1 h-4 w-4 opacity-60" aria-hidden="true" />
                          {size.label}
                        </button>
                      ))}
                    </div>
                    {errors.projectSize && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs font-medium text-rust-500"
                      >
                        {errors.projectSize}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget & Timeline */}
            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-display-xs font-display font-bold text-ink">Budget &amp; Timeline</h3>
                <p className="mt-1.5 text-sm text-ink-500">Help us understand your constraints.</p>
                <div className="mt-5 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2.5">
                      Budget range <span className="text-rust-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {estimate.budgetRanges.map((b) => (
                        <button
                          key={b.value}
                          type="button"
                          onClick={() => updateField('budget', b.value)}
                          className={cn(
                            'rounded-xl border px-5 py-3.5 text-left text-sm font-medium transition-all duration-200',
                            formData.budget === b.value
                              ? 'border-brass-400 bg-brass-50 text-ink ring-2 ring-brass-400/20'
                              : 'border-border bg-paper text-ink-500 hover:border-ink-400 hover:text-ink',
                          )}
                        >
                          <span className="font-semibold">{b.label}</span>
                          {b.description && (
                            <span className="mt-0.5 block text-[0.7rem] text-ink-400">
                              {b.description}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    {errors.budget && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs font-medium text-rust-500"
                      >
                        {errors.budget}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2.5">
                      Desired timeline
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {estimate.timelineOptions.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => updateField('timeline', t.value)}
                          className={cn(
                            'rounded-xl border px-3 py-3 text-center text-xs font-medium transition-all duration-200 sm:text-sm',
                            formData.timeline === t.value
                              ? 'border-brass-400 bg-brass-50 text-ink ring-2 ring-brass-400/20'
                              : 'border-border bg-paper text-ink-500 hover:border-ink-400 hover:text-ink',
                          )}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Info */}
            {currentStep === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-display-xs font-display font-bold text-ink">Your Contact Information</h3>
                <p className="mt-1.5 text-sm text-ink-500">How should we reach you?</p>
                <div className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                      Full name <span className="text-rust-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-ink placeholder-ink-400 transition-all duration-200 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
                    />
                    {errors.fullName && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs font-medium text-rust-500"
                      >
                        {errors.fullName}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                      Email address <span className="text-rust-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-ink placeholder-ink-400 transition-all duration-200 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs font-medium text-rust-500"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
                      Phone number <span className="text-rust-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+27 82 123 4567"
                      className="w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-ink placeholder-ink-400 transition-all duration-200 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs font-medium text-rust-500"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-ink mb-1.5">
                      Additional notes <span className="text-ink-400">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => updateField('notes', e.target.value)}
                      placeholder="Anything else we should know?"
                      className="w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-ink placeholder-ink-400 transition-all duration-200 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Live Estimate Summary Bar */}
        {estimateResult && currentStep < 3 && (
          <div className="mt-6 rounded-xl border border-brass-300/20 bg-brass-50/60 px-5 py-3">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brass-600">
                <Calculator className="h-4 w-4" aria-hidden="true" />
                Projected estimate
              </span>
              <span className="font-display text-sm font-bold text-ink">
                {formatCurrency(estimateResult.min)} &ndash; {formatCurrency(estimateResult.max)}
              </span>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200',
              currentStep === 1
                ? 'cursor-not-allowed text-ink-300'
                : 'border border-border text-ink hover:border-ink hover:bg-ink hover:text-bone-50',
            )}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </button>

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary"
            >
              Next Step
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Submitting&hellip;
                </>
              ) : (
                <>
                  Submit Estimate Request
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
