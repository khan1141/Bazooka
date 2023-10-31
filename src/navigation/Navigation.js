import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown: false, 
        backgroundColor: 'transparent'}}>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};



export default Navigation