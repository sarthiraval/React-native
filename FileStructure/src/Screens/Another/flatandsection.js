import React from 'react';
import {
View,FlatList,Text, SafeAreaView, SectionList, ScrollView,Image
} from 'react-native';


let YourApp = () =>{

  return(
  <SafeAreaView>
    <ScrollView 
    showsVerticalScrollIndicator="false">
<View style ={{marginTop:20}}> 
     <View style={{flex:1,backgroundColor:"red"}}></View>
     <View style={{flex:2,backgroundColor:"green"}}></View>
     <View style={{flex:3,backgroundColor:"blue"}}></View>
     <View style={{flex:4,backgroundColor:"yellow"}}/>
     <View style={{flex:5,backgroundColor:"pink"}}/>
     <View style={{flex:6,backgroundColor:"black"}}/>
  </View>
  <View style ={{flex:1,marginTop:10,flexDirection:"column"}}> 
    <View style={{flex:1,backgroundColor:"red"}}></View>
    <View style={{flex:2,backgroundColor:"green"}}></View>
    <View style={{flex:3,backgroundColor:"blue"}}></View>
    <View style={{flex:4,backgroundColor:"yellow"}}/>
    <View style={{flex:5,backgroundColor:"pink"}}/>
    <View style={{flex:6,backgroundColor:"black"}}/>
 </View>

 <View style ={{marginTop:10,flexDirection:"row",flex:1}}> 
  <View style={{flex:1,backgroundColor:"red"}}></View>
  <View style={{flex:2,backgroundColor:"green"}}></View>
  <View style={{flex:3,backgroundColor:"blue"}}></View>
  <View style={{flex:4,backgroundColor:"yellow"}}/>
  <View style={{flex:5,backgroundColor:"pink"}}/>
  <View style={{flex:6,backgroundColor:"black"}}/>
</View>
  
  <View style={{ marginTop:10,flexDirection:"column-reverse",flex:1}}>
  <View style={{ flex: 1, backgroundColor: "red" }}></View>
  <View style={{ flex: 2, backgroundColor: "green" }}></View>
  <View style={{ flex: 3, backgroundColor: "blue" }}></View>
  <View style={{ flex: 4, backgroundColor: "yellow" }} />
  <View style={{ flex: 5, backgroundColor: "pink" }} />
  <View style={{ flex: 6, backgroundColor: "black" }} />

</View>

<View style ={{ marginTop:10,flexDirection:"row-reverse",flex:1
}}> 
    <View style={{flex:1,backgroundColor:"red"}}/>
    <View style={{flex:2,backgroundColor:"green"}}></View>
    <View style={{flex:3,backgroundColor:"blue"}}></View>
    <View style={{flex:4,backgroundColor:"yellow"}}/>
    <View style={{flex:5,backgroundColor:"pink"}}/>
    <View style={{flex:6,backgroundColor:"black"}}/>
  </View>



<View>
  <ScrollView
    contentContainerStyle = {{marginTop:10}}
    horizontal ={true}
    bounces = {true}
    showsHorizontalScrollIndicator ={true}>
    <View style={{ width: "0.1%", height: 50, backgroundColor: 'green' }} />
    <View style={{ width: "0.2%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "0.3%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "0.4%", height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "0.5%", height: 50, backgroundColor: 'red' ,marginStart:10 }} />
    <View style={{ width: "0.6%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "0.7%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "0.8%", height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "1.0%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "1.2%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "1.5%", height:50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "2.2%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "2.5%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "3%", height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "3.5%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "4%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "4.2%", height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "5%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'red' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'red' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'red' ,marginStart:10 }} />
  </ScrollView>
  </View>

<Text style={{fontSize:20}}>Hi</Text>
  


    <View style={{alignSelf:"stretch",marginBottom:10,marginRight:10,marginLeft:10}}>
    <Text style={{fontSize:30}}>Flat-List:-</Text>

   <FlatList 
   style={{height:100}}
      data = {[
            {
                id:1,
                image:
        { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
                title: 'Ronald Richards',
                subtitle: 'Gurgaon,india'
            },
            {   id:2,
              image:
              { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
                title: 'Floyd Miles',
                subtitle: 'san Fransisco,CA'
            },
            {   id:3,
              image:
              { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
                title: 'Marvin Mckinney',
                subtitle: 'Dhaka,Bangladesh'
            },
            {   id:4,
              image:
              { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
                title: 'Dianne Russell',
                subtitle: 'Suiropl,Nepal'
            },
            {
              id:5,
              image:
      { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
              title: 'Ronald Richards',
              subtitle: 'Gurgaon,india'
          },
          {   id:6,
            image:
            { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
              title: 'Floyd Miles',
              subtitle: 'san Fransisco,CA'
          },
          {   id:7,
            image:
            { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
              title: 'Marvin Mckinney',
              subtitle: 'Dhaka,Bangladesh'
          },
          {   id:8,
            image:
            { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
              title: 'Dianne Russell',
              subtitle: 'Suiropl,Nepal'
          },
           
    ]}
   //render
   //The renderItem is a callback function
   // that will accept the individual item from the data prop and render a component for it.

   //KeyExtractor
   //The default extractor checks item.key,then item.id,and then falls back to using the index, like React does.
    renderItem={({item}) => 
    
     <View style={{ flexDirection:"row"}}>
      <Image style={{
        height:20,width:50}} source={item.image}/>
           <View style={{ flexDirection:"column"}}>

    <Text style= {{fontSize:20,color:"red"}}>{item.title}</Text>
    <Text style= {{fontSize:15,color:"red"}}>{item.subtitle}</Text>
    </View>
    </View>
    }
    keyExtractor ={item => item.id}
  
    />

<FlatList  data ={[
      {id:1,title : 'Sarthi'},
      {id:2,title : 'Janik'},
      {id:3,title : 'Sid'},
      {id:4,title : 'Harshit'},
      {id:5,title : 'Kevin'},
      {id:6,title : 'Moin'},
      {id:7,title : 'Keval'},
      {id:9,title : 'Krunal'},
      {id:10,title : 'Yash'},
      {id:11,title : 'Akshat'},
      {id:12,title : 'Deep'},
      {id:13,title : 'Jigar'},
      {id:14,title : 'Komit'},
      {id:15,title : 'Ali'},
      {id:16,title : 'Pratik'},
      {id:17,title : 'Parshav'},
      {id:18,title : 'Asim'},
      {id:19,title : 'Shivang'},
      {id:20,title : 'Haider'},
      {id:21,title : 'Sunny'},
   ]}
   //render
   //The renderItem is a callback function
   // that will accept the individual item from the data prop and render a component for it.

   //KeyExtractor
   //The default extractor checks item.key,then item.id,and then falls back to using the index, like React does.
    horizontal
    showsHorizontalScrollIndicator ={false}
   renderItem={({item}) => 
    <Text style= {{padding:10,fontSize:20,height:50,color:"red"}}>{item.id}. {item.title}</Text>}
    keyExtractor ={item => item.id}
  />

<Text style={{fontSize:30}}>Flat-List Empty:-</Text>

    <FlatList  data ={[ ]}
    renderItem={({item}) => 
    <Text style= {{padding:10,fontSize:20,height:50,color:"red"}}>{item.id}. {item.title}</Text>}
    keyExtractor ={item => item.id}
    ListEmptyComponent={<Text>No Data Found</Text>}
    />


    
<Text style={{fontSize:30}}>Section-List:-</Text>
<SectionList
        style={{marginLeft:20,marginRight:20}}
        sections={CAR}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(title, data) => title + data}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{fontSize: 30,color:"#82E0AA"}}>{title}</Text>
        )}
      />


    </View>
    </ScrollView>
    </SafeAreaView>
  )

}
function Item({ title }) {
  return (
    <View style={{backgroundColor: '#F8C471',padding: 20,marginVertical:10}}>
      <Text style={{fontSize: 24,color:"#E74C3C"}}>{title}</Text>
    </View>
  );
}

const CAR = [
  {title :"Maruti Suzuki",
  data:["Maruti Suzuki Brezza","Maruti Suzuki Swift","Maruti Suzuki Grand Vitara"]},
  {title :"Hyundai",
  data:["Hyundai Aura","Hyundai Grand i10 Nios"]},
  {title :"Toyota",
  data:["Toyota Innova Hycross","Toyota Fortuner"]},
  {title :"KIA",
  data:["Kia Sonet","Kia Carens","Kia EV6","Kia Seltos"]},
  {title :"Tesla",
  data:["Tesla Model S","Tesla Model 3"]},
  {title :"Volvo",
  data:["Volvo XC90","Volvo S90","Volvo S60"]},
  ]

export default YourApp;
