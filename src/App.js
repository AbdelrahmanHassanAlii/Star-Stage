import Header from "./Components/Header";
import Content from "./Components/Content";
import "./App.css";
import Search from "./Components/Search";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Search />
        <Content />
      </div>
    </div>
  );
}

export default App;
