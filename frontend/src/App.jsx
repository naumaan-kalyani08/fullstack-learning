import WithHeaderFooter from "./CommonLayouts/withHeaderFooter";
import "./App.css";
const App = () => {
  return (
    <div>
      <WithHeaderFooter>
        <h1 className="bg-red-100">Welcome to the App</h1>
      </WithHeaderFooter>
    </div>
  );
};

export default App;
