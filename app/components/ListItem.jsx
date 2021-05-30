import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../styles/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOflines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOflines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={32}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  detailsContainer: { marginLeft: 10, justifyContent: 'center', flex: 1 },
  image: { width: 70, height: 70, borderRadius: 35 },
  title: { fontWeight: '500', color: colors.black },
  subTitle: { color: colors.medium },
});

export default ListItem;
