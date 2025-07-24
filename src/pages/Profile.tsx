import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
  Tabs,
  Tab,
  Divider,
} from '@mui/material';
import { Notifications, Check } from '@mui/icons-material';
import VideoCard from '../components/VideoCard';
import { mockVideos } from '../data/mockData';

const Profile: React.FC = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const [tabValue, setTabValue] = React.useState(0);
  
  // Mock channel data
  const channelData = {
    name: channelId === 'user' ? 'Your Channel' : (channelId || 'Unknown Channel'),
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
    banner: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=300',
    subscribers: '2.1M subscribers',
    videosCount: '1,234 videos',
    description: 'Welcome to our channel! We create amazing content about technology, tutorials, and much more. Subscribe for weekly uploads!',
    isSubscribed: false,
  };

  const channelVideos = mockVideos.filter(video => 
    video.channel.toLowerCase().includes(channelData.name.toLowerCase()) ||
    channelId === 'user'
  );

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 0 }}>
      {/* Channel Banner */}
      <Box
        sx={{
          height: { xs: 150, md: 200 },
          backgroundImage: `url(${channelData.banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: { xs: 0, md: 2 },
          mb: 3,
        }}
      />

      {/* Channel Info */}
      <Box sx={{ mb: 4, px: { xs: 2, md: 0 } }}>
        <Box sx={{ display: 'flex', alignItems: 'start', gap: 3, mb: 2 }}>
          <Avatar
            src={channelData.avatar}
            sx={{ width: { xs: 80, md: 120 }, height: { xs: 80, md: 120 } }}
          >
            {channelData.name[0]}
          </Avatar>
          
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              {channelData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {channelData.subscribers} • {channelData.videosCount}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 600 }}>
              {channelData.description}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                startIcon={channelData.isSubscribed ? <Check /> : <Notifications />}
                sx={{
                  backgroundColor: channelData.isSubscribed ? '#3f3f3f' : '#ff0000',
                  '&:hover': {
                    backgroundColor: channelData.isSubscribed ? '#4f4f4f' : '#cc0000',
                  },
                  borderRadius: 3,
                }}
              >
                {channelData.isSubscribed ? 'Subscribed' : 'Subscribe'}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#3f3f3f',
                  color: 'white',
                  borderRadius: 3,
                }}
              >
                Join
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ mb: 3, borderColor: '#3f3f3f' }} />

      {/* Channel Navigation */}
      <Box sx={{ mb: 3, px: { xs: 2, md: 0 } }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="channel tabs"
          sx={{
            '& .MuiTab-root': {
              color: 'text.secondary',
              textTransform: 'none',
              fontSize: '16px',
              '&.Mui-selected': {
                color: 'white',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#ff0000',
            },
          }}
        >
          <Tab label="Home" />
          <Tab label="Videos" />
          <Tab label="Shorts" />
          <Tab label="Live" />
          <Tab label="Playlists" />
          <Tab label="Community" />
          <Tab label="About" />
        </Tabs>
      </Box>

      {/* Content based on selected tab */}
      <Box sx={{ px: { xs: 2, md: 0 } }}>
        {tabValue === 0 && (
          <>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Recent uploads
            </Typography>
            <Grid container spacing={2}>
              {channelVideos.slice(0, 4).map((video) => (
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
          </>
        )}

        {tabValue === 1 && (
          <>
            <Typography variant="h6" sx={{ mb: 3 }}>
              All videos
            </Typography>
            <Grid container spacing={2}>
              {channelVideos.map((video) => (
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
          </>
        )}

        {tabValue > 1 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              This section is coming soon
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Profile;