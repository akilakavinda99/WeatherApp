import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import WeatherDetailsScreen from './src/activities/weatherDetails/weatherDetailsScreen';
import {PermissionsAndroid} from 'react-native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <WeatherDetailsScreen />
    </Provider>
  );
}

export default App;
