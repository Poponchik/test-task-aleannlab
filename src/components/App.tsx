import JobBoard from "./JobBoard";
import JobDetailed from "./JobDetailed";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobBoard />} />
        <Route path="/jobDetailed" element={<JobDetailed />} />
      </Routes>
    </Router>
  );
}

export default App;
