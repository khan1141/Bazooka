import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import OnlineTraining from '../../../assets/images/OnlineTraining.png';
import MainLogo from '../../../assets/images/MainLogo.png';
import ClassSchedule from '../../../assets/images/class.png';
import Shop from '../../../assets/images/shop.png';
import Track from '../../../assets/images/track.png';
import Pay from '../../../assets/images/pay.png';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    // Handle button press event
    //
  };
  const onOnlineTrainingPressed = () => {
    navigation.navigate('OnlineTraining');
  };
  const openYoutubeChannel = () => {
    Linking.openURL('https://www.youtube.com/@BazookaJoe');
  }
  const openShop = () => {
    Linking.openURL('https://ww1.bazookasquad.com/?sub1=952c6d1d-7aaa-11ee-b512-aea6853c7564');
  }
  const onSignInPressed = () => {
    console.warn("Signed In");
    navigation.navigate('HomePage');
  }
  return (
    <LinearGradient
    colors={['#1F1F1F', '#000000']} // Set your gradient colors here
    style={styles.linear}
    >
    <SafeAreaView style={styles.saferoot}>
      <ScrollView 
      style= {styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
        <View style={styles.root}>

           <Image
            source={MainLogo}
            style={styles.mainLogo} // Set the desired width and height for your image
           />


           <View style={styles.rooty}>
            <TouchableOpacity onPress={onOnlineTrainingPressed}>
              <Image
                source={OnlineTraining}
                style={styles.onlineTraining} // Set the desired width and height for your image
              />
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress}>
              <Image
                source={ClassSchedule}
                style={styles.class} // Set the desired width and height for your image
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={openShop}>
              <Image
                source={Shop}
                style={styles.shop} // Set the desired width and height for your image
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={Track}
              style={styles.class} // Set the desired width and height for your image
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={Pay}
              style={styles.shop} // Set the desired width and height for your image
            />
          </TouchableOpacity>
        </View>
        </View>
        <CustomButton 
        text={<Text>Youtube</Text>}
        onPress={openYoutubeChannel}
        type='YOUTUBE'
      />
        </View>

       </ScrollView>
      </SafeAreaView>
      </LinearGradient>
  )
}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  saferoot: {
    flex: 1,
  },
  rooty: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  scrollView: {
    height: '10%',
    width: '100%',
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
   linear: {
    flex: 1,
   },
   youtube: {
  //  justifyContent: 'flex-end',
   },
   buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0, // You can adjust the left position if needed
    right: 0, // You can adjust the right position if needed
  },

   onlineTraining: {
    width: '90%', // Use percentages for flexibility
    height: undefined, // Let the aspect ratio be calculated automatically
    aspectRatio: 1, // Maintain aspect ratio
    top: '4%',
    borderRadius: 120,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between', // Distribute space evenly between ClassSchedule and Shop
    paddingHorizontal: 70, // Add some horizontal padding for spacing
   },
  class: {
    width: '75%', // Use percentages for flexibility
    height: undefined, // Let the aspect ratio be calculated automatically
    aspectRatio: 1, // Maintain aspect ratio
    borderRadius: 15,
    resizeMode: 'contain',
    //padding: 3,
   // paddingLeft:3,
    marginLeft:15,
    marginBottom:10,
  },
  shop: {
    width: '76%', // Use percentages for flexibility
    height: undefined, // Let the aspect ratio be calculated automatically
    aspectRatio: 1, // Maintain aspect ratio
    borderRadius: 40,
    resizeMode: 'contain',
    marginLeft: 10,
    alignItems: 'flex-end',
    
  },
   mainLogo: {
   // width: '50%',
    height: '15%',
    resizeMode: 'contain',
    top:'7.5%',
    alignItems: 'center',
   // marginBottom: '-1%'
   },
});

export default HomePage