import React from 'react';
import { Table } from 'antd';

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

interface Props {
  posts: Post[];
  comments: Comment[];
}

const PostData: React.FC<Props> = ({ posts, comments }) => {
  // Create a function to count comments for each post
  const countCommentsForPost = (postId: number) => {
    return comments.filter((comment) => comment.postId === postId).length;
  };

  // Define the columns for your table
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Comments Count', // New column for comments count
      key: 'commentsCount',
      render: (text: any, record: Post) => countCommentsForPost(record.id),
    },
  ];

  return <Table dataSource={posts} columns={columns} />;
};

export default PostData;
