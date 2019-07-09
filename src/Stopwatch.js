import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from 'react-redux';

import { startTimer, stopTimer, resetTimer, tickTimer } from '../actions';

class Stopwatch extends Component {
    static navigationOptions = {
        title: 'Timer',
    };

    start = () => {
        this.props.startTimer();
        this.interval = setInterval(() => { this.props.tickTimer() })
    }

    stop = () => {
        clearInterval(this.interval);
        this.props.stopTimer();
    }

    reset = () => {
        clearInterval(this.interval);
        this.props.resetTimer();
    }

    format = (time) => {
        const pad = (time, length) => {
            while (time.length < length) {
                time = '0' + time;
            }
            return time;
        }

        time = new Date(time);
        let m = pad(time.getMinutes().toString(), 2);
        let s = pad(time.getSeconds().toString(), 2);
        let ms = pad(time.getMilliseconds().toString(), 3);

        return `${m} : ${s} . ${ms}`;
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[basedFontSize, { textAlign: 'center' }]}>
                        Time: {this.format(this.props.time)}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='START' onPress={this.start} />
                    <Button title='STOP' onPress={this.stop} />
                    <Button title='CLEAR' onPress={this.reset} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        isOn: state.timer.isOn,
        time: state.timer.time
    }
}

const mapDispatchToProps = { startTimer, stopTimer, resetTimer, tickTimer };

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);

const basedFontSize = { fontSize: 24 };
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#D3DBFF' },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30, },
});