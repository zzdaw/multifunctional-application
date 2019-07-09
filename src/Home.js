import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };
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
                            TIMER
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingTop: 30 }} onPress={() => this.props.navigation.navigate('LocalWeatherScreen')}>
                        <Text style={[styles.btn, basedFontSize]}>
                            WEATHER
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingTop: 30 }} onPress={() => this.props.navigation.navigate('TodoScreen')}>
                        <Text style={[styles.btn, basedFontSize]}>
                            TODO
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const basedFontSize = { fontSize: 22 };
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#D3DBFF' },
    buttonContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingTop: 5, alignItems: 'center', justifyContent: 'space-around' },
    btn: { backgroundColor: '#6EC1FF', width: 140, height: 90, borderRadius: 4, textAlign: 'center', lineHeight: 90 }
});