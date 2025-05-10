import { supabase } from './client';

export type RoomAmenity = {
  name: string;
  icon: string;
};

export type Room = {
  id: number;
  name: string;
  image: string;
  tag: string | null;
  rating: number;
  capacity: number;
  size: number;
  description: string;
  price: number;
  amenities: RoomAmenity[];
};

export async function getRooms(): Promise<Room[]> {
  const { data: rooms, error: roomsError } = await supabase
    .from('rooms')
    .select('*');

  if (roomsError) {
    console.error('Error fetching rooms:', roomsError);
    throw new Error('Failed to fetch rooms');
  }

  // Fetch amenities for each room
  const roomsWithAmenities = await Promise.all(
    rooms.map(async (room) => {
      const { data: amenities, error: amenitiesError } = await supabase
        .from('room_amenities')
        .select('*')
        .eq('room_id', room.id);

      if (amenitiesError) {
        console.error('Error fetching amenities:', amenitiesError);
        throw new Error('Failed to fetch room amenities');
      }

      return {
        ...room,
        amenities: amenities || [],
      };
    })
  );

  return roomsWithAmenities;
}

export async function getRoomById(id: number): Promise<Room | null> {
  const { data: room, error: roomError } = await supabase
    .from('rooms')
    .select('*')
    .eq('id', id)
    .single();

  if (roomError) {
    console.error('Error fetching room:', roomError);
    throw new Error('Failed to fetch room');
  }

  if (!room) return null;

  const { data: amenities, error: amenitiesError } = await supabase
    .from('room_amenities')
    .select('*')
    .eq('room_id', id);

  if (amenitiesError) {
    console.error('Error fetching amenities:', amenitiesError);
    throw new Error('Failed to fetch room amenities');
  }

  return {
    ...room,
    amenities: amenities || [],
  };
} 