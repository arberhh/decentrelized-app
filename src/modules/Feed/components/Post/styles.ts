import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  postDetails: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  caption: {
    fontSize: 16,
    marginVertical: 10,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    marginLeft: 4,
    fontSize: 14,
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsText: {
    marginLeft: 4,
    fontSize: 14,
  },
});

export default styles;
