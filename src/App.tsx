import Split from "react-split";
import "./App.css";
import { TextLine } from "./components";
import { generateTestData } from "./testDataGenerator";

function App() {

  return (
    <div style={{ width: 800 }}>
      <Split className="split" dragInterval={20}>
        <div>
          {generateTestData(2000).map(({ id, text, ...props }) => (
            <TextLine key={id} {...props}>
              {text}
            </TextLine>
          ))}
        </div>
        <div>
          {generateTestData(2000).map(({ id, text, ...props }) => (
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
