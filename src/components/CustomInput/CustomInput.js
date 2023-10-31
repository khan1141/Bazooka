import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'



const CustomInput = ({value, setValue, placeholder, secureTextEntry, customTop}) => {
  return (
   
    <View style={[styles.container, {top: customTop || '25%'}]}>

        <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
        />
        </View>
    
  );
};

const styles = StyleSheet.create({
container: {
   backgroundColor:'white',
    width: '80%',
    borderColor: 'black',
    height: '5%',
    top: '25%',
    borderRadius: '20%',
    paddingHorizontal: '7%',
    marginVertical: '1%',
    
    
},
input:{
   // marginHorizontal: '3%',
    marginVertical: '.5%',
    width: '100%',
    height: '110%',
},

});

export default CustomInput