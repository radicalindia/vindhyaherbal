import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../utils/GlobalStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomTextInput } from '../components/CustomTextInput';
import { CustomButton } from '../components/CustomButton';
import theme from '../utils/theme';
import { useSelector } from 'react-redux';


const Login = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={[globalStyles.container]}>
            <Text style={[globalStyles.text, { fontSize: 22, marginTop: 70 }]}>Welcome Back!</Text>
            <Text style={[globalStyles.text2]}>Sign in to continue</Text>
            <View style={[globalStyles.rowflex, { marginTop: 50 }]}>
                <TouchableOpacity style={[styles.googleButton]}>
                    <Image source={require("../assests/images/fb.png")} />
                    <Text style={[styles.buttonText]}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.googleButton]}>
                    <Image source={require("../assests/images/google.png")} />
                    <Text style={[styles.buttonText]}>Google</Text>
                </TouchableOpacity>
            </View>
            {/* <CustomTextInput
     label={"Name"}
     value={name}
     setValue={setName}
     placeholder={"Enter Your Name"}
     marginTop={"35%"}
     /> */}
            <CustomTextInput
                label={"Email Id"}
                value={email}
                setValue={setEmail}
                placeholder={"Enter Your Email id"}
                marginTop={"45%"}
            />
            <CustomTextInput
                label={"Password"}
                value={password}
                setValue={setPassword}
                placeholder={"Enter Password"}
                marginTop={"5%"}
            />
            <TouchableOpacity style={{ marginLeft: "auto", marginTop: 20 }}><Text style={{ color: theme.colors.primaryOpacity }}>Forgot Password?</Text></TouchableOpacity>
            <CustomButton text={"Sign In"} marginTop={"20%"} />
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <Text style={[styles.text2]}>Don't have an account ? </Text>
                <TouchableOpacity>
                    <Text style={{ color: theme.colors.primaryOpacity, fontWeight: "bold" }}> Register now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    googleButton: {
        width: "40%",
        borderRadius: 5,
        elevation: 5,
        backgroundColor: "white",
        height: 40,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    buttonText: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",

    }
})

export default Login