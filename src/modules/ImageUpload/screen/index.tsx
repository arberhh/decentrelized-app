import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {
  ImagePickerResponse,
  OptionsCommon,
  launchImageLibrary,
} from 'react-native-image-picker';
import styles from '../styles';

const ImageUploadScreen: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = () => {
    const options: OptionsCommon = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (!response.didCancel) {
        console.log({res: response.assets});
        if (response.assets) {
          setImage(response?.assets[0]?.uri || '');
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Choose Image" onPress={handleImageUpload} />
      {image && <Image source={{uri: image}} style={styles.image} />}
      {!image && <Text>No image selected</Text>}
    </View>
  );
};

export default ImageUploadScreen;
