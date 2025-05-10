import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/utils/supabase/client';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const normalizedEmail = email.trim().toLowerCase();

    // Check if the email is already subscribed
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', normalizedEmail)
      .maybeSingle();

    if (checkError) {
      return NextResponse.json(
        { error: 'Failed to check subscription status' },
        { status: 500 }
      );
    }

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 400 }
      );
    }

    // Insert new subscription
    const { data, error } = await supabase.from('newsletter_subscribers').insert([
      {
        email: normalizedEmail,
        subscribed_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: 'Failed to subscribe to the newsletter' },
        { status: 500 }
      );
    }

    // Send welcome email
    await resend.emails.send({
      from: 'Luxury Hotel <onboarding@resend.dev>',
      to: [normalizedEmail],
      subject: 'Welcome to Luxury Hotel Newsletter!',
      html: `
        <h1>Welcome to Luxury Hotel!</h1>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>Stay tuned for exclusive deals, updates, and more!</p>
        <p>If you have any questions, feel free to contact us at <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a>.</p>
        <p>Best regards,<br>The Luxury Hotel Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
} 