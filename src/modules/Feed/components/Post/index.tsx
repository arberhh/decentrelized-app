import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import PostProps from '../../interfaces/Post';

const Post: React.FC<PostProps> = ({imageUrl, caption, likes, comments}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  console.log({isLiked, likes});

  return (
    <View style={styles.container}>
      <Text style={styles.caption}>{caption}</Text>
      <Image source={{uri: imageUrl}} style={styles.postImage} />
      <View style={styles.postDetails}>
        <View style={styles.postInfo}>
          <TouchableOpacity onPress={handleLike}>
            <View style={styles.likesContainer}>
              <AntDesign
                name={isLiked ? 'heart' : 'hearto'}
                size={20}
                color={isLiked ? '#FF0000' : '#888888'}
              />
              <Text style={styles.likesText}>{likeCount}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.commentsContainer}>
            <Feather name="message-square" size={20} color="#000000" />
            <Text style={styles.commentsText}>{comments}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
