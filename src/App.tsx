import "./App.css";
import { TextLine } from "./components";
import { generateTestData } from "./testDataGenerator";

function App() {
  return (
    <div>
      {generateTestData(4000).map(({ id, text, ...props }) => (
        <TextLine key={id} {...props}>
          {text}
        </TextLine>
      ))}
    </div>
  );
}

export default App;
