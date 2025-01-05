import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card ">
      <Button    onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Button   variant={"secondary"} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button   variant={"ghost"} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button   variant={"link"} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
