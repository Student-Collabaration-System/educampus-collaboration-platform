import { Card, CardContent } from "../components/ui/card";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4">Terms of Service</h1>
          <p className="text-lg text-slate-200">
            Last updated: October 20, 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-6">
          <CardContent className="p-6 space-y-6">
            <section>
              <h3 className="mb-3">1. Acceptance of Terms</h3>
              <p className="text-sm text-muted-foreground">
                By accessing or using EduCampus, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this platform.
              </p>
            </section>

            <section>
              <h3 className="mb-3">2. Description of Service</h3>
              <p className="text-sm text-muted-foreground">
                EduCampus provides a collaborative learning platform for students to form study groups, share educational resources, and communicate with peers. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
              </p>
            </section>

            <section>
              <h3 className="mb-3">3. User Accounts</h3>
              <p className="text-sm text-muted-foreground mb-2">When creating an account, you agree to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your password</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
                <li>Not share your account with others</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3">4. Acceptable Use Policy</h3>
              <p className="text-sm text-muted-foreground mb-2">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Post spam, malware, or malicious content</li>
                <li>Attempt to gain unauthorized access to the platform</li>
                <li>Use automated systems to access the service</li>
                <li>Impersonate others or provide false information</li>
                <li>Facilitate academic dishonesty or cheating</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3">5. Content Ownership and License</h3>
              <p className="text-sm text-muted-foreground mb-3">
                You retain ownership of any content you post on EduCampus. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content solely for the purpose of operating and improving the platform.
              </p>
              <p className="text-sm text-muted-foreground">
                You are responsible for ensuring you have the right to share any content you upload and that it does not violate copyright or other intellectual property rights.
              </p>
            </section>

            <section>
              <h3 className="mb-3">6. Academic Integrity</h3>
              <p className="text-sm text-muted-foreground">
                EduCampus is designed to facilitate collaborative learning, not academic dishonesty. Users must comply with their institution's academic integrity policies. We prohibit sharing answers to graded assignments or facilitating cheating in any form.
              </p>
            </section>

            <section>
              <h3 className="mb-3">7. Privacy</h3>
              <p className="text-sm text-muted-foreground">
                Your use of EduCampus is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h3 className="mb-3">8. Termination</h3>
              <p className="text-sm text-muted-foreground">
                We reserve the right to suspend or terminate your account at any time for violations of these terms, suspicious activity, or any other reason we deem appropriate. You may also terminate your account at any time through your settings.
              </p>
            </section>

            <section>
              <h3 className="mb-3">9. Disclaimer of Warranties</h3>
              <p className="text-sm text-muted-foreground">
                EduCampus is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free. We are not responsible for the accuracy or quality of user-generated content.
              </p>
            </section>

            <section>
              <h3 className="mb-3">10. Limitation of Liability</h3>
              <p className="text-sm text-muted-foreground">
                To the maximum extent permitted by law, EduCampus and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.
              </p>
            </section>

            <section>
              <h3 className="mb-3">11. Indemnification</h3>
              <p className="text-sm text-muted-foreground">
                You agree to indemnify and hold harmless EduCampus from any claims, damages, losses, or expenses arising from your use of the platform, your content, or your violation of these terms.
              </p>
            </section>

            <section>
              <h3 className="mb-3">12. Modifications to Terms</h3>
              <p className="text-sm text-muted-foreground">
                We may revise these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms. Material changes will be communicated to users via email or platform notification.
              </p>
            </section>

            <section>
              <h3 className="mb-3">13. Governing Law</h3>
              <p className="text-sm text-muted-foreground">
                These terms shall be governed by and construed in accordance with the laws of the State of Massachusetts, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h3 className="mb-3">14. Contact Information</h3>
              <p className="text-sm text-muted-foreground">
                For questions about these Terms of Service, please contact us at legal@educampus.edu or visit our Contact Us page.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
