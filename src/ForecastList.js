import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from 'react-redux';

class ForecastList extends Component {
    sunrise = (ms) => {
        const addZero = (i) => {
            if (i < 10) {
                i = '0' + i;
            }
            return i;
        }
        const d = new Date(ms * 1000);
        const h = addZero(d.getHours());
        const m = addZero(d.getMinutes());
        return `${h}:${m}`;
    }
    sunset = (ms) => {
        const addZero = (i) => {
            if (i < 10) {
                i = '0' + i;
            }
            return i;
        }
        const d = new Date(ms * 1000);
        const h = addZero(d.getHours());
        const m = addZero(d.getMinutes());
        return `${h}:${m}`;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/${this.props.icon}@2x.png` }} />
                    <Text style={styles.imageText}>{this.props.description}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Country: {this.props.country}</Text>
                    <Text style={styles.text}>City: {this.props.city}</Text>
                    <Text style={styles.text}>Temperature: {parseInt(this.props.temp)}°C</Text>
                    <Text style={styles.text}>Pressure: {this.props.pressure}hPa</Text>
                    <Text style={styles.text}>Sunrise: {this.sunrise(this.props.sunrise)}</Text>
                    <Text style={styles.text}>Sunset: {this.sunset(this.props.sunset)}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        country: state.weather.forecast.sys.country,
        city: state.weather.forecast.name,
        temp: state.weather.forecast.main.temp,
        pressure: state.weather.forecast.main.pressure,
        sunrise: state.weather.forecast.sys.sunrise,
        sunset: state.weather.forecast.sys.sunset,
        icon: state.weather.forecast.weather[0].icon,
        description: state.weather.forecast.weather[0].description
    }
}

export default connect(mapStateToProps)(ForecastList);

const basedFontSize = 24;
const styles = StyleSheet.create({
    container: { flex: 1, padding: 30, },
    iconContainer: { flexDirection: 'row', height: 80, },
    image: { width: 80, height: 80, left: -20, top: -20 },
    imageText: { fontSize: basedFontSize - 4, paddingTop: 5, left: -20, top: 10, fontFamily: 'monospace' },
    textContainer: { flex: 1, },
    text: { fontSize: basedFontSize - 4, fontFamily: 'monospace' },
})

