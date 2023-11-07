import { View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import FreeTrail from '../../../assets/images/freeTrail.png';
import HomeWorkouts from '../../../assets/images/HomeWorkouts.png';
import SparringDrills from '../../../assets/images/sparringDrills.png';
import Tutorials from '../../../assets/images/tutorials.png';
import BagWorkouts from '../../../assets/images/BagWorkouts.png';

const OnlineTraining = () => {
  const openShop = () => {
    
  }
  return (
   
        <LinearGradient
        colors={['#1F1F1F', '#000000']} // Set your gradient colors here
        style={styles.linear}
        >
        
         <ScrollView contentContainerStyle={styles.root}>
         <TouchableOpacity onPress={openShop}>
            <Image
            source={FreeTrail}
            style={styles.freeTrail} // Set the desired width and height for your image
            /></TouchableOpacity>

            <TouchableOpacity onPress={openShop}>
            <Image
            source={HomeWorkouts}
            style={styles.freeTrail} // Set the desired width and height for your image
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={openShop}>
            <Image
            source={SparringDrills}
            style={styles.freeTrail} // Set the desired width and height for your image
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={openShop}>
            <Image
            source={Tutorials}
            style={styles.freeTrail} // Set the desired width and height for your image
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={openShop}>
            <Image
            source={BagWorkouts}
            style={styles.freeTrail} // Set the desired width and height for your image
            />
            </TouchableOpacity>
        
         </ScrollView>
         
        </LinearGradient>
   
  );
};

const styles = StyleSheet.create({
    linear: {
        flex: 1,
    },
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    root: {
      flexGrow: 1,
      alignItems: 'center',
    },
    freeTrail: {
        width: '80%',
        height: '35%',
        resizeMode: 'contain',
      //  top:'10%',
        alignItems: 'center'
       },

});

export default OnlineTraining