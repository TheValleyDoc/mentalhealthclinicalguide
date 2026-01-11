import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { DisorderPage } from "./components/DisorderPage";
import { annapolisValleyData } from "./data/annapolisValleyData";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/depression"
            element={<DisorderPage data={annapolisValleyData.depression} />}
          />
          <Route
            path="/anxiety"
            element={<DisorderPage data={annapolisValleyData.anxiety} />}
          />
          <Route
            path="/substance-use"
            element={<DisorderPage data={annapolisValleyData.substanceUse} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
