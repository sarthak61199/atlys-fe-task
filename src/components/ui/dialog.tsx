import { useEffect, type ReactNode } from "react";
import { useKeyboard } from "../../hooks/use-keyboard";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  disableInteraction?: boolean;
}

const Dialog = ({
  open,
  onOpenChange,
  children,
  disableInteraction = false,
}: DialogProps) => {
  useKeyboard(
    "Escape",
    () => {
      if (open && !disableInteraction) {
        onOpenChange(false);
      }
    },
    { enabled: open && !disableInteraction }
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => !disableInteraction && onOpenChange(false)}
        aria-hidden="true"
      />

      <div
        className="relative z-10 max-h-[90vh] max-w-[90vw] overflow-auto animate-slide-down"
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

export { Dialog };
