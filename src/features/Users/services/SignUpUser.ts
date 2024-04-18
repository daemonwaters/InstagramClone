import {
  createUserWithEmailAndPassword,
  getAuth,
  Auth,
  UserCredential,
} from "firebase/auth";
import { app } from "../../../lib/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";

const auth: Auth = getAuth(app);

type UserInfo = {
  username: string;
  password: string;
};

export const signUpUser = createAsyncThunk(
  "currentUser/signup",
  async (user: UserInfo, { rejectWithValue }) => {
    try {
      const { username, password } = user;
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, username, password);
      return userCredential;
    } catch (error: unknown) {
      return rejectWithValue({
        message: "Something went wrong, Signup failed.",
      });
    }
  }
);
