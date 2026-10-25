import config from "../../config.json";

export const HomeComponent = () => {
  const { personalInfo } = config;

  return (
    <main className="portfolio-shell">
      <div className="portfolio-frame">
        <header className="topline">
          <span className="topline-mark" aria-label="Prateek">Prateek</span>
          <div className="topline-links">
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noreferrer"
            >
              gh
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              x
            </a>
            <a href={`mailto:${personalInfo.email}`}>email</a>
          </div>
        </header>

        <article className="story" aria-label="About me">
          <p className="eyebrow">A story in progress</p>
          <p>
            I&apos;m Prateek Jain, a <strong>Senior Product Engineer</strong>, frontend-focused by craft. I care about the small details people notice when they go wrong.
          </p>
          <blockquote className="story-quote">
            “I keep making things because I can&apos;t quite help it.”
          </blockquote>
          <p>
            <span className="story-turn">The present:</span> I&apos;m the solo founder of{" "}
            <a href="https://hookflo.com/" target="_blank" rel="noreferrer"><mark>Hookflo</mark></a>, which brings webhooks from 20+ platforms behind a single API. Think <em>OpenRouter, but for webhooks.</em> I&apos;m also the core maintainer of{" "}
            <a href="https://github.com/tern-tools/tern" target="_blank" rel="noreferrer"><mark>Tern</mark></a>{" "}
            and <a href="https://tern.hookflo.com/cli/" target="_blank" rel="noreferrer">Tern CLI</a> — open-source tools that make webhook verification and local development less of a headache.
          </p>
          <p>
            But Hookflo isn&apos;t the beginning of this story. For the past five years, almost every weekend has been another attempt to turn an idea into something real. <a href="https://flowaii.web.app/" target="_blank" rel="noreferrer">Textly AI</a> came first, when building on the OpenAI API was still new. Then <a href="https://deazyqr.vercel.app/" target="_blank" rel="noreferrer">DeazyQR</a>, with time-expiring dynamic QR codes and URL shortening. <a href="https://deazy-52098.web.app/" target="_blank" rel="noreferrer">Dineeazy</a> for restaurants. <a href="https://brokersify.in/" target="_blank" rel="noreferrer">Brokersify.in</a> in proptech. <a href="https://zipout.in/" target="_blank" rel="noreferrer">Zipout.in</a>, a consumer social product.
          </p>
          <p>
            Different ideas, different industries, and a few things that never quite found their place in the world. But every attempt left something behind: the experience, the mistakes, the instinct for what to build next. In ways I couldn&apos;t have seen then, they all led me here.
          </p>
          <p>
            <span className="story-turn">Meanwhile, by day:</span> my work has another kind of puzzle — the experience people have when they use a product. Ever noticed an ecommerce carousel that no longer feels cramped, or a page that stays put instead of jumping around as it loads? While at TCS, I worked on exactly these kinds of details for <mark className="interest-mark">Best Buy</mark>. I love making the journey through a product feel seamless, from the first interaction to the last.
          </p>
          <p>
            That work reached beyond the screen: Core Web Vitals improvements reduced CLS by 50% and LCP by 30% on key pages. I also engineered an A/B/n testing framework with feature flags and Optimizely, cutting development effort by 60% and saving an estimated $40K a year.
          </p>
          <p>
            I like working at both ends of the problem: the tiny interaction that makes a product feel right, and the bigger system that makes it work at scale. The code matters, but so does the reason for writing it.
          </p>
          <p>
            When I&apos;m away from a screen, I&apos;m usually making <mark className="interest-mark">art</mark>, listening to <mark className="interest-mark">music</mark>, playing <mark className="interest-mark">Valorant</mark>, or taking the longer route on a <mark className="interest-mark">cycling ride</mark>. There&apos;s always another idea somewhere. I&apos;ve learned by now that I&apos;ll probably end up trying to build it. If that sounds like your kind of story, <a href={`mailto:${personalInfo.email}`}>write to me</a>.
          </p>
        </article>

        <footer className="footer-line">
          <span>{personalInfo.location} · IST</span>
          <span className="footer-links">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </span>
        </footer>
      </div>
    </main>
  );
};
