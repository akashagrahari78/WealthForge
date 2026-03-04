import React from "react";

const Privacy = () => {
  return (
    <main className="mx-auto w-[92%] max-w-4xl py-10 text-black">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-2 text-black/70">
          This Privacy Policy explains how we collect, use, disclose, and
          protect your personal information when you use our website, submit our
          contact form, or book a consultation.
        </p>
        <p className="mt-1 text-black/70">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Who we are</h2>
          <p className="mt-2 text-black/80">
            <span className="font-medium">Pragya Financial Services</span> (“we”,
            “us”, or “our”) provides financial‑advisory services. If you have
            questions about this policy, contact us at
            {" "}
            <a href="mailto:hello@example.com" className="underline">
              hello@example.com
            </a>
            {" "}
            or by mail at 123 Example Street, City, State, PIN.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Scope</h2>
          <p className="mt-2 text-black/80">
            This policy applies to information collected through our website,
            emails, and scheduling tools (e.g., Cal.com), and does not cover
            third‑party sites that we do not control.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Information we collect</h2>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1">
            <li>
              Contact details: name, email, phone, and message submitted via our
              contact form.
            </li>
            <li>
              Scheduling details: name, email, time zone, selected slot, and
              meeting preferences when you book via Cal.com.
            </li>
            <li>
              Technical data: IP address, device/browser information, and
              basic analytics (e.g., pages visited) collected via cookies or
              similar technologies.
            </li>
            <li>
              Optional documents or data you voluntarily share for advisory
              discussions (e.g., goals, risk profile). Do not upload account
              numbers, passwords, or sensitive IDs through the website forms.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">How we use your information</h2>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1">
            <li>Respond to inquiries and provide requested services.</li>
            <li>Schedule, confirm, and conduct consultations.</li>
            <li>Improve site performance and user experience.</li>
            <li>
              Send administrative communications (e.g., confirmations, reminders,
              or important updates).
            </li>
            <li>Maintain records for compliance and internal audit.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Legal bases (where applicable)</h2>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1">
            <li>Consent (when you submit forms or book a call).</li>
            <li>
              Contractual necessity (to deliver consultations you request).
            </li>
            <li>Legitimate interests (to operate and secure our services).</li>
            <li>
              Legal obligations (to meet record‑keeping or regulatory duties).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Cookies and analytics</h2>
          <p className="mt-2 text-black/80">
            We may use essential cookies and basic analytics to understand site
            usage and enhance functionality. You can control cookies via your
            browser settings. Disabling certain cookies may impact site
            features.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Sharing your information</h2>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1">
            <li>
              Service providers that help us operate the website or deliver
              scheduling and communications (e.g., Cal.com, email providers,
              video‑meeting tools).
            </li>
            <li>
              Professional advisors (e.g., legal or compliance consultants) under
              confidentiality.
            </li>
            <li>
              Authorities when required by law, regulation, or valid legal
              process.
            </li>
          </ul>
          <p className="mt-2 text-black/80">
            We do not sell your personal information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Data retention</h2>
          <p className="mt-2 text-black/80">
            We keep personal information only as long as necessary for the
            purposes outlined in this policy, and to the extent required by
            applicable laws and regulations. When no longer needed, we delete or
            anonymize the data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Security</h2>
          <p className="mt-2 text-black/80">
            We implement reasonable technical and organizational safeguards,
            including access controls and encryption where appropriate. No method
            of transmission or storage is 100% secure; please share only what is
            necessary for your request.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Your rights</h2>
          <p className="mt-2 text-black/80">
            Depending on your jurisdiction, you may have rights to access,
            correct, update, or delete your personal information, object to or
            restrict certain processing, and withdraw consent. To exercise your
            rights, contact us at
            {" "}
            <a href="mailto:hello@example.com" className="underline">
              hello@example.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">International transfers</h2>
          <p className="mt-2 text-black/80">
            Our service providers may process data in other countries. Where
            required, we take appropriate steps to ensure adequate protection in
            line with applicable data‑protection laws.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Children’s privacy</h2>
          <p className="mt-2 text-black/80">
            Our services are not directed to children under 18, and we do not
            knowingly collect personal information from children. If you believe
            a child has provided information, contact us to request deletion.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Third‑party links</h2>
          <p className="mt-2 text-black/80">
            Our website may contain links to external sites or tools we do not
            control. Their privacy practices are governed by their own policies.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Changes to this policy</h2>
          <p className="mt-2 text-black/80">
            We may update this policy periodically. We will post the latest
            version on this page and revise the “Last updated” date above.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Contact us</h2>
          <p className="mt-2 text-black/80">
            For questions or requests, email
            {" "}
            <a href="mailto:hello@example.com" className="underline">
              hello@example.com
            </a>
            {" "}
            or write to: Privacy Officer, Pragya Financial Services, 123 Example
            Street, City, State, PIN.
          </p>
        </div>

        <hr className="my-6 border-gray-200" />

        <p className="text-xs text-black/60">
          Disclaimer: This policy is a general template for a financial‑advisory
          website and does not constitute legal advice. Your obligations may vary
          under laws such as India’s DPDP Act, the GDPR, or other regulations.
          Consult qualified counsel to tailor this document to your business.
        </p>
      </section>
    </main>
  );
};

export default Privacy;
