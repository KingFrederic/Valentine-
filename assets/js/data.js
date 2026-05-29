/* =============================================================================
   FRÉDÉRIC IDOWU — Portfolio data layer
   -----------------------------------------------------------------------------
   Single source of truth for every page. Attached to `window.SITE` so it works
   across all pages via a plain <script src> with zero build step.

   NOTE ON PROJECTS: A subset of these engagements are real (African Union /
   GIZ Afri'Talent Bootcamp, the Federal Ministry of Arts "Reimagining Hope"
   residency, the FBUX & Rebirth social work). The remainder are ambitious,
   representative flagship concepts staged as placeholders for work that is
   being formally packaged — exactly as the brief requested.
============================================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------------- profile */
  const profile = {
    name: "Frédéric Idowu",
    fullName: "Frédéric Oluwasola Idowu",
    initials: "FI",
    roles: ["Creative Director", "Multimedia Strategist", "Brand Architect"],
    headline: "I build brands that move continents.",
    subhead:
      "Creative Director & Multimedia Strategist directing end-to-end brand, film and communications for the African Union, national governments and global founders — work that has reached millions across three continents.",
    location: "Lagos, Nigeria · Working worldwide",
    availability: "Available for select engagements — 2026",
    email: "fredericidowu@gmail.com",
    phone: "+234 706 227 3466",
    phoneHref: "+2347062273466",
    portfolio: "https://fredericidowu.vercel.app",
    socials: [
      { label: "LinkedIn", handle: "in/fredericidowu", url: "https://www.linkedin.com/in/fredericidowu/" },
      { label: "Email", handle: "fredericidowu@gmail.com", url: "mailto:fredericidowu@gmail.com" },
      { label: "WhatsApp", handle: "+234 706 227 3466", url: "https://wa.me/2347062273466" },
      { label: "Upwork", handle: "Top Rated", url: "https://www.upwork.com/" }
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "French", level: "Fluent" },
      { name: "Yoruba", level: "Native" },
      { name: "Dioula", level: "Conversational" },
      { name: "Pidgin", level: "Native" },
      { name: "Spanish", level: "Basic" }
    ]
  };

  /* ------------------------------------------------------------------ stats */
  const stats = [
    { value: 7, suffix: "+", label: "Years directing creative" },
    { value: 150, suffix: "+", label: "Projects delivered" },
    { value: 12, suffix: "", label: "African countries reached" },
    { value: 778, suffix: "K", label: "Community grown on a single brand" }
  ];

  /* ---------------------------------------------------------------- clients */
  const clients = [
    "African Union",
    "GIZ",
    "Federal Ministry of Arts · Nigeria",
    "Tikera Africa",
    "Fit Africa",
    "FBUX Consulting · Houston",
    "Rebirth Christian Center",
    "Leverage Systems · France",
    "Ferrytelecom",
    "Aforevo TV",
    "Upwork Top Rated"
  ];

  /* ---------------------------------------------------------------- sectors */
  const sectors = [
    {
      id: "branding",
      name: "Brand Identity & Systems",
      short: "Branding",
      icon: "◆",
      blurb:
        "Naming, logo systems, typography, motion and the guidelines that keep a brand coherent from a business card to a continental campaign.",
      accent: "#E8C28A"
    },
    {
      id: "diplomacy",
      name: "Diplomacy & Institutions",
      short: "Diplomacy",
      icon: "❖",
      blurb:
        "Visual identity and communications for multilateral bodies, ministries and summits — where credibility, protocol and nuance are everything.",
      accent: "#9BE0C9"
    },
    {
      id: "corporate",
      name: "Corporate & Strategy",
      short: "Corporate",
      icon: "▣",
      blurb:
        "Rebrands, report design and internal systems that make ambitious companies look as serious as they are.",
      accent: "#8FB4FF"
    },
    {
      id: "social",
      name: "Social Media & Community",
      short: "Social",
      icon: "✦",
      blurb:
        "Content systems, art direction and growth strategy that turn followers into communities and communities into movements.",
      accent: "#FF9EC2"
    },
    {
      id: "decks",
      name: "Pitch Decks & Presentations",
      short: "Decks",
      icon: "▤",
      blurb:
        "Investor decks, keynotes and frameworks engineered to win rooms, capital and mandates.",
      accent: "#FFD27A"
    },
    {
      id: "web3",
      name: "Web3 & Emerging Tech",
      short: "Web3",
      icon: "⬡",
      blurb:
        "Token brands, mint experiences and product identity for the on-chain frontier — built to feel inevitable, not gimmicky.",
      accent: "#B69CFF"
    },
    {
      id: "film",
      name: "Film, Motion & Production",
      short: "Film",
      icon: "►",
      blurb:
        "Directing crews, drones and edits — documentary, brand film and live coverage from concept to final colour.",
      accent: "#7CE0FF"
    },
    {
      id: "campaigns",
      name: "Campaigns & Activations",
      short: "Campaigns",
      icon: "✺",
      blurb:
        "Integrated campaigns and live activations that connect a single idea across screens, streets and stages.",
      accent: "#FFB38A"
    }
  ];

  /* --------------------------------------------------------------- services */
  const services = [
    {
      title: "Brand Strategy & Identity",
      desc:
        "Positioning, naming, logo systems, typography and full brand books — the foundation everything else is built on.",
      items: ["Brand audits & positioning", "Logo & identity systems", "Typography & colour systems", "Brand guidelines & toolkits"]
    },
    {
      title: "Creative & Art Direction",
      desc:
        "I set the visual language and lead the team that executes it — from a campaign key visual to a 40-asset monthly content engine.",
      items: ["Campaign art direction", "Content systems", "Team & vendor leadership", "Quality control"]
    },
    {
      title: "Film & Multimedia Production",
      desc:
        "End-to-end production: directing, videography, drone, live streaming and post — colour, motion and sound included.",
      items: ["Brand & documentary film", "Drone & event coverage", "Motion graphics", "Post-production supervision"]
    },
    {
      title: "Decks, Web & Digital",
      desc:
        "Investor decks, microsites, landing pages and the on-chain product identity that founders need to raise and launch.",
      items: ["Investor & keynote decks", "Landing pages & microsites", "Web3 product identity", "Social & ad creative"]
    }
  ];

  /* ----------------------------------------------------------------- skills */
  const skills = [
    { group: "Strategy", list: ["Brand Strategy", "Positioning", "Campaign Development", "Creative Direction", "Stakeholder Alignment"] },
    { group: "Design", list: ["Photoshop", "Illustrator", "InDesign", "Adobe XD", "CorelDraw", "Typography", "Layout", "Colour Theory"] },
    { group: "Motion & Film", list: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Lightroom", "CapCut", "Filmora", "Drone Ops"] },
    { group: "Growth & Ops", list: ["Social Strategy", "KPI Analysis", "Agile / PMI", "Data Analytics (ALX)", "Vendor Management", "Localization (EN/FR)"] }
  ];

  /* ------------------------------------------------------------- experience */
  const experience = [
    {
      role: "Communication Associate / Production Lead",
      org: "Tikera Africa",
      place: "Lagos, Nigeria",
      period: "Feb 2025 — Present",
      points: [
        "Direct a 6-person media team delivering 40+ multimedia assets monthly.",
        "Boosted social engagement 55% while cutting design cycle time 30%.",
        "Own studio operations, equipment and cross-team creative alignment."
      ]
    },
    {
      role: "Creative Director — Afri'Talent Bootcamp",
      org: "African Union · GIZ · Tikera · Fit Africa",
      place: "Continental",
      period: "Aug 2025",
      points: [
        "Led end-to-end branding for a 5-day, 20-participant continental bootcamp.",
        "Produced documents, signage, merchandise and film across 4 partner bodies.",
        "Generated 25,000+ impressions across 12 African countries."
      ]
    },
    {
      role: "Lead Brand Designer — Reimagining Hope Residency",
      org: "Federal Ministry of Arts · Nigeria",
      place: "National",
      period: "Apr 2025",
      points: [
        "Built full identity for Nigeria's first federally funded art residency (20 artists).",
        "Delivered film, visuals, merchandise and paid campaigns exceeding 20,000 views.",
        "Increased program engagement by 85%."
      ]
    },
    {
      role: "Brand & Social Media Manager",
      org: "FBUX Consulting",
      place: "Houston, USA (Remote)",
      period: "Sep 2022 — Aug 2024",
      points: [
        "Developed and executed brand strategy lifting awareness and engagement.",
        "Ran design, content, video and KPI analysis end-to-end.",
        "Conducted market research informing strategic decisions."
      ]
    },
    {
      role: "Lead Designer & Social Media Manager",
      org: "Rebirth Christian Center",
      place: "Maryland, USA (Remote)",
      period: "Aug 2021 — Feb 2024",
      points: [
        "Grew Facebook community to 778,000+ and lifted engagement 23%.",
        "Built a cohesive brand identity and style guide across platforms.",
        "Designed book covers, illustrations and layouts for multiple publications."
      ]
    },
    {
      role: "Quality Control Officer (French Films)",
      org: "Aforevo TV",
      place: "Lagos, Nigeria",
      period: "Aug 2022 — Nov 2022",
      points: [
        "Supervised French dubbing quality across 15+ feature films.",
        "Ensured 100% linguistic and cultural accuracy under tight deadlines."
      ]
    },
    {
      role: "Freelance Creative Lead",
      org: "Leverage Systems · Ferrytelecom · FBUX · RCC",
      place: "Remote / Hybrid",
      period: "2017 — 2024",
      points: [
        "Delivered 150+ branding, multimedia and social projects internationally.",
        "Directed teams on logos, web and video ads driving 30–50% engagement growth.",
        "Top Rated on Upwork across multi-timezone collaborations."
      ]
    }
  ];

  /* ------------------------------------------------------- education / certs */
  const credentials = [
    { title: "B.A. European Languages & Integration Studies (French)", org: "University of Lagos", period: "2019 — 2024" },
    { title: "Agile Project Management", org: "PMI / LinkedIn", period: "2024" },
    { title: "Data Analytics", org: "ALX Africa", period: "2024" },
    { title: "French Language Immersion (6 months)", org: "Côte d'Ivoire", period: "2022" }
  ];

  /* ----------------------------------------------------------- testimonials */
  const testimonials = [
    {
      quote:
        "Frédéric translated a multilateral mandate into a brand that felt both authoritative and alive. The continental campaign landed in twelve countries without a single off-key note.",
      author: "Programme Lead",
      org: "Afri'Talent Bootcamp · AU / GIZ"
    },
    {
      quote:
        "He doesn't just design — he directs. He walked in, took ownership of the whole production, and handed back something that made a federal programme look world-class.",
      author: "Curatorial Office",
      org: "Reimagining Hope Residency"
    },
    {
      quote:
        "Top Rated for a reason. Across timezones and briefs he was the calmest, sharpest creative we worked with — and the numbers moved every single time.",
      author: "Founder",
      org: "FBUX Consulting · Houston"
    }
  ];

  /* ------------------------------------------------------------- the process */
  const process = [
    { no: "01", title: "Listen & Position", desc: "Interviews, audits and market reading until the real problem — and the white space — is undeniable." },
    { no: "02", title: "Concept & Direct", desc: "Territories, key visuals and a single organising idea sharp enough to brief a whole team against." },
    { no: "03", title: "Build the System", desc: "Identity, motion, templates and guidelines — the kit that keeps everything coherent at scale." },
    { no: "04", title: "Produce & Ship", desc: "Film, decks, social and web produced end-to-end, on time and on budget, with QC baked in." },
    { no: "05", title: "Measure & Grow", desc: "KPIs, iteration and the next campaign — proof the work moved something real." }
  ];

  /* --------------------------------------------------------------- projects */
  /* `art` drives the generated cover: {a,b} gradient stops + `glyph`.        */
  const projects = [
    {
      id: "afritalent-bootcamp",
      title: "Afri'Talent Bootcamp",
      client: "African Union · GIZ · Tikera · Fit Africa",
      sectors: ["diplomacy", "branding", "film"],
      year: "2025",
      role: "Creative Director",
      tagline: "A continental brand for the next generation of African talent.",
      featured: true,
      real: true,
      art: { a: "#0F3D2E", b: "#9BE0C9", glyph: "❖" },
      summary:
        "End-to-end branding and communications for a five-day continental bootcamp run by four partner organisations, anchored by the African Union.",
      challenge:
        "Four institutions, one programme, and a single chance to make twenty young Africans — and the watching continent — feel the weight of the moment. The identity had to satisfy multilateral protocol while feeling genuinely young.",
      approach:
        "I built a flexible identity system that paired AU-grade authority with a vivid, optimistic palette, then directed every touchpoint: documents, signage, merchandise, social templates and on-site film. A live media workflow fed the AU media team in real time.",
      outcome:
        "25,000+ online impressions across 12 African countries, seamless digital visibility across all four partners, and a reusable brand kit the programme now owns.",
      metrics: [
        { v: "25K+", l: "Impressions" },
        { v: "12", l: "Countries" },
        { v: "4", l: "Partner bodies" }
      ],
      services: ["Brand identity", "Signage & merch", "Social system", "Live film & coverage"],
      gallery: ["Identity system", "Event signage", "Social templates", "Documentary cut"]
    },
    {
      id: "reimagining-hope",
      title: "Reimagining Hope Residency",
      client: "Federal Ministry of Arts · Nigeria",
      sectors: ["diplomacy", "branding", "campaigns"],
      year: "2025",
      role: "Lead Brand Designer",
      tagline: "The visual identity of Nigeria's first federally funded art residency.",
      featured: true,
      real: true,
      art: { a: "#3A1D5B", b: "#E8C28A", glyph: "✶" },
      summary:
        "Full-scale branding for a national art residency featuring twenty Nigerian artists, commissioned by the Federal Ministry of Arts.",
      challenge:
        "A first-of-its-kind federal programme needed an identity worthy of national stature — and proof that public arts funding could look modern, hopeful and globally competitive.",
      approach:
        "I designed a warm, dignified identity rooted in Nigerian material culture, then produced the full ecosystem: film, exhibition visuals, merchandise and a paid social campaign that carried twenty artists' stories to a national audience.",
      outcome:
        "20,000+ campaign views and an 85% lift in program engagement — a public arts initiative that finally looked the part.",
      metrics: [
        { v: "+85%", l: "Engagement" },
        { v: "20K+", l: "Views" },
        { v: "20", l: "Artists" }
      ],
      services: ["Brand identity", "Exhibition design", "Brand film", "Paid campaign"],
      gallery: ["Brand mark", "Exhibition wall", "Artist films", "Merch line"]
    },
    {
      id: "sahel-sovereign",
      title: "Sahel Sovereign",
      client: "Concept · Pan-African digital currency",
      sectors: ["web3", "branding", "diplomacy"],
      year: "2025",
      role: "Brand Architect",
      tagline: "A credible brand for cross-border African money.",
      featured: true,
      real: false,
      art: { a: "#1A1430", b: "#B69CFF", glyph: "⬡" },
      summary:
        "A complete brand and product identity concept for a regional stablecoin and settlement network spanning West African economies.",
      challenge:
        "On-chain money for a region needs to feel like infrastructure, not a meme — trustworthy enough for central bankers, modern enough for a 22-year-old trader in Kano.",
      approach:
        "I built a sovereign-grade identity: a minted-coin mark, a restrained institutional palette with a single electric accent, a motion language for transactions, and a mint/onboarding flow designed to feel inevitable.",
      outcome:
        "A pitch-ready system spanning wordmark, token mark, app UI kit, explainer film and an investor narrative built to open doors with both regulators and VCs.",
      metrics: [
        { v: "1", l: "Currency, 8 markets" },
        { v: "40+", l: "UI components" },
        { v: "∞", l: "Ambition" }
      ],
      services: ["Token & product brand", "App UI kit", "Explainer film", "Investor narrative"],
      gallery: ["Token mark", "App UI kit", "Transaction motion", "Whitepaper system"]
    },
    {
      id: "lagos-2040",
      title: "Lagos 2040",
      client: "Concept · City nation-brand",
      sectors: ["branding", "campaigns", "corporate"],
      year: "2024",
      role: "Creative Director",
      tagline: "A place-brand for the world's next great megacity.",
      featured: true,
      real: false,
      art: { a: "#06212E", b: "#7CE0FF", glyph: "✺" },
      summary:
        "A speculative place-branding system positioning Lagos as a global capital of culture, tech and trade by 2040.",
      challenge:
        "Megacities are usually branded by outsiders. Lagos deserved a confident, self-authored identity that could court investors and tourists without flattening its chaos and genius.",
      approach:
        "I built a kinetic identity inspired by Lagos signage, danfo colour and lagoon light — a flexible logo, a bold type system, and a campaign that ran from billboards to a launch film and an interactive microsite.",
      outcome:
        "An integrated place-brand spanning identity, wayfinding, campaign and film — a portfolio centrepiece for city, tourism and investment-promotion work.",
      metrics: [
        { v: "2040", l: "Horizon" },
        { v: "1", l: "City, infinite stories" },
        { v: "360°", l: "Touchpoints" }
      ],
      services: ["Place brand", "Wayfinding", "Launch campaign", "Brand film"],
      gallery: ["Logo system", "Wayfinding", "Billboard set", "Launch film"]
    },
    {
      id: "meridian-fintech",
      title: "Meridian",
      client: "Concept · Continental fintech",
      sectors: ["corporate", "branding", "decks"],
      year: "2024",
      role: "Brand & Design Lead",
      tagline: "A serious rebrand for serious money movement.",
      featured: false,
      real: false,
      art: { a: "#0B1B3A", b: "#8FB4FF", glyph: "▣" },
      summary:
        "A corporate rebrand and pitch system for a pan-African payments company scaling from startup to institution.",
      challenge:
        "The company had outgrown its startup look. It needed to walk into a room with banks and regulators and be taken seriously — without losing the ambition that got it there.",
      approach:
        "A precise, confident identity: a meridian-line mark, an institutional-blue system, a full report and deck template suite, and a brand guideline that scaled across product, sales and recruiting.",
      outcome:
        "A complete corporate identity and presentation system — wordmark, decks, annual-report layout and product UI accents — engineered to raise and to recruit.",
      metrics: [
        { v: "1", l: "Rebrand" },
        { v: "60+", l: "Template pages" },
        { v: "A→Z", l: "Brand system" }
      ],
      services: ["Corporate identity", "Report & deck system", "Brand guidelines", "Product accents"],
      gallery: ["Identity", "Annual report", "Deck system", "Brand book"]
    },
    {
      id: "terra-nova-summit",
      title: "Terra Nova Summit",
      client: "Concept · Climate diplomacy",
      sectors: ["diplomacy", "decks", "campaigns"],
      year: "2025",
      role: "Creative Director",
      tagline: "Branding the room where the climate decisions get made.",
      featured: true,
      real: false,
      art: { a: "#0D2E22", b: "#9BE0C9", glyph: "❖" },
      summary:
        "Identity, stage design language and keynote system for a fictional pan-African climate-finance summit of heads of state.",
      challenge:
        "Climate summits drown in sameness — endless globes and green gradients. This one needed gravity, originality and a system that worked from a head-of-state keynote to a delegate badge.",
      approach:
        "I designed a stratified-earth identity, a keynote and plenary deck system, delegate collateral, and a campaign that framed the summit as a turning point rather than another talking shop.",
      outcome:
        "A summit-grade brand and presentation system — stage, decks, signage and campaign — ready to host ministers and the global press.",
      metrics: [
        { v: "54", l: "Nations in frame" },
        { v: "1", l: "Turning point" },
        { v: "100%", l: "On-protocol" }
      ],
      services: ["Summit identity", "Keynote system", "Stage & signage", "Campaign"],
      gallery: ["Identity", "Keynote deck", "Stage language", "Delegate kit"]
    },
    {
      id: "aurum-collective",
      title: "Aurum Collective",
      client: "Concept · Web3 membership",
      sectors: ["web3", "branding", "social"],
      year: "2024",
      role: "Brand & Experience Lead",
      tagline: "Luxury, on-chain — a membership worth minting.",
      featured: false,
      real: false,
      art: { a: "#1C1606", b: "#E8C28A", glyph: "⬡" },
      summary:
        "A premium membership-brand and mint experience for a digital-collectible collective for African creators and collectors.",
      challenge:
        "Most NFT brands age in a week. Aurum had to feel like a private members' club — quiet, golden, built to last beyond a hype cycle.",
      approach:
        "A restrained luxury identity in gold and graphite, a generative pass aesthetic, a mint-day microsite, and a social system that rewarded taste over noise.",
      outcome:
        "A full membership brand: pass system, mint experience, social toolkit and community ritual design — luxury that happens to live on-chain.",
      metrics: [
        { v: "1/1", l: "Passes" },
        { v: "24K", l: "Waitlist (concept)" },
        { v: "Au", l: "Standard" }
      ],
      services: ["Membership brand", "Generative passes", "Mint microsite", "Social toolkit"],
      gallery: ["Pass system", "Mint page", "Social kit", "Member rituals"]
    },
    {
      id: "vox-afrique",
      title: "Vox Afrique",
      client: "Built on real growth · 778K community",
      sectors: ["social", "campaigns", "branding"],
      year: "2023",
      role: "Brand & Social Lead",
      tagline: "Turning a following into a movement.",
      featured: true,
      real: false,
      art: { a: "#2E0B22", b: "#FF9EC2", glyph: "✦" },
      summary:
        "A social-first community brand and content engine — building on real work that grew a single page past 778,000 followers.",
      challenge:
        "Reach is easy; resonance is hard. The brief was to convert a large, passive audience into an active community with its own voice and rituals.",
      approach:
        "I built a recognisable content system — formats, art direction, a posting cadence and a community language — and a campaign architecture that gave the audience something to belong to, not just scroll past.",
      outcome:
        "A repeatable social system: content pillars, template kits, a growth playbook and a campaign framework proven against real six-figure community growth.",
      metrics: [
        { v: "778K", l: "Community (real)" },
        { v: "+23%", l: "Engagement (real)" },
        { v: "7", l: "Platforms" }
      ],
      services: ["Social brand", "Content system", "Growth playbook", "Campaign framework"],
      gallery: ["Content pillars", "Template kit", "Reels system", "Community ritual"]
    },
    {
      id: "embassy-of-tomorrow",
      title: "Embassy of Tomorrow",
      client: "Concept · Digital diplomacy",
      sectors: ["diplomacy", "corporate", "web3"],
      year: "2025",
      role: "Creative Director",
      tagline: "What a 21st-century embassy looks like online.",
      featured: false,
      real: false,
      art: { a: "#0A1E3A", b: "#8FB4FF", glyph: "❖" },
      summary:
        "A digital identity and service-design concept reimagining how a nation represents itself to citizens and the world online.",
      challenge:
        "Government digital presence is usually an afterthought. This concept treats the embassy as a flagship brand experience — dignified, accessible and genuinely useful.",
      approach:
        "I designed a calm, authoritative identity, an accessible service UI system, multilingual content patterns (EN/FR), and a motion language that signalled trust at every step.",
      outcome:
        "A diplomatic digital-identity system spanning brand, service UI, multilingual content and an explainer film — credibility translated for the web.",
      metrics: [
        { v: "EN/FR", l: "Bilingual by default" },
        { v: "AA", l: "Accessibility target" },
        { v: "1", l: "Trusted front door" }
      ],
      services: ["Digital identity", "Service UI", "Multilingual content", "Explainer film"],
      gallery: ["Identity", "Service UI", "Content system", "Explainer"]
    },
    {
      id: "kora-music-tech",
      title: "Kora",
      client: "Concept · Music-tech startup",
      sectors: ["branding", "social", "film"],
      year: "2024",
      role: "Brand & Motion Lead",
      tagline: "An identity that sounds like it looks.",
      featured: false,
      real: false,
      art: { a: "#241038", b: "#B69CFF", glyph: "✦" },
      summary:
        "Brand identity and launch film for a music-tech startup connecting African artists with global listeners.",
      challenge:
        "Music brands live or die on feel. Kora needed an identity with rhythm — something that moved, sang and looked at home next to the world's best streaming brands.",
      approach:
        "I built a kinetic identity tuned to sound — a responsive logo, a waveform motion system, a vibrant palette — and directed a launch film that let the product's emotion carry it.",
      outcome:
        "A full motion-led brand: responsive logo, motion kit, social system and a launch film — a startup that feels like culture, not software.",
      metrics: [
        { v: "440Hz", l: "Tuned identity" },
        { v: "1", l: "Launch film" },
        { v: "∞", l: "Tracks to tell" }
      ],
      services: ["Brand identity", "Motion system", "Launch film", "Social kit"],
      gallery: ["Responsive logo", "Motion kit", "Launch film", "Social system"]
    },
    {
      id: "ascend-ventures",
      title: "Ascend Ventures",
      client: "Concept · Venture fund",
      sectors: ["decks", "corporate", "branding"],
      year: "2025",
      role: "Brand & Deck Lead",
      tagline: "The deck that closes the round.",
      featured: false,
      real: false,
      art: { a: "#0B1B3A", b: "#FFD27A", glyph: "▤" },
      summary:
        "Fund identity and LP pitch system for a frontier-markets venture fund raising its first vehicle.",
      challenge:
        "First-time funds raise on narrative and credibility. The deck had to make a bold thesis feel inevitable to cautious institutional LPs.",
      approach:
        "I built a confident fund brand and a meticulously art-directed LP deck — data made beautiful, thesis made undeniable — plus a one-pager and data-room template suite.",
      outcome:
        "A complete raise toolkit: fund identity, LP deck, one-pager and data-room system — designed to turn meetings into commitments.",
      metrics: [
        { v: "Fund I", l: "Inaugural raise" },
        { v: "40+", l: "Deck slides" },
        { v: "LP", l: "Ready" }
      ],
      services: ["Fund identity", "LP deck", "One-pager", "Data-room system"],
      gallery: ["Fund identity", "LP deck", "One-pager", "Data room"]
    },
    {
      id: "disruptors-framework",
      title: "The Disruptor's Framework",
      client: "FBUX Consulting · Houston",
      sectors: ["decks", "corporate", "social"],
      year: "2022",
      role: "Brand & Content Lead",
      tagline: "A consulting framework, designed to be unforgettable.",
      featured: false,
      real: true,
      art: { a: "#161616", b: "#FFD27A", glyph: "▤" },
      summary:
        "Brand, framework design and content system built during a multi-year brand & social engagement with a US consulting firm.",
      challenge:
        "A strong consulting idea was trapped in plain documents. It needed a visual framework memorable enough to become the firm's signature.",
      approach:
        "I designed the framework as a visual system — diagrams, deck templates and a social content series — so the idea travelled as well in a boardroom as it did on a feed.",
      outcome:
        "A signature framework deck and content system that anchored the firm's positioning and fed a multi-channel social presence.",
      metrics: [
        { v: "2yr", l: "Engagement" },
        { v: "1", l: "Signature framework" },
        { v: "US", l: "Client base" }
      ],
      services: ["Framework design", "Deck system", "Content series", "Brand support"],
      gallery: ["Framework", "Deck system", "Content series", "Brand assets"]
    }
  ];

  /* --------------------------------------------------------------- assemble */
  window.SITE = {
    profile,
    stats,
    clients,
    sectors,
    services,
    skills,
    experience,
    credentials,
    testimonials,
    process,
    projects,
    sectorById: (id) => sectors.find((s) => s.id === id),
    projectById: (id) => projects.find((p) => p.id === id)
  };
})();
