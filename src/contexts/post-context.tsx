import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import postsData from "../../data.json";
import { generateId } from "../lib/utils";
import type { Post } from "../types";

interface PostContextType {
  posts: Post[];
  addPost: (post: Omit<Post, "id">) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

interface PostProviderProps {
  children: ReactNode;
}

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>(postsData.posts);

  const addPost = (post: Omit<Post, "id">) => {
    const newPost: Post = {
      ...post,
      id: generateId(),
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const value: PostContextType = {
    posts,
    addPost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export function usePost() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
}
