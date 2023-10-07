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
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

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
    const fetchComments = async () => {
      try {
        const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments data:', error);
      }
    };
    fetchComments();

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div>
       <PostData posts={posts} comments={comments} />
    </div>
  );
};

export default Dashboard;