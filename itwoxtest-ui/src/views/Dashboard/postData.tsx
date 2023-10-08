import React from 'react';
import { Table} from 'antd';

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
 

  const countCommentsForPost = (postId: number) =>
    comments.filter((comment) => comment.postId === postId).length;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Body', dataIndex: 'body', key: 'body' },
    { title: 'User ID', dataIndex: 'userId', key: 'userId' },
    {
      title: 'Comments Count',
      key: 'commentsCount',
      render: (text: any, record: Post) => countCommentsForPost(record.id),
    },
  ];

  return (
    <div>
        <Table dataSource={posts} columns={columns} />
    </div>
  );
};

export default PostData;
