import heart from "../assets/icons/heart.svg";
import message from "../assets/icons/message.svg";
import share from "../assets/icons/share.svg";
import { useAuth } from "../contexts/auth-context";
import { alert } from "../lib/alert";
import type { Post } from "../types";

function PostCard({
  author,
  timeAgo,
  content,
  image,
  emoji,
}: Omit<Post, "id">) {
  const { requireAuth } = useAuth();

  const handleAction = () => {
    requireAuth(alert);
  };

  return (
    <div className="bg-[#EBEBEB] p-2 pb-0 rounded-3xl w-full min-w-0 post-card">
      <div className="flex flex-col bg-white rounded-2xl p-3 md:p-4">
        <div className="grid grid-cols-[40px_1fr] md:grid-cols-[50px_1fr] gap-y-3">
          <img
            src={`./${image}`}
            alt={author}
            className="size-8 md:size-9 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <h4 className="text-xs md:text-[13px] font-semibold">{author}</h4>
            <span className="text-[10px] md:text-xs font-medium text-black/35">{timeAgo}</span>
          </div>
          <div className="size-6 md:size-8 p-1 bg-[#F2F2F2] flex justify-center items-center rounded-full">
            <span className="text-sm md:text-lg">{emoji}</span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed">{content}</p>
        </div>
      </div>
      <div className="flex gap-4 md:gap-7 p-2 md:p-3">
        <button onClick={handleAction} className="transition-transform hover:scale-110 active:scale-95">
          <img src={heart} alt="Heart" className="w-4 h-4 md:w-auto md:h-auto" />
        </button>
        <button onClick={handleAction} className="transition-transform hover:scale-110 active:scale-95">
          <img src={message} alt="Message" className="w-4 h-4 md:w-auto md:h-auto" />
        </button>
        <button onClick={handleAction} className="transition-transform hover:scale-110 active:scale-95">
          <img src={share} alt="Share" className="w-4 h-4 md:w-auto md:h-auto" />
        </button>
      </div>
    </div>
  );
}

export default PostCard;
