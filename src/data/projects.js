export const projects = [
  {
    code: "TG-01",
    line: "Fare Line",
    name: "BiyaheTagum RMS",
    status: "In development",
    problem:
      "Transport cooperatives at TOTT Terminal in Tagum City track fares, dispatch, and fleet activity by hand — revenue leaks through the cracks and nobody has a clear view of the day's operations.",
    solution:
      "A revenue management system built for the terminal: an admin dashboard with a collapsible sidebar, live KPI cards, fleet status, and a dispatch queue that shows what's moving and what's next.",
    impact:
      "Sized bottom-up rather than aspirationally — TAM, SAM, and SOM scoped to Tagum City using LTFRB Region XI data and real cooperative fleet counts, under a SaaS-plus-transaction-fee model.",
    tags: ["React", "Node.js", "MySQL", "Dashboards"],
  },
  {
    code: "TG-02",
    line: "Circuit Line",
    name: "24 Fit Camp",
    status: "Coursework — shipped",
    problem:
      "Local gyms run memberships, class schedules, staff shifts, and billing across spreadsheets and paper logs, with no single system tying it together.",
    solution:
      "A full gym management ecosystem designed and documented for a Software Engineering course — covering members, classes, staff, and billing as one connected system.",
    impact:
      "Delivered as a complete design package for CS 17/L, Software Engineering 2 — architecture, documentation, and a structured table of contents spanning every major section and appendix.",
    tags: ["Software Engineering", "System Design", "Documentation"],
  },
  {
    code: "TG-03",
    line: "Forecast Line",
    name: "Weathering With You",
    status: "Actively refined",
    problem:
      "General-purpose weather apps miss the hyperlocal detail that actually matters for a specific city — Tagum's forecasts get flattened into a wider regional average.",
    solution:
      "A weather app for Tagum City built on React, Express, and Supabase, blending OpenWeather, Open-Meteo, and PAGASA data through a custom ML regression service.",
    impact:
      "Refined tab by tab — the Forecast and Home views went through repeated UI/UX audits, each one tracked by KPI score, issue severity, and fix delta against the last.",
    tags: ["React", "Supabase", "Machine Learning"],
  },
];
