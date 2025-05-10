"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { getRooms, type Room } from "@/utils/supabase/rooms"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"
import { DateRange } from "react-day-picker"

export default function BookingPageContent() {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })
  const [guests, setGuests] = useState(1)
  const [roomType, setRoomType] = useState("all")
  const [rooms, setRooms] = useState<Room[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    async function fetchRooms() {
      try {
        const roomsData = await getRooms()
        setRooms(roomsData)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load rooms. Please try again later.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchRooms()
  }, [toast])

  const handleSearch = () => {
    if (!date?.from || !date?.to) {
      toast({
        title: "Error",
        description: "Please select both check-in and check-out dates.",
        variant: "destructive",
      })
      return
    }

    if (date.from > date.to) {
      toast({
        title: "Error",
        description: "Check-out date must be after check-in date.",
        variant: "destructive",
      })
      return
    }

    setShowResults(true)
  }

  const filteredRooms = rooms.filter((room) => {
    if (roomType === "all") return true
    return room.name.toLowerCase().includes(roomType.toLowerCase())
  })

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Book Your Stay</h1>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Date Range */}
              <div className="space-y-2">
                <Label>Check-in / Check-out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date?.from && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick dates</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[700px] p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guest Count */}
              <div className="space-y-2">
                <Label>Guests</Label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center mx-2"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setGuests(guests + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Room Type */}
              <div className="space-y-2">
                <Label>Room Type</Label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  <option value="all">All Rooms</option>
                  <option value="standard">Standard Rooms</option>
                  <option value="deluxe">Deluxe Rooms</option>
                  <option value="suite">Suites</option>
                  <option value="family">Family Rooms</option>
                </select>
              </div>
            </div>

            <Button
              className="w-full mt-6 bg-primary text-white font-semibold py-3 rounded-full hover:bg-primary/90 transition-all duration-300"
              onClick={handleSearch}
            >
              Search Available Rooms
            </Button>
          </div>

          {/* Results */}
          {showResults && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Available Rooms</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredRooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover"
                      />
                      {room.tag && (
                        <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                          {room.tag}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                      <p className="text-gray-600 mb-4">{room.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xl font-bold">
                          ${room.price}
                          <span className="text-base font-normal text-gray-500">
                            /night
                          </span>
                        </div>
                        <Button
                          asChild
                          className="bg-primary text-white font-semibold px-5 py-2 rounded-full hover:bg-primary/90 transition-all duration-300"
                        >
                          <Link
                            href={`/booking/confirm?room=${room.id}&from=${date?.from?.toISOString()}&to=${date?.to?.toISOString()}&guests=${guests}`}
                          >
                            Select Room
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 