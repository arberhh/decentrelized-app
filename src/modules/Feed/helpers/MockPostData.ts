import Post from '../interfaces/Post';

// Mock data for the feed
const posts: Post[] = [
  {
    id: '1',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_1280.jpg',
    caption: 'Beautiful flowers.',
    likes: 22,
    comments: 5,
  },
  {
    id: '2',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_1280.jpg',
    caption: 'Enjoying the beach!',
    likes: 45,
    comments: 8,
  },
  {
    id: '3',
    imageUrl:
      'https://cdn.pixabay.com/photo/2013/03/01/18/40/crispus-87928_1280.jpg',
    caption: 'Natyre!',
    likes: 14,
    comments: 3,
  },
  {
    id: '4',
    imageUrl:
      'https://image.shutterstock.com/image-photo/beautiful-sand-dunes-sahara-desert-260nw-713084413.jpg',
    caption: 'This is a beautiful sunset.',
    likes: 11,
    comments: 1,
  },
  // Add more posts as needed
];

export default posts;
