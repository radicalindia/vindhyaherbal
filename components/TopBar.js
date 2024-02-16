import React from 'react';
import { View, StyleSheet ,Text } from 'react-native';
import { Image } from 'react-native';


const TopBar = () => {
    return (
            <View style={[styles.top]}>
                <Text style={[styles.text]}>Hrishi</Text>
                <Image style={[styles.im]} source={require("../assests/images/download.png")}/>
            </View>
    );
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: '5%',
        paddingHorizontal: 20,
        paddingTop: 10,
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 10,
        justifyContent: "space-between",
        flexDirection: 'row',
        marginRight:'auto',
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 'auto',
        marginLeft:40
    },
    im:{
            width: 20,
            height: 20,
            borderRadius: 50
    }
})

export default TopBar;
