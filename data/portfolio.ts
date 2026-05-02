export type PortfolioSectionId =
  | "home"
  | "projects"
  | "about"
  | "technologies"
  | "experience"
  | "socials";

export const portfolioSections: Array<{
  id: PortfolioSectionId;
  label: string;
  level: string;
}> = [
  { id: "home", label: "Home", level: "01" },
  { id: "projects", label: "Projects", level: "02" },
  { id: "about", label: "About Me", level: "03" },
  { id: "technologies", label: "Technologies", level: "04" },
  { id: "experience", label: "Work Experience", level: "05" },
  { id: "socials", label: "Socials", level: "06" },
];

export const heroSlides: Array<{
  src: string;
  position: string;
}> = [
  { src: "/hero-character-transparent.png", position: "center" },
];

export const projects = [
  {
    title: "Neon Portfolio OS",
    type: "Interactive Website",
    description:
      "A game-menu inspired portfolio shell with scroll-linked levels, cinematic panels, and glowing UI states.",
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    image: "/project-portfolio-os.svg",
  },
  {
    title: "Commerce Command Deck",
    type: "Product Interface",
    description:
      "A modular storefront dashboard concept focused on product cards, checkout flow clarity, and admin speed.",
    stack: ["React", "Node", "Stripe", "Figma"],
    image: "/project-commerce-deck.svg",
  },
  {
    title: "Realtime Ops Grid",
    type: "Dashboard System",
    description:
      "A monitoring interface for live metrics, operational alerts, and drill-down workflow inspection.",
    stack: ["TypeScript", "WebSockets", "Charts", "Design Systems"],
    image: "/project-ops-grid.svg",
  },
  {
    title: "API Signal Router",
    type: "Backend Console",
    description:
      "A service map for API routes, event payloads, and backend status signals in one operator view.",
    stack: ["Node.js", "PostgreSQL", "REST APIs", "Testing"],
    image: "/project-api-router.svg",
  },
];

export const technologies = [
  {
    name: "TypeScript",
    alias: "TS",
    role: "The Type System",
    palette: "violet",
  },
  {
    name: "JavaScript",
    alias: "JS",
    role: "The Runtime",
    palette: "orange",
  },
  {
    name: "React",
    alias: "RX",
    role: "The Interface",
    palette: "cyan",
  },
  {
    name: "Next.js",
    alias: "NX",
    role: "The Framework",
    palette: "red",
  },
  {
    name: "Node.js",
    alias: "ND",
    role: "The Server",
    palette: "green",
  },
  {
    name: "PostgreSQL",
    alias: "PG",
    role: "The Database",
    palette: "blue",
  },
  {
    name: "Tailwind",
    alias: "TW",
    role: "The Stylist",
    palette: "cyan",
  },
  {
    name: "Git",
    alias: "GT",
    role: "The Timeline",
    palette: "orange",
  },
  {
    name: "Flutter",
    alias: "FL",
    role: "The Mobile Kit",
    palette: "blue",
  },
  {
    name: "C#",
    alias: "C#",
    role: "The App Core",
    palette: "red",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    period: "Current Loadout",
    description:
      "Build responsive product interfaces, reusable components, and polished user-facing flows.",
    bullets: [
      "Translate design concepts into accessible, production-ready React experiences.",
      "Shape component APIs that stay readable as product requirements grow.",
      "Collaborate across product, design, and backend implementation details.",
    ],
  },
  {
    role: "Freelance Web Builder",
    period: "Side Quests",
    description:
      "Deliver focused websites, prototypes, and interface systems for small businesses and personal brands.",
    bullets: [
      "Turn vague goals into concrete page structures and launch-ready UI.",
      "Balance visual identity, performance, and maintainability.",
    ],
  },
];

export const socials = [
  { label: "GitHub", handle: "@your-github", href: "https://github.com/" },
  { label: "LinkedIn", handle: "/in/your-profile", href: "https://www.linkedin.com/" },
  { label: "Twitter / X", handle: "@your-handle", href: "https://x.com/" },
  { label: "Email", handle: "hello@example.com", href: "mailto:hello@example.com" },
];
