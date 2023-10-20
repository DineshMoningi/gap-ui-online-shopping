import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/store";
interface IHomeState {}
const initialState: IHomeState = {
  searchResults: [],
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
});

const homeSelector = (state: RootState) => state.home;

export default homeSlice.reducer;
