import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const ClassSchedule = () => {
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
  
    const options1 = [
      { label: 'Option 1.1', value: 'option1.1' },
      { label: 'Option 1.2', value: 'option1.2' },
      { label: 'Option 1.3', value: 'option1.3' },
    ];
  
    const options2 = [
      { label: 'Option 2.1', value: 'option2.1' },
      { label: 'Option 2.2', value: 'option2.2' },
      { label: 'Option 2.3', value: 'option2.3' },
    ];
  
    const options3 = [
      { label: 'Option 3.1', value: 'option3.1' },
      { label: 'Option 3.2', value: 'option3.2' },
      { label: 'Option 3.3', value: 'option3.3' },
    ];
  
    return (
        <LinearGradient
      colors={['#1F1F1F', '#000000']} // Set your gradient colors here
      style={styles.root}
      >
      <View style={{ padding: 20 }}>
        <Text>Select Option 1:</Text>
        <RNPickerSelect
          placeholder={{ label: 'Select an option', value: null }}
          onValueChange={(value) => setSelectedOption1(value)}
          items={options1}
        />
  
        <Text>Select Option 2:</Text>
        <RNPickerSelect
          placeholder={{ label: 'Select an option', value: null }}
          onValueChange={(value) => setSelectedOption2(value)}
          items={options2}
        />
  
        <Text>Select Option 3:</Text>
        <RNPickerSelect
          placeholder={{ label: 'Select an option', value: null }}
          onValueChange={(value) => setSelectedOption3(value)}
          items={options3}
        />
  
        <Text>Selected Option 1: {selectedOption1}</Text>
        <Text>Selected Option 2: {selectedOption2}</Text>
        <Text>Selected Option 3: {selectedOption3}</Text>
      </View>
      </LinearGradient>
    );
  };
  const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

  });
  

export default ClassSchedule