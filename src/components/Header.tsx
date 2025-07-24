import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  VideoCall,
  Apps,
  Notifications,
  PlayArrow,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  border: '1px solid #3f3f3f',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  '&:focus-within': {
    borderColor: '#065fd4',
  },
  marginLeft: 0,
  width: '100%',
  maxWidth: '600px',
  height: '40px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: '0 20px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#3f3f3f',
  cursor: 'pointer',
  borderLeft: '1px solid #3f3f3f',
  '&:hover': {
    backgroundColor: '#4f4f4f',
  },
  minWidth: '64px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  height: '100%',
  '& .MuiInputBase-input': {
    padding: '0 16px',
    height: '100%',
    fontSize: '16px',
    '&::placeholder': {
      color: '#aaa',
      opacity: 1,
    },
  },
}));

const YouTubeLogo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
});

const LogoIcon = styled(Box)({
  width: '28px',
  height: '20px',
  backgroundColor: '#ff0000',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    width: '0',
    height: '0',
    borderLeft: '8px solid white',
    borderTop: '5px solid transparent',
    borderBottom: '5px solid transparent',
    marginLeft: '2px',
  },
});

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onMenuClick}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      
      <YouTubeLogo onClick={() => navigate('/')} sx={{ mr: 4 }}>
        <LogoIcon />
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            fontWeight: 600,
            fontSize: '20px',
            letterSpacing: '-0.5px',
          }}
        >
          YouTube
        </Typography>
      </YouTubeLogo>

      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', maxWidth: '728px', mx: 'auto' }}>
        <Search>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SearchIconWrapper onClick={handleSearch}>
            <SearchIcon sx={{ fontSize: '20px' }} />
          </SearchIconWrapper>
        </Search>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton color="inherit" sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <VideoCall />
        </IconButton>
        <IconButton color="inherit" sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Apps />
        </IconButton>
        <IconButton color="inherit">
          <Notifications />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
        </IconButton>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
      >
        <MenuItem onClick={() => navigate('/profile/user')}>Your Channel</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Sign Out</MenuItem>
      </Menu>
    </Toolbar>
  );
};

export default Header;
