import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setDestination } from '../slices/navSlice';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';
// import NavFavourites from './NavFavourites';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.cont}>
            <Text style={styles.text}>Select your destination!</Text>
            <View style={styles.back}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where To?"
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        minLength={2}
                        query={{
                            key: GOOGLE_MAP_APIKEY,
                            language: 'en',
                        }}
                        returnKeyType={"search"}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                }),
                            );
                                
                            navigation.navigate("RideOptionsCard");
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        />
                </View>
                <NavFavourites/>
            </View>
        </SafeAreaView>
    );
};
export default NavigateCard;

const styles = StyleSheet.create({
    cont: {
      flex: 1,
    //   marginTop: StatusBar.currentHeight,
    },
    text: {
      textAlign: 'center',
      paddingVertical: 5, // Use paddingVertical instead of py
      fontSize: 30,
      color: 'grey',
    },
    back: {
      height: '100%',
      backgroundColor: 'white',
    },
    second:{
        flexShrink: 1,
    flexGrow: 1,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    }
  });
  const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#dddddf",
        borderRadius: 0,
        fontSize: 12,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
    textcar:{
        color: '#ffffff',
        textAlign: 'center',
    },
    
});