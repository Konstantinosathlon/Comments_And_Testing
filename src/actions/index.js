import { CHANG_AUTH, FETCH_COMMENTS, SAVE_COMMENT } from "actions/types";
import axios from "axios";

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments() {
    const response = axios.get("http://jsonplaceholder.typicode.com/comments");
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}
export function changeAuth(isLoggedIn) {
    return {
        type: CHANG_AUTH,
        payload: isLoggedIn
    };
}