import bold from "../../assets/icons/bold.svg";
import chevronDown from "../../assets/icons/chevron-down.svg";
import code from "../../assets/icons/code.svg";
import italic from "../../assets/icons/italic.svg";
import ol from "../../assets/icons/ol.svg";
import quote from "../../assets/icons/quote.svg";
import ul from "../../assets/icons/ul.svg";
import underline from "../../assets/icons/underline.svg";
import { useAuth } from "../../contexts/auth-context";
import { alert } from "../../lib/alert";
import ToolbarButton from "./toolbar-button";

function Toolbar() {
  const { requireAuth } = useAuth();

  const handleAction = () => {
    requireAuth(alert);
  };

  return (
    <div className="bg-[#00000008] p-1 rounded-lg h-8 md:h-10 overflow-hidden">
      <div className="flex items-center gap-1 md:gap-2 h-full">
        <button
          className="flex items-center gap-1 shadow bg-white rounded-lg py-1 md:py-2 px-1 md:px-2 flex-shrink-0"
          onClick={handleAction}
        >
          <span className="text-[10px] md:text-xs mr-1 md:mr-3 whitespace-nowrap">Paragraph</span>
          <img src={chevronDown} alt="chevron down" className="size-2 flex-shrink-0" />
        </button>

        <ToolbarButton
          icon={bold}
          alt="bold"
          onClick={handleAction}
          isSelected={true}
        />
        <ToolbarButton icon={italic} alt="italic" onClick={handleAction} />
        <ToolbarButton
          icon={underline}
          alt="underline"
          onClick={handleAction}
        />

        <div className="w-px h-6 md:h-8 bg-gray-300 hidden sm:block"></div>

        <ToolbarButton icon={ul} alt="unordered list" onClick={handleAction} />
        <ToolbarButton icon={ol} alt="ordered list" onClick={handleAction} />

        <div className="w-px h-6 md:h-8 bg-gray-300 hidden sm:block"></div>

        <ToolbarButton icon={quote} alt="quote" onClick={handleAction} />
        <ToolbarButton icon={code} alt="code" onClick={handleAction} />
      </div>
    </div>
  );
}

export default Toolbar;
