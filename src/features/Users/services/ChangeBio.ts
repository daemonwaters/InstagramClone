import { createAsyncThunk } from "@reduxjs/toolkit";
import { databse, doc, updateDoc } from "../../../lib/firebase";

type Params = {
  documentId: string;
  new_bio: string;
};

export const ChangeBio = createAsyncThunk(
  "currentUser/changeBio",
  async (params: Params, { rejectWithValue }) => {
    const { documentId, new_bio } = params;
    const userRef = doc(databse, "users", documentId);
    try {
      await updateDoc(userRef, { bio: new_bio });
      return new_bio;
    } catch (error) {
      return rejectWithValue({
        message: "Failed. There was an error setting your new data.",
      });
    }
  }
);
