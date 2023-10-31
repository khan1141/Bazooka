import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions, TextInput, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import RegisterLogo from '../../../assets/images/bazooka_logo1.png';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {width, height} = useWindowDimensions();
  const windowWidth = Dimensions.get('window').width;

  const onSignUpPressed = () => {
    console.warn("Signed In");
  }

  const onRegisterPressed = () => {
    console.warn("Register");
  }

  return (

      <View style = {styles.root}>
      <Image 
      source={RegisterLogo} 
      style = {[styles.logo, {height: height * 0.4}]} 
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
      customTop="15%"
    />
    <CustomInput 
      placeholder="Email Address" 
      value={email} 
      setValue={setEmail} 
      customTop="15%"
    />
    <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true}
      customTop="15%"
    />
    <CustomInput 
      placeholder="Confirm Password" 
      value={confirmPassword} 
      setValue={setConfirmPassword} 
      secureTextEntry={true} 
      customTop="15%"
    />
    
  </KeyboardAvoidingView>

  <CustomButton 
    text= "Register"
    onPress={onSignUpPressed}
  />
  <CustomButton 
  text={<Text style={{ textDecorationLine: 'underline' }}>Already have an account?</Text>} 
  onPress={onRegisterPressed}
  type= "TERTIARY"
/>
  </View>
  
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
 
});

export default SignUp