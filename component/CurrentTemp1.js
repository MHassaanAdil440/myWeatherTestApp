import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { styles } from '../styles';

const CurrentTemp1 = () => {
    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
  return (
    <View style={styles.currentTempContainer}>
      <Image source={img} style={styles.image}/>
      <View>
        <Text style={styles.day}>Sunday</Text>
        <Text style={styles.temp}>Night - 28&#176;C</Text>
        <Text style={styles.temp}>Current - 35&#176;C</Text>
      </View>
    </View>
  );
};

export default CurrentTemp1;