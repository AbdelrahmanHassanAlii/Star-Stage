import Header from "./Components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShowDetails from "./Components/ShowDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
