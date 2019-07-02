import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from 'react-redux';

import { increaseNumber, decreaseNumber } from '../actions';

class Counter extends Component {
    render() {
        //console.log(this.props);
        return (
            <View style={styles.container}>
                <Text style={[basedFontSize, { textAlign: 'center' }]}>Counter: {this.props.counter}</Text>
                <View style={styles.buttonContainer}>
                    <Button title='Increase' onPress={this.props.increaseNumber} />
                    <Button title='Decrease' onPress={this.props.decreaseNumber} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state.counter);
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = { increaseNumber, decreaseNumber };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const basedFontSize = { fontSize: 24 };
const styles = StyleSheet.create({
    container: { marginTop: 20 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30, },
    //button: { flex: 1, width: '70%', height: 30 }
});