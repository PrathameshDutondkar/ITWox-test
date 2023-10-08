import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

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

interface DataContextValue {
  posts: Post[];
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

export const DataContext = createContext<DataContextValue | undefined>(undefined);

interface DataContextProviderProps {
  children: ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>(`${process.env.REACT_APP_BACKEND_URL}/posts`);
        setPosts(response.data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch data');
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get<Comment[]>(`${process.env.REACT_APP_BACKEND_URL}/comments`);
        setComments(response.data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch comments data');
      }
    };

    Promise.all([fetchData(), fetchComments()])
      .catch(() => {
        setError('Failed to fetch data');
      })
      .finally(() => {
        setLoading(false); // Set loading to false once both requests are completed.
      });

  }, []);

  const contextValue: DataContextValue = {
    posts,
    comments,
    loading,
    error,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }
  return context;
};
