import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../utils/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {http} from '../utils/AxiosInstance';
import {useIsFocused} from '@react-navigation/native';
import theme from '../utils/theme';

const Profile = () => {
  const focus = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const userid = await AsyncStorage.getItem('userid');
    // console.log(listid,userid)
    const body = {
      method: 'myProfile',
      distributorId: userid,
    };
    setLoading(true);
    http
      .get('/', {
        params: {
          ...body,
        },
      })
      .then(response => {
        console.log('Responses :', response.data);
        setLoading(false);
        setData(response.data?.response);
        // setMeetupData(response?.data?.meetup);
        // setpeopleData(response?.data?.pepole);
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Network Error');
        setLoading(false);
      });
  };
  return (
    <View style={[globalStyles.container2]}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 0.3,
          borderColor: 'rgba(0,0,0,.1)',
          height: 40,
        }}>
        <Text style={[globalStyles.text]}>Profile </Text>
      </View>
      <Text style={[globalStyles.text, {marginLeft: 10, marginVertical: 10}]}>
        Name:{' '}
        <Text style={[globalStyles.text, {color: theme.colors.primary}]}>
          {data?.name}
        </Text>
      </Text>
      <Text style={[globalStyles.text, {marginLeft: 10, marginVertical: 10}]}>
        email:{' '}
        <Text style={[globalStyles.text, {color: theme.colors.primary}]}>
          {data?.email}
        </Text>
      </Text>
      <Text style={[globalStyles.text, {marginLeft: 10, marginVertical: 10}]}>
        mobile:{' '}
        <Text style={[globalStyles.text, {color: theme.colors.primary}]}>
          {data?.mobile}
        </Text>
      </Text>
      <Text style={[globalStyles.text, {marginLeft: 10, marginVertical: 10}]}>
        Pin Code:{' '}
        <Text style={[globalStyles.text, {color: theme.colors.primary}]}>
          {data?.pincode}
        </Text>
      </Text>
    </View>
  );
};

export default Profile;
