export interface BlogPost {
  slug: string;
  title: string;
  tags: string[];
  excerpt: string;
  date: string;
}

function slugToTitle(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bAnd\b/g, "and")
    .replace(/\bOf\b/g, "of")
    .replace(/\bFor\b/g, "for")
    .replace(/\bThe\b/g, "the")
    .replace(/\bTo\b/g, "to")
    .replace(/\bIn\b/g, "in")
    .replace(/\bIs\b/g, "is")
    .replace(/\bA\b/g, "a")
    .replace(/\bAn\b/g, "an")
    .replace(/\bOn\b/g, "on")
    .replace(/\bAt\b/g, "at")
    .replace(/\bBy\b/g, "by")
    .replace(/\bOr\b/g, "or")
    .replace(/\bWith\b/g, "with")
    .replace(/\bFrom\b/g, "from")
    .replace(/\bYour\b/g, "Your")
    .replace(/\bYou\b/g, "You")
    .replace(/\bIts\b/g, "Its")
    .replace(/\bIt\b/g, "It")
    .replace(/\bHow\b/g, "How")
    .replace(/\bWhat\b/g, "What")
    .replace(/\bWhen\b/g, "When")
    .replace(/\bWhy\b/g, "Why")
    .replace(/\bDo\b/g, "do")
    .replace(/\bCan\b/g, "can")
    .replace(/\bDoes\b/g, "does")
    .replace(/\bAre\b/g, "are")
    .replace(/\bBe\b/g, "be")
    .replace(/\bWe\b/g, "We")
    .replace(/\bUs\b/g, "Us")
    .replace(/\bOur\b/g, "Our")
    .replace(/\bHer\b/g, "her")
    .replace(/\bHis\b/g, "his")
    .replace(/\bHas\b/g, "has")
    .replace(/\bHad\b/g, "had")
    .replace(/\bWas\b/g, "was")
    .replace(/\bWere\b/g, "were")
    .replace(/\bNot\b/g, "not")
    .replace(/\bBut\b/g, "but")
    .replace(/\bIf\b/g, "if")
    .replace(/\bNo\b/g, "no")
    .replace(/\bSo\b/g, "so")
    .replace(/\bUp\b/g, "up")
    .replace(/\bOut\b/g, "out")
    .replace(/\bOff\b/g, "off")
    .replace(/\bOver\b/g, "over")
    .replace(/\bUnder\b/g, "under")
    .replace(/\bAfter\b/g, "after")
    .replace(/\bBefore\b/g, "before")
    .replace(/\bBetween\b/g, "between")
    .replace(/\bAbout\b/g, "about")
    .replace(/\bInto\b/g, "into")
    .replace(/\bThrough\b/g, "through")
    .replace(/\bDuring\b/g, "during")
    .replace(/\bWithout\b/g, "without")
    .replace(/\bAround\b/g, "around")
    .replace(/\bAbove\b/g, "above")
    .replace(/\bBelow\b/g, "below")
    .replace(/\bVs\.?/g, "vs.")
    .replace(/\bGa4\b/g, "GA4")
    .replace(/\bSeo\b/g, "SEO")
    .replace(/\bUx\b/g, "UX")
    .replace(/\bUi\b/g, "UI")
    .replace(/\bCta\b/g, "CTA")
    .replace(/\bB2b\b/g, "B2B")
    .replace(/\bB2c\b/g, "B2C")
    .replace(/\bAi\b/g, "AI")
    .replace(/\bSaas\b/g, "SaaS")
    .replace(/\bE-?commerce\b/g, "E-commerce")
    .replace(/\bCms\b/g, "CMS")
    .replace(/\bKota\b/g, "Blackstone Media")
    .replace(/\bTiktok\b/g, "TikTok")
    .replace(/\bInstagram\b/g, "Instagram")
    .replace(/\bLinkedIn\b/g, "LinkedIn")
    .replace(/\bShopify\b/g, "Shopify")
    .replace(/\bWordPress\b/g, "WordPress")
    .replace(/\bFigma\b/g, "Figma")
    .replace(/\bAdobe\b/g, "Adobe")
    .replace(/\bXd\b/g, "XD")
    .replace(/\bCssda\b/g, "CSSDA")
    .replace(/\bAwwwards\b/g, "Awwwards")
    .replace(/\bClutch\b/g, "Clutch")
    .replace(/\bLovie\b/g, "Lovie")
    .replace(/\bUfc\b/g, "UFC")
    .replace(/\bGa\b/g, "GA")
    .replace(/\bHtml\b/g, "HTML")
    .replace(/\bCss\b/g, "CSS")
    .replace(/\bJs\b/g, "JS")
    .replace(/\bTs\b/g, "TS")
    .replace(/\bApi\b/g, "API")
    .replace(/\bUrl\b/g, "URL")
    .replace(/\bUrls\b/g, "URLs")
    .replace(/\bUtm\b/g, "UTM")
    .replace(/\bE E A T\b/g, "E-E-A-T")
    .replace(/\bTv\b/g, "TV")
    .replace(/\bVfx\b/g, "VFX")
    .replace(/\bEm\b/g, "Em")
    .replace(/\bIoT\b/g, "IoT")
    .replace(/\bCovid-?19\b/g, "COVID-19")
    .replace(/\b2019\b/g, "2019")
    .replace(/\b2020\b/g, "2020")
    .replace(/\b2021\b/g, "2021")
    .replace(/\b2022\b/g, "2022")
    .replace(/\b2023\b/g, "2023")
    .replace(/\b2024\b/g, "2024")
    .replace(/\b2025\b/g, "2025")
    .replace(/\b2026\b/g, "2026")
    .replace(/\b101\b/g, "101")
    .replace(/\b301\b/g, "301")
    .replace(/\b5\b/g, "5")
    .replace(/\b10\b/g, "10")
    .replace(/\b20\b/g, "20")
    .replace(/\b30\b/g, "30")
    .replace(/\b50\b/g, "50")
    .replace(/\b8\b/g, "8");
}

