import { call, put } from 'redux-saga/effects';
import { requestGetPeople } from '../requests/people';
import { addPeople } from '../../peopleSlice';

export function* handleGetPeople(action) {
  try {
    const response = yield call(() => requestGetPeople(action.payload));
    const { data } = response;
    yield put(
      addPeople({
        availablePeople: data.count,
        people: data.results,
        next: data.next,
      })
    );
  } catch (error) {
    console.error(error);
  }
}
