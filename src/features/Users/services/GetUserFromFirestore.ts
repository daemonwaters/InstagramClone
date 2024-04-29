import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoc, doc, databse, collection } from "../../../lib/firebase";

export const GetUserFromFirestore = createAsyncThunk(
  "currentUser/getdata",
  async (docId: string, { rejectWithValue }) => {
    const userRef = doc(databse, "users", docId);

    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error();
      }
    } catch (error) {
      return rejectWithValue("There was an error getting user from databse");
    }
  }
);
