import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sitebarReducer from "./sitebarReducer";

let reducers = combineReducers({
    profileInformation: profileReducer,
    messagesInformation: messagesReducer,
    sitebarInformation: sitebarReducer
});
let store = createStore(reducers);


export default store;