export interface IGetWeatherDetails {
  latitude: number | null;
  longitude: number | null;
}

export interface IWeatherDetailsState {
  weatherDetails: any;
  error: any;
  loading: boolean;
  payload: IGetWeatherDetails;
}

export interface IWeatheDetailsAction {
  type: string;
  payload?: any;
}
