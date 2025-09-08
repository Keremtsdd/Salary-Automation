import { useState } from "react";
import AddWorkers from "./components/Workers/AddWorkers";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState([]);
  return (
    <div>
    <AddWorkers setWorkers={setWorkers} />
    <WorkerList workers={workers} setWorkers={setWorkers}/>
    </div>
  );
}

export default App;
