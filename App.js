import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DateTime from './component/DateTime';
import { styles } from './styles';
import WeatherScroll from './component/WeatherScroll';
import React, { useState, useEffect } from 'react';

const img = require('./assets/bgimg5.jpg');

export default function App() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;
        fetchDataFromApi(latitude, longitude);
        console.log(latitude, longitude);
        console.log(success);
      });
    } else {
      console.log('Geolocation is not supported');
    }
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=49cc8c821cd2aff9af04c9f98c36eb74`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showWeatherData(data);
      });
  };

  return (
    <View style={styles.containerApp}>
      <ImageBackground source={img} style={styles.bgimgApp}>
        <DateTime />
        <WeatherScroll />
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
  );
}
