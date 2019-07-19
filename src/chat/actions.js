import { ADD_MESSAGE, UPDATE_MESSAGE, FETCH_MESSAGES } from "./actionTypes";
import service from '../userList/service';



export const addMessage = data => ({
    type: ADD_MESSAGE,
    payload: {
        id: service.getNewId(),
        data
    }
});

export const updateMessage = (id, data) => ({
    type: UPDATE_MESSAGE,
    payload: {
        id,
        data
    }
});


export const fetchMessages = () => ({
    type: FETCH_MESSAGES

});