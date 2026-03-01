import { create } from "zustand";

interface RoomStoreType {
  roomId: string;
  setRoomId: (value: string) => void;
  getRoomId: () => void;
}

function generateRoomId() {
  let roomId: number = Math.floor(Math.random() * (4000 - 1000) + 1000);
  return roomId.toString();
}
const useRoomStore = create<RoomStoreType>((set) => ({
  roomId: '',
  setRoomId: (value) => set({
    roomId: value
  }),
  getRoomId: () => set({
    roomId: generateRoomId()
  })
}));

export default useRoomStore;
