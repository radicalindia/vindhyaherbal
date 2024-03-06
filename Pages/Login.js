import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../utils/GlobalStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomTextInput } from '../components/CustomTextInput';
import { CustomButton } from '../components/CustomButton';
import theme from '../utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../App';
import { addNavREf } from '../redux/actions/navigationREf';
import { http } from '../utils/AxiosInstance';


const Login = ({navigation}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState('ashu@gmail.com');
    const [password, setPassword] = useState('123456');
    const dispactch=useDispatch()

    const login = async () => {

        try {
            const response=  await  http.get('/', {
                params: {
                    method: 'login',
                    email: email?.trim(),
                    password: password?.trim()
                }
            }) 
            console.log('Response:', response.data?.response);
              if(response?.data?.response?.userId){
                AsyncStorage.setItem("user",JSON.stringify(response.data?.response));
                await dispactch(addNavREf("Home"))
                navigation.replace("Home");
              }
              else{
                Alert.alert("Invalid Credentials")

              }
        } catch (error) {
             console.log(error)   
        }
        

    }

    return (
        <ScrollView contentContainerStyle={{padding:15,backgroundColor:"white"}}>
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
            <CustomButton onPressfuntion={()=>login()} text={"Sign In"} marginTop={"20%"} />
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <Text style={[styles.text2]}>Don't have an account ? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("CreateAccount")}>
                    <Text style={{ color: theme.colors.primaryOpacity, fontWeight: "bold" }}> Register now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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