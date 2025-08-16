interface ToolbarButtonProps {
  icon: string;
  alt: string;
  onClick: () => void;
  isSelected?: boolean;
  className?: string;
}

function ToolbarButton({ icon, alt, onClick, isSelected = false, className = "" }: ToolbarButtonProps) {
  const baseClasses = "p-1 md:p-2 h-full grid place-items-center aspect-square rounded-lg transition-colors";
  const selectedClasses = isSelected ? "bg-white shadow" : "hover:bg-gray-200";
  
  return (
    <button
      className={`${baseClasses} ${selectedClasses} ${className}`}
      onClick={onClick}
    >
      <img src={icon} alt={alt} className="size-2 md:size-3" />
    </button>
  );
}

export default ToolbarButton;
