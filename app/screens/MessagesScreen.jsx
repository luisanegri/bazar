import React from 'react';
import { FlatList } from 'react-native';

const messages = [
  {
    id: 1,
    title: 'T1',
    image: require('../assets/user.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    image: require('../assets/user.jpg'),
  },
];

export default function MessagesScreen() {
  return (
    <div>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        // renderItem={({item}) => <ListItem></ListItem>}
      />
    </div>
  );
}
