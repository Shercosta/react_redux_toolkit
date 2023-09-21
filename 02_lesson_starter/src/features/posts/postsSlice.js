import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Title Lorem 1",
    content: "Lorem Ipsum dolor sit amet",
  },
  {
    id: "2",
    title: "Title Lorem 2",
    content: "The way i am devouring those apples",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
