# Hassaan Ahmed — Master Experience Reference

> **Purpose**: Single source of truth for all resume-relevant experience, skills, and achievements.
> Everything that goes on a resume, on LinkedIn, or into the AI resume chatbot is generated from this file.
> If a fact is not in this file, it does not go on an application.
> **Last updated**: 2026-09-15

---

## ⚠️ CANONICAL FACTS — these must match across resume, LinkedIn, and chatbot

| Field | Canonical value | Notes |
|---|---|---|
| Beam AI dates | **Dec 2022 – Apr 2026** | Not "Present". Update LinkedIn. |
| Beam AI title | **Senior Product Manager — Agentic AI** | HR-of-record title is *Sr. AI Solutions Architect*. Written CTO alignment held for "Program/Product Manager — Agentic AI"; **action: obtain the same written confirmation for "Senior Product Manager — Agentic AI"** and keep it on file. |
| AutoLeap dates | **Apr 2026 – Present** | LinkedIn currently shows Sep 2026 — wrong, fix it. Old resumes showed May 2026 — wrong, fix it. |
| AutoLeap title | **[CONFIRM — see open items]** | Resumes said "Group Product Manager"; LinkedIn says "Product". Pick one, use it everywhere. |
| Swvl | Feb 2022 – Nov 2022, Program Manager — Global Operations Tech & Experience | |
| Daraz | Oct 2020 – Feb 2022, Product Manager — Customer & Seller Experience | |
| Khaadi | Jul 2019 – Oct 2020, Management Trainee — E-commerce & Product | |
| Bynow | **DO NOT LIST** | See the private section at the bottom of this file. |

**Timeline check**: Beam ends Apr 2026, AutoLeap begins Apr 2026. Continuous, no gap, nothing to explain. Do not adjust dates.

**Chatbot rule**: the resume chatbot is grounded only on the sections above the "PRIVATE" divider. Nothing below that divider is retrievable.

---

## AutoLeap (Apr 2026 – Present)

**Title**: [CONFIRM]
**Company**: Vertical SaaS for the automotive aftermarket — ~3,000 repair shops across North America
**Location**: Remote

### Core Work
- Leads AI product across three platform surfaces — CRM, appointment booking, and third-party parts ordering
- [CONFIRM] 3 product managers and 2 designers reporting in, alongside engineering
- Conversational execution layer taken from kickoff to beta in ~4 weeks, covering 5 shop workflows in natural language: appointment booking, repair order creation and editing, parts lookup, marketing campaign creation. Live with 50 shops; those tasks completing ~10% faster than through the existing UI
- Runs the 50-shop beta directly — success criteria, go-wide gates, weekly read on drop-off points. Field feedback sets production scope rather than the original spec
- Inherited an already-shipped, underperforming AI receptionist. Rebuilt the intent set against a sample of real production calls; recognition accuracy ~70% → mid-80s, widening the range of calls handled without a human; inbound response time down ~5%

### Framing notes
- Short tenure. Keep to 3–4 lines on any resume. A long entry invites the "why are you moving already" question; a short one doesn't.
- Switch narrative, one breath: *"AutoLeap is a strong product role but it's North American vertical SaaS. This role is in the market and the domain I'm trying to build in."* Forward-looking, no criticism of anyone.

---

## Beam AI (Dec 2022 – Apr 2026)

**Title**: Senior Product Manager — Agentic AI *(HR title of record: Sr. AI Solutions Architect — CTO-aligned, get written confirmation for the SPM wording)*
**Company**: German-Pakistani AI startup building enterprise AI agents for workflow automation
**Location**: Remote from Lahore (office in Karachi)
**Reporting line**: Direct to CEO

### Scope anchor (use this when the title is doing too little work)
Product ownership across **7–8 platform modules**: agentic workflow orchestration, conversational discovery, eval framework (Tool Tuner / Agent Tuner), two-tier agent memory, integrations / MCP, B2C self-serve tier, enterprise rollout tooling, platform unit economics. Led 2 PMs plus a ~7-person cross-functional squad (solution architect, product designer, 2 front-end, 1 back-end, 1 ML engineer).

