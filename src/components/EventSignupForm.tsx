import { useState, type ChangeEvent, type SyntheticEvent, type FocusEvent } from 'react';
import { type CampusEvent } from '../data/events';
import { type SignupValues, validateSignup,} from '../lib/validateSignup';
import Button from '../components/ui/Button';
import TextField from '../components/ui/TextField';

type EventSignupFormProps = {
  event: CampusEvent;
};

export default function EventSignupForm({
  event,
}: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  });

  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [touched, setTouched] = useState<
    Partial<Record<keyof SignupValues, boolean>>
  >({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState('');

  const errors = validateSignup(values, seatsLeft);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setStatus('');
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const name = event.target.name as keyof SignupValues;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const ticketCount = Number(values.tickets);
    const fullName = values.fullName.trim();

    setSeatsLeft((current) => current - ticketCount);
    setStatus(`Booked: ${ticketCount} for ${fullName}.`);

    setValues({
      fullName: '',
      email: '',
      tickets: '1',
    });

    setTouched({});
    setSubmitAttempted(false);
  }

  return (
    <section>
      <p>Seats left: {seatsLeft}</p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {(touched.fullName || submitAttempted) && errors.fullName && (
          <p role="alert">{errors.fullName}</p>
        )}

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {(touched.email || submitAttempted) && errors.email && (
          <p role="alert">{errors.email}</p>
        )}

        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {(touched.tickets || submitAttempted) && errors.tickets && (
          <p role="alert">{errors.tickets}</p>
        )}

        <Button type="submit">Book</Button>
      </form>

      {status && <p role="status">{status}</p>}
    </section>
  );
}
