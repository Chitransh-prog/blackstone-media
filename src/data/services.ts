export interface ServiceData {
  slug: string;
  title: string;
  heading: string;
  intro: string;
  parent?: string;
  category: "brand" | "web" | "growth";
  heroImage?: string;
  heroVideo?: string;
  bentoItems: { image: string; label: string }[];
  introHeading: string;
  introText: string;
  contentRows: { heading: string; text: string; image?: string }[];
  stats: { label: string; value: string }[];
  relatedProjects: {
    title: string;
    year: string;
    description: string;
    image: string;
  }[];
  relatedArticles: {
    title: string;
    excerpt: string;
    image: string;
    date: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
}

const IMG = "/sites/kota-co-uk_ddbd9d9c/root-dd72c4c6/images";

export const services: Record<string, ServiceData> = {
  "brand-strategy-and-identity": {
    slug: "brand-strategy-and-identity",
    title: "Brand strategy and identity",
    heading: "Brand strategy\nand identity",
    intro:
      "When growth pulls at it, new audiences dilute it, and good intentions blur it, we'll strengthen your brand with clear decisions that feel inevitable.",
    category: "brand",
    bentoItems: [
      { image: `${IMG}/copper-feature.png`, label: "Brand identity" },
      { image: `${IMG}/featured-image.png`, label: "Strategy" },
      { image: `${IMG}/finura-logo-still.png`, label: "Logo systems" },
      { image: `${IMG}/goat-featured.png`, label: "Tone of voice" },
    ],
    introHeading: "Building brands that\nstand for something",
    introText:
      "We work with ambitious companies to define who they are, what they stand for, and how they show up in the world. From strategic positioning to visual identity, we create brands that are unmistakable and built to last.",
    contentRows: [
      {
        heading: "Strategic foundations",
        text: "Every great brand starts with clarity. We dig deep into your business, audience, and competitive landscape to find the strategic foundation that makes everything else click.",
        image: `${IMG}/copper-feature.png`,
      },
      {
        heading: "Visual identity systems",
        text: "From logo design to full visual systems, we create identities that are distinctive, memorable, and flexible enough to work across every touchpoint.",
        image: `${IMG}/featured-image.png`,
      },
      {
        heading: "Tone of voice",
        text: "Your brand's voice is as important as its look. We define how you speak so every word reinforces who you are.",
        image: `${IMG}/finura-logo-still.png`,
      },
    ],
    stats: [
      { label: "Brands built", value: "120+" },
      { label: "Industries served", value: "25+" },
      { label: "Years of experience", value: "12" },
      { label: "Client satisfaction", value: "98%" },
    ],
    relatedProjects: [
      {
        title: "Copper",
        year: "2026",
        description: "A new brand for the technology behind always-on markets.",
        image: `${IMG}/copper-feature.png`,
      },
      {
        title: "Finura",
        year: "2025",
        description: "Brand identity for a financial advisory firm.",
        image: `${IMG}/finura-logo-still.png`,
      },
    ],
    relatedArticles: [
      {
        title: "Why brand strategy matters more than ever",
        excerpt: "In a crowded market, a clear brand strategy is your competitive advantage.",
        image: `${IMG}/featured-image.png`,
        date: "2026-01-15",
      },
    ],
    testimonials: [
      {
        quote: "KOTA transformed our brand from forgettable to unmistakable.",
        author: "Sarah Chen",
        role: "CEO, Copper",
      },
    ],
  },
  "brand-strategy": {
    slug: "brand-strategy",
    title: "Brand strategy",
    heading: "Brand\nstrategy",
    intro:
      "We define who you are, who you're for, and why you matter — then build a brand around those answers.",
    parent: "brand-strategy-and-identity",
    category: "brand",
    bentoItems: [
      { image: `${IMG}/copper-feature.png`, label: "Positioning" },
      { image: `${IMG}/featured-image.png`, label: "Audience research" },
      { image: `${IMG}/goat-featured.png`, label: "Competitor analysis" },
      { image: `${IMG}/finura-logo-still.png`, label: "Brand architecture" },
    ],
    introHeading: "Strategy that creates\nclarity and direction",
    introText:
      "Great brands don't happen by accident. We work with you to uncover what makes your business unique and translate that into a strategic foundation that guides every decision.",
    contentRows: [
      {
        heading: "Market positioning",
        text: "We map your competitive landscape and find the white space where your brand can own a position that's both authentic and defensible.",
        image: `${IMG}/copper-feature.png`,
      },
      {
        heading: "Audience insight",
        text: "Understanding your audience goes beyond demographics. We uncover the motivations, fears, and aspirations that drive their decisions.",
        image: `${IMG}/featured-image.png`,
      },
    ],
    stats: [
      { label: "Strategies delivered", value: "80+" },
      { label: "Markets entered", value: "15+" },
      { label: "Growth unlocked", value: "40%" },
      { label: "Client retention", value: "95%" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
  "brand-identity-design": {
    slug: "brand-identity-design",
    title: "Brand identity design",
    heading: "Brand identity\ndesign",
    intro:
      "Distinctive visual identities that make your brand unmistakable across every touchpoint.",
    parent: "brand-strategy-and-identity",
    category: "brand",
    bentoItems: [
      { image: `${IMG}/copper-feature.png`, label: "Logo design" },
      { image: `${IMG}/finura-logo-still.png`, label: "Visual systems" },
      { image: `${IMG}/featured-image.png`, label: "Typography" },
      { image: `${IMG}/goat-featured.png`, label: "Color palettes" },
    ],
    introHeading: "Identities that\ncommand attention",
    introText:
      "We design visual identities that are bold, distinctive, and built to work everywhere — from business cards to billboards to browser tabs.",
    contentRows: [
      {
        heading: "Logo and mark design",
        text: "We create logos that are simple enough to work at any scale, distinctive enough to be remembered, and meaningful enough to tell your story.",
        image: `${IMG}/finura-logo-still.png`,
      },
      {
        heading: "Full visual systems",
        text: "Beyond the logo, we build complete visual systems — typography, colour, imagery, layout principles — that give your team everything they need to stay consistent.",
        image: `${IMG}/copper-feature.png`,
      },
    ],
    stats: [
      { label: "Identities created", value: "100+" },
      { label: "Design awards", value: "12" },
      { label: "Client NPS", value: "72" },
      { label: "Average project duration", value: "8 weeks" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
  "tone-of-voice": {
    slug: "tone-of-voice",
    title: "Tone of voice",
    heading: "Tone of\nvoice",
    intro:
      "Defining how you speak so every word reinforces who you are.",
    parent: "brand-strategy-and-identity",
    category: "brand",
    bentoItems: [
      { image: `${IMG}/featured-image.png`, label: "Voice guidelines" },
      { image: `${IMG}/goat-featured.png`, label: "Messaging frameworks" },
      { image: `${IMG}/copper-feature.png`, label: "Content strategy" },
      { image: `${IMG}/finura-logo-still.png`, label: "Editorial tone" },
    ],
    introHeading: "A voice that's\nunmistakably yours",
    introText:
      "Your brand's tone of voice is how people experience your personality. We help you find the words that sound like you and resonate with the people you want to reach.",
    contentRows: [
      {
        heading: "Voice definition",
        text: "We articulate your brand's personality in words — defining the traits, attitudes, and language patterns that make your voice consistent and distinctive.",
        image: `${IMG}/featured-image.png`,
      },
      {
        heading: "Practical guidelines",
        text: "Voice guidelines that your team can actually use. Clear do's and don'ts, real examples, and frameworks for writing everything from emails to social posts.",
        image: `${IMG}/goat-featured.png`,
      },
    ],
    stats: [
      { label: "Voice projects", value: "60+" },
      { label: "Industries covered", value: "20+" },
      { label: "Consistency improvement", value: "85%" },
      { label: "Client satisfaction", value: "97%" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
  "web-design-development": {
    slug: "web-design-development",
    title: "Web design & development",
    heading: "Web design &\ndevelopment",
    intro:
      "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
    category: "web",
    bentoItems: [
      { image: `${IMG}/upp-featured-mobile.jpg`, label: "Web design" },
      { image: `${IMG}/featured-image.png`, label: "Development" },
      { image: `${IMG}/goat-featured.png`, label: "E-commerce" },
      { image: `${IMG}/copper-feature.png`, label: "CMS platforms" },
    ],
    introHeading: "Digital experiences\nthat perform",
    introText:
      "We design and build websites that don't just look great — they convert. Every project is a balance of creative ambition and commercial performance, built on technology that scales.",
    contentRows: [
      {
        heading: "Creative design",
        text: "We design experiences that stop people in their tracks. Every layout, interaction, and animation is crafted to engage and convert.",
        image: `${IMG}/upp-featured-mobile.jpg`,
      },
      {
        heading: "Technical excellence",
        text: "Beautiful designs deserve beautiful engineering. We build on modern frameworks with performance, accessibility, and scalability baked in from day one.",
        image: `${IMG}/featured-image.png`,
      },
      {
        heading: "E-commerce solutions",
        text: "From Shopify to custom builds, we create online stores that drive revenue and deliver seamless customer experiences.",
        image: `${IMG}/goat-featured.png`,
      },
    ],
    stats: [
      { label: "Websites launched", value: "150+" },
      { label: "Avg. conversion lift", value: "45%" },
      { label: "Lighthouse score avg.", value: "95+" },
      { label: "Core Web Vitals pass", value: "98%" },
    ],
    relatedProjects: [
      {
        title: "UPP",
        year: "2025",
        description: "A cinematic web experience for a Hollywood powerhouse.",
        image: `${IMG}/upp-featured-mobile.jpg`,
      },
      {
        title: "Copper",
        year: "2026",
        description: "A new brand for the technology behind always-on markets.",
        image: `${IMG}/copper-feature.png`,
      },
    ],
    relatedArticles: [
      {
        title: "Web design trends for 2026",
        excerpt: "The trends shaping the next generation of digital experiences.",
        image: `${IMG}/featured-image.png`,
        date: "2026-02-01",
      },
    ],
    testimonials: [
      {
        quote: "Our new site doubled our conversion rate in three months.",
        author: "James Wright",
        role: "Marketing Director, UPP",
      },
    ],
  },
  "creative-web-design": {
    slug: "creative-web-design",
    title: "Creative web design",
    heading: "Creative\nweb design",
    intro:
      "Award-winning web design that pushes boundaries and delivers results.",
    parent: "web-design-development",
    category: "web",
    bentoItems: [
      { image: `${IMG}/upp-featured-mobile.jpg`, label: "UI design" },
      { image: `${IMG}/featured-image.png`, label: "UX strategy" },
      { image: `${IMG}/goat-featured.png`, label: "Motion design" },
      { image: `${IMG}/copper-feature.png`, label: "Prototyping" },
    ],
    introHeading: "Design that makes\npeople feel something",
    introText:
      "We craft visually stunning digital experiences that engage, persuade, and convert. Every design decision is intentional — driven by strategy and refined through craft.",
    contentRows: [
      {
        heading: "User-centred design",
        text: "Beautiful design means nothing if it doesn't work. We start with user research and build experiences that are intuitive, accessible, and conversion-focused.",
        image: `${IMG}/upp-featured-mobile.jpg`,
      },
      {
        heading: "Creative direction",
        text: "We bring a distinctive creative vision to every project — from visual language and motion design to interactive experiences that make people stop and take notice.",
        image: `${IMG}/featured-image.png`,
      },
    ],
    stats: [
      { label: "Design awards", value: "18" },
      { label: "Projects delivered", value: "90+" },
      { label: "Avg. engagement lift", value: "60%" },
      { label: "Client return rate", value: "80%" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
  "web-development": {
    slug: "web-development",
    title: "Web development",
    heading: "Web\ndevelopment",
    intro:
      "Performance-driven development on modern frameworks, built to scale.",
    parent: "web-design-development",
    category: "web",
    bentoItems: [
      { image: `${IMG}/featured-image.png`, label: "Next.js" },
      { image: `${IMG}/upp-featured-mobile.jpg`, label: "React" },
      { image: `${IMG}/goat-featured.png`, label: "Headless CMS" },
      { image: `${IMG}/copper-feature.png`, label: "API integration" },
    ],
    introHeading: "Engineering that\npowers ambition",
    introText:
      "We build fast, accessible, and scalable websites using the best tools for the job. Our development team works closely with design to ensure pixel-perfect execution.",
    contentRows: [
      {
        heading: "Frontend development",
        text: "React, Next.js, and modern JavaScript frameworks. We build interfaces that are fast, fluid, and a joy to use.",
        image: `${IMG}/featured-image.png`,
      },
      {
        heading: "Backend and CMS",
        text: "From headless CMS platforms to custom APIs, we build the infrastructure that keeps your content flowing and your team productive.",
        image: `${IMG}/goat-featured.png`,
      },
    ],
    stats: [
      { label: "Projects shipped", value: "100+" },
      { label: "Avg. page load", value: "<1.5s" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Accessibility score", value: "AA+" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
  "wordpress-cms": {
    slug: "wordpress-cms",
    title: "WordPress & CMS",
    heading: "WordPress &\nCMS",
    intro:
      "Flexible content management solutions that give your team control without compromise.",
    parent: "web-design-development",
    category: "web",
    bentoItems: [
      { image: `${IMG}/goat-featured.png`, label: "WordPress" },
      { image: `${IMG}/copper-feature.png`, label: "Sanity" },
      { image: `${IMG}/featured-image.png`, label: "Contentful" },
      { image: `${IMG}/upp-featured-mobile.jpg`, label: "Shopify" },
    ],
    introHeading: "Content management\nmade effortless",
    introText:
      "We set up and customise CMS platforms so your team can manage content with confidence. No more developer bottlenecks.",
    contentRows: [
      {
        heading: "WordPress development",
        text: "Custom WordPress themes and plugins built for performance and ease of use. We make WordPress do exactly what you need.",
        image: `${IMG}/goat-featured.png`,
      },
      {
        heading: "Headless CMS",
        text: "For teams that need flexibility, we implement headless CMS platforms like Sanity and Contentful — giving you a content backend that powers any frontend.",
        image: `${IMG}/copper-feature.png`,
      },
    ],
    stats: [
      { label: "CMS implementations", value: "70+" },
      { label: "WordPress sites", value: "45+" },
      { label: "Headless setups", value: "25+" },
      { label: "Client satisfaction", value: "96%" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
  "growth-marketing": {
    slug: "growth-marketing",
    title: "Growth marketing",
    heading: "Growth\nmarketing",
    intro:
      "Performance marketing that compounds — turning traffic into measurable growth.",
    category: "growth",
    bentoItems: [
      { image: `${IMG}/goat-featured.png`, label: "SEO" },
      { image: `${IMG}/featured-image.png`, label: "Content marketing" },
      { image: `${IMG}/copper-feature.png`, label: "Analytics" },
      { image: `${IMG}/upp-featured-mobile.jpg`, label: "Conversion optimisation" },
    ],
    introHeading: "Marketing that\nactually works",
    introText:
      "We build marketing strategies and execution plans that drive real, measurable growth. No vanity metrics — just outcomes that move the needle.",
    contentRows: [
      {
        heading: "Data-driven strategy",
        text: "Every decision we make is backed by data. We set up the analytics, define the metrics, and build dashboards so you always know what's working.",
        image: `${IMG}/copper-feature.png`,
      },
      {
        heading: "Multi-channel execution",
        text: "From SEO and content marketing to paid media and email, we execute across channels to create compounding growth loops.",
        image: `${IMG}/goat-featured.png`,
      },
    ],
    stats: [
      { label: "Revenue generated", value: "£50M+" },
      { label: "Traffic growth avg.", value: "200%" },
      { label: "Conversion improvement", value: "35%" },
      { label: "Client ROI", value: "5x" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
  sitecare: {
    slug: "sitecare",
    title: "SiteCare",
    heading: "SiteCare",
    intro:
      "Ongoing website care that keeps your digital presence performing at its best.",
    parent: "growth-marketing",
    category: "growth",
    bentoItems: [
      { image: `${IMG}/upp-featured-mobile.jpg`, label: "Maintenance" },
      { image: `${IMG}/copper-feature.png`, label: "Performance" },
      { image: `${IMG}/featured-image.png`, label: "Security" },
      { image: `${IMG}/goat-featured.png`, label: "Support" },
    ],
    introHeading: "Your website,\nalways performing",
    introText:
      "Websites aren't set-and-forget. SiteCare is our proactive support and maintenance service that keeps your site fast, secure, and up to date.",
    contentRows: [
      {
        heading: "Proactive maintenance",
        text: "We monitor, update, and maintain your website so issues never become problems. Software updates, security patches, and performance optimisation — handled.",
        image: `${IMG}/upp-featured-mobile.jpg`,
      },
      {
        heading: "Continuous improvement",
        text: "SiteCare isn't just maintenance. We continuously analyse performance and make improvements that drive better results over time.",
        image: `${IMG}/copper-feature.png`,
      },
    ],
    stats: [
      { label: "Sites under care", value: "60+" },
      { label: "Avg. uptime", value: "99.98%" },
      { label: "Response time", value: "<2hrs" },
      { label: "Issues prevented", value: "500+" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
  "seo-geo": {
    slug: "seo-geo",
    title: "SEO & GEO",
    heading: "SEO &\nGEO",
    intro:
      "Search engine and generative engine optimisation to keep you visible everywhere.",
    parent: "growth-marketing",
    category: "growth",
    bentoItems: [
      { image: `${IMG}/goat-featured.png`, label: "Technical SEO" },
      { image: `${IMG}/copper-feature.png`, label: "GEO strategy" },
      { image: `${IMG}/featured-image.png`, label: "Keyword research" },
      { image: `${IMG}/upp-featured-mobile.jpg`, label: "Link building" },
    ],
    introHeading: "Found everywhere,\nchosen often",
    introText:
      "We optimise your website for both traditional search engines and the new wave of AI-powered generative engines, ensuring your brand shows up wherever people are looking.",
    contentRows: [
      {
        heading: "Technical SEO",
        text: "Site speed, crawlability, structured data, and core web vitals. We make sure search engines can find, understand, and rank your content.",
        image: `${IMG}/goat-featured.png`,
      },
      {
        heading: "Generative Engine Optimisation",
        text: "The future of search is AI-driven. We optimise your content to be cited, recommended, and surfaced by generative AI tools.",
        image: `${IMG}/copper-feature.png`,
      },
    ],
    stats: [
      { label: "Avg. organic growth", value: "180%" },
      { label: "Keywords on page 1", value: "2000+" },
      { label: "AI citation rate", value: "75%" },
      { label: "Client retention", value: "92%" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
  copywriting: {
    slug: "copywriting",
    title: "Copywriting",
    heading: "Copy-\nwriting",
    intro:
      "Compelling words that turn attention into action.",
    parent: "growth-marketing",
    category: "growth",
    bentoItems: [
      { image: `${IMG}/featured-image.png`, label: "Website copy" },
      { image: `${IMG}/goat-featured.png`, label: "Blog content" },
      { image: `${IMG}/copper-feature.png`, label: "Brand messaging" },
      { image: `${IMG}/upp-featured-mobile.jpg`, label: "Email campaigns" },
    ],
    introHeading: "Words that\nmove people",
    introText:
      "Great copy doesn't just inform — it persuades. We write content that connects with your audience and drives them to take action.",
    contentRows: [
      {
        heading: "Website copywriting",
        text: "From homepage headlines to product descriptions, we write web copy that's clear, compelling, and conversion-focused.",
        image: `${IMG}/featured-image.png`,
      },
      {
        heading: "Content marketing",
        text: "Blog posts, whitepapers, case studies, and guides — we create content that builds authority and drives organic traffic.",
        image: `${IMG}/goat-featured.png`,
      },
    ],
    stats: [
      { label: "Words crafted", value: "5M+" },
      { label: "Content pieces", value: "500+" },
      { label: "Avg. engagement lift", value: "40%" },
      { label: "Client satisfaction", value: "98%" },
    ],
    relatedProjects: [],
    relatedArticles: [],
    testimonials: [],
  },
};

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(services);
}

export function getSiblingServices(
  slug: string
): { slug: string; title: string }[] {
  const service = services[slug];
  if (!service) return [];
  if (!service.parent) {
    return Object.values(services)
      .filter(
        (s) => s.category === service.category && s.slug !== slug && !s.parent
      )
      .map((s) => ({ slug: s.slug, title: s.title }));
  }
  return Object.values(services)
    .filter((s) => s.parent === service.parent && s.slug !== slug)
    .map((s) => ({ slug: s.slug, title: s.title }));
}
