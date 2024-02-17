import React from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, FlatList } from 'react-native';
import theme from '../utils/theme';


const Data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 3, title: 'Item 4' },
    { id: 3, title: 'Item 5' },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        
            <Image style={{ width: 60, height: 20, marginLeft: 5, marginTop: 5 }} source={require("../assests/images/medical.png")} />
            <Image style={{ height: 70, }} resizeMode='contain' source={{ uri: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/5cc48b44bac744eba09ef6c33b006cef.jpg" }} />
            <Text style={{ color: "black", fontWeight: "bold", marginLeft: 5, textAlign: "center", fontSize: 13 }}>Himalaya Vitals</Text>
    </View>
);



const Medicine = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Data}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    item: {
        width: "40%",
        height: 120,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 2,
        borderBottomColor: theme.colors.primaryOpacity,
        borderBottomWidth: 2,
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    }
})

export default Medicine;
