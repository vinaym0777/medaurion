"use client";

import { useState } from "react";
import { Icon, type IconName } from "./Icon";

const conditions: {
  name: string;
  icon: IconName;
  copy: string;
}[] = [
  { name: "Diabetes", icon: "droplet", copy: "See glucose and HbA1c results together over time." },
  { name: "Blood pressure", icon: "activity", copy: "Keep clinic and home readings easy to compare." },
  { name: "Thyroid", icon: "thyroid", copy: "Bring thyroid results and follow-up dates into view." },
  { name: "Heart health", icon: "heart", copy: "Keep reports and visit notes together for review." },
  { name: "Kidney care", icon: "kidney", copy: "Review kidney-related results side by side." },
  { name: "Anaemia", icon: "activity", copy: "Track relevant results between appointments." },
  { name: "Asthma", icon: "lungs", copy: "Keep ongoing reports and visits in one timeline." },
  { name: "Fatty liver", icon: "heart", copy: "Compare results from one visit to the next." },
  { name: "Cholesterol", icon: "activity", copy: "See lipid results together with their dates and sources." },
  { name: "PCOS", icon: "heart", copy: "Keep investigations and follow-ups visible to the team." },
  { name: "Arthritis", icon: "activity", copy: "Bring visit notes and test reports into one view." },
  { name: "Weight care", icon: "activity", copy: "Keep measurements connected to the patient timeline." },
  { name: "Pregnancy care", icon: "heart", copy: "Organise ongoing reports and appointments for review." },
];

export default function ConditionsGrid() {
  const [selected, setSelected] = useState(conditions[0]);

  return (
    <section className="section conditions-section" id="chronic-care">
      <div className="container">
        <div className="conditions-heading">
          <p className="eyebrow">MADE FOR CONTINUITY OF CARE</p>
          <h2>Built for chronic care in your clinic.</h2>
          <p>
            Start with the conditions you follow up most. Select one to see how
            a clearer patient timeline can help your team.
          </p>
        </div>
        <div aria-label="Choose a care area" className="conditions-grid">
          {conditions.map((condition) => (
            <button
              aria-pressed={selected.name === condition.name}
              className={`condition-tile${selected.name === condition.name ? " is-selected" : ""}`}
              key={condition.name}
              onClick={() => setSelected(condition)}
              type="button"
            >
              <span className="condition-tile__icon">
                <Icon name={condition.icon} size={23} />
              </span>
              <span>{condition.name}</span>
            </button>
          ))}
          <div className="condition-tile condition-tile--more">
            <span className="condition-tile__icon"><Icon name="plus" size={23} /></span>
            <span>More care areas</span>
          </div>
        </div>
        <div aria-live="polite" className="condition-detail">
          <span className="condition-detail__icon"><Icon name={selected.icon} size={21} /></span>
          <p><strong>{selected.name}:</strong> {selected.copy}</p>
          <span className="condition-detail__note">For the doctor to review</span>
        </div>
      </div>
    </section>
  );
}
