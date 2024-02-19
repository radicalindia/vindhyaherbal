import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native';
import { globalStyles } from '../utils/GlobalStyles';
import { Image } from 'react-native';
import theme from '../utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorsList } from '../redux/actions/doctors';


const DocterData = ({route}) => {
    const id = route?.params?.id
    const doctorsList = useSelector(({doctors})=>doctors?.data?.response);
    console.log(doctorsList);
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
                <Image style={[styles.im]} source={{ uri:image }} />

                <View>
                    <Text style={[styles.text]}>{item.doctorName}</Text>
                    <Text style={[styles.text, { marginTop: -5,color:theme.colors.primaryOpacity }]}>{item.qualification}</Text>

                </View>
            {/* </View> */}
        </View>
        )
    }
    return (
        <View style={[globalStyles.container2]}>

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
        justifyContent: "space-between",
        flexDirection: 'row',
        marginRight:'auto',
    },

    text: {
        fontSize: 13,
        fontWeight: 'bold',
        marginVertical: 10,
        // width:150,
        marginBottom: 'auto',
        // marginLeft:40,
        marginRight:10
    },

    im: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
})

export default DocterData;
