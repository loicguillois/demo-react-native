import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';


import { ActivityIndicator, Colors } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';

import { useSelector } from "react-redux";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function Home({ navigation }) {

  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');

  setTimeout(() => {
    setLoading(false);
  }, 300)

  const onChangeSearch = query => setSearchQuery(query);

  const annonces = useSelector(state => state.annonces);
  
  return (
      <View>
    <Appbar.Header>
       <Appbar.Content title="Le bon coin" subtitle={'Petites annonces'} />
        <Appbar.Action icon="magnify" onPress={() => { setShowSearch(!showSearch) }} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>

    { showSearch &&
        <View style={styles.search}>
          <Searchbar
            placeholder="Recherche"
            onChangeText={onChangeSearch}
            value={searchQuery}
          /></View>
      }
<Text>{searchQuery}</Text>
      <View style={styles.container}>
      { loading &&
        <ActivityIndicator animating={true} color={Colors.red800} size="large" />
      }

      { !loading &&
        annonces.filter(annonce => {
          return !searchQuery || searchQuery && annonce.name.includes(searchQuery)
        }).map(annonce => {
          return (
            <View style={styles.item}>
              <Text style={styles.itemName}>{annonce.name}</Text>
              <Text style={styles.itemPrix}>{annonce.prix} €</Text>
              { annonce.image && 
                <Image style={styles.img} source={{uri:annonce.image}} defaultSource={{uri:'https://www.coindusalarie.fr/sites/default/files/styles/grande-image/public/fichiers/documents-et-images/fiches-pratiques/vos%20d%C3%A9fauts%20c%27est%20quoi.jpg?itok=f-HZKZtQ'}} />
              }

              <Button
                title="Acheter"
                onPress={() => navigation.navigate('Details', annonce)}
              />
            </View>
          )
        })
      }
        <StatusBar style="auto" />
      </View>
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
