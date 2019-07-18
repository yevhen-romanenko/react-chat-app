import { combineReducers } from "redux";
import userList from "../userList/reducer";
import userPage from "../userPage/reducer";

const rootReducer = combineReducers({
    userList,
    userPage
});

export default rootReducer;