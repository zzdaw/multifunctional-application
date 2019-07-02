import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from 'react-redux';

import { dispatchFetch } from './ForecastFetch';
import ForecastList from './ForecastList';

class LocalWeather extends Component {
    handleInput = event => {
        const postcode = event.nativeEvent.text;
        //console.log(event.nativeEvent.text);
        this.props.dispatchFetch(postcode);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputText}>
                        <Text style={styles.mainText}>Forecast for: </Text>
                    </View>
                    <View style={styles.inputCode}>
                        <TextInput onSubmitEditing={this.handleInput} style={styles.postcode} />
                    </View>
                </View>
                {this.props.forecast ? <ForecastList /> : null}
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
    container: { flex: 1 },
    inputContainer: { paddingTop: 5, flexDirection: 'row', alignItems: 'center' },
    inputText: { flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start', padding: 30 },
    inputCode: { height: basedFontSize, borderBottomColor: '#DDDDDD', borderBottomWidth: 1, marginLeft: 5, marginTop: 3 },
    mainText: { fontSize: basedFontSize },
    postcode: { flex: 1, flexBasis: 1, width: 50, height: basedFontSize },
})