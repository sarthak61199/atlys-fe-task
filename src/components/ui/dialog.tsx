import { useEffect, type ReactNode } from "react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  disableInteraction?: boolean;
}

const Dialog = ({ open, onOpenChange, children, disableInteraction = false }: DialogProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open && !disableInteraction) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => !disableInteraction && onOpenChange(false)}
        aria-hidden="true"
      />

      <div
        className="relative z-10 max-h-[90vh] max-w-[90vw] overflow-auto"
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

export { Dialog };
