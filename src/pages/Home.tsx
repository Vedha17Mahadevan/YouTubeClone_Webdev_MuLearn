import React from 'react';
import { Container, Grid, Typography, Box, Chip } from '@mui/material';
import VideoCard from '../components/VideoCard';
import { mockVideos } from '../data/mockData';

const categories = [
  'All', 'Music', 'Gaming', 'Technology', 'Travel', 'Education', 'Lifestyle', 'Sports'
];

const Home: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {categories.map((category, index) => (
          <Chip
            key={category}
            label={category}
            variant={index === 0 ? 'filled' : 'outlined'}
            sx={{
              backgroundColor: index === 0 ? '#fff' : 'transparent',
              color: index === 0 ? '#000' : '#fff',
              borderColor: '#3f3f3f',
              '&:hover': {
                backgroundColor: index === 0 ? '#f0f0f0' : '#3f3f3f',
              },
            }}
          />
        ))}
      </Box>

      <Grid container spacing={2}>
        {mockVideos.map((video) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
            <VideoCard
              id={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              channel={video.channel}
              channelAvatar={video.channelAvatar}
              views={video.views}
              timestamp={video.timestamp}
              duration={video.duration}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
