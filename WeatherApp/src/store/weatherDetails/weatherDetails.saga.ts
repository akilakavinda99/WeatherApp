import {call, takeEvery, put, take, select} from 'redux-saga/effects';
import {weatherDetailsConstants} from './weatherDetails.constants';
import {weatherDetailsServices} from '../../services/weatherDetailsServices';
import {IWeatheDetailsAction} from './weatherDetails.types';

export function* processingWeatherDetails(data: IWeatheDetailsAction) {
  try {
    var res = yield call(
      weatherDetailsServices.getWeatherDetailsFromApi,
      data.payload,
    );

    if (res.status == 200) {
      yield put({
        type: weatherDetailsConstants.GET_WEATHER_DETAILS_SUCCESS,
        payload: res.data,
      });
    } else {
      yield put({
        type: weatherDetailsConstants.GET_WEATHER_DETAILS_FAILURE,
      });
    }
  } catch (error) {
    yield put({
      type: weatherDetailsConstants.GET_WEATHER_DETAILS_FAILURE,
    });
  }
}

export function* weatherDetailsSaga(): any {
  yield takeEvery(
    weatherDetailsConstants.GET_WEATHER_DETAILS_REQUEST,
    processingWeatherDetails,
  );
}
