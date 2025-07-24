import React from 'react';
import { Container, Grid, Typography, Box, Tabs, Tab } from '@mui/material';
import VideoCard from '../components/VideoCard';
import { getTrendingVideos, getVideosByCategory } from '../data/mockData';

const Trending: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const trendingVideos = getTrendingVideos();
  const musicVideos = getVideosByCategory('Music');
  const gamingVideos = getVideosByCategory('Gaming');
  const moviesVideos = getVideosByCategory('Entertainment');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getVideosForTab = () => {
    switch (tabValue) {
      case 0:
        return trendingVideos;
      case 1:
        return musicVideos;
      case 2:
        return gamingVideos;
      case 3:
        return moviesVideos;
      default:
        return trendingVideos;
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 500 }}>
        Trending
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="trending tabs"
          sx={{
            '& .MuiTab-root': {
              color: 'text.secondary',
              '&.Mui-selected': {
                color: 'white',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#ff0000',
            },
          }}
        >
          <Tab label="Now" />
          <Tab label="Music" />
          <Tab label="Gaming" />
          <Tab label="Movies" />
        </Tabs>
      </Box>

      <Grid container spacing={2}>
        {getVideosForTab().map((video) => (
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

      {getVideosForTab().length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No trending videos in this category yet
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Trending;