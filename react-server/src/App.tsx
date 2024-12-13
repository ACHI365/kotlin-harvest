import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import HistoryPage from "./pages/HistoryPage.tsx";

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/History" element={<HistoryPage />} />
        </Routes>
    </Router>
);

export default App;
