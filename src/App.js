import Header from "./Components/Header";
import Content from "./Components/Content";
import "./App.css";
import Search from "./Components/Search";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content container">
        <Search placeHolder="Search for movies or TV series" />
        <Content />
      </div>
    </div>
  );
}

export default App;
