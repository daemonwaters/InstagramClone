import { useState } from "react";
import { useAppDispatch } from "./reduxHooks";
import {
  auth,
  UserCredential,
  createUserWithEmailAndPassword,
} from "../lib/firebase";
import { AddUsertoFiretore } from "../features/Users/services/AddUsertoFirestore";

type User = {
  username: string;
  password: string;
};

export function useSignUp() {
  const dispatch = useAppDispatch();
  const [successSignal, setSuccussSignal] = useState<boolean>(false);
  const signUpUser = async (user:User) => {
    try {
      const { username, password } = user;
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, username, password);
      dispatch(AddUsertoFiretore({ userCredential, signal: setSuccussSignal }));
    } catch (error) {
      console.log("There was an erorr in Signing user up , Error: " + error);
    }
  };

  return {signUpUser, successSignal};
}
