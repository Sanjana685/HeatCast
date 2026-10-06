export const projectData = {
  name: "HeatCast",
  subtitle: "Urban Heat Intelligence",
  studyArea: "Faridabad, Haryana, India",
  city: "Faridabad",
  wardCount: 40,
  studyPeriod: "2019–2026",
  variables: ["LST", "NDVI", "NDBI", "NO₂", "SO₂", "CO"],
  sources: [
    {
      id: "landsat",
      name: "Landsat 8/9",
      variables: ["LST"],
    },
    {
      id: "sentinel2",
      name: "Sentinel-2",
      variables: ["NDVI", "NDBI"],
    },
    {
      id: "sentinel5p",
      name: "Sentinel-5P",
      variables: ["NO₂", "SO₂", "CO"],
    },
  ],
  mapCenter: [28.4089, 77.3178],
  mapZoom: 11,
};
