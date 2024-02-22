import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../utils/theme'

export const CustomButton = ({text,marginTop, onPressfuntion}) => {
  return (
    <TouchableOpacity onPress={onPressfuntion} style={{backgroundColor:theme.colors.primary,opacity:.8,width:"100%",height:50,borderRadius:5,justifyContent:"center",alignItems:"center",marginTop:marginTop}}>
      <Text style={{fontSize:15,color:"white"}}>{text}</Text>
    </TouchableOpacity>
  )
}

