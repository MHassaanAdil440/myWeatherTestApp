import React from 'react';
import {ScrollView } from 'react-native';
import { styles } from '../styles';
import CurrentTemp1 from './CurrentTemp1';
import Forecast from './Forecast';

const WeatherScroll = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <CurrentTemp1 />
      <Forecast />
    </ScrollView>
  );
};
 
export default WeatherScroll;
