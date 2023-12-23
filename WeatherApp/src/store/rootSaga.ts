import {all} from 'redux-saga/effects';
import {weatherDetailsSaga} from './weatherDetails/weatherDetails.saga';

export default function* RootSaga() {
  yield all([weatherDetailsSaga()]);
}
