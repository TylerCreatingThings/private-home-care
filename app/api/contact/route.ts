import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to Sigal
    const { data, error } = await resend.emails.send({
      from: 'Private Home Care <onboarding@resend.dev>', // You'll update this with your domain
      to: ['sigal888@hotmail.com'],
      replyTo: email,
      subject: `Contact Form Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
        </ul>
        
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><small>This message was submitted through privatehomecare.com contact form</small></p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Contact email sent successfully:', data)

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        id: data?.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

