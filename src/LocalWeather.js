import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from 'react-redux';

import { dispatchFetch } from './ForecastFetch';
import ForecastList from './ForecastList';

class LocalWeather extends Component {
    static navigationOptions = {
        title: 'Local Weather',
    };
    handleInput = event => {
        const cityName = event.nativeEvent.text;
        //console.log(event.nativeEvent.text);
        this.props.dispatchFetch(cityName);
    }
    render() {
        // console.log(this.props.name)
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputText}>
                        <Text style={styles.mainText}>Forecast for (city): </Text>
                    </View>
                    <View style={styles.inputCode}>
                        <TextInput onSubmitEditing={this.handleInput} style={styles.cityName} />
                    </View>
                </View>
                <View style={styles.desContainer}>
                    {this.props.forecast ? <ForecastList /> : null}
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        forecast: state.weather.forecast
    }
}

const mapDispatchToProps = { dispatchFetch };

export default connect(mapStateToProps, mapDispatchToProps)(LocalWeather);

const basedFontSize = 24;
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FDF9E3' },
    inputContainer: { paddingTop: 5, flexDirection: 'row', alignItems: 'center' },
    inputText: { flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start', padding: 30 },
    inputCode: { height: basedFontSize, borderBottomColor: '#000', borderBottomWidth: 1, marginLeft: 5, marginTop: 3 },
    mainText: { fontSize: basedFontSize },
    cityName: { flex: 1, flexBasis: 1, width: 50, height: basedFontSize },
    desContainer: { flex: 1, marginLeft: 20, marginRight: 20, marginBottom: 20, backgroundColor: '#FBF7F0' }
})