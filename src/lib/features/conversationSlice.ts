import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define the TS type for the counter slice's state
export interface ConversationState {
  conversationName: string;
  status: "idle" | "loading" | "failed";
}

// Define the initial value for the slice state
const initialState: ConversationState = {
  conversationName: "abc",
  status: "idle",
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    // Use the PayloadAction type to declare the contents of `action.payload`
    changeConversationName: (state, action: PayloadAction<string>) => {
      state.conversationName = action.payload;
    },
  },
});

// Export the generated action creators for use in components
export const { changeConversationName } = conversationSlice.actions;

// Export the slice reducer for use in the store configuration
export default conversationSlice.reducer;
