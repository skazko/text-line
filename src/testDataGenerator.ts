const prefixes = ["feature", "epic", "hotfix", "release"];
const names = [
  "create-new-text-ellipsis-component-TC2018.02",
  "deprecate-old-text-ellipsis-component-TC2018.03",
  "refactor-new-text-ellipsis-component-TC2019.01",
  "research-and-create-one-more-text-ellipsis-component-TC2020.02",
  "add-a-b-testing-of-text-components-TC2020.03",
];

const tails = [5, 6, 7];

type TextLineData = {
  text: string;
  tailLength: number;
  title?: string;
  className?: string;
  id: string;
};

export function generateTestData(count: number): TextLineData[] {
  const testData: TextLineData[] = [];

  while (count--) {
    const text = `${getRandom(prefixes)}/${getRandom(names)}`;
    const tailLength = getRandom(tails);
    const className = Boolean(getRandomInt(2)) ? "error" : undefined;
    const title = Boolean(getRandomInt(2)) ? text : undefined;
    const id = `${count}${Date.now()}`

    testData.push({
      text,
      tailLength,
      className,
      title,
      id,
    });
  }

  return testData;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandom<T>(array: T[]): T {
  const index = getRandomInt(array.length);
  return array[index];
}
