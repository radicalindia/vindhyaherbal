import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import theme from '../utils/theme';
import { navigate } from '../App';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const TopBar = () => {
    const handleIconPress = () => {
        navigate('Profile');
    }
    return (
        <View style={[styles.top]}>
            <Text style={[styles.text]}>Medical On Wheel</Text>

            <TouchableOpacity style={{marginLeft:"auto"}} onPress={handleIconPress}>
            <MaterialCommunityIcons name="cart" color={theme.colors.primaryOpacity} size={20}/>

            </TouchableOpacity>

            <TouchableOpacity onPress={handleIconPress}>
                <Image style={[styles.icon]} source={require("../assests/images/download.png")} />
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: "white",
        elevation: 1,
        justifyContent: "space-between",
        flexDirection: 'row',
        // marginRight: 'auto',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        // marginBottom: 'auto',
        color: theme.colors.primaryOpacity,
        // textDecorationLine: "underline",
        // opacity: .8,
    },
    icon: {
        width: 20,
        height: 20,
        borderRadius:10,
        marginLeft:10,
        marginRight: 'auto',
    },

})

export default TopBar;
