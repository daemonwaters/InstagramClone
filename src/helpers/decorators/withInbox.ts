import { createSlice } from "@reduxjs/toolkit";

export type SearchResultData<T = string> = {
  username: T;
  avatar: T;
  id: T;
};
type SearchResult = {
  error: null | { message: string };
  status: "idle" | "pending" | "succuss" | "fail";
  data: Array<SearchResultData>;
};

export type Message = {
  sender: string;
  senderId: string;
  content: string;
  status: "idle" | "pending" | "succuss" | "fail";
  messageId: string;
};

export type UserInfo<T = string> = {
  id: T;
  avatar: T;
  username: T;
};

export type Room = {
  between: [string, string];
  userInfos: [UserInfo, UserInfo];
  messages: Array<Message>;
  roomId: string;
};

type InitialState = {
  isModalOnScreen: boolean;
  isChatActive: boolean;
  searchValue: string;
  searchResult: SearchResult;
  selectedUser: null | SearchResultData;
  rooms: Array<Room>;
  currentRoom: null | Room;
  currentMessage: Message;
};

const MockInitialState: InitialState = {
  isModalOnScreen: false,
  isChatActive: false,
  searchValue: "",
  searchResult: {
    error: null,
    status: "idle",
    data: [],
  },
  selectedUser: null,
  rooms: [],
  currentRoom: null,
  currentMessage: {
    sender: "",
    senderId: "",
    content: "",
    status: "idle",
    messageId: "",
  },
};

const MockInboxSlice = createSlice({
  name: "inbox",
  initialState: MockInitialState,
  reducers: {},
  extraReducers: () => {},
});

const MockInboxSliceReducer = MockInboxSlice.reducer;
export default MockInboxSliceReducer;
