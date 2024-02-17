import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';
import { navigate, navigationRef } from "../App.js";
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addNavREf } from '../redux/actions/navigationREf.js';
import theme from '../utils/theme.js';




const Upload = () => {
    const nav = useSelector(({ nav }) => nav?.nav);
    const dispatch = useDispatch();

    const handleImagePick = async () => {
        try {
            const image = await ImageCropPicker.openPicker({
                cropping: true,
                width: 300,
                height: 400,
                cropperCircleOverlay: false,
                mediaType: 'photo',
            });
            console.log(image);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUploadImage = () => {
        console.log('Upload image');
    };


    return (
        <View style={[nav == 'Upload' ? styles.activeBox : null]}>


      <TouchableOpacity onPress={handleImagePick}>
        <Text>Upload Image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleUploadImage}>
        <Text>Upload</Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({})

export default Upload;
