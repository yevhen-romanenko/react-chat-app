import {FETCH_MESSAGE_SUCCESS} from "./actionTypes";

const initialState = {
    messageData: {
        id: '',
        user: '',
        avatar: '',
        created_at: '',
        message: '',
        marked_read: false
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_MESSAGE_SUCCESS: {
            const { messageData } = action.payload;
            return {
                ...state,
                messageData
            };
        }

        default:
            return state;
    }
}