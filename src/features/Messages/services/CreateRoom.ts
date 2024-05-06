import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  databse,
  doc,
  setDoc,
} from "../../../lib/firebase";
import { Room, UserInfo } from "../slices/inboxSlice";
import { v4 } from "uuid";
type users<T = [string, string]> = {
  between: T;
  userInfos: [UserInfo, UserInfo];
};

export const CreateRoom = createAsyncThunk(
  "inbix/createRoom",
  async (params: users, { rejectWithValue }) => {
    const { between, userInfos } = params;
    const roomData: Room = { between, userInfos, messages: [], roomId: v4() };
    try {
      await setDoc(doc(databse, "rooms", roomData.roomId), roomData);
      return roomData;
    } catch (error) {
      return rejectWithValue(
        "Error , Failed to add the intended room. " + error
      );
    }
  }
);
