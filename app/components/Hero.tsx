"use client";

import { useState } from "react";
import { Icon, type IconName } from "./Icon";
import { BrandMark } from "./Brand";

const briefTabs = ["All", "Labs", "Medicines", "Visits", "Concerns"];

const previewItems: Record<string, { label: string; value: string; status: string }[]> = {
  All: [
    { label: "HbA1c", value: "7.9 → 7.2 %", status: "Improving" },
    { label: "Blood pressure", value: "132 / 84", status: "Review" },
  ],
  Labs: [
    { label: "HbA1c", value: "7.9 → 7.2 %", status: "Improving" },
    { label: "Creatinine", value: "0.9 → 0.9 mg/dL", status: "Stable" },
  ],
  Medicines: [
    { label: "Current medicines", value: "3 active", status: "Reviewed" },
    { label: "Last change", value: "At last visit", status: "Visit note" },
  ],
  Visits: [
    { label: "Last visit", value: "12 Oct · Review", status: "Visit note" },
    { label: "Next follow-up", value: "Due today", status: "Upcoming" },
  ],
  Concerns: [
    { label: "Patient-reported", value: "No new concern", status: "Latest update" },
    { label: "Since last visit", value: "1 new report", status: "Review" },
  ],
};

function MiniAppRail() {
  const railItems: { icon: IconName; label: string }[] = [
    { icon: "brief", label: "Patient Brief" },
    { icon: "trend", label: "What Changed" },
    { icon: "calendar", label: "Follow-Ups" },
    { icon: "upload", label: "Upload Report" },
    { icon: "prescription", label: "Prescription" },
    { icon: "activity", label: "Practice" },
  ];
  return (
    <aside className="app-rail" aria-label="Demo app navigation">
      <span className="app-rail__brand"><BrandMark size={28} /></span>
      {railItems.map((item, index) => (
        <span
          className={`app-rail__item${index === 0 ? " app-rail__item--active" : ""}`}
          key={item.label}
          title={item.label}
        >
          <Icon name={item.icon} size={18} />
        </span>
      ))}
      <span className="app-rail__spacer" />
      <span className="app-rail__avatar">D</span>
    </aside>
  );
}

function FollowUpCard() {
  return (
    <div className="followup-card">
      <div className="mini-card-heading">
        <span>Follow-Ups</span>
        <span className="mini-card-heading__link">View all <Icon name="arrow" size={12} /></span>
      </div>
      <div className="mini-tabs">
        <span className="mini-tabs__active">All</span><span>Overdue</span>
      </div>
      <div className="followup-alert">
        <span className="followup-alert__dot" />
        <span><b>Arjun Mehta</b><small>Overdue · 9 days</small></span>
      </div>
      <div className="followup-alert">
        <span className="followup-alert__dot followup-alert__dot--soft" />
        <span><b>Kavita Jadhav</b><small>Overdue · 4 days</small></span>
      </div>
      <div className="followup-next">
        <span>THIS WEEK</span>
        <b>Priya Nair <small>Thu</small></b>
      </div>
    </div>
  );
}

