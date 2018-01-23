import { createStore, combineReducers } from 'redux'
import { messagesReducer, matchesReducer } from './reducers'


const rootReducer = combineReducers({
  messages: messagesReducer,
  matches: matchesReducer,
});


var store = createStore(rootReducer);

export default store;
