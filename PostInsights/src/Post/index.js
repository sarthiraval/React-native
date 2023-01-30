import React from 'react'
import box from './style'
import { View,Text, SafeAreaView,ScrollView,Image,FlatList} from 'react-native'

const  data =
[
    {id:1,
     title : 'Sarthi'
    ,image: 
    {url:
 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80'
    }
},
    {id:2,title : 'Jainik',
  image: {url:'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200'}},
    {id:3,title : 'Sid',
  image:{url:"https://www.bugatti.com/fileadmin/_processed_/e/e/csm_og-image_b5397aa5e3.jpg"}},
    {id:4,title : 'Harshit',
    image:{url:'https://static.toiimg.com/thumb/msid-90435097,width-1280,height-720,resizemode-4/.jpg'}
  },
    {id:5,title : 'Moin',
    image:{url:"https://images.news18.com/ibnlive/uploads/2021/07/1627356525_maruti-suzuki-swift-16316273324x3.png"}},

 ]
let Post =() =>{

    return(

<SafeAreaView style={box.safedesign}>
<View style={box.designview}>
    <Image source={{
         uri : "https://www.seekpng.com/png/detail/812-8124478_red-left-arrow-icon.png"}} style={box.imagedesign}/>
   
      <Text style={box.textdesign}>Post Insights</Text>
     </View>

    <ScrollView
    style={box.scroll} 
    showsVerticalScrollIndicator={false}>
    
    
     <View>

   <FlatList 
    horizontal
    showsHorizontalScrollIndicator ={false}
 
      data={data}
    renderItem={({item}) => 
    <View>
          <View style={{
        borderWidth:12,
        borderColor:"white",
        borderRadius:20,
        width:300,
        height:300,
        justifyContent:"center",
        alignItems:"center"

    }}>
    <Image 
      source={item.image}
                style={{
                    height:250,
                    width:250,
                    borderRadius:20,
                    margin:8
                }}
            />
        </View>
        <View style={{flexDirection:"row",alignSelf:"center"}} >
        <Text style={{ padding: 10, fontSize: 20, height: 50, color: "red" }}>{item.title}</Text>
    <Text style={{ padding: 10, fontSize: 20, height: 50, color: "red" }}>{item.id}</Text>
</View>
            </View>}
    
    />
     </View>

     <Text style={{ top: 15, fontSize: 20, height: 50, color: "red" ,alignSelf:"center"}}>28,895</Text>
     <Text style={{ top: 15, fontSize: 20, height: 50, color: "black" ,alignSelf:"center"}}>Total Reach</Text>

</ScrollView>
</SafeAreaView>

    )}

 export default   Post                     