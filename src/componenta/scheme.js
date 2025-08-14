import React, { useMemo, useState } from "react";

/**
 * Blog: Latest Indian Startup Schemes (India, Aug 2025)
 * - Single-file, drop-in React component
 * - TailwindCSS for styling (no external UI deps)
 * - Search/filter, sticky table of contents, share buttons
 * - Mobile friendly, accessible
 *
 * Usage:
 *   1) Ensure Tailwind is configured in your React/Next app.
 *   2) Add this file anywhere in your project and import it.
 *   3) <StartupSchemesBlog />
 */

// Brand palette from your preferences
const COLORS = {
  orange8: "#b25424",
  brand7: "#44358d",
  brand9: "#6851d6",
};

const PLACEHOLDERS = [
  "./ss8.png",
  "./ss8.png",
  "./ss8.png",
  "./ss8.png",
  "./ss8.png",
  "./ss8.png",
];

// --- Data ---
const updatedOn = "August 14, 2025";

const sections = [
  {
    id: "overview",
    title: "Quick Overview",
    cover: PLACEHOLDERS[0],
    summary:
      "A snapshot of key central and state-level schemes supporting Indian startups as of August 2025.",
    content: (
      <div className="space-y-2 text-slate-700">
        <p>
          This guide aggregates current flagship initiatives—funding, tax incentives, credit
          guarantees, and sector-specific programs—plus a concise how-to-apply checklist and FAQs.
        </p>
        <ul className="list-disc pl-6">
          <li>Central: FFS, CGSS, Tax Benefits, IN‑SPACe Fund, SISFS, SAMRIDH</li>
          <li>State/Institutional: Goa Startup Policy 2025, Odisha (BPUT) push, banking/VC programs</li>
          <li>Focus sectors: Deep Tech, Space, AI, Agritech, Climate/Green, Women & Youth</li>
        </ul>
      </div>
    ),
    tags: ["summary", "central", "state"],
  },
  {
    id: "ffs",
    title: "Fund of Funds for Startups (FFS) — Deep Tech Boost",
    cover: PLACEHOLDERS[1],
    summary:
      "Corpus aimed at catalyzing VC investments into eligible AIFs, with heightened focus on deep tech.",
    content: (
      <div className="space-y-2 text-slate-700">
        <p>
          The Fund of Funds channels public capital into SEBI-registered Alternative Investment Funds
          (AIFs) that subsequently invest in startups. The latest policy emphasis strengthens support
          for deep-tech innovation via a larger corpus and faster downstream deployment.
        </p>
        <ul className="list-disc pl-6">
          <li>Instrument: Investments into AIFs; startups get funded via those AIFs.</li>
          <li>Focus: Deep-tech, national-priority tech, commercialization.</li>
          <li>Benefit: Improved access to risk capital at seed to growth stages.</li>
        </ul>
        <details className="rounded-xl border p-4 bg-white/60">
          <summary className="cursor-pointer font-semibold">Eligibility & How to Apply</summary>
          <div className="mt-3 space-y-2">
            <p>
              Startups typically apply to participating AIFs rather than directly to FFS. Confirm your
              DPIIT recognition and ensure compliance with 80-IAC if relevant.
            </p>
            <ol className="list-decimal pl-6">
              <li>Get DPIIT Startup recognition (startupindia.gov.in).</li>
              <li>Shortlist AIFs aligned to your sector/stage; track their open calls.</li>
              <li>Prepare a VC-grade data room (deck, model, cap table, traction, IP docs).</li>
            </ol>
          </div>
        </details>
      </div>
    ),
    tags: ["funding", "deep tech", "aif"],
  },
  {
    id: "cgss",
    title: "Credit Guarantee Scheme for Startups (CGSS)",
    cover: PLACEHOLDERS[2],
    summary:
      "Collateral-free credit with guarantee coverage and reduced fees in priority sectors.",
    content: (
      <div className="space-y-2 text-slate-700">
        <p>
          CGSS gives eligible startups access to institutional credit without hard collateral by
          offering partial credit guarantees to lenders. Priority sectors may enjoy reduced fees and
          higher coverage limits.
        </p>
        <ul className="list-disc pl-6">
          <li>Use-cases: Working capital, capex, new product rollouts, market expansion.</li>
          <li>Typical ticket sizes: ₹10 lakh up to multi-crore limits (as per lender/policy).</li>
          <li>Partner channels: Public/Private sector banks, NBFCs, SIDBI.</li>
        </ul>
        <details className="rounded-xl border p-4 bg-white/60">
          <summary className="cursor-pointer font-semibold">Eligibility & How to Apply</summary>
          <div className="mt-3 space-y-2">
            <ol className="list-decimal pl-6">
              <li>DPIIT-recognized startup; valid incorporation docs and GST/PAN.</li>
              <li>Bank-ready financials: projections, cashflows, UDYAM if MSME-eligible.</li>
              <li>Approach participating lenders; ask explicitly for CGSS-backed products.</li>
            </ol>
          </div>
        </details>
      </div>
    ),
    tags: ["loans", "credit", "sidbi"],
  },
  {
    id: "tax",
    title: "Tax Benefits & Exemptions (80-IAC et al.)",
    cover: PLACEHOLDERS[3],
    summary:
      "Tax holiday window, capital gains relief, and investment-related exemptions for eligible startups.",
    content: (
      <div className="space-y-2 text-slate-700">
        <p>
          Recognized startups can leverage tax holidays (for a limited number of years out of the
          first ten), roll-over/CG exemptions on specified instruments, and investment-related relief
          subject to conditions. Always validate with a tax professional.
        </p>
        <ul className="list-disc pl-6">
          <li>DPIIT recognition and time-bound incorporation cutoffs apply.</li>
          <li>Maintain robust compliance: audit trails, valuation reports, FC-GPR/FIRC (if FDI).</li>
          <li>Interplay with ESOP taxation and angel tax rules—plan cap table early.</li>
        </ul>
        <details className="rounded-xl border p-4 bg-white/60">
          <summary className="cursor-pointer font-semibold">How to Avail</summary>
          <div className="mt-3 space-y-2">
            <ol className="list-decimal pl-6">
              <li>Obtain DPIIT recognition & apply for 80-IAC via Startup India portal.</li>
              <li>Engage a CA for eligibility, filings, and documentation.</li>
              <li>Track Budget/Finance Act updates annually for rule changes.</li>
            </ol>
          </div>
        </details>
      </div>
    ),
    tags: ["tax", "capital gains", "80-IAC"],
  },
  {
    id: "inspace",
    title: "IN‑SPACe Technology Adoption Fund (Space Startups)",
    cover: PLACEHOLDERS[4],
    summary:
      "Grants and co-funding support to accelerate commercialization of Indian space-tech.",
    content: (
      <div className="space-y-2 text-slate-700">
        <p>
          India’s space regulator facilitates early-stage space innovations with grants/co-funding to
          reduce import dependence and enable homegrown capabilities. Coverage can extend to a
          portion of project costs with defined caps.
        </p>
        <ul className="list-disc pl-6">
          <li>Ideal for: Satcom, launch services, EO/analytics, space components.</li>
          <li>Support type: Non-dilutive grants, possible public-procurement pilots.</li>
          <li>Pair with: iDEX, TDF (for defense-adjacent tech) where relevant.</li>
        </ul>
        <details className="rounded-xl border p-4 bg-white/60">
          <summary className="cursor-pointer font-semibold">Eligibility & How to Apply</summary>
          <div className="mt-3 space-y-2">
            <ol className="list-decimal pl-6">
              <li>Monitor IN‑SPACe calls; prepare TRL evidence & IP status.</li>
              <li>Budget and milestones aligned to fund limits; Indian incorporation.</li>
              <li>Demonstrate national capability uplift and commercialization plan.</li>
            </ol>
          </div>
        </details>
      </div>
    ),
    tags: ["space", "grant", "deep tech"],
  },
  {
    id: "sisfs",
    title: "Startup India Seed Fund Scheme (SISFS)",
    cover: PLACEHOLDERS[5],
    summary:
      "Grants (often up to ₹50 lakh) via incubators for PoC, prototype, product trials, and market entry.",
    content: (
      <div className="space-y-2 text-slate-700">
        <p>
          SISFS empowers incubators to issue grants/seed capital to promising early-stage teams. It’s
          well-suited for building MVPs, running pilots, and achieving early traction.
        </p>
        <ul className="list-disc pl-6">
          <li>Channel: Recognized incubators with defined selection cohorts.</li>
          <li>Stage: Idea/PoC to early revenue. Strong problem-solution fit is key.</li>
          <li>Deliverables: Milestone-linked tranches; utilization reporting.</li>
        </ul>
        <details className="rounded-xl border p-4 bg-white/60">
          <summary className="cursor-pointer font-semibold">Eligibility & How to Apply</summary>
          <div className="mt-3 space-y-2">
            <ol className="list-decimal pl-6">
              <li>DPIIT-recognized startup; Indian founders; sector-agnostic with exclusions.</li>
              <li>Find an incubator on Startup India; submit deck, PoC details, budget.</li>
              <li>Prepare for jury day: demo, traction metrics, founder-market fit.</li>
            </ol>
          </div>
        </details>
      </div>
    ),
    tags: ["seed", "grant", "incubator"],
  },
  {
    id: "samridh",
    title: "SAMRIDH (MeitY) — Accelerator + Co-funding",
    cover: PLACEHOLDERS[2],
    summary:
      "Acceleration support with potential co-funding for software/SaaS startups to scale globally.",
    content: (
      <div className="space-y-2 text-slate-700">
        <p>
          SAMRIDH partners with accelerators to provide market access, mentoring, and matched funding
          structures for select cohorts, boosting readiness for international expansion.
        </p>
        <ul className="list-disc pl-6">
          <li>Fit: B2B SaaS, DevTools, GovTech, health-tech, fintech.</li>
          <li>Value: GTM acceleration, enterprise connects, possible co-investment.</li>
          <li>Outcome: Better unit economics and preparedness for Series A.</li>
        </ul>
      </div>
    ),
    tags: ["saas", "accelerator", "meity"],
  },
  {
    id: "states",
    title: "State & Institutional Programs (Goa, Odisha & More)",
    cover: PLACEHOLDERS[3],
    summary:
      "State policies and university mandates that spur regional startup ecosystems.",
    content: (
      <div className="space-y-2 text-slate-700">
        <p>
          States run their own policies—grants, reimbursements, rental support, and women/youth
          focused incentives. Universities and banks add incubation and tailored credit products.
        </p>
        <ul className="list-disc pl-6">
          <li>Goa Startup Policy 2025: Women entrepreneurship, job creation focus.</li>
          <li>Odisha (BPUT): Incubation push across affiliated colleges; drone-tech CoE.</li>
          <li>Banking: Startup programs from major banks; SIDBI lines; VC initiatives.</li>
        </ul>
      </div>
    ),
    tags: ["state", "women", "incubation"],
  },
  {
    id: "apply",
    title: "Application Playbook (Step-by-Step)",
    cover: PLACEHOLDERS[4],
    summary:
      "Concrete steps to become application-ready for grants, tax relief, VC, or credit products.",
    content: (
      <div className="space-y-2 text-slate-700">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">DPIIT Recognition:</span> Register your startup on the
            Startup India portal; obtain recognition and relevant certificates.
          </li>
          <li>
            <span className="font-semibold">Compliance Kit:</span> PAN, GST, CIN, share certificates,
            ESOP policy draft, IP filings, audited statements, projections, data room.
          </li>
          <li>
            <span className="font-semibold">Choose the Track:</span> Grant (SISFS/IN‑SPACe), VC (FFS via
            AIFs), Loan (CGSS), or Tax relief (80‑IAC); you can combine paths.
          </li>
          <li>
            <span className="font-semibold">Story & Metrics:</span> Pain-point clarity, TAM/SAM/SOM,
            traction, defensibility, and milestone plan with budgets.
          </li>
          <li>
            <span className="font-semibold">Submit & Follow-through:</span> Meet deadlines, respond to
            queries quickly, and maintain reporting hygiene after sanction.
          </li>
        </ol>
      </div>
    ),
    tags: ["how-to", "checklist"],
  },
  {
    id: "faqs",
    title: "FAQs",
    cover: PLACEHOLDERS[5],
    summary:
      "Quick answers to common questions about eligibility, combinations, and timelines.",
    content: (
      <div className="space-y-4 text-slate-700">
        <details className="rounded-xl border p-4 bg-white/60">
          <summary className="cursor-pointer font-semibold">Can I combine grant and loan schemes?</summary>
          <p className="mt-2">Yes. Many startups use non-dilutive grants for R&D/Pilots and loans for working capital.</p>
        </details>
        <details className="rounded-xl border p-4 bg-white/60">
          <summary className="cursor-pointer font-semibold">Is DPIIT recognition mandatory?</summary>
          <p className="mt-2">It’s required for several benefits (e.g., 80‑IAC) and helpful elsewhere—get it early.</p>
        </details>
        <details className="rounded-xl border p-4 bg-white/60">
          <summary className="cursor-pointer font-semibold">How long do evaluations take?</summary>
          <p className="mt-2">Varies by scheme/cohort. Expect a few weeks to a few months; keep docs ready.</p>
        </details>
      </div>
    ),
    tags: ["faq"],
  },
];

