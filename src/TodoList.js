import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Ionicons, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';

import { deleteTask, doneTask } from '../actions/index';


class TodoList extends Component {
    render() {
        return (
            <FlatList
                data={this.props.tasksArr}
                renderItem={({ item }) => (
                    <View style={styles.listContainer}>
                        <TouchableOpacity onPress={() => this.props.doneTask(item.key)}>
                            <MaterialCommunityIcons
                                name={item.done ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                color='black'
                                size={24}
                            />
                        </TouchableOpacity>
                        <Text style={item.done ? styles.itemDone : styles.item}>{item.text}</Text>
                        <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 5 }}
                            onPress={() => this.props.deleteTask(item.key)}
                        >
                            <Ionicons
                                name="ios-trash"
                                color='black'
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasksArr: state.todo.tasksArr,
        done: state.todo.tasksArr.done
    }
}

const mapDispatchToProps = { deleteTask, doneTask };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const basedFontSize = 24;
const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        width: '93%',
        flexDirection: 'row',
        marginLeft: 12,
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: '#D6CFC1',
    },
    item: {
        fontSize: basedFontSize - 6,
        flexGrow: 1,
    },
    itemDone: {
        fontSize: basedFontSize - 6,
        flexGrow: 1,
        color: '#E3DDCC',
        textDecorationLine: 'line-through'
    }
})