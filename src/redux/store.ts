import {combineReducers, createStore} from 'redux';
import { cartReducer, filterReducer, pizzasReducer } from './reducers';

const rootReducer = combineReducers({
    filters: filterReducer,
    // pizzas: pizzasReducer,
    // cart: cartReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;
//@ts-ignore
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//@ts-ignore
window.store = store