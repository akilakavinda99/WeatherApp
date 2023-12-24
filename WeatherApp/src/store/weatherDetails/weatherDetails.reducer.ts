import {weatherDetailsConstants} from './weatherDetails.constants';
import {
  IGetWeatherDetails,
  IWeatheDetailsAction,
  IWeatherDetailsState,
} from './weatherDetails.types';

const initialState: IWeatherDetailsState = {
  weatherDetails: null,
  error: null,
  loading: false,
  payload: {} as IGetWeatherDetails,
};

export function weatherDetailsReducer(
  state = initialState,
  action: IWeatheDetailsAction,
) {
  switch (action.type) {
    case weatherDetailsConstants.GET_WEATHER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        payload: action.payload,
      };
    case weatherDetailsConstants.GET_WEATHER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherDetails: action.payload,
      };
    case weatherDetailsConstants.GET_WEATHER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
