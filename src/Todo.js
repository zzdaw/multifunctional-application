import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from 'react-redux';

import { addTask } from '../actions/index';
import TodoList from './TodoList';

class Todo extends Component {
    static navigationOptions = {
        title: 'Todo',
    };
    state = {
        inputValue: ''
    }

    submitValue = () => {
        this.props.addTask(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    }

    changeValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    render() {
        // console.log(this.props.tasksArr);
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Add task'
                    style={styles.input}
                    underlineColorAndroid='#428AF8'
                    onSubmitEditing={this.submitValue}
                    onChangeText={(text) => { this.setState({ inputValue: text }) }}
                    value={this.state.inputValue}
                />
                {this.props.flag ? <TodoList /> : null}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        tasksArr: state.todo.tasksArr,
        flag: state.todo.flag
    }
}

const mapDispatchToProps = { addTask };

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

const basedFontSize = 24;
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FDF9E3' },
    input: { height: 45, paddingLeft: 6, margin: 10, fontSize: basedFontSize }
})
// onSubmitEditing={(event) => this.props.addTask(event.nativeEvent.text)}