import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import theme from '../utils/theme';
import { navigate } from '../App';



const TopBar = () => {
    const handleIconPress = () => {
        navigate('Profile');
    }
    return (
        <View style={[styles.top]}>
            <Text style={[styles.text]}>Medical On Wheel</Text>

            <TouchableOpacity style={{marginLeft:"auto"}} onPress={handleIconPress}>
            <Image style={styles.icon} source={require("../assests/images/cartIcon.png")} />
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
        height: '5%',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: "white",
        elevation: 10,
        justifyContent: "space-between",
        flexDirection: 'row',
        // marginRight: 'auto',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        // marginBottom: 'auto',
        color: theme.colors.primaryOpacity,
        textDecorationLine: "underline",
        opacity: .5
    },
    icon: {
        width: 20,
        height: 20,
        marginRight:10,
        marginLeft: 'auto',
    },

})

export default TopBar;
