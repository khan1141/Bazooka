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
import EnterCode from '../pages/EnterCode';
import OnlineTraining from '../pages/OnlineTraining';
import ClassSchedule from '../pages/ClassSchedule';


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
        <Stack.Screen name='EnterCode' component={EnterCode}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>
        <Stack.Screen name='HomePage' component={HomePage}/>
        <Stack.Screen name='OnlineTraining' component={OnlineTraining}/>
        <Stack.Screen name='ClassSchedule' component={ClassSchedule}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};



export default Navigation