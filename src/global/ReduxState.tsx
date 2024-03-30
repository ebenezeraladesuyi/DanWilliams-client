/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { iUnveiling } from "../types/Interface";


const initialState = {
    currentMember: {} as iUnveiling | null,
};

const ReduxState = createSlice({
    name: "swys",
    initialState,
    reducers: {
        User: (state, { payload } : PayloadAction<iUnveiling>) => 
        {
            state.currentMember = payload
        },
    },
});

export const { User } = ReduxState.actions;

export default ReduxState.reducer;