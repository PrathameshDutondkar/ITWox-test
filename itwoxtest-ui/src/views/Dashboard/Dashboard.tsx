// Dashboard.js
import React from 'react';
import { useDataContext } from '../../store/DataContext';
import './dashboard.scss';
import PostData from './postData';


const Dashboard = () => {
  const { posts, comments } = useDataContext(); // Use the useDataContext hook

  return (
    <div>
      <PostData posts={posts} comments={comments} /> {/* Pass posts and comments as props */}
    </div>
  );
};

export default Dashboard;
