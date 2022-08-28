import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
