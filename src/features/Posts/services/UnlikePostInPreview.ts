import { createAsyncThunk } from "@reduxjs/toolkit";
import { databse, doc, updateDoc } from "../../../lib/firebase";
import { Post } from "../../Users/slices/currentUserSlice";

type Params = {
  authorId: string;
  currentUserId: string;
  postToUpdate: Post;
  posts: Array<Post>;
};

export const UnlikePostInPreview = createAsyncThunk(
  "postPreview/unlikePost",
  async (params: Params, { rejectWithValue }) => {
    const authorRef = doc(databse, "users", params.authorId);
    const existingPosts = params.posts.filter(
      (post) => post.id !== params.postToUpdate.id
    );
    try {
      await updateDoc(authorRef, {
        posts: [
          ...existingPosts,
          {
            ...params.postToUpdate,
            likes_count: params.postToUpdate.likes_count - 1,
            likedBy: [...params.postToUpdate.likedBy].filter(
              (id) => id !== params.currentUserId
            ),
          },
        ],
      });
    } catch (error) {
      return rejectWithValue("Error, Failed to unlike the post" + error);
    }
  }
);
