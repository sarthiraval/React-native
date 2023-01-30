import React from 'react'
import { View,Text, SafeAreaView,ScrollView,ImageBackground, Image, FlatList ,SectionList, StyleSheet} from 'react-native'

let Another =() =>{

    return(
        // <View style={{flex:1,backgroundColor:"#e6e6e6"}}>
    <ImageBackground 
        source={{
            uri: "https://static.vecteezy.com/system/resources/previews/004/719/556/original/abstract-blur-background-wallpaper-party-design-defocused-soft-light-bokeh-illustration-vector.jpg"
           }}
          style ={{flex:1}}
    >  
<SafeAreaView style={{flex:1,justifyContent:"center"}}>
<Text style={{color:"black",fontSize:10,fontWeight:"bold",left:25,marginTop:10,alignSelf:"flex-start"}}>BACK</Text>

    <ScrollView
            showsVerticalScrollIndicator={false}>

        <View>
    
       <Image  source ={{
                        uri:"https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-4.jpg"
                        }}style={{width:100, height:100,marginTop:20,
                alignSelf: 'center',
                borderRadius:100/2}}  />

        <Text style={{color:"black",fontSize:25,fontWeight:"bold",marginTop:30,textAlign:"center"}}>Club Members</Text>


        
        </View>
    <FlatList  data ={[
      {id:1,title : 'Sarthi',city:"Ahmedabad",coutry:"India"},
      {id:2,title : 'Jainik',city:"Surat",coutry:"India"},
      {id:3,title : 'Sid',city:"Surat",coutry:"India"},
      {id:4,title : 'Harshit',city:"Ahmedabad",coutry:"India"},
      {id:5,title : 'Kevin',city:"Baroda",coutry:"India"},
      {id:6,title : 'Moin',city:"Bharuch",coutry:"India"},
      {id:7,title : 'Keval',city:"Delhi",coutry:"India"},
      {id:9,title : 'Krunal',city:"Mumbai",coutry:"India"},
      {id:10,title : 'Yash',city:"Kolkata",coutry:"India"},
      {id:11,title : 'Akshat',city:"Bhavanagar",coutry:"India"},
      {id:12,title : 'Deep',city:"Goa",coutry:"India"},
      {id:13,title : 'Jigar',city:"Abu",coutry:"India"},
      {id:14,title : 'Komit',city:"Kashmir",coutry:"India"},
      {id:15,title : 'Ali',city:"Vishakhapatanam",coutry:"India"},
      {id:16,title : 'Pratik',city:"Bangalore",coutry:"India"},
      {id:17,title : 'Parshav',city:"Hyderabad",coutry:"India"},
      {id:18,title : 'Asim',city:"Pune",coutry:"India"},
      {id:19,title : 'Shivang',city:"Chennai",coutry:"India"},
      {id:20,title : 'Haider',city:"New York",coutry:"New York"},
      {id:21,title : 'Sunny',city:"Houston",coutry:"India"},
      
   ]}
   style={{marginVertical:10,marginHorizontal:10}}
    renderItem={({item}) => 
    <View style={{flexDirection:"column",marginTop:10,backgroundColor:"white",borderRadius:10}}>
   <View style={{flexDirection:'row',marginLeft:10}}>
    <Text style={{fontSize: 20,color: "red" }}>{item.id}  </Text>
    <Text style={{fontSize: 20,color: "red" }}>{item.title}</Text>
    </View>
    <View style={{flexDirection:"row",marginLeft:10}}>
    <Text style={{fontSize: 20,color: "red" }}>{item.city},</Text>
    <Text style={{fontSize: 20, color: "red" }}>{item.coutry}</Text>
    </View>
   </View>}
    keyExtractor ={item => item.id}
    ListEmptyComponent={<Text>No Data Found</Text>}
    />

{/* <SectionList
        style={{marginLeft:20,marginRight:20}}
        sections={data}
        keyExtractor={(item, data) => item + data}
        renderItem={({ item,section }) => <Item item={item} sectionStyle={section.style} />}
 
        renderSectionHeader={({ section: { title } }) => <Text style={{fontSize:12,color:"black"}}>{title}</Text>}
        renderSectionFooter={({ section: { city } }) => <Text style={{fontSize:12,color:"black"}}>{city}</Text>}

      /> */}


        </ScrollView>
        </SafeAreaView>
        {/* </View> */}
         </ImageBackground> 
    )
}


  
    
// function Item({ title }) {
//     return (
//       <View style={{backgroundColor: '#F8C471',padding: 20,marginVertical:10}}>
//         <Text style={{fontSize: 24,color:"#E74C3C"}}>{title}</Text>
//       </View>
//     );
//   }
  
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
  
       
  const data =[
    {title :"GROUP ADMIN",
      data :{id:1,title : 'Sarthi',city:"Ahmedabad",coutry:"India"}},
    {title :"GROUP Members",  
      data :[
        {id:2,title : 'Jainik',city:"Surat",coutry:"India"},
        {id:3,title : 'Sid',city:"Surat",coutry:"India"},
        {id:4,title : 'Harshit',city:"Ahmedabad",coutry:"India"},
        {id:5,title : 'Kevin',city:"Baroda",coutry:"India"},
        {id:6,title : 'Moin',city:"Bharuch",coutry:"India"},
        {id:7,title : 'Keval',city:"Delhi",coutry:"India"},
        {id:9,title : 'Krunal',city:"Mumbai",coutry:"India"},
        {id:10,title : 'Yash',city:"Kolkata",coutry:"India"},
        {id:11,title : 'Akshat',city:"Bhavanagar",coutry:"India"},
        {id:12,title : 'Deep',city:"Goa",coutry:"India"},
        {id:13,title : 'Jigar',city:"Abu",coutry:"India"},
        {id:14,title : 'Komit',city:"Kashmir",coutry:"India"},
        {id:15,title : 'Ali',city:"Vishakhapatanam",coutry:"India"},
        {id:16,title : 'Pratik',city:"Bangalore",coutry:"India"},
        {id:17,title : 'Parshav',city:"Hyderabad",coutry:"India"},
        {id:18,title : 'Asim',city:"Pune",coutry:"India"},
        {id:19,title : 'Shivang',city:"Chennai",coutry:"India"},
        {id:20,title : 'Haider',city:"New York",coutry:"New York"},
        {id:21,title : 'Sunny',city:"Houston",coutry:"Texas"},]
    }
     ]
       
        

export default Another