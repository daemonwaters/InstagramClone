import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetSearchResult } from "../services/GetSearchResult";
import { CreateRoom } from "../services/CreateRoom";
import { SendMessage } from "../services/SendMessage";
import { GetMyRooms } from "../services/GetMyRooms";

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

const initialState: InitialState = {
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

const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    setModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.isModalOnScreen = action.payload;
    },
    setChatActivity: (state, action: PayloadAction<boolean>) => {
      state.isChatActive = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    selectUserToChat: (state, action: PayloadAction<SearchResultData>) => {
      state.selectedUser = action.payload;
    },
    setCurrentRoom: (state, action: PayloadAction<string>) => {
      state.currentRoom = state.rooms.find(
        (room) => room.roomId === action.payload
      ) as Room;
    },
    setCurrentMessage: (state, action: PayloadAction<Message>) => {
      state.currentMessage = action.payload;
    },
    clearCurrentMessage: (state) => {
      state.currentMessage = {
        sender: "",
        senderId: "",
        content: "",
        status: "idle",
        messageId: "",
      };
    },
    clearCurrentRoom: (state) => {
      state.currentRoom = null;
    },
    clearSearchValue: (state) => {
      state.searchValue = "";
    },
    clearSelectedUserToChat: (state) => {
      state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetSearchResult.pending, (state) => {
        state.searchResult.status = "pending";
      })
      .addCase(GetSearchResult.rejected, (state, { payload }) => {
        state.searchResult.error = { message: payload as string };
        state.searchResult.status = "fail";
      })
      .addCase(
        GetSearchResult.fulfilled,
        (state, action: PayloadAction<Array<SearchResultData>>) => {
          state.searchResult.data = action.payload;
          state.searchResult.status = "succuss";
        }
      )
      .addCase(CreateRoom.fulfilled, (state, action: PayloadAction<Room>) => {
        state.rooms.push(action.payload);
        state.currentRoom = state.rooms.find(
          (room) => room.roomId === action.payload.roomId
        ) as Room;
      })
      .addCase(SendMessage.pending, (state) => {
        state.currentMessage.status = "pending";
        state.currentRoom?.messages.push(state.currentMessage);
      })
      .addCase(SendMessage.rejected, (state) => {
        const filteredMessages = [...state.currentRoom!.messages].filter(
          (msg) => msg.messageId !== state.currentMessage.messageId
        );
        state.currentRoom!.messages = filteredMessages;
        state.currentMessage.status = "fail";
        state.currentRoom?.messages.push(state.currentMessage);
        state.currentMessage = {
          sender: "",
          senderId: "",
          content: "",
          status: "idle",
          messageId: "",
        };
      })
      .addCase(SendMessage.fulfilled, (state, { payload }) => {
        const filteredMessages = [...state.currentRoom!.messages].filter(
          (msg) => msg.messageId !== state.currentMessage.messageId
        );
        state.currentRoom!.messages = filteredMessages;
        state.currentMessage.status = "succuss";
        state.currentRoom?.messages.push(state.currentMessage);
        state.rooms
          .find((room) => room.roomId == payload)
          ?.messages.push(state.currentMessage);
        state.currentMessage = {
          sender: "",
          senderId: "",
          content: "",
          status: "idle",
          messageId: "",
        };
      })
      .addCase(
        GetMyRooms.fulfilled,
        (state, action: PayloadAction<Array<Room>>) => {
          state.rooms = action.payload;
        }
      );
  },
});

const inboxSliceReducer = inboxSlice.reducer;
export const {
  setSearchValue,
  setModalVisibility,
  setChatActivity,
  selectUserToChat,
  clearSearchValue,
  clearSelectedUserToChat,
  setCurrentRoom,
  clearCurrentRoom,
  setCurrentMessage,
  clearCurrentMessage,
} = inboxSlice.actions;
export default inboxSliceReducer;
