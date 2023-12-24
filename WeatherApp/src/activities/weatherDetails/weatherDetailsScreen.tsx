import {
  Text,
  Button,
  SafeAreaView,
  Image,
  ImageBackground,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/reduxHooks';
import {IGetWeatherDetails} from '../../store/weatherDetails/weatherDetails.types';
import {getWeatherDetailsAction} from '../../store/weatherDetails/weatherDetails.actions';
import useGetCoordinates from '../../hooks/useGetCoordinates';
import {fetchCoordinates} from '../../utils/fetchCoordinates';
import LoadingIndicatior from '../../components/shared/loadingIndicatior';
import {styles} from './weatherDetailsScreenStyles';
import {IMAGE_BASE_URL} from '../../constants/apiConstants';

const WeatherDetailsScreen = () => {
  const dispatch = useAppDispatch();

  const weatherData = useAppSelector(
    state => state.weatherDetailsReducer?.weatherDetails,
  );

  const isError = useAppSelector(state => state.weatherDetailsReducer?.error);

  const apiLoading = useAppSelector(
    state => state.weatherDetailsReducer?.loading,
  );
  const permissionLoading = useAppSelector(
    state => state.weatherDetailsLoaderReducer?.permissionLoader,
  );
  const geoLocationLoading = useAppSelector(
    state => state.weatherDetailsLoaderReducer?.geolocationLoader,
  );
  const coordinates = useGetCoordinates();

  useEffect(() => {
    if (coordinates?.latitude && coordinates?.longitude) {
      const data: IGetWeatherDetails = {
        latitude: coordinates?.latitude,
        longitude: coordinates?.longitude,
      };

      dispatch(getWeatherDetailsAction(data));
    }
  }, [coordinates]);

  const refreshData = async () => {
    const data = await fetchCoordinates();
    if (data) {
      dispatch(getWeatherDetailsAction(data));
    }
  };

  if (permissionLoading || geoLocationLoading || apiLoading)
    return (
      <LoadingIndicatior
        permissionLoading={permissionLoading}
        geoLocationLoading={geoLocationLoading}
        apiLoading={apiLoading}
      />
    );

  if (isError) {
    return (
      <SafeAreaView>
        <Text>Something went wrong</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.backgroundImage}
        blurRadius={10}
        source={require('../../assets/background.jpg')}>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `${IMAGE_BASE_URL}/${weatherData?.weather[0].icon}@4x.png`,
          }}
        />
        <View>
          <Text style={styles.cityText}>{weatherData?.name}</Text>
          <View style={styles.countryContainer}>
            <Text style={styles.countryText}>{weatherData?.sys.country}</Text>
          </View>
        </View>

        <Text style={styles.descriptionText}>
          {weatherData?.weather[0].description}
        </Text>
        <Text style={styles.temperatureText}>{weatherData?.main.temp} °C</Text>
        <Button title="Refresh" onPress={refreshData} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WeatherDetailsScreen;
