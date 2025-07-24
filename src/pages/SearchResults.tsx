import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Box } from '@mui/material';
import VideoCard from '../components/VideoCard';
import { mockVideos } from '../data/mockData';

const SearchResults: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  
  const searchResults = mockVideos.filter(video =>
    video.title.toLowerCase().includes(query?.toLowerCase() || '') ||
    video.channel.toLowerCase().includes(query?.toLowerCase() || '') ||
    video.description.toLowerCase().includes(query?.toLowerCase() || '')
  );

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Search results for "{query}"
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        About {searchResults.length.toLocaleString()} results
      </Typography>

      <Grid container spacing={2}>
        {searchResults.map((video) => (
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

      {searchResults.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No results found for "{query}"
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Try different keywords or remove search filters
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default SearchResults;