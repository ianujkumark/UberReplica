import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon';


const data =[
    {
        id:'123',
        icon:'home',
        location:'home',
        destination:'Subhash Nagar, Dehradun',
    },
    {
        id:'456',
        icon:'briefcase',
        location:'Work',
        destination:'Clement Town, Dehradun',
    },
];

const NavFavourites = () => {
    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}

        ItemSeparatorComponent={()=>(
            <View
                style={styles.seprate1}
            />
        )}  

        renderItem={({ item: { location, destination, icon } }) => (
          <TouchableOpacity 
          style={styles.touchopac}
          onPress={() => handlePress({ location, destination, icon })}>
            <Icon
              style={styles.ic1}
              name={icon}
              type="ionicon"
              color="white"
              size={18}
            />
            <View>
                <Text style={styles.viewloc1}>{location}</Text>
                <Text style={styles.viesdes1}>{destination}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

export default NavFavourites

const styles = StyleSheet.create({
    ic1:{
        marginRight: 4,
    borderRadius: 999, // Use a large value for a rounded-full effect
    backgroundColor: '#d1d5db', // Replace with your desired color
    padding: 12,
    },
    touchopac:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    viesdes1:{
        fontWeight: 'bold', // Equivalent to font-semibold
    fontSize: 18,
    },
    viesdes1:{
        color: '#718096',
    },
    seprate1:{
        backgroundColor: '#edf2f7', // Equivalent to tw bg-gray-200
        height: 0.5,
    }
})