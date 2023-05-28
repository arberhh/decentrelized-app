import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../components/Post';
import posts from '../helpers/MockPostData';
import PostProps from '../interfaces/Post';
import styles from './styles';

const FeedScreen: React.FC = () => {
  // Render each post item
  const renderPostItem = ({item}: {item: PostProps}) => (
    <Post
      id={item.id}
      imageUrl={item.imageUrl}
      caption={item.caption}
      likes={item.likes}
      comments={item.comments}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.feedList}
      />
    </View>
  );
};

export default FeedScreen;
