import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export async function POST(request: Request) {
  const { room_id, name, email, phone, guests, date_from, date_to } = await request.json();

  const { data, error } = await supabase.from("bookings").insert([
    { room_id, name, email, phone, guests, date_from, date_to }
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, booking: data?.[0] || {} });
} 