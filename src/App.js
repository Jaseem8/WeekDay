import "./App.css";
import FilterComponent from "./components/Filter";
import JobResults from "./components/JobResults";

function App() {
  return (
    <div className="main-wrapper">
      <FilterComponent />
      <JobResults />
    </div>
  );
}

export default App;
