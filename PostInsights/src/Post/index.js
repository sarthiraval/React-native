import React from 'react'
import box from './style'
import { View,Text, SafeAreaView,ScrollView,Image,FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const  data =
[
    {id:"58,000",
     title : 'Likes'
    ,image: 
    {url:
 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80'
    }
},
    {id:"2,000",title : 'Likes',
  image: {url:'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGElMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'}},
    {id:300,title : 'Likes',
  image:{url:"https://images.unsplash.com/photo-1599114798990-4fac25c3835a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGphZ3VhciUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"}},
    {id:"40,000",title : 'Likes',
    image:{url:'https://images.unsplash.com/photo-1616455164843-dc474e264ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJtdyUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'}
  },
    {id:"50,000",title : 'Likes',
    image:{url:"https://images.unsplash.com/photo-1652509373706-32b65f415e33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZvbHZvJTIwc3BvcnQlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"}},

 ]


 const details = [
   {
    title : 'Top Age Ranges',
    first:"18-24",
    firstpart:"67%",
    second:"25-34",
    secondpart:"43%",
    thired:"35-44",
    thiredpart:"23%",
    fourth:"13-17",
    fourthpart:"07%"
  
},
  
{
  title : 'Top Age Ranges',
  first:"18-24",
  firstpart:"67%",
  second:"25-34",
  secondpart:"43%",
  thired:"35-44",
  thiredpart:"23%",
  fourth:"13-17",
  fourthpart:"07%"

},
{
  title : 'Top Age Ranges',
  first:"18-24",
  firstpart:"67%",
  second:"25-34",
  secondpart:"43%",
  thired:"35-44",
  thiredpart:"23%",
  fourth:"13-17",
  fourthpart:"07%"

}
 ]
let Post =() =>{

    return(

<SafeAreaView style={box.safedesign}>
{/* <LinearGradient 
  colors={['#4c669f', '#3b5998', '#192f6a']} 
  style={box.linearGradient}> */}
<View style={box.designview}>
    <Image source={
      require("PostInsights/src/img/left.png")
      // { uri : "https://www.seekpng.com/png/detail/812-8124478_red-left-arrow-icon.png"}
         } style={box.imagedesign}/>
   
      <Text style={box.textdesign}>Post Insights</Text>
     </View>

    <ScrollView
    style={box.scroll} 
    showsVerticalScrollIndicator={false}>
    
    
     <View style={box.flatstyle}>

   <FlatList 
    horizontal
    showsHorizontalScrollIndicator ={false}
    data={data}
    style={{marginTop:-10}}
    renderItem={({item}) => 
   
   
    <View style={box.flatlistview}>
      <Image 
      source={item.image}
                style={box.flatimage}
            />
     
      <View style={box.flatviewdesign} >
        <Text style={box.flattextdesgin}>{item.id}</Text>
        <Text style={box.flalike}>{item.title}</Text>
        </View>
  
      </View>
      
    }
    
    />
     </View>

     <Text style={box.normalnumber}>28,895</Text>
     <Text style={box.heading}>Total Reach</Text>

  <View style={box.boredercolors}/> 

  <Text style={box.headingnew}>Audience Response</Text>

  <FlatList 
      horizontal
      showsHorizontalScrollIndicator ={false}
      data={details}
      renderItem={({item}) => 
       <View style={box.flatlistview2}>
         
          <View style={box.flatviewdesign2} >
            <Text style={box.flattextdesgin2}>{item.title}</Text>
            <Text style={box.flatfirst2}>{item.first}</Text>
            <View style={box.instyle}>
            <View style={box.linegrow1} />
            <View style={box.linegrow2} />
            <Text style={box.flatfirst3}>{item.firstpart}</Text>
            </View>
            
            
            <Text style={box.flatfirst2}>{item.second}</Text>
            <View style={box.instyle}>
            <View style={box.linegrow3} />
            <View style={box.linegrow4} />
            <Text style={box.flatfirst3}>{item.secondpart}</Text>
            </View>

                
            <Text style={box.flatfirst2}>{item.thired}</Text>
            <View style={box.instyle}>
            <View style={box.linegrow5} />
            <View style={box.linegrow6} />
            <Text style={box.flatfirst3}>{item.thiredpart}</Text>
            </View>

     
            <Text style={box.flatfirst2}>{item.fourth}</Text>
            <View style={box.instyle}>
            <View style={box.linegrow7} />
            <View style={box.linegrow8} />
            <Text style={box.flatfirst3}>{item.fourthpart}</Text>

            </View>

            </View>
      
      </View>
      
    }
      />

</ScrollView>
{/* </LinearGradient> */}
</SafeAreaView>

    )}

 export default   Post                     