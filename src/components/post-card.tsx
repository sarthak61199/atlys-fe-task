import heart from "../assets/icons/heart.svg";
import message from "../assets/icons/message.svg";
import share from "../assets/icons/share.svg";
import { useAuth } from "../contexts/auth-context";
import { alert } from "../lib/alert";

interface PostCardProps {
  author: string;
  timeAgo: string;
  content: string;
  image: string;
}

function PostCard({ author, timeAgo, content, image }: PostCardProps) {
  const { requireAuth } = useAuth();
  
  const handleAction = () => {
    requireAuth(alert);
  };

  return (
    <div className="bg-[#EBEBEB] p-2 pb-0 rounded-3xl min-w-[500px]">
      <div className="flex flex-col bg-white rounded-2xl p-4">
        <div className="grid grid-cols-[50px_1fr] gap-y-3">
          <img
            src={`./${image}`}
            alt={author}
            className="size-9 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <h4 className="text-[13px] font-semibold">{author}</h4>
            <span className="text-xs font-medium text-black/35">{timeAgo}</span>
          </div>
          <div className="size-8 p-1 bg-[#F2F2F2] flex justify-center items-center rounded-full">
            <span className="text-lg">🥴</span>
          </div>
          <p className="text-sm">{content}</p>
        </div>
      </div>
      <div className="flex gap-7 p-3">
        <button onClick={handleAction}>
          <img src={heart} alt="Heart" />
        </button>
        <button onClick={handleAction}>
          <img src={message} alt="Message" />
        </button>
        <button onClick={handleAction}>
          <img src={share} alt="Share" />
        </button>
      </div>
    </div>
  );
}

export default PostCard;