const TAG_MAP: Record<string, string[]> = {
  "10-creative-websites-to-inspire-your-next-web-design-2025-update": ["Inspiration", "Web Design"],
  "10-golden-rules-for-writing-content-for-your-website": ["Expertise", "Web Design"],
  "10-interactive-websites-to-inspire-your-next-redesign": ["Inspiration", "Web Design"],
  "10-signs-you-probably-need-a-new-website": ["Expertise", "Web Design"],
  "10-stand-out-examples-of-tech-brand-websites": ["Inspiration", "Web Design"],
  "2019-a-year-in-the-kota-studio": ["Culture"],
  "2020-at-kota-studio": ["Culture"],
  "2023-so-far-at-kota": ["Culture"],
  "3-examples-of-brands-that-have-aced-their-tone-of-voice": ["Branding", "Expertise"],
  "3-eye-opening-insights-from-neons-marketing-campaigns": ["Inspiration", "SEO"],
  "301-redirects-decoded": ["SEO", "Expertise"],
  "5-beautifully-designed-agency-websites-and-what-you-can-learn-from-them": ["Inspiration", "Web Design"],
  "5-cool-brands-in-characteristically-boring-industries": ["Branding", "Inspiration"],
  "5-examples-of-great-e-commerce-product-pages": ["Inspiration", "Web Design"],
  "5-examples-of-playful-design-in-branding": ["Branding", "Inspiration"],
  "5-examples-of-successful-logo-redesigns": ["Branding", "Our work"],
  "5-finance-brands-that-ditched-corporate-design-and-won": ["Branding", "Inspiration"],
  "5-ways-ai-can-improve-web-design": ["Expertise", "Web Design"],
  "6-website-design-trends-you-cant-ignore-in-2025": ["Expertise", "Web Design"],
  "7-best-creative-campaigns-of-2024-so-far": ["Inspiration", "Our work"],
  "7-must-have-features-for-e-commerce-websites": ["Expertise", "Web Design"],
  "a-guide-to-nailing-title-tags-and-meta-descriptions": ["SEO", "Expertise"],
  "a-guide-to-providing-effective-design-feedback": ["Expertise", "Web Design"],
  "a-simple-guide-to-utm-links-in-ga4": ["SEO", "Expertise"],
  "a-step-by-step-guide-to-crafting-a-powerful-brand-manifesto": ["Branding", "Expertise"],
  "advertising-on-tiktok-101-how-brands-can-successfully-utilize-tiktok-in-their-marketing-strategy": ["Expertise", "SEO"],
  "aesthetic-vs-function-do-beautiful-websites-convert": ["Expertise", "Web Design"],
  "agency-not-going-back-to-the-office": ["Culture"],
  "ai-search-is-here-is-your-brand-showing-up": ["SEO", "Expertise"],
  "ai-search-zero-click-seo": ["SEO", "Expertise"],
  "ais-a-tool-not-the-talent-how-we-use-it-at-kota": ["Culture", "Expertise"],
  "announcing-new-partnerships": ["Culture", "Our work"],
  "annoushka-star-charm-online-advertising": ["Our work"],
  "april-2021-organic-search-update": ["SEO"],
  "august-2021-organic-search-update": ["SEO"],
  "bad-ux-kills-seo-conversions-and-trust-heres-how-to-fix-it": ["Expertise", "Web Design"],
  "behind-the-scenes-at-kota-web-design-process": ["Culture", "Expertise"],
  "behind-the-scenes-of-the-kota-website-redesign": ["Culture", "Our work"],
  "bespoke-vs-templated-websites-pros-and-cons": ["Expertise", "Web Design"],
  "best-of-2021-our-projects-and-awards": ["Our work", "Culture"],
  "beyond-linkedin-social-media-for-the-serious-b2b-marketer": ["Expertise", "SEO"],
  "beyond-responsive-5-great-examples-of-interactive-mobile-web-design": ["Inspiration", "Web Design"],
  "brand-building-how-to-lean-into-what-makes-you-different": ["Branding", "Expertise"],
  "brand-checklist-what-should-be-included-in-a-brand-style-guide": ["Branding", "Expertise"],
  "brand-design-trends-for-2025": ["Branding", "Inspiration"],
  "brand-first-vs-dev-first-what-actually-sets-kota-apart-and-why-it-matters": ["Expertise", "Culture"],
  "brand-identity-services-what-actually-makes-a-brand-work": ["Branding", "Expertise"],
  "branding-for-startups-getting-it-right-from-the-start": ["Branding", "Expertise"],
  "branding-inspiration-brand-design-trends-for-2026": ["Branding", "Inspiration"],
  "breaking-language-barriers-tips-for-creating-multilingual-websites": ["Expertise", "Web Design"],
  "business-planning-managing-team-interview-jonny": ["Culture"],
  "can-interactive-website-designs-be-seo-friendly": ["SEO", "Web Design"],
  "check-it-off-the-ultimate-website-revamp-checklist": ["Expertise", "Web Design"],
  "choosing-the-right-typography-for-your-brand": ["Branding", "Expertise"],
  "cinematic-web-design-crafting-digital-experiences-for-film-tv": ["Inspiration", "Web Design"],
  "clutch-names-kota-a-2024-global-winner-clutch-champion-and-top-branding-company": ["Our work", "Culture"],
  "clutch-names-kota-as-one-of-the-game-changing-php-developers-in-the-united-kingdom": ["Our work", "Culture"],
  "core-web-vitals-common-myths": ["SEO", "Expertise"],
  "covid-19-update-from-jonny-kotas-managing-director": ["Culture"],
  "crafting-narratives-what-story-does-your-website-design-tell": ["Expertise", "Web Design"],
  "creating-content-that-builds-trust-in-a-low-trust-world": ["Expertise", "Branding"],
  "creating-the-kotaverse-to-celebrate-10-years-of-kota": ["Culture", "Our work"],
  "creative-inspiration-digital-worlds-wed-happily-get-lost-in": ["Inspiration"],
  "creative-web-design-trends-for-tech-startups": ["Inspiration", "Web Design"],
  "creative-websites-were-obsessed-with-this-month": ["Inspiration", "Web Design"],
  "custom-vs-cookie-cutter-why-discovery-and-strategy-drive-better-roi": ["Expertise", "Branding"],
  "design-for-everyone-accessibility-in-web-development": ["Expertise", "Web Design"],
  "design-for-social-media-how-to-align-the-design-and-content-marketing-strategy": ["Expertise", "SEO"],
  "design-with-guts-kotas-manifesto-for-creative-bravery": ["Expertise", "Culture"],
  "designing-a-memorable-brand-identity": ["Branding", "Expertise"],
  "designing-more-sustainable-websites": ["Expertise", "Web Design"],
  "digital-design-trends-2024": ["Expertise", "Web Design"],
  "distinct-by-design-crafting-a-brand-that-breaks-the-mould": ["Branding", "Expertise"],
  "does-llms-txt-actually-matter-heres-whats-hype-whats-useful-and-what-to-fix-first": ["SEO", "Expertise"],
  "e-commerce-seo-tips-for-boosting-your-online-stores-visibility": ["SEO", "Expertise"],
  "edge10-group-partner-with-london-agency-kota-to-drive-forward-brand-and-digital-strategy": ["Our work"],
  "email-marketing-newsletter-design": ["Expertise", "SEO"],
  "error-handling-how-to-keep-users-happy-when-things-go-wrong": ["Expertise", "Web Design"],
  "exciting-new-projects-at-kota": ["Our work", "Culture"],
  "feast-famine-how-to-break-the-agency-curse": ["Culture"],
  "fonts-that-give-us-the-ick": ["Inspiration", "Web Design"],
  "fundraising-launching-repositioning-heres-when-to-redesign-your-website": ["Expertise", "Web Design"],
  "ga4-for-dummies": ["SEO", "Expertise"],
  "ga4-vs-universal-analytics-whats-the-difference": ["SEO", "Expertise"],
  "how-b2b-saas-brands-are-copying-b2cs-playbook-and-winning": ["Expertise", "Branding"],
  "how-bad-ux-can-kill-even-the-most-beautiful-website": ["Expertise", "Web Design"],
  "how-can-brands-stay-authentic-in-an-ai-driven-world": ["Branding", "Expertise"],
  "how-did-liquid-death-do-it": ["Branding", "Inspiration"],
  "how-fintech-brands-like-revolut-and-monzo-use-ux-to-build-trust": ["Expertise", "Web Design"],
  "how-growing-agencies-lose-their-identity-and-how-to-fix-it": ["Branding", "Expertise"],
  "how-homepage-redesign-can-improve-business-performance-amidst-covid-19-crisis": ["Expertise", "Web Design"],
  "how-motion-design-boosts-website-engagement-time-on-page": ["Expertise", "Web Design"],
  "how-social-is-redefining-search": ["SEO", "Expertise"],
  "how-to-build-successful-brands": ["Branding", "Expertise"],
  "how-to-choose-the-right-brand-design-agency-in-2026": ["Branding", "Expertise"],
  "how-to-choose-the-right-website-builder-for-your-business": ["Expertise", "Web Design"],
  "how-to-create-an-intuitive-user-interface": ["Expertise", "Web Design"],
  "how-to-define-your-tone-of-voice-with-examples": ["Branding", "Expertise"],
  "how-to-design-awesome-user-journeys-with-the-help-of-ctas": ["Expertise", "Web Design"],
  "how-to-find-a-brand-voice-that-doesnt-sound-like-everyone-else": ["Branding", "Expertise"],
  "how-to-fix-poor-website-navigation": ["Expertise", "Web Design"],
  "how-to-follow-eco-friendly-web-design-principles": ["Expertise", "Web Design"],
  "how-to-inject-fresh-energy-into-established-b2b-brands": ["Branding", "Expertise"],
  "how-to-jump-on-design-trends-whilst-staying-true-to-you-brand": ["Branding", "Web Design"],
  "how-to-master-the-linkedin-algorithm-in-2024": ["SEO", "Expertise"],
  "how-to-measure-the-impact-of-your-creative-campaigns": ["SEO", "Expertise"],
  "how-to-measure-your-websites-domain-authority": ["SEO", "Expertise"],
  "how-to-migrate-to-ga4-5-easy-steps": ["SEO", "Expertise"],
  "how-to-pick-the-right-web-design-agency-for-your-brand": ["Expertise", "Web Design"],
  "how-to-prepare-your-website-for-black-friday-2023": ["Expertise", "Web Design"],
  "how-to-reduce-bounce-rate": ["SEO", "Expertise"],
  "how-to-sell-brand-investment-to-stakeholders-without-losing-your-mind": ["Branding", "Expertise"],
  "how-to-turn-a-brand-audit-into-actionable-results": ["Branding", "Expertise"],
  "how-we-approach-luxury-brand-design": ["Branding", "Expertise"],
  "how-we-built-our-new-website": ["Culture", "Our work"],
  "how-we-keep-our-remote-team-happy": ["Culture"],
  "if-when-and-how-to-revise-your-brand-strategy": ["Branding", "Expertise"],
  "insights-into-our-digital-first-work-culture": ["Culture"],
  "interactive-maps-in-web-design": ["Expertise", "Web Design"],
  "is-this-ai-contents-reckoning-googles-march-2024-core-update-explained": ["SEO", "Expertise"],
  "is-your-e-commerce-website-ready-for-black-friday": ["Expertise", "Web Design"],
  "july-2021-organic-search-update": ["SEO"],
  "july-2021-organic-search-update-2": ["SEO"],
  "keeping-wordpress-websites-secure": ["Expertise", "Web Design"],
  "key-website-kpis-a-guide-to-your-websites-performance": ["SEO", "Expertise"],
  "kota-christmas-at-stranger-things-secret-cinema": ["Culture"],
  "kota-earns-2025-great-place-to-work-certification": ["Culture"],
  "kota-is-cyber-essentials-certified": ["Culture"],
  "kota-is-one-of-the-uks-best-workplaces-in-advertising-media-marketing-2025": ["Culture"],
  "kota-named-as-a-clutch-global-champion-winner-for-autumn-2024": ["Our work", "Culture"],
  "kota-named-one-of-the-top-creative-b2b-companies-in-the-uk-by-clutch": ["Our work", "Culture"],
  "kota-partner-with-ufc-to-deliver-brand-new-sport-power-slap": ["Our work"],
  "kota-project-discovery-phase-our-recipe-for-your-success": ["Expertise", "Web Design"],
  "kota-recognised-for-bold-ideas-and-big-results-on-clutchs-1000-list": ["Our work", "Culture"],
  "kota-team-trip-to-porto": ["Culture"],
  "kota-user-experience-design-process-why-is-ux-important": ["Expertise", "Web Design"],
  "kota-user-interface-design-process-the-power-of-good-ui": ["Expertise", "Web Design"],
  "kota-web-development-process-how-good-websites-are-built": ["Expertise", "Web Design"],
  "kota-welcome-senior-digital-designer-james-huse": ["Culture"],
  "kota-welcomes-upp-the-oscar-emmy-winning-vfx-studio-as-our-newest-client": ["Our work", "Culture"],
  "kota-wins-a-lovie-award-for-best-web-design-aesthetic": ["Our work", "Culture"],
  "lets-talk-about-why-seo-and-ux-go-hand-in-hand": ["SEO", "Expertise"],
  "local-vs-global-marketing-strategies-for-success": ["Expertise", "SEO"],
  "making-room-for-brand-how-to-balance-performance-and-creativity-in-your-marketing": ["Branding", "Expertise"],
  "march-2021-organic-search-update": ["SEO"],
  "may-2021-organic-search-update": ["SEO"],
  "minimalism-in-brand-design-less-is-more-but-is-it-always-better": ["Branding", "Expertise"],
  "monitoring-website-traffic-with-google-analytics": ["SEO", "Expertise"],
  "most-brands-dont-have-a-design-problem-they-have-a-decision-problem": ["Branding", "Expertise"],
  "motion-graphics-in-web-design": ["Expertise", "Web Design"],
  "new-partnership-7-ways-campaign-for-penguin-books-and-jamie-oliver": ["Our work"],
  "nostalgia-in-branding-why-looking-back-can-propel-your-brand-forward": ["Branding", "Inspiration"],
  "october-2021-organic-search-update": ["SEO"],
  "on-starting-a-creative-agency-with-james-our-creative-director": ["Culture"],
  "our-b2b-marketing-strategy-2020-website-redesign-results": ["Our work", "Expertise"],
  "our-guide-to-website-animation-the-good-and-the-bad": ["Expertise", "Web Design"],
  "our-remote-team-meet-up-a-fun-day-out-in-london": ["Culture"],
  "project-management-with-notion": ["Culture", "Expertise"],
  "questions-to-ask-before-hiring-a-web-agency": ["Expertise", "Web Design"],
  "rebelling-against-the-grid-unconventional-layouts-in-web-design": ["Inspiration", "Web Design"],
  "rebellious-typography-the-importance-of-the-humble-font": ["Inspiration", "Web Design"],
  "redirects-the-key-to-keeping-your-traffic-after-website-migration": ["SEO", "Expertise"],
  "repeat-after-me-build-the-brand-before-you-burn-the-ad-budget": ["Branding", "Expertise"],
  "seo-in-2025-why-brand-trust-and-off-site-signals-matter": ["SEO", "Expertise"],
  "seo-process-web-design": ["SEO", "Expertise"],
  "september-2021-organic-search-update": ["SEO"],
  "shopify-editions-summer-23-everything-you-need-to-know": ["Expertise", "Web Design"],
  "shopify-editions-summer-24-whats-new": ["Expertise", "Web Design"],
  "shopify-summer-editions-25-whats-new": ["Expertise", "Web Design"],
  "shopify-winter-editions-2024-whats-new": ["Expertise", "Web Design"],
  "shopifys-e-commerce-boom-here-to-stay": ["Expertise", "Web Design"],
  "should-b2b-brands-be-embracing-influencer-marketing": ["Expertise", "SEO"],
  "should-marketing-teams-be-preparing-for-searchgpt": ["SEO", "Expertise"],
  "site-care-top-tips-for-website-maintenance": ["Expertise", "Web Design"],
  "sitecare-management-website-maintenance": ["Expertise", "Web Design"],
  "six-brands-that-commit-to-the-bit": ["Branding", "Inspiration"],
  "small-budget-big-impact-10-creative-campaigns-that-defied-the-odds": ["Inspiration", "Our work"],
  "small-details-big-impact-a-guide-to-website-micro-animations": ["Expertise", "Web Design"],
  "social-media-marketing-services-at-kota": ["Expertise", "SEO"],
  "social-media-update-instagrams-grid-tiktok-drama-and-the-xodus": ["Expertise", "SEO"],
  "speed-demons-tips-to-improve-your-websites-load-times": ["Expertise", "Web Design"],
  "strong-websites-start-with-sharper-brand-positioning": ["Branding", "Expertise"],
  "successful-start-of-the-year-at-kota": ["Culture"],
  "superyachtsmonaco-partner-with-kota-to-land-digital-transformation": ["Our work"],
  "tech-against-the-grain-tech-brands-redefining-the-industry": ["Inspiration", "Web Design"],
  "the-anatomy-of-a-high-converting-landing-page": ["Expertise", "Web Design"],
  "the-best-tools-for-working-from-home": ["Culture"],
  "the-best-uses-of-motion-in-web-design-and-when-to-hold-back": ["Expertise", "Web Design"],
  "the-business-case-for-beauty-measuring-the-roi-of-aesthetic-web-design": ["Expertise", "Web Design"],
  "the-clarity-gap-what-happens-when-brands-skip-real-positioning": ["Branding", "Expertise"],
  "the-coolest-websites-weve-seen-recently": ["Inspiration", "Web Design"],
  "the-death-of-passive-media-consumption-designing-for-interaction": ["Expertise", "Web Design"],
  "the-essential-role-content-plays-in-web-design": ["Expertise", "Web Design"],
  "the-evolution-of-kota": ["Culture"],
  "the-evolution-of-website-design-from-flat-to-immersive-experiences": ["Expertise", "Web Design"],
  "the-future-is-here-ai-in-digital-marketing": ["Expertise", "SEO"],
  "the-hallmarks-of-an-effective-tone-of-voice": ["Branding", "Expertise"],
  "the-joy-of-a-weird-idea-well-executed": ["Inspiration", "Culture"],
  "the-power-of-wordpress-as-a-headless-cms": ["Expertise", "Web Design"],
  "the-principles-of-visual-hierarchy-in-web-design": ["Expertise", "Web Design"],
  "the-role-of-rebranding-in-message-consistency": ["Branding", "Expertise"],
  "the-science-of-trust-how-tech-startups-can-win-over-skeptical-buyers": ["Expertise", "Branding"],
  "the-texture-of-trust-how-visual-tactility-sells-online": ["Expertise", "Web Design"],
  "the-ultimate-e-commerce-website-guide-10-tips-for-success": ["Expertise", "Web Design"],
  "the-worlds-leading-boxing-promoter-matchroom-boxing-partners-with-kota": ["Our work"],
  "time-for-a-rebrand-start-with-our-brand-pulse-audit-tool": ["Branding", "Expertise"],
  "tips-for-boosting-newsletter-sign-ups": ["Expertise", "SEO"],
  "top-3-highlights-from-shopify-unite-2021": ["Expertise", "Web Design"],
  "top-brand-positioning-cliches-in-tech-and-how-to-avoid-them": ["Branding", "Expertise"],
  "understanding-googles-e-e-a-t-guidelines": ["SEO", "Expertise"],
  "unlocking-loyalty-8-e-commerce-loyalty-schemes-that-win-customers-over": ["Expertise", "Web Design"],
  "web-design-e-commerce-businesses": ["Expertise", "Web Design"],
  "web-design-inspiration-50-sites-to-bookmark": ["Inspiration", "Web Design"],
  "web-design-project-timing": ["Expertise", "Web Design"],
  "web-design-software-adobe-xd-figma-2020": ["Expertise", "Web Design"],
  "web-design-trends-2023": ["Expertise", "Web Design"],
  "web-design-trends-for-2022": ["Expertise", "Web Design"],
  "website-briefing-template": ["Expertise", "Web Design"],
  "website-design-for-tech-saas-done-right": ["Expertise", "Web Design"],
  "website-projects-what-slows-them-down-and-how-to-keep-things-moving": ["Expertise", "Web Design"],
  "weve-just-bagged-an-honourable-mention-from-awwwards": ["Our work", "Culture"],
  "what-are-the-pros-and-cons-of-headless-wordpress-for-content-teams": ["Expertise", "Web Design"],
  "what-b2b-buyers-actually-want-from-a-website-hint-its-not-a-whitepaper": ["Expertise", "Web Design"],
  "what-is-a-headless-cms-and-do-you-need-one": ["Expertise", "Web Design"],
  "what-is-sensory-web-design": ["Expertise", "Web Design"],
  "what-makes-a-great-landing-page": ["Expertise", "Web Design"],
  "what-to-do-with-underperforming-content": ["SEO", "Expertise"],
  "what-to-prioritise-when-you-cant-do-a-full-website-redesign-yet": ["Expertise", "Web Design"],
  "what-your-2026-website-brief-should-include": ["Expertise", "Web Design"],
  "whats-driving-your-customers-tech-purchases-in-2024": ["Expertise", "SEO"],
  "whats-next-marketing-predictions-for-2025": ["Expertise", "SEO"],
  "when-to-rebrand-recognising-the-right-time-to-revamp": ["Branding", "Expertise"],
  "who-on-earth-is-alexander-vasilakis": ["Culture"],
  "who-on-earth-is-bekah-mcdonald": ["Culture"],
  "who-on-earth-is-em-mackenzie": ["Culture"],
  "who-on-earth-is-emily-malone": ["Culture"],
  "who-on-earth-is-ffion-hughes": ["Culture"],
  "who-on-earth-is-james-huse": ["Culture"],
};

