import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions, TextInput, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo_1.png';
import BackgroundImage from '../../../assets/images/background_image1.png'
import Quote from '../../../assets/images/login_quote.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const SignIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {width, height} = useWindowDimensions();
  const windowWidth = Dimensions.get('window').width;

  const onSignInPressed = () => {
    console.warn("Signed In");
    navigation.navigate('HomePage');
  }
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
    navigation.navigate('ForgotPassword');
  }
  const onRegisterPressed = () => {
    console.warn("Register");
    navigation.navigate('SignUp');

  }

  return (
   
    <LinearGradient
      colors={['#1F1F1F', '#000000']} // Set your gradient colors here
      style={styles.linear}
      >
      <View style = {styles.root}>
      <Image 
      source={Logo} 
      style = {[styles.logo, {height: height * 0.7}]} 
      resizeMode="contain" 
      />
      <Image 
      source={Quote} 
      style = {[styles.quote, {height: height * 0.7}]} 
      resizeMode="contain" 
      />
      <Image 
      source={BackgroundImage} 
      style = {[styles.background, {height: height * 0.99}]} 
      resizeMode="contain" 
      />
     
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={[styles.customInputContainer]}
  >

    <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername} 

    />
    <CustomInput 
      placeholder="Password" 
      value={password} setValue={setPassword} 
      secureTextEntry={true} 
    
    />
    
  </KeyboardAvoidingView>

  <CustomButton 
    text={<Text style={{ fontStyle: 'italic' }}>BE GREAT!</Text>}
    onPress={onSignInPressed}
  />
  <CustomButton 
    text={<Text style={{ textDecorationLine: 'underline' }}>Forgot Password?</Text>} 
    onPress={onForgotPasswordPressed}
    type= "TERTIARY"
  />
  <CustomButton 
    text={<Text style={{ textDecorationLine: 'underline' }}>Register</Text>} 
    onPress={onRegisterPressed}
    type= "TERTIARY_Register"
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

  logo: {
    position: 'absolute',
    transform: [{rotate:'6deg'}],
    width: '115%',
    top: '6%',
    right: '4%',
    left:'2%',
    maxWidth: '130%',
    maxHeight: 400,
  //  zIndex: 1, // Ensure the logo is on top of the gradient

  },
  background: {
    position: 'absolute',
    width: '130%',
    height: '100%',
    top: '5%',
   // zIndex: 1,
    padding: 20,
    
  },
  quote: {
    position: 'absolute',
    width: '90%',
    top: '3%',
    left:'7%',
    maxWidth: '130%',
    maxHeight: 400,
   // zIndex: 1, // Ensure the logo is on top of the gradient
  },
  /*customInput: {
   // position: 'absolute',
  //  top: 20, // Adjust as needed
   // width: '100%',
    //bottom: '10%',
   // alignItems: 'center',
    marginBottom: 10, // Adjust as needed
  },*/
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

export default SignIn