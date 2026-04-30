import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import RunbacksPage from "./pages/RunbacksPage"
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/Navbar";
import "./gold-resource.css"
import Embers from "./components/Embers";
// import StepCard from "./components/StepCard"


function App() {
  return (
    <Router>

      <div className="ds-container" style={{ maxWidth: "none", gap: "0", padding: "1rem" }}>
        {/* The Routes block decides which Page to render based on the URL! */}
        <Embers totalEmbers={30}></Embers>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/runbacks" element={<RunbacksPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>


      </div>
    </Router >
  );
}

export default App;
