import React from "react";

const Terms = () => {
  return (
    <main className="mx-auto w-[92%] max-w-4xl py-10 text-black">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">Terms and Conditions</h1>
        <p className="mt-2 text-black/70">
          These Terms and Conditions (“Terms”) govern your access to and use of the
          website and any related pages, forms, content, and booking functionality
          (collectively, the “Site”). By using the Site, you agree to these Terms.
          If you do not agree, please do not use the Site.
        </p>
        <p className="mt-1 text-black/70">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">1) Who we are</h2>
          <p className="mt-2 text-black/80">
            Pragya Financial Services (“we”, “us”, or “our”) provides financial‑advisory
            information and services. For questions about these Terms, contact us at{" "}
            <a href="mailto:hello@example.com" className="underline">hello@example.com</a>{" "}
            or by mail: 123 Example Street, City, State, PIN.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2) Eligibility and acceptable use</h2>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1">
            <li>You must be at least 18 years old and have legal capacity to agree to these Terms.</li>
            <li>Use the Site only for lawful purposes and in accordance with these Terms.</li>
            <li>Do not attempt to disrupt or interfere with the Site, its security, or other users.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3) No investment or legal advice</h2>
          <p className="mt-2 text-black/80">
            Content on the Site is for general information and education only and is not
            investment, legal, tax, or accounting advice. Decisions based on information
            from the Site are your responsibility. Personalized advice—if offered—will be
            delivered only under a separate written client agreement that sets out scope,
            fees, and regulatory disclosures.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4) Scheduling and third‑party tools</h2>
          <p className="mt-2 text-black/80">
            We may provide links and embeds (e.g., Cal.com) to book consultations or host
            meetings. These tools are operated by third parties and have their own terms
            and privacy policies. We are not responsible for third‑party availability,
            accuracy, or security. You should review any applicable third‑party terms
            before using those services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5) Accounts, security, and communications</h2>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1">
            <li>If you create an account or submit forms, you agree to provide accurate, current information.</li>
            <li>You are responsible for safeguarding any credentials and for activities under your account.</li>
            <li>We may contact you for administration (e.g., confirmations, reminders, updates). You can opt out of non‑essential marketing any time.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">6) Fees, cancellations, and refunds</h2>
          <p className="mt-2 text-black/80">
            If a consultation or service carries a fee, applicable pricing and refund/cancellation
            rules will be displayed at the time of booking or in a separate client agreement.
            By booking a paid service, you agree to those terms. Missed or late cancellations
            may be non‑refundable unless otherwise stated.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">7) Intellectual property</h2>
          <p className="mt-2 text-black/80">
            The Site and its content, including text, graphics, logos, and layouts, are owned
            by or licensed to us and are protected by law. You may not copy, modify, distribute,
            or create derivative works without our prior written permission, except for personal,
            non‑commercial viewing and printing.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">8) User content</h2>
          <p className="mt-2 text-black/80">
            If you submit content (e.g., messages or documents), you represent that you have the
            right to share it and that it contains no unlawful or infringing material. You grant us
            a limited license to use such content to respond to your request and provide services.
            Do not submit passwords, full account numbers, or highly sensitive IDs through public forms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">9) Third‑party links</h2>
          <p className="mt-2 text-black/80">
            Links to third‑party sites are provided for convenience. We do not endorse and are not
            responsible for third‑party content, security, or practices. Use them at your discretion.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">10) Disclaimer of warranties</h2>
          <p className="mt-2 text-black/80">
            The Site is provided “as is” and “as available” without warranties of any kind, whether
            express or implied, including merchantability, fitness for a particular purpose, title,
            and non‑infringement. We do not warrant that the Site will be uninterrupted, secure, or
            error‑free, or that defects will be corrected.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">11) Limitation of liability</h2>
          <p className="mt-2 text-black/80">
            To the maximum extent permitted by law, we are not liable for any indirect, incidental,
            special, consequential, or punitive damages, or for loss of profits, data, or goodwill,
            arising from or related to your use of the Site. In all cases, our total liability for any
            claim relating to the Site will not exceed INR 10,000 or the amount you paid to us for the
            service giving rise to the claim, whichever is greater.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">12) Indemnification</h2>
          <p className="mt-2 text-black/80">
            You agree to defend, indemnify, and hold us harmless from any claims, damages, liabilities,
            costs, and expenses (including reasonable legal fees) arising from your use of the Site, your
            violation of these Terms, or your infringement of any rights of a third party.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">13) Privacy</h2>
          <p className="mt-2 text-black/80">
            Your use of the Site is also subject to our{" "}
            <a href="/privacy" className="underline">Privacy Policy</a>, which explains how we collect,
            use, and protect personal information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">14) Termination</h2>
          <p className="mt-2 text-black/80">
            We may suspend or terminate your access to the Site at any time for any reason, including
            suspected violation of these Terms. Provisions that by their nature should survive termination
            (e.g., IP, disclaimers, limitations of liability, indemnification, and governing law) will survive.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">15) Governing law and disputes</h2>
          <p className="mt-2 text-black/80">
            These Terms are governed by the laws of India without regard to conflict‑of‑laws principles.
            Courts located in [Your City/State] will have exclusive jurisdiction. You agree to first attempt
            to resolve disputes informally by contacting us at{" "}
            <a href="mailto:hello@example.com" className="underline">hello@example.com</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">16) Changes to these Terms</h2>
          <p className="mt-2 text-black/80">
            We may update these Terms from time to time. The “Last updated” date will reflect the most
            recent changes. Continued use of the Site after changes means you accept the revised Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">17) Miscellaneous</h2>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1">
            <li>Severability: If any provision is found unenforceable, the remainder will remain in effect.</li>
            <li>Waiver: Our failure to enforce a provision is not a waiver of our right to do so later.</li>
            <li>Entire Agreement: These Terms constitute the entire agreement regarding your Site use.</li>
            <li>Electronic Communications: You consent to receive communications electronically.</li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200" />

        <div>
          <h2 className="text-xl font-semibold">Contact us</h2>
          <p className="mt-2 text-black/80">
            For questions about these Terms, email{" "}
            <a href="mailto:hello@example.com" className="underline">hello@example.com</a>{" "}
            or write to: Terms Administrator, Pragya Financial Services, 123 Example Street, City, State, PIN.
          </p>
        </div>

        <p className="text-xs text-black/60">
          Disclaimer: This page provides general terms for a financial‑advisory website and does not
          constitute legal advice. Your obligations may vary under applicable laws and regulations.
          Seek professional advice to tailor these Terms to your business.
        </p>
      </section>
    </main>
  );
};

export default Terms;
