import { Image, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react'
import { box, down,up } from "../../img/index"
import { check } from '../../img/index'

const props = () => {

  const reducer = (state, action) => {
    if (action.type === "INC") {
      return (state = state + 1)
    }
    if (action.type === "DC") {
      // let zero = 0
      // state > 1 ? state - 1 : (zero = 0)
      // return zero
      return (state = state - 1)
    }
   
    return state
  }
  const [state, update] = useReducer(reducer, 0)

  const [getnum, setnum] = useState(false)
  useLayoutEffect(() => {
    if (getnum === 0) {
      setnum(getnum + (Math.random() * 100))
    }
  }, [getnum])

  const count = useRef(0)  
  useEffect(() => {
    count.current = count.current + 1
    console.log("Sarthi raval");
  })

  useLayoutEffect(() => {
    console.log("Sarthi");
  })

  const [getmynum ,setmynum] = useState(0)
  const counterNUmber = (num) => {
    for(let i =0 ;i < 1000000;i++){
      return num
    }
  }


  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => update({ type: "INC" })}>
        <Image
          style={{ width: 50, height: 50, alignSelf: "center" }}
          source={box}
        />

      </TouchableOpacity>
      <Text style={{ alignSelf: "center" ,marginTop:15,marginBottom:15}}>
        {state}</Text>

      <TouchableOpacity onPress={() => update({ type: "DC" })}>
        <Image
          style={{ width: 50, height: 50, alignSelf: "center" }}
          source={check}
        />

      </TouchableOpacity>

      <TouchableOpacity onPress={() => setnum(0)}>
        <Image
          style={{ width: 50, marginTop: 20, height: 50, alignSelf: "center" }}
          source={down}
        />
      </TouchableOpacity>

      <Text style={{ alignSelf: "center", marginTop: 15 }}>
        Total click of Image = {count.current }</Text>
        
      <Text style={{ alignSelf: "center", marginTop: 15 }}>
        {getnum}</Text>

        
    </SafeAreaView>
  )
}

export default props