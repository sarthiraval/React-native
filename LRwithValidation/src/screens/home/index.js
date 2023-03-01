import React, { useState, useEffect } from 'react';
import styles from './style';
import { mini } from '../../assets/image';
import { ImageBackground, SafeAreaView, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';




let Home = () => {
   const [username, setname] = useState("")
   const [uservalue, setvalue] = useState("")
   const [userphone, setphone] = useState("")
   const [userpass, setpass] = useState("")
   const [input, setInput] = useState([]);
    const [textInput, setTextInput] = useState('');
   //  var users = await AsyncStorage.getItem("usrename")
   // console.log(users);
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
   useEffect(async () => {
      setname(await AsyncStorage.getItem("email"));
      setvalue(await AsyncStorage.getItem("usrename"));
      setphone(await AsyncStorage.getItem("phone"));
      setpass(await AsyncStorage.getItem("password"));
   }, [])

   
   // console.log(usename);

   // const gestStorage = async () => {
   //       try {
   //       alert(`welcome  
   //        My Email is ${value}  
   //    My Name is ${users}  
   //        My PhoneNumber is ${phones} 
   //        My Password is ${passwords}`)


   //    }
   //    catch (error) {
   //       console.log("error :", error);
   //    }
   // }

   return (
      <ImageBackground
         source={mini}
         style={styles.AllContent}>

         <SafeAreaView style={styles.SafeDesign} >
            {/* <TouchableOpacity onPress={gestStorage}>

               <Text style={styles.Texts}>Sarthi</Text>

            </TouchableOpacity> */}
<ScrollView>
            <Text style={styles.Texts}>Name = {username}</Text>
            <Text style={styles.Texts}>Email = {uservalue}</Text>
            <Text style={styles.Texts}>Phone = {userphone}</Text>
            <Text style={styles.Texts}>Password = {userpass}</Text>
         
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

         
            </ScrollView>
         </SafeAreaView>
      </ImageBackground>
   )
}
export default Home