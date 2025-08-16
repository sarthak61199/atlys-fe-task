import { memo } from "react";
import cameraIcon from "../../assets/icons/camera.svg";
import micIcon from "../../assets/icons/mic.svg";
import plusIcon from "../../assets/icons/plus.svg";
import sendIcon from "../../assets/icons/send.svg";
import { useAuth } from "../../contexts/auth-context";
import { alert } from "../../lib/alert";

interface BottomBarProps {
  onSubmit?: () => void;
  disabled?: boolean;
}

const BottomBar = memo(function BottomBar({
  onSubmit,
  disabled = false,
}: BottomBarProps) {
  const { requireAuth } = useAuth();

  const handleAction = () => {
    requireAuth(alert);
  };

  return (
    <div className="border-t-[1px] border-[#D9D9D9] flex justify-between items-center p-2">
      <div className="flex items-center gap-4">
        <button
          className="p-2 h-full grid place-items-center aspect-square rounded-lg bg-[#0000000F]"
          onClick={handleAction}
        >
          <img src={plusIcon} alt="Add" className="size-3" />
        </button>
        <button
          className="flex items-center justify-center"
          onClick={handleAction}
        >
          <img src={micIcon} alt="Microphone" className="size-4" />
        </button>
        <button
          className="flex items-center justify-center"
          onClick={handleAction}
        >
          <img src={cameraIcon} alt="Camera" className="size-4" />
        </button>
      </div>
      <button
        onClick={onSubmit}
        disabled={disabled}
        className={
          "disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 cursor-pointer hover:scale-105 transition-transform duration-300"
        }
      >
        <img src={sendIcon} alt="Send" className="size-6 text-white" />
      </button>
    </div>
  );
});

export default BottomBar;
