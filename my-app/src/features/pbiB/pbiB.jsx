import "./pbiB.css";

function PbiB() {
  // Fake static data
  const adherenceData = [
    { label: "Completed", value: 12, colorClass: "segment-completed" },
    { label: "Partial", value: 5, colorClass: "segment-partial" },
    { label: "Missed", value: 3, colorClass: "segment-missed" },
  ];

  const total = adherenceData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="adherence-container">
      <header className="adherence-header">
        <h1>Workout Adherence Overview</h1>
        <p>
          This view shows how many workouts were fully completed, partially
          completed, or missed for this member.
        </p>
        <p className="adherence-note">
          Adherence is based on logged sessions:{" "}
          <strong>Completed</strong> means the workout was done as planned,{" "}
          <strong>Partial</strong> means it was only partly done, and{" "}
          <strong>Missed</strong> means the workout was not done.
        </p>
      </header>

      <section className="adherence-chart-section">
        <h2>Adherence Breakdown</h2>
        <div className="adherence-bar-track">
          {adherenceData.map((item) => {
            const percentage = total === 0 ? 0 : (item.value / total) * 100;
            return (
              <div
                key={item.label}
                className={`adherence-segment ${item.colorClass}`}
                style={{ width: `${percentage}%` }}
              >
                {percentage >= 15 && (
                  <span className="segment-label">
                    {item.label} ({item.value})
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="adherence-legend">
          {adherenceData.map((item) => {
            const percentage = total === 0 ? 0 : Math.round((item.value / total) * 100);
            return (
              <div key={item.label} className="adherence-legend-item">
                <span className={`legend-dot ${item.colorClass}`}></span>
                <span className="legend-text">
                  {item.label}: {item.value} sessions ({percentage}%)
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default PbiB;