import "./App.css";
import Example1 from "./componentes/Example1";
import Example2 from "./componentes/Example2";
import Example3 from "./componentes/Example3";
import Example4 from "./componentes/Example4";

function App() {
  return (
    <div className="App">
      {/* now you can use head tags inside jsx! */}
      <title>Testing react 19</title>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
    </div>
  );
}

export default App;
