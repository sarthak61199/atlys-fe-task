import { useCallback, useState } from "react";
import deleteIcon from "../../assets/icons/delete.svg";
import emoji from "../../assets/icons/emoji.svg";
import { useAuth } from "../../contexts/auth-context";
import { usePost } from "../../contexts/post-context";
import { alert } from "../../lib/alert";
import BottomBar from "./bottom-bar";
import Toolbar from "./toolbar";

function Editor() {
  const [content, setContent] = useState("");
  const { addPost } = usePost();
  const { requireAuth } = useAuth();

  const handleSubmit = useCallback(() => {
    requireAuth(() => {
      if (content.trim()) {
        addPost({
          author: "You",
          timeAgo: "Just now",
          content: content.trim(),
          image: "person-1.jpg",
          emoji: "😈",
        });
        setContent("");
      }
    });
  }, [content, addPost, requireAuth]);

  const handleEmojiClick = () => {
    requireAuth(alert);
  };

  const handleDeleteClick = () => {
    requireAuth(alert);
  };

  return (
    <div className="bg-[#EBEBEB] p-2 rounded-3xl w-full min-w-0 mb-7">
      <div className="flex flex-col bg-white rounded-2xl">
        <div className="flex justify-between items-center p-2">
          <Toolbar />
          <button
            className="size-8 md:size-10 h-full grid place-items-center aspect-square rounded-lg bg-[#FF000026] flex-shrink-0"
            onClick={handleDeleteClick}
          >
            <img src={deleteIcon} alt="delete" className="w-4 h-4 md:w-auto md:h-auto" />
          </button>
        </div>
        <div className="flex items-start mt-3 gap-2 px-2">
          <button onClick={handleEmojiClick} className="flex-shrink-0 mt-1">
            <img src={emoji} alt="emoji" className="w-5 h-5 md:w-auto md:h-auto" />
          </button>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full text-xs md:text-sm h-20 md:h-24 bg-transparent outline-none resize-none placeholder:text-xs md:placeholder:text-sm"
            placeholder="What do you want to talk about?"
          />
        </div>
        <BottomBar onSubmit={handleSubmit} disabled={!content.trim()} />
      </div>
    </div>
  );
}

export default Editor;
