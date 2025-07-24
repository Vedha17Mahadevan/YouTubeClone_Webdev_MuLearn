import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from '@mui/material';
import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUp,
  ExpandMore,
  AccountCircle,
} from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const mainItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Trending', icon: <Whatshot />, path: '/trending' },
    { text: 'Subscriptions', icon: <Subscriptions />, path: '/subscriptions' },
  ];

  const libraryItems = [
    { text: 'Library', icon: <VideoLibrary />, path: '/library' },
    { text: 'History', icon: <History />, path: '/history' },
    { text: 'Your videos', icon: <OndemandVideo />, path: '/your-videos' },
    { text: 'Watch later', icon: <WatchLater />, path: '/watch-later' },
    { text: 'Liked videos', icon: <ThumbUp />, path: '/liked' },
  ];

  const subscriptions = [
    { name: 'Tech Channel', avatar: 'T' },
    { name: 'Music Hub', avatar: 'M' },
    { name: 'Gaming Pro', avatar: 'G' },
    { name: 'Cooking Master', avatar: 'C' },
  ];

  const handleItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          mt: '64px',
          height: 'calc(100% - 64px)',
          overflowY: 'auto',
        },
      }}
    >
      <List>
        {mainItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleItemClick(item.path)}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {libraryItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleItemClick(item.path)}>
              <ListItemIcon sx={{ color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Subscriptions
        </Typography>
        <List dense>
          {subscriptions.map((sub) => (
            <ListItem key={sub.name} disablePadding>
              <ListItemButton onClick={() => handleItemClick(`/profile/${sub.name}`)}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary={sub.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;