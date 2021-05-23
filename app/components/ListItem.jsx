import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../styles/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 15 },
  detailsContainer: { marginLeft: 10, justifyContent: 'center' },
  image: { width: 70, height: 70, borderRadius: 35 },
  title: { fontWeight: '500', color: colors.black },
  subTitle: { color: colors.medium },
});

export default ListItem;
