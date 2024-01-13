import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../components/Map';
import NavigateCard from '../componentsRikshaw/NavigateCard';
import RideOptionsCard from '../componentsRikshaw/RideOptionsCard';

const Stack = createStackNavigator();
    
const MapScreenRikshaw = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreenRikshaw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    height: '50%',
  },
  second: {
    height: '50%',
  },
});
