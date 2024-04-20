import {
  createUserWithEmailAndPassword,
  getAuth,
  Auth,
  UserCredential,
} from "firebase/auth";
import { app } from "../../../lib/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SetStateAction } from "react";

const auth: Auth = getAuth(app);

type Payload = {
  username: string;
  password: string;
  signal: React.Dispatch<SetStateAction<boolean>>;
};

export const signUpUser = createAsyncThunk(
  "currentUser/signup",
  async (user: Payload, { rejectWithValue }) => {
    try {
      const { username, password, signal } = user;
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, username, password);
      signal(true);
      return userCredential;
    } catch (error: unknown) {
      return rejectWithValue({
        message: "Something went wrong, Signup failed.",
      });
    }
  }
);
