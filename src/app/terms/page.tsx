import Footer from '@/components/footer/footer'

export default function TermsOfService() {
  return (
    <>
      <main className="relative z-[1] overflow-x-hidden bg-surface py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold text-white mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-white/70">
                These Terms of Service constitute a legally binding agreement made between you, the user, and Nate Butler. By accessing and using this website, you accept and agree to be bound by and abide by these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Use License
              </h2>
              <p className="text-white/70 mb-3">
                Permission is granted to temporarily download one copy of the materials (information or software) on our Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software on the Site</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Disclaimer
              </h2>
              <p className="text-white/70">
                The materials on our Site are provided on an "as is" basis. Nate Butler makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Limitations
              </h2>
              <p className="text-white/70">
                In no event shall Nate Butler or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Accuracy of Materials
              </h2>
              <p className="text-white/70">
                The materials appearing on our Site could include technical, typographical, or photographic errors. Nate Butler does not warrant that any of the materials on our Site are accurate, complete, or current. Nate Butler may make changes to the materials contained on our Site at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Links
              </h2>
              <p className="text-white/70">
                Nate Butler has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Nate Butler of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Modifications
              </h2>
              <p className="text-white/70">
                Nate Butler may revise these terms of service for our Site at any time without notice. By using this Site, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Governing Law
              </h2>
              <p className="text-white/70">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-white/70">
                If you have any questions about these Terms of Service, please contact us at nate.butler.clt@outlook.com
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
