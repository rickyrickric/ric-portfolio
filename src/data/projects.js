export const projects = [
  {
    code: "TG-01",
    line: "Fare Line",
    name: "BiyaheTagum RMS",
    status: "In development",
    image: "/projects/biyahetagum.svg",
    link: "https://github.com/",
    problem:
      "Transport cooperatives at TOTT Terminal in Tagum City track fares, dispatch, and fleet activity by hand — revenue leaks through the cracks and nobody has a clear view of the day's operations.",
    solution:
      "A revenue management system built for the terminal: an admin dashboard with a collapsible sidebar, live KPI cards, fleet status, and a dispatch queue that shows what's moving and what's next.",
    impact:
      "Sized bottom-up rather than aspirationally — TAM, SAM, and SOM scoped to Tagum City using LTFRB Region XI data and real cooperative fleet counts, under a SaaS-plus-transaction-fee model.",
    tags: ["React", "Node.js", "Firebase", "Dashboards"],
  },
  {
    code: "TG-02",
    line: "Mobile Management System Line",
    name: "Herd-V Management System",
    status: "In development",
    image: "/projects/fitcamp.svg",
    link: "https://github.com/",
    problem:
      "Local farms using Legacy system, managing cattle Health and Milk yield based on assumption with no proper data.",
    solution:
      "A full Mobile application using Machine Learning Algorithm called Heirarchical Clustering.",
    impact:
      "Delivered as a complete mobile project package for CST9/L, Machine Learning — architecture, and documentation.",
    tags: ["Machine Learning", "Flutter", "Dart", "Javascript", "Management System"],
  },
  {
    code: "TG-03",
    line: "Forecast Line",
    name: "Weathering With You",
    status: "Actively refined",
    image: "/projects/weathering.png",
    link: "https://github.com/rickyrickric/weatheringwithyouwebapp",
    problem:
      "General-purpose weather apps miss the hyperlocal detail that actually matters for a specific city — Tagum's forecasts get flattened into a wider regional average.",
    solution:
      "A weather app for Tagum City built on React, Express, and Supabase, blending OpenWeather, Open-Meteo, and PAGASA data through a custom ML regression service.",
    impact:
      "Refined tab by tab — the Forecast and Home views went through repeated UI/UX audits, each one tracked by KPI score, issue severity, and fix delta against the last.",
    tags: ["React", "Supabase", "Machine Learning", "Python", "Next.js"],
  },
];
