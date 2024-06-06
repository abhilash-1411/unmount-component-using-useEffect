

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';




const App=()=> {
  const [show,setShow]=useState(true);

  return (
    <View>
    <Text style={{fontSize:30}}>useEffect for unmount Component</Text>
    <Button title='Toggle' onPress={()=>setShow(!show)}/>
    {
      show?<Student/>:null
    }
    </View>
  )
   
}
const Student=()=> {
  let timer=setInterval(()=>{
    console.warn("Timer called")
  },2000)
  useEffect(()=>{
   return()=>clearInterval(timer)
  })
  return(
    <View >
      <Text style={{fontSize:25,color:'red'}}>Student</Text>
    </View>
  )
}

export default App;
