import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //App Styling
  containerApp: {
    flex: 1,
  },
  bgimgApp: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  ///////////////////////////////////////////////////////////////////////
  //Date Time Styling
  containerDateTime: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 50,
  },
  headingDateTime: {
    fontSize: 45,
    color: "white",
    fontWeight: "100",
  },
  subheadingDateTime: {
    fontSize: 25,
    color: "#eee",
    fontWeight: "300",
  },
  rightAlignDateTime: {
    textAlign: "right",
    marginTop: 20,
  },
  timezoneDateTime: {
    fontSize: 20,
    color: "white",
  },
  latlongDateTime: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
  weatherItemContainerDateTime: {
    // backgroundColor: "#394867",
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  /////////////////////////////////////////////////////////////////////
  //WeatherItem Styling
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitle: {
    color: "#eee",
    fontSize: 14,
    fontWeight: "100",
  },
    /////////////////////////////////////////////////////////////////////
    //WeatherScroll Styling
    scrollView: {
        // flex:0.4,
        height: '30%',
        backgroundColor: '#18181bcc',
        padding:30
    },
    image: {
        width: 150,
        height: 150
    },
    currentTempContainer: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#00000033',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth:1,
        padding: 15
    },
    day: {
        fontSize: 20,
        color:"white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },
    temp: {
        fontSize: 16,
        color:"white",
        fontWeight:"100",
        textAlign:"center"
    },
    otherContainer: {
        paddingRight: 40
    },
    /////////////////////////////////////////////////////////////////////
    //FutureForecast Styling
    futureForecastItemContainer: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius:10,
        borderColor:"#eee",
        borderWidth:1,
        padding: 20,
        marginLeft: 10
    }, 
    futureForecastDay: {
        fontSize: 20,
        color:"white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },   
    futureForecastTemp: {
        fontSize: 14,
        color:"white",
        fontWeight:"100",
        textAlign:"center"
    },
});
