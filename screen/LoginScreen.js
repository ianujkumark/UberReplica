import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import HomeScreen from './HomeScreen';
import { useNavigation } from '@react-navigation/native';

export default function Example() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    phoneNumber: '',
  });
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Check if both email and phone number are entered
    if (form.email.trim() !== '' && form.phoneNumber.trim() !== '') {
      // Check if the phone number is exactly 10 digits
      if (form.phoneNumber.length === 10) {
        // Navigate to HomeScreen
        navigation.navigate('HomeScreen');
      } else {
        alert('Please enter a valid 10-digit phone number.');
      }
    } else {
      // Show an alert or handle the case where either field is empty
      alert('Please enter both email and phone number.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={require('../assets/images/ublg.png')}
          />

          <Text style={styles.title}>
            Sign in to <Text style={{ color: 'white' }}>Uber</Text>
          </Text>

          <Text style={styles.subtitle}>
            Get Your Best Rides At Uber
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Your Name or Email</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder="examp@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Phone Number</Text>

            <TextInput
              autoCorrect={false}
              placeholder="+91##########"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              keyboardType="numeric"
              onChangeText={(phoneNumber) => setForm({ ...form, phoneNumber })}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSignIn}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 1,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: 'white',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'grey',
    borderColor: 'white',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: 'black',
  },
});