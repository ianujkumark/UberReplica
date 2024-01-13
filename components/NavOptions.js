import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
  {
    id: "123",
    title: "Car Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Rickshaw Ride",
    image: "https://i.imgur.com/yYd4cuU.png",
    screen: "MapScreenRikshaw",
  },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin=useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={()=>navigation.navigate(item.screen)}
        style={styles.touchop}
        disabled={!origin}
        >

          <View>
            <Image
              style={styles.rideImage}
              source={{
                uri: item.image
              }}
            />
            <Text style={styles.text}>{item.title}</Text>
            <Icon style={styles.arr} name="arrowright" color="white" type="antdesign" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  rideImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  touchop: {
    backgroundColor: '#e5e5e5',
    padding: 2,
    paddingLeft: 5,
    paddingBottom: 8,
    paddingTop: 4,
    margin: 2,
    width: 196.1,
  },
  text: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: 'bold',
  },
  arr:{
    width: 20, 
    backgroundColor: 'black', 
    borderRadius: 999, 
    padding: 4, 
    marginTop: 8,
  },
});
