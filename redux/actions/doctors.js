import { http } from "../../utils/AxiosInstance";


export const getDoctorsCategory = (body) => async (dispatch) => {
    try {
      const method="doctorsCategory"

      const {data} = await http.get('/',{  params: {
        method,
      },});
      dispatch({
        type: "GET_DOCTOR_CATEGORY",
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