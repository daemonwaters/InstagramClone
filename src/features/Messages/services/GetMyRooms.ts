import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  databse,
  collection,
  query,
  getDocs,
  where,
} from "../../../lib/firebase";
import { Room } from "../slices/inboxSlice";

export const GetMyRooms = createAsyncThunk(
  "inbox/getRooms",
  async (username: string, { rejectWithValue }) => {
    const roomsQuery = query(
      collection(databse, "rooms"),
      where("between", "array-contains", username)
    );
    const rooms: Array<Room> = [];
    try {
      const snapshots = await getDocs(roomsQuery);
      if (!snapshots.empty) {
        snapshots.forEach((doc) => {
          rooms.push(doc.data() as Room);
        });
        return rooms;
      }

      return [];
    } catch (error) {
      return rejectWithValue("Error. Failed to get your rooms. " + error);
    }
  }
);
