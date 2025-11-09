import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, procedure, surgeryDate, careType, duration, message } = body

    // Validate required fields
    if (!name || !email || !phone || !procedure || !surgeryDate || !careType || !duration) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.error('Resend API key not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us at 416-303-4390' },
        { status: 503 }
      )
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email to Sigal
    const { data, error } = await resend.emails.send({
      from: 'Private Home Care <onboarding@resend.dev>', // You'll update this with your domain
      to: ['sigal888@hotmail.com'],
      replyTo: email,
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Nursing Care Booking Request</h2>
        
        <h3>Patient Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
        
        <h3>Procedure Details:</h3>
        <ul>
          <li><strong>Procedure Type:</strong> ${procedure}</li>
          <li><strong>Surgery Date:</strong> ${surgeryDate}</li>
          <li><strong>Care Type Needed:</strong> ${careType}</li>
          <li><strong>Duration:</strong> ${duration} days</li>
        </ul>
        
        ${message ? `
        <h3>Additional Information:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        ` : ''}
        
        <hr>
        <p><small>This booking request was submitted through privatehomecare.com</small></p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Booking email sent successfully:', data)

    return NextResponse.json(
      { 
        message: 'Booking request sent successfully',
        id: data?.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking' },
      { status: 500 }
    )
  }
}

