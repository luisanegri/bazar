import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Pink jacket for sale</AppText>
        <AppText style={styles.price}>$70</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/user.jpg')}
            title="Jane Doe"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: { fontSize: 24, fontWeight: '500' },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  userContainer: { marginVertical: 40 },
});

export default ListingDetailsScreen;
