import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { projectData } from "../data/projectData";

// Simple chart data representing the satellite source variable distribution (verified project scope, not fake ML results)
const sourceVariableStats = [
  { source: "Landsat 8/9", variablesCount: 1, variables: "LST" },
  { source: "Sentinel-2", variablesCount: 2, variables: "NDVI, NDBI" },
  { source: "Sentinel-5P", variablesCount: 3, variables: "NO₂, SO₂, CO" },
];

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Header section */}
      <section className="bg-white border border-ink-100 rounded-lg p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded bg-status-progress/10 text-status-progress mb-2">
              Stage 1 Foundation Setup
            </span>
            <h1 className="text-3xl font-bold text-ink-900 tracking-tight">
              {projectData.name}
            </h1>
            <p className="text-lg text-ink-700 font-medium">
              {projectData.subtitle}
            </p>
          </div>
          <div className="text-sm text-ink-500 bg-ink-50 p-3 rounded-md border border-ink-100 space-y-1">
            <p>
              <strong className="text-ink-700">Current Phase:</strong> Data validation → Model-ready data preparation
            </p>
            <p>
              <strong className="text-ink-700">Notice:</strong> Research foundation active. No fabricated satellite or ML predictions.
            </p>
          </div>
        </div>
      </section>

      {/* Project Parameters Card Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-ink-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs uppercase font-medium text-ink-500">Study Area</p>
          <p className="text-lg font-semibold text-ink-900 mt-1">{projectData.studyArea}</p>
          <p className="text-xs text-ink-500 mt-1">City: {projectData.city}</p>
        </div>

        <div className="bg-white border border-ink-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs uppercase font-medium text-ink-500">Spatial Units</p>
          <p className="text-lg font-semibold text-ink-900 mt-1">{projectData.wardCount} Administrative Wards</p>
          <p className="text-xs text-ink-500 mt-1">Inter-ward spatial graph representation</p>
        </div>

        <div className="bg-white border border-ink-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs uppercase font-medium text-ink-500">Study Period</p>
          <p className="text-lg font-semibold text-ink-900 mt-1">{projectData.studyPeriod}</p>
          <p className="text-xs text-ink-500 mt-1">Multi-year spatiotemporal window</p>
        </div>

        <div className="bg-white border border-ink-100 rounded-lg p-4 shadow-sm">
          <p className="text-xs uppercase font-medium text-ink-500">Core Variables</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {projectData.variables.map((v) => (
              <span
                key={v}
                className="px-2 py-0.5 text-xs font-mono font-medium rounded bg-ink-100 text-ink-900"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources Overview */}
      <section className="bg-white border border-ink-100 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-ink-900 mb-4">
          Satellite Data Sources & Variables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectData.sources.map((source) => (
            <div
              key={source.id}
              className="p-4 border border-ink-100 rounded-md bg-ink-50/50 space-y-2"
            >
              <h3 className="font-semibold text-ink-900">{source.name}</h3>
              <p className="text-xs text-ink-500">Mapped Variables:</p>
              <div className="flex flex-wrap gap-1">
                {source.variables.map((variable) => (
                  <span
                    key={variable}
                    className="px-2 py-0.5 text-xs font-medium rounded bg-heat-soft text-heat font-mono"
                  >
                    {variable}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map & Chart Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Leaflet Map Centered on Faridabad */}
        <div className="bg-white border border-ink-100 rounded-lg p-4 shadow-sm flex flex-col">
          <div className="mb-3">
            <h2 className="text-base font-semibold text-ink-900">
              Study Area Map (Faridabad)
            </h2>
            <p className="text-xs text-ink-500">
              Center: [{projectData.mapCenter[0]}, {projectData.mapCenter[1]}] | Zoom: {projectData.mapZoom}
            </p>
          </div>
          <div className="w-full h-72 rounded-md overflow-hidden border border-ink-100">
            <MapContainer
              center={projectData.mapCenter}
              zoom={projectData.mapZoom}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={projectData.mapCenter}>
                <Popup>
                  <strong>{projectData.city}</strong>
                  <br />
                  Study Area: {projectData.wardCount} Wards
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Simple Chart */}
        <div className="bg-white border border-ink-100 rounded-lg p-4 shadow-sm flex flex-col">
          <div className="mb-3">
            <h2 className="text-base font-semibold text-ink-900">
              Project Data Sources (Variable Count)
            </h2>
            <p className="text-xs text-ink-500">
              Stage 1 scope check: Variable allocation across satellite constellations
            </p>
          </div>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sourceVariableStats} margin={{ top: 10, right: 20, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="source" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} allowDecimals={false} />
                <Tooltip
                  formatter={(value, name, item) => [
                    `${value} variable(s): ${item.payload.variables}`,
                    "Allocated Variables",
                  ]}
                />
                <Bar dataKey="variablesCount" fill="#ea580c" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
