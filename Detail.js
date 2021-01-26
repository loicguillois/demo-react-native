import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ArticlesSimilaire from './ArticlesSimilaire';

export default function Detail({ navigation, route }) {

  return (
    <View>
      <Image style={styles.tinyLogo} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
      <Text>{route.params.name}</Text>
      <Text>{route.params.prix}</Text>

      <ArticlesSimilaire nom={route.params.name} />
    </View>
  );
}
const styles = StyleSheet.create({
tinyLogo: {
  width: 50,
  height: 50,
}
});
