import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from 'react-redux';

class ForecastList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Country: {this.props.country}</Text>
                <Text style={styles.text}>City: {this.props.city}</Text>
                <Text style={styles.text}>Temperature: {this.props.temp} °C</Text>
                <Text style={styles.text}>Pressure: {this.props.pressure} hPa</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        country: state.weather.forecast.sys.country,
        city: state.weather.forecast.name,
        temp: state.weather.forecast.main.temp,
        pressure: state.weather.forecast.main.pressure
    }
}

export default connect(mapStateToProps)(ForecastList);

const basedFontSize = 24;
const styles = StyleSheet.create({
    container: { flex: 1, padding: 30, },
    text: { fontSize: basedFontSize, paddingTop: 5, }
})

