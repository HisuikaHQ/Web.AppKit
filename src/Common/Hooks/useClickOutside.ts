import { useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement = HTMLDivElement>(onTriggered: () => void) {
  const ref = useRef<T>(null);
  const handlerRef = useRef(onTriggered);

  useEffect(() => {
    handlerRef.current = onTriggered;
  }, [onTriggered]);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (el && !el.contains(event.target as Node)) handlerRef.current();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  return ref;
}
