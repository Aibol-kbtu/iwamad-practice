import { describe, it, expect } from 'vitest';
import { validateSignup } from './validateSignup';
import type { SignupValues } from './validateSignup';

describe('validateSignup', () => {
  const validValues: SignupValues = {
    fullName: 'Aliya Nurlanovna',
    email: 'aliya@example.com',
    tickets: '2',
  };

  it('accepts valid signup values', () => {
    expect(validateSignup(validValues, 10)).toEqual({});
  });

  it('rejects a name shorter than two characters', () => {
    expect(
      validateSignup({ ...validValues, fullName: 'A' }, 10).fullName
    ).toBe('Enter your full name');
  });

  it('rejects an invalid email', () => {
    expect(
      validateSignup({ ...validValues, email: 'invalid-email' }, 10).email
    ).toBe('Enter a valid email, like name@example.com');
  });

  it('rejects fewer than one ticket', () => {
    expect(
      validateSignup({ ...validValues, tickets: '0' }, 10).tickets
    ).toBe('Choose 1 to 4 tickets');
  });

  it('rejects more than four tickets', () => {
    expect(
      validateSignup({ ...validValues, tickets: '5' }, 10).tickets
    ).toBe('Choose 1 to 4 tickets');
  });

  it('rejects more tickets than the available seats', () => {
    expect(
      validateSignup({ ...validValues, tickets: '3' }, 2).tickets
    ).toBe('Only 2 seats left');
  });
  
  it('rejects a non-integer ticket count', () => {
    expect(
      validateSignup({ ...validValues, tickets: '1.5' }, 10).tickets
    ).toBe('Choose 1 to 4 tickets');
  });

  it('accepts four tickets when enough seats are available', () => {
    expect(
      validateSignup({ ...validValues, tickets: '4' }, 10)
    ).toEqual({});
  });

});
