// Dashboard.js
import React from 'react';
import { useDataContext } from '../../store/DataContext';
import './dashboard.scss';
import PostData from './postData';
import { Spin } from 'antd';

const Dashboard = () => {
  const { posts, comments, loading, error } = useDataContext();

  return (
    <div>
      <h2>Dashboard</h2>
      {loading ? (
        <Spin size="large" tip="Loading..." />
      ) : error ? (
        <p>Error: {error}</p>
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <PostData posts={posts} comments={comments} />
      )}
    </div>
  );
};

export default Dashboard;
