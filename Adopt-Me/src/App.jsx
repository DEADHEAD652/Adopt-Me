import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <>
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="lina" animal="cat" breed="persian" />
      <Pet name="mona" animal="cat" breed="mix" />
      <Pet name="jds" animal="dog" breed="german sherphard" />
    </div>
  </>;
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
