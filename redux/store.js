import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer';
import Navigation from './reducers/NavigatorRef';
import doctors from './reducers/doctors';
import medicine from './reducers/medicine';
import pathology from './reducers/pathology';



const reducer={
    user:userReducer,
    nav:Navigation,
    doctors:doctors,
    medicine:medicine,
    pathology:pathology

}
export const store = configureStore({
 reducer:reducer,
  devTools:true
})
export default store;