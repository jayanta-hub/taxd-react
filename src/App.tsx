import "./App.css";
import "react-phone-number-input/style.css";
import { Box } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Assessment, Dashboard, Home } from "./pages";

function App() {
  return (
    <Box className="App" style={{ backgroundColor: "#ffffff" }}>
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
