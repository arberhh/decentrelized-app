import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedScreen from '../modules/Feed/screen';
import ImageUpload from '../modules/ImageUpload/screen';
import ProfileScreen from '../modules/Profile/screen';
import BottomTabBar from './BottomTabBar';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Upload" component={ImageUpload} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
