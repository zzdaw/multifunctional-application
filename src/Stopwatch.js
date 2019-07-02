import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from 'react-redux';

import { startTimer, stopTimer, resetTimer } from '../actions';

class Stopwatch extends Component {
    //kreatory akcji i reducer nie używają interwału
    //po kliknięciu zmieniany jest stan, co powoduje ponowne renderowanie
    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
        if (!startedAt) {
            return 0;
        } else {
            return stoppedAt - startedAt + baseTime; //aktualny baseTime umożliwia wznowienie od zastopowanego momentu
        }
    }

    render() {
        //console.log(this.props)
        const { baseTime, startedAt, stoppedAt } = this.props;
        const elapsed = this.getElapsedTime(baseTime, startedAt, stoppedAt);

        return (
            <View style={styles.container}>
                <View>
                    <Text style={[basedFontSize, { textAlign: 'center' }]}>
                        Timer: {Math.floor((elapsed) / 1000)}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='START' onPress={() => this.props.startTimer(elapsed)} />
                    <Button title='STOP' onPress={() => this.props.stopTimer()} />
                    <Button title='CLEAR' onPress={() => this.props.resetTimer()} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.counter);
    return {
        baseTime: state.timer.baseTime,
        startedAt: state.timer.startedAt,
        stoppedAt: state.timer.stoppedAt
    }
}

const mapDispatchToProps = { startTimer, stopTimer, resetTimer };

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);

const basedFontSize = { fontSize: 24 };
const styles = StyleSheet.create({
    container: { marginTop: 20 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30, },
    //button: { flex: 1, width: '70%', height: 30 }
});