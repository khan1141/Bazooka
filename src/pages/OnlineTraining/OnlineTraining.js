import { View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, TouchableOpacity, Image,  Linking } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import FreeTrail from '../../../assets/images/freeTrail.png';
import HomeWorkouts from '../../../assets/images/HomeWorkouts.png';
import SparringDrills from '../../../assets/images/sparringDrills.png';
import Tutorials from '../../../assets/images/tutorials.png';
import BagWorkouts from '../../../assets/images/BagWorkouts.png';
import MainLogo from '../../../assets/images/MainLogo.png';

const OnlineTraining = () => {
  
  const onFreeTrailPressed = () => {
    Linking.openURL('https://www.bazookatraining.com/trial-workouts');
  }
  const onHomeWorkoutsPressed = () => {
    Linking.openURL('https://www.bazookatraining.com/home-training');
  }
  const onSparringDrillsPressed = () => {
    Linking.openURL('https://www.bazookatraining.com/sparring-drills');
  }
  const onTutorialsPressed = () => {
    Linking.openURL('https://www.bazookatraining.com/single-strikes-1');
  }
  const onBagWorkoutsPressed = () => {
    Linking.openURL('https://www.bazookatraining.com/bagwork');
  }
  return (
   
    <LinearGradient
    colors={['#1F1F1F', '#000000']} // Set your gradient colors here
    style={styles.linear}
    >
       
         <ScrollView 
          style= {styles.scrollView}
          contentContainerStyle={styles.contentContainer}
         >
          <View style={styles.centeredContent}>
          <Image
            source={MainLogo}
            style={styles.mainLogo}
          />
          <Text style={styles.boldText}>ONLINE</Text>
        </View>
         <TouchableOpacity onPress={onFreeTrailPressed}>
         <Image
         source={FreeTrail}
         style={styles.freeTrail} // Set the desired width and height for your image
         /></TouchableOpacity>

         <TouchableOpacity onPress={onHomeWorkoutsPressed}>
         <Image
         source={HomeWorkouts}
         style={styles.freeTrail} // Set the desired width and height for your image
         />
         </TouchableOpacity>

         <TouchableOpacity onPress={onSparringDrillsPressed}>
         <Image
         source={SparringDrills}
         style={styles.freeTrail} // Set the desired width and height for your image
         />
         
         </TouchableOpacity>

         <TouchableOpacity onPress={onTutorialsPressed}>
         <Image
         source={Tutorials}
         style={styles.freeTrail} // Set the desired width and height for your image
         />
         </TouchableOpacity>

         <TouchableOpacity onPress={onBagWorkoutsPressed}>
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
      //alignItems: 'stretch',
      paddingTop: StatusBar.currentHeight,
      backgroundColor: 'black',
    },
    root: {
      flexGrow: 1,
      alignItems: 'center',
    },
    freeTrail: {
        width: '110%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        top: '9%',
        margin: '-11%',
        //borderRadius: 120,
      //  top:'10%',
       // alignItems: 'center'
       },
       scrollView: {
        height: '10%',
        width: '90%',
        margin: 0,
        alignSelf: 'center',
        padding: 0,
      //  borderWidth: 5,
        borderRadius: 5,
      //  borderColor: 'black',
      //  backgroundColor: 'lightblue'
      
      },
      contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    //    backgroundColor: 'lightgrey',
        paddingBottom: 80,
      },
      mainLogo: {
       // width: '50%',
        //height: '15%',
        resizeMode: 'contain',
       // top:'5%',
       // alignItems: 'center'
       },
       boldText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',

       },
       centeredContent: {
        alignItems: 'center',
        justifyContent: 'center',
        top:'3%',
      },

});

export default OnlineTraining