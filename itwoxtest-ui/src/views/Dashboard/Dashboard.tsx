import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.scss';
import PostData from './postData';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Define a function to fetch the data
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <PostData data={posts} />
    </div>
  );
};

export default Dashboard;