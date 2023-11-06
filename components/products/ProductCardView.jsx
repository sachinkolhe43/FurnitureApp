import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
const img1 = require('../../assets/images/fn1.jpg')
const img2 = require('../../assets/images/fn2.jpg')
const img3 = require('../../assets/images/fn3.jpg')

export default function ProductCardView() {

  const navigation = useNavigation(); 
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
               <View style={styles.imageContainer}>
                  <Image
                  source={img1}
                  style={styles.image}/>
               </View>

               <View style={styles.details}>
                  <Text style={styles.title} numberOfLines={1}>Productdodnkqndqn</Text>
                  <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                  <Text style={styles.price}>$255</Text>

               </View>

               <TouchableOpacity style={styles.addBtn}>
                  <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
               </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

