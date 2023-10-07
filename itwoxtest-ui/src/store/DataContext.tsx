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
}


export const DataContext = createContext<DataContextValue | undefined>(undefined);

interface DataContextProviderProps {
  children: ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>(`${process.env.REACT_APP_BACKEND_URL}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get<Comment[]>(`${process.env.REACT_APP_BACKEND_URL}/comments`);

        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments data:', error);
      }
    };

    fetchComments();
    fetchData();
  }, []);

  // Define the value to provide to the context
  const contextValue: DataContextValue = {
    posts,
    comments,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

// Define a custom hook to access the context
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }
  return context;
};
