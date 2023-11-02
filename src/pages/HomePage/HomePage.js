import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import fun from '../../../assets/images/fun.jpg';

const HomePage = () => {
  return (
    <View>
    <Image 
    source={fun} 
    style = {[styles.fun]}
    resizeMode="center"
    />
    </View>
  )
}
const styles = StyleSheet.create({
    fun: {
        width: '100%',
        height: '100%', 
    },
});

export default HomePage