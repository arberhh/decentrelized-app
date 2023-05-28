import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 20,
  },
  tabBarButtonFocused: {
    borderTopWidth: 2,
    borderTopColor: '#000',
  },
});

export default styles;
