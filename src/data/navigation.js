export const navigation = [
  {
    label: "Projects",
    key: "nav.projects",
    links: [
      { label: "All Projects", key: "nav.projects.all", href: "/projects/" },
      { label: "Automation", key: "nav.projects.automation", href: "/projects/automation/" },
      { label: "Data Dashboards", key: "nav.projects.data", href: "/projects/data/" },
    ],
  },
  {
    label: "Writing",
    key: "nav.writing",
    links: [
      { label: "All Writing", key: "nav.writing.all", href: "/writing/" },
      { label: "Deployment Notes", key: "nav.writing.deployment", href: "/writing/deployment/" },
      { label: "Career Growth", key: "nav.writing.career", href: "/writing/career/" },
    ],
  },
  {
    label: "About",
    key: "nav.about",
    links: [
      { label: "About Me", key: "nav.about.me", href: "/about/" },
      { label: "Contact", key: "nav.about.contact", href: "/contact/" },
    ],
  },
];

export const projectCards = [
  {
    eyebrow: "Automation",
    title: "Automation Workflows",
    titleKey: "card.projects.automation.title",
    href: "/projects/automation/",
    description: "Scripts, API integrations, process automation, and operational efficiency.",
    descriptionKey: "card.projects.automation.description",
  },
  {
    eyebrow: "Data",
    title: "Data Dashboards",
    titleKey: "card.projects.data.title",
    href: "/projects/data/",
    description: "Data visualization, reporting, monitoring, and business insights.",
    descriptionKey: "card.projects.data.description",
  },
  {
    eyebrow: "Product",
    title: "Product Experience",
    titleKey: "card.projects.product.title",
    href: "/about/",
    description: "Turning complex requirements into clear product experiences.",
    descriptionKey: "card.projects.product.description",
  },
];

export const writingCards = [
  {
    eyebrow: "Deployment",
    title: "Deployment Notes",
    titleKey: "card.writing.deployment.title",
    href: "/writing/deployment/",
    description: "GitHub Pages, Azure, automated deployment, and website maintenance.",
    descriptionKey: "card.writing.deployment.description",
  },
  {
    eyebrow: "Career",
    title: "Career Growth",
    titleKey: "card.writing.career.title",
    href: "/writing/career/",
    description: "Project storytelling, portfolio writing, collaboration, and long-term growth.",
    descriptionKey: "card.writing.career.description",
  },
];
