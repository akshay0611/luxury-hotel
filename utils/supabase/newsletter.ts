import { supabase } from './client';
import { Resend } from 'resend';

export type NewsletterFormData = {
  email: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

// Function to send welcome email using Resend
async function sendWelcomeEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Luxury Hotel <welcome@luxuryhotel.com>',
      to: [email],
      subject: 'Welcome to Luxury Hotel Newsletter!',
      html: `
        <h1>Welcome to Luxury Hotel!</h1>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>Stay tuned for exclusive deals, updates, and more!</p>
        <p>If you have any questions, feel free to contact us at <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a>.</p>
        <p>Best regards,<br>The Luxury Hotel Team</p>
      `,
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      throw new Error('Failed to send welcome email.');
    }

    return data;
  } catch (error) {
    console.error('Error in sendWelcomeEmail:', error);
    throw error;
  }
}

export async function submitNewsletterForm(formData: NewsletterFormData) {
  // Normalize email to avoid mismatches (trim whitespace, convert to lowercase)
  const normalizedEmail = formData.email.trim().toLowerCase();

  // Check if the email is already subscribed
  const { data: existingSubscriber, error: checkError } = await supabase
    .from('newsletter_subscribers')
    .select('email')
    .eq('email', normalizedEmail)
    .maybeSingle();

  if (checkError) {
    console.error('Error checking subscription status:', checkError);
    throw new Error('Failed to check subscription status. Please try again.');
  }

  if (existingSubscriber) {
    throw new Error('This email is already subscribed to the newsletter.');
  }

  // Insert new subscription
  const { data, error } = await supabase.from('newsletter_subscribers').insert([
    {
      email: normalizedEmail,
      subscribed_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error('Error inserting subscription:', error);
    throw new Error('Failed to subscribe to the newsletter. Please try again.');
  }

  // Send welcome email after successful subscription
  try {
    await sendWelcomeEmail(normalizedEmail);
  } catch (emailError) {
    console.error('Failed to send welcome email, but subscription was successful:', emailError);
    // Optionally, you can decide whether to throw an error here or just log it
    // For now, we'll log the error but not fail the subscription
  }

  return data;
}