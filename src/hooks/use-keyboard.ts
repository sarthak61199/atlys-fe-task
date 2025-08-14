import { useEffect, useCallback } from "react";

interface UseKeyboardOptions {
  enabled?: boolean;
  target?: EventTarget | null;
  preventDefault?: boolean;
  stopPropagation?: boolean;
}

export const useKeyboard = (
  key: string,
  callback: (event: KeyboardEvent) => void,
  options: UseKeyboardOptions = {}
) => {
  const {
    enabled = true,
    target = typeof document !== "undefined" ? document : null,
    preventDefault = false,
    stopPropagation = false,
  } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        if (preventDefault) {
          event.preventDefault();
        }
        if (stopPropagation) {
          event.stopPropagation();
        }
        callback(event);
      }
    },
    [key, callback, preventDefault, stopPropagation]
  );

  useEffect(() => {
    if (!enabled || !target) return;

    target.addEventListener("keydown", handleKeyDown as EventListener);

    return () => {
      target.removeEventListener("keydown", handleKeyDown as EventListener);
    };
  }, [enabled, target, handleKeyDown]);
};