function getTags(slug: string): string[] {
  if (TAG_MAP[slug]) return TAG_MAP[slug];
  if (slug.startsWith("who-on-earth-is")) return ["Culture"];
  if (slug.includes("kota-") && (slug.includes("partner") || slug.includes("welcome") || slug.includes("wins") || slug.includes("named") || slug.includes("recognised") || slug.includes("earns") || slug.includes("certified") || slug.includes("best-workplaces"))) return ["Our work", "Culture"];
  if (slug.includes("organic-search-update")) return ["SEO"];
  if (slug.includes("brand") || slug.includes("branding")) return ["Branding", "Expertise"];
  if (slug.includes("seo") || slug.includes("google") || slug.includes("analytics")) return ["SEO", "Expertise"];
  if (slug.includes("design") || slug.includes("website") || slug.includes("web-")) return ["Web Design", "Expertise"];
  return ["Expertise"];
}

function getExcerpt(slug: string): string {
  const title = slugToTitle(slug);
  return `Explore insights on ${title.toLowerCase()} from the Blackstone Media team.`;
}

function getDate(slug: string): string {
  if (slug.includes("2019")) return "2019-12-15";
  if (slug.includes("2020") && !slug.includes("2020-")) return "2020-12-10";
  if (slug.includes("2021")) return "2021-06-15";
  if (slug.includes("2022")) return "2022-03-20";
  if (slug.includes("2023")) return "2023-09-10";
  if (slug.includes("2024")) return "2024-06-15";
  if (slug.includes("2025")) return "2025-03-20";
  if (slug.includes("2026")) return "2026-01-15";
  if (slug.includes("covid")) return "2020-04-15";
  if (slug.startsWith("april-2021")) return "2021-04-15";
  if (slug.startsWith("august-2021")) return "2021-08-15";
  if (slug.startsWith("july-2021")) return "2021-07-15";
  if (slug.startsWith("march-2021")) return "2021-03-15";
  if (slug.startsWith("may-2021")) return "2021-05-15";
  if (slug.startsWith("october-2021")) return "2021-10-15";
  if (slug.startsWith("september-2021")) return "2021-09-15";
  if (slug.includes("best-of-2021")) return "2021-12-20";
  if (slug.includes("shopify-unite-2021")) return "2021-11-15";
  if (slug.includes("feast-famine") || slug.includes("agency-curse")) return "2021-02-15";
  if (slug.includes("not-going-back")) return "2020-11-15";
  if (slug.includes("tools-for-working")) return "2020-06-15";
  if (slug.includes("digital-first-work")) return "2021-01-15";
  if (slug.includes("remote-team")) return "2020-08-15";
  if (slug.includes("evolution-of-kota")) return "2022-06-15";
  if (slug.includes("built-our-new")) return "2022-09-15";
  if (slug.includes("b2b-marketing-strategy-2020")) return "2020-12-15";
  if (slug.includes("web-design-software")) return "2020-09-15";
  if (slug.includes("christmas-at-stranger")) return "2019-12-20";
  return "2024-01-15";
}

