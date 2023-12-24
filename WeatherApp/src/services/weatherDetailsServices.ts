import API from '../api/config';
import {IGetWeatherDetails} from '../store/weatherDetails/weatherDetails.types';
import {APP_ID} from '@env';

const getWeatherDetailsFromApi = async (data: IGetWeatherDetails) => {
  const {latitude, longitude} = data;

  const response = await API.get(
    `weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`,
  );

  return response;
};

export const weatherDetailsServices = {
  getWeatherDetailsFromApi,
};
