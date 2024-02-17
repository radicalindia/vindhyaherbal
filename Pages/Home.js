import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList, Image, } from 'react-native';
// Adjust the import path based on your project structure
import HorizontalPhotoScrollView2 from '../components/Carosoul';
import { globalStyles } from '../utils/GlobalStyles';
import theme from '../utils/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const YourComponent = () => {
  const [search, setSearch] = useState();
  return (



    <View style={[globalStyles.container2,{}]}>



      {/* <Text style={[globalStyles.text, { marginVertical: 10 }]}>Home</Text> */}

      <View style={[ globalStyles.searchBox,{backgroundColor:"white"}]}>
        <MaterialIcons name="search" color="#35383F" size={20} />
        <TextInput
          style={{ width: '90%',backgroundColor:"white" }}
          placeholder="Search"
          value={search}
          onChangeText={(e) => setSearch(e)}
          placeholderTextColor={'#35383F'}
        />
      </View>

      <HorizontalPhotoScrollView2 />

      <Text style={[styles.text, globalStyles.text]}>Products</Text>
      <View style={[styles.ext]}>
        <View style={[styles.producBo]}>
          <Image style={{width:60,height:20,marginLeft:5,marginTop:5}} source={require("../assests/images/medical.png")}/>
          <Image style={{ height:70,}} resizeMode='contain' source={{uri:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/5cc48b44bac744eba09ef6c33b006cef.jpg"}}/>
          <Text style={{color:"black",fontWeight:"bold",marginLeft:5,textAlign:"center",fontSize:13}}>Himalaya Vitals</Text>
        </View>
        <View style={[styles.producBo]}>
          <Image style={{width:60,height:20,marginLeft:5,marginTop:5}} source={require("../assests/images/medical.png")}/>
          <Image style={{ height:70,}} resizeMode='contain' source={{uri:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/5cc48b44bac744eba09ef6c33b006cef.jpg"}}/>
          <Text style={{color:"black",fontWeight:"bold",marginLeft:5,textAlign:"center",fontSize:13}}>Himalaya Vitals</Text>
        </View>
      </View>
      <View style={[styles.ext]}>
      <View style={[styles.producBo]}>
          <Image style={{width:60,height:20,marginLeft:5,marginTop:5}} source={require("../assests/images/medical.png")}/>
          <Image style={{ height:70,}} resizeMode='contain' source={{uri:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/5cc48b44bac744eba09ef6c33b006cef.jpg"}}/>
          <Text style={{color:"black",fontWeight:"bold",marginLeft:5,textAlign:"center",fontSize:13}}>Himalaya Vitals</Text>
        </View>
        <View style={[styles.producBo]}>
          <Image style={{width:60,height:20,marginLeft:5,marginTop:5}} source={require("../assests/images/medical.png")}/>
          <Image style={{ height:70,}} resizeMode='contain' source={{uri:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/5cc48b44bac744eba09ef6c33b006cef.jpg"}}/>
          <Text style={{color:"black",fontWeight:"bold",marginLeft:5,textAlign:"center",fontSize:13}}>Himalaya Vitals</Text>
        </View>
      </View>

      <Text style={[styles.text, globalStyles.text,{marginTop:"5%",marginBottom:5}]}>Lab Test Package</Text>
      <ScrollView horizontal>

        <View style={[styles.producBox]}>
        <Image style={{width:90,height:30,marginLeft:5,marginTop:5,marginBottom:10}} source={require("../assests/images/medical.png")}/>

          <Text style={{color:"black",fontWeight:"bold"}}>Cardiac Risk Matters</Text>
          <Text style={{color:"black",fontWeight:"bold",opacity:.5}}>Include 5 tests</Text>
          <Text style={{color:"black",fontWeight:"bold"}}>345</Text>


          {/* <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medical On Wheel</Text> */}
        </View>
        <View style={[styles.producBox]}>
        <Image style={{width:90,height:30,marginLeft:5,marginTop:5,marginBottom:10}} source={require("../assests/images/medical.png")}/>

          <Text style={{color:"black",fontWeight:"bold"}}>Cardiac Risk Matters</Text>
          <Text style={{color:"black",fontWeight:"bold",opacity:.5}}>Include 5 tests</Text>
          <Text style={{color:"black",fontWeight:"bold"}}>345</Text>


          {/* <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medical On Wheel</Text> */}
        </View>
        <View style={[styles.producBox]}>
        <Image style={{width:90,height:30,marginLeft:5,marginTop:5,marginBottom:10}} source={require("../assests/images/medical.png")}/>

          <Text style={{color:"black",fontWeight:"bold"}}>Cardiac Risk Matters</Text>
          <Text style={{color:"black",fontWeight:"bold",opacity:.5}}>Include 5 tests</Text>
          <Text style={{color:"black",fontWeight:"bold"}}>345</Text>


          {/* <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medical On Wheel</Text> */}
        </View>
        <View style={[styles.producBox]}>
        <Image style={{width:90,height:30,marginLeft:5,marginTop:5,marginBottom:10}} source={require("../assests/images/medical.png")}/>

          <Text style={{color:"black",fontWeight:"bold"}}>Cardiac Risk Matters</Text>
          <Text style={{color:"black",fontWeight:"bold",opacity:.5}}>Include 5 tests</Text>
          <Text style={{color:"black",fontWeight:"bold"}}>345</Text>


          {/* <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medical On Wheel</Text> */}
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
    backgroundColor: "black"
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 'auto'
  },
  producBo:{
    width:"46%",
    height: 120,
    // marginRight: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 2,
    borderBottomColor: theme.colors.primaryOpacity,
    borderBottomWidth: 2,
  },
  producBox: {
    width: 120,
    height: 120,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 2,
    borderBottomColor: theme.colors.primaryOpacity,
    borderBottomWidth: 2,
    paddingHorizontal:5


  },
  ext: {
    // margin: 'auto',
    marginTop: 10,
    width:"100%",
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  medicalonwheel: {
    width: 115,
    marginLeft: 3,
    backgroundColor:theme.colors.primaryOpacity,
    height: 15,
    textAlign: "center",
    borderRadius: 5,
    opacity: .5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    color:"black"
    // marginLeft:10,
    // marginBottom:5
  }
});


export default YourComponent;
