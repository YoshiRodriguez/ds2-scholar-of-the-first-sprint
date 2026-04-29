import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import RunbacksPage from "./pages/RunbacksPage"
// import StepCard from "./components/StepCard"


function App() {
  return (
    <Router>

      <div className="ds-container">
        <Header
          title="DARK SOULS II: SOTFS - Boss Runbacks"
          subtitle="Every single boss runback in Dark Souls II: Scholar of the First Sin"
        />

        {/* The Routes block decides which Page to render based on the URL! */}
        <Routes>
          <Route path="/" element={<RunbacksPage />} />
          <Route path="/boss" element={<h1>This will be a boss page soon!</h1>} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