const SLUGS = [
  "10-creative-websites-to-inspire-your-next-web-design-2025-update",
  "10-golden-rules-for-writing-content-for-your-website",
  "10-interactive-websites-to-inspire-your-next-redesign",
  "10-signs-you-probably-need-a-new-website",
  "10-stand-out-examples-of-tech-brand-websites",
  "2019-a-year-in-the-kota-studio",
  "2020-at-kota-studio",
  "2023-so-far-at-kota",
  "3-examples-of-brands-that-have-aced-their-tone-of-voice",
  "3-eye-opening-insights-from-neons-marketing-campaigns",
  "301-redirects-decoded",
  "5-beautifully-designed-agency-websites-and-what-you-can-learn-from-them",
  "5-cool-brands-in-characteristically-boring-industries",
  "5-examples-of-great-e-commerce-product-pages",
  "5-examples-of-playful-design-in-branding",
  "5-examples-of-successful-logo-redesigns",
  "5-finance-brands-that-ditched-corporate-design-and-won",
  "5-ways-ai-can-improve-web-design",
  "6-website-design-trends-you-cant-ignore-in-2025",
  "7-best-creative-campaigns-of-2024-so-far",
  "7-must-have-features-for-e-commerce-websites",
  "a-guide-to-nailing-title-tags-and-meta-descriptions",
  "a-guide-to-providing-effective-design-feedback",
  "a-simple-guide-to-utm-links-in-ga4",
  "a-step-by-step-guide-to-crafting-a-powerful-brand-manifesto",
  "advertising-on-tiktok-101-how-brands-can-successfully-utilize-tiktok-in-their-marketing-strategy",
  "aesthetic-vs-function-do-beautiful-websites-convert",
  "agency-not-going-back-to-the-office",
  "ai-search-is-here-is-your-brand-showing-up",
  "ai-search-zero-click-seo",
  "ais-a-tool-not-the-talent-how-we-use-it-at-kota",
  "announcing-new-partnerships",
  "annoushka-star-charm-online-advertising",
  "april-2021-organic-search-update",
  "august-2021-organic-search-update",
  "bad-ux-kills-seo-conversions-and-trust-heres-how-to-fix-it",
  "behind-the-scenes-at-kota-web-design-process",
  "behind-the-scenes-of-the-kota-website-redesign",
  "bespoke-vs-templated-websites-pros-and-cons",
  "best-of-2021-our-projects-and-awards",
  "beyond-linkedin-social-media-for-the-serious-b2b-marketer",
  "beyond-responsive-5-great-examples-of-interactive-mobile-web-design",
  "brand-building-how-to-lean-into-what-makes-you-different",
  "brand-checklist-what-should-be-included-in-a-brand-style-guide",
  "brand-design-trends-for-2025",
  "brand-first-vs-dev-first-what-actually-sets-kota-apart-and-why-it-matters",
  "brand-identity-services-what-actually-makes-a-brand-work",
  "branding-for-startups-getting-it-right-from-the-start",
  "branding-inspiration-brand-design-trends-for-2026",
  "breaking-language-barriers-tips-for-creating-multilingual-websites",
  "business-planning-managing-team-interview-jonny",
  "can-interactive-website-designs-be-seo-friendly",
  "check-it-off-the-ultimate-website-revamp-checklist",
  "choosing-the-right-typography-for-your-brand",
  "cinematic-web-design-crafting-digital-experiences-for-film-tv",
  "clutch-names-kota-a-2024-global-winner-clutch-champion-and-top-branding-company",
  "clutch-names-kota-as-one-of-the-game-changing-php-developers-in-the-united-kingdom",
  "core-web-vitals-common-myths",
  "covid-19-update-from-jonny-kotas-managing-director",
  "crafting-narratives-what-story-does-your-website-design-tell",
  "creating-content-that-builds-trust-in-a-low-trust-world",
  "creating-the-kotaverse-to-celebrate-10-years-of-kota",
  "creative-inspiration-digital-worlds-wed-happily-get-lost-in",
  "creative-web-design-trends-for-tech-startups",
  "creative-websites-were-obsessed-with-this-month",
  "custom-vs-cookie-cutter-why-discovery-and-strategy-drive-better-roi",
  "design-for-everyone-accessibility-in-web-development",
  "design-for-social-media-how-to-align-the-design-and-content-marketing-strategy",
  "design-with-guts-kotas-manifesto-for-creative-bravery",
  "designing-a-memorable-brand-identity",
  "designing-more-sustainable-websites",
  "digital-design-trends-2024",
  "distinct-by-design-crafting-a-brand-that-breaks-the-mould",
  "does-llms-txt-actually-matter-heres-whats-hype-whats-useful-and-what-to-fix-first",
  "e-commerce-seo-tips-for-boosting-your-online-stores-visibility",
  "edge10-group-partner-with-london-agency-kota-to-drive-forward-brand-and-digital-strategy",
  "email-marketing-newsletter-design",
  "error-handling-how-to-keep-users-happy-when-things-go-wrong",
  "exciting-new-projects-at-kota",
  "feast-famine-how-to-break-the-agency-curse",
  "fonts-that-give-us-the-ick",
  "fundraising-launching-repositioning-heres-when-to-redesign-your-website",
  "ga4-for-dummies",
  "ga4-vs-universal-analytics-whats-the-difference",
  "how-b2b-saas-brands-are-copying-b2cs-playbook-and-winning",
  "how-bad-ux-can-kill-even-the-most-beautiful-website",
  "how-can-brands-stay-authentic-in-an-ai-driven-world",
  "how-did-liquid-death-do-it",
  "how-fintech-brands-like-revolut-and-monzo-use-ux-to-build-trust",
  "how-growing-agencies-lose-their-identity-and-how-to-fix-it",
  "how-homepage-redesign-can-improve-business-performance-amidst-covid-19-crisis",
  "how-motion-design-boosts-website-engagement-time-on-page",
  "how-social-is-redefining-search",
  "how-to-build-successful-brands",
  "how-to-choose-the-right-brand-design-agency-in-2026",
  "how-to-choose-the-right-website-builder-for-your-business",
  "how-to-create-an-intuitive-user-interface",
  "how-to-define-your-tone-of-voice-with-examples",
  "how-to-design-awesome-user-journeys-with-the-help-of-ctas",
  "how-to-find-a-brand-voice-that-doesnt-sound-like-everyone-else",
  "how-to-fix-poor-website-navigation",
  "how-to-follow-eco-friendly-web-design-principles",
  "how-to-inject-fresh-energy-into-established-b2b-brands",
  "how-to-jump-on-design-trends-whilst-staying-true-to-you-brand",
  "how-to-master-the-linkedin-algorithm-in-2024",
  "how-to-measure-the-impact-of-your-creative-campaigns",
  "how-to-measure-your-websites-domain-authority",
  "how-to-migrate-to-ga4-5-easy-steps",
  "how-to-pick-the-right-web-design-agency-for-your-brand",
  "how-to-prepare-your-website-for-black-friday-2023",
  "how-to-reduce-bounce-rate",
  "how-to-sell-brand-investment-to-stakeholders-without-losing-your-mind",
  "how-to-turn-a-brand-audit-into-actionable-results",
  "how-we-approach-luxury-brand-design",
  "how-we-built-our-new-website",
  "how-we-keep-our-remote-team-happy",
  "if-when-and-how-to-revise-your-brand-strategy",
  "insights-into-our-digital-first-work-culture",
  "interactive-maps-in-web-design",
  "is-this-ai-contents-reckoning-googles-march-2024-core-update-explained",
  "is-your-e-commerce-website-ready-for-black-friday",
  "july-2021-organic-search-update",
  "july-2021-organic-search-update-2",
  "keeping-wordpress-websites-secure",
  "key-website-kpis-a-guide-to-your-websites-performance",
  "kota-christmas-at-stranger-things-secret-cinema",
  "kota-earns-2025-great-place-to-work-certification",
  "kota-is-cyber-essentials-certified",
  "kota-is-one-of-the-uks-best-workplaces-in-advertising-media-marketing-2025",
  "kota-named-as-a-clutch-global-champion-winner-for-autumn-2024",
  "kota-named-one-of-the-top-creative-b2b-companies-in-the-uk-by-clutch",
  "kota-partner-with-ufc-to-deliver-brand-new-sport-power-slap",
  "kota-project-discovery-phase-our-recipe-for-your-success",
  "kota-recognised-for-bold-ideas-and-big-results-on-clutchs-1000-list",
  "kota-team-trip-to-porto",
  "kota-user-experience-design-process-why-is-ux-important",
  "kota-user-interface-design-process-the-power-of-good-ui",
  "kota-web-development-process-how-good-websites-are-built",
  "kota-welcome-senior-digital-designer-james-huse",
  "kota-welcomes-upp-the-oscar-emmy-winning-vfx-studio-as-our-newest-client",
  "kota-wins-a-lovie-award-for-best-web-design-aesthetic",
  "lets-talk-about-why-seo-and-ux-go-hand-in-hand",
  "local-vs-global-marketing-strategies-for-success",
  "making-room-for-brand-how-to-balance-performance-and-creativity-in-your-marketing",
  "march-2021-organic-search-update",
  "may-2021-organic-search-update",
  "minimalism-in-brand-design-less-is-more-but-is-it-always-better",
  "monitoring-website-traffic-with-google-analytics",
  "most-brands-dont-have-a-design-problem-they-have-a-decision-problem",
  "motion-graphics-in-web-design",
  "new-partnership-7-ways-campaign-for-penguin-books-and-jamie-oliver",
  "nostalgia-in-branding-why-looking-back-can-propel-your-brand-forward",
  "october-2021-organic-search-update",
  "on-starting-a-creative-agency-with-james-our-creative-director",
  "our-b2b-marketing-strategy-2020-website-redesign-results",
  "our-guide-to-website-animation-the-good-and-the-bad",
  "our-remote-team-meet-up-a-fun-day-out-in-london",
  "project-management-with-notion",
  "questions-to-ask-before-hiring-a-web-agency",
  "rebelling-against-the-grid-unconventional-layouts-in-web-design",
  "rebellious-typography-the-importance-of-the-humble-font",
  "redirects-the-key-to-keeping-your-traffic-after-website-migration",
  "repeat-after-me-build-the-brand-before-you-burn-the-ad-budget",
  "seo-in-2025-why-brand-trust-and-off-site-signals-matter",
  "seo-process-web-design",
  "september-2021-organic-search-update",
  "shopify-editions-summer-23-everything-you-need-to-know",
  "shopify-editions-summer-24-whats-new",
  "shopify-summer-editions-25-whats-new",
  "shopify-winter-editions-2024-whats-new",
  "shopifys-e-commerce-boom-here-to-stay",
  "should-b2b-brands-be-embracing-influencer-marketing",
  "should-marketing-teams-be-preparing-for-searchgpt",
  "site-care-top-tips-for-website-maintenance",
  "sitecare-management-website-maintenance",
  "six-brands-that-commit-to-the-bit",
  "small-budget-big-impact-10-creative-campaigns-that-defied-the-odds",
  "small-details-big-impact-a-guide-to-website-micro-animations",
  "social-media-marketing-services-at-kota",
  "social-media-update-instagrams-grid-tiktok-drama-and-the-xodus",
  "speed-demons-tips-to-improve-your-websites-load-times",
  "strong-websites-start-with-sharper-brand-positioning",
  "successful-start-of-the-year-at-kota",
  "superyachtsmonaco-partner-with-kota-to-land-digital-transformation",
  "tech-against-the-grain-tech-brands-redefining-the-industry",
  "the-anatomy-of-a-high-converting-landing-page",
  "the-best-tools-for-working-from-home",
  "the-best-uses-of-motion-in-web-design-and-when-to-hold-back",
  "the-business-case-for-beauty-measuring-the-roi-of-aesthetic-web-design",
  "the-clarity-gap-what-happens-when-brands-skip-real-positioning",
  "the-coolest-websites-weve-seen-recently",
  "the-death-of-passive-media-consumption-designing-for-interaction",
  "the-essential-role-content-plays-in-web-design",
  "the-evolution-of-kota",
  "the-evolution-of-website-design-from-flat-to-immersive-experiences",
  "the-future-is-here-ai-in-digital-marketing",
  "the-hallmarks-of-an-effective-tone-of-voice",
  "the-joy-of-a-weird-idea-well-executed",
  "the-power-of-wordpress-as-a-headless-cms",
  "the-principles-of-visual-hierarchy-in-web-design",
  "the-role-of-rebranding-in-message-consistency",
  "the-science-of-trust-how-tech-startups-can-win-over-skeptical-buyers",
  "the-texture-of-trust-how-visual-tactility-sells-online",
  "the-ultimate-e-commerce-website-guide-10-tips-for-success",
  "the-worlds-leading-boxing-promoter-matchroom-boxing-partners-with-kota",
  "time-for-a-rebrand-start-with-our-brand-pulse-audit-tool",
  "tips-for-boosting-newsletter-sign-ups",
  "top-3-highlights-from-shopify-unite-2021",
  "top-brand-positioning-cliches-in-tech-and-how-to-avoid-them",
  "understanding-googles-e-e-a-t-guidelines",
  "unlocking-loyalty-8-e-commerce-loyalty-schemes-that-win-customers-over",
  "web-design-e-commerce-businesses",
  "web-design-inspiration-50-sites-to-bookmark",
  "web-design-project-timing",
  "web-design-software-adobe-xd-figma-2020",
  "web-design-trends-2023",
  "web-design-trends-for-2022",
  "website-briefing-template",
  "website-design-for-tech-saas-done-right",
  "website-projects-what-slows-them-down-and-how-to-keep-things-moving",
  "weve-just-bagged-an-honourable-mention-from-awwwards",
  "what-are-the-pros-and-cons-of-headless-wordpress-for-content-teams",
  "what-b2b-buyers-actually-want-from-a-website-hint-its-not-a-whitepaper",
  "what-is-a-headless-cms-and-do-you-need-one",
  "what-is-sensory-web-design",
  "what-makes-a-great-landing-page",
  "what-to-do-with-underperforming-content",
  "what-to-prioritise-when-you-cant-do-a-full-website-redesign-yet",
  "what-your-2026-website-brief-should-include",
  "whats-driving-your-customers-tech-purchases-in-2024",
  "whats-next-marketing-predictions-for-2025",
  "when-to-rebrand-recognising-the-right-time-to-revamp",
  "who-on-earth-is-alexander-vasilakis",
  "who-on-earth-is-bekah-mcdonald",
  "who-on-earth-is-em-mackenzie",
  "who-on-earth-is-emily-malone",
  "who-on-earth-is-ffion-hughes",
  "who-on-earth-is-james-huse",
];

export const blogPosts: Record<string, BlogPost> = Object.fromEntries(
  SLUGS.map((slug) => [
    slug,
    {
      slug,
      title: slugToTitle(slug),
      tags: getTags(slug),
      excerpt: getExcerpt(slug),
      date: getDate(slug),
    },
  ])
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogSlugs(): string[] {
  return SLUGS;
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const post = blogPosts[slug];
  if (!post) return [];
  return SLUGS.filter((s) => s !== slug)
    .slice(0, count)
    .map((s) => blogPosts[s])
    .filter(Boolean);
}
