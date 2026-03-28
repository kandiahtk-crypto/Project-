import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for UK Inbound Ground Transport.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main style={container}>
      <p style={eyebrow}>Legal</p>
      <h1 style={title}>Terms &amp; Conditions</h1>
      <p style={updated}>Last updated: 2026</p>

      <section style={section}>
        <h2 style={heading}>Website use</h2>
        <p style={text}>
          By accessing this website, you agree to use it lawfully and in a way
          that does not infringe the rights of others or restrict their use of
          the site.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Information on this website</h2>
        <p style={text}>
          Content on this website is provided for general information only. We
          aim to keep information accurate and up to date, but we do not
          guarantee completeness, accuracy or suitability for any specific
          purpose.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Service enquiries and proposals</h2>
        <p style={text}>
          Any enquiry, response, proposal or quotation provided through this
          website is subject to review, availability, operational feasibility
          and any separate commercial terms agreed between the parties.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Intellectual property</h2>
        <p style={text}>
          Unless otherwise stated, website content including text, design and
          branding is owned by or licensed to UK Inbound Ground Transport and
          must not be reproduced without permission.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Links to third-party services</h2>
        <p style={text}>
          Our website may include links to third-party websites or services. We
          are not responsible for the content, availability or policies of
          third-party websites.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Liability</h2>
        <p style={text}>
          To the fullest extent permitted by law, we exclude liability for loss
          or damage arising from use of this website or reliance on its content.
          Nothing in these Terms seeks to exclude liability that cannot lawfully
          be excluded.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Changes</h2>
        <p style={text}>
          We may update these Terms &amp; Conditions at any time without prior
          notice. Continued use of the website indicates acceptance of the
          updated terms.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Contact</h2>
        <p style={text}>
          Questions regarding these Terms &amp; Conditions can be sent through
          our contact page or by email at info@ukinboundgroundtransport.com.
        </p>
      </section>
    </main>
  );
}

const container: CSSProperties = {
  maxWidth: 920,
  margin: "0 auto",
  padding: "48px 24px 90px",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#5B7C99",
};

const title: CSSProperties = {
  margin: "12px 0 10px",
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  lineHeight: 1.04,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  color: "#10263C",
};

const updated: CSSProperties = {
  margin: "0 0 32px",
  fontSize: 14,
  color: "rgba(16,38,60,0.58)",
};

const section: CSSProperties = {
  marginBottom: 34,
};

const heading: CSSProperties = {
  margin: "0 0 12px",
  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
  fontWeight: 700,
  color: "#10263C",
};

const text: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(16,38,60,0.78)",
};
