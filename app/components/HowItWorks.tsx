import { Icon } from "./Icon";

const steps = [
  {
    number: "STEP 1",
    title: "Upload",
    description: "Patients or staff send a report photo or PDF. Start with the records you already have.",
    icon: "upload" as const,
  },
  {
    number: "STEP 2",
    title: "Compare",
    description: "New results sit beside previous ones. Changes are surfaced for the doctor to review.",
    icon: "trend" as const,
  },
  {
    number: "STEP 3",
    title: "Act",
    description: "See a concise patient brief, prepare documentation and keep follow-ups visible.",
    icon: "check" as const,
  },
];

export default function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <div className="how-intro">
          <span className="how-intro__mark"><Icon name="sparkle" size={22} /></span>
          <div>
            <p className="eyebrow">A SIMPLE WORKFLOW</p>
            <h2>Three steps. No new habits.</h2>
            <p>Keep your current software. medaurion works alongside it.</p>
          </div>
        </div>
        <div className="how-grid">
          {steps.map((step, index) => (
            <article className="how-step" key={step.title}>
              <div className="how-step__icon">
                <Icon name={step.icon} size={28} />
                <span>{index + 1}</span>
              </div>
              <p className="how-step__number">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 ? (
                <span className="how-step__connector" aria-hidden="true">
                  <Icon name="arrow" size={18} />
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
