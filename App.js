import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignIn from './src/pages/SignIn/SignIn';
import SignUp from './src/pages/SignUp/SignUp';
import { LinearGradient } from 'expo-linear-gradient'; // Import the LinearGradient component
import Navigation from './src/navigation';


export default function App() {
  return (
    <View style={styles.root}>
      <LinearGradient
      colors={['#1F1F1F', '#000000']} // Set your gradient colors here
      style={styles.root}
      >
      <Navigation/>
      <StatusBar style="auto" />
      </LinearGradient>
    </View>
    
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  
  
});
