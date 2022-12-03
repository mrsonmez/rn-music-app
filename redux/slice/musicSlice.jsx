import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    search: "",
  },
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { changeSearch } = musicSlice.actions;
export default musicSlice.reducer;
