import {weatherDetailsLoaderConstants} from './weatherDetailsLoader.constants';

const initialState = {
  permissionLoader: false,
  geolocationLoader: false,
};

export function weatherDetailsLoaderReducer(state = initialState, action: any) {
  switch (action.type) {
    case weatherDetailsLoaderConstants.SET_PERMISSION_LOADER:
      return {
        ...state,
        permissionLoader: true,
      };
    case weatherDetailsLoaderConstants.SET_GEOLOCATION_LOADER:
      return {
        ...state,
        permissionLoader: false,
        geolocationLoader: true,
      };
    case weatherDetailsLoaderConstants.RESET_LOADER:
      return {
        ...state,
        permissionLoader: false,
        geolocationLoader: false,
      };
    default:
      return state;
  }
}
