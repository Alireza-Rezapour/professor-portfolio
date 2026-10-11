// Typed mock content. Replace these exports with database/API data later;
// the components only depend on the types below.

export interface NavLink {
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  name: string;
  position: string;
  headline: string;
  description: string;
  image: { src: string; alt: string };
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
}

export const professorName = "دکتر محمدباقر جمالی";

export const navLinks: NavLink[] = [
  { label: "درباره من", href: "/about" },
  { label: "پژوهش", href: "/research" },
  { label: "پروژه‌ها", href: "/research#projects" },
  { label: "مقالات", href: "/research#publications" },
  { label: "تدریس", href: "/teaching" },
  { label: "تماس", href: "/contact" },
];

export const heroContent: HeroContent = {
  eyebrow: "استاد دانشگاه و پژوهشگر",
  name: professorName,
  position: "استادیار مهندسی صنایع · دانشگاه صنعتی شیراز",
  headline: "پژوهش برای تصمیم‌گیری بهتر در سیستم‌های پیچیده",
  description:
    "فعالیت‌های پژوهشی من بر بهینه‌سازی، تحقیق در عملیات و توسعه روش‌های داده‌محور برای حل مسائل پیچیده متمرکز است.",
  image: {
    src: "/images/professor-img.jpg",
    alt: `پرتره ${professorName}`,
  },
  primaryCta: { label: "درباره من", href: "/about" },
  secondaryCta: { label: "مقالات پژوهشی", href: "/research#publications" },
};

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  /** Marks the current position (subtle emphasis) */
  current?: boolean;
}

export interface ShortAboutContent {
  label: string;
  title: string;
  /** Words inside `title` that get a subtle emphasis */
  highlights: string[];
  description: string;
  expertise: string[];
  experienceLabel: string;
  experiences: ExperienceItem[];
  linkLabel: string;
  linkHref: string;
}

export const shortAbout: ShortAboutContent = {
  label: "درباره من",
  title: "پژوهش من در نقطه تلاقی تصمیم‌گیری، بهینه‌سازی و داده قرار دارد.",
  highlights: ["تصمیم‌گیری", "بهینه‌سازی", "داده"],
  description:
    "من دکتر محمدباقر جمالی، عضو هیئت علمی دانشکده مهندسی صنایع دانشگاه صنعتی شیراز هستم. فعالیت‌های آموزشی و پژوهشی من بر توسعه روش‌های نوین برای تحلیل و حل مسائل پیچیده در حوزه‌های مهندسی صنایع و مدیریت متمرکز است.",
  expertise: ["مهندسی صنایع", "زنجیره تامین", "تصمیم‌گیری داده‌محور"],
  experienceLabel: "سوابق و تجربه‌ها",
  // Placeholder entries: replace with the real CV
  experiences: [
    {
      id: "exp-1",
      period: "۱۴۰۱ تا اکنون",
      role: "استادیار مهندسی صنایع",
      organization: "دانشگاه صنعتی شیراز",
      current: true,
    },
    {
      id: "exp-2",
      period: "۱۳۹۹ تا ۱۴۰۱",
      role: "پژوهشگر پسادکتری",
      organization: "دانشگاه ...",
    },
    {
      id: "exp-3",
      period: "۱۳۹۷ تا ۱۴۰۰",
      role: "مشاور پروژه‌های بهینه‌سازی زنجیره تامین",
      organization: "شرکت ...",
    },
    {
      id: "exp-4",
      period: "۱۳۹۴ تا ۱۳۹۹",
      role: "دانشجوی دکتری مهندسی صنایع",
      organization: "دانشگاه ...",
    },
    {
      id: "exp-5",
      period: "۱۳۹۲ تا ۱۳۹۴",
      role: "مدرس و دستیار پژوهشی",
      organization: "دانشگاه ...",
    },
    {
      id: "exp-6",
      period: "۱۳۹۰ تا ۱۳۹۲",
      role: "کارشناس برنامه‌ریزی تولید",
      organization: "شرکت ...",
    },
  ],
  linkLabel: "بیشتر درباره من",
  linkHref: "/about",
};

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface ResearchAreasContent {
  label: string;
  title: string;
  description: string;
  link: ActionLink;
  /** Display order = array order (later: an `order` column, filtered by `published`) */
  areas: ResearchArea[];
}

