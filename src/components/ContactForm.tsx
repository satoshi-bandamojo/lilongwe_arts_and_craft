import { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import type {
  ContactFormData,
  ContactValidationErrors,
  EnquiryCategory,
} from '../types/lcac';
import { validateContactForm } from '../utils/validation';
import { Button } from './Button';

const ENQUIRY_CATEGORIES: EnquiryCategory[] = [
  'General Enquiry',
  'Youth Training Interest',
  'Partnership & Collaboration',
  'Funding & Sponsorship',
  'Mentorship & Teaching',
  'Media & Institutional Briefing',
];

const INITIAL_FORM: ContactFormData = {
  fullName: '',
  email: '',
  subject: '',
  category: '',
  message: '',
};

interface ContactFormProps {
  onSubmitEnquiry?: (data: ContactFormData) => void | Promise<void>;
}

export function ContactForm({ onSubmitEnquiry }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [previewPayload, setPreviewPayload] = useState<ContactFormData | null>(null);

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      setPreviewPayload(null);
      return;
    }

    setErrors({});
    if (onSubmitEnquiry) {
      await onSubmitEnquiry(formData);
    }
    setPreviewPayload(formData);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setPreviewPayload(null);
  };

  if (previewPayload) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="p-6 sm:p-8 rounded-lg bg-[#F7F2E8] border border-[#30483C]/30 space-y-5"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-[#30483C] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#272522]">
              Enquiry Validated (Frontend Prototype Preview)
            </h3>
            <p className="mt-2 text-sm text-[#272522]/80 leading-relaxed">
              Your enquiry passed all validation checks. Because this is an initial frontend prototype and LCAC’s backend is not yet connected,{' '}
              <strong className="font-semibold text-[#272522]">
                no message has been transmitted to a server or inbox.
              </strong>{' '}
              In the upcoming phase, this form will store enquiries directly in Supabase.
            </p>
          </div>
        </div>

        <dl className="p-4 rounded-md bg-[#F2EBDD] border border-[#272522]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-[#272522]/60">Full Name</dt>
            <dd className="mt-0.5 font-medium text-[#272522]">{previewPayload.fullName}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-[#272522]/60">Email</dt>
            <dd className="mt-0.5 font-medium text-[#272522]">{previewPayload.email}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-[#272522]/60">Category</dt>
            <dd className="mt-0.5 font-medium text-[#272522]">{previewPayload.category}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-[#272522]/60">Subject</dt>
            <dd className="mt-0.5 font-medium text-[#272522]">{previewPayload.subject}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs uppercase tracking-wider text-[#272522]/60">Message</dt>
            <dd className="mt-0.5 text-[#272522]/85 whitespace-pre-line">{previewPayload.message}</dd>
          </div>
        </dl>

        <Button type="button" variant="outline" size="md" onClick={handleReset}>
          Prepare Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 space-y-5"
    >
      <div className="pb-4 border-b border-[#272522]/10">
        <h3 className="font-serif text-2xl font-semibold text-[#272522]">
          Send an Enquiry
        </h3>
        <p className="mt-1.5 text-sm text-[#272522]/75 leading-relaxed">
          Prototype contact form with client-side validation, prepared for future Supabase integration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-fullName"
            className="block text-sm font-medium text-[#272522] mb-1.5"
          >
            Full Name <span className="text-[#963F2D]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'error-fullName' : undefined}
            placeholder="e.g. Chisomo Banda"
            className="w-full px-3.5 py-2.5 rounded-md bg-[#F2EBDD] border border-[#272522]/25 text-sm text-[#272522] placeholder:text-[#272522]/45 focus:border-[#963F2D] focus:outline-none min-h-[42px]"
          />
          {errors.fullName && (
            <p id="error-fullName" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#963F2D]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-[#272522] mb-1.5"
          >
            Email Address <span className="text-[#963F2D]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            placeholder="name@organisation.org"
            className="w-full px-3.5 py-2.5 rounded-md bg-[#F2EBDD] border border-[#272522]/25 text-sm text-[#272522] placeholder:text-[#272522]/45 focus:border-[#963F2D] focus:outline-none min-h-[42px]"
          />
          {errors.email && (
            <p id="error-email" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#963F2D]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-category"
            className="block text-sm font-medium text-[#272522] mb-1.5"
          >
            Enquiry Category <span className="text-[#963F2D]" aria-hidden="true">*</span>
          </label>
          <select
            id="contact-category"
            name="category"
            required
            value={formData.category}
            onChange={(e) => handleChange('category', e.target.value)}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? 'error-category' : undefined}
            className="w-full px-3.5 py-2.5 rounded-md bg-[#F2EBDD] border border-[#272522]/25 text-sm text-[#272522] focus:border-[#963F2D] focus:outline-none min-h-[42px]"
          >
            <option value="">Select a category</option>
            {ENQUIRY_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <p id="error-category" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#963F2D]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.category}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-medium text-[#272522] mb-1.5"
          >
            Subject <span className="text-[#963F2D]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'error-subject' : undefined}
            placeholder="Brief subject line"
            className="w-full px-3.5 py-2.5 rounded-md bg-[#F2EBDD] border border-[#272522]/25 text-sm text-[#272522] placeholder:text-[#272522]/45 focus:border-[#963F2D] focus:outline-none min-h-[42px]"
          />
          {errors.subject && (
            <p id="error-subject" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#963F2D]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-[#272522] mb-1.5"
        >
          Message <span className="text-[#963F2D]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'error-message' : undefined}
          placeholder="Share how you would like to engage with LCAC's establishment..."
          className="w-full px-3.5 py-2.5 rounded-md bg-[#F2EBDD] border border-[#272522]/25 text-sm text-[#272522] placeholder:text-[#272522]/45 focus:border-[#963F2D] focus:outline-none"
        />
        {errors.message && (
          <p id="error-message" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#963F2D]">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Button type="submit" variant="primary" size="lg">
          Validate &amp; Preview Enquiry
        </Button>
        <p className="text-xs text-[#272522]/65">
          Prototype only — no live server submission is active yet.
        </p>
      </div>
    </form>
  );
}
