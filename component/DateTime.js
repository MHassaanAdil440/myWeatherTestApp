// import { View, Text, } from "react-native";
// import React,{useState,useEffect} from "react";
// import WeatherItem from "./WeatherItem";
// import { styles } from "../styles";

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const DateTime = () => {
//     const [date,setDate]=useState(new Date());
//     const [time,setTime]=useState(new Date());

//     useEffect (() => {
//         setInterval(() => {
//             const time = new Date();
//             const month = time.getMonth();
//             const date = time.getDate();
//             const day = time.getDay();
//             const hour = time.getHours();
//             const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
//             const minutes = time.getMinutes();
//             const ampm = hour >=12 ? 'pm' : 'am'
        
//             setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
//             setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
//         }, 1000);
//     }, [])
//   return (
//     <View style={styles.containerDateTime}>
//       {/* <View>
//         <Text>12:30am</Text>
//       </View>
//       <View>
//         <Text>Monday, June 7</Text>
//       </View> */}
//       <View>
//         <View>
//           <Text style={styles.headingDateTime}>{time}</Text>
//           <Text style={styles.subheadingDateTime}>{date}</Text>
//         </View>
//         <View style={styles.weatherItemContainerDateTime}>
//           <WeatherItem title="Humidity" value="79" unit="%" />
//           <WeatherItem title="Pressure" value="1000" unit="hPA" />
//           <WeatherItem title="Sunrise" value="6:00" unit="am" />
//           <WeatherItem title="Sunset" value="6:30" unit="pm" />
//         </View>
//       </View>
//       {/* <View>
//         <WeatherItem title="Humidity" value="79" unit="%" />
//         <WeatherItem title="Pressure" value="1000" unit="hPA" />
//         <WeatherItem title="Sunrise" value="6:00" unit="am" />
//         <WeatherItem title="Sunset" value="6:30" unit="pm" />
//       </View> */}
//       <View style={styles.rightAlignDateTime}>
//         <Text style={styles.timezoneDateTime}>Asia Lahore</Text>
//         <Text style={styles.latlongDateTime}>4.222N 50C</Text>
//       </View>
//     </View>
//   );
// };

// export default DateTime;

import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import WeatherItem from "./WeatherItem";
import { styles } from "../styles";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? 'pm' : 'am';

      setTime(
        (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) +
          ':' +
          (minutes < 10 ? '0' + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ', ' + date + ' ' + months[month]);
    }, 1000);
  }, []);

  return (
    <View style={styles.containerDateTime}>
      <View>
        <View>
          <Text style={styles.headingDateTime}>{time.toString()}</Text>
          <Text style={styles.subheadingDateTime}>{date.toString()}</Text>
        </View>
        <View style={styles.weatherItemContainerDateTime}>
          <WeatherItem title="Humidity" value="79" unit="%" />
          <WeatherItem title="Pressure" value="1000" unit="hPA" />
          <WeatherItem title="Sunrise" value="6:00" unit="am" />
          <WeatherItem title="Sunset" value="6:30" unit="pm" />
        </View>
      </View>
      <View style={styles.rightAlignDateTime}>
        <Text style={styles.timezoneDateTime}>Asia Lahore</Text>
        <Text style={styles.latlongDateTime}>4.222N 50C</Text>
      </View>
    </View>
  );
};

export default DateTime;
