import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default class Home extends Component {
    render() {
        //console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{ paddingTop: 30 }} onPress={() => this.props.navigation.navigate('CounterScreen')}>
                        <Text style={[styles.btn, basedFontSize]}>
                            COUNTER
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingTop: 30 }} onPress={() => this.props.navigation.navigate('StopwatchScreen')}>
                        <Text style={[styles.btn, basedFontSize]}>
                            STOPWATCH
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingTop: 30 }} onPress={() => this.props.navigation.navigate('LocalWeatherScreen')}>
                        <Text style={[styles.btn, basedFontSize]}>
                            WEATHER
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const basedFontSize = { fontSize: 22 };
const styles = StyleSheet.create({
    container: { marginTop: 25 },
    buttonContainer: { flexDirection: 'column', paddingTop: 30, alignItems: 'center' },
    btn: { backgroundColor: '#6EC1FF', width: 140, height: 90, borderRadius: 9, textAlign: 'center', lineHeight: 90 }
});