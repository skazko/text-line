import { memo } from "react";
import cn from "classnames";
import RenderIfVisible from "react-render-if-visible";

import styles from "./TextLine.module.css";
import { Letter } from "../Letter/Letter";
import useSplittedText from "../../hooks/useSplittedText";
import { useAvailableWidth } from "../../hooks/useAvailableWidth";
import { Tail } from "../Tail/Tail";

type TextLineProps = {
  children: string;
  tailLength: number;
  title?: string;
  className?: string;
};

const _TextLine = ({ children, tailLength, title, className }: TextLineProps) => {
  const [leadText, tailText] = useSplittedText(children, tailLength);
  const [availableWidth, isOverflowed, ref] = useAvailableWidth();
  const containerClassName = cn(styles.container, className);

  return (
    <RenderIfVisible>
      <div ref={ref} title={title} className={containerClassName}>
        {leadText.map((letter, index) => (
          <Letter key={index} availableWidth={availableWidth} isOverflowed={isOverflowed}>
            {letter}
          </Letter>
        ))}
        {tailText.length > 0 && <Tail isOverflowed={isOverflowed}>{tailText}</Tail>}
      </div>
    </RenderIfVisible>
  );
};

export const TextLine = memo(_TextLine);
