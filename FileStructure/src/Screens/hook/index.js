import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { country } from "./country.json"

const [resourseType, setResoureseType] = useState(country)
const [item,setitem]= useState([])

const YourApp = () => {

    useEffect(() => {
        let url = country
        fetch(url)
            .then(res => res.json())
            .then(data => setitem(data))
    }, [resourseType]);
    return (
        <View>
            <Text>{setResoureseType}</Text>
            {
                item.map(items=>{
                    return<pre>{JSON.stringify(items)}</pre>
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default YourApp;
