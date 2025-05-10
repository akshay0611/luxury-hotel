"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, type CustomComponents } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays
      numberOfMonths={2}
      className={cn(
        "p-4 rounded-xl bg-white shadow-lg",
        className
      )}
      classNames={{
        table: "w-full border-collapse table-fixed min-w-[320px]",
        head_cell: "text-muted-foreground font-semibold text-base py-2 text-center",
        cell: "h-12 w-12 text-center text-lg p-0 m-0 align-middle",
        day: "h-12 w-12 p-0 font-normal rounded-full hover:bg-primary/10 focus:bg-primary/20 transition-colors",
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }