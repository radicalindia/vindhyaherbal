import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from "../utils/theme.js";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, navigationRef } from "../App.js"
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { addNavREf } from '../redux/actions/navigationREf.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  iconText: {
    fontSize: 10
  },
  bottomNav: {
    backgroundColor: theme.colors.white,
    display: 'flex',
    height: 60,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    // paddingVertical: 14,
    paddingTop: -20,
    position: 'relative',
  },

  bottomNavOptions: {
    alignItems: 'center',
    width: 60,
    height: 50,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  bottomNavOptionactives: {
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: theme.colors.primaryOpacity,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 1,

  },
  optionExtra: {
    alignItems: 'center',
    marginLeft: -10,
  },
  bottomNavIcons: {
    color: theme.colors.background,
  },
  bottomNavText: {
    color: theme.colors.secondaryDark,
    fontSize: 10,
    fontFamily: 'Montserrat_500Medium',
  },
  dcrButton: {
    backgroundColor: theme.colors.tertiary,
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    position: 'absolute',
    left: '48%',
    bottom: 38,
    shadowColor: theme.colors.tertiary,
    shadowOffset: { height: 2, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  dcrIcon: {
    color: '#fff',
    opacity: 0.8,
  },
  dcrText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
    marginTop: 24,
    marginLeft: 5,
    opacity: 0.8,
  },
  activeBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
});

const BottomNav = () => {
  const nav = useSelector(({ nav }) => nav?.nav);

  console.log("redux", nav);
  const dispatch = useDispatch();
  const focus = useIsFocused()
  //   // useEffect(()=>{
  //     const nav = navigationRef?.current?.getCurrentRoute()?.name;
  //   console.log("fous",nav);
  // })


  // console.log('Current route name:', ref);


  return (
    <View style={styles.bottomNavContainer}>
      <View style={styles.bottomNav}>
        <View style={nav == 'Home' ? styles.activeBox : null}>
          <TouchableOpacity
            style={
              nav == 'Home'
                ? styles.bottomNavOptionactives
                : styles.bottomNavOptions
            }
            activeOpacity={0.5}
            onPress={() => {
              navigate('Home');
              dispatch(addNavREf("Home"));
            }}
            navigationRef>
            <MaterialCommunityIcons
              name="home"
              size={24}
              style={[
                styles.bottomNavIcons,
                { color: nav == 'Home' ? 'white' : theme.colors.background },
              ]}
            />
            {nav !== "Home" && <Text style={[styles.iconText]}>Home</Text>}
            {/* <Text style={styles.bottomNavText}>Extras</Text> */}
          </TouchableOpacity>
        </View>

        <View style={nav == 'Medicine' ? styles.activeBox : null}>
          <TouchableOpacity
            style={
              nav == 'Medicine'
                ? styles.bottomNavOptionactives
                : styles.bottomNavOptions
            }
            activeOpacity={0.5}
            onPress={() => {
                navigate('Medicine');
              dispatch(addNavREf("Medicine"));
            }}
            navigationRef>
            <FontAwesome
              name="first-aid"
              size={24}
              style={[
                styles.bottomNavIcons,
                { color: nav == 'Medicine' ? 'white' : theme.colors.background },
              ]}
            />
            {nav !== "Medicine" && <Text style={[styles.iconText]}>Medicine</Text>}

            {/* <Text style={styles.bottomNavText}>Extras</Text> */}
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity onPress={() => navigation.navigate("MineJobCreation")}>
                navigationRef          <Text style={styles.dcrText}>Daily Call Report</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.dcrButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("DCRHome")}
        >navigationRef
          <AntDesign name="form" size={30} style={styles.dcrIcon} />
        </TouchableOpacity> */}



        <View style={[nav == 'Upload' ? styles.activeBox : null]}>
          <TouchableOpacity
            style={
              nav == 'Upload'
                ? styles.bottomNavOptionactives
                : styles.bottomNavOptions
            }
            activeOpacity={0.5}
            onPress={() => {
              navigate('Upload');
              dispatch(addNavREf("Upload"));

            }}
            navigationRef>
            <MaterialCommunityIcons
              name="plus-thick"
              size={27}
              style={[
                styles.bottomNavIcons,
                { color: nav == 'Upload' ? 'white' : theme.colors.background },
              ]}
            />
            {nav !== "Upload" && <Text style={[styles.iconText]}>Upload</Text>}

            {/* <Text style={styles.bottomNavText}>Extras</Text> */}
          </TouchableOpacity>
        </View>



        <View style={nav == 'Doctors' ? styles.activeBox : null}>
          <TouchableOpacity
            style={
              nav == 'Doctors'
                ? styles.bottomNavOptionactives
                : styles.bottomNavOptions
            }
            activeOpacity={0.5}
            onPress={() => {
              navigate('Doctor');
              dispatch(addNavREf("Doctors"));

            }}
            navigationRef>
            <MaterialCommunityIcons
              name="doctor"
              size={24}
              style={[
                styles.bottomNavIcons,
                { color: nav == 'Doctors' ? 'white' : theme.colors.background },
              ]}
            />
            {nav !== "Doctors" && <Text style={[styles.iconText]}>Doctors</Text>}

            {/* <Text style={styles.bottomNavText}>Extras</Text> */}
          </TouchableOpacity>
        </View>

        <View style={nav == 'Cart' ? styles.activeBox : null}>
          <TouchableOpacity
            style={
              nav == 'Cart'
                ? styles.bottomNavOptionactives
                : styles.bottomNavOptions
            }
            activeOpacity={0.5}
            onPress={() => {
              //   navigate('Cart');
              dispatch(addNavREf("Cart"));

            }}
            navigationRef>
            <MaterialCommunityIcons
              name="cart"
              size={24}
              style={[
                styles.bottomNavIcons,
                { color: nav == 'Cart' ? 'white' : theme.colors.background },
              ]}
            />
            {nav !== "Cart" && <Text style={[styles.iconText]}>Cart</Text>}

            {/* <Text style={styles.bottomNavText}>Extras</Text> */}
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
};

export default BottomNav;
