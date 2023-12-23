import {View, Text, Button, SafeAreaView} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../store/reduxHooks';
import {IGetWeatherDetails} from '../../store/weatherDetails/weatherDetails.types';
import {getWeatherDetailsAction} from '../../store/weatherDetails/weatherDetails.actions';

const WeatherDetailsScreen = () => {
  const dispatch = useAppDispatch();

  const weatherData = useAppSelector(
    state => state.weatherDetailsReducer?.weatherDetails,
  );

  console.log('weatherData====', weatherData);

  const data: IGetWeatherDetails = {
    latitude: 7.8731,
    longitude: 80.7718,
  };
  return (
    <SafeAreaView>
      <Text>WeatherDetailsScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => dispatch(getWeatherDetailsAction(data))}
      />
    </SafeAreaView>
  );
};

export default WeatherDetailsScreen;
