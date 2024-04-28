import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoc, doc, databse } from "../../../lib/firebase";

export const GetMyPostsFromFirestore = createAsyncThunk(
  "currentUser/getPosts",
  async (docId: string, { rejectWithValue }) => {
    const userRef = doc(databse, "users", docId);

    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        console.log(docSnap.get("posts"));
        return docSnap.get("posts");
      } else {
        throw new Error();
      }
    } catch (error) {
      return rejectWithValue(
        "There was an error getting your posts from database"
      );
    }
  }
);