### Enterprise Delivery
- Embedded as product lead across **50+ enterprise deployments** in 3 regions (Europe, North America, GCC) and 3 domains (finance AR/AP, HR, customer service)
- Ran discovery and journey-mapping workshops, turned output into roadmap, stayed through rollout and adoption. New client team, new domain, every 3–6 months
- 100% on-time delivery across 10+ enterprise programmes; adoption ~15% above target in first 90 days
- Market-coverage claim only — "product used by enterprise clients across European, North American and GCC markets". **Never** inflate to "team in 13 countries" or "operated in 70+ countries"
- KSA / Gulf clients delivered: Americana (MENA's largest QSR conglomerate), Lulu (300+ GCC hypermarkets), Smarkk, and a KSA SME lending / BNPL platform
- Integrated agent workflows into client **SAP and NetSuite** finance systems

### LLM Evaluation Framework (four pillars) — owned end to end
- **LLM-as-judge** — model-graded scoring against task-specific rubrics; primary automated quality gate before human review
- **Golden / reference dataset comparison** — curated ideal-output sets per agent type; drift measured per release
- **Human-rubric eval** — annotator-scored accuracy, tone, helpfulness; ground-truth calibration for the LLM-as-judge layer
- **Hallucination / factuality detection** — automated fabrication checks, wired to the guardrail layer and human-in-the-loop fallback
- Shipped as customer-facing capability (**Tool Tuner, Agent Tuner**) rather than kept internal — features that ingest past tool/agent performance and improve future performance from ideal-output references or human feedback. Agent efficiency **+22%**
- Built in-house deliberately: the eval layer was the competitive moat (see build-vs-buy below)

### Conversational Discovery / Intent Routing (the agent-setup flow)
> ⚠️ WORDING: this is **user-side** (platform users who build agents) and is the **agent-setup flow**. Never call it "buyer-side" — that's Daraz language.
- Replaced a multi-step agent setup flow with a single free-text entry point routing intent three ways: answer directly (underlying GPT call), start an agent build, or ask a clarifying question
- **~85% intent-classification accuracy**; **~20% reduction in time-to-agent-completion**; **~75% first-run eval score** on agent outputs from the surface
- Setup was the single largest funnel drop-off. Post-launch: conversion through that step up, churn down → **primary driver of ~18% ARR growth** via retention
- **Attribution rule**: *primary driver via retention*, not sole cause — new-user growth ran alongside. The retention piece is the defensible part
- Prototyped the front-end himself in v0 / Lovable against the documented design system; designer vetted and refined; engineering productionized. **Never claim solo production front-end code** — the claim is "functional prototypes against a design system"

### Platform Unit Economics
- Instrumented the orchestration graph, analysed execution-level data, removed redundant / low-UX-value LLM calls → **per-execution cost −50%** with output quality preserved
- Argued for passing most of it through as a **~40% customer price cut** rather than banking margin; re-tiered pricing accordingly. Full chain: cost data → orchestration optimization → customer-pricing pass-through → re-tiering
- Worked directly with Finance on cost-per-execution analysis, margin modelling, and enterprise contract pricing
- Benchmarked Beam pricing against n8n, Make, and Lindy — tier structure, included credits, target persona, price points; surfaced to leadership and drove positioning decisions

### B2C Self-Serve Tier (0-to-1)
- Owned tier structure, packaging, positioning, and the cost-to-serve model
- ~1,000 users in month 1; paid users doubled within 3 months, ~30% ahead of target
- Integrated **Stripe** for B2C billing — subscription tier flow, payment-method capture, webhook handling for paid agent executions

### 0-to-1 AI Hiring Product
- Built and owned end to end — prototyped the full interface, then integrated agentic candidate screening and JD intake on Beam's agent stack. PM ownership from concept through deployment and GTM
- **$500K+ in combined base signed contracts within ~4 months**, ~50% paid upfront, remainder tied to deliverable milestones; upside to ~$1.2M on full completion
- Resume wording: "enterprise staffing and talent-services clients." **Client names are interview-only, never on the resume**
- If asked about current status: "I left before its next phase." Don't volunteer it

### Agent Memory & RAG
- Two-tier architecture: **Task Memory** (scoped to a single execution, intra-task state and short-context retrieval) and **Agent Memory** (persistent, RAG-powered long-document store across sessions)
- Owned retrieval architecture, chunking, context-injection decisions, and eval coverage for retrieval quality across 50+ client agent graphs

### Guardrails & Confidence Policy
- Set the policy governing what the platform generated automatically, what it surfaced for human approval, and what it never touched
- Human-in-the-loop fallback on low-confidence routes across 50+ enterprise agent graphs
- Prompt strategies, content filters, confidence thresholds, model-selection decisions by workload (reasoning-heavy vs. high-throughput vs. cost-sensitive)

### Build-vs-Buy Decisioning
- **Bought** connector breadth — Pipedream and Nango, giving ~1,800 third-party integrations and saving ~30 dev hours
- **Built** the evaluation pipeline in-house as the architectural differentiator
- Clean example of the judgment applied both directions: buy commodity breadth, build the moat

### CX Agent Work
- Designed and shipped CX-centric agents — multi-channel service routing, BPO call-quality analysis, tenant communications
- Channels: WhatsApp, Zendesk, Gmail, Outlook
- Client outcomes: **CSAT +~12%**, resolution/response time **−~7%**
- Client engagement surfaced three capability gaps that shipped as **platform** capability, not one-off builds: multi-turn looping, persistent agent memory, agent chat

### Discovery & Analytics
- Mixpanel for adoption funnels and engagement metrics feeding roadmap prioritization
- Structured feedback programs: NPS, in-app collection, support-ticket analysis
- Recurring user interviews and synthesis sessions; business cases with projected ROI presented to leadership to secure prioritization and resourcing

### Leadership & Cadence
- Built and led a 2-PM team — hiring, coaching, quality bar, discovery and acceptance-criteria standards, weekly product reviews
- **Bi-weekly roadmap and business review with CEO, CTO, CPO**; quarterly all-hands roadmap review with broader leadership
- QA and release ownership: test plans, regression cycles, go/no-go gates, staging validation, post-release monitoring

### AI-Native Operating Model
- Introduced a Claude Code–powered operating system across product and engineering — skill-based reusable workflows, shared across the team, centralizing operational knowledge. Automated ~40% of repetitive tasks (status reporting, PRD drafting, research synthesis, onboarding docs)
- **PM team project-completion velocity +~15%**
- **Do not name "Nexus" on a resume** — too system-specific. Frame as "AI-native PM operating model"

### Org-Wide AI Adoption Programme
- Piloted in Product, scaled to Engineering, GTM/Sales, Customer Success, People/Recruiting — 5 functions of a ~50–100 person org
- Mechanisms: productized reusable workflows, internal demos and lunch-and-learns, written playbooks so adoption didn't depend on him being in the room
- **~80% daily AI usage**, **~30% time saved on routine tasks** — measured on licence analytics and usage logs plus survey signal, not self-report
- Defensibility: be ready to name which tools were tracked and the rough split per function

### Other Beam Achievements
- 7 agent-driven features shipped → 3x MAU growth, 20% churn reduction
- Reporting accuracy +40%, incident response time −25%, time-to-delivery +12%
- Returning-customer revenue as % of total platform revenue — closest analog to a personally-owned revenue number. Canonical framing: customer re-use / stickiness programme, **~40% MoM repeat-use growth over 9 months** via pricing re-tiering and journey optimization. PLG / retention vocabulary, **not** growth-marketing — no paid acquisition work

---

## Swvl (Feb 2022 – Nov 2022)

**Title**: Program Manager — Global Operations Tech & Experience
**Company**: Mass transit and ride-hailing across Pakistan, Egypt, UAE. NASDAQ-listed at the time
**Context**: Operations technology for 5,000+ daily rides

### Core Work
- Built a real-time fleet optimization platform 0-to-1 across 3 markets — dispatch, scheduling, performance views for ops teams. **Operational efficiency +~30%**, scheduling time −60%, network coverage +25% across 3 cities, service failures −22%
- Led multi-workstream implementation of dynamic routing logic
- Structured pilots with risk registers and go/no-go gates — 95% of identified risks mitigated pre-launch, 98% uptime post-launch

### Driver Bonus & Deduction Policy
- Owned the incentive and penalty rules determining driver payouts across all 3 markets — directly affected driver economics, unit cost per ride, and supply-side retention
- **Single-policy → multi-outcome story**: drove supply performance, in-app adoption, and network quality at once, and had to survive 3 sets of local ops leadership who each wanted it tuned differently
- **Two-in-a-box vendor model**: supply ran through vendors / fleet consolidators who shared in performance numbers — bonus when their supply performed, deduction when it didn't. Hedged supply across aggregators while keeping them outcome-aligned

### Field Discovery
- Rode shifts with drivers in 2 markets to observe in-cab tooling friction, route-execution behavior, and payout-policy reaction in real time
- Shadowed control-room dispatchers on live dispatch, exception handling, scheduling overrides. Most of what shipped in the ops portal came from watching people work around the old tooling
- Vendor/dealer network owned in field — onboarding, performance management, payout terms, dispute resolution; engaged from on-ground fleet supervisors to vendor principals

### Dynamic Rides Scope Flip
- Originally scoped supply-side only, with drivers opting routes in
- Post-launch review showed riders wanted the same control → flipped scope mid-launch and opened the surface to the demand side, **+~15% efficiency on top of the original design**
- Use as the "working backwards from customer insight to change a roadmap call mid-flight" story

---

## Daraz, Alibaba Group (Oct 2020 – Feb 2022)

**Title**: Product Manager — Customer & Seller Experience
**Company**: South Asia's largest e-commerce marketplace (Alibaba Group subsidiary)
**Context**: 100,000+ active listings, multi-country operations

### Core Work
- **Lead story**: owned the seller-onboarding experience. Automated previously manual steps, ran the team-training rollout behind it → **onboarding time −~35%**
- Ran customer research discovery on listing localization across 100,000+ SKUs → **~7% order uplift** (~PKR 500K incremental revenue), **~5% GMV growth** over 6 months
- Shipped seller visibility and merchant ranking surfaces — the placement logic deciding which sellers and listings customers saw first — **top-seller visibility +~20%**
- Navigated a 3-tier approval structure (local Pakistan → regional South Asia → Alibaba Group HQ) without slipping delivery. A good share of the job was managing the people who could say no

### Alternate framings
- **Catalog / assortment / merchandising**: 100K+ SKUs across 3 countries, attribute standardization, category-level data quality, deciding what got promoted in the discovery surface. Closest analog to a retail category-management decision platform
- **Marketplace two-sided**: buyer + seller ownership — the only place in the file where buyer/seller language is correct

---

## Khaadi (Jul 2019 – Oct 2020)

**Title**: Management Trainee — E-commerce & Product
**Company**: Major Pakistani fashion retail brand

- Order fulfilment delays −35%, order accuracy to 98%, stock liquidation +10%, $10K+ inventory cost freed by clearing slow-moving lines earlier
- Framing: genuine store-and-SKU-level retail inventory and availability decision-making, distinct from Daraz's platform-catalog scale

---

## Freelance / Side: AI Agent Building (Upwork & Direct Clients)

### Production AI Agents Built (10+)

| # | Agent | Industry | Complexity | Key Integrations |
|---|-------|----------|-----------|-----------------|
| 1 | Accounts Receivable Automation | Finance | 17-node | Zendesk, Slack, Airtable, Gmail |
| 2 | Accounts Payable Invoice Processing | Finance | 14-node | Airtable, Gmail, Custom KYC Agent |
| 3 | Credit Analysis & Scoring | Finance / Lending | 10-node | Airtable, Gmail |
| 4 | Candidate Screening (Workable) | HR / Recruitment | 13-node | Workable, Airtable, PDF Extraction |
| 5 | Multi-Channel Customer Service | Support | 18-node | Gmail, Google Sheets |
| 6 | Candidate Screening (Jobylon) | HR / Recruitment | 7-node | Jobylon API, PDF Extraction |
| 7 | Property Eligibility Checker | Insurance | 10-node | Gmail, Google Sheets |
| 8 | BPO Call Quality Analysis | BPO / Support | 5-node | Airtable, Slack, Gmail |
| 9 | JD Intake Agent (Call → JD) | HR / Recruiting | 4-node | Ashby ATS API, Email |
| 10 | Tenant Communication Automation | Property Mgmt | 8-node | Gmail, Airtable |

### Process Automations (5+)
LinkedIn outbound sequencing (HubSpot → HeyReach) · client project setup (Linear, Slack, Airtable) · meeting-to-CRM pipeline (Fathom → HubSpot) · automated follow-up sequences · weekly update generator

**Metrics**: 10+ production agents, 25+ processes automated, average 12 nodes per workflow, largest 18-node multi-category routing system.

**Note**: the Credit Analysis & Scoring agent and the AR/AP agents are the legitimate, listable evidence of finance and lending exposure. Lead with these when a JD asks for lending or credit background.

---

## Claude / Anthropic Ecosystem

- **Claude Enterprise / Teams** — daily driver; workspace configuration and enterprise deployment patterns
- **Claude Code CLI** — power user; hooks, slash commands, custom skill definitions
- **MCP servers** — hands-on connecting Claude to enterprise data sources and third-party tools; built custom MCP integrations
- **Prototyping** — v0, Lovable, Replit for concept-to-clickable in hours; ElevenLabs voice embedded into agent workflows (tenant comms, candidate screening callbacks)
- **Prompt engineering** — system prompts, structured output, tool definitions, chain-of-thought, context-window optimization, guardrails
- **Stack preference** — deliberately Claude Code–native + automation platform (n8n, Make, custom Python) + MCP. LangChain / CrewAI / PydanticAI evaluated but not the primary production stack

---

## Public / Visible Building Assets

- **Live AI resume chatbot** — hassaanahmed97.github.io/resume-chatbot. Public, clickable, real URL. Strongest single "visible building" proof point. **Must be regenerated from this file whenever this file changes.**
- **AI Agent portfolio site** — 10+ production agents with node counts, integrations, and quantified outcomes (90% reduction in screening time; 2 hours → 5 minutes per credit analysis; 100% call coverage vs. 5–10% sampling). Leads with n8n
- **Framing rule**: these are public-facing build artifacts, not OSS contributions. Never inflate to "open-source maintainer" or "published n8n templates"

---

## Technical Skills & Tools

| Category | Tools / Skills |
|----------|---------------|
| **AI / LLM** | Claude (Enterprise, Code CLI, API), prompt engineering, agent frameworks, LLM evaluation |
| **Automation** | n8n, Make.com, Zapier, UiPath, custom Python |
| **Prototyping** | v0, Lovable, Replit, FigJam |
| **Data** | SQL (working — SELECT, WHERE, GROUP BY, JOINs), Power BI (proficient), Excel (advanced), SPSS, cohort analysis, A/B testing |
| **APIs** | REST, webhooks, custom integrations, MCP |
| **PM Tools** | Linear, Notion, Jira, Airtable |
| **CRM / ATS** | HubSpot, Workable, Jobylon, Ashby |
| **ERP / Finance** | SAP, NetSuite (AP/AR agent deployments), Stripe |
| **Project Mgmt** | Agile / Scrum, PMP (PMI, Oct 2024) |

---

## Education, Certifications, Languages

- **MBA** — Institute of Business Administration, Karachi (Jul 2021 – Dec 2023)
- **BBA** — Institute of Business Administration, Karachi (Aug 2015 – May 2019)
- **PMP** — Project Management Institute (2024)
- English (native/bilingual) · Urdu (native/bilingual) · Arabic (conversational)
- Open to relocation to Riyadh / KSA

---

## Notes for Resume Alignment

| JD asks for | Map to |
|---|---|
| AI agent building / deployment | Beam agent capabilities + freelance portfolio (10+ agents) |
| LLM evaluation / measuring agent quality | Four-pillar eval framework, Tool Tuner / Agent Tuner |
| Document processing / extraction | AP invoice agent, PDF extraction agents, 100K listing localization |
| Workflow orchestration | Beam graph handling + n8n/Make multi-node workflows |
| Consulting / engagement delivery | Beam 50+ enterprise engagements, design-thinking workshops, multi-phase delivery governance |
| Change management / adoption | Beam enterprise rollouts + org-wide AI adoption programme |
| Pricing / unit economics / P&L | Beam per-execution cost −50%, price pass-through, B2C tier design, competitor benchmarking |
| Credit / lending / risk | Credit Analysis & Scoring agent, AR/AP agents, SAP/NetSuite finance integrations |
| Payments | Stripe integration at Beam, AR/AP lifecycle work |
| Marketplace / two-sided | Daraz buyer + seller ownership, 100K+ listings |
| Operations automation | Swvl 0-to-1 ops platform, scheduling, routing |
| Incentive / commercial policy design | Swvl driver bonus & deduction policy across 3 markets |
| PM leadership / coaching | 2 PMs at Beam — hiring, quality bar, rituals |
| Compliance / guardrails | Beam guardrails, confidence policy, hallucination detection, BPO compliance agent |

---

## OPEN ITEMS — resolve before the next application goes out

1. **AutoLeap title** — "Group Product Manager" or something else? Confirm and use one wording everywhere.
2. **AutoLeap team** — do 3 PMs and 2 designers actually report to you? If not, cut the line.
3. **Beam title confirmation** — get the CTO's written OK for "Senior Product Manager — Agentic AI" and save it.
4. **LinkedIn corrections** — Beam end date to Apr 2026; AutoLeap start to Apr 2026; Beam title to the canonical wording.
5. **Chatbot regeneration** — rebuild on this file, then adversarially test: "where does he work now", "why did he leave Beam", "what's his actual title", "does he have lending experience", "why is he leaving AutoLeap after five months". Every answer must match the resume.
6. **Number audit** — several figures were previously flagged as directional or as H1/H2 targets. Keep only the ones you can walk through mechanically. Six defensible numbers beat fifteen you have to hedge.

---
---

# PRIVATE — NOT FOR RESUME, LINKEDIN, OR CHATBOT

> Everything below this line is personal reference only. It must not be ingested by the resume chatbot,
> must not appear on any application, and must not be volunteered in an interview.

## Bynow (Nov 2025 – 2026) — DO NOT LIST

**Why it's off**: held in parallel with Beam employment without disclosure, and ended on poor terms. Listing it exposes both facts at once and points a reference check at someone who won't help. Riyadh fintech is a small market — the downside is concentrated exactly where the upside was supposed to be.

**What is still usable**: the domain knowledge. It is yours, it travels with you, and nobody audits where knowledge came from. You can discuss BNPL mechanics at depth in any interview without claiming the line item.

### Retained BNPL domain knowledge
- Full PayLater order lifecycle as a state machine: Checkout Created → Authorized → Approved → Settled (platform pays supplier) → Paid (buyer repays platform); status transitions and webhook events
- Monetization mechanics: per-line-item markup, seller-discount models, VAT handling, multi-currency / FX, editable repayment schedules with sum-to-grand-total validation gates
- Financial-integrity controls: reverse-calculation with floor/ceiling gates on grand total and payout fields; soft-warn UX with submit disabled when derived totals are edited beyond mathematical floors
- KSA regulatory surface: SAMA BNPL rules, VAT, Commercial Registration validation via Watheq, IBAN certificate validation, Nafath e-signature (national strong-customer-authentication — the direct analog to PSD2 SCA)
- KYC / onboarding economics: gating sequence before calling paid registry APIs (OCR success → OTP-verified identity → user confirmation → bot-resistance → rate limits), plus response caching and auto-pause thresholds to control cost per onboarding
- Stack literacy: acquiring vs. gateway vs. wallet split in a BNPL stack, and where a quasi-acquirer/lender hybrid sits within it
- Credit assessment module sequencing relative to onboarding; working with a risk team on scope

### If asked directly where the BNPL exposure came from
- **First check**: did any meaningful part of that work happen under the Beam client engagement? Beam delivered to a KSA SME lending / BNPL client. If yes, it belongs on the Beam entry as client delivery — true and safe. If the substantive work was all on the side, do not stretch Beam to cover it.
- **Otherwise**: "I took a short advisory engagement with a Riyadh SME lending platform. I'd rather not name the client." In consulting conversations, client confidentiality is an unremarkable answer.
- Do not name the company. Do not offer the reference. Do not describe it as a full-time role.

### Interview-only, never on a resume
- AI hiring product clients: Booth & Partners, Hudson Talent → resume wording is "enterprise staffing and talent-services clients"
- Beam client names generally — per the Beam name-drop rule
