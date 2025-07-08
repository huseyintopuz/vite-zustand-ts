import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="grid grid-cols-3 gap-x-5 p-4">
      <Column state="PLANNED" background="bg-gray-400" />
      <Column state="ONGOING" background="bg-gray-500" />
      <Column state="DONE" background="bg-gray-600" />
    </div>
  );
}

export default App;
