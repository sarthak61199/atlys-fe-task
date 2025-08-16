interface ToolbarButtonProps {
  icon: string;
  alt: string;
  onClick: () => void;
  isSelected?: boolean;
  className?: string;
}

function ToolbarButton({ icon, alt, onClick, isSelected = false, className = "" }: ToolbarButtonProps) {
  const baseClasses = "p-2 h-full grid place-items-center aspect-square rounded-lg";
  const selectedClasses = isSelected ? "bg-white shadow" : "hover:bg-gray-200";
  
  return (
    <button
      className={`${baseClasses} ${selectedClasses} ${className}`}
      onClick={onClick}
    >
      <img src={icon} alt={alt} className="size-3" />
    </button>
  );
}

export default ToolbarButton;
