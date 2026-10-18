import { useState, type ChangeEvent } from 'react'
import { type RegistrationValues } from '../lib/validateRegistration'
import Button from '../components/ui/Button'
import TextField from '../components/ui/TextField'

export default function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  return (
    <form className="form">
        <TextField
          label="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
      

      <div className="check">
        <input id="acceptTerms" name="acceptTerms" type="checkbox" checked={values.acceptTerms} onChange={handleChange} />
        <label htmlFor="acceptTerms">Accept Terms</label>
      </div>
      <Button type="submit" >Create account</Button>
    </form>
  )
}
