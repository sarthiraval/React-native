import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { deleteButton, plus } from '../../assets/image';

const TodoList = () => {

    const [input, setInput] = useState([]);
    const [textInput, setTextInput] = useState('');
    // useEffect(() => {
    //     dataLoading();
    // }, []);
    // useEffect(() => {
    //     saveData(input);
    // }, [input]);
    const addTodo = () => {
        if (textInput == '') {
            alert('Please enter input');
        } else {
            const newTodo = {
                id: Math.random(),
                task: textInput,
                completed: false,
            };
            setInput([...input, newTodo]);
            setTextInput('');
        }
    };
    // const saveData = async data => {
    //     try {
    //         const value = JSON.stringify(data);
    //         await AsyncStorage.setItem('data', value);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // const dataLoading = async () => {
    //     try {
    //         const todos = await AsyncStorage.getItem('todos');
    //         if (todos != null) {
    //             setInput(JSON.parse(todos));
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const deleteData = todoId => {
        const deleteListText = input.filter(item => item.id != todoId);
        setInput(deleteListText);
    };
    const ListItem = ({ todo }) => {
        return (
            <View style={styles.listItem}>
                <Text
                    style={styles.listText}>
                    {todo?.task}
                </Text>
                <TouchableOpacity style={styles.deleteView} onPress={() => deleteData(todo.id)}>
                    <Image source={deleteButton} style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.mainView}>
            <Text style={styles.textColor}>Task List</Text>
            <View style={styles.listView}>
                <TextInput
                    value={textInput}
                    placeholder="Add Todo"
                    style={styles.listInput}
                    onChangeText={text => setTextInput(text)}
                />
                <TouchableOpacity onPress={addTodo}>
                    <View style={styles.iconView}>
                        <Image source={plus} style={styles.iconPlus} />
                    </View>
                </TouchableOpacity>

            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={input}
                renderItem={({ item }) => <ListItem todo={item} />}
                ListEmptyComponent={<Text style={styles.listEmpty}>No Text Input</Text>}
                keyExtractor={item => item.id} />

        </SafeAreaView>
    );
};



export default TodoList;