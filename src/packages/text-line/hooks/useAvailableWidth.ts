import { RefCallback, useCallback, useMemo, useState } from "react";
import useResizeObserver from "use-resize-observer";

export function useAvailableWidth(): readonly [number | undefined, boolean, RefCallback<HTMLDivElement>] {
  const [tailWidth, setTailWidth] = useState<number>();
  const [minNotOverflowedWidth, setMinNotOverflowedWidth] = useState<number>();
  const { ref, width } = useResizeObserver<HTMLDivElement>();

  const measureRef = useCallback((element: HTMLDivElement) => {
    if (element != null) {
      const { x: parentX } = element.getBoundingClientRect();
      const tailElement = element.lastElementChild;
      if (tailElement !== null) {
        try {
          const ellipsisWidth = parseInt(window.getComputedStyle(tailElement, ":before").width);
          const { width, x } = tailElement.getBoundingClientRect();
          setTailWidth(width + ellipsisWidth);
          setMinNotOverflowedWidth(x - parentX + width);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }, []);

  const mergedCallbackRef = useCallback(
    (element: HTMLDivElement) => {
      ref(element);
      measureRef(element);
    },
    [ref, measureRef]
  );

  const availableWidth = useMemo<number | undefined>(() => {
    return width && tailWidth && width - tailWidth;
  }, [tailWidth, width]);

  const isOverflowed = useMemo<boolean>(() => {
    return minNotOverflowedWidth !== undefined && width !== undefined && minNotOverflowedWidth >= width;
  }, [minNotOverflowedWidth, width]);

  return [availableWidth, isOverflowed, mergedCallbackRef];
}
