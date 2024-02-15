import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../utils/GlobalStyles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Doctor = () => {
    const [ search,setSearch]=useState();
    const doctorTypeArray= [
        { name: 'Cardiologists', value: 'cardiologists' },
        { name: 'Orthopedics', value: 'orthopedics' },
        { name: 'Dentist', value: 'dentist' },
        { name: 'ENT Specialist', value: 'ent specialist' },
        { name: 'Diabeto & Endo', value: 'diabeto & endo' },
        { name: 'Gynecologists', value: 'gynecologists' },
        { name: 'Ayurveda', value: 'ayurveda' },
        { name: 'Child Specialist', value: 'child specialist' },
        { name: 'Dermatologist', value: 'dermatologist' },
        { name: 'Eye Specialist', value: 'eye specialist' },
        { name: 'Consultant Physician', value: 'consultant physician' },
        { name: 'Homeopath', value: 'homeopath' },
        { name: 'Neurologist', value: 'neurologist' },
        { name: 'Dietician', value: 'dietician' },
        { name: 'Radiologist', value: 'radiologist' },
        { name: 'Surgeon', value: 'surgeon' },
        { name: 'Nephrologist', value: 'nephrologist' },
        { name: 'Oncologist', value: 'oncologist' },
        ]
     const RenderItem=({item,index})=>{
        return (
            <View style={[styles.renderItemBox]}>
               <Text style={{color:"black"}}>{item.name}</Text>
            </View>
        )
     }
  return (
    <View style={[globalStyles.container,{backgroundColor:"white"}]}>
       <View style={[globalStyles.rowflex, globalStyles.searchBox]}>
        <MaterialIcons name="search" color="#35383F" size={20} />
        <TextInput
          style={{width: '80%'}}
          placeholder="Search"
          value={search}
          onChangeText={(e)=>setSearch(e)}
          placeholderTextColor={'#35383F'}
        />
      </View>  
      {/* <Text>Doctor</Text> */}
      <FlatList
        data={doctorTypeArray}
        renderItem={RenderItem}
        numColumns={2}
        keyExtractor={item => item._id}
        contentContainerStyle={{paddingBottom: 60,marginTop:20}}
      />
    </View>
  )
}

const styles= StyleSheet.create({
     renderItemBox:{
        width:"44%",
        height:100,
        // borderRadius:2,
        backgroundColor:"white",
        elevation:3,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
     }
})

export default Doctor