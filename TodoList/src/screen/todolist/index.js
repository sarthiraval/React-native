import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { darkBlue } from '../../assets/constansts';
import { checkButton, deleteButton, listSearch, plus } from '../../assets/image';

const TodoList = () => {
    const [input, setInput] = useState([]);
    const [textInput, setTextInput] = useState('');

    useEffect(() => {
        getTodosFromUserDevice();
    }, []);

    useEffect(() => {
        saveTodoToUserDevice(input);
    }, [input]);

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

    const saveTodoToUserDevice = async data => {
        try {
            const value = JSON.stringify(data);
            await AsyncStorage.setItem('data', value);
        } catch (error) {
            console.log(error);
        }
    };

    const getTodosFromUserDevice = async () => {
        try {
            const todos = await AsyncStorage.getItem('todos');
            if (todos != null) {
                setTodos(JSON.parse(todos));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const markTodoComplete = todoId => {
        const newTodosItem = input.map(item => {
            if (item.id == todoId) {
                return { ...item, completed: true };
            }
            return item;
        });

        setInput(newTodosItem);
    };

    const deleteTodo = todoId => {
        const newTodosItem = input.filter(item => item.id != todoId);
        setInput(newTodosItem);
    };


    const ListItem = ({ todo }) => {
        return (
            <View style={styles.listItem}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        alignSelf: "center",
                        color: darkBlue,
                        width: "65%",
                        marginLeft: 15,
                        textDecorationLine: todo?.completed ? 'line-through' : 'none',
                    }}>
                    {todo?.task}
                </Text>
                {!todo?.completed && (
                    <TouchableOpacity style={styles.checkView} onPress={() => markTodoComplete(todo.id)}>
                        <Image source={checkButton} style={styles.icon} />
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.deleteView} onPress={() => deleteTodo(todo.id)}>
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