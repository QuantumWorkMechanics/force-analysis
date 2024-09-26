import { useState } from "react";
import Instructions from "./components/Instructions";
import "./App.css";
import Layout from "./components/layout";
import { negativeForces, positiveForces } from "./assets/forces";

function App() {
  const [posForces, setPosForces] = useState(positiveForces);
  const [negForces, setNegForces] = useState(negativeForces);
  return (
    <>
      <Layout posForces={posForces} negForces={negForces} setNegForces={setNegForces} setPosForces={setPosForces} />
    </>
  );
}

export default App;
