import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../utils/GlobalStyles'
import { CustomTextInput } from '../components/CustomTextInput'
import { CustomButton } from '../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { http } from '../utils/AxiosInstance'
import { navigate } from '../App'

const CreatenewList = () => {
    const [ listname,setListname]=useState();
    const [ loading,setLoading]=useState();



    const createList = async () => {
        try {
            setLoading(true)
            const id = await AsyncStorage.getItem("userid");
            const response=  await  http.get('/', {
                params: {
                    method: 'createList',
                    distributorId: id,
                    listName:listname
            
                }
            }) 
            console.log('Response:', response.data);
            navigate("ProductList",{name:listname,listid:response?.data?.response?.listId})
             setLoading(false)
              if(response?.data){

              }
              else{
                Alert.alert("Invalid Credentials")

              }
        } catch (error) {
             console.log(error)   ;
             
        }
        

    }

  return (
    <View style={[globalStyles.container2]}>
      <Text style={[globalStyles.text,{fontSize:20,marginTop:40}]}>Create new list</Text>
      <Text style={[globalStyles.text2,{fontSize:14,}]}>Provide the details below for create new list</Text>
      <CustomTextInput
                label={"Name"}
                labelStatus ={!listname?false:true}
                value={listname}
                setValue={setListname}
                placeholder={"Name"}
                iconName={"email"}
                marginTop={"20%"}
            />  
                        <CustomButton loading={loading} onPressfuntion={()=>createList()} text={"Create List"} marginTop={"auto"} />


    </View>
  )
}

export default CreatenewList