import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../utils/GlobalStyles'
import theme from '../utils/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import SearchBox from '../components/Search';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { http } from '../utils/AxiosInstance';
import { useIsFocused } from '@react-navigation/native';
import { CustomButton } from '../components/CustomButton';
import PageHeader from '../components/PageHeader';
import { navigate } from '../App';

const ProductList = ({route,navigation}) => {
    const name = route?.params?.name;
    const listid = route?.params?.listid;
    console.log(listid)
    const [ search,setSearch]=useState();
    const  [ data,setData]=useState();
    const  [ filterdata,setfilterData]=useState();

    const foucs = useIsFocused();
    const [ counter ,setCounter]=useState(0)
    const [ visible,setVisbile]=useState(false);
    const [ object,setObject]=useState()
    const [ selectedList,setSelectedList]=useState();
    

    useEffect(()=>{
    if(search){
        const da= data&&data?.filter((item)=>item?.productName?.includes(search));
        setfilterData(da);
    }

    },[search]);

    const placeOrder = async() => {
      const userid = await AsyncStorage.getItem("userid");
      console.log(listid,userid)
      const body={
          method: 'placeOrder',
          distributorId:userid,
          listId:listid,
          amount:data.reduce((accumulator, currentValue) => {
            return accumulator + parseFloat(currentValue?.price, currentValue?.qty);
        }, 0),
        productId:data.map((item)=>{return ( item?.productId)}),
        qty:data.map((item)=>{return ( item?.qty)}),
        price:data.map((item)=>{return ( item?.price)})
      }
      setLoading(true)
      http.get('/', {
          params: {
          ...body
          }
      })
          .then(response => {
              console.log('Responses :', response.data);
              setLoading(false);
              // setData(response.data?.response);
              // setMeetupData(response?.data?.meetup);
              // setpeopleData(response?.data?.pepole);
  
          })
          .catch(error => {
              console.error('Error:', error);
             Alert.alert("Network Error")
              setLoading(false)
          });
  
      
  }

    
   const [ loading,setLoading]=useState(false)
      useEffect(()=>{
        fetchdata()
      },[foucs,])
      const fetchdata = async() => {
        const userid = await AsyncStorage.getItem("userid");
        console.log(listid,userid)
        const body={
            method: 'myCart',
            distributorId:userid,
            listId:listid
        }
        setLoading(true)
        http.get('/', {
            params: {
            ...body
            }
        })
            .then(response => {
                console.log('Responses :', response.data);
                setLoading(false);
                setData(response.data?.response);
                // setMeetupData(response?.data?.meetup);
                // setpeopleData(response?.data?.pepole);
    
            })
            .catch(error => {
                console.error('Error:', error);
               Alert.alert("Network Error")
                setLoading(false)
            });
    
        
    }
    const addtocart = async(item,minus) => {
      const userid = await AsyncStorage.getItem("userid");
      const find = selectedList?.find((ite)=>ite?.productId==item?.productId);
       
      const body={
          method: 'addtocart',
          distributorId:userid,
          productId:item?.productId,
          listId:listid,
          price:item?.price,
          qty:minus?item?.qty-1:item?.qty+1
      }
      if(minus&&item?.qty-1==0){
        setLoading(true)
        http.get('/', {
            params: {
            ...body
            }
        })
            .then(response => {
              fetchdata()
                console.log('Response:', response.data);
                setLoading(false);
                // setData(response.data?.product);
                console.log(find)
                const q = find?(minus?find?.value-1:find?.value+1):1
                 const list = selectedList?.filter((it)=>it?.productId!==item?.productId)||[];
              const ob={
                  productId:item?.productId,
                  value:q
              }
              setSelectedList([...list,ob]);
              console.log(selectedList)
    
            })
            .catch(error => {
                console.error('Error:', error);
               Alert.alert("Network Error")
                setLoading(false)
            });
      }
      setLoading(true)
      http.get('/', {
          params: {
          ...body
          }
      })
          .then(response => {
              console.log('Response:', response.data);
              setLoading(false);
              // setData(response.data?.product);
              fetchdata()
              console.log(find)
              const q = find?(minus?find?.value-1:find?.value+1):1
               const list = selectedList?.filter((it)=>it?.productId!==item?.productId)||[];
            const ob={
                productId:item?.productId,
                value:q
            }
            setSelectedList([...list,ob]);
            console.log(selectedList)
  
          })
          .catch(error => {
              console.error('Error:', error);
             Alert.alert("Network Error")
              setLoading(false)
          });
  
      
  }
    

      const renderitem = ({item}) => {
        return (
          <TouchableOpacity
            style={[styels.box]}>
            <Image
              source={{uri:item?.photo1}}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#9B9B9B',
              }}
            />
            <View style={{marginLeft: 10}}>
              <View style={[globalStyles.rowflex, {width: '90%'}]}>
                <Text style={[globalStyles.text, {color: theme.colors.primary}]}>
                  {item?.name}
                </Text>
           
              </View>
              <Text style={[globalStyles.text2, {opacity: 0.5}]}>
                {item?.experience} Years
              </Text>
              <Text style={[globalStyles.text,{width:180}]}>{item?.compnay}</Text>
            </View>
            <View>
            <TouchableOpacity
                  style={[styels.connectbutton]}>
                                  {/* <FontAwesome name ="paper-plane" size={16} color='white'/> */}
                  <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold',marginLeft:5}}>
                    Accept
                  </Text>
                </TouchableOpacity> 
                 <TouchableOpacity
                  style={[styels.connectbutton,{marginTop:10,backgroundColor:theme.colors.buttonBG}]}>
                                  {/* <FontAwesome name ="paper-plane" size={16} color='white'/> */}
                  <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold',marginLeft:5}}>
                    Reject
                  </Text>
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      };
      const renderitem2 = ({item}) => {
        return (
          <TouchableOpacity  onPress={()=>{setVisbile(true); setObject(item)}}
            style={[styels.box]}>
            <Image
              source={{uri:item?.photo1}}
              style={{
                height: 40,
                width: 40,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#9B9B9B',
              }}
            />
            <View style={{marginLeft: 10}}>
            <Text style={[globalStyles.text,]}>
                  {item?.productName}
                </Text>
                 {/* <View style={[globalStyles.rowflex,{width:"90%"}]}> */}
      
                
                 {/* </View> */}
           
               
            

              {/* <Text style={[{marginLeft:'auto',marginRight:30},globalStyles.text]}>{item?.fees||"Free"}</Text> */}
    
              {/* </View> */}
            </View>
            <View style={{marginLeft:"auto"}} >
        <Text style={[globalStyles.text2,{color:theme.colors.primary}]}>₹ {item?.price*item?.qty}</Text>
     {/* {loading?<ActivityIndicator/> */}
    {/* //  :(selectedList?.find((it)=>it?.productId==item?.productId)? */}
               <View style={[globalStyles.rowflex,{width:50}]}>
               <TouchableOpacity disabled={loading} onPress={()=>addtocart(item,"minues")} style={[styels.coutnerButton]}><Text style={[globalStyles.text,{fontSize:15}]}>-</Text></TouchableOpacity>
               {/* <Text style={[globalStyles.text]}>{selectedList?.find((it)=>it?.productId==item?.productId)?.value}</Text> */}
               <Text style={[globalStyles.text]}>{item?.qty}</Text>

               <TouchableOpacity disabled={loading} onPress={()=>addtocart(item)} style={[styels.coutnerButton]}><Text style={[globalStyles.text,{fontSize:15}]}>+</Text></TouchableOpacity>
               </View>
               {/* :<TouchableOpacity onPress={()=>addtocart(item)} style={{backgroundColor:"black",paddingHorizontal:5,borderRadius:5,marginTop:10}}>
     <Text style={[globalStyles.text2, {color:"white",}]}>
    Add
   </Text>
     </TouchableOpacity>)} */}
   
    </View>
          </TouchableOpacity>
        );
      };
      const testdata2 = [
        {name: 'Sonakshi sharma', experience: '3', pos:"web developer",add:"vijay nagar"},
      ];
    //   useEffect(()=>{
    //    if(visible){
    //      const obj = selectedList?.find((item)=>item?.productId==object?.productId)||{}
    //      console.log(obj)
    //      setCounter(obj?.value)
    //    }
    //   },[visible]);
      const increaseCounter=()=>{
            setCounter(prev=>prev+1);
            // const list = selectedList?.filter((item)=>item?.productId!==object?.productId)||[];
            // const item={
            //     productId:object?.productId,
            //     value:counter
            // }
            // setSelectedList([...list,item]);
            // console.log(selectedList)
            
      }
      const descreseCoutner=()=>{
        console.log(object);
  
        setCounter(prev=>prev-1);
        
      }

  return (
    <View style={[globalStyles.container2]}>
      {/* <Text>ProductList</Text> */}
       <PageHeader name={name} navigation={navigation} />
       <SearchBox width={'100%'} search={search} setSearch={setSearch} />

      {/* {loading?<ActivityIndicator/>: */}
      <FlatList
        data={search?filterdata:data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderitem2}
      />
            <CustomButton  loading={loading} onPressfuntion={()=>{placeOrder()}} text={"Place Order "} marginTop={"auto"} />

      {/* <Modal onRequestClose={()=>setVisbile(false)}
      visible={visible}
      transparent={true}
      animationType='slide'
      >
        <TouchableWithoutFeedback onPress={()=>{setVisbile(false); setCounter(0)}}><View style={{backgroundColor:"rgba(0,0,0,.2)",flex:1}}></View></TouchableWithoutFeedback>
        <View style={{height:150,backgroundColor:"rgba(0,0,0,.2)"}}>
            <View style={{backgroundColor:"white",height:200,borderRadius:40,paddingTop:15,paddingHorizontal:25,paddingBottom:50}}>
            <View style={[globalStyles.rowflex]}>
            <View>
                <Text style={[globalStyles.text,{fontSize:20}]}>{object?.productName}</Text>
                <Text style={[globalStyles.text2,{fontSize:14}]}>{object?.size}</Text>
             </View>
             <Text style={[globalStyles.text,{fontSize:20}]}>{counter}</Text>
            </View>
               <View style={[globalStyles.rowflex,{marginTop:"auto",marginBottom:30}]}>
               <TouchableOpacity onPress={()=>descreseCoutner()} style={[styels.coutnerButton]}><Text style={[globalStyles.text,{fontSize:20}]}>-</Text></TouchableOpacity>
               <TouchableOpacity onPress={()=>increaseCounter()} style={[styels.coutnerButton]}><Text style={[globalStyles.text,{fontSize:20}]}>+</Text></TouchableOpacity>

               </View>
            </View>
        </View>
      </Modal> */}
    </View>
  )
}

const styels = StyleSheet.create({
    coutnerButton:{
        height:20,width:20,borderRadius:10,borderWidth:1,borderColor:"black",justifyContent:"center",alignItems:"center"
    },
    button: {
      width: 60,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
      marginVertical: 1,
    },
    connectbutton:{
      height: 25,
      width: 60,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      flexDirection:"row",
      alignItems:"center"
    },
    box:{
      height: 50,
      backgroundColor: 'white',
      borderRadius: 10,
      width: '99.5%',
      marginLeft: 1,
  
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 1,
      marginVertical: 10,
    },
    posText:{
      color:theme.colors.primary,
      backgroundColor:theme.colors.primaryOpacity,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingHorizontal:7,
      paddingVertical:3,
      marginTop:5,
      marginHorizontal:2
    }
  });
export default ProductList


