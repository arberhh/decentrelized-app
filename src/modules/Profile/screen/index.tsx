import React, {useState} from 'react';
import {View, Button, Alert} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';

interface Profile {
  name: string;
  email: string;
  bio: string;
}

const AccountScreen: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    name: '',
    email: '',
    bio: '',
  });

  const handleChangeName = (text: string) => {
    setProfile({...profile, name: text});
  };

  const handleChangeEmail = (text: string) => {
    setProfile({...profile, email: text});
  };

  const handleChangeBio = (text: string) => {
    setProfile({...profile, bio: text});
  };

  const handleSaveProfile = () => {
    // You can perform actions to save the profile data
    // For now, let's just log the profile object
    console.log(profile);
    Alert.alert('Success', 'Your profile has been saved successfully!');
  };

  return (
    <View style={styles.container}>
      <Input
        label={'Name'}
        value={profile.name}
        onChangeText={handleChangeName}
      />
      <Input
        label={'Email'}
        value={profile.email}
        onChangeText={handleChangeEmail}
      />
      <Input label={'Bio'} value={profile.bio} onChangeText={handleChangeBio} />

      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

export default AccountScreen;
