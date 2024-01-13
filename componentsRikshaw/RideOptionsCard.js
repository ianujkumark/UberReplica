import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: "1",
    title: "Rikshaw 2 seats",
    multiplier: 1,
    image: "data:image/jpeg;base64,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",
  },
  {
    id: "2",
    title: "Rikshaw 4 seats",
    multiplier: 1.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhZxaNsdYkJz-dW_aWA4vsR4lw_X3voqzog&usqp=CAU",
  },
  {
    id: "3",
    title: "Rikshaw 6 seats",
    multiplier: 1.75,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8j2hs0uWMhHbqxgteQrNN3jVKRFR56XyqvQ&usqp=CAU",
  },
];

const SURGE_CHARGE_PRICE = 2.5;

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
        <Text style={styles.text1}>Select a Rickshaw — {travelTimeInformation?.distance?.text}</Text>
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

