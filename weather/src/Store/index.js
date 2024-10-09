import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./Slice/WeatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