function Pill({ children }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-slate-700 bg-white/70"
      aria-label={`tag ${children}`}
    >
      {children}
    </span>
  );
}

function SectionCard({ s, highlight = false }) {
  return (
    <article
      id={s.id}
      className={`group relative overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-md bg-white/80 ${
        highlight ? "ring-2" : ""
      }`}
      style={highlight ? { boxShadow: `0 0 0 4px ${COLORS.brand9}20` } : undefined}
    >
      <img src={s.cover} alt="cover" className="h-48 w-full object-cover" />
      <div className="p-5 space-y-3">
        <h3 className="text-lg md:text-xl font-semibold text-slate-900">{s.title}</h3>
        <p className="text-sm text-slate-600">{s.summary}</p>
        <div className="flex flex-wrap gap-2">
          {s.tags?.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
        <div className="pt-2 prose prose-sm max-w-none">{s.content}</div>
      </div>
    </article>
  );
}

const SocialShare = () => (
  <div className="flex items-center gap-3">
    <a
      className="rounded-xl border px-3 py-1 text-sm hover:bg-white/50"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        const url = typeof window !== "undefined" ? window.location.href : "";
        const shareText = encodeURIComponent("Latest Indian Startup Schemes — 2025");
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${shareText}`);
      }}
      aria-label="Share on X"
    >
      Share
    </a>
    <button
      className="rounded-xl border px-3 py-1 text-sm hover:bg-white/50"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert("Link copied!");
        } catch {
          alert("Copy failed");
        }
      }}
    >
      Copy Link
    </button>
  </div>
);

export default function StartupSchemesBlog() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections.filter((s) =>
      [s.title, s.summary, s.tags?.join(" ")].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-slate-50"
      style={{
        backgroundImage:
          `radial-gradient(600px 200px at 10% 0%, ${COLORS.brand7}10 0, transparent 60%),` +
          `radial-gradient(600px 200px at 90% 0%, ${COLORS.brand9}10 0, transparent 60%)`,
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur supports-backdrop-blur:bg-white/70 bg-white/60 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-2xl"
              style={{ background: `linear-gradient(135deg, ${COLORS.brand7}, ${COLORS.brand9})` }}
            />
            <div>
              <h1 className="text-base md:text-lg font-bold tracking-tight text-slate-900">Startup Schemes India</h1>
              <p className="text-[11px] text-slate-500">Updated {updatedOn}</p>
            </div>
          </div>
          <SocialShare />
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-8 pb-6">
        <div className="grid md:grid-cols-5 gap-6 items-stretch">
          <div className="md:col-span-3 p-6 rounded-2xl border shadow-sm bg-white/80">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">
              Latest Indian Startup Schemes — Funding, Loans, Tax Relief & More
            </h2>
            <p className="mt-3 text-slate-700">
              Explore central and state-backed programs: FFS, CGSS, SISFS, SAMRIDH, space-tech funds,
              and tax incentives. Find eligibility and step-by-step guidance to apply.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <input
                type="search"
                placeholder="Search schemes, e.g. deep tech, CGSS, grant, tax…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border px-4 py-2 text-sm outline-none focus:ring"
              />
              <button
                onClick={() => setQuery("")}
                className="rounded-xl px-4 py-2 text-sm font-medium text-white"
                style={{ background: COLORS.brand7 }}
              >
                Clear
              </button>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Tip: try keywords like <span className="font-semibold">space</span>, <span className="font-semibold">seed</span>, <span className="font-semibold">80‑IAC</span>, <span className="font-semibold">women</span>
            </div>
          </div>
          <aside className="md:col-span-2 p-6 rounded-2xl border shadow-sm bg-white/80">
            <h3 className="text-sm font-semibold mb-3 text-slate-900">Table of Contents</h3>
            <nav className="space-y-1 text-sm">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="block hover:underline text-slate-700">
                  • {s.title}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      {/* Content grid */}
      <main className="mx-auto max-w-6xl px-4 pb-16">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border p-8 text-center text-slate-600 bg-white/80">
            No matches. Try another keyword.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((s, i) => (
              <SectionCard key={s.id} s={s} highlight={i === 0 && !query} />
            ))}
          </div>
        )}

        {/* Helpful links */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6 bg-white/80">
            <h4 className="font-semibold text-slate-900">Official Portals</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li><a className="hover:underline" href="https://www.startupindia.gov.in/" target="_blank" rel="noreferrer">Startup India</a></li>
              <li><a className="hover:underline" href="https://www.sidbi.in/" target="_blank" rel="noreferrer">SIDBI</a></li>
              <li><a className="hover:underline" href="https://www.inspace.gov.in/" target="_blank" rel="noreferrer">IN‑SPACe</a></li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-white/80">
            <h4 className="font-semibold text-slate-900">Documents Checklist</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Incorporation docs (CIN), PAN, GST</li>
              <li>DPIIT certificate, pitch deck, cap table</li>
              <li>Financials, projections, bank statements</li>
              <li>IP status, product/TRL evidence</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-white/80">
            <h4 className="font-semibold text-slate-900">Pro Tips</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Align scheme choice with stage & sector</li>
              <li>Build a data room before you apply</li>
              <li>Track state policies for extra perks</li>
              <li>Combine grant + credit smartly</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 items-start">
          <div className="space-y-2">
            <div className="text-lg font-bold" style={{ color: COLORS.brand7 }}>
              Startup Schemes India
            </div>
            <p className="text-sm text-slate-600">Your quick guide to funding, loans, and incentives.</p>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-semibold mb-2">Disclaimer</div>
            <p>
              This article is for informational purposes only. Always verify scheme rules and dates on
              official portals or consult a professional adviser.
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-semibold mb-2">Stay Updated</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed! We'll keep you posted on updates.");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-xl border px-4 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="rounded-xl px-4 py-2 text-sm font-medium text-white"
                style={{ background: COLORS.orange8 }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Startup Schemes India</div>
      </footer>
    </div>
  );
}
