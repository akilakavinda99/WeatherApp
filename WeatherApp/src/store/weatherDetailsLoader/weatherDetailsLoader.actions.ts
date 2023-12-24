import {weatherDetailsLoaderConstants} from './weatherDetailsLoader.constants';

export const setPermissionLoaderAction = () => ({
  type: weatherDetailsLoaderConstants.SET_PERMISSION_LOADER,
});

export const setGeoLocationLoaderAction = () => ({
  type: weatherDetailsLoaderConstants.SET_GEOLOCATION_LOADER,
});

export const resetLoaderAction = () => ({
  type: weatherDetailsLoaderConstants.RESET_LOADER,
});
