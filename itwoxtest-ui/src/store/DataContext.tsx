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
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get<Comment[]>(`${process.env.REACT_APP_BACKEND_URL}/comments`);
        setComments(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching comments data:', error);
        setError('Failed to fetch comments data');
      } finally {
        setLoading(false);
      }
    };

    Promise.all([fetchData(), fetchComments()])
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
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
