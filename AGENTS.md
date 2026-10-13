# AGENTS.md — medaurion AIOS

This file is for AI coding agents working in this repository (Claude Code, Codex, Cursor, Copilot and others).
Read all of it before writing code. If something here conflicts with a user request, ask the user before proceeding.

---

## 1. What we are building

**medaurion AIOS** is a patient-intelligence platform for doctors and clinics in India.
It is **not** another EMR, clinic CRM, appointment app or chatbot. It is the intelligence layer that sits beside the clinic's existing software.

**North star:** *"If this patient walks into my clinic right now, can medaurion tell me everything important before I start the consultation?"*

**USP (one line):** Know what changed before the patient sits down — in 60 seconds, without changing your current software.

**Five principles:** Understand → Compare → Track → Act → Learn.

**Who uses it**

| Role | What they do in the product |
|---|---|
| Doctor | Reads briefs, sees what changed, writes/approves notes, prescriptions, asks Copilot |
| Front desk | Appointments, uploads reports, follow-ups, reminders, patient portal |
| Clinic admin | Practice insights, staff access, audit log, settings, pilot sign-ups |
| Patient | Receives reminders (EN/मराठी/हिंदी), opens own Health Card with PIN, shares reports |

**Brand:** parent brand `medaurion` (always lowercase), product `medaurion AIOS`.

---

## 2. Source of truth (reference files)

These files live in `/docs/reference/` (add them there if missing). They define behaviour and design. Match them.

| File | Use it for |
|---|---|
| `aios_health_prototype_v1_1.html` | Functional logic: data model, compare rules, follow-up rules, AI prompts, audit log, all doctor screens |
| `medaurion_aios_prototype_v64.html` | Current visual design: website, header, hero, app skin, footer, Health Card, login, roles, settings |
| `medaurion_tour_video_v2_HD.mp4` | Marketing tour video embedded on the home page |
| `medaurion-brand-decision.md` | Brand + product decisions log (logo, colours, font, removed sections, pending items) |

The prototypes are single-file HTML demos with fictional patients. **Rebuild them properly; do not copy-paste the prototype JavaScript into production.**

---

## 3. Scope — build in this order

### MVP (release 1) — only these four flagship features, done well
1. **Patient Brief** — 60-second pre-consultation brief from source records.
2. **What Changed engine** — compares latest results with previous / first result.
3. **Follow-Up Intelligence** — overdue / upcoming / active lists, reminders, drop-off flag.
4. **Zero-Click Documentation** — rough notes → AI draft → doctor edits → doctor approves → saved.

Plus the minimum around them: login + roles, clinic setup, patient registration, Patient 360° profile, report upload, timeline, consent, audit log, notifications.

### Release 2
Advanced OCR, voice documentation, Care Journey, Patient Memory, Doctor Copilot (full), Clinic Brain, Practice ROI, Patient Health Card (QR), patient portal, prescriptions on letterhead.

### Release 3
Hospital / multi-location, ABDM integrations, enterprise APIs, SSO.

**Do not build Release 2/3 features unless the user asks.** Do not add pricing pages, FAQ, ROI calculator, dark mode or a day/night toggle — these were deliberately removed.

---

## 4. Non-negotiable product rules (safety)

1. **AI assists. The doctor decides.** Nothing AI writes enters a patient record until a doctor approves it.
2. **AI never diagnoses, prescribes or recommends treatment on its own.** It summarises and drafts only.
3. **Source data and AI text must look different.** AI content is always orange-tinted (`--ai`), labelled *"AI-generated · doctor review required"*, and lists its sources.
4. **Every AI block names the records it used** ("Sources: 3 visits, 3 results…").
5. **Everything is logged** — every record open, AI run, edit, approval, reminder, export, login → `audit_log`.
6. **Drop-off flags are workflow signals, not health predictions.** Wording must say so.
7. **Time-saved / ROI numbers are labelled as estimates**, never presented as measured.
8. **No fake social proof.** No invented user counts, awards, testimonials or reviews.
9. **Badges must be true.** Do not show "Data in India" unless all patient data is actually stored and processed in India. Do not claim certifications we don't have.
10. **Never store or ask for Aadhaar.** Identity linking uses **ABHA** only.
11. **Demo and seed data must be fictional.** Never put real patient data in code, seeds, tests, screenshots or logs.

