import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <a
          href="/"
          className="inline-flex items-center text-sm text-emerald-700 hover:text-emerald-800 mb-8"
        >
          ← Back to homepage
        </a>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-sm leading-7 text-slate-700">
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">
                1. Who we are
              </h2>
              <p>
                SaaS Pipeline Studio is a website used to present an outbound
                program for PPC agencies serving B2B SaaS companies.
              </p>
              <p className="mt-2">
                Contact:{" "}
                <a
                  href="mailto:founder@saaspipelinestudio.com"
                  className="text-emerald-700 hover:text-emerald-800 font-medium"
                >
                  founder@saaspipelinestudio.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">
                2. What data we collect
              </h2>
              <p>
                When you submit the contact form on this website, we may collect
                the following information:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Name</li>
                <li>Work email address</li>
                <li>Agency website</li>
                <li>Primary B2B SaaS ICP information</li>
                <li>Typical monthly PPC retainer range</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">
                3. Why we collect this data
              </h2>
              <p>We collect this information to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Review inbound audit requests</li>
                <li>Evaluate whether there is a fit for our offer</li>
                <li>Contact you regarding your request</li>
                <li>Improve how we present and qualify our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">
                4. How your data is processed
              </h2>
              <p>
                Form submissions on this website are processed through Formspree.
                Website hosting and deployment are handled through Vercel.
              </p>
              <p className="mt-2">
                These providers may process technical data required to deliver
                their services, such as request metadata, browser information,
                and form submission details.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">
                5. How long we keep your data
              </h2>
              <p>
                We keep submitted data only for as long as reasonably necessary
                to review requests, communicate with potential clients, and
                manage business inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">
                6. Sharing of data
              </h2>
              <p>
                We do not sell your personal data. We may share data only with
                service providers strictly necessary to operate the website and
                manage contact requests.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">
                7. Your rights
              </h2>
              <p>
                If you want to request access to, correction of, or deletion of
                your submitted data, you can contact us at:
              </p>
              <p className="mt-2">
                <a
                  href="mailto:founder@saaspipelinestudio.com"
                  className="text-emerald-700 hover:text-emerald-800 font-medium"
                >
                  founder@saaspipelinestudio.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">
                8. Contact
              </h2>
              <p>
                For any privacy-related question, you can contact:
              </p>
              <p className="mt-2">
                <a
                  href="mailto:founder@saaspipelinestudio.com"
                  className="text-emerald-700 hover:text-emerald-800 font-medium"
                >
                  founder@saaspipelinestudio.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;