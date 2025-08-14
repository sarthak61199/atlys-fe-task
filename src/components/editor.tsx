import { useCallback, useState } from "react";
import deleteIcon from "../assets/icons/delete.svg";
import emoji from "../assets/icons/emoji.svg";
import { usePost } from "../contexts/post-context";
import { alert } from "../lib/alert";
import BottomBar from "./bottom-bar";
import Toolbar from "./toolbar";

function Editor() {
  const [content, setContent] = useState("");
  const { addPost } = usePost();

  const handleSubmit = useCallback(() => {
    if (content.trim()) {
      addPost({
        author: "You",
        timeAgo: "Just now",
        content: content.trim(),
        image: "person-1.jpg",
      });
      setContent("");
    }
  }, [content, addPost]);

  return (
    <div className="bg-[#EBEBEB] p-2 rounded-3xl min-w-[500px] mb-7">
      <div className="flex flex-col bg-white rounded-2xl">
        <div className="flex justify-between items-center p-2">
          <Toolbar />
          <button
            className="size-10 h-full grid place-items-center aspect-square rounded-lg bg-[#FF000026]"
            onClick={alert}
          >
            <img src={deleteIcon} alt="delete" />
          </button>
        </div>
        <div className="flex items-start mt-3 gap-2 px-2">
          <button onClick={alert}>
            <img src={emoji} alt="emoji" />
          </button>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full text-sm h-24 bg-transparent outline-none resize-none placeholder:text-sm"
            placeholder="What do you want to talk about?"
          />
        </div>
        <BottomBar onSubmit={handleSubmit} disabled={!content.trim()} />
      </div>
    </div>
  );
}

export default Editor;