// Placeholder content: replace with the professor's real research areas
export const researchAreas: ResearchAreasContent = {
  label: "پژوهش",
  title: "حوزه‌های پژوهشی",
  description:
    "پژوهش‌های من بر توسعه روش‌های تحلیلی برای درک بهتر سیستم‌های پیچیده و پشتیبانی از تصمیم‌گیری متمرکز است.",
  link: { label: "مشاهده همه پژوهش‌ها", href: "/research" },
  areas: [
    {
      id: "optimization",
      title: "بهینه‌سازی و تحقیق در عملیات",
      description:
        "مدل‌سازی و توسعه روش‌های حل برای مسائل پیچیده تصمیم‌گیری و تخصیص منابع.",
      href: "/research#research-areas",
    },
    {
      id: "mcdm",
      title: "تصمیم‌گیری چندمعیاره",
      description:
        "توسعه چارچوب‌های تحلیلی برای پشتیبانی از تصمیم‌های پیچیده و چندبعدی.",
      href: "/research#research-areas",
    },
    {
      id: "data-analysis",
      title: "تحلیل داده و سیستم‌های پیچیده",
      description:
        "استفاده از روش‌های داده‌محور برای شناخت الگوها و بهبود عملکرد سیستم‌ها.",
      href: "/research#research-areas",
    },
    {
      id: "supply-chain",
      title: "مدیریت زنجیره تأمین",
      description:
        "مدل‌سازی و بهینه‌سازی شبکه‌های تأمین و جریان‌های پیچیده عملیاتی.",
      href: "/research#research-areas",
    },
  ],
};

// Typed mock data for /contact. Replace with database/API data later.
// Placeholder values ("...", "#", example.edu) are meant to be replaced with real details.

export interface ContactHeroData {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
  /** When set, the value is rendered as a link (e.g. mailto:) */
  href?: string;
  /** Latin-script values (email) stay left-to-right inside the RTL layout */
  ltr?: boolean;
}

export interface AcademicProfile {
  id: string;
  name: string;
  href: string;
}

export interface CollaborationTopic {
  id: string;
  title: string;
  description: string;
}

export interface ContactNoteData {
  title: string;
  description: string;
}

export interface ContactPageData {
  hero: ContactHeroData;
  info: { title: string; items: ContactInfoItem[] };
  profiles: { title: string; items: AcademicProfile[] };
  topics: { title: string; items: CollaborationTopic[] };
  note: ContactNoteData;
}

export const professorEmail = "professor@example.edu";

export const contactData: ContactPageData = {
  hero: {
    eyebrow: "تماس",
    title: "در ارتباط باشیم",
    description:
      "برای همکاری‌های پژوهشی، پروژه‌های مشترک، مسائل آموزشی یا گفت‌وگو درباره موضوعات علمی، می‌توانید از طریق راه‌های ارتباطی زیر با من در تماس باشید.",
  },

  info: {
    title: "اطلاعات تماس",
    items: [
      {
        id: "email",
        label: "ایمیل دانشگاهی",
        value: professorEmail,
        href: `mailto:${professorEmail}`,
        ltr: true,
      },
      { id: "university", label: "دانشگاه", value: "دانشگاه صنعتی شیراز" },
      {
        id: "department",
        label: "دانشکده / گروه",
        value: "دانشکده مهندسی صنایع",
      },
      { id: "office", label: "دفتر", value: "اتاق ..." },
    ],
  },

  profiles: {
    title: "پروفایل‌های علمی",
    items: [
      { id: "scholar", name: "Google Scholar", href: "#" },
      { id: "orcid", name: "ORCID", href: "#" },
      { id: "researchgate", name: "ResearchGate", href: "#" },
    ],
  },

  topics: {
    title: "موضوعات همکاری",
    items: [
      {
        id: "research",
        title: "همکاری پژوهشی",
        description:
          "پژوهش‌های مشترک در حوزه‌های بهینه‌سازی، تصمیم‌گیری و تحلیل داده.",
      },
      {
        id: "projects",
        title: "پروژه‌های علمی و تحقیقاتی",
        description: "همکاری در پروژه‌های پژوهشی دانشگاهی و صنعتی.",
      },
      {
        id: "consulting",
        title: "مشاوره و تبادل نظر تخصصی",
        description: "گفت‌وگو درباره مسائل علمی، مدل‌سازی و روش‌های تحلیلی.",
      },
      {
        id: "teaching",
        title: "موضوعات آموزشی و تدریس",
        description:
          "پرسش درباره دروس، راهنمایی پایان‌نامه‌ها و فرصت‌های آموزشی.",
      },
    ],
  },

  note: {
    title: "برای شروع یک گفت‌وگوی علمی آماده‌ام.",
    description:
      "اگر موضوعی برای پژوهش، همکاری یا گفت‌وگوی تخصصی دارید، خوشحال می‌شوم درباره آن بیشتر بدانم.",
  },
};

export interface ContactCtaContent {
  eyebrow: string;
  title: string;
  description: string;
  link: ActionLink;
}

export const contactCta: ContactCtaContent = {
  eyebrow: "ارتباط",
  title: "در مورد یک همکاری پژوهشی یا موضوع علمی صحبت کنیم؟",
  description:
    "برای همکاری‌های پژوهشی، پروژه‌های مشترک، تدریس یا تبادل نظر درباره مسائل علمی، می‌توانید با من در ارتباط باشید.",
  link: { label: "تماس با من", href: "/contact" },
};
