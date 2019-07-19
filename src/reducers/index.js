import { combineReducers } from "redux";
import userList from "../userList/reducer";
import userPage from "../userPage/reducer";
import chat from "../chat/reducer";
import messageEditor from "../messageEditor/reducer";

const rootReducer = combineReducers({
    userList,
    userPage,
    chat,
    messageEditor
});

export default rootReducer;