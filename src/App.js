import "./App.css";
import Row from "./components/Row";
import categories from "./Api";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* To Rated */}
      {/* Originals */}
      {categories.map((category) => {
        return <Row 
        key={category} 
        title={category.title} 
        path={category.path} />;

      })}
    </div>
  );
} 

export default App;