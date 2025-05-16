import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Spot from "./pages/spot";

// App.tsx

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
            <Route path="/Jup/" element={<Spot />}  />
            <Route path="/Jup/spot/*" element={<Spot />} />
        </Routes>
      </Router>
  );
};

export default App;
