import React, { Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { connect } from 'react-redux';

const TodoList = ({ tasksArr }) => {
    // console.log(`Przeszło ${tasksArr}`);
    return (
        <View style={styles.container}>
            <FlatList
                data={tasksArr}
                renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        tasksArr: state.todo.tasksArr
    }
}

export default connect(mapStateToProps)(TodoList);

const basedFontSize = 24;
const styles = StyleSheet.create({
    container: { flex: 1 },
    item: { fontSize: basedFontSize, margin: 10, paddingLeft: 5, borderBottomWidth: 1 }
})

// export default TodoList;