"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type ClinicDay = {
  time: string;
  moment: string;
  without: string;
  with: string;
};

const clinicDay: ClinicDay[] = [
  {
    time: "8:55 am",
    moment: "Before the first patient",
    without: "Open old files and WhatsApp chats to remember who is coming today.",
    with: "Today's list is ready. Every patient has a concise brief from source records.",
  },
  {
    time: "10:30 am",
    moment: "The patient sits down",
    without: "Flip through old prescriptions to find the last HbA1c result.",
    with: "See what changed since the last visit, side by side and ready to review.",
  },
  {
    time: "1:00 pm",
    moment: "Reports arrive",
    without: "Photos pile up on a phone. Someone types them in later, maybe.",
    with: "Reports can be added to the patient timeline for the clinic team to review.",
  },
  {
    time: "6:00 pm",
    moment: "End of the day",
    without: "Notes are half written. Follow-ups depend on memory.",
    with: "Prepare notes for doctor approval and keep upcoming follow-ups visible.",
  },
];

export default function DayComparison() {
  const [mode, setMode] = useState<"without" | "with">("with");
  const withMedaurion = mode === "with";

  return (
    <section className="section day-section" id="clinic-day">
      <div className="container">
        <div className="day-heading">
          <div>
            <p className="eyebrow">A DAY AT THE CLINIC</p>
            <h2>Same clinic. A calmer day.</h2>
            <p>Switch to see how a normal OPD day can feel with a clearer view.</p>
          </div>
          <div aria-label="Compare clinic workflow" className="day-toggle" role="group">
            <button
              aria-pressed={!withMedaurion}
              className={!withMedaurion ? "is-active" : ""}
              onClick={() => setMode("without")}
              type="button"
            >
              Without medaurion
            </button>
            <button
              aria-pressed={withMedaurion}
              className={withMedaurion ? "is-active" : ""}
              onClick={() => setMode("with")}
              type="button"
            >
              With medaurion
            </button>
          </div>
        </div>
        <div className={`day-timeline${withMedaurion ? " day-timeline--with" : ""}`}>
          {clinicDay.map((item) => (
            <article className="day-event" key={item.time}>
              <div className="day-event__time">
                <span className="day-event__dot" />
                <strong>{item.time}</strong>
              </div>
              <div className="day-event__card">
                <p className="day-event__moment">{item.moment}</p>
                <p>{withMedaurion ? item.with : item.without}</p>
                <span className="day-event__status">
                  <Icon name={withMedaurion ? "check" : "clock"} size={15} />
                  {withMedaurion ? "A clearer next step" : "A familiar daily challenge"}
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="day-disclaimer">
          Illustrative clinic workflow. Actual time saved will vary by practice.
        </p>
      </div>
    </section>
  );
}
