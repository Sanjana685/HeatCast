import React from "react";

export default function IndustrialAnalysis() {
  return (
    <div className="bg-white border border-ink-100 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-ink-900 mb-2">Industrial Analysis</h1>
      <p className="text-sm text-ink-500 mb-6">
        Thermal impact attribution and proposed industrial site scenario simulation.
      </p>

      <div className="space-y-4">
        <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50">
          <h2 className="font-semibold text-ink-900">Existing Industries</h2>
          <p className="text-xs text-ink-500 mt-1">Methodology: Counterfactual attribution</p>
          <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-status-planned/10 text-status-planned font-medium">
            Planned
          </span>
        </div>

        <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50">
          <h2 className="font-semibold text-ink-900">Proposed Industries</h2>
          <p className="text-xs text-ink-500 mt-1">
            Methodology: Comparable-industry emissions lookup + new-node insertion + re-forecast + estimated change
          </p>
          <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-status-planned/10 text-status-planned font-medium">
            Planned
          </span>
        </div>
      </div>
    </div>
  );
}
