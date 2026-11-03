
export const metadata = {
  title: "Privacy Policy | Color Quest — Upanyas Games",
  description:
    "Privacy Policy for Color Quest, an offline puzzle game developed by Upanyas Games.",
};

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        Welcome to <strong>Color Quest</strong>, a puzzle game developed and
        published by <strong>Upanyas Games</strong> (&quot;we, &quot;our, or &quot;us).
        <p>
          We respect your privacy. Color Quest is designed as an offline mobile
          game. It does not require an account, registration, or connection to
          a remote game server. Your gameplay progress and settings are stored
          locally on your device.
        </p>
      </>
    ),
  },
  {
    title: "2. Offline Gameplay and Local Data Storage",
    content: (
      <>
        The following information is stored locally on your device:
        <ul>
          <li>Completed and unlocked game levels.</li>
          <li>Coins, coin balance, and coin history.</li>
          <li>Boosters, including Undo, Hint, and Shuffle.</li>
          <li>Remaining lives and current puzzle progress.</li>
          <li>Settings such as sound, vibration, theme, and color assistance.</li>
        </ul>
        This information is not transmitted to any game server operated by
        Upanyas Games. We do not operate a backend server, remote game database,
        or user account system for Color Quest.
        <p>
          Uninstalling the application or clearing its application data may
          permanently delete your saved progress. Android backup services may
          include application data depending on your device settings.
        </p>
      </>
    ),
  },
  {
    title: "3. Internet Connection and Advertising",
    content: (
      <>
        Although core gameplay works offline, an internet connection may be
        required to display advertisements.
        <p>
          Color Quest uses <strong>Google AdMob</strong>, a third-party
          advertising service provided by Google. When advertisements are
          requested or displayed, Google may process:
        </p>
        <ul>
          <li>Advertising identifiers, such as the Android Advertising ID.</li>
          <li>IP addresses and approximate geographical location.</li>
          <li>Device information and operating system details.</li>
          <li>Advertising interactions and engagement information.</li>
          <li>Technical diagnostics and fraud-prevention information.</li>
        </ul>
        This information is processed according to Google&apos;s privacy policies
        and applicable legal requirements.
        <p>
          Learn more:
        </p>
        <ul>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
              Google Advertising Technologies
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
              Google Partner Sites Policy
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Rewarded Advertisements",
    content: (
      <>
        Color Quest may offer optional rewarded video advertisements.
        You can voluntarily watch these advertisements to receive in-game
        rewards, such as additional lives or boosters.
        <ul>
          <li>Watching advertisements is optional.</li>
          <li>Core gameplay does not require watching advertisements.</li>
          <li>Rewarded advertisements require an internet connection.</li>
          <li>Rewards may not be available if an advertisement fails to load.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Third-Party Services",
    content: (
      <>
        Color Quest currently integrates Google AdMob for advertising purposes.
        We do not operate backend services, cloud databases, authentication
        systems, or remote gameplay synchronization services.
        <p>
          Google may process information independently according to its own
          privacy policies. We do not control the independent privacy practices
          of third-party providers.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Sharing and Selling",
    content: (
      <>
        Upanyas Games does not sell, rent, or trade users&apos; personal information.
        We do not upload or share locally stored gameplay progress, coins,
        boosters, or game settings with our own servers or other companies.
        <p>
          Google AdMob may process advertising-related information as described
          in this policy.
        </p>
      </>
    ),
  },
  {
    title: "7. Children's Privacy",
    content: (
      <>
        Color Quest is intended for a general audience and is not specifically
        directed at children under the age of 13.
        <p>
          We do not knowingly collect personal information directly from
          children through accounts, registration, or a remote game database.
          Advertising services may independently process device and
          advertising-related information.
        </p>
        <p>
          Where applicable, advertising and consent configurations will follow
          relevant children&apos;s privacy requirements and Google Play policies.
        </p>
      </>
    ),
  },
  {
    title: "8. Data Security",
    content: (
      <>
        Gameplay information is stored locally on your device and is not
        transmitted to a game server operated by Upanyas Games. We take
        reasonable steps to ensure that the application handles locally stored
        information appropriately.
        <p>
          However, no electronic storage method can guarantee absolute security.
          We recommend keeping your device&apos;s operating system updated.
        </p>
      </>
    ),
  },
  {
    title: "9. Advertising Privacy Choices",
    content: (
      <>
        Depending on your location and applicable privacy requirements, you
        may be asked to provide consent for advertising-related data processing.
        <p>
          Where required, Color Quest uses Google&apos;s consent management solution
          to collect and manage advertising consent.
        </p>
        You may review or change available advertising preferences through:
        <p>
          <strong>Color Quest → Settings → Ad Privacy Choices</strong>
        </p>
        You can also manage your Android Advertising ID through your device&apos;s
        privacy and advertising settings.
      </>
    ),
  },
  {
    title: "10. Your Privacy Rights",
    content: (
      <>
        Depending on your location and applicable privacy laws, you may have
        rights concerning personal information processed by third-party
        advertising services. These may include requesting access, correction,
        or deletion of applicable personal information and withdrawing consent
        where applicable.
        <p>
          Since Upanyas Games does not maintain a remote account system or
          gameplay database, locally stored game progress can generally be
          removed by clearing application data or uninstalling the application.
          For advertising-related information processed by Google, you may need
          to contact Google directly.
        </p>
      </>
    ),
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: (
      <>
        We may update this Privacy Policy when application features, advertising
        services, or applicable legal requirements change. Updated versions
        will be published at this same URL, with a revised Last Updated date.
        We encourage users to review this policy periodically.
      </>
    ),
  },
  {
    title: "12. Contact Information",
    content: (
      <>
        If you have questions or concerns regarding this Privacy Policy, please
        contact us:
        <ul>
          <li><strong>Developer:</strong> Upanyas Games</li>
          <li><strong>Application:</strong> Color Quest</li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:upanyasgames@gmail.com">
              upanyasgames@gmail.com
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function ColorQuestPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <article className="mx-auto max-w-3xl">
        <header className="mb-12 border-b pb-8">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            UPANYAS GAMES / LEGAL
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-3 text-lg text-muted-foreground">
            Color Quest
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Effective: November 3, 2026</span>
            <span>Last Updated: November 3, 2026</span>
          </div>
        </header>

        <div className="mb-10 rounded-xl border bg-muted/30 p-5">
          <p className="leading-7 text-muted-foreground">
            Color Quest is an offline puzzle game. Your game progress and
            settings remain on your device. The application uses Google AdMob
            for advertising when an internet connection is available.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="scroll-mt-20">
              <h2 className="mb-4 text-xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <div className="space-y-3 text-[15px] leading-7 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Upanyas Games. All rights reserved.</p>
          <p className="mt-2">Color Quest — Privacy Policy</p>
        </footer>
      </article>
    </main>
  );
}
