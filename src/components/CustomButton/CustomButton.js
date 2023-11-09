import { View, Text, StyleSheet, Pressable, } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style = {[styles.container, styles[`container_${type}`]]}>
      <Text style = {[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
    container: {
        
        bottom: '20%',
        padding: '3%',
        width: '80%',
        borderRadius: '20%',
        alignItems: 'center',
        marginVertical: '1%',
        
    },
    container_PRIMARY: {
        backgroundColor: 'red',
    },
    container_TERTIARY: {

    },
    container_TERTIARY_Register: {
        marginVertical: '1%',
        alignItems: 'flex-start',
    },
    container_YOUTUBE: {
      
       // position: 'absolute',
        bottom: 0,
        left: 0, // You can adjust the left position if needed
        right: 0, // You can adjust the right position if needed
        backgroundColor: 'red',
        width: '40%',
      
  },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY:{
        color:'grey',
    },
});

export default CustomButton