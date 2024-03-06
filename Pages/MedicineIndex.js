import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../utils/GlobalStyles';
import {http} from '../utils/AxiosInstance';
import {useDispatch, useSelector} from 'react-redux';
import {CustomButton} from '../components/CustomButton';
import theme from '../utils/theme';
import {getCarts} from '../redux/actions/cart';

const MedicineIndex = ({route}) => {
  const item = route?.params?.item;
  const user = useSelector(({user}) => user?.data);
  const cart = useSelector(({cart}) => cart?.data);
  const [counter, setCounter] = useState(0);

  console?.log(
    user,
    cart?.length>0&& cart?.find(it => it?.productId == item?.productId && it?.type == 'medicine')
      ?.qty,
  );
   const [ count,setCount]=useState(0)
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
   setCount(  cart?.length>0&&  cart?.find(it => it?.productId == item?.productId && it?.type == 'medicine')
   ?.qty||0)
  },[])

  console.log(item);
  const dispactch = useDispatch();
  const addtoCart = async () => {
    setLoading(true);
    try {
      const method = 'addtocart';
      const userId = user?.userId;
      const type = 'medicine';
      console.log(item);

      const {data} = await http.get('/', {
        params: {
          method,
          type,
          userId,
          productId: item?.productId,
          price: item?.mrp,
          qty: count,
        },
      });
      console.log(data);
      Alert.alert('Product added to the cart');
      dispactch(getCarts());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <View style={[globalStyles.container2]}>
      <Image source={{uri: item?.img}} style={{height: 200, margin: 10}} />
      <Text style={[globalStyles.text, {marginVertical: 10}]}>
        {item?.productName}
      </Text>
      <Text style={[globalStyles.text2, {marginVertical: 10}]}>
        {item?.description}
      </Text>
      {/* <View style={{borderWidth:1,borderColor:"black",width:"100%",borderRadius:20,height:50,justifyContent:"center",paddingHorizontal:20}}>
         <TouchableOpacity onPress={()=>addtoCart(item)} style={{marginRight:"auto",backgroundColor:"black",justifyContent:"center",alignItems:"center",paddingHorizontal:5,paddingVertical:1,opacity:.7,height:30,borderRadius:5}}><Text style={{color:"white"}}>Add To Cart</Text></TouchableOpacity>

         </View> */}
      <View style={[globalStyles.rowflex, {marginTop: 30,width:"15%"}]}>
        <TouchableOpacity onPress={()=>setCount((prev)=>prev-1)} style={[styles.button]}>
          <Text style={{fontSize: 15, color: 'white'}}>-</Text>
        </TouchableOpacity>
        <Text style={[globalStyles.text,{marginHorizontal:10}]}>{count}</Text>
        <TouchableOpacity onPress={()=>setCount((prev)=>prev+1)} style={[styles.button]}>
          <Text style={{fontSize: 15, color: 'white'}}>+</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color={theme.colors.primaryOpacity}
          style={{marginRight: 'auto', marginLeft: 'auto', marginTop: '10%'}}
        />
      ) : (
        <CustomButton
          onPressfuntion={() => addtoCart()}
          text={'Add To Cart'}
          marginTop={'10%'}
        />
      )}
    </View>
  );
};
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

export default MedicineIndex;
