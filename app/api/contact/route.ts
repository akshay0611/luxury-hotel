import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/utils/supabase/client';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Insert into database
    const { data, error } = await supabase.from("contact_messages").insert([
      {
        name,
        email,
        phone,
        subject,
        message,
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: 'Failed to save your message' },
        { status: 500 }
      );
    }

    // Send confirmation email
    await resend.emails.send({
      from: 'Luxury Hotel <onboarding@resend.dev>',
      to: [email],
      subject: 'We Received Your Enquiry - Luxury Hotel',
      html: `
        <h1>Thank You for Contacting Us</h1>
        <p>Dear ${name},</p>
        <p>We have received your enquiry and would like to thank you for writing to us.</p>
        <p>Our team will review your message and get back to you shortly.</p>
        <p>Here's a summary of your enquiry:</p>
        <ul>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>If you have any additional questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>The Luxury Hotel Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message' },
      { status: 500 }
    );
  }
} 