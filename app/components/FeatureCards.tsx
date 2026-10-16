import { Icon, type IconName } from "./Icon";

const features: {
  icon: IconName;
  label: string;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    icon: "brief",
    label: "BEFORE THE CONSULTATION",
    title: "Patient Brief",
    description: "Know your patient in 60 seconds, before they sit down.",
    color: "blue",
  },
  {
    icon: "trend",
    label: "SEE WHAT CHANGED",
    title: "What Changed",
    description: "Every new report compared with the last one.",
    color: "orange",
  },
  {
    icon: "note",
    label: "DOCUMENT WITH EASE",
    title: "Clinical notes",
    description: "Rough notes become a clear draft. You review and approve.",
    color: "coral",
  },
  {
    icon: "prescription",
    label: "FINISH THE VISIT",
    title: "Prescriptions",
    description: "Keep the visit plan and current medicines easy to find.",
    color: "green",
  },
];

export default function FeatureCards() {
  return (
    <section className="section doctor-section" id="for-doctors">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">FOR DOCTORS</p>
          <h2>More time with the person. Less time finding the record.</h2>
          <p className="section-lead">
            Everything you need before, during and after a consultation—without
            replacing the clinic software you already use.
          </p>
        </div>
        <div className="doctor-grid">
          {features.map((feature, index) => (
            <a
              className={`doctor-card doctor-card--${feature.color}`}
              href={index === 0 ? "#patient-brief" : "#how-it-works"}
              key={feature.title}
            >
              <span className="feature-icon">
                <Icon name={feature.icon} size={25} />
              </span>
              <span className="feature-label">{feature.label}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="card-link">
                Explore feature <Icon name="arrow" size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
