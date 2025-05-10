import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";
import { sendBookingConfirmationEmail } from "./confirmationEmail";

export async function POST(request: Request) {
  try {
    const { room_id, name, email, phone, guests, date_from, date_to } = await request.json();

    const { data, error } = await supabase.from("bookings").insert([
      { room_id, name, email, phone, guests, date_from, date_to }
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Send email via separated function
    await sendBookingConfirmationEmail({
      name,
      email,
      room_id,
      guests,
      date_from,
      date_to
    });

    return NextResponse.json({ success: true, booking: data?.[0] || {} });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Failed to process booking' }, { status: 500 });
  }
}
