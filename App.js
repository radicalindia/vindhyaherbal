import { View, Text, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useFocusEffect, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './Pages/Home/Home';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
// import CreateAccount from './Pages/CreateAccount';
import BottomNav from './components/BottomNav';
// import Home from './Pages/Home';
import Login from './Pages/Login';
import { addNavREf } from './redux/actions/navigationREf';
import TopBar from './components/TopBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Fontist from 'react-native-vector-icons/Fontisto.js';
import theme from './utils/theme';

import Home from './Pages/Home';

import Splash from './Pages/Splash';
import CreatenewList from './Pages/CreatenewList';
import ProdcutList from './Pages/ProdcutList';
import ViewCart from './Pages/ViewCart';
import Profile from './Pages/Profile';



const Tab = createBottomTabNavigator();


// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
const App = () => {
  const [currentroute, setCurrentroute] = useState();

  const nav = useSelector(({ nav }) => nav?.nav);
  const [keypad,setkeypad]=useState(false)
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setkeypad(true)
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setkeypad(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
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
    "Login",
    "PersonalDetail",
    "Search",
    "Splash",
    "ProductList",
    "Objective",
    "UploadPhoto",
    "CreateList"
  ];



  const dispactch = useDispatch();
  // dispactch(addNavREf('CreateAccount'));
  // const focus = useIsFocused()
  // useEffect(()=>{
   dispactch(addNavREf(navigationRef.current?.getCurrentRoute()?.name))
  // },[focus]);


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
        {/* {!NavbarAbsentScreensBottom.includes(navigationRef.current?.getCurrentRoute()?.name) && <TopBar/>} */}
        {/* <TopBar /> */}
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome', headerShown: false }}
          />

<Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Welcome', headerShown: false }}
          />
                    <Stack.Screen
            name="CreateList"
            component={CreatenewList}
            options={{ title: 'Welcome', headerShown: false }}
          />
                  <Stack.Screen
            name="ViewCart"
            component={ViewCart}
            options={{ title: 'Welcome', headerShown: false }}
          />

          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen
            name="ProductList"
            component={ProdcutList}
            options={{ title: 'Welcome', headerShown: false }}
          />
           <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: 'Welcome', headerShown: false }}
          />

          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
        {/* {!NavbarAbsentScreens.includes(currentroute) && (getUserType=="mine"?<BottomNav />:getUserType=="mineOwner"?<TruckOwner/>:<DriverBottomNav/>)} */}
        {!NavbarAbsentScreensBottom.includes(navigationRef.current?.getCurrentRoute()?.name)&&!keypad && <BottomNav />}
      </NavigationContainer>
      {/* <CurvedBottomBars/> */}
    </>
  );
};

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{tabBarStyle:{height:60}}}
//       tabBarOptions={{
//         activeTintColor: '#3498db',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       {/* Define your screens and icons */}
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: ()=>null,
//           tabBarIcon: ({ color, size,focused }) => (
//             <MaterialCommunityIcons            
//                name="home"
//             color={focused?theme.colors.primaryOpacity:color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Medicine"
//         component={Medicine}
//         options={{
//           tabBarLabel: ()=>null,
//           tabBarIcon: ({ color, size ,focused}) => (
//             <FontAwesome
//                name="first-aid"
//             color={focused?theme.colors.primaryOpacity:color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Upload"
//         component={Upload}
//         options={{
//           tabBarLabel: ()=>null,
//           tabBarIcon: ({ color, size ,focused}) => (
//             <View style={{height:45,width:45,borderRadius:25,justifyContent:"center",alignItems:"center",backgroundColor:theme.colors.primaryOpacity,marginBottom:15}}>
//                   <MaterialCommunityIcons
//                name="plus-thick"
//             color={"white"} size={size} />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Doctor"
//         component={Doctor}
//         options={{
//           tabBarLabel: ()=>null,
//           tabBarIcon: ({ color, size ,focused}) => (
//             <MaterialCommunityIcons    
//                name="doctor"
//             color={focused?theme.colors.primaryOpacity:color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Pathalogy"
//         component={Pathology}
//         options={{
//           tabBarLabel: ()=>null,
//           tabBarIcon: ({ color, size,focused }) => (
//             <Fontist name="test-bottle" color={focused?theme.colors.primaryOpacity:color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };


export default App;
