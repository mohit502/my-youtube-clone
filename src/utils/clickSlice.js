import { createSlice } from "@reduxjs/toolkit";

const clickSlice = createSlice({
  name: "click",
  initialState: {
    clicked:[]
    
  },
  reducers: {
    addQuery : (state, action) => {
      state.clicked.push(action.payload)
    },
    deleteQuery: (state, action) => {
      state.clicked.pop();
    }
  },
});

export const {addQuery, deleteQuery} = clickSlice.actions;

export default clickSlice.reducer;