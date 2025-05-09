import { supabase } from './client';

export type NewsletterFormData = {
  email: string;
};

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

  return data;
}