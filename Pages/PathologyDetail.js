import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPathologyDetail } from '../redux/actions/pathology';
import { useDispatch, useSelector } from 'react-redux';

const PathologyDetail = ({route}) => {
    const id = route?.params?.id;
    const [ loading,setLoading]=useState(false)
    const dispatch= useDispatch();
    const detail = useSelector(({pathology})=>pathology);
    // console.log(detail);

    useEffect(()=>{
        const fetch=async()=>{
         try {
           setLoading(true);
           await dispatch(getPathologyDetail(id));
           setLoading(false)  
         } catch (error) {
           console.log(error)
         }
         }
        fetch();
         },[])
     
  return (
    <View>
         {loading?<ActivityIndicator size={"large"} color={"black"} style={{marginTop:50,marginLeft:"auto",marginRight:"auto"}}/>:null}
    </View>
  )
}

export default PathologyDetail