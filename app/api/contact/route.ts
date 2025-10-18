import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const validation = contactSchema.safeParse(body)
    
    if (!validation.success) {
      const errorMessages = validation.error.errors.map(err => err.message).join(', ')
      return NextResponse.json(
        { error: `Validation failed: ${errorMessages}` },
        { status: 400 }
      )
    }

    const { name, email, message } = validation.data

    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Form submitted successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}