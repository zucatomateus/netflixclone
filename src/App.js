import "./App.css";
import Row from "./components/Row";
import categories from "./Api";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* To Rated */}
      <Banner />
      {categories.map((category) => {
        return <Row 
        key={category} 
        title={category.title} 
        path={category.path}
        isLarge={category.isLarge} />;

      })}
    </div>
  );
} 

export default App;