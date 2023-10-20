import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/store";
interface ISearchState {}
const initialState: ISearchState = {
  searchResults: [],
};

const searchSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
});

const searchSelector = (state: RootState) => state.search;

export default searchSlice.reducer;
