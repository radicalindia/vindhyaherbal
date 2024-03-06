const initialState = {
    data: null,
    submitloading:false,
    error:null,
    loading:false,
    category:null
  };
  
  const Cart= (state = initialState, action) => {
    switch (action.type) {
      case "GET_CART_DATA":
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
        case "GET_CART":
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
  
  export default Cart;
  