import { UserCredential } from "../../../lib/firebase";
import { collection, addDoc, databse } from "../../../lib/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
type Payload = {
  userCredential: UserCredential;
  signal: React.Dispatch<SetStateAction<boolean>>;
};

export const AddUsertoFiretore = createAsyncThunk(
  "auth/signup",
  async (payload: Payload, { rejectWithValue }) => {
    const { userCredential, signal } = payload;
    const { uid, email } = userCredential.user;
    const username = email!.replace(/@.*$/, "");
    try {
      const document = await addDoc(collection(databse, "users"), {
        username: username,
        avatar_url:
          "https://firebasestorage.googleapis.com/v0/b/instagramclone-1a1d7.appspot.com/o/defaults%2Fprofile-placeholder.jpeg?alt=media&token=c44aa3d8-97d0-410b-9abe-494a8e038177",
        bio: "Hello im new to instagram!",
        posts: [],
        following: [],
        followers: [],
        uid: uid,
      });
      signal(true);
      return document.id;
    } catch (error) {
      return rejectWithValue("Something went wrong, Signup failed.");
    }
  }
);
