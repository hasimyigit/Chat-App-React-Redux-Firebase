import {createStore,combineReducers} from 'redux';
import { authReducer } from './reducers/authReducer';
import { channelReducer } from './reducers/channelReducer';
import { messageReducer } from './reducers/messageReducer';
;

export default () => {
    const store = createStore(
        combineReducers({
            messages:messageReducer,

            auth: authReducer,
            channels:channelReducer,
           
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}