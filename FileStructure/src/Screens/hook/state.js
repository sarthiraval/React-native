import React, { useState, useReducer } from 'react';
import { View, TextInput, Text, SafeAreaView } from 'react-native';

const State = () => {

    const [verb, setverb] = useState("Sarthi")
    const [getcount, setcount] = useState(0)


    const [getage, setage] = useState(0)
    const [getnum, setnum] = useState(0)

    const increment = () => {
        setage(getage + 1) //overwrite
        setage(getage + 1)
    }
    const decrement = () => {
        getage == 0 ?
            setage == 0
            :
            setage(getage - 1)
    }
    const incre = () => {
        setnum(kl => kl + 1) // perform two

    }

    const decre = () => {
        getnum == 0 ?
            setnum == 0
            :
            setnum(kl => kl - 1)
    }



    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center' }}>

                <TextInput style={{
                    borderStyle: "dashed", borderWidth: 1,
                    borderColor: "red",
                    alignSelf: "center",
                    height: 50,
                    width: 250,
                    marginBottom: 10
                }}
                    value={verb}
                    onChange={setverb} />

                <Text
                    style={{ alignSelf: 'center' }}
                    onPress={() => { setverb("Hello") }}>Changing</Text>


                <View style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 5
                }}>
                    <Text
                        style={{ marginRight: 5 }}
                        onPress={() => setcount(getcount + 1)}>
                        Count  = {getcount}</Text>

                    <Text onPress={() => { setcount(0) }}>Changing</Text>

                </View>

                <View style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 5
                }}>
                    <Text
                        style={{ marginRight: 5 }}
                        onPress={increment}> add</Text>


                    <Text
                        style={{ marginRight: 5 }}
                        onPress={decrement}>
                        min</Text>

                    <Text
                        style={{ marginRight: 5 }}>
                        = {getage}</Text>

                    <Text onPress={() => { setage(0) }}>Changing</Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 5
                }}>
                    <Text
                        style={{ marginRight: 5 }}
                        onPress={incre}> add</Text>


                    <Text
                        style={{ marginRight: 5 }}
                        onPress={decre}>
                        min</Text>

                    <Text
                        style={{ marginRight: 5 }}>
                        = {getnum}</Text>

                    <Text onPress={() => { setnum(0) }}>Changing</Text>
                </View>



                

            </View>
        </SafeAreaView>

    );
}


export default State;
