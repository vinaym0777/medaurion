const points = [
  {
    value: "60 sec",
    label: "Patient brief, ready before the consultation",
    note: "Designed for a quick pre-consultation view",
  },
  {
    value: "3 languages",
    label: "English · मराठी · हिंदी",
    note: "For patient-facing reminders",
  },
  {
    value: "Doctor-led",
    label: "Every AI draft needs doctor approval",
    note: "A product rule, not an adoption statistic",
  },
];

export default function StatsBanner() {
  return (
    <section className="stats-section" aria-label="medaurion at a glance">
      <div className="container stats-grid">
        {points.map((point) => (
          <article className="stat-card" key={point.value}>
            <strong>{point.value}</strong>
            <span>{point.label}</span>
            <small>{point.note}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
