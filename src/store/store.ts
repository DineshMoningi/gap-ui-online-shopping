import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import loaderReducer from "../components/shared/loader/loaderSlice";
import homeReducer from "../components/pages/home/slice/homeSlice";
import searchSlice from "../components/pages/search/slice/searchSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    home: homeReducer,
    search: searchSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
