import { Card, CardContent } from "../components/ui/card";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-200">
            Last updated: October 20, 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-6">
          <CardContent className="p-6 space-y-6">
            <section>
              <h3 className="mb-3">1. Introduction</h3>
              <p className="text-sm text-muted-foreground">
                Welcome to EduCampus. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our student collaboration platform.
              </p>
            </section>

            <section>
              <h3 className="mb-3">2. Information We Collect</h3>
              <p className="text-sm text-muted-foreground mb-2">We collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Account information (name, email, username)</li>
                <li>Profile information (bio, avatar, academic interests)</li>
                <li>Study group participation and messages</li>
                <li>Uploaded resources and documents</li>
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3">3. How We Use Your Information</h3>
              <p className="text-sm text-muted-foreground mb-2">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Provide and maintain our services</li>
                <li>Enable collaboration between students</li>
                <li>Send notifications about group activity and events</li>
                <li>Improve and personalize your experience</li>
                <li>Ensure platform security and prevent misuse</li>
                <li>Communicate important updates and changes</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3">4. Data Sharing and Disclosure</h3>
              <p className="text-sm text-muted-foreground mb-2">
                We do not sell your personal information. We may share your data only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>With other students in your study groups (as necessary for collaboration)</li>
                <li>With service providers who assist in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3">5. Data Security</h3>
              <p className="text-sm text-muted-foreground">
                We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
              </p>
            </section>

            <section>
              <h3 className="mb-3">6. Your Rights and Choices</h3>
              <p className="text-sm text-muted-foreground mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Access and download your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Control your privacy settings</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3">7. Cookies and Tracking</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h3 className="mb-3">8. Children's Privacy</h3>
              <p className="text-sm text-muted-foreground">
                EduCampus is intended for students aged 13 and above. We do not knowingly collect information from children under 13. If we become aware of such collection, we will take steps to delete the information.
              </p>
            </section>

            <section>
              <h3 className="mb-3">9. International Data Transfers</h3>
              <p className="text-sm text-muted-foreground">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
              </p>
            </section>

            <section>
              <h3 className="mb-3">10. Changes to This Policy</h3>
              <p className="text-sm text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h3 className="mb-3">11. Contact Us</h3>
              <p className="text-sm text-muted-foreground">
                If you have questions about this privacy policy or how we handle your data, please contact us at privacy@educampus.edu or through our Contact Us page.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
