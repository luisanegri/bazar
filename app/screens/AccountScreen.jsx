import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';

import colors from '../styles/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
];

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="User N"
          subTitle="user@user.com"
          image={require('../assets/user.jpg')}
        />
        <FlatList
          style={{ marginTop: 15 }}
          ItemSeparatorComponent={ListItemSeparator}
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
