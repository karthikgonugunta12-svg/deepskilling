import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <CohortDetails
        title="ReactJS"
        status="Ongoing"
        coach="John"
        trainer="David"
        startDate="01-07-2026"
        endDate="31-07-2026"
      />

      <CohortDetails
        title="Angular"
        status="Completed"
        coach="Alice"
        trainer="Bob"
        startDate="01-06-2026"
        endDate="30-06-2026"
      />
    </div>
  );
}

export default App;