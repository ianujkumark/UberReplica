import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber--789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_PRICE = 3;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const handleChoose = () => {
    // Perform any necessary actions when choosing a ride
    // For demonstration purposes, let's set the booking confirmation status to true
    setBookingConfirmed(true);
  };

  return (
    <SafeAreaView style={styles.safe1}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={styles.touch1}>
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={styles.text1}>Select a Ride — {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            style={[styles.touch2,
            { backgroundColor: id === selected?.id ? 'gray' : 'transparent' }
            ]}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View>
              <Text style={styles.texttitle}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text style={styles.textTravel}>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'INR'
              }).format(
                (travelTimeInformation?.duration?.value * SURGE_CHARGE_PRICE * multiplier) / 100,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity disabled={!selected || bookingConfirmed} style={[styles.touch3]} onPress={handleChoose}>
          <Text style={styles.choseTxt}>
            {bookingConfirmed ? 'Booking Confirmed' : `Choose ${selected?.title}`}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  safe1:{
    backgroundColor: '#ffffff', 
    flex: 1,
  },
  text1:{
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 20,
  },
  touch1:{
    position: 'absolute', 
    top: 10, 
    left: 10, 
    padding: 10, 
    borderRadius: 999,
  },
  touch2:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical:5, 
    paddingHorizontal: 20,
  },
  textTravel:{
    fontSize: 20,
  },
  texttitle:{
    fontSize: 20,
    fontWeight: '600',
  },
  choseTxt:{
    textAlign: 'center',
  color: 'white',  
  fontSize: 18, 
  paddingBottom: 20,
  },
  touch3:{
    backgroundColor:'black',
    py:3,
    margin:10,
  }
});

