import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingConfirmationEmail({
  name,
  email,
  room_id,
  guests,
  date_from,
  date_to
}: {
  name: string;
  email: string;
  room_id: number;
  guests: number;
  date_from: string;
  date_to: string;
}) {
  try {
    await resend.emails.send({
      from: 'Luxury Hotel <onboarding@resend.dev>',
      to: [email],
      subject: 'Booking Confirmation - Luxury Hotel',
      html: `
        <h1>Booking Confirmed!</h1>
        <p>Dear ${name},</p>
        <p>Thank you for booking with Luxury Hotel.</p>
        <p><strong>Booking Details:</strong></p>
        <ul>
          <li>Room ID: ${room_id}</li>
          <li>Guests: ${guests}</li>
          <li>From: ${new Date(date_from).toLocaleDateString()}</li>
          <li>To: ${new Date(date_to).toLocaleDateString()}</li>
        </ul>
        <p>We look forward to hosting you!</p>
        <p>Best regards,<br>The Luxury Hotel Team</p>
      `
    });
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
  }
}
