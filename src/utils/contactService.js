/**
 * Contact Service
 * Handles form validation and prepares for EmailJS / custom API integration.
 * In development / static mode, gracefully simulates API delivery without requiring a backend.
 */

export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (formData.phone && formData.phone.trim().length < 7) {
    errors.phone = 'Please provide a valid phone number (or leave blank).';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Please provide a message with at least 10 characters detailing your project.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const sendContactMessage = async (formData) => {
  // Validate first
  const { isValid, errors } = validateContactForm(formData);
  if (!isValid) {
    const error = new Error('Validation failed');
    error.validationErrors = errors;
    throw error;
  }

  // Check for EmailJS configuration
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (serviceId && templateId && publicKey) {
    // If EmailJS credentials are provided in .env, dynamic post can be done here:
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || 'Not provided',
            project_type: formData.projectType || 'General Inquiry',
            budget: formData.budget || 'Not specified',
            message: formData.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Email delivery failed with status ${response.status}`);
      }
      return { success: true, mode: 'emailjs' };
    } catch (err) {
      console.error('EmailJS transmission error:', err);
      throw new Error('Could not send message via EmailJS. Please contact directly via WhatsApp or email.', { cause: err });
    }
  }

  // Graceful simulation when no third-party keys are set:
  await new Promise((resolve) => setTimeout(resolve, 900));

  // Also log securely in development console for verification
  console.log('[Contact Service] Message received safely:', {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    projectType: formData.projectType,
    budget: formData.budget,
    message: formData.message,
    timestamp: new Date().toISOString(),
  });

  return { success: true, mode: 'local_simulation' };
};
