import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';

import colors from '../styles/colors';
import routes from '../components/navigation/Routes';

const listings = [
  {
    id: 1,
    title: 'Pink jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Chair in great condition',
    price: 200,
    image: require('../assets/chair.jpg'),
  },
];

export default function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={'$' + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
