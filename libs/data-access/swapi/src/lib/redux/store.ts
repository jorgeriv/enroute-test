import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import peopleMiddleware from './peopleMiddleware';

const sagaMiddleware = createSagaMiddleware();
export interface State {
  people: any;
}

const reducer = combineReducers({
  people: peopleReducer,
});

export const store: Store<State> = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
    peopleMiddleware,
  ],
});

sagaMiddleware.run(watcherSaga);

export default store;
