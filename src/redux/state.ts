import { combineReducers, createStore, applyMiddleware } from "redux";
import { convertReducer } from './convertReducer';
import thunkMiddleware from "redux-thunk"
import { currencyReducer } from "./currencyReducer";

const reducers = combineReducers({
    convert: convertReducer,
    currency: currencyReducer,
});
export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;