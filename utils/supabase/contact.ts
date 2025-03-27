// utils/supabase/contact.ts
import { supabase } from "./client";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export async function submitContactForm(formData: ContactFormData) {
  const { data, error } = await supabase.from("contact_messages").insert([
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    },
  ]);

  if (error) {
    throw new Error("Failed to send your message. Please try again.");
  }

  return data;
}