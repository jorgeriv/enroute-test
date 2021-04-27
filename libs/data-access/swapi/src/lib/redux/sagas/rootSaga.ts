import { takeLatest } from 'redux-saga/effects';
import { handleGetPeople } from './handlers/people';
import { getPeople } from '../peopleSlice';

export function* watcherSaga() {
  yield takeLatest(getPeople.type, handleGetPeople);
}
