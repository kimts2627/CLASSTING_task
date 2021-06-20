import { combineReducers } from "redux";
import quiz from "./quiz";
import results from "./results";

const rootReducer = combineReducers({ quiz, results });

export default rootReducer;
