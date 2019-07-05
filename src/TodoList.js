import React, { Component } from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { deleteTask } from '../actions/index';


class TodoList extends Component {
    // console.log(`Przeszło ${tasksArr}`);

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.tasksArr}
                    renderItem={({ item }) => (
                        <View style={{
                            flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingRight: 10,
                            paddingVertical: 5,
                        }}>
                            <View style={{ marginLeft: 4 }}>
                                <Text style={styles.item}>{item.text}</Text>
                            </View>
                            <TouchableOpacity style={{ paddingLeft: 25, paddingRight: 15 }}
                                onPress={() => this.props.deleteTask(item.key)}
                            >
                                <Ionicons
                                    name="ios-trash"
                                    color='black'
                                    size={26}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        tasksArr: state.todo.tasksArr
    }
}

const mapDispatchToProps = { deleteTask };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const basedFontSize = 24;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: { fontSize: basedFontSize, margin: 10, },
})