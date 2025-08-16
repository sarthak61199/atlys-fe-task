import Editor from "../components/editor/editor";
import PostList from "../components/post-list";

function Home() {
  return (
    <main className="max-w-[568px] mx-auto mt-8 md:mt-[91px] px-4 md:px-0">
      <Editor />
      <PostList />
    </main>
  );
}

export default Home;
