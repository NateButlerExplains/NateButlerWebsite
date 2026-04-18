import Footer from '@/components/footer/footer'

export default function PrivacyPolicy() {
  return (
    <>
      <main className="relative z-[1] overflow-x-hidden bg-surface py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold text-white mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Introduction
              </h2>
              <p className="text-white/70">
                Nate Butler ("we," "us," "our," or "Company") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-white/70 mb-3">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Name and email address from booking inquiries</li>
                <li>Usage data and analytics through cookies and similar technologies</li>
                <li>Device information (browser type, IP address, operating system)</li>
                <li>Communication preferences when you contact us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-white/70 mb-3">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Process your booking and event inquiries</li>
                <li>Email you regarding your account or booking</li>
                <li>Improve our website and services</li>
                <li>Monitor and analyze usage patterns</li>
                <li>Respond to your comments or inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Disclosure of Your Information
              </h2>
              <p className="text-white/70">
                We may share your information only when required by law or to protect our rights. We do not sell, trade, or rent your personal identification information to third parties without your prior consent, except as necessary to complete your booking request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Security of Your Information
              </h2>
              <p className="text-white/70">
                We implement appropriate technical and organizational measures to maintain the security of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-white/70">
                If you have questions or comments about this Privacy Policy, please contact us at nate.butler.clt@outlook.com
              </p>
            </section>

            <p className="text-white/50 text-sm mt-8">
              Last Updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
