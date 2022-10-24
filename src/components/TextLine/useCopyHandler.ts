import copy from 'copy-to-clipboard';
import { ClipboardEventHandler, ClipboardEvent, useCallback } from "react";

export default function useCopyHandler(): ClipboardEventHandler {
 
  return useCallback((e: ClipboardEvent) => {
    e.preventDefault();
    copy(window.getSelection()?.toString().replace(/\n/g, '') ?? '');
  }, []);
}
