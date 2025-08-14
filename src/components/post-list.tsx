import { usePost } from "../contexts/post-context";
import PostCard from "./post-card";

function PostList() {
  const { posts } = usePost();

  return (
    <div className="flex flex-col gap-7">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

export default PostList;
