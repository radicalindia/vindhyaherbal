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
import { getprofile } from '../functions.js/profile';


const Login = ({navigation}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState('9479536321');
    const [password, setPassword] = useState('123456');
    const [ visible,setVisible]=useState(true);
    const dispactch=useDispatch()
    const [ loading,setLoading]=useState(false)

    const login = async () => {
        try {
            setLoading(true)
            const response=  await  http.get('/', {
                params: {
                    method: 'login',
                    mobile: email?.trim(),
                    password: password?.trim()
                }
            }) 
            console.log('Response:', response.data);
            setLoading(false)
            if(response?.data?.response?.status==2){
                return alert("Not Registered")
            }
              if(response?.data?.response?.status==1){
                // const data = await getprofile(response?.data?.response?.userId);
                AsyncStorage.setItem('userid',response?.data?.response?.distributorId);
                // console.log(data?.response);
                // AsyncStorage.setItem("user",JSON.stringify(data?.response));
                await dispactch(addNavREf("Home"))
                navigation.replace("Home");
              }
              else{
                Alert.alert("Invalid Credentials")

              }
        } catch (error) {
             console.log(error)   ;
             
        }
        

    }

    return (
        <ScrollView contentContainerStyle={{padding:15,backgroundColor:theme.colors.bg,height:'100%',alignItems:"center"}}>
 
             
            {/* <CustomTextInput
     label={"Name"}
     value={name}
     setValue={setName}
     placeholder={"Enter Your Name"}
     marginTop={"35%"}
     /> */}
                         {/* <Image source={require("../assests/images/medical.png")}  style={{width:240,height:150,marginTop:20,marginRight:"auto",marginLeft:"auto"}} resizeMode='contain'/> */}

                         {/* <Text style={[globalStyles.text, { fontSize: 22, marginTop: "25%" }]}>Welcome back!</Text> */}
            <Text style={[globalStyles.text,{fontSize:20,marginRight:"auto",marginLeft:30,marginTop:100}]}>Login</Text>
            <Text style={[globalStyles.text2,{fontSize:14,marginRight:"auto",marginLeft:30}]}>Provide the details below for login</Text>

            {/* <Image source={require("../assests/images/Z.png")} style={{width:200,height:200,borderRadius:100}}/> */}

            <CustomTextInput
                label={"Number"}
                value={email}
                setValue={setEmail}
                placeholder={"Enter"}
                iconName={"email"}
                marginTop={"20%"}
            />  
            <CustomTextInput
                label={"Password"}
                value={password}
                iconName={"key"}
                secure={true}
                visible={visible}
                setVisible={setVisible}
                setValue={setPassword}
                placeholder={"Enter Password"}
                marginTop={15}
            />
            <TouchableOpacity style={{ marginLeft: "auto", marginTop: 20 }}><Text style={{ color: theme.colors.primaryOpacity }}>Forgot Password?</Text></TouchableOpacity>
            <CustomButton loading={loading} onPressfuntion={()=>login()} text={"Sign In"} marginTop={"20%"} />
            {/* <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <Text style={[styles.text2,]}>Don't have an account ? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("CreateAccount")}>
                    <Text style={{ color: theme.colors.primary, fontWeight: "bold" }}> Register now</Text>
                </TouchableOpacity>
            </View> */}
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