import { createAsyncThunk } from "@reduxjs/toolkit";
import { timelineGateway } from "../infra/fake-timeline.gateway";

export const getAuthUserTimeline = createAsyncThunk("timelines/getAuthUserTimeline", async () => {
    const { timeline } = await timelineGateway.getAuthUserTimeline({ userId: "Alice" });
    return timeline
});