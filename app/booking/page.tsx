import { Suspense } from "react";
import BookingPageContent from "./BookingPageContent";

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingPageContent />
    </Suspense>
  );
} 