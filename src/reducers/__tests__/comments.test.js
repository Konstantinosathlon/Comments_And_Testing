import { SAVE_COMMENT } from "actions/types";
import commentsReducer from "reducers/comments";

it("handles actions of type SAVE_COMMENT", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "New comment"
    };
    const newState = commentsReducer([], action);

    expect(newState).toEqual(["New comment"]);
});
it("handles unknown action", () => {
    const action = {
        type: "test_COMMENT",
        payload: "hey"
    };
    const newState = commentsReducer([], action);

    expect(newState).toEqual([]);
});