import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { http } from '../utils/AxiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../utils/GlobalStyles';
import { CustomTextInput } from '../components/CustomTextInput';
import { CustomButton } from '../components/CustomButton';
import theme from '../utils/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { retrireveUserFromLocal } from '../redux/actions/userAction';
import { navigate } from '../App';

const Address = () => {
    const [ name,setName]=useState(data?.name);
    const [ houseNo,setHouseNo]=useState(data?.houseNo)
    const [ pincode,setPincode]=useState(data?.pincode);
    const [ address,setAddress]=useState(data?.address);
    const [ placeOrderLoading,setPlcaeOrderLoading]=useState(false);
    const cart = useSelector(({cart})=>cart?.data);
    const productIdsArray = cart.map((item)=>{return item?.productId})
    const productqtysArray = cart.map((item)=>{return item?.qty})
    const user = useSelector(({user})=>user?.data)
    const [data,setData]=useState();
    const [ loading,setLoading]=useState(false);
    const [ addressBookIndex,setAddressBookIndex]=useState(0);
    const [ length , setLength]=useState();


     const dispatch = useDispatch()
    useEffect(()=>{
        // dispatch(retrireveUserFromLocal())
       fetch()
    },[user]);
    const fetch =async()=>{
        console.log(user?.userId)
  

        try {
            const {data}= await http.get("/",{params:{
                method:"viewAddress",
                userId:user?.userId

            }})
        console.log("d",data?.addressBook);
        setLength(data?.addressBook)
        setData(data?.addressBook);
        setAddress(data?.addressBook[addressBookIndex]?.address);
        setName(data?.addressBook[addressBookIndex]?.name);
        setPincode(data?.addressBook[addressBookIndex]?.pincode);
        setHouseNo(data?.addressBook[addressBookIndex]?.houseNo)

        } catch (error) {
            console.log(error)
        }
    }
    const addAddress =async()=>{
        console.log(user)
        setLoading(true);
        try {
            const {data}= await http("/",{params:{
                method:"addAddress",
                house:houseNo,
                address:address,
                name:name,
                userId:user?.userId

            }});
            console.log("sube",data);
            fetch()
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    const placeOrder =async()=>{
        console.log(user)
        setPlcaeOrderLoading(true)
        try {
            const {data}= await http("/",{params:{
                method:"placeOrder",        
                address:addressBookIndex,
                productId:productIdsArray.toString(),
                qty:productqtysArray.toString(),
                userId:user?.userId

            }});
            console.log("place order",data);
            Alert.alert("Order have placed successfully")
            navigate("Cart")
            setPlcaeOrderLoading(false)
        } catch (error) {
            console.log(error);
            setPlcaeOrderLoading(false);
        }
    }
    useEffect(()=>{
      if(data){
        console.log(data)
        setAddress(data[addressBookIndex]?.address);
        setName(data[addressBookIndex]?.name);
        setPincode(data[addressBookIndex]?.pincode);
        setHouseNo(data[addressBookIndex]?.houseNo)
      }
    },[addressBookIndex]);
    useEffect(()=>{
   dispatch(retrireveUserFromLocal())
    },[])

  return (
    <ScrollView contentContainerStyle={[globalStyles.container2]}>
         <CustomTextInput
                label={"Name"}
                value={name}
                setValue={setName}
                placeholder={"Reciver Name"}
                marginTop={"5%"}
            />
             <CustomTextInput
                label={"Address"}
                value={address}
                setValue={setAddress}
                placeholder={"Enter Your Address"}
                marginTop={"5%"}
            />
            <CustomTextInput
                label={"House Number"}
                value={houseNo}
                setValue={setHouseNo}
                placeholder={"Enter Your House No."}
                marginTop={"5%"}
            />
            <CustomTextInput
                label={"Pincode"}
                value={pincode}
                setValue={setPincode}
                placeholder={"Enter Your Pincode"}
                marginTop={"5%"}
            />
            {/* {loading?<ActivityIndicator size={"large"} color={theme.colors.primaryOpacity} style={{marginRight:"auto",marginLeft:"auto",marginTop:"10%"}}/>: */}
          <CustomButton loading={loading} onPressfuntion={()=>addAddress()} text={"Add Address"} marginTop={"10%"} /> 
          { length?.length>0&&<CustomButton loading={placeOrderLoading} onPressfuntion={()=>placeOrder()} text={"Place Order"} marginTop={"10%"} />}
  <View style={{flexDirection:"row",flexWrap:"wrap"}}>
    {length&&length.map((item,index)=>(
        <TouchableOpacity   onPress={()=>setAddressBookIndex(index)} style={{height:25,width:25,borderRadius:15,justifyContent:"center",alignItems:"center",backgroundColor:theme.colors.primaryOpacity,marginVertical:20,marginRight:20}} ><Text style={{color:"white"}}>{index+1}</Text></TouchableOpacity>
    ))}
  </View>

    </ScrollView>
  )
}

export default Address