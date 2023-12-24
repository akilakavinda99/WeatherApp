import {combineReducers} from 'redux';
import {weatherDetailsReducer} from './weatherDetails/weatherDetails.reducer';
import {weatherDetailsLoaderReducer} from './weatherDetailsLoader/weatherDetailsLoader.reducer';
const rootReducer = combineReducers({
  weatherDetailsReducer,
  weatherDetailsLoaderReducer,
});

export default rootReducer;
