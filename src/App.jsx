import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    icp: "",
    retainer: "",
  });

  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error
  const [formMessage, setFormMessage] = useState("");

  const submitPipelineAuditRequest = async (data) => {
    const response = await fetch("https://formspree.io/f/xkoqbqjq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { ok: true };
    }

    return { ok: false };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormStatus("idle");
    setFormMessage("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === "submitting") return;

    setFormStatus("submitting");
    setFormMessage("");

    try {
      const res = await submitPipelineAuditRequest(formData);

      if (res && res.ok) {
        setFormStatus("success");
        setFormMessage(
          "Request received. We’ll follow up shortly with next steps."
        );
        setFormData({
          name: "",
          email: "",
          website: "",
          icp: "",
          retainer: "",
        });
      } else {
        setFormStatus("error");
        setFormMessage(
          "Something went wrong. Please try again or email us directly at founder@saaspipelinestudio.com."
        );
      }
    } catch {
      setFormStatus("error");
      setFormMessage(
        "Something went wrong. Please try again or email us directly at founder@saaspipelinestudio.com."
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-8">
        {/* Navbar */}
        <nav className="flex items-center justify-between py-3 border-b border-slate-200/80 mb-6 lg:mb-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
              <span className="text-xs font-semibold tracking-tight text-slate-50">
                SPS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 text-sm">
                SaaS Pipeline Studio
              </span>
              <span className="text-[11px] text-slate-500">
                Outbound program for PPC agencies — B2B SaaS
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900">
              How it works
            </a>
            <a href="#pilot" className="text-slate-600 hover:text-slate-900">
              60-Day Pilot
            </a>
            <a href="#proof" className="text-slate-600 hover:text-slate-900">
              Sample output
            </a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900">
              FAQ
            </a>
            <a
              href="#audit"
              className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700"
            >
              Book a SaaS Pipeline Audit
            </a>
          </div>

          <div className="md:hidden">
            <a
              href="#audit"
              className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-emerald-700"
            >
              Pipeline Audit
            </a>
          </div>
        </nav>

        {/* Hero */}
        <header className="py-10 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" />
              <span className="text-[11px] font-medium text-emerald-800">
                For PPC agencies serving B2B SaaS
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
              A SaaS pipeline your PPC agency can plan around
            </h1>

            <p className="text-sm md:text-base text-slate-600 mb-6 max-w-xl">
              We design and run a repeatable outbound program that puts your PPC
              agency in front of B2B SaaS companies in your ICP — with structured
              account lists, relevant outreach and a clear view of opportunity flow.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
              <a
                href="#audit"
                className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 w-full sm:w-auto justify-center"
              >
                Book a SaaS Pipeline Audit
              </a>
              <a
                href="#pilot"
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                See the 60-Day Pilot →
              </a>
            </div>

            <p className="text-[11px] text-slate-500">
              30-minute Zoom. We review your B2B SaaS ICP, current pipeline and
              whether a structured outbound program makes sense for you.
            </p>
          </div>
        </header>

        {/* Problem */}
        <section id="problem" className="py-10 border-t border-slate-200/80">
          <div className="max-w-3xl">
            <h2 className="text-base font-semibold text-slate-900 mb-3">
              Your PPC delivery is structured. Your SaaS pipeline isn’t.
            </h2>

            <p className="text-sm text-slate-600 mb-4">
              If you run a PPC agency serving B2B SaaS, you’ve probably seen some
              of this:
            </p>

            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>
                  New SaaS clients arrive through a mix of referrals, inbound and
                  ad-hoc outreach. Some months you’re full of demos, other months
                  the calendar is thin.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>
                  Building account lists, checking SaaS sites and writing cold
                  emails is work that gets pushed to “later”.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>
                  Building an in-house outbound team takes time, process and
                  management attention you don’t really have right now.
                </span>
              </li>
            </ul>

            <p className="text-sm text-slate-600 mt-4">
              You know how to build predictable systems for your clients’
              acquisition. Your own SaaS new-business motion often remains a side
              project.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="py-10 border-t border-slate-200/80">
          <div className="max-w-4xl">
            <h2 className="text-base font-semibold text-slate-900 mb-3">
              A structured outbound program for PPC agencies targeting B2B SaaS
            </h2>

            <p className="text-sm text-slate-600 mb-5">
              SaaS Pipeline Studio is a productised program that gives your PPC
              agency a deliberate way to open conversations with B2B SaaS companies.
            </p>

            <p className="text-sm text-slate-600 mb-6">
              We don’t add another generic lead source. We set up and operate a
              repeatable outbound motion that connects your PPC offer with B2B SaaS
              teams you actually want to work with.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Defined ICP
                </h3>
                <p className="text-sm text-slate-600">
                  We align on your B2B SaaS ICP and turn it into a shared reference
                  you recognise in every account list.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Account lists with context
                </h3>
                <p className="text-sm text-slate-600">
                  We assemble B2B SaaS accounts that fit your ICP and capture enough
                  context to support a relevant conversation.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Outreach & pipeline view
                </h3>
                <p className="text-sm text-slate-600">
                  We prepare outreach around your PPC offer and summarise what is
                  happening in your opportunity flow, wave after wave.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-10 border-t border-slate-200/80">
          <div className="max-w-4xl">
            <h2 className="text-base font-semibold text-slate-900 mb-6">
              How the program works
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
                <span className="text-[11px] font-medium text-emerald-700 mb-1">
                  Step 1
                </span>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  ICP & offer clarity
                </h3>
                <p className="text-sm text-slate-600 flex-1">
                  We align on your B2B SaaS ICP, decide which PPC offer to lead
                  with and collect the proof you want reflected in outreach.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
                <span className="text-[11px] font-medium text-emerald-700 mb-1">
                  Step 2
                </span>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Account list & context
                </h3>
                <p className="text-sm text-slate-600 flex-1">
                  We build lists of B2B SaaS accounts in your ICP and capture key
                  details about product, pricing and funnel entry points.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
                <span className="text-[11px] font-medium text-emerald-700 mb-1">
                  Step 3
                </span>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Outreach & follow-up
                </h3>
                <p className="text-sm text-slate-600 flex-1">
                  We prepare first-touch and follow-up emails around your PPC
                  offer, formatted for your existing sending setup.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
                <span className="text-[11px] font-medium text-emerald-700 mb-1">
                  Step 4
                </span>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Pipeline view & iteration
                </h3>
                <p className="text-sm text-slate-600 flex-1">
                  You receive pipeline summaries and recommendations on which
                  segments respond best and how to adjust the next waves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section id="what-you-get" className="py-10 border-t border-slate-200/80">
          <div className="max-w-4xl">
            <h2 className="text-base font-semibold text-slate-900 mb-6">
              What you receive as part of the program
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Defined B2B SaaS ICP
                </h3>
                <p className="text-sm text-slate-600">
                  A documented view of the SaaS profiles we are targeting together —
                  size, funding, markets and product characteristics.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Qualified account lists
                </h3>
                <p className="text-sm text-slate-600">
                  B2B SaaS accounts that fit your ICP, with firmographics and
                  concise notes for easier qualification.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Outreach copy for each wave
                </h3>
                <p className="text-sm text-slate-600">
                  First-touch emails and follow-ups that connect your PPC offer to
                  the prospect’s product and funnel.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Campaign-ready files
                </h3>
                <p className="text-sm text-slate-600">
                  Structured sheets ready to plug into your email tool or CRM, plus
                  guidance on campaign structure if needed.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 md:col-span-2">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Pipeline summaries & recommendations
                </h3>
                <p className="text-sm text-slate-600">
                  Short, focused reports on accounts contacted, responses and
                  segment performance, with suggested adjustments for the next
                  cycles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilot */}
        <section id="pilot" className="py-10 border-t border-slate-200/80">
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-base font-semibold text-slate-900 mb-3">
                  Start with a 60-Day SaaS Pipeline Pilot
                </h2>

                <p className="text-sm text-slate-600 mb-5">
                  The pilot is designed to show, with real accounts and real
                  conversations, what a structured outbound motion can look like for
                  your PPC agency.
                </p>

                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  What’s included:
                </h3>

                <ul className="space-y-2.5 text-sm text-slate-700 mb-4">
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>
                      ICP & offer working session to agree on your B2B SaaS ICP, PPC
                      offer focus and supporting proof.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>
                      Two waves of outreach over 60 days, with 200–400 B2B SaaS
                      accounts contacted, depending on research depth.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>
                      Campaign setup support so the data and copy fit your existing
                      sending stack.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>
                      Mid-point and final pilot reports, covering volumes, responses
                      and what we’ve learned about your segments.
                    </span>
                  </li>
                </ul>

                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  What we do not promise:
                </h3>

                <p className="text-sm text-slate-600 mb-4">
                  We do not promise a specific number of signed clients or a fixed
                  number of meetings. We focus on reaching B2B SaaS accounts that
                  fit your ICP, opening relevant conversations and giving you enough
                  data to decide whether this motion should become part of your core
                  growth model.
                </p>
              </div>

              <div className="md:w-1/3">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    Pilot outcomes
                  </h3>

                  <ul className="space-y-2 text-sm text-slate-600 mb-4">
                    <li>Refined and documented B2B SaaS ICP.</li>
                    <li>Tested account segments and outreach angles.</li>
                    <li>Visibility on realistic conversation volumes.</li>
                    <li>A simple outbound structure you can keep running.</li>
                  </ul>

                  <a
                    href="#audit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                  >
                    Discuss the 60-Day Pilot
                  </a>

                  <p className="mt-2 text-[11px] text-slate-500">
                    The SaaS Pipeline Audit is the entry point. We only invite
                    agencies into the pilot when we believe the program can be
                    meaningful for them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section id="proof" className="py-10 border-t border-slate-200/80">
          <div className="max-w-5xl">
            <h2 className="text-base font-semibold text-slate-900 mb-6">
              What the output actually looks like
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Sample account list (anonymised)
                </h3>
                <div className="rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
                  <table className="w-full border-collapse text-[11px] text-slate-700">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-2 py-1 text-left font-medium">Company</th>
                        <th className="px-2 py-1 text-left font-medium">Size</th>
                        <th className="px-2 py-1 text-left font-medium">Stage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-200">
                        <td className="px-2 py-1">ProjectFlow</td>
                        <td className="px-2 py-1">50–100</td>
                        <td className="px-2 py-1">Series A</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-2 py-1">LeadTrack</td>
                        <td className="px-2 py-1">20–50</td>
                        <td className="px-2 py-1">Seed</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-2 py-1">FinSync</td>
                        <td className="px-2 py-1">100–200</td>
                        <td className="px-2 py-1">Series B</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-[11px] text-slate-500">
                  Example structure of a B2B SaaS account list.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Sample outreach
                </h3>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[11px] font-mono text-slate-500 mb-1">
                    Subject: Structuring demo-ready traffic for your project
                    management SaaS
                  </p>
                  <p className="text-[11px] text-slate-700 mb-2">Hi [First name],</p>
                  <p className="text-[11px] text-slate-700 mb-2">
                    We’ve been looking at how [Company] positions its project
                    management platform, in particular the focus on team adoption
                    and the “get started in minutes” angle on your homepage.
                  </p>
                  <p className="text-[11px] text-slate-700 mb-2">
                    We work with B2B SaaS teams that rely on demo requests and
                    trials, and we run structured PPC programs specifically to
                    increase qualified demo volume without diluting lead quality.
                  </p>
                  <p className="text-[11px] text-slate-700 mb-2">
                    Would it be useful to walk through how we’d structure a PPC
                    program around your current funnel and pricing model?
                  </p>
                  <p className="text-[11px] text-slate-700 mb-1">Best,</p>
                  <p className="text-[11px] text-slate-700">SaaS Pipeline Studio</p>
                </div>
                <p className="mt-2 text-[11px] text-slate-500">
                  Example of first-touch outreach referencing the prospect’s
                  product and funnel.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Sample pipeline summary
                </h3>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-700">
                  <div className="flex justify-between mb-1">
                    <span>Accounts contacted</span>
                    <span className="font-medium">~200</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Total replies</span>
                    <span className="font-medium">~30</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span>Positive conversations</span>
                    <span className="font-medium">~10</span>
                  </div>
                  <p className="font-semibold mb-1">Top-responding segments</p>
                  <ul className="list-disc list-inside">
                    <li>Series A SaaS, 20–50 employees, US/EU</li>
                    <li>Productivity tools with self-serve + sales-assist motion</li>
                  </ul>
                </div>
                <p className="mt-2 text-[11px] text-slate-500">
                  Illustrative view of the level of visibility you get on the
                  outbound motion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-10 border-t border-slate-200/80">
          <div className="max-w-4xl">
            <h2 className="text-base font-semibold text-slate-900 mb-6">
              Questions that usually come up
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Who is SaaS Pipeline Studio for?
                </h3>
                <p className="text-sm text-slate-600">
                  PPC agencies whose main or intended clients are B2B SaaS
                  companies, typically with retainers from around €3k/month and up.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Do you handle sending and deliverability?
                </h3>
                <p className="text-sm text-slate-600">
                  No. You remain in control of domains, sending tools and
                  deliverability. We prepare the structure, copy and files and
                  support you in setting up campaigns correctly.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Can you guarantee new clients?
                </h3>
                <p className="text-sm text-slate-600">
                  No. What can be structured and measured is how many relevant SaaS
                  accounts we reach and how many of them respond and open a
                  conversation. Closing clients depends on your offer, your calls
                  and your proposals.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  How much time will we need to invest?
                </h3>
                <p className="text-sm text-slate-600">
                  Most of your time is in the initial working session and early
                  feedback on messaging. After that, the cadence is light: you
                  mainly review summaries and attend the conversations created.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  What happens after the 60-Day Pilot?
                </h3>
                <p className="text-sm text-slate-600">
                  You can continue the program on a monthly basis, expand into
                  additional SaaS segments or markets, or have your team take over
                  the system with our handover.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Audit */}
        <section id="audit" className="py-14 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">
                Book a SaaS Pipeline Audit
              </h2>

              <p className="text-sm text-slate-600 mb-4">
                If your PPC delivery is structured but your B2B SaaS pipeline still
                relies on timing and word of mouth, the next step is simple.
              </p>

              <p className="text-sm text-slate-600 mb-2">
                In the SaaS Pipeline Audit we:
              </p>

              <ul className="space-y-2.5 text-sm text-slate-700 mb-4">
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>Review how you currently win B2B SaaS clients.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>Define or refine your B2B SaaS ICP.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>
                    Outline what a 60-day pilot could realistically produce in your
                    case.
                  </span>
                </li>
              </ul>

              <p className="text-[11px] text-slate-500">
                We only invite agencies into the 60-Day Pilot when we believe the
                program can be meaningful for them.
              </p>
            </div>

            <div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Request your audit
                </h3>

                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Work email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600"
                      placeholder="you@agency.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Agency website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600"
                      placeholder="https://youragency.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Primary B2B SaaS ICP
                    </label>
                    <input
                      type="text"
                      name="icp"
                      value={formData.icp}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600"
                      placeholder="e.g. B2B SaaS, 20–200 employees, US/EU"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Typical monthly PPC retainer per SaaS client
                    </label>
                    <select
                      name="retainer"
                      value={formData.retainer}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600"
                      required
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option value="<3k">Below €3k</option>
                      <option value="3-7k">€3k–€7k</option>
                      <option value=">7k">Above €7k</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Submit request"}
                  </button>

                  <p className="text-[11px] text-slate-500">
                    By submitting this form, you agree to be contacted regarding
                    your request.
                  </p>

                  {formStatus === "success" && (
                    <p className="mt-2 text-[11px] text-emerald-700">
                      {formMessage}
                    </p>
                  )}

                  {formStatus === "error" && (
                    <p className="mt-2 text-[11px] text-red-600">{formMessage}</p>
                  )}

                  {formStatus === "idle" && (
                    <p className="mt-2 text-[11px] text-slate-500">
                      We’ll review your details and come back with a proposed time
                      and agenda for the audit.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200/80 py-5 mt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span>© {new Date().getFullYear()} SaaS Pipeline Studio.</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="hidden md:inline-block">
                Structured outbound program for PPC agencies serving B2B SaaS.
              </span>
              <a
                href="mailto:founder@saaspipelinestudio.com"
                className="text-emerald-700 hover:text-emerald-800 font-medium"
              >
                founder@saaspipelinestudio.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;