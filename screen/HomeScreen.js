import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native';
// import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_APIKEY} from "@env"
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch=useDispatch();
  return (
    <SafeAreaView style={[styles.container, styles.back]}>
      <View style={styles.lpad}>
        <Image
          style={styles.uberimage}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <GooglePlacesAutocomplete 
        styles={{
            container:{
                flex:0
            },
            textInput: {
                fontSize: 18,
              },
        }}
        placeholder='Your Location'
        onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={'search'}
        minLength={2}
        enablePoweredByContainer={false}
        query={{
            key:GOOGLE_MAP_APIKEY,
            language:'en',
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        />
        <NavOptions/>
        <NavFavourites/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    color: 'red',
  },
  back: {
    height: '100%',
    backgroundColor: 'white',
  },
  uberimage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  lpad:{
    padding: 5,
  },
});
