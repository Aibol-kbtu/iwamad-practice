import { describe, it, expect } from 'vitest'
import { validateRegistration } from './validateRegistration'

const valid = { 
 fullName: 'Aliya Nurlanovna',
 email: 'aliya@example.com',
 password: 'almaty2026',
 confirmPassword: 'almaty2026',
 acceptTerms: true
}

describe('validateRegistration', () => {
  it('1 accepts valid data', () => {
    expect(validateRegistration(valid)).toEqual({})
  })

  it('2 rejects a short fullName', () => {
    const errors = validateRegistration({ ...valid, fullName: ' ' })
    expect(errors.fullName).toBe('Enter your full name')
  })

  it('3 rejects a password starting with 0', () => {
    const errors = validateRegistration({ ...valid, password: '012Alma' })
    expect(errors.password).toBe('Use at least 8 characters')
  })

  it('4 rejects an email without a domain', () => {
  const errors = validateRegistration({ ...valid, email: 'name@mail' })
  expect(errors.email).toBe('Email is invalid')
})

  it('5 rejects a confirmPassword not looking like main one', () => {
    const errors = validateRegistration({ ...valid, confirmPassword: '0011234567' })
    expect(errors.confirmPassword).toBe('Passwords do not match')
  })
})