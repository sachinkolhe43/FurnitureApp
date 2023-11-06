import { TouchableOpacity,Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.styles'
import {Ionicons,Fontisto} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { Welcome } from '../components'
import Carousel from '../components/Home/Carousel'
import Heading from '../components/Home/Heading'
import ProductRow from '../components/products/ProductRow'


export default function Home() {
  return (
    <SafeAreaView>

      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
            <Ionicons name='location-outline' size={24}/>

            <Text style={styles.location}>Shanghai China</Text>
            <View style={{alignItems:'flex-end'}}> 
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>8</Text>
                <TouchableOpacity>
                  <Fontisto name='shopping-bag' size={24 }/>
                </TouchableOpacity>
              </View>
            </View>
         </View>
      </View>

      <ScrollView>
          <Welcome/>
          <Carousel/>
          <Heading/>
          <ProductRow/>
      </ScrollView>
    </SafeAreaView>
    
  )
}

