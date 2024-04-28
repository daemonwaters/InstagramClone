import { createAsyncThunk } from "@reduxjs/toolkit";
import { databse, doc, updateDoc, arrayUnion } from "../../../lib/firebase";
import { v4 } from "uuid";
import { ActiveFilter, CustomClass } from "../slices/editSlice";

export type PostInfo = {
  authorId: string;
  author: string;
  avatar: string;
  caption: string;
  content_url: string;
  editValue: {
    filter: ActiveFilter;
    customClass: CustomClass;
  };
};

export const sharePost = createAsyncThunk(
  "post/sharePost",
  async (post: PostInfo, { rejectWithValue }) => {
    const { authorId, caption, author, content_url, avatar, editValue } = post;
    const authorRef = doc(databse, "users", authorId);
    const newPost = {
      author,
      caption,
      content_url,
      avatar,
      createdAt: new Date().getTime(),
      likes_count: 0,
      id: v4(),
      editValue,
    };
    try {
      await updateDoc(authorRef, {
        posts: arrayUnion(newPost),
      });

      return newPost.id;
    } catch (error) {
      return rejectWithValue("Failed.There was an erorr uploading your post.");
    }
  }
);
