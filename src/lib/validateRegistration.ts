export type RegistrationValues = {
 fullName: string; 
 email: string; 
 password: string; 
 confirmPassword: string; 
 acceptTerms: boolean
}
export type RegistrationErrors = Partial<Record<keyof RegistrationValues, string>>
export function validateRegistration(values: RegistrationValues): RegistrationErrors {
  const errors: RegistrationErrors = {}
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name'
  }

  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Email is invalid'
  }

  if (values.password.length < 8) {
    errors.password = 'Use at least 8 characters'
  } else if (!/\d/.test(values.password)) {
    errors.password = 'Include at least one number'
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  if (!values.acceptTerms) {
    errors.acceptTerms = 'Accept the terms to continue'
  }

  return errors
}