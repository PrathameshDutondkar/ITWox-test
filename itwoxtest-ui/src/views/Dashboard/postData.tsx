import React from 'react';
import { Table } from 'antd';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  data: Post[];
}

const PostData = ({ data }: Props) => {
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
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default PostData;