---

## 5. Domain model (start here)

Derived from the v1.1 prototype. Use these names.

```
Clinic(id, name, city, letterhead_logo, specialty_pack, settings)
User(id, clinic_id, name, role: doctor|frontdesk|admin, mobile, mfa_enabled, active)
Patient(id, clinic_id, name, age/dob, sex, mobile, preferred_language: en|mr|hi,
        abha_id?, tags[] (conditions), care_stage 0-7, follow_up_due_date,
        reminders_sent, responded_to_last_reminder)
Visit(id, patient_id, date, reason, note, bp?, rx_change?)
LabReport(id, patient_id, date, source ("Lab report", "Clinic BP", "Home PEFR log"…), file_id?, values{param: number})
Document(id, patient_id, date, title, file_id)
Concern(id, patient_id, date, text)            -- patient-reported
Medication(id, patient_id, name_dose_frequency, active)
ClinicalNote(id, patient_id, author_id, draft_text, final_text, status: draft|approved, approved_at)
AIRun(id, clinic_id, patient_id?, kind: brief|change|doc|copilot|ocr, input_hash, sources, output, model, created_by)
Reminder(id, patient_id, channel: whatsapp|sms, language, template_id, sent_at, status, response)
Consent(id, patient_id, purpose, granted_at, revoked_at, method)
AuditLog(id, clinic_id, time, actor, action, patient_id?, category)
HealthCard(id, patient_id, token, pin_hash, status, failed_attempts, locked_until)   -- release 2
```

**Care journey stages (index 0-7):** First visit, Consultation, Investigation, Treatment, Follow-up, Monitoring, Review, Next care step.

**Lab parameters + reference ranges** (from prototype `PARAMS`; keep in one config file, clinic-editable later):

| Key | Label | Unit | Ref |
|---|---|---|---|
| HbA1c | HbA1c | % | <5.7 |
| FBS | Fasting glucose | mg/dL | 70–100 |
| LDL | LDL cholesterol | mg/dL | <100 |
| TG | Triglycerides | mg/dL | <150 |
| Creatinine | Creatinine | mg/dL | 0.6–1.2 |
| eGFR | eGFR | mL/min/1.73m² | >60 |
| Potassium | Potassium | mmol/L | 3.5–5.0 |
| TSH | TSH | mIU/L | 0.4–4.0 |
| Hb | Haemoglobin | g/dL | 12–15.5 |
| Ferritin | Ferritin | ng/mL | 15–150 |
| ALT | ALT (SGPT) | U/L | <40 |
| Weight | Weight | kg | — |
| PEFR | Peak flow | L/min | — |
| SBP / DBP | Systolic / Diastolic BP | mmHg | <130 / <80 |

Reference ranges vary by lab, age and sex. Always show the range used and let the clinic override it.

---

## 6. Business logic (exact rules)

**What Changed**
- Compare latest `LabReport` with the previous one (default) or the first one (toggle "vs first result").
- Only compare parameters present in both reports.
- `diff = current - base`, `pct = diff / base * 100`.
- **Stable** if `|pct| < 3%`; otherwise **Changed ↑ / ↓**.
- **Out of range:** `value >= hi` or `value < lo` → red value + "outside ref" pill.
- Always print the two sources and dates under the table.

**New since last visit** = labs, documents and concerns dated after the last visit.

**Patient Brief contents:** last visit (when + reason), status (care stage), recent events (new results, new documents, patient concerns, prescription change at last visit), what changed (changed params with numbers + out-of-range pills; stable list), pending (follow-up overdue/due today, review new results, no response to N reminders), current medicines, last plan.

**Follow-up status**
- `overdue` if due date is in the past
- `upcoming` if due within 14 days
- `active` otherwise

