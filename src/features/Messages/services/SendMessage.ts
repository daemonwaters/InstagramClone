import { createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "../slices/inboxSlice";
import { arrayUnion, databse, doc, updateDoc } from "../../../lib/firebase";

type MessageParams = Omit<Message, "status"> & {
  roomId: string;
  messageId: string;
};

export const SendMessage = createAsyncThunk(
  "inbox/sendMessage",
  async (params: MessageParams, { rejectWithValue }) => {
    console.log("params " + params.sender);
    const { roomId, sender, senderId, content, messageId } = params;
    const roomRef = doc(databse, "rooms", roomId);
    try {
      await updateDoc(roomRef, {
        messages: arrayUnion({
          sender,
          senderId,
          content,
          messageId,
          status: "succuss",
        }),
      });
      return roomId;
    } catch (error) {
      return rejectWithValue("Error, Failed to send your message. " + error);
    }
  }
);
