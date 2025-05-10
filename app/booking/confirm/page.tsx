import { Suspense } from "react";
import BookingConfirmContent from "./BookingConfirmContent";

export default function BookingConfirmPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingConfirmContent />
    </Suspense>
  );
} 