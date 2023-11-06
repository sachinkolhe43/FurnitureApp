import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './heading.style'
import {Ionicons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants'

export default function Heading() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Rivals</Text>
            <TouchableOpacity>
                <Ionicons name='ios-grid' size={24} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

