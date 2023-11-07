import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions, TextInput, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import RegisterLogo from '../../../assets/images/bazooka_logo1.png';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';



const ForgotPassword = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');


  const {width, height} = useWindowDimensions();
  const windowWidth = Dimensions.get('window').width;

  const onConfirmPressed = () => {
    console.warn("Signed In");
    navigation.navigate('EnterCode');
  }
  const onHaveAnAccountPressed = () => {
    console.warn("Register");
    navigation.navigate('SignIn');
  }


  return (
    <LinearGradient
    colors={['#1F1F1F', '#000000']} // Set your gradient colors here
    style={styles.linear}
    >
      <View style = {styles.root}>
      <Image 
      source={RegisterLogo} 
      style = {[styles.logo, {height: height * 0.4}]} 
      resizeMode="contain" 
      />
      <Text style ={styles.title}>Reset Password</Text>
    
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={[styles.customInputContainer]}
  >

    <CustomInput 
      placeholder="Enter Email" 
      value={code} 
      setValue={setCode} 
      customTop="15%"
    />
    
  </KeyboardAvoidingView>

  <CustomButton 
    text= "Send Code"
    onPress={onConfirmPressed}
  />
 
  <CustomButton 
  text={<Text style={{ textDecorationLine: 'underline' }}>Back to Sign In</Text>} 
  onPress={onHaveAnAccountPressed}
  type= "TERTIARY"
/>

  </View>
  </LinearGradient>
  
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    position: 'relative',

    
  },
  title: {
    color: 'white',
    top: '60%',
    fontSize: 20,
  },

  logo: {
    position: 'absolute',

    width: '100%',
    top: '6%',
    right: '4%',
    left:'2%',
    maxWidth: '130%',
    maxHeight: 400,

  },

 customInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: "1%", // Adjust this value as needed
    height: '100%',
  },
  linear: {
    flex:1,
  }
 
});

export default ForgotPassword