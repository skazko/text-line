import cn from "classnames/bind";
import styles from "./Tail.module.css";

const cx = cn.bind(styles);

type TailProps = {
  children: string;
  isOverflowed: boolean;
};
export const Tail = ({ children, isOverflowed }: TailProps) => {
  const className = cx({
    tail: true,
    overflow: isOverflowed,
  });

  return <span className={className}>{children}</span>;
};
