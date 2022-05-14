import { useState } from "react";
import "./App.css";
import VideoPLayer from "./components/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
      <VideoPLayer />  
      </main>
    </div>
  );
}

export default App;
