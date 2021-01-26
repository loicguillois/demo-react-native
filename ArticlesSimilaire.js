import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { useSelector } from "react-redux";

export default function Detail({ navigation, route, nom }) {

  const annonces = useSelector(state => state.annonces);

  return (
    <View>
        <Text>Articles similaires à {nom}</Text>
        { 
        annonces.filter(annonce => {
          return annonce.name.includes(nom)
        }).map(annonce => {
          return (
            <View style={styles.item}>
              <Text style={styles.itemName}>{annonce.name}</Text>
              <Text style={styles.itemPrix}>{annonce.prix} €</Text>
              { annonce.image && 
                <Image style={styles.img} source={{uri:annonce.image}} />
              }

              <Button
                title="Acheter"
                onPress={() => navigation.navigate('Details', annonce)}
              />
            </View>
          )
        })
      }
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      width: '100%'
    },
    itemName: {
  
    },
    itemPrix: {
      color: '#ccc'
    },
    img: {
        width: 150,
        height: 150,
      }
  });
  
