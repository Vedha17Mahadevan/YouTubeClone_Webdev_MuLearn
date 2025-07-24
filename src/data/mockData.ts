export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
  description: string;
  subscribers: string;
  likes: string;
  category: string;
}

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Building a Modern React Application with TypeScript',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    channel: 'Tech Academy',
    channelAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    views: '150K views',
    timestamp: '2 days ago',
    duration: '12:45',
    description: 'Learn how to build a modern React application using TypeScript, Material-UI, and best practices.',
    subscribers: '2.1M',
    likes: '12K',
    category: 'Technology',
  },
  {
    id: '2',
    title: 'The Future of Web Development in 2024',
    thumbnail: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    channel: 'Dev Insights',
    channelAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    views: '85K views',
    timestamp: '1 week ago',
    duration: '18:32',
    description: 'Exploring the latest trends and technologies shaping web development in 2024.',
    subscribers: '890K',
    likes: '7.2K',
    category: 'Technology',
  },
  {
    id: '3',
    title: 'Relaxing Music for Coding and Focus',
    thumbnail: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    channel: 'Focus Beats',
    channelAvatar: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    views: '2.3M views',
    timestamp: '3 months ago',
    duration: '2:45:00',
    description: 'Perfect ambient music for programming, studying, and deep focus sessions.',
    subscribers: '5.6M',
    likes: '89K',
    category: 'Music',
  },
  {
    id: '4',
    title: 'Ultimate Gaming Setup Tour 2024',
    thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    channel: 'Gaming Hub',
    channelAvatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    views: '450K views',
    timestamp: '5 days ago',
    duration: '15:23',
    description: 'Check out this incredible gaming setup with the latest tech and RGB lighting.',
    subscribers: '1.8M',
    likes: '28K',
    category: 'Gaming',
  },
  {
    id: '5',
    title: 'Healthy Meal Prep for the Week',
    thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    channel: 'Healthy Kitchen',
    channelAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    views: '325K views',
    timestamp: '4 days ago',
    duration: '22:10',
    description: 'Easy and nutritious meal prep ideas that will save you time and keep you healthy.',
    subscribers: '950K',
    likes: '18K',
    category: 'Lifestyle',
  },
  {
    id: '6',
    title: 'Amazing Travel Destinations You Must Visit',
    thumbnail: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    channel: 'Wanderlust',
    channelAvatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    views: '1.1M views',
    timestamp: '1 month ago',
    duration: '25:45',
    description: 'Discover breathtaking destinations around the world that should be on your bucket list.',
    subscribers: '3.2M',
    likes: '65K',
    category: 'Travel',
  },
  {
    id: '7',
    title: 'Mastering JavaScript ES6 Features',
    thumbnail: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    channel: 'Code Masters',
    channelAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    views: '210K views',
    timestamp: '1 week ago',
    duration: '35:20',
    description: 'Deep dive into modern JavaScript features including arrow functions, promises, and async/await.',
    subscribers: '1.5M',
    likes: '15K',
    category: 'Technology',
  },
  {
    id: '8',
    title: 'Stunning Nature Photography Tips',
    thumbnail: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    channel: 'Photo Pro',
    channelAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    views: '380K views',
    timestamp: '2 weeks ago',
    duration: '19:55',
    description: 'Learn professional techniques for capturing breathtaking nature photographs.',
    subscribers: '720K',
    likes: '22K',
    category: 'Education',
  },
];

export const getTrendingVideos = () => {
  return mockVideos.filter(video => 
    parseInt(video.views.replace(/[^\d]/g, '')) > 300000
  );
};

export const getVideosByCategory = (category: string) => {
  return mockVideos.filter(video => video.category === category);
};

export const getVideoById = (id: string) => {
  return mockVideos.find(video => video.id === id);
};

export const getRecommendedVideos = (currentVideoId: string) => {
  return mockVideos.filter(video => video.id !== currentVideoId).slice(0, 4);
};