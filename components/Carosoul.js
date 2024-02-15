import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions ,Text} from 'react-native';

const HorizontalPhotoScrollView2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const { width } = Dimensions.get('window');
  const itemWidth = width; // 100% width
  const itemHeight = 130; 
//   console.log(images)


  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentImageIndex + 1) %3;
      scrollViewRef.current.scrollTo({
        x: newIndex * Dimensions.get('window').width,
        animated: true,
      });
      setCurrentImageIndex(newIndex);
    }, 2500);

    return () => clearInterval(interval);
  }, [currentImageIndex, 3]);
  const items = [
    { text: 'Item 1', color: '#FF5733' },
    { text: 'Item 2', color: '#33FF57' },
    { text: 'Item 3', color: '#5733FF' },
    // Add more items as needed
  ];

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onMomentumScrollEnd={(event) => {
        const contentOffset = event.nativeEvent.contentOffset;
        const imageIndex = Math.round(contentOffset.x / Dimensions.get('window').width);
        setCurrentImageIndex(imageIndex);
      }}
    >
           {items.map((item, index) => (
        <View
          key={index}
          style={[styles.item, { width: itemWidth, height: itemHeight, backgroundColor: item.color,borderRadius:10 }]}
        >
          <Text></Text>
        </View>
      ))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
     height:130,
    //  backgroundColor:"black",
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius:10
  },
  imageContainer: {
   
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-300,
    resizeMode:"contain"
    
  },
});

export default HorizontalPhotoScrollView2;
