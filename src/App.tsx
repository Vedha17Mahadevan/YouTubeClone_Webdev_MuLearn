import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';
import Trending from './pages/Trending';
import Subscriptions from './pages/Subscriptions';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<VideoPlayer />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/profile/:channelId" element={<Profile />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </Layout>
  );
}

export default App;