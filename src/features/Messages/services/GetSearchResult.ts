import { createAsyncThunk } from "@reduxjs/toolkit";
import { databse, collection, query, getDocs } from "../../../lib/firebase";
import { SearchResultData } from "../slices/inboxSlice";

export const GetSearchResult = createAsyncThunk(
  "inbox/getSearchResult",
  async (_, { rejectWithValue }) => {
    const searchResultQuery = query(collection(databse, "users"));
    const allUsers: Array<SearchResultData> = [];
    try {
      const snapshots = await getDocs(searchResultQuery);
      if (!snapshots.empty) {
        snapshots.forEach((doc) => {
          allUsers.push({
            username: doc.get("username"),
            id: doc.get("uid"),
            avatar: doc.get("avatar_url"),
          });
        });
        return allUsers;
      }

      return [];
    } catch (error) {
      return rejectWithValue(
        "Error. Failed to get the search result. " + error
      );
    }
  }
);
