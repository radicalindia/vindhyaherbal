import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useFocusEffect, useIsFocused} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './Pages/Home/Home';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import CreateAccount from './Pages/CreateAccount';
import BottomNav from './components/BottomNav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { addNavREf } from './redux/actions/navigationREf';
import Doctor from './Pages/Doctor';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
const App = () => {
 const [currentroute, setCurrentroute] = useState();

  const getUserType=async()=>{
     return await AsyncStorage.getItem('userType');
  }
  const isFocus= useIsFocused
  useEffect(() => {
    setCurrentroute(navigationRef.current?.getCurrentRoute()?.name);
    console.log("route name",navigationRef.current?.getCurrentRoute()?.name);
  });
  // const nav = useSelector(({nav}) => nav.nav);


  const NavbarAbsentScreens = [
    'RegisterMine',
    // 'LoginMine',
    'RegisterCompany',
    'LoginCompnay',
    'ChooseUser',
    'Splash',
    'RegisterDriver',
    "GetMobileOtp",
    "Intro",
    // "RegisterMineUser"
  ];
  const NavbarAbsentScreensBottom = [
    // "CreateAccount",
    "Login"
  ];
  
  
  
  const dispactch = useDispatch();
  dispactch(addNavREf('Home'));
  
  
  useEffect(()=>{
    console.log(navigationRef)
  },[navigationRef])
  
  useEffect(() => {
    const unsubscribe = navigationRef.current.addListener('focus', () => {
      // The screen is focused
      console.log('Screen is focused');
    });

    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, []);

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {/* {!NavbarAbsentScreens.includes(currentroute) && ((getUserType=="mine"||getUserType=="truckOwner")&&<AppBar />)} */}
        {/* {!NavbarAbsentScreens.includes(currentroute) &&<AppBar/>} */}

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome', headerShown: false}}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{title: 'Welcome', headerShown: false}}
          />
                    <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Welcome', headerShown: false}}
          />
                  <Stack.Screen
            name="Doctor"
            component={Doctor}
            options={{title: 'Welcome', headerShown: false}}
          />

          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
        {/* {!NavbarAbsentScreens.includes(currentroute) && (getUserType=="mine"?<BottomNav />:getUserType=="mineOwner"?<TruckOwner/>:<DriverBottomNav/>)} */}
           {!NavbarAbsentScreensBottom.includes(navigationRef.current?.getCurrentRoute()?.name) &&<BottomNav/>}
      </NavigationContainer>
      {/* <CurvedBottomBars/> */}
    </>
  );
};


export default App;
