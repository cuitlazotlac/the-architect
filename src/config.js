// ============================================================
// EmailJS Configuration
// ============================================================
// To set up EmailJS:
//   1. Create a free account at https://www.emailjs.com
//   2. Add an email service (e.g. Gmail) → copy the Service ID
//   3. Create an email template with these variables:
//      {{from_name}}, {{from_email}}, {{programme}}, {{message}}
//   4. Copy your Public Key from Account → API Keys
//   5. Fill in the values below
// ============================================================

export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
export const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

// The email address where enquiries are sent.
// Change this in your EmailJS template's "To Email" field,
// or use it as a template variable if you prefer.
export const CONTACT_EMAIL = 'heyhayssem@gmail.com'

// ============================================================
// Google reCAPTCHA v2 Configuration
// ============================================================
// To set up reCAPTCHA:
//   1. Go to https://www.google.com/recaptcha/admin
//   2. Register a new site → choose reCAPTCHA v2 ("I'm not a robot" checkbox)
//   3. Add your domain(s) (and localhost for dev)
//   4. Copy the Site Key below
// ============================================================
export const RECAPTCHA_SITE_KEY = '6LcZcacsAAAAANXmHKLdgdd317fk9r8KuMJ8wdq0'
