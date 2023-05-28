import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

interface BottomTabBarProps {
  state: {index: number; routes: []};
  navigation: any;
}

const iconName: any = {
  Feed: 'home',
  Upload: 'camera',
  Profile: 'user',
};

const BottomTabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const {routes} = state;

  const renderTabBarButton = (route: any, index: number) => {
    const {name} = route;
    const focused = index === state.index;

    const onPress = () => {
      navigation.navigate(name);
    };

    return (
      <TouchableOpacity
        key={name}
        style={[styles.tabBarButton, focused && styles.tabBarButtonFocused]}
        onPress={onPress}>
        <Feather
          name={iconName[name]}
          size={24}
          color={focused ? '#000' : '#888'}
        />
      </TouchableOpacity>
    );
  };

  return <View style={styles.container}>{routes.map(renderTabBarButton)}</View>;
};

export default BottomTabBar;
