# CLAUDE.md — medaurion AIOS

@AGENTS.md

The full project guide is in `AGENTS.md` (imported above). Everything there applies. This file adds instructions specific to Claude Code.

---

## Working with the founder (VINAY)

- vinay is the product owner. **He has no programming background.** Explain in plain words, no jargon without a one-line meaning.
- He prefers replies in **Marathi (Devanagari script)**, keeping technical words in English, e.g. "हा `npm run dev` command चालवा, मग browser मध्ये `localhost:3000` उघडा."
- Whenever he needs to run something, give **numbered step-by-step instructions from the very start**: which app to open, where to click, what to type, what he should see when it works, what to do if it fails.
- Each question you ask gets a short code (Q1, Q2…) and each option a code (A1, A2…) so he can reply with codes. Keep a ✅ answered / ⏳ pending list when asking several.
- **Confirm the logic before writing code** for any new feature or behaviour change: describe what it will do, then build after his OK. Small fixes, refactors, tests and items already fully specified in `AGENTS.md` do not need a separate OK.
- Keep replies short and direct. End with one or two lines: what changed and what he should check.

## Claude Code workflow

1. **Explore → plan → code → verify.** Read the relevant files and `docs/reference/` first. For anything bigger than a small fix, use plan mode and share the plan.
2. Keep changes small and on a feature branch. Commit only when asked or when a task is complete and tests pass.
3. After changing code, run `npm run lint` and `npm run test` (and `npm run test:e2e` for UI flows). Fix failures before reporting done.
4. For UI work, compare against `docs/reference/medaurion_aios_prototype_v64.html` (design) and `aios_health_prototype_v1_1.html` (behaviour). Take screenshots with Playwright when useful.
5. Never commit `.env`, keys, real patient data or large binaries other than the reference files.
6. If a request conflicts with the safety rules in AGENTS.md section 4 (AI must not diagnose, doctor approves everything, no fake claims, no Aadhaar), stop and explain in Marathi why, then offer a safe alternative.

## Versioning

- Use git for code history; do not create `file_v2.ts` copies inside `src/`.
- Downloadable deliverables for Durgesh (exported HTML, videos, PDFs, zip packages) use versioned names: `medaurion_website_v65.zip`, `medaurion_tour_video_v3.mp4`.
- Tag releases `v0.1.0`, `v0.2.0`… and update `CHANGELOG.md`.

## Useful context

- Brand and decision history: `docs/reference/medaurion-brand-decision.md`
- Current website/app design: prototype v64 (light only, Plus Jakarta Sans, teal `#0F6A8E`, coral→orange gradient)
- Demo data: fictional clinic "Dr. Demo, General Medicine" with 12 patients (Rajesh Sharma, Sunita Patil, Meera Kulkarni…) from prototype v1.1 — use only in `seed/` and tests.
