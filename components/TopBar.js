import React from 'react';
import { View, StyleSheet ,Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import theme from '../utils/theme';
import { navigate } from '../App';



const TopBar = () => {
    const handleIconPress = ()=>{
      navigate('Profile');
    }
    return (
            <View style={[styles.top]}>
                <Text style={[styles.text]}>Medical On Wheel</Text>
                {/* <Text style={[styles.text]}>Hrishi</Text> */}
                <TouchableOpacity onPress={handleIconPress}>
                <Image style={[styles.im]} source={require("../assests/images/download.png")}/>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: '5%',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: "white",
        elevation: 10,
        justifyContent: "space-between",
        flexDirection: 'row',
        marginRight:'auto',
    },
    text:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 'auto',
        // marginLeft:10,
        color:theme.colors.primaryOpacity,
        textDecorationLine:"underline",
        opacity:.5
    },
    im:{
            width: 20,
            height: 20,
            borderRadius: 50
    }
})

export default TopBar;
