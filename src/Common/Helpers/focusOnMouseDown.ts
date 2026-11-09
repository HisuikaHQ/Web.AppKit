import type { MouseEvent } from "react";

// WebKit does not focus buttons on click, so :focus styles never apply there; focus explicitly to match Chromium and Gecko
export function focusOnMouseDown(event: MouseEvent<HTMLElement>) {
  if (event.button === 0 && document.activeElement !== event.currentTarget) {
    event.currentTarget.focus({ preventScroll: true });
  }
}
