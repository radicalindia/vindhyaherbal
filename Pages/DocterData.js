import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { globalStyles } from '../utils/GlobalStyles';
import { Image } from 'react-native';
import theme from '../utils/theme';


const DocterData = () => {
    return (
        <View style={[globalStyles.container]}>

            <View style={[styles.box]}>

                <View style={[styles.producBo]}>
                    <Image style={[styles.im]} source={{ uri: 'https://media.licdn.com/dms/image/C4E03AQGg7UPswASmiw/profile-displayphoto-shrink_800_800/0/1627022976454?e=2147483647&v=beta&t=OPU4e8y4iX6LplpBbx9fVM6hHVwy3bRMiwOxtsXszdM' }} />

                    <View>
                        <Text style={[styles.text]}>Dr. Hrishi Jain</Text>
                        <Text style={[styles.text, { marginTop: -5,color:theme.colors.primaryOpacity }]}>MBBS, MD, FCCP</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: '12%',
        paddingHorizontal: 20,
        paddingTop: 20,
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 10,

    },
    producBo: {
        justifyContent: "space-between",
        flexDirection: 'row',
        marginRight:'auto',
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        marginBottom: 'auto',
        marginLeft:40
    },

    im: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
})

export default DocterData;
