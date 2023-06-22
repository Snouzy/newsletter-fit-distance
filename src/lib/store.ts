import { configureStore } from "@reduxjs/toolkit";
import { timelineSlice } from "./timelines/slices/timelines.slice";

export const store = configureStore({
    reducer: timelineSlice.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                timelineGateway: ""
            }
        }
    })
})