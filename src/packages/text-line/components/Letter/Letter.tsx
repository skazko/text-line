import { Component } from "react";
import styles from "./Letter.module.css";

export type LetterProps = {
  children: string;
  availableWidth?: number;
  isOverflowed: boolean;
};

type LetterState = {
  offsetEnd?: number;
};

export class Letter extends Component<LetterProps, LetterState> {
  state: LetterState = {};

  setOffsetEnd = (element: HTMLSpanElement | null) => {
    if (element !== null) {
      const { width, x } = element.getBoundingClientRect();
      const parentX = element.parentElement?.getBoundingClientRect().x ?? 0;
      this.setState({ offsetEnd: x - parentX + width });
    }
  };

  shouldComponentUpdate(nextProps: Readonly<LetterProps>, nextState: Readonly<LetterState>): boolean {
    const { offsetEnd: currentOffsetEnd } = this.state;
    const { availableWidth: currentAvailableWidth, isOverflowed: currentIsOverflowed } = this.props;
    const { offsetEnd: nextOffsetEnd } = nextState;
    const { availableWidth: nextAvailableWidth, isOverflowed: nextIsOverflowed } = nextProps;

    return (
      (currentAvailableWidth === undefined && nextAvailableWidth !== undefined) ||
      (currentOffsetEnd === undefined && nextOffsetEnd !== undefined) ||
      (currentAvailableWidth !== undefined &&
        currentOffsetEnd !== undefined &&
        nextAvailableWidth !== undefined &&
        nextOffsetEnd !== undefined &&
        (currentOffsetEnd > currentAvailableWidth) !== (nextOffsetEnd > nextAvailableWidth)) ||
      currentIsOverflowed !== nextIsOverflowed
    );
  }

  render() {
    const { offsetEnd } = this.state;
    const { availableWidth, isOverflowed, children } = this.props;
    const className =
      offsetEnd !== undefined && availableWidth !== undefined && offsetEnd > availableWidth && isOverflowed
        ? styles.hidden
        : undefined;
    return (
      <span ref={this.setOffsetEnd} className={className}>
        {children}
      </span>
    );
  }
}
