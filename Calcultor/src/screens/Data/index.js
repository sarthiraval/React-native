import React, { useState ,useEffect} from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text, SafeAreaView } from 'react-native';

const ApiKnow = () => {

    const [isloadiing, setLoading] = useState(true)
    const [data, setData] = useState([])

    const movies = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setData(data.movies);
            console.log("logd = " ,data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        movies();
      }, []);
    return (
        <SafeAreaView style={{flex: 1, padding: 24}}>
        {isloadiing ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
                <View>
                    {item.map((e)=>{
                        return <Text>{e.rating}</Text>
                    })}
              </View>
            )}
          />
        )}
      </SafeAreaView>
    );
}


export default ApiKnow;
