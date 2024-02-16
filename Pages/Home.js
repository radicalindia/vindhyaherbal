import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList, } from 'react-native';
// Adjust the import path based on your project structure
import HorizontalPhotoScrollView2 from '../components/Carosoul';
import { globalStyles } from '../utils/GlobalStyles';
import theme from '../utils/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const YourComponent = () => {
  const [search, setSearch] = useState();
  return (



    <View style={[{ paddingHorizontal: 25,}]}>



      <Text style={[globalStyles.text, { marginVertical: 10 }]}>Home</Text>

      <View style={[globalStyles.rowflex,{marginBottom:10}, globalStyles.searchBox]}>
        <MaterialIcons name="search" color="#35383F" size={20} />
        <TextInput
          style={{ width: '80%' }}
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
          <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medicines 1</Text>
        </View>
        <View style={[styles.producBo]}>
          <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medicines 2</Text>
        </View>
      </View>
      <View style={[styles.ext]}>
        <View style={[styles.producBo]}>
          <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medicines 3</Text>
        </View>
        <View style={[styles.producBo]}>
          <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medicines 4</Text>
        </View>
      </View>

      <Text style={[styles.text, { marginTop: '20%' }, globalStyles.text]}>Top Medicine</Text>
      <ScrollView horizontal>

        <View style={[styles.producBox]}>

          <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medical On Wheel</Text>
        </View>
        <View style={[styles.producBox]}>

          <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medical On Wheel</Text>
        </View>
        <View style={[styles.producBox]}>

          <Text style={[{ color: "white", fontSize: 11 }, styles.medicalonwheel]}>Medical On Wheel</Text>
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
    width: 140,
    height: 120,
    marginRight: 20,
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


  },
  ext: {
    margin: 'auto',
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  medicalonwheel: {
    width: 115,
    marginLeft: 3,
    backgroundColor: "black",
    height: 15,
    textAlign: "center",
    borderRadius: 5,
    opacity: .5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    // marginLeft:10,
    // marginBottom:5
  }
});


export default YourComponent;
