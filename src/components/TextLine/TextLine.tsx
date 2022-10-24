import { memo } from "react";
import cn from "classnames";

import styles from "./TextLine.module.css";
import useSplittedText from "./useSplittedText";
import useCopyHandler from "./useCopyHandler";

type TextLineProps = {
  children: string;
  tailLength: number;
  title?: string;
  className?: string;
};

export const TextLine = memo<TextLineProps>(({ children, tailLength, title, className }) => {
  const [leadText, tailText] = useSplittedText(children, tailLength);
  const copyHandler = useCopyHandler();
  const containerClassName = cn(styles.container, className);

  return (
    <div title={title} className={containerClassName} onCopy={copyHandler}>
      <span className={styles.lead}>{leadText}</span>
      <span className={styles.tail}>{tailText}</span>
    </div>
  );
});
