import { memo } from "react";

import styles from "./TextLine.module.css";
import useSplittedText from "./useSplittedText";

type TextLineProps = {
  children: string;
  tailLength: number;
  title?: string;
  className?: string;
};

// Для работы с css классами обычно использую classnames

export const TextLine = memo(({ children, tailLength, title, className }: TextLineProps) => {
  const [leadText, tailText] = useSplittedText(children, tailLength);
  return (
    <div title={title} className={`${styles.container} ${className}`}>
      <span className={styles.lead}>{leadText}</span>
      <span className={styles.tail}>{tailText}</span>
    </div>
  );
});
