import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import ILoader from "../../../interfaces/loader/ILoader";

const initialState: ILoader = {
  loading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

const loading = (state: RootState) => state.loader.loading;

const { setLoading } = loaderSlice.actions;

export { loading, setLoading };
export default loaderSlice.reducer;
