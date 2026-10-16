import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import { BrandMark } from "./components/Brand";
import { Icon } from "./components/Icon";
import HowItWorks from "./components/HowItWorks";
import DayComparison from "./components/DayComparison";
import ConditionsGrid from "./components/ConditionsGrid";
import ProductTour from "./components/ProductTour";
import PilotForm from "./components/PilotForm";
import StatsBanner from "./components/StatsBanner";

const teamFeatures = [
  {
    icon: "upload" as const,
    title: "Reports in one place",
    description: "Add a lab report from the clinic desk and keep it with the patient's timeline.",
  },
  {
    icon: "calendar" as const,
    title: "Follow-ups to act on",
    description: "See overdue, upcoming and active follow-ups in one clear list.",
  },
  {
    icon: "message" as const,
    title: "Reminders that feel personal",
    description: "Prepare patient reminders in English, मराठी or हिंदी.",
  },
  {
    icon: "users" as const,
    title: "A shared view of care",
    description: "Help the front desk and doctor stay in sync after every visit.",
  },
];

const trustItems = [
  {
    icon: "lock" as const,
    title: "Privacy comes first",
    text: "Built around careful handling of patient information.",
  },
  {
    icon: "check" as const,
    title: "Doctor decides",
    text: "AI drafts stay drafts until the doctor reviews and approves them.",
  },
  {
    icon: "file" as const,
    title: "Sources stay visible",
    text: "Briefs and changes point back to the records they came from.",
  },
  {
    icon: "heart" as const,
    title: "Made for real clinics",
    text: "Works alongside the way your clinic already cares for patients.",
  },
];

function FeatureFilm() {
  return (
    <section className="film-section" id="product-demo">
      <div className="container film-layout">
        <div className="film-copy">
          <p className="eyebrow eyebrow--light">A CLEARER VIEW OF EVERY VISIT</p>
          <h2>
            Lost reports, long histories and forgotten follow-ups.
            <span> Remembered.</span>
          </h2>
          <p>
            medaurion brings the important details together, so you can focus
            on the patient in front of you.
          </p>
          <a className="button button--light" href="#pilot">
            See medaurion in your clinic <Icon name="arrow" size={17} />
          </a>
          <p className="film-note">A product preview using fictional demo data.</p>
        </div>
        <ProductTour />
      </div>
    </section>
  );
}

function PrinciplesBanner() {
  return (
    <section className="principles-strip" aria-label="How medaurion helps">
      <div className="container principles-grid">
        <div>
          <span className="principle-number">01</span>
          <strong>Understand</strong>
          <span>the whole patient</span>
        </div>
        <div>
          <span className="principle-number">02</span>
          <strong>Compare</strong>
          <span>what changed</span>
        </div>
        <div>
          <span className="principle-number">03</span>
          <strong>Track</strong>
          <span>what happens next</span>
        </div>
        <div>
          <span className="principle-number">04</span>
          <strong>Act</strong>
          <span>with confidence</span>
        </div>
      </div>
    </section>
  );
}

