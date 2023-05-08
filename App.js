import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ClientHome from './screens/ClientHome';
import AllBookingsList from './screens/AllBookingsList';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      
     
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ClientHome" component={ClientHome} />
        <Stack.Screen name="AllBookingsList" component={AllBookingsList} />
      </Stack.Navigator>
      </NavigationContainer>
        
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
   
  },
});
