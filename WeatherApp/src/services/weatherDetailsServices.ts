import API from '../api/config';
import {IGetWeatherDetails} from '../store/weatherDetails/weatherDetails.types';
import {APP_ID} from '@env';
const getWeatherDetailsFromApi = async (data: IGetWeatherDetails) => {
  const {latitude, longitude} = data;

  const response = await API.get(
    `weather?lat=${latitude}&lon=${longitude}&appid=${APP_ID}`,
  );

  console.log('response', response.data);
  return response;
};

export const weatherDetailsServices = {
  getWeatherDetailsFromApi,
};
