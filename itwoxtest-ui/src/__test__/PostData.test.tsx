import React from 'react';
  import { render, screen } from '@testing-library/react';
  import PostData from '../views/Dashboard/PostData';
  
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
  
  const mockPosts = [
    { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
    { userId: 2, id: 2, title: 'Post 2', body: 'Body 2' },
  ];
  
  const mockComments = [
    { postId: 1, id: 1, name: 'Comment 1', email: 'comment1@example.com', body: 'Comment Body 1' },
    { postId: 1, id: 2, name: 'Comment 2', email: 'comment2@example.com', body: 'Comment Body 2' },
    { postId: 2, id: 3, name: 'Comment 3', email: 'comment3@example.com', body: 'Comment Body 3' },
  ];
  
  test('Table columns are present', () => {
    render(<PostData posts={mockPosts} comments={mockComments} />);
    
    // Check if the table columns are present
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Comments Count')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('User ID')).toBeInTheDocument();
  });
  