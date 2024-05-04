import "./App.css";
import FilterComponent from "./components/Filter";
import JobResults from "./components/JobResults";

function App() {
  return (
    <div className="wrapper">
      <FilterComponent />
      <JobResults />
    </div>
  );
}

export default App;
