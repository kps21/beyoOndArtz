import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Collections } from "./components/Collections";
import { Artadvisory } from "./components/Artadvisory";
import { Paintings } from "./components/Paintings";
import { Prints } from "./components/Prints";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/artadvisory" element={<Artadvisory />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="/prints" element={<Prints />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
