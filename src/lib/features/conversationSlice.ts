import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation, Message } from "../interface";

interface ConversationState {
  conversation: Conversation;
  messages: Message[];
}

const initialState: ConversationState = {
  conversation: {
    id: 0,
    title: "Conversation Name",
  },
  messages: [],
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    changeConversationName: (state, action: PayloadAction<Conversation>) => {
      state.conversation = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { changeConversationName, addMessage } = conversationSlice.actions;
export default conversationSlice.reducer;
