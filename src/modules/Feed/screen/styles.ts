import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feedList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  postContainer: {
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  caption: {
    marginTop: 8,
    fontSize: 16,
  },
});
export default styles;
