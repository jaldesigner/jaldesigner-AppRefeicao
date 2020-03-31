import {createStore} from 'redux';
import rootReducers from '../models/rootReducer';

const Store = createStore(rootReducers);

export default Store;
