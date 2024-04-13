import Header from "./Components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShowDetails from "./Pages/ShowDetails";
import SeasonDetails from "./Pages/SeasonDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:name/:id" element={<ShowDetails />} />
          <Route path="/:name/seasons/:number/:id" element={<SeasonDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
