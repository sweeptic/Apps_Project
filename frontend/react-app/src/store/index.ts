import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commonReducer } from './common';

export const rootReducer = combineReducers({
  common: commonReducer,
  //    profile: profileReducer,
  //    auth: authReducer,
  //    etc...
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

declare global {
  type ApplicationState = ReturnType<typeof rootReducer>;

  type AppDispatch = typeof store.dispatch;

  type GetState = () => ApplicationState;
}
