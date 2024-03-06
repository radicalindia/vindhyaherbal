import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../utils/GlobalStyles';
import { Image } from 'react-native';
import theme from '../utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorsList } from '../redux/actions/doctors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const DocterData = ({route}) => {
    const id = route?.params?.id
    const doctorsList = useSelector(({doctors})=>doctors?.data?.response);
    // console.log(doctorsList);
    const [ search,setSearch]=useState();

    const [laoding,setLoading]=useState(false);
    const dispatch=useDispatch()
  
    useEffect(()=>{
   const fetch=async()=>{
    try {
      setLoading(true);
      await dispatch(getDoctorsList(id));
      setLoading(false)  
    } catch (error) {
      console.log(error)
    }
    }
   fetch();
    },[]);

    const renderItem=({item})=>{
        const image = `https://www.medicalonwheel.com/${item.icon.substring(27)}`
        return (
            // <View style={[styles.box]}>

            <View style={[styles.producBo]}>
                <Image style={[styles.im]} source={{ uri:item?.icon?.toString()?.substring(0,8)+"www."+item?.icon?.toString()?.substring(8,40)+"/"+item?.icon?.toString()?.substring(40)}} />

                <View style={{marginLeft:10}}>
                    <Text style={[styles.text]}>{item.doctorName}</Text>
                    <Text style={[styles.text, { marginTop: 5,color:theme.colors.primaryOpacity }]}>{item.qualification}</Text>
                    <TouchableOpacity style={[styles.button]}><Text style={[styles.booktext]} >BOOK APPOINTMENT</Text></TouchableOpacity>

                </View>
            {/* </View> */}
        </View>
        )
    }
    return (
        <View style={[globalStyles.container2]}>
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

        {laoding?<ActivityIndicator size={"large"} color={"black"} style={{marginTop:50,marginLeft:"auto",marginRight:"auto"}}/>:
        <FlatList
        contentContainerStyle={{paddingBottom:60}}
        data={doctorsList}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        // numColumns={2}
      />}

        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: '12%',
        paddingHorizontal: 20,
        paddingTop: 20,
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 10,

    },
    producBo: {
        // justifyContent: "space-between",
        flexDirection: 'row',
        marginRight:'auto',
        height:130,
        padding:10,
        backgroundColor:"white",
        elevation:3,
        width:"99%",
        marginVertical:10,
        marginLeft:3,
        borderRadius:15,
        alignItems:"center"
    },
    booktext:{
          fontSize:12,
          color:"black"
    },

    text: {
        fontSize: 13,
        fontWeight: 'bold',
        marginVertical: 10,
        width:"80%",
        marginBottom: 'auto',
        // marginLeft:40,
        marginRight:10
    },

    im: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    button:{
        paddingHorizontal:10,
        borderRadius:1,
        borderWidth:1,
        borderColor:"black",
        width:140,
        paddingVertical:2,
        marginTop:5
    }
})

export default DocterData;
