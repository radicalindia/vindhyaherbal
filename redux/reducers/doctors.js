const initialState = {
    data: null,
    submitloading:false,
    error:null,
    loading:false,
    category:null
    

  };
  
  const doctors= (state = initialState, action) => {
    switch (action.type) {
      case "GET_DOCTORS_LIST":
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
        case "GET_DOCTOR_CATEGORY":
          return {
            ...state,
            category: action.payload,
            loading: false,
            error: null,
          };

     
      default:
        
        return state;
    }
  };
  
  export default doctors;
  