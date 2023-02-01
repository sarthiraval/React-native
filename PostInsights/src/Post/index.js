import React from 'react'
import styles from './style'
import { View, Text, SafeAreaView, ScrollView, Image, FlatList } from 'react-native'

const data =
  [
    {
      id: "58,000",
      title: 'Likes',
      image:
        { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' }
    },
    {
      id: "2,000", title: 'Likes',
      image: { url: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGElMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' }
    },
    {
      id: 300, title: 'Likes',
      image: { url: "https://images.unsplash.com/photo-1599114798990-4fac25c3835a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGphZ3VhciUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" }
    },
    {
      id: "40,000", title: 'Likes',
      image: { url: 'https://images.unsplash.com/photo-1616455164843-dc474e264ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJtdyUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60' }
    },
    {
      id: "50,000", title: 'Likes',
      image: { url: "https://images.unsplash.com/photo-1652509373706-32b65f415e33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZvbHZvJTIwc3BvcnQlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" }
    },
    {
      id: "50,000", title: 'Likes',
      image: { url: "https://images.unsplash.com/photo-1653417580711-b43c9deb0d64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG1hc2VyYXRpJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" }
    },

  ]


const details = [
  {
    title: 'Top Age Ranges',
    first: "18-24",
    firstpart: "67%",
    second: "25-34",
    secondpart: "43%",
    thired: "35-44",
    thiredpart: "23%",
    fourth: "13-17",
    fourthpart: "07%"
  },
  {
    title: 'Top Age Ranges',
    first: "18-24",
    firstpart: "67%",
    second: "25-34",
    secondpart: "43%",
    thired: "35-44",
    thiredpart: "23%",
    fourth: "13-17",
    fourthpart: "07%"
  },
  {
    title: 'Top Age Ranges',
    first: "18-24",
    firstpart: "67%",
    second: "25-34",
    secondpart: "43%",
    thired: "35-44",
    thiredpart: "23%",
    fourth: "13-17",
    fourthpart: "07%"
  }
]

let Post = () => {

  return (

    <SafeAreaView style={styles.safedesign}>


      <View style={styles.designview}>
        <Image source={
          require("PostInsights/src/img/left.png")
          // { uri : "https://www.seekpng.com/png/detail/812-8124478_red-left-arrow-icon.png"}
        } style={styles.imagedesign} />

        <Text style={styles.textdesign}>Post Insights</Text>
      </View>


      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}>


        <View style={styles.flatstyle}>

          {/* start FlatList (Like View)*/}
          <FlatList
            horizontal
            style={{ margin: 2 }}
            showsHorizontalScrollIndicator={false}
            data={data}
            pagingEnabled={true}


            renderItem={({ item }) =>

              <View style={styles.flatlistview}>
                <Image
                  source={item.image}
                  style={styles.flatimage}
                />

                <View style={styles.flatviewdesign} >
                  <Text style={styles.flattextdesgin}>{item.id}</Text>
                  <Text style={styles.flalike}>{item.title}</Text>
                </View>

              </View>

            } />
          {/* end FlatList */}

        </View>

        <Text style={styles.normalnumber}>28,895</Text>
        <Text style={styles.heading}>Total Reach</Text>

        <View style={styles.boredercolors} />

        <Text style={styles.headingnew}>Audience Response</Text>
        <View style={styles.topage}>
          {/* start FlatList (Audience Response view)*/}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={details}
            renderItem={({ item }) =>

              // start top age Ranges view 

              <View style={styles.flatlistview2} >


                <Text style={styles.flattextdesgin2}>{item.title}</Text>
                <Text style={styles.flatfirst2}>{item.first}</Text>
                <View style={styles.instyle}>
                  <View style={styles.linegrow1} />
                  <View style={styles.linegrow2} />
                  <Text style={styles.flatfirst3}>{item.firstpart}</Text>
                </View>


                <Text style={styles.flatfirst2}>{item.second}</Text>
                <View style={styles.instyle}>
                  <View style={styles.linegrow3} />
                  <View style={styles.linegrow4} />
                  <Text style={styles.flatfirst3}>{item.secondpart}</Text>
                </View>


                <Text style={styles.flatfirst2}>{item.thired}</Text>
                <View style={styles.instyle}>
                  <View style={styles.linegrow5} />
                  <View style={styles.linegrow6} />
                  <Text style={styles.flatfirst3}>{item.thiredpart}</Text>
                </View>


                <Text style={styles.flatfirst2}>{item.fourth}</Text>
                <View style={styles.instyle}>
                  <View style={styles.linegrow7} />
                  <View style={styles.linegrow8} />
                  <Text style={styles.flatfirst3}>{item.fourthpart}</Text>

                </View>

              </View>

              // end top age Ranges view 

            }
          />
          {/* end FlatList */}
        </View>
      </ScrollView>

    </SafeAreaView>

  )
}

export default Post                     