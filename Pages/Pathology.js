import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../utils/GlobalStyles'
import theme from '../utils/theme'

const Pathology = () => {
  const data = [{ name: "blood test ", value: "345", includes: "5 test" }, { name: "Complete check up ", value: "345", includes: "6 test" }]

  const Renderitem = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.producBox]}>
        <Image style={{ width: 90, height: 30, marginLeft: 5, marginTop: 5, marginBottom: 10, }} source={require("../assests/images/medical.png")} />

        <Text style={{ color: "black", fontWeight: "bold" }}>Cardiac Risk Matters</Text>
        <Text style={{ color: "black", fontWeight: "bold", opacity: .5 }}>Include 5 tests</Text>
        <Text style={{ color: "black", fontWeight: "bold" }}>345</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={[globalStyles.container2]}>
      <FlatList
        data={data}
        renderItem={Renderitem}
        keyExtractor={(_, index) => index.toString()}

        numColumns={2}
      />

    </View>
  )
}


const styles= StyleSheet.create({
    producBox: {
        width: "48%",
        height: 120,
        marginRight:"2%",
        marginTop:"2%",
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 2,
        borderBottomColor: theme.colors.primaryOpacity,
        borderBottomWidth: 2,
        paddingHorizontal:5
    
    
      },
})

export default Pathology