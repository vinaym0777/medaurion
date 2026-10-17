"use client";

import { useState } from "react";
import { Icon } from "./Icon";

const tourSlides = [
  {
    title: "A quick patient brief",
    caption: "Bring the important details into view before the consultation.",
    metric: "60-second brief",
    color: "blue",
  },
  {
    title: "What changed since last time",
    caption: "Compare results with their earlier values and sources.",
    metric: "Source-linked results",
    color: "orange",
  },
  {
    title: "Keep follow-ups visible",
    caption: "Help the team see who is due and what needs attention.",
    metric: "Follow-up overview",
    color: "green",
  },
];

export default function ProductTour() {
  const [active, setActive] = useState(0);
  const slide = tourSlides[active];

  return (
    <div className={`tour-card tour-card--${slide.color}`}>
      <div className="tour-card__top">
        <div className="tour-browser-dots"><i /><i /><i /></div>
        <span>medaurion AIOS <span>·</span> Product preview</span>
        <span className="tour-card__live"><i /> DEMO</span>
      </div>
      <div className="tour-screen">
        <aside className="tour-screen__rail">
          <span className="tour-screen__logo"><Icon name="shield" size={19} /></span>
          <span className="is-active"><Icon name="brief" size={16} /></span>
          <span><Icon name="trend" size={16} /></span>
          <span><Icon name="calendar" size={16} /></span>
          <span><Icon name="upload" size={16} /></span>
        </aside>
        <div className="tour-screen__content">
          <div className="tour-screen__heading">
            <div><small>GOOD MORNING, DOCTOR</small><strong>{slide.title}</strong></div>
            <span><Icon name="clock" size={14} /> Today</span>
          </div>
          <div className="tour-metric">
            <div className="tour-metric__icon"><Icon name={active === 0 ? "brief" : active === 1 ? "trend" : "calendar"} size={21} /></div>
            <div><small>AT A GLANCE</small><strong>{slide.metric}</strong></div>
            <span className="tour-metric__arrow"><Icon name="arrow" size={16} /></span>
          </div>
          <div className="tour-patient">
            <span className="tour-patient__avatar">RS</span>
            <div className="tour-patient__main">
              <strong>Rajesh Sharma <i><Icon name="check" size={10} /></i></strong>
              <small>52 M · Fictional demo patient</small>
              <div className="tour-patient__labs">
                <span>HbA1c <b>7.9 → 7.2%</b></span>
                <span>BP <b>132 / 84</b></span>
              </div>
            </div>
            <span className="tour-patient__flag">Review</span>
          </div>
          <div className="tour-ai-note">
            <div><Icon name="sparkle" size={15} /><b>AI draft · doctor review required</b></div>
            <p>{slide.caption}</p>
            <small>Sources: 2 results · 3 visits</small>
          </div>
          <div className="tour-screen__footer">
            <span><Icon name="shield" size={13} /> Doctor approval required</span>
            <span>Preview data only</span>
          </div>
        </div>
      </div>
      <div className="tour-card__controls">
        <div>
          <span className="tour-card__eyebrow">EXPLORE THE PRODUCT</span>
          <h3>{slide.title}</h3>
          <p>{slide.caption}</p>
        </div>
        <div className="tour-control-buttons">
          <button
            aria-label="Previous demo screen"
            onClick={() => setActive((current) => (current + tourSlides.length - 1) % tourSlides.length)}
            type="button"
          >
            <Icon name="arrow" size={17} className="tour-arrow--previous" />
          </button>
          <span>{active + 1} <i>/</i> {tourSlides.length}</span>
          <button
            aria-label="Next demo screen"
            onClick={() => setActive((current) => (current + 1) % tourSlides.length)}
            type="button"
          >
            <Icon name="arrow" size={17} />
          </button>
        </div>
      </div>
      <div className="tour-progress" aria-hidden="true">
        {tourSlides.map((item, index) => (
          <span className={index === active ? "is-active" : ""} key={item.title} />
        ))}
      </div>
    </div>
  );
}
