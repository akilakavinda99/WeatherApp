import {combineReducers} from 'redux';
import {weatherDetailsReducer} from './weatherDetails/weatherDetails.reducer';
const rootReducer = combineReducers({
  weatherDetailsReducer,
});

export default rootReducer;
