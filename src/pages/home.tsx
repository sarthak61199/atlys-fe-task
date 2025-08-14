import Editor from "../components/editor";
import PostList from "../components/post-list";

function Home() {
  return (
    <main className="max-w-[568px] mx-auto">
      <Editor />
      <PostList />
    </main>
  );
}

export default Home;
