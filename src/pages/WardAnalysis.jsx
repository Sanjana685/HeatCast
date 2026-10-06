import React from "react";
import { projectData } from "../data/projectData";

export default function WardAnalysis() {
  return (
    <div className="bg-white border border-ink-100 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-ink-900 mb-2">Ward Analysis</h1>
      <p className="text-sm text-ink-500 mb-6">
        Administrative ward breakdown for {projectData.wardCount} wards in {projectData.city}.
      </p>

      <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50">
        <p className="text-sm text-ink-700">
          Spatial analysis framework ready for boundary GeoJSON integration and zonal extraction.
        </p>
        <span className="inline-block mt-3 px-2 py-0.5 text-xs rounded bg-status-planned/10 text-status-planned font-medium">
          Awaiting spatial boundaries
        </span>
      </div>
    </div>
  );
}
