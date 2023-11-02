import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import HomePage from '../pages/HomePage';
import Confirmation from '../pages/Confirmation';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Confirmation' component={Confirmation}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>
        <Stack.Screen name='HomePage' component={HomePage}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};



export default Navigation