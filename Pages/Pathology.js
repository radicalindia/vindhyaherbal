import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity ,Image, ActivityIndicator} from 'react-native'
import React ,{useEffect, useState}from 'react'
import { globalStyles } from '../utils/GlobalStyles'
import theme from '../utils/theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { getPathology } from '../redux/actions/pathology';


const Pathology = ({navigation}) => {
  const [search, setSearch] = useState();
  const data = [{ name: "blood test ", value: "345", includes: "5 test" }, { name: "Complete check up ", value: "345", includes: "6 test" }]
  const pathologyList = useSelector((state)=>state.pathology?.data?.response);
  const [ loading,setLoading]=useState(false)
  console.log(pathologyList)
  const dispatch = useDispatch()
  useEffect(()=>{
    const fetch=async()=>{
     try {
       setLoading(true);
       await dispatch(getPathology());
       setLoading(false)  
     } catch (error) {
       console.log(error)
     }
     }
    fetch();
     },[])
 
  const Renderitem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("PathalogyDetail",{id:item})} style={[styles.producBox]}>
        <Image style={{ width: 90, height: 30, marginLeft: 5, marginTop: 5, marginBottom: 10, }} source={require("../assests/images/medical.png")} />

        <Text style={{ color: "black", fontWeight: "bold" }}>{item.packageName}</Text>
        {/* <Text style={{ color: "black", fontWeight: "bold", opacity: .5 }}>{item.discount}</Text> */}
        <View style={{flexDirection:"row"}}>
          <Text style={{fontSize:14,fontWeight:"bold"}}>₹ {item.packge_price}</Text>
          <Text style = {{  color: "#1AAB2A",marginLeft:5,fontSize:13,borderWidth:1,borderColor:"#1AAB2A",backgroundColor:"#F3FBF4",paddingHorizontal:15,borderStyle:"dashed" }}>Save ₹ {item.discount}</Text>
        </View>     
         </TouchableOpacity>
    )
  }
  return (
    <View style={[globalStyles.container2]}>
      
      {loading?<ActivityIndicator size={"large"} color={"black"} style={{marginTop:50,marginLeft:"auto",marginRight:"auto"}}/>:<FlatList
        data={pathologyList}
        renderItem={Renderitem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
      />}

    </View>
  )
}


const styles= StyleSheet.create({
    producBox: {
        width: "48%",
        height: 140,
        marginRight:"1%",
        marginLeft:"1%",
      
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 1,
        borderBottomColor: theme.colors.primaryOpacity,
        borderBottomWidth: 2,
        paddingHorizontal:5,
        justifyContent:"space-evenly",
        marginVertical:10
    
    
      },
})

export default Pathology