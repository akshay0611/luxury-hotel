"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { getRoomById, type Room } from "@/utils/supabase/rooms"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { format } from "date-fns"

export default function BookingConfirmContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  const roomId = Number(searchParams.get("room"))
  const from = searchParams.get("from")
  const to = searchParams.get("to")
  const guests = searchParams.get("guests")

  const [room, setRoom] = useState<Room | null>(null)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    async function fetchRoom() {
      if (!roomId) return
      setLoading(true)
      try {
        const data = await getRoomById(roomId)
        setRoom(data)
      } catch (e) {
        toast({
          title: "Error",
          description: "Could not load room details.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }
    fetchRoom()
  }, [roomId, toast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    toast({
      title: "Booking Confirmed!",
      description: "Thank you for your reservation. We look forward to your stay!",
      variant: "default",
    })
    setTimeout(() => router.push("/"), 3000)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!room) {
    return <div className="min-h-screen flex items-center justify-center text-destructive">Room not found.</div>
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
        <p className="mb-2">Thank you for your reservation. We look forward to your stay!</p>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Confirm Your Booking</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/2 h-48 md:h-56 rounded-lg overflow-hidden">
              <Image src={room.image} alt={room.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">{room.name}</h2>
              <p className="text-gray-600 mb-2">{room.description}</p>
              <div className="mb-2">
                <span className="font-semibold">Guests:</span> {guests}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Dates:</span> {from && to ? `${format(new Date(from), "LLL dd, y")} - ${format(new Date(to), "LLL dd, y")}` : "-"}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Price per night:</span> ${room.price}
              </div>
            </div>
          </div>
        </div>
        <form className="bg-white rounded-xl shadow-lg p-6" onSubmit={handleSubmit}>
          <h3 className="text-lg font-semibold mb-4">Your Details</h3>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} required className="mt-1" />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1" />
          </div>
          <div className="mb-6">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={phone} onChange={e => setPhone(e.target.value)} required className="mt-1" />
          </div>
          <Button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:bg-primary/90 transition-all duration-300">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  )
} 