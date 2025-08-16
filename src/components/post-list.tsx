import { usePost } from "../contexts/post-context";
import PostCard from "./post-card";

function PostList() {
  const { posts } = usePost();

  return (
    <div className="flex flex-col gap-4 md:gap-7 pb-4 md:pb-8">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="post-card-enter"
          style={{
            animationDelay: `${index * 150}ms`
          }}
        >
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default PostList;
