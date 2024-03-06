import { View, Text, ActivityIndicator, FlatList, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPathologyDetail } from '../redux/actions/pathology';
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../utils/GlobalStyles';
import { http } from '../utils/AxiosInstance';
import { CustomButton } from '../components/CustomButton';
import theme from '../utils/theme';
import { getCarts } from '../redux/actions/cart';

const PathologyDetail = ({route}) => {
    const id = route?.params?.id;
    console.log(id)
    const [ loading,setLoading]=useState(false)
    const dispatch= useDispatch();
    const detail = useSelector(({pathology})=>pathology?.singleData?.response);
    const user = useSelector(({user})=>user?.data);
    const cart = useSelector(({cart}) => cart?.data);
    const [counter, setCounter] = useState(0);
  
    console?.log(
      user,
     cart?.length>0&& cart?.find(it => it?.productId == id?.packgeId && it?.type == 'medicine')
        ?.qty,
    )
     const [ count,setCount]=useState(0)

    console.log(detail);
    useEffect(()=>{
      setCount( cart?.length>0&&   cart?.find(it => it?.productId == id?.packgeId && it?.type !== 'medicine')
      ?.qty||0)
     },[])
    const [ addtoCartLoading,setAddtocartLaoding]=useState(false)

    const addtoCart=async(item)=>{
      try {
        setAddtocartLaoding(true)
        const method="addtocart"
        const userId=user?.userId
        const type="pathology"
        console.log(item?.testId);
  
        const {data} = await http.get('/',{  params: {
          method,
          type,
          userId,
          productId:id?.packgeId,
          price:id?.packge_price-item?.discount,
          qty:count
  
        },});
        console.log(data);
        dispatch(getCarts())
        Alert.alert("Product added to the cart");
      setAddtocartLaoding(false)
      } catch (error) {
        console.log(error)
        setAddtocartLaoding(false)
      }
      }

    useEffect(()=>{
        const fetch=async()=>{
         try {
           setLoading(true);
           await dispatch(getPathologyDetail(id?.packgeId));
           setLoading(false)  
         } catch (error) {
           console.log(error)
         }
         }
        fetch();
         },[]);

         const Renderitem=({item})=>{
          return (
            <View style={{width:"99%",marginLeft:2,elevation:2,borderRadius:10,backgroundColor:"white",padding:10,marginVertical:10}}>
              <Text style={[globalStyles.text]}>{item?.testName}</Text>
               <Text style={[globalStyles.text2]}>{item?.detail}</Text>
            </View>
          )
         }
     
  return (
    <View style={[globalStyles.container2]}>
         {loading?<ActivityIndicator size={"large"} color={"black"} style={{marginTop:50,marginLeft:"auto",marginRight:"auto"}}/>:<FlatList data={detail} keyExtractor={(_,item)=>item.toString()} renderItem={Renderitem} />}
         <View style={{flexDirection:"row"}}>
              {/* <Text style={{fontSize:14,fontWeight:"bold"}}>₹ {Math.round((85 / 100) *item.mrp)}</Text> */}
            <Text style={{fontSize:14,fontWeight:"bold"}}>₹ {id?.discount}</Text>

              <Text style = {{ textDecorationLine: 'line-through', color: 'red',marginLeft:5,fontSize:13 }}>{id?.packge_price}</Text>
            </View>
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>setCount((prev)=>prev-1)} style={[styles.button]}>
          <Text style={{fontSize: 15, color: 'white'}}>-</Text>
        </TouchableOpacity>
        <Text style={[globalStyles.text,{marginHorizontal:10}]}>{count}</Text>
        <TouchableOpacity onPress={()=>setCount((prev)=>prev+1)} style={[styles.button]}>
          <Text style={{fontSize: 15, color: 'white'}}>+</Text>
        </TouchableOpacity>
          </View>
         {addtoCartLoading?<ActivityIndicator size={"large"} color={theme.colors.primaryOpacity} style={{marginRight:"auto",marginLeft:"auto",marginTop:"10%"}}/>:
             <CustomButton onPressfuntion={()=>addtoCart(id)} text={"Add To Cart"} marginTop={"10%"} />
                    } 
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PathologyDetail