function ClinicFeatures() {
  return (
    <section className="section clinic-section" id="for-clinics">
      <div className="container clinic-layout">
        <div className="clinic-intro">
          <p className="eyebrow">FOR YOUR CLINIC TEAM</p>
          <h2>Your front desk keeps every patient on track.</h2>
          <p className="section-lead">
            Reports in, reminders prepared, and nobody lost after the visit.
            Give your team a calmer way to keep care moving.
          </p>
          <a className="text-link" href="#pilot">
            Bring your team along <Icon name="arrow" size={17} />
          </a>
          <div className="clinic-illustration" aria-hidden="true">
            <div className="clinic-orbit clinic-orbit--one" />
            <div className="clinic-orbit clinic-orbit--two" />
            <div className="clinic-illustration__main">
              <BrandMark size={48} />
              <span>Care, connected.</span>
            </div>
            <span className="clinic-float clinic-float--one">
              <Icon name="upload" size={18} />
            </span>
            <span className="clinic-float clinic-float--two">
              <Icon name="calendar" size={18} />
            </span>
            <span className="clinic-float clinic-float--three">
              <Icon name="check" size={18} />
            </span>
          </div>
        </div>
        <div className="team-feature-list">
          {teamFeatures.map((feature, index) => (
            <article className="team-feature" key={feature.title}>
              <span className={`team-feature__icon team-feature__icon--${index + 1}`}>
                <Icon name={feature.icon} size={22} />
              </span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <Icon className="team-feature__arrow" name="arrow" size={17} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section trust-section" id="trust">
      <div className="container">
        <div className="trust-heading">
          <span className="trust-emblem">
            <Icon name="shield" size={30} />
          </span>
          <div>
            <p className="eyebrow">BUILT AROUND TRUST</p>
            <h2>AI assists. The doctor decides.</h2>
            <p>
              Nothing AI writes enters a patient record until a doctor approves
              it.
            </p>
          </div>
        </div>
        <div className="trust-grid">
          {trustItems.map((item) => (
            <article className="trust-item" key={item.title}>
              <span className="trust-item__icon">
                <Icon name={item.icon} size={21} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="trust-footnote">
          Product preview only. Security, data-processing and compliance
          arrangements must be confirmed before any real patient data is used.
        </p>
      </div>
    </section>
  );
}

function PromoCards() {
  return (
    <section className="section promo-section">
      <div className="container">
        <div className="promo-grid">
          <a className="promo-card promo-card--follow" href="#how-it-works">
            <span className="promo-card__icon">
              <Icon name="calendar" size={24} />
            </span>
            <p className="eyebrow">FOLLOW-UP INTELLIGENCE</p>
            <h2>Follow-ups that never slip.</h2>
            <p>See who is due, who is overdue and what needs a staff call.</p>
            <span className="card-link">
              See how it works <Icon name="arrow" size={16} />
            </span>
            <span className="promo-art promo-art--calendar" aria-hidden="true">
              <Icon name="calendar" size={108} />
            </span>
          </a>
          <a className="promo-card promo-card--brief" href="#patient-brief">
            <span className="promo-card__icon">
              <Icon name="brief" size={24} />
            </span>
            <p className="eyebrow">PATIENT BRIEF</p>
            <h2>Know your patient before they sit down.</h2>
            <p>Bring the latest visits, results and pending actions together.</p>
            <span className="card-link">
              See a brief <Icon name="arrow" size={16} />
            </span>
            <span className="promo-art promo-art--brief" aria-hidden="true">
              <Icon name="file" size={104} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function NorthStar() {
  return (
    <section className="north-star" id="about">
      <div className="north-star__glow" aria-hidden="true" />
      <div className="container north-star__inner">
        <span className="north-star__mark">
          <BrandMark size={46} />
        </span>
        <p className="eyebrow eyebrow--light">OUR NORTH STAR</p>
        <h2>
          If this patient walks into my clinic right now, can medaurion tell me
          everything important before I start the consultation?
        </h2>
        <p className="north-star__sub">
          Understand. <span>Compare.</span> Track. Act.
        </p>
      </div>
    </section>
  );
}

function PilotSection() {
  return (
    <section className="pilot-section" id="pilot">
      <div className="container pilot-layout">
        <div>
          <p className="eyebrow">DOCTOR PILOT PROGRAM</p>
          <h2>A calmer clinic day starts with one conversation.</h2>
          <p>
            See how medaurion could fit alongside your existing clinic
            workflow. This preview does not collect or send your information.
          </p>
        </div>
        <PilotForm />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <FeatureCards />
        <FeatureFilm />
        <StatsBanner />
        <PrinciplesBanner />
        <DayComparison />
        <ConditionsGrid />
        <ClinicFeatures />
        <TrustSection />
        <PromoCards />
        <NorthStar />
        <PilotSection />
      </main>
      <Footer />
    </>
  );
}
