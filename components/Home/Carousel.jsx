import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS, SIZES } from '../../constants'
const img1 = require('../../assets/images/fn1.jpg');
const img2 = require('../../assets/images/fn2.jpg');
const img3 = require('../../assets/images/fn3.jpg');


export default function Carousel() {

  const slides = [
    img1,img2,img3
  ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 14,
          width : '90%',
          marginTop: 15,
        }}
        autoplay
        circleLoop />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center'
  },
})