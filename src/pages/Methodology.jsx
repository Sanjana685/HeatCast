import React from "react";
import { projectData } from "../data/projectData";

export default function Methodology() {
  return (
    <div className="bg-white border border-ink-100 rounded-lg p-6 shadow-sm space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink-900 mb-2">Research Methodology</h1>
        <p className="text-sm text-ink-500">
          Spatiotemporal research design for {projectData.studyArea} ({projectData.studyPeriod}).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50 space-y-2">
          <h2 className="font-semibold text-ink-900">1. Spatial Framework</h2>
          <p className="text-xs text-ink-700">
            {projectData.wardCount} administrative wards in Faridabad serving as the spatial unit of analysis, modeled as an inter-ward graph structure.
          </p>
        </div>

        <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50 space-y-2">
          <h2 className="font-semibold text-ink-900">2. Multi-Sensor Data Integration</h2>
          <p className="text-xs text-ink-700">
            Integrating Landsat 8/9 thermal data (LST), Sentinel-2 multispectral indices (NDVI, NDBI), and Sentinel-5P atmospheric observations (NO₂, SO₂, CO).
          </p>
        </div>

        <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50 space-y-2">
          <h2 className="font-semibold text-ink-900">3. Planned Deep Learning Pipeline</h2>
          <p className="text-xs text-ink-700">
            Hybrid model combining ConvLSTM for temporal sequence learning, GNN for inter-ward spatial relationships, and Swin Transformer for spatial feature extraction.
          </p>
        </div>

        <div className="p-4 border border-ink-100 rounded-md bg-ink-50/50 space-y-2">
          <h2 className="font-semibold text-ink-900">4. Industrial Attribution & Forecasting</h2>
          <p className="text-xs text-ink-700">
            Counterfactual attribution for existing industries, and comparable-industry emissions lookup + new-node insertion for proposed industries.
          </p>
        </div>
      </div>
    </div>
  );
}
