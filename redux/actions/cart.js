import AsyncStorage from "@react-native-async-storage/async-storage";
import { http } from "../../utils/AxiosInstance";


export const getCarts = (body) => async (dispatch) => {
    try {
        const user = await AsyncStorage.getItem("user")
        const json = JSON.parse(user)
        const {data} = await http.get('/',{  params: {
            method:"myCart",
            userId:json?.userId
          },});
          console.log(json?.userId,data);
      dispatch({
        type: "GET_CART_DATA",
        payload: data?.response,
      });
    } catch (error) {
      dispatch({
        type: "GET_CART_FAILED",
        payload: "false",
      });
      console.log('Error retrieving creating:', error);
    }
  };

  
export const getDoctorsList = (id) => async (dispatch) => {
  try {
    const method="doctorsList"
    const categoryId=id;

    const {data} = await http.get('/',{  params: {
      method,
      categoryId
    },});
    dispatch({
      type: "GET_DOCTORS_LIST",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "CREATE_MINE_JOB_POST_FAILED",
      payload: "false",
    });
    console.log('Error retrieving creating:', error);
  }
};