import { RefCallback } from "react";

type SimpleLetter = {
  value: string;
}

export enum OverflowType {Dot, Hidden, None}

export type SplittedLetter = SimpleLetter & {
  overflowType: OverflowType
}

export type OverflowableLetter = SplittedLetter & {
  isOverflowed: boolean;
  start?: number;
  end?: number;
}

export type OverflowedText = {
  leadText: string;
  tailText: string;
  availableWidth: number;
  ref: RefCallback<HTMLDivElement>;
};