import React from "react";
import { projectData } from "../data/projectData";

export default function DataCoverage() {
  return (
    <div className="bg-white border border-ink-100 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-ink-900 mb-2">Data Coverage</h1>
      <p className="text-sm text-ink-500 mb-6">
        Satellite acquisition coverage across {projectData.studyPeriod} for {projectData.studyArea}.
      </p>

      <div className="space-y-4">
        {projectData.sources.map((source) => (
          <div key={source.id} className="p-4 border border-ink-100 rounded-md bg-ink-50/50">
            <h2 className="font-semibold text-ink-900">{source.name}</h2>
            <p className="text-xs text-ink-500 mt-1">Variables: {source.variables.join(", ")}</p>
            <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-status-planned/10 text-status-planned font-medium">
              Data validation in progress
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
