import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
 // Adjust the import path based on your project structure
import HorizontalPhotoScrollView2 from '../components/Carosoul';
import { globalStyles } from '../utils/GlobalStyles';
import theme from '../utils/theme';

const YourComponent = () => {
  return (
    <View style={[{paddingHorizontal:25,paddingTop:20}]}>
      <Text style={[globalStyles.text,{marginVertical:10}]}>Home</Text>
      <HorizontalPhotoScrollView2/>
      <Text style={[styles.text, globalStyles.text]}>Top Medicine</Text>
      <ScrollView horizontal>
      <View style={[styles.producBox]}>
        
          <Text style={[{color:"white",fontSize:11},styles.medicalonwheel]}>Medical On Wheel</Text>
      </View>
      <View style={[styles.producBox]}>
        
        <Text style={[{color:"white",fontSize:11},styles.medicalonwheel]}>Medical On Wheel</Text>
    </View>
    <View style={[styles.producBox]}>
        
        <Text style={[{color:"white",fontSize:11},styles.medicalonwheel]}>Medical On Wheel</Text>
    </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black"
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop:30
  },
  producBox:{
    width:120,
    height:120,
    marginRight:20,
    borderRadius:10,
    backgroundColor:"white",
    elevation:2,
    borderBottomColor:theme.colors.primaryOpacity,
    borderBottomWidth:2,


  },
  medicalonwheel:{
    width:115,
    marginLeft:3,
    backgroundColor:"black",
    height:15,
    textAlign:"center",
    borderRadius:5,
    opacity:.5,
    justifyContent:"center",
    alignItems:"center",
    marginTop:"auto",
    // marginLeft:10,
    // marginBottom:5
  }
});


export default YourComponent;
