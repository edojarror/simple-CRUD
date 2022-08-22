import { combineReducers } from 'redux';
import gamesDataReducer from './gamesDataReducer';
import moviesDataReducer from './moviesDataReducer';

export default combineReducers({ gamesData : gamesDataReducer, moviesData : moviesDataReducer })