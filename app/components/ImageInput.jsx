import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import globalStyles from '../styles/globalStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the Library');
    }
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are yous ure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' },
      ]);
  };
  const selectImage = async () => {
    try {
      // image library window where the user can select an image
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={globalStyles.colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
