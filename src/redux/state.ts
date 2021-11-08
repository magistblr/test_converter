import { combineReducers, createStore, applyMiddleware } from "redux";
import { currencyReducer } from './currencyReducer';
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    currency: currencyReducer,
});
export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;