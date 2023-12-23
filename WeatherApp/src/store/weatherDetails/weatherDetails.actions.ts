import {weatherDetailsConstants} from './weatherDetails.constants';
import {IGetWeatherDetails} from './weatherDetails.types';

export const getWeatherDetailsAction = (data: IGetWeatherDetails) => ({
  type: weatherDetailsConstants.GET_WEATHER_DETAILS_REQUEST,
  payload: data,
});

export const getWeatherDetailsSuccessAction = (weatherDetails: any) => ({
  type: weatherDetailsConstants.GET_WEATHER_DETAILS_SUCCESS,
  payload: weatherDetails,
});

export const getWeatherDetailsFailureAction = (error: any) => ({
  type: weatherDetailsConstants.GET_WEATHER_DETAILS_FAILURE,
  payload: error,
});
