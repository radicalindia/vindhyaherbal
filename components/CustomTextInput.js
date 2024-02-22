import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {globalStyles} from '../utils/GlobalStyles';
import theme from '../utils/theme';

export const CustomTextInput = ({
  label,
  value,
  setValue,
  placeholder,
  marginTop,
  numeric
}) => {
  return (
    <View style={{marginTop: marginTop}}>
      <Text style={[globalStyles.text2, {opacity: 0.3, marginVertical: 5}]}>
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={e => setValue(e)}
        keyboardType={numeric}
        style={{
          width: '100%',
        //   borderRadius: 5,
          backgroundColor: theme.colors.white,
        //   elevation: 2,
          height: 40,
          justifyContent: 'center',
          borderBottomWidth:1,
          borderColor:theme.colors.primaryOpacity,
          paddingHorizontal: 20,
          color: 'black',
        }}
      />
    </View>
  );
};
