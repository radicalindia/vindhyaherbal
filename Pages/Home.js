import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../utils/GlobalStyles';
import SearchBox from '../components/Search';
import theme from '../utils/theme';
// import { Image } from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { CustomButton } from '../components/CustomButton';
import { http } from '../utils/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../App';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addNavREf } from '../redux/actions/navigationREf';
import { CustomTextInput } from '../components/CustomTextInput';


const Home = ({navigation}) => {
  const [search, setSearch] = useState();
  const [selectType, setSelecttype] = useState('people');
  const focus = useIsFocused()
  const dispactch= useDispatch()
  useEffect(()=>{
    dispactch(addNavREf("Home"))
  },[focus]);
  const testdata = [
    {name: 'amit jain', experience: '3', compnay: 'radical private limited '},
  ];
  const testdata2 = [
    {name: 'Sonakshi sharma', experience: '3', pos:"web developer",add:"vijay nagar"},
  ];
   
  const [loading,setLoading]=useState(false);
  const [ meetupData,setMeetupData]=useState();
  const [ data,setData]=useState();
  const [ listname,setListname]=useState();
const [ modalVisible,setModalvisible]=useState(false)

  useEffect(()=>{
    fetchdata()
  },[])
  const fetchdata = async() => {
    const userid = await AsyncStorage.getItem("userid");

    const body={
        method: 'myList',
        distributorId:userid
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
            setData(response?.data?.list);

        })
        .catch(error => {
            console.error('Error:', error);
           Alert.alert("Network Error")
            setLoading(false)
        });
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
    
}
  const renderitem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>navigate("ViewCart",{listid:item?.listId})}
        style={[styels.box]}>
        {/*  */}
        <View style={{marginLeft: 10}}>
          <View style={[globalStyles.rowflex, {width: '90%'}]}>
            <Text style={[globalStyles.text, {color: theme.colors.primary}]}>
              {item?.listName||"Test Name"}
            </Text>
            <Text style={[globalStyles.text2, ]}>
              {item?.creation||"Test Name"}
            </Text>
            
        
          </View>
         
        </View>
      </TouchableOpacity>
    );
  };
  const renderitem2 = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("MeetupersonDetail",{item:item})}
        style={[styels.box]}>
        <Image
          source={{uri:item?.photo}}
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
              {item?.subject}
            </Text>
            <Text style={{color:"black",fontSize:13,fontWeight:"bold",opacity:.6}}>20 visiter</Text>
            {/* <TouchableOpacity
              style={[styels.connectbutton]}>
                              <FontAwesome name ="paper-plane" size={16} color='white'/>
              <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold',marginLeft:5}}>
                Connect Request
              </Text>
            </TouchableOpacity> */}
          </View>
          <Text style={[globalStyles.text2, {opacity: 0.5}]}>
            {item?.add} 
          </Text>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            {item?.objective.map((it)=>(
              <View style={[styels.posText]}>
              <Text style={{color:theme.colors.primary}}>{it}</Text>
              </View>
            ))}
          <Text style={{color:theme.colors.primary,marginLeft:'auto',marginRight:30}}>200</Text>

          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[globalStyles.container2]}>

      {/* <SearchBox width={'100%'} search={search} setSearch={setSearch} /> */}
      <View style={{justifyContent:"center",alignItems:"center",borderBottomWidth:.3,borderColor:"rgba(0,0,0,.1)",height:40}}>
        <Text style={[globalStyles.text]}>Order List</Text>
      </View>

<FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderitem}
      />
      <CustomButton loading={loading} onPressfuntion={()=>setModalvisible(true)} text={"Create New List"} marginTop={10} />

      {/* <CustomButton text={"Explore on map"}  /> */}
      <Modal visible={modalVisible} animationType='slide ' transparent={true} onRequestClose={()=>setModalvisible(false)}>
        <TouchableWithoutFeedback onPress={()=>setModalvisible(false)}><View style={{height:300,backgroundColor:"rgba(0,0,0,.3)",}}></View></TouchableWithoutFeedback>
        <View style={{backgroundColor:"rgba(0,0,0,.3)",flex:1}}>
          <View style={{flex:1,backgroundColor:"white",borderRadius:20,padding:20}}>
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
        </View>
      </Modal>
    </View>
  );
};

const styels = StyleSheet.create({
  button: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    marginVertical: 1,
  },connectbutton:{
    height: 25,
    width: 130,
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

export default Home;
