import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export async function POST(request: Request) {
  const { room_id, date_from, date_to } = await request.json();

  // Find bookings that overlap with the requested range for the specific room
  const { data, error } = await supabase
    .from("bookings")
    .select("id")
    .eq("room_id", room_id)
    .or(
      `and(date_from.lte.${date_to},date_to.gte.${date_from})`
    );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const available = !data || data.length === 0;
  return NextResponse.json({ available });
}