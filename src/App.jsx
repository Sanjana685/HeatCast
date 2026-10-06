import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Overview from "./pages/Overview";
import DataCoverage from "./pages/DataCoverage";
import WardAnalysis from "./pages/WardAnalysis";
import HeatMap from "./pages/HeatMap";
import Model from "./pages/Model";
import IndustrialAnalysis from "./pages/IndustrialAnalysis";
import Methodology from "./pages/Methodology";

const navItems = [
  { path: "/", label: "Overview" },
  { path: "/data", label: "Data Coverage" },
  { path: "/wards", label: "Ward Analysis" },
  { path: "/heatmap", label: "Heat Map" },
  { path: "/model", label: "Model" },
  { path: "/industry", label: "Industrial Analysis" },
  { path: "/methodology", label: "Methodology" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-ink-50 text-ink-900 font-sans flex flex-col">
      {/* Stage 1 Minimal Navigation */}
      <header className="bg-white border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-heat"></span>
            <span className="font-bold text-lg text-ink-900">HeatCast</span>
            <span className="text-xs text-ink-500 font-mono hidden sm:inline">
              Stage 1 (Foundation)
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-ink-900 text-white"
                      : "text-ink-700 hover:text-ink-900 hover:bg-ink-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/data" element={<DataCoverage />} />
          <Route path="/wards" element={<WardAnalysis />} />
          <Route path="/heatmap" element={<HeatMap />} />
          <Route path="/model" element={<Model />} />
          <Route path="/industry" element={<IndustrialAnalysis />} />
          <Route path="/methodology" element={<Methodology />} />
        </Routes>
      </main>

      {/* Stage 1 Footer Status */}
      <footer className="bg-white border-t border-ink-100 py-3 text-center text-xs text-ink-500">
        HeatCast &bull; Urban Heat Prediction &bull; Faridabad, Haryana (2019–2026) &bull; Stage 1 Frontend Foundation
      </footer>
    </div>
  );
}
