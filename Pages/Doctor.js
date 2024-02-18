import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../utils/GlobalStyles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorsCategory } from '../redux/actions/doctors';
import Svg, { Image as SvgImage } from 'react-native-svg';

const Doctor = ({navigation}) => {
  const [search, setSearch] = useState();
  const doctorCategory = useSelector(({doctors})=>doctors?.category?.response);
  console.log(doctorCategory);
  const [laoding,setLoading]=useState(false);
  const dispatch=useDispatch()

  useEffect(()=>{
 const fetch=async()=>{
  try {
    setLoading(true);
    await dispatch(getDoctorsCategory());
    setLoading(false)  
  } catch (error) {
    console.log(error)
  }
  }
 fetch();
  },[])
  const doctorTypeArray = [
    { name: 'Cardiologists', value: 'cardiologists' },

  ]
  const RenderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate("DocterData",{id:item.categoryId})}} style={[styles.renderItemBox]}>
        <Image source={{uri:"https://www.medicalonwheel.com/images/icon/IconImage_758.svg"}} style={{height:60,width:60}}/>
        <Text style={{ color: "black" }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={[globalStyles.container2, { backgroundColor: "white" }]}>
      <View style={[globalStyles.rowflex, globalStyles.searchBox]}>
        <MaterialIcons name="search" color="#35383F" size={20} />
        <TextInput
          style={{ width: '90%' }}
          placeholder="Search Doctor"
          value={search}
          onChangeText={(e) => setSearch(e)}
          placeholderTextColor={'#35383F'}
        />
      </View>
      {/* <Text>Doctor</Text> */}
      <FlatList
        data={doctorCategory}
        renderItem={RenderItem}
        numColumns={2}
        keyExtractor={item => item._id}
        contentContainerStyle={{ paddingBottom: 60, marginTop: 20 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  renderItemBox: {
    width: "44%",
    height: 100,
    // borderRadius:2,
    backgroundColor: "white",
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Doctor