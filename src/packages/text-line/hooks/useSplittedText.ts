import { useMemo } from "react";

export default function useSplittedText(text: string, tailLength: number): readonly[string[], string] {
 
  return useMemo(() => {
    const length = Math.round(tailLength);   
    const leadText = text.slice(0, -length).split('');
    const tailText = text.slice(-length);

    return [leadText, tailText];
  }, [text, tailLength]);
}