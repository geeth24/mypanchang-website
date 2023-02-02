import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy";
import Timezone from "./Timezone";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/timezone" element={<Timezone />} />
      </Routes>
    </Router>
  );
}

export default App;
