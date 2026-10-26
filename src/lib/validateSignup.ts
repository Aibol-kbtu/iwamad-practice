export type SignupValues = { 
    fullName: string; 
    email: string; 
    tickets: string 
}
export type SignupErrors = Partial<Record<keyof SignupValues, string>>
export function validateSignup(values: SignupValues, seatsLeft: number): SignupErrors {
    const errors: SignupErrors = {}
    const fullName = values.fullName.trim()
    const email = values.email.trim()
    const ticketCount = Number(values.tickets)

    if (fullName.length < 2) {
        errors.fullName = 'Enter your full name'
    }

    if (!email) {
        errors.email = 'Enter a valid email, like name@example.com'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Enter a valid email, like name@example.com'
    }

    
    if (!Number.isInteger(ticketCount) || ticketCount < 1 || ticketCount > 4) {
        errors.tickets = 'Choose 1 to 4 tickets'
    } else if (ticketCount > seatsLeft) {
        errors.tickets = `Only ${seatsLeft} seats left`
    }

    return errors
}