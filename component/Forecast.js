import React from "react";
import { View, Text, Image } from "react-native";
import {styles} from "../styles";

const Forecast = () => {
    return(
        <View> 
            <FutureForecastItem />
            <FutureForecastItem />
            <FutureForecastItem />
        </View>
    )}

const FutureForecastItem = () => {
    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    return(
        // <View style = {styles.futureForecastItemContainer}>
        //     <Text style={styles.futureForecastDay}>Mon</Text>
        //     <Image source={img} style={styles.image}/>
        //     <Text style={styles.futureForecastTemp}>Night - 26&#176;C</Text>
        //     <Text style={styles.futureForecastTemp}>Day - 36&#176;C</Text>
        // </View>
        <View style={styles.currentTempContainer}>
      <Image source={img} style={styles.image}/>
      <View>
        <Text style={styles.day}>Sunday</Text>
        <Text style={styles.temp}>Night - 28&#176;C</Text>
        <Text style={styles.temp}>Current - 35&#176;C</Text>
      </View>
    </View>
    )
}

export default Forecast;