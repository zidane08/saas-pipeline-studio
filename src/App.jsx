import React, { useState } from "react";
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    situation: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");
  const submitRFQRequest = async (data) => {
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
      const res = await submitRFQRequest(formData);
      if (res && res.ok) {
        setFormStatus("success");
        setFormMessage(
          "Request received. We'll get back to you within one business day."
        );
        setFormData({
          name: "",
          email: "",
          company: "",
          situation: "",
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
        {/* NAV */}
        <nav className="flex items-center justify-between py-3 border-b border-slate-200/80 mb-6 lg:mb-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
              <span className="text-xs font-semibold tracking-tight text-slate-50">
                RFQ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 text-sm">
                RFQ Reply Kit – Export
              </span>
              <span className="text-[11px] text-slate-500">
                Export communication support for Italian industrial companies
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900">
              How it works
            </a>
            <a href="#whats-included" className="text-slate-600 hover:text-slate-900">
              What's included
            </a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900">
              FAQ
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700"
            >
              Check my RFQ
            </a>
          </div>
          <div className="md:hidden">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-slate-700"
            >
              Check my RFQ
            </a>
          </div>
        </nav>
        {/* HERO */}
        <header className="py-10 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900 mr-2" />
              <span className="text-[11px] font-medium text-slate-700">
                Ti rispondiamo in poche ore · Kit consegnato in 48–72h
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
              Your next export RFQ,<br />in clear and buyer-ready English
            </h1>
            <p className="text-sm md:text-base text-slate-600 mb-6 max-w-xl">
              We help Italian industrial companies reply to foreign RFQs, quote requests and follow-ups
              in clear, credible English — the kind that procurement teams can approve quickly.
              Delivered within 48–72 hours. Not a translation service.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-700 w-full sm:w-auto justify-center"
              >
                Check my RFQ
              </a>
              <a
                href="#whats-included"
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                See what's included →
              </a>
            </div>
            <p className="text-[11px] text-slate-500">
              Send a recent RFQ or quote email and we'll tell you if it's a good fit for the pilot.
            </p>
          </div>
        </header>
        {/* PROBLEM */}
        <section id="problem" className="py-10 border-t border-slate-200/80">
          <div className="max-w-3xl">
            <h2 className="text-base font-semibold text-slate-900 mb-3">
              A strong product is not enough if the reply loses the deal
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Italian industrial companies that sell abroad often run into this:
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                <span>
                  A foreign buyer sends an RFQ. You know exactly what to offer — but writing a clear, structured reply in English takes time and feels uncertain.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                <span>
                  The reply goes out with phrases that sound translated, technical terms that are inconsistent, or a structure that is hard to follow for a procurement team.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                <span>
                  The buyer asks for clarifications that could have been avoided. Or they move on to a supplier whose documents were easier to read and approve.
                </span>
              </li>
            </ul>
            <p className="text-sm text-slate-600 mt-4">
              The problem is not your English. The problem is that active export deals require communication that is buyer-ready — clear, structured and easy for the other side to say yes to.
            </p>
          </div>
        </section>
        {/* SOLUTION */}
        <section id="solution" className="py-10 border-t border-slate-200/80">
          <div className="max-w-4xl">
            <h2 className="text-base font-semibold text-slate-900 mb-3">
              Focused support for active export negotiations
            </h2>
            <p className="text-sm text-slate-600 mb-5">
              RFQ Reply Kit – Export is not a translation service and not a writing course.
              It is operational support tied directly to a real RFQ or quote you need to answer.
            </p>
            <p className="text-sm text-slate-600 mb-6">
              You send us the RFQ, your draft reply and the key commercial and technical points.
              We prepare a complete set of clear, buyer-ready English documents — ready for you to review and send.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Tied to a real deal
                </h3>
                <p className="text-sm text-slate-600">
                  We work only on active RFQs and quote requests. No hypothetical scenarios, no generic marketing material.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Buyer-ready, not just correct
                </h3>
                <p className="text-sm text-slate-600">
                  The output is structured for procurement teams — clear, credible and easy to approve without back-and-forth.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Delivered in 48–72 hours
                </h3>
                <p className="text-sm text-slate-600">
                  Full kit delivered within 48–72 hours once all required material is received and confirmed.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-10 border-t border-slate-200/80">
          <div className="max-w-4xl">
            <h2 className="text-base font-semibold text-slate-900 mb-6">
              How it works
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
                <span className="text-[11px] font-medium text-slate-500 mb-1">
                  Step 1
                </span>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  You send the RFQ
                </h3>
                <p className="text-sm text-slate-600 flex-1">
                  Share the RFQ or quote request from the buyer, any existing draft reply, and the key technical and commercial points.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
                <span className="text-[11px] font-medium text-slate-500 mb-1">
                  Step 2
                </span>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  We check fit
                </h3>
                <p className="text-sm text-slate-600 flex-1">
                  Quick check that the RFQ is suitable for the pilot. We clarify timing, scope and any open questions before starting.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
                <span className="text-[11px] font-medium text-slate-500 mb-1">
                  Step 3
                </span>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  We prepare the kit
                </h3>
                <p className="text-sm text-slate-600 flex-1">
                  RFQ reply, quote cover, follow-ups, one-pager and technical glossary — all in clear, buyer-ready English. Delivered within 48–72 hours.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
                <span className="text-[11px] font-medium text-slate-500 mb-1">
                  Step 4
                </span>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  You review and send
                </h3>
                <p className="text-sm text-slate-600 flex-1">
                  Review internally. One consolidated revision round if needed. Then send the final version directly to the buyer.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* WHAT'S INCLUDED */}
        <section id="whats-included" className="py-10 border-t border-slate-200/80">
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-base font-semibold text-slate-900 mb-3">
                  RFQ Reply Kit – Export (Pilot)
                </h2>
                <p className="text-sm text-slate-600 mb-5">
                  For one real RFQ or active quote request in English.
                </p>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  What's included:
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>RFQ reply email in English — clear, structured, easy for the buyer to read and act on.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>Quote cover email — a short, professional introduction to the offer being sent.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>2 follow-up emails — for after the quote is sent (check-in and final nudge).</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>Company capabilities one-pager in English — a concise document presenting your company and relevant capabilities for this RFQ.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>Base technical glossary — 15–30 key terms in clear, consistent export English.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>1 consolidated revision round within 7 calendar days of delivery.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>Delivery in editable format (Word / Google Docs), ready to send.</span>
                  </li>
                </ul>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  What this is not:
                </h3>
                <p className="text-sm text-slate-600">
                  Not a general translation service. Not website copy or marketing brochures. Not legal or contractual drafting. The focus is only on active RFQs, quotes and follow-ups.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-[11px] font-medium text-slate-500 mb-1">Come funziona</p>
                  <p className="text-lg font-semibold text-slate-900 mb-1">Parliamo del tuo caso</p>
                  <p className="text-[11px] text-slate-500 mb-4">Raccontaci la tua situazione. Ti rispondiamo in poche ore con una valutazione chiara e i prossimi passi.</p>
                  <ul className="space-y-2 text-[11px] text-slate-600 mb-5">
                    <li className="flex gap-2">
                      <span className="text-slate-400">—</span>
                      <span>Risposta in poche ore dalla ricezione della richiesta</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-slate-400">—</span>
                      <span>Kit consegnato entro 48–72h dal ricevimento del materiale</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-slate-400">—</span>
                      <span>RFQ e documenti trattati come strettamente confidenziali</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-slate-400">—</span>
                      <span>NDA disponibile su richiesta prima di condividere qualsiasi documento</span>
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-3 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                  >
                    Parliamo del tuo caso
                  </a>
                  <p className="mt-3 text-[11px] text-slate-500">
                    Nessun impegno. Ti valutiamo la richiesta e ti diciamo subito se possiamo aiutarti.
                  </p>
                </div>
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
                  Who is this for?
                </h3>
                <p className="text-sm text-slate-600">
                  Italian industrial and technical B2B companies that already sell abroad or are actively pursuing foreign buyers — and need to answer RFQs, quotes and follow-ups in clear, credible English tied to a real deal.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Is this a translation service?
                </h3>
                <p className="text-sm text-slate-600">
                  No. The focus is on making your export communication buyer-ready — clear, structured and easy for procurement teams to read and approve. This is operational support for active deals, not a language or translation service.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  What do I need to send you?
                </h3>
                <p className="text-sm text-slate-600">
                  The RFQ or quote request from the buyer, any existing draft reply you have, key technical documents or specs, and the main commercial points (pricing logic, lead times, conditions). A single main contact who can answer quick questions quickly.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  How do you handle confidential documents?
                </h3>
                <p className="text-sm text-slate-600">
                  All RFQs, offers and technical documents are treated as strictly confidential. Material is used only to prepare your kit and is never shared with third parties. We can sign your standard NDA before you send anything sensitive. Documents can be deleted on request after the project is completed.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  When does the 48–72h clock start?
                </h3>
                <p className="text-sm text-slate-600">
                  The countdown starts once all required material has been received and confirmed. If something is missing or unclear, we flag it immediately so there are no delays.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  What if I need changes after delivery?
                </h3>
                <p className="text-sm text-slate-600">
                  One consolidated revision round is included, within 7 calendar days of first delivery. All feedback should be sent together in one go. Additional revisions or major scope changes are quoted separately.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT FORM */}
        <section id="contact" className="py-14 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">
                Parliamo del tuo caso
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Raccontaci la situazione — che tipo di RFQ hai ricevuto, da che paese, entro quando devi rispondere. Nessun impegno.
              </p>
              <p className="text-sm text-slate-600 mb-2">
                Ti rispondiamo in poche ore con:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-4">
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>Una valutazione chiara se possiamo aiutarti con questa richiesta.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>Cosa ci serve da te per partire e in che tempi.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>Il passo successivo concreto, incluso NDA se necessario.</span>
                </li>
              </ul>
              <p className="text-[11px] text-slate-500">
                Kit consegnato entro 48–72h dal ricevimento del materiale completo.
              </p>
            </div>
            <div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Descrivi la tua situazione
                </h3>
                <p className="text-[11px] text-slate-500 mb-3">Ti rispondiamo in poche ore.</p>
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
                      className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
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
                      className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Describe your situation
                    </label>
                    <textarea
                      name="situation"
                      value={formData.situation}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 resize-none"
                      placeholder="e.g. We received an RFQ from a German buyer last week. We have a draft reply but it needs to be clearer and more structured before we send it."
                      required
                    />
                    <p className="mt-1 text-[11px] text-slate-500">
                      Type of RFQ, country of the buyer, when you need to reply — anything that helps us understand the situation.
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Check my RFQ"}
                  </button>
                  <p className="text-[11px] text-slate-500">
                    Compilando questo form accetti di essere ricontattato in merito alla tua richiesta. Le informazioni sono trattate come strettamente confidenziali.
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
                      Esaminiamo la tua richiesta e ti rispondiamo in poche ore.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="border-t border-slate-200/80 py-5 mt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span>© {new Date().getFullYear()} RFQ Reply Kit – Export.</span>
              <span>All rights reserved.</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <a
                href="/privacy"
                className="text-slate-600 hover:text-slate-900 font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="mailto:founder@saaspipelinestudio.com"
                className="text-slate-700 hover:text-slate-900 font-medium"
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