function PatientBrief({
  selectedTab,
  onSelectTab,
}: {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}) {
  return (
    <div className="brief-window" id="patient-brief">
      <header className="brief-window__header">
        <span className="brief-window__mark"><BrandMark size={39} /></span>
        <div>
          <h2>Patient Brief</h2>
          <p>Prepared from source records · Doctor review required</p>
        </div>
        <span className="brief-window__status"><i /> Ready</span>
      </header>
      <div className="brief-window__tabs" role="tablist" aria-label="Patient information">
        {briefTabs.map((tab) => (
          <button
            aria-selected={selectedTab === tab}
            className={selectedTab === tab ? "is-active" : ""}
            key={tab}
            onClick={() => onSelectTab(tab)}
            role="tab"
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="brief-next">
        <div>
          <span className="micro-label">TODAY’S NEXT PATIENT</span>
          <h3>10:30 <span>· Follow-up</span></h3>
        </div>
        <span className="brief-time"><Icon name="calendar" size={14} /> Due today</span>
      </div>
      <div className="brief-filter-row">
        <span className="filter-chip filter-chip--active"><Icon name="brief" size={14} /> All <b>7</b></span>
        <span className="filter-chip"><Icon name="file" size={14} /> New reports <b>3</b></span>
        <span className="filter-chip"><Icon name="trend" size={14} /> Changed <b>2</b></span>
        <span className="filter-chip"><Icon name="calendar" size={14} /> Follow-up due <b>1</b></span>
      </div>
      <div className="patient-card">
        <div className="patient-card__top">
          <span className="patient-avatar">RS</span>
          <div className="patient-card__identity">
            <strong>Rajesh Sharma <Icon name="check" size={13} /></strong>
            <span>52 M · Type 2 diabetes · Hypertension</span>
          </div>
          <span className="patient-tag">Follow-up</span>
        </div>
        <div className="lab-result-list">
          {previewItems[selectedTab].map((item) => (
            <div className="lab-result" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <span className="result-status">{item.status}</span>
            </div>
          ))}
        </div>
        <div className="patient-card__foot">
          <span><Icon name="clock" size={13} /> Last visit · 12 Oct</span>
          <span>View patient <Icon name="arrow" size={13} /></span>
        </div>
      </div>
      <div className="ai-draft-card">
        <div className="ai-draft-card__label">
          <span>AI draft</span>
          <span>Doctor review required</span>
        </div>
        <p>HbA1c is improving since the last result. Review alongside the patient&apos;s visit notes.</p>
        <span className="ai-sources">Sources: 2 results · 3 visits</span>
      </div>
      <div className="brief-window__foot">
        <Icon name="shield" size={15} /> Fictional demo data · Source records remain distinct from AI drafts
      </div>
    </div>
  );
}

export default function Hero() {
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="hero-badge">
            <span className="hero-badge__mark"><BrandMark size={24} /></span>
            Patient Intelligence Platform
          </span>
          <h1>
            Understand every patient in <span>60 seconds</span>
          </h1>
          <p className="hero-subtitle">
            Patient brief, what changed, follow-ups and prescriptions.
            Everything you need before the consultation, in one platform.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#pilot">
              Book a demo <Icon name="arrow" size={18} />
            </a>
            <a className="button button--secondary" href="#how-it-works">
              See how it works <Icon name="play" size={17} />
            </a>
          </div>
          <div className="hero-proof">
            <div className="hero-proof__icons">
              <span><Icon name="shield" size={17} /></span>
              <span><Icon name="brief" size={17} /></span>
              <span><Icon name="calendar" size={17} /></span>
              <span><Icon name="note" size={17} /></span>
            </div>
            <p>Doctor-led · Source-linked · Built for clinic workflows</p>
          </div>
          <a className="pilot-badge" href="#pilot">
            <span className="pilot-badge__mark"><BrandMark size={32} /></span>
            <span>
              <small>DOCTOR PILOT PROGRAM</small>
              <strong>Let’s make clinic days calmer</strong>
            </span>
            <Icon name="arrow" size={16} />
          </a>
        </div>
        <div className="hero-visual">
          <div className="hero-visual__halo" aria-hidden="true" />
          <div className="hero-dashboard">
            <MiniAppRail />
            <div className="hero-dashboard__content">
              <PatientBrief selectedTab={selectedTab} onSelectTab={setSelectedTab} />
            </div>
          </div>
          <div className="hero-followups">
            <FollowUpCard />
          </div>
          <div className="hero-float hero-float--secure">
            <span><Icon name="shield" size={18} /></span>
            <span><strong>Doctor reviewed</strong><small>AI drafts stay drafts</small></span>
          </div>
          <div className="hero-float hero-float--change">
            <span className="change-arrow">↗</span>
            <span><strong>HbA1c improved</strong><small>7.9 → 7.2 %</small></span>
          </div>
        </div>
      </div>
      <a className="hero-scroll" href="#how-it-works" aria-label="Scroll to how it works">
        <span />
      </a>
    </section>
  );
}
