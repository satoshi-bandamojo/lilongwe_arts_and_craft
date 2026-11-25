import type { ContactFormData, ContactValidationErrors } from '../types/lcac';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ContactValidationErrors;
} {
  const errors: ContactValidationErrors = {};

  const fullName = data.fullName.trim();
  const email = data.email.trim();
  const subject = data.subject.trim();
  const message = data.message.trim();

  if (!fullName) {
    errors.fullName = 'Please enter your full name.';
  } else if (fullName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.category) {
    errors.category = 'Please select an enquiry category.';
  }

  if (!subject) {
    errors.subject = 'Please enter a subject for your enquiry.';
  } else if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  if (!message) {
    errors.message = 'Please enter your message.';
  } else if (message.length < 15) {
    errors.message = 'Please provide a brief message of at least 15 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
