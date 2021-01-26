import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import Home from './Home';
import Detail from './Detail';


import { Image } from 'react-native';

const Stack = createStackNavigator();

const initialState = [
  {
    name: 'Vêtement',
    prix: 10
  },
  {
    name: 'Voiture',
    prix: 3000,
    image: 'https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg'
  },
  {
    name: 'Vélo',
    prix: 100
  },
  {
    name: 'Chaussure',
    prix: 10
  },
  {
    name: 'Moto',
    prix: 1500
  },
  {
    name: 'Vélo',
    prix: 100
  }
]

export default function App() {

  function annoncesReducer(state = { annonces: initialState }, action) {
    switch (action.type) {
      default:
        return state
    }
  }
  
  let store = createStore(annoncesReducer)

  return (
    <Provider store={store}>
<NavigationContainer>
    <Image style={styles.tinyLogo} source={require('./assets/Leboncoin-embleme.jpg')} />
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Detail} />
    </Stack.Navigator>
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
    tinyLogo: {
      width: 50,
      height: 50,
    }
});