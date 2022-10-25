import { render, screen } from "@testing-library/react"
import { TextLine } from "./TextLine"

test('Text line splits the text into two parts', () => {
  render(<TextLine tailLength={6}>Test text line</TextLine>)

  expect(screen.getByText('Test tex', {exact: true})).toBeInTheDocument();
  expect(screen.getByText('t line', {exact: true})).toBeInTheDocument();
});

test('Text line pass title to container', () => {
  render(<TextLine title="TestLine title" tailLength={6}>Test text line</TextLine>)

  expect(screen.getByTitle('TestLine title')).toBeInTheDocument();
});