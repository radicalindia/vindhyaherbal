import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useFocusEffect, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './Pages/Home/Home';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import CreateAccount from './Pages/CreateAccount';
import BottomNav from './components/BottomNav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { addNavREf } from './redux/actions/navigationREf';
import Doctor from './Pages/Doctor';
import Upload from './Pages/Upload';
import DocterData from './Pages/DocterData';
import TopBar from './components/TopBar';
import Profile from './Pages/Profile';
import Pathology from './Pages/Pathology';
import Medicine from './Pages/Medicine';
import PathologyDetail from './Pages/PathologyDetail';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
const App = () => {
  const [currentroute, setCurrentroute] = useState();

  const nav = useSelector(({ nav }) => nav?.nav);
  console.log(nav)

  const getUserType = async () => {
    return await AsyncStorage.getItem('userType');
  }
  const isFocus = useIsFocused
  useEffect(() => {
    setCurrentroute(navigationRef.current?.getCurrentRoute()?.name);
    console.log("route name", navigationRef.current?.getCurrentRoute()?.name);
  });
  // const nav = useSelector(({nav}) => nav.nav);


  const NavbarAbsentScreens = [

    // "RegisterMineUser"
  ];
  const NavbarAbsentScreensBottom = [
    "CreateAccount",
    "Login"
  ];



  const dispactch = useDispatch();
  // dispactch(addNavREf('CreateAccount'));


  useEffect(() => {
    console.log(navigationRef)
  }, [navigationRef])

  useEffect(() => {
    const unsubscribe = navigationRef.current.addListener('focus', () => {
      setCurrentroute(navigationRef.current?.getCurrentRoute()?.name);

    });

    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, [navigationRef]);

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {/* {!NavbarAbsentScreens.includes(currentroute) && ((getUserType=="mine"||getUserType=="truckOwner")&&<AppBar />)} */}
        {!NavbarAbsentScreensBottom.includes(currentroute) && <TopBar/>}
        {/* <TopBar /> */}
        <Stack.Navigator initialRouteName="CreateAccount">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen
            name="Doctor"
            component={Doctor}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen
            name="DocterData"
            component={DocterData}
            options={{ title: 'Welcome', headerShown: false }}
          />
           <Stack.Screen
            name="Pathalogy"
            component={Pathology}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen
            name="PathalogyDetail"
            component={PathologyDetail}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen
            name="Upload"
            component={Upload}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen
            name="Medicine"
            component={Medicine}
            options={{ title: 'Welcome', headerShown: false }}
          />

          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
        {/* {!NavbarAbsentScreens.includes(currentroute) && (getUserType=="mine"?<BottomNav />:getUserType=="mineOwner"?<TruckOwner/>:<DriverBottomNav/>)} */}
        {!NavbarAbsentScreensBottom.includes(currentroute) && <BottomNav />}
      </NavigationContainer>
      {/* <CurvedBottomBars/> */}
    </>
  );
};


export default App;
