import {Alert, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import store from '../store/store';
import {
  resetLoaderAction,
  setGeoLocationLoaderAction,
  setPermissionLoaderAction,
} from '../store/weatherDetailsLoader/weatherDetailsLoader.actions';

export const fetchCoordinates = () => {
  return new Promise(async (resolve, reject) => {
    try {
      store.dispatch(setPermissionLoaderAction());
      const permissionStatus = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (permissionStatus === PermissionsAndroid.RESULTS.GRANTED) {
        store.dispatch(setGeoLocationLoaderAction());
        Geolocation.getCurrentPosition(
          position => {
            console.log('position====', position);
            if (position.coords.latitude && position.coords.longitude) {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
              store.dispatch(resetLoaderAction());
            } else {
              resolve(null);
            }
          },
          error => {
            reject(error);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else if (permissionStatus === PermissionsAndroid.RESULTS.DENIED) {
        Alert.alert(
          'Permission Denied',
          'Please allow permission to access location',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Permission Denied'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => fetchCoordinates().then(resolve).catch(reject),
            },
          ],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.error('Error getting coordinates:', error);
      reject(error);
    }
  });
};
