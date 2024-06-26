import Header from "./Components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShowDetails from "./Pages/ShowDetails";
import SeasonDetails from "./Pages/SeasonDetails";
import Movies from "./Pages/Movies";
import MovieCategory from "./Pages/MovieCategory";
import TvSeries from "./Pages/TvSeries";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TvSeries />} />
          <Route path="/details/:name/:id" element={<ShowDetails />} />
          <Route
            path="/:name/seasons/:number/:id"
            element={<SeasonDetails />}
          />
          <Route path="/movies/:category" element={<MovieCategory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
