// import { combineReducers, createStore } from "redux";

// let loginStudent: any[] = [];
// function UserLogin(state = loginStudent, action: any) {
//     state = [...state];
//     if (action.type === "Logged-In") {
//         state.push(action.payload)
//     }
//     return state;
// }
// // Define rootReducer by combining reducers
// const rootReducer = combineReducers({ UserLogin });

// const store = createStore(rootReducer);

// export default store;
import { rootReducer } from "./signup/reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);
export default store;
