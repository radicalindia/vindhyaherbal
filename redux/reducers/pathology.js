const initialState = {
    data: null,
    submitloading:false,
    error:null,
    loading:false,
    singleData:null
    

  };
  
  const pathology= (state = initialState, action) => {
    switch (action.type) {
      case "GET_PATHOLOGY":
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
        case "GET_PATHOLOGY_DETAIL":
          return {
            ...state,
            singleData: action.payload,
            loading: false,
            error: null,
          };
     
      default:
        
        return state;
    }
  };
  
  export default pathology;
  