import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DateTime from './component/DateTime';
import { styles } from './styles';
import WeatherScroll from './component/WeatherScroll';
import React,{useState,useEffect} from 'react';

const img = require('./assets/bgimg5.jpg');

export default function App() {
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

