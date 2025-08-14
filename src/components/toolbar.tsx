import bold from "../assets/icons/bold.svg";
import chevronDown from "../assets/icons/chevron-down.svg";
import code from "../assets/icons/code.svg";
import italic from "../assets/icons/italic.svg";
import ol from "../assets/icons/ol.svg";
import quote from "../assets/icons/quote.svg";
import ul from "../assets/icons/ul.svg";
import underline from "../assets/icons/underline.svg";
import { alert } from "../lib/alert";

function Toolbar() {
  return (
    <div className="bg-[#00000008] p-1 rounded-lg h-10">
      <div className="flex items-center gap-2 h-full">
        <button
          className="flex items-center gap-1 shadow bg-white rounded-lg py-2 px-2"
          onClick={alert}
        >
          <span className="text-xs mr-3">Paragraph</span>
          <img src={chevronDown} alt="chevron down" className="size-2" />
        </button>

        <button
          className="p-2 h-full grid place-items-center aspect-square hover:bg-gray-200 rounded-lg bg-white shadow"
          onClick={alert}
        >
          <img src={bold} alt="bold" className="size-3" />
        </button>
        <button
          className="p-2 h-full grid place-items-center aspect-square hover:bg-gray-200 rounded-lg"
          onClick={alert}
        >
          <img src={italic} alt="italic" className="size-3" />
        </button>
        <button
          className="p-2 h-full grid place-items-center aspect-square hover:bg-gray-200 rounded-lg"
          onClick={alert}
        >
          <img src={underline} alt="underline" className="size-3" />
        </button>

        <div className="w-px h-8 bg-gray-300"></div>

        <button
          className="p-2 h-full grid place-items-center aspect-square hover:bg-gray-200 rounded-lg"
          onClick={alert}
        >
          <img src={ul} alt="unordered list" className="size-3" />
        </button>
        <button
          className="p-2 h-full grid place-items-center aspect-square hover:bg-gray-200 rounded-lg"
          onClick={alert}
        >
          <img src={ol} alt="ordered list" className="size-3" />
        </button>

        <div className="w-px h-8 bg-gray-300"></div>

        <button
          className="p-2 h-full grid place-items-center aspect-square hover:bg-gray-200 rounded-lg"
          onClick={alert}
        >
          <img src={quote} alt="quote" className="size-3" />
        </button>
        <button
          className="p-2 h-full grid place-items-center aspect-square hover:bg-gray-200 rounded-lg"
          onClick={alert}
        >
          <img src={code} alt="code" className="size-3" />
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
