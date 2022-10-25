import copy from 'copy-to-clipboard';
import { ClipboardEventHandler, ClipboardEvent, useCallback } from "react";

export default function useCopyHandler(): ClipboardEventHandler {
 
  return useCallback((e: ClipboardEvent) => {
    e.preventDefault();
    const selectedRawTextWithHighlighter = window.getSelection()?.toString() ?? '';
    const handledText = selectedRawTextWithHighlighter.replace(/\n/g, '');
    copy(handledText);
  }, []);
}
