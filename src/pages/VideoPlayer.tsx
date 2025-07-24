import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
  IconButton,
  Divider,
  Paper,
} from '@mui/material';
import {
  ThumbUp,
  ThumbDown,
  Share,
  Download,
  MoreHoriz,
  Notifications,
} from '@mui/icons-material';
import VideoCard from '../components/VideoCard';
import { getVideoById, getRecommendedVideos } from '../data/mockData';

const VideoPlayer: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const video = videoId ? getVideoById(videoId) : null;
  const recommendedVideos = videoId ? getRecommendedVideos(videoId) : [];

  if (!video) {
    return (
      <Container>
        <Typography variant="h4" sx={{ mt: 4 }}>
          Video not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          {/* Video Player */}
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                width: '100%',
                height: { xs: '200px', sm: '300px', md: '400px' },
                backgroundColor: '#000',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${video.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h6" color="white">
                  Video Player - {video.duration}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Video Info */}
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 500 }}>
            {video.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {video.views} • {video.timestamp}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
              <Button
                startIcon={<ThumbUp />}
                variant="outlined"
                size="small"
                sx={{ borderColor: '#3f3f3f', color: 'white' }}
              >
                {video.likes}
              </Button>
              <Button
                startIcon={<ThumbDown />}
                variant="outlined"
                size="small"
                sx={{ borderColor: '#3f3f3f', color: 'white' }}
              >
                Dislike
              </Button>
              <Button
                startIcon={<Share />}
                variant="outlined"
                size="small"
                sx={{ borderColor: '#3f3f3f', color: 'white' }}
              >
                Share
              </Button>
              <Button
                startIcon={<Download />}
                variant="outlined"
                size="small"
                sx={{ borderColor: '#3f3f3f', color: 'white' }}
              >
                Download
              </Button>
              <IconButton sx={{ color: 'white' }}>
                <MoreHoriz />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 2, borderColor: '#3f3f3f' }} />

          {/* Channel Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar
              src={video.channelAvatar}
              sx={{ width: 48, height: 48, mr: 2 }}
            >
              {video.channel[0]}
            </Avatar>
            
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {video.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {video.subscribers} subscribers
              </Typography>
            </Box>
            
            <Button
              variant="contained"
              startIcon={<Notifications />}
              sx={{
                backgroundColor: '#ff0000',
                '&:hover': { backgroundColor: '#cc0000' },
                borderRadius: 3,
                px: 3,
              }}
            >
              Subscribe
            </Button>
          </Box>

          {/* Description */}
          <Paper sx={{ p: 2, backgroundColor: '#212121', mb: 3 }}>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
              {video.description}
            </Typography>
          </Paper>

          {/* Comments Section */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Comments
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Comments are coming soon...
            </Typography>
          </Box>
        </Grid>

        {/* Recommended Videos */}
        <Grid item xs={12} lg={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Recommended
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {recommendedVideos.map((recVideo) => (
              <Box key={recVideo.id} sx={{ display: 'flex', gap: 1 }}>
                <Box
                  sx={{
                    width: 160,
                    height: 90,
                    borderRadius: 1,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onClick={() => window.location.href = `/watch/${recVideo.id}`}
                >
                  <img
                    src={recVideo.thumbnail}
                    alt={recVideo.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      bottom: 4,
                      right: 4,
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      color: 'white',
                      px: 0.5,
                      py: 0.25,
                      borderRadius: 0.5,
                      fontSize: '10px',
                    }}
                  >
                    {recVideo.duration}
                  </Typography>
                </Box>
                
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 500,
                      lineHeight: 1.2,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onClick={() => window.location.href = `/watch/${recVideo.id}`}
                  >
                    {recVideo.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                    {recVideo.channel}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {recVideo.views} • {recVideo.timestamp}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoPlayer;