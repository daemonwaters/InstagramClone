import { createAsyncThunk } from "@reduxjs/toolkit";
import { databse, doc } from "../../../lib/firebase";
import { updateDoc } from "firebase/firestore";

type Params = {
  documentId: string;
  avatar_url: string;
};

export const ChangeAvatar = createAsyncThunk(
  "currentUser/changeAvatar",
  async (params: Params, { rejectWithValue }) => {
    const { documentId, avatar_url } = params;
    const userRef = doc(databse, "users", documentId);
    try {
      await updateDoc(userRef, { avatar_url });
      return avatar_url;
    } catch (error) {
      return rejectWithValue({
        message: "Failed. There was an error setting your new data.",
      });
    }
  }
);
