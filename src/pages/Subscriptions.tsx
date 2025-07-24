import React from 'react';
import { Container, Grid, Typography, Box, Avatar, Divider } from '@mui/material';
import VideoCard from '../components/VideoCard';
import { mockVideos } from '../data/mockData';

const Subscriptions: React.FC = () => {
  const subscriptionChannels = [
    { name: 'Tech Academy', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'Dev Insights', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'Focus Beats', avatar: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'Gaming Hub', avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
  ];

  const subscriptionVideos = mockVideos.filter(video => 
    subscriptionChannels.some(channel => channel.name === video.channel)
  );

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 500 }}>
        Subscriptions
      </Typography>

      {/* Channel Avatars */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Latest from your subscriptions
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
          {subscriptionChannels.map((channel) => (
            <Box
              key={channel.name}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover .avatar': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Avatar
                src={channel.avatar}
                sx={{
                  width: 64,
                  height: 64,
                  mb: 1,
                  transition: 'transform 0.2s ease',
                }}
                className="avatar"
              >
                {channel.name[0]}
              </Avatar>
              <Typography variant="caption" align="center" sx={{ maxWidth: 80 }}>
                {channel.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ mb: 3, borderColor: '#3f3f3f' }} />

      {/* Subscription Videos */}
      <Grid container spacing={2}>
        {subscriptionVideos.map((video) => (
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

      {subscriptionVideos.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No videos from your subscriptions yet
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Subscribe to channels to see their latest videos here
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Subscriptions;