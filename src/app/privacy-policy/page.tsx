"use client";

import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";

const PRIVACY_SECTIONS = [
  {
    title: "Privacy Notice.",
    content: [
      "This is the privacy notice of Kota Creative Ltd. In this document, \"we\", \"our\", or \"us\" refer to Kota Creative Ltd.",
      "We are company number 08825077 registered in London.",
      "Our registered office is at 124 City Road, London, England, EC1V 2NX.",
    ],
  },
  {
    title: "Introduction.",
    content: [
      "This is a notice to inform you of our policy about all information that we record about you. It sets out the conditions under which we may process any information that we collect from you, or that you provide to us. It covers information that could identify you (\"personal information\") and information that could not. In the context of the law and this notice, \"process\" means collect, store, transfer, use or otherwise act on information.",
      "We take seriously the protection of your privacy and confidentiality. We understand that all visitors to our website are entitled to know that their personal data will not be used for any purpose unintended by them, and will not accidentally fall into the hands of a third party.",
      "Our policy complies with UK law accordingly implemented, including that required by the EU General Data Protection Regulation (GDPR).",
      "Except as set out below, we do not share, or sell, or disclose to a third party, any information collected through our website.",
    ],
  },
  {
    title: "Information we process because we have a contractual obligation with you.",
    content: [
      "When you create an account on our website, buy a product or service from us, or otherwise agree to our terms and conditions, a contract is formed between you and us.",
      "In order to carry out our obligations under that contract we must process the information you give us. Some of this information may be personal information.",
      "We may use it in order to: verify your identity for security purposes; sell products to you; provide you with our services; provide you with suggestions and advice on products, services and how to obtain the most from using our website.",
      "We process this information on the basis there is a contract between us, or that you have requested we use the information before we enter into a legal contract.",
    ],
  },
  {
    title: "Information we process with your consent.",
    content: [
      "Through certain actions when otherwise there is no contractual relationship between us, such as when you browse our website or ask us to provide you more information about our business, including our products and services, you provide your consent to us to process information that may be personal information.",
      "Wherever possible, we aim to obtain your explicit consent to process this information, for example, by asking you to agree to our use of cookies.",
      "If you have given us explicit permission to do so, we may from time to time pass your name and contact information to selected associates whom we consider may provide services or products you would find useful.",
    ],
  },
  {
    title: "Information we process for the purposes of legitimate interests.",
    content: [
      "We may process information on the basis there is a legitimate interest, either to you or to us, of doing so.",
      "Where we process your information on this basis, we do after having given careful consideration to: whether the same objective could be achieved through other means; whether processing (or not processing) might cause you harm; whether you would expect us to process your data, and whether you would, in the round, consider it reasonable to do so.",
    ],
  },
  {
    title: "Information we process because we have a legal obligation.",
    content: [
      "We are subject to the law like everyone else. Sometimes, we must process your information in order to comply with a statutory obligation.",
      "For example, we may be required to give information to legal authorities if they so request or if they have the proper authorisation such as a search warrant or court order.",
    ],
  },
  {
    title: "Cookies.",
    content: [
      "Cookies are small text files that are placed on your computer's hard drive by your web browser when you visit any website. They allow information gathered on one web page to be stored until it is needed for use on another, allowing a website to provide you with a personalised experience and the website owner with statistics about how you use the website so that it can be improved.",
      "Our website uses cookies. They are placed by software that operates on our servers, and by software operated by third parties whose services we use.",
      "When you first visit our website, we ask you whether you wish us to use cookies.",
    ],
  },
  {
    title: "Access to your own information.",
    content: [
      "At any time you may review or update personally identifiable information that we hold about you, by signing in to your account on our website.",
      "To obtain a copy of any information that is not provided on our website you may send us a request at hello@kotacreative.co.uk.",
      "After receiving the request, we will tell you when we expect to provide you with the information, and whether we require any fee for providing it to you.",
    ],
  },
  {
    title: "Removal of your information.",
    content: [
      "If you wish us to remove personally identifiable information from our website, you may contact us at hello@kota.co.uk.",
      "This may limit the service we can provide to you.",
    ],
  },
  {
    title: "Retention period for personal data.",
    content: [
      "Except as otherwise mentioned in this privacy notice, we keep your personal information only for as long as required by us: to provide you with the services you have requested; to comply with other law, including for the period demanded by our tax authorities; to support a claim or defence in court.",
    ],
  },
  {
    title: "Review of this privacy policy.",
    content: [
      "We may update this privacy notice from time to time as necessary. The terms that apply to you are those posted here on our website on the day you use our website. We advise you to print a copy for your records.",
      "If you have any question regarding our privacy policy, please contact us.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main style={{ background: "#efefef", color: "#000", minHeight: "100vh" }}>
      <Header />

      {/* Hero */}
      <section
        style={{
          background: "#efefef",
          color: "#000",
          paddingTop: "8rem",
          paddingBottom: "4rem",
        }}
      >
        <div style={containerStyle}>
          <FadeIn>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                lineHeight: 1,
                fontWeight: 400,
                color: "#000",
              }}
            >
              Privacy Policy
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#efefef", color: "#000", paddingBottom: "6rem" }}>
        <div style={containerStyle}>
          <div style={{ maxWidth: "50rem" }}>
            {PRIVACY_SECTIONS.map((section, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div style={{ marginBottom: "3rem" }}>
                  <h2
                    style={{
                      fontSize: "clamp(1.5rem, 2vw, 2rem)",
                      fontWeight: 600,
                      color: "#000",
                      marginBottom: "1.5rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {section.title}
                  </h2>
                  {section.content.map((paragraph, j) => (
                    <p
                      key={j}
                      style={{
                        fontSize: "1.0625rem",
                        lineHeight: 1.7,
                        color: "rgba(0,0,0,0.7)",
                        marginBottom: "1rem",
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
