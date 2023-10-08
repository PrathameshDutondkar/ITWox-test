import React from 'react';
import { useDataContext } from '../../store/DataContext';
import './dashboard.scss';
import PostData from './PostData';
import { Spin } from 'antd';

const Dashboard = () => {
  const { posts, comments, loading, error } = useDataContext();

  return (
    <div data-testid="dashboard">
      <h2>Dashboard</h2>
      {loading && (
        <div data-testid="loading-state">
          <Spin size="large" />
        </div>
      )}
      {error && (
        <div data-testid="error-state">
          <p>Error: {error}</p>
        </div>
      )}
      {!loading && !error && posts.length === 0 && (
        <div data-testid="no-posts-state">
          <p>No posts available.</p>
        </div>
      )}
      {!loading && !error && posts.length > 0 && (
        <PostData data-testid="post-data" posts={posts} comments={comments} />
      )}
    </div>
  );
};

export default Dashboard;
