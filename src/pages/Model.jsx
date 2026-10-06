import React from "react";

export default function Model() {
  return (
    <div className="bg-white border border-ink-100 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-ink-900 mb-2">Model Architecture</h1>
      <p className="text-sm text-ink-500 mb-6">
        Deep learning model pipeline for spatiotemporal urban heat forecasting.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50">
          <h2 className="font-semibold text-ink-900">ConvLSTM</h2>
          <p className="text-xs text-ink-500 mt-1">Temporal learning</p>
          <span className="inline-block mt-3 px-2 py-0.5 text-xs rounded bg-status-planned/10 text-status-planned font-medium">
            Planned
          </span>
        </div>
        <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50">
          <h2 className="font-semibold text-ink-900">GNN</h2>
          <p className="text-xs text-ink-500 mt-1">Inter-ward spatial relationships</p>
          <span className="inline-block mt-3 px-2 py-0.5 text-xs rounded bg-status-planned/10 text-status-planned font-medium">
            Planned
          </span>
        </div>
        <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50">
          <h2 className="font-semibold text-ink-900">Swin Transformer</h2>
          <p className="text-xs text-ink-500 mt-1">Spatial feature learning</p>
          <span className="inline-block mt-3 px-2 py-0.5 text-xs rounded bg-status-planned/10 text-status-planned font-medium">
            Planned
          </span>
        </div>
      </div>
    </div>
  );
}
