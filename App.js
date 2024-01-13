import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screen/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screen/MapScreen';
import Map from './screen/MapScreenRikshaw';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import MapScreenRikshaw from './screen/MapScreenRikshaw';
import LoginScreen from './screen/LoginScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        
        <Stack.Navigator>
        <Stack.Screen 
            name='LoginScreen' component={LoginScreen}
            options={{
              headerShown:false,
            }}
            
          />
          <Stack.Screen 
            name='HomeScreen' component={HomeScreen}
            options={{
              headerShown:false,
            }}
            
          />
          <Stack.Screen 
            name='MapScreen' component={MapScreen}
            options={{
              headerShown:false,
            }}
            
          />
          <Stack.Screen 
            name='MapScreenRikshaw' component={MapScreenRikshaw}
            options={{
              headerShown:false,
            }}
            
          />
        </Stack.Navigator>
      {/* <HomeScreen/> */}
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
