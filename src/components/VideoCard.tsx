import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  channel,
  channelAvatar,
  views,
  timestamp,
  duration,
}) => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${id}`);
  };

  const handleChannelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/profile/${channel}`);
  };

  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        cursor: 'pointer',
        '&:hover .thumbnail': {
          '& img': {
            transform: 'scale(1.05)',
          },
        },
      }}
      onClick={handleVideoClick}
    >
      <Box sx={{ position: 'relative' }} className="thumbnail">
        <CardMedia
          component="img"
          height="200"
          image={thumbnail}
          alt={title}
          sx={{
            borderRadius: 2,
            transition: 'transform 0.3s ease',
          }}
        />
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {duration}
        </Typography>
      </Box>
      
      <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Avatar
            src={channelAvatar}
            sx={{ width: 36, height: 36, cursor: 'pointer' }}
            onClick={handleChannelClick}
          >
            {channel[0]}
          </Avatar>
          
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 500,
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                mb: 0.5,
              }}
            >
              {title}
            </Typography>
            
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                display: 'block',
                cursor: 'pointer',
                '&:hover': { color: 'text.primary' },
              }}
              onClick={handleChannelClick}
            >
              {channel}
            </Typography>
            
            <Typography variant="caption" color="text.secondary">
              {views} • {timestamp}
            </Typography>
          </Box>
          
          <IconButton size="small" sx={{ alignSelf: 'flex-start' }}>
            <MoreVert fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;