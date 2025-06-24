import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="grid grid-cols-3 gap-x-5 p-4">
      <Column title="Title 1" background="bg-gray-400" />
      <Column title="Title 2" background="bg-gray-500" />
      <Column title="Title 3" background="bg-gray-600" />
    </div>
  );
}

export default App;
