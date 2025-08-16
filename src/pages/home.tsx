import Editor from "../components/editor/editor";
import PostList from "../components/post-list";

function Home() {
  return (
    <main className="max-w-[568px] mx-auto mt-[91px]">
      <Editor />
      <PostList />
    </main>
  );
}

export default Home;
