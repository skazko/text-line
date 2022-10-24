import { useState } from "react";
import Split from "react-split";
import "./App.css";
import { TextLine } from "./components";
import { generateTestData } from "./testDataGenerator";

function App() {
  const [firstColumn] = useState(generateTestData(2000));
  const [secondColumn] = useState(generateTestData(2000));

  return (
    <div style={{ width: 800 }}>
      <Split className="split" dragInterval={20}>
        <div>
          {firstColumn.map(({ id, text, ...props }) => (
            <TextLine key={id} {...props}>
              {text}
            </TextLine>
          ))}
        </div>
        <div>
          {secondColumn.map(({ id, text, ...props }) => (
            <TextLine key={id} {...props}>
              {text}
            </TextLine>
          ))}
        </div>
      </Split>
    </div>
  );
}

export default App;
