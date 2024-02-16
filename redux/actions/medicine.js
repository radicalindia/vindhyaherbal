import AsyncStorage from "@react-native-async-storage/async-storage";
import { http } from "../../utiles/AxiosInstance";
import { retrieveUser } from "../../utiles/authStorage";

export const getMedical = (body) => async (dispatch) => {
    try {
        const data = await retrieveUser()
      dispatch({
        type: "GET_MEDICAL",
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