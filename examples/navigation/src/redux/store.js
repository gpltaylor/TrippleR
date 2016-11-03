import { createStore, applyMiddleware, combineReducers} from "redux";
import { rrrMiddleware } from "trippler";

import reducers from "./reducers";

const store = createStore(
    combineReducers(reducers), 
    applyMiddleware(rrrMiddleware));

export default store;