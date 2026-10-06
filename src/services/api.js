import { projectData } from "../data/projectData";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA !== "false";

/**
 * Project summary metadata
 */
export async function getProjectSummary() {
  if (USE_MOCK_DATA) {
    return {
      name: projectData.name,
      subtitle: projectData.subtitle,
      studyArea: projectData.studyArea,
      city: projectData.city,
      wardCount: projectData.wardCount,
      studyPeriod: projectData.studyPeriod,
      variables: projectData.variables,
      sources: projectData.sources,
      currentStage: "Data validation → Model-ready data preparation",
    };
  }

  const res = await fetch(`${API_BASE_URL}/summary`);
  if (!res.ok) throw new Error("Failed to fetch project summary");
  return res.json();
}

/**
 * Satellite data coverage information
 */
export async function getDataCoverage() {
  if (USE_MOCK_DATA) {
    return {
      studyPeriod: projectData.studyPeriod,
      sources: projectData.sources.map((s) => ({
        id: s.id,
        name: s.name,
        variables: s.variables,
        status: "Configured (Awaiting preprocessed imagery pipeline)",
      })),
    };
  }

  const res = await fetch(`${API_BASE_URL}/coverage`);
  if (!res.ok) throw new Error("Failed to fetch data coverage");
  return res.json();
}

/**
 * List of administrative wards for Faridabad (1 to 40)
 */
export async function getWards() {
  if (USE_MOCK_DATA) {
    return Array.from({ length: projectData.wardCount }, (_, i) => ({
      wardId: i + 1,
      name: `Ward ${i + 1}`,
      city: projectData.city,
      status: "Validation pending",
    }));
  }

  const res = await fetch(`${API_BASE_URL}/wards`);
  if (!res.ok) throw new Error("Failed to fetch wards list");
  return res.json();
}

/**
 * Single ward details placeholder
 */
export async function getWardDetails(wardId) {
  if (USE_MOCK_DATA) {
    return {
      wardId: Number(wardId),
      name: `Ward ${wardId}`,
      city: projectData.city,
      variablesMonitored: projectData.variables,
      status: "Data validation in progress — No finalized satellite values available yet",
    };
  }

  const res = await fetch(`${API_BASE_URL}/wards/${wardId}`);
  if (!res.ok) throw new Error(`Failed to fetch details for ward ${wardId}`);
  return res.json();
}

/**
 * Model forecast status / safe placeholder (No fake predictions)
 */
export async function getForecast() {
  if (USE_MOCK_DATA) {
    return {
      status: "Not Ready (Stage 1: Foundation)",
      message: "Forecast generation pipeline will be activated after ConvLSTM, GNN, and Swin Transformer model training.",
      predictions: [],
    };
  }

  const res = await fetch(`${API_BASE_URL}/forecast`);
  if (!res.ok) throw new Error("Failed to fetch forecast");
  return res.json();
}

/**
 * Status of the planned deep learning model pipelines
 */
export async function getModelStatus() {
  if (USE_MOCK_DATA) {
    return {
      currentStage: "Data validation → Model-ready data preparation",
      models: [
        { name: "ConvLSTM", purpose: "Temporal learning", status: "Planned" },
        { name: "GNN", purpose: "Inter-ward spatial relationships", status: "Planned" },
        { name: "Swin Transformer", purpose: "Spatial feature learning", status: "Planned" },
      ],
    };
  }

  const res = await fetch(`${API_BASE_URL}/model-status`);
  if (!res.ok) throw new Error("Failed to fetch model status");
  return res.json();
}

/**
 * Industrial analysis pipeline placeholder
 */
export async function getIndustrialAnalysis() {
  if (USE_MOCK_DATA) {
    return {
      framework: "Attribution and Scenario Simulation",
      existingIndustries: "Counterfactual attribution (Methodology planned)",
      proposedIndustries: "Comparable-industry emissions lookup + new-node insertion + re-forecast + estimated change (Methodology planned)",
      records: [],
    };
  }

  const res = await fetch(`${API_BASE_URL}/industrial-analysis`);
  if (!res.ok) throw new Error("Failed to fetch industrial analysis");
  return res.json();
}
