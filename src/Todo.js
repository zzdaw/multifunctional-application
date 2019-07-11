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
        let inputValue = this.state.inputValue.trim();
        if (inputValue.length > 3) {
            if (inputValue) {
                this.props.addTask(inputValue);
            }
        }
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
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Add task, length>3'
                    style={styles.input}
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
    input: {
        height: 45,
        paddingLeft: 6,
        margin: 10,
        fontSize: basedFontSize,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        backgroundColor: '#fff'
    }
})