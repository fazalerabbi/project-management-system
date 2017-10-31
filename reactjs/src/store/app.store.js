import { createStore } from 'redux';
import RootReducer from '../reducers/root.reducer';

const Store = createStore(RootReducer);

export default Store;