**Drop-off flag** = overdue AND reminders_sent ≥ 1 AND no response → "Possible drop-off · staff call suggested". It is a workflow signal only.

**Documentation stepper:** 1 Consultation input → 2 AI draft → 3 Doctor review → 4 Approved. Draft headings: Chief complaint, History, Examination, Investigations, Assessment (as stated by doctor), Plan, Follow-up. Missing items → "Not stated".

**Practice estimates (labelled as estimates):** 3 min per AI summary, 6 min per approved note, 4 min per prepared brief.

---

## 7. AI rules

- All AI calls go through **one server-side module** (e.g. `src/lib/ai/`). Never call an AI API from the browser. Never expose API keys.
- Send the **minimum record needed**, built by one function (`recordText(patient)` in the prototype). Prefer pseudonymised IDs over names where possible.
- Base system rule (keep wording, extend carefully):
  > You are AIOS, an assistant inside a doctor's clinic software. You support the doctor and never diagnose, prescribe or recommend treatment on your own. Use only the patient record given. If something is not in the record, say it is not recorded. Be concise and clinical.
- Task prompts to port from the prototype: narrative brief (≤6 bullets), change reading (3–4 bullets, ends "For doctor review."), clinical note draft (fixed headings), Copilot (answers only from the selected patient's record; drafts marked DRAFT).
- Store every run in `AIRun` + `AuditLog`. Show streaming output, a Stop button, and clear error messages (rate limited, refused, connection dropped).
- If AI is unavailable, the product must still work: source data screens never depend on AI.
- Before production: confirm the AI provider's data-processing terms, retention settings and data location meet DPDP and clinic contracts.

---

## 8. Tech stack (default decisions — change only with the user's OK)

| Area | Choice |
|---|---|
| App | Next.js (App Router) + TypeScript (strict) |
| UI | Tailwind CSS + small in-house component set matching the brand (section 9) |
| Database | PostgreSQL (Supabase or managed Postgres) in an **India region (Mumbai)** — verify region before setup |
| ORM / migrations | Drizzle ORM, SQL migrations committed in repo |
| Auth | Email/mobile login for staff + MFA; role-based access; one clinic per tenant with row-level security |
| Files | Private object storage (reports, letterheads), short-lived signed URLs only |
| AI | Anthropic Claude API, server-side only (evaluate an India-region option for data residency) |
| Messages | WhatsApp Business API (approved templates) + SMS fallback via a DLT-registered Indian provider |
| i18n | `en`, `mr` (मराठी), `hi` (हिंदी) for all patient-facing text |
| Hosting | India region for servers and data |
| Tests | Vitest (unit), Playwright (end-to-end) |
| Quality | ESLint + Prettier, CI must pass before merge |

Suggested structure:

```
src/
  app/
    (marketing)/        website: home, about, join (pilot form), privacy, terms, grievance
    (app)/              signed-in app: today, patients, patients/[id], followups, docs, copilot, practice, trust, settings
    card/[token]/       patient Health Card page (release 2)
    api/                route handlers
  components/           ui primitives + feature components
  lib/
    ai/                 the only place that talks to the AI provider
    compare/            What Changed logic (pure functions, fully unit-tested)
    followup/           status + drop-off logic (pure, unit-tested)
    audit/              audit logging helper used everywhere
    db/                 schema, queries
    i18n/
  config/params.ts      lab parameters + reference ranges
docs/reference/         prototypes, video, brand decisions
seed/                   fictional demo clinic (12 patients from prototype v1.1)
```

---

## 9. Design system (match prototype v64)

- **Light mode only.** No dark mode, no theme toggle.
- **Font:** Plus Jakarta Sans everywhere (self-host the woff2; Noto Sans Devanagari fallback for मराठी/हिंदी).
- **Colours**
  - Primary / accent: **teal `#0F6A8E`** (buttons, active nav, tabs, links)
  - Brand gradient: coral `#D9573F` → orange `#EE8A34` (headline highlight words, logo "aurion")
  - Ink `#10233F`, muted `#5A6A85`, background `#F6F8FB`, surface `#FFFFFF`, line `#E5EAF1`
  - AI content: orange `#C2410C` on `#FFF5ED`, border `#F9D2B8`
  - Good `#2F7A4E`, warning `#8A6500`, critical `#B3261E`
- **Logo:** two mirrored double-line shields (left teal, right coral→orange) + wordmark "med" teal / "aurion" coral→orange. Use the SVG from prototype v64. Never recolour, stretch or redraw it.
- Cards: 20px radius, 1px `#E5EAF1` border, soft shadow. Buttons: 11px radius, primary teal with soft teal shadow.
- App rail: white, teal active item with orange icon. Stat tiles 5 across on desktop.
- Home page order: hero (layered app mockup, sunrise glow) → pilot strip → For doctors → tour video → stats → calmer day → chronic-care tiles → Health Card strip → For your clinic team → Trust (Encrypted, Doctor approves, ABDM ready, Data in India*) → promo cards → north star → footer (navy→teal gradient).
  *only if true at launch.
- Accessibility: WCAG AA contrast, visible focus rings, keyboard navigation, `prefers-reduced-motion` respected, works at 360px width with no horizontal scroll.

---

## 10. Security, privacy & compliance (India)

- Encrypt in transit (TLS) and at rest. Secrets only in environment variables; never commit `.env`.
- Least-privilege roles; every query scoped by `clinic_id`; row-level security on.
- Staff MFA, session timeout, rate limiting on login, OTP and Health Card PIN.
- **Consent** recorded per purpose (care, reminders, AI processing) and revocable.
- **DPDP Act** readiness: consent, purpose limitation, retention policy, data-principal requests, breach process, grievance officer page.
- **Health Card (release 2):** QR holds only a secure link (no health data); 6-digit PIN; lock after 5 wrong attempts; reset via OTP on registered mobile or at clinic; reissue invalidates old card; doctor-approved info only; caregiver access only with patient OTP consent; page in EN/मराठी/हिंदी.
- **Messaging:** WhatsApp templates must be approved; SMS needs DLT registration; reminders contain no diagnosis or results.
- Open items that need humans, not code: lawyer review of legal pages, CDSCO opinion on whether any feature is a medical device, clinic data-processing agreement, ABDM onboarding.

---

## 11. How to work in this repo

- **Before coding a feature:** restate the logic in plain words and list the files you will touch. Wait for the user's OK on anything not covered by this file.
- Small, focused changes. One feature per branch / PR. Clear commit messages.
- Business logic (compare, follow-up, drop-off, permissions) lives in pure functions with unit tests. Target: every rule in section 6 has a test.
- Every new screen: loading, empty and error states; mobile layout; audit events.
- Use the fictional seed clinic for all demos and tests.
- Update `docs/reference/medaurion-brand-decision.md` (or `CHANGELOG.md`) when a product decision changes.

### Commands (keep this list current)

```bash
npm install          # install dependencies
npm run dev          # start local app at http://localhost:3000
npm run lint         # lint
npm run test         # unit tests
npm run test:e2e     # Playwright end-to-end tests
npm run db:migrate   # apply database migrations
npm run db:seed      # load fictional demo clinic
npm run build        # production build
```

### Definition of done
- Matches the rules in sections 4, 6 and 9
- Lint, unit and e2e tests pass
- Works on mobile (360px) and desktop
- No secrets, no real patient data, no new unverified claims on the website
- Audit events written for every patient-data action

---

## 12. Launch checklist (high level)

1. Repo + CI + India-region database and storage
2. Auth, roles, clinic setup, audit log
3. Patient registration + report upload + timeline
4. What Changed engine + Patient Brief
5. Follow-ups + WhatsApp/SMS reminders (templates approved)
6. Documentation with AI draft + approval
7. Marketing website from prototype v64 + pilot sign-up form + legal pages (reviewed)
8. Security review, backups, monitoring, incident process
9. Domain `medaurion.in`, `hello@` email, social links
10. Pilot: 5–10 doctors · 1–3 clinics · 8–12 weeks, measure time saved together
