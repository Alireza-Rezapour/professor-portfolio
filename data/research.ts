import type { ActionLink } from "./content";

export interface ResearchHeroData {
  label: string;
  title: string;
  description: string;
  index: ActionLink[];
}

export interface ResearchAreaItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface ResearchProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  startYear: number;
  endYear?: number;
  role?: string;
  fields: string[];
  href?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal: string;
  articleUrl?: string;
  doi?: string;
  pdfUrl?: string;
}

export interface ResearchStat {
  id: string;
  value: string;
  label: string;
}

export interface ResearchCtaData {
  title: string;
  description: string;
  primary: ActionLink;
  secondary: ActionLink;
}

export interface ResearchPageData {
  hero: ResearchHeroData;
  areas: {
    label: string;
    title: string;
    description: string;
    items: ResearchAreaItem[];
  };
  projects: {
    label: string;
    title: string;
    description: string;
    items: ResearchProject[];
  };
  publications: {
    label: string;
    title: string;
    description: string;
    items: Publication[];
  };
  statistics: { title: string; items: ResearchStat[] };
  cta: ResearchCtaData;
}

export const researchData: ResearchPageData = {
  hero: {
    label: "پژوهش",
    title: "حل مسائل پیچیده با مدل‌سازی، تحلیل و تصمیم‌گیری",
    description:
      "فعالیت‌های پژوهشی من بر توسعه روش‌های تحلیلی و داده‌محور برای درک سیستم‌های پیچیده، بهینه‌سازی منابع و پشتیبانی از تصمیم‌گیری متمرکز است.",
    index: [
      { label: "حوزه‌های پژوهشی", href: "#research-areas" },
      { label: "پروژه‌ها", href: "#projects" },
      { label: "مقالات", href: "#publications" },
    ],
  },

  areas: {
    label: "چه چیزی پژوهش می‌کنم؟",
    title: "حوزه‌های پژوهشی",
    description:
      " محور های اصلی فعالیت‌های پژوهشی من، همراه با مفاهیم کلیدی هر حوزه.",
    items: [
      {
        id: "optimization",
        slug: "optimization-operations-research",
        title: "بهینه‌سازی و تحقیق در عملیات",
        description:
          "توسعه مدل‌های ریاضی و روش‌های محاسباتی برای حل مسائل پیچیده تخصیص منابع، برنامه‌ریزی و تصمیم‌گیری.",
        keywords: [
          "Optimization",
          "Operations Research",
          "Mathematical Modeling",
        ],
      },
      {
        id: "mcdm",
        slug: "multi-criteria-decision-making",
        title: "تصمیم‌گیری چندمعیاره",
        description:
          "طراحی و توسعه چارچوب‌های تحلیلی برای پشتیبانی از تصمیم‌های پیچیده که تحت تأثیر معیارها و اهداف متعدد قرار دارند.",
        keywords: ["MCDM", "Decision Analysis", "Multi-Criteria Optimization"],
      },
      {
        id: "data-analysis",
        slug: "data-analysis-complex-systems",
        title: "تحلیل داده و سیستم‌های پیچیده",
        description:
          "استفاده از روش‌های داده‌محور برای شناسایی الگوها، تحلیل رفتار سیستم‌ها و بهبود کیفیت تصمیم‌گیری.",
        keywords: [
          "Data Analysis",
          "Complex Systems",
          "Data-Driven Decision Making",
        ],
      },
      {
        id: "supply-chain",
        slug: "supply-chain-management",
        title: "مدیریت زنجیره تأمین",
        description:
          "مدل‌سازی و بهینه‌سازی شبکه‌های تأمین با تمرکز بر تصمیم‌گیری، تخصیص منابع و مدیریت عدم قطعیت.",
        keywords: ["Supply Chain", "Optimization", "Uncertainty"],
      },
    ],
  },

  projects: {
    label: "روی چه پروژه‌هایی کار کرده‌ام؟",
    title: "پروژه‌های پژوهشی",
    description:
      "منتخبی از پروژه‌های پژوهشی که در سال‌های اخیر روی آن‌ها کار کرده‌ام.",
    items: [
      {
        id: "p1",
        slug: "supply-network-uncertainty",
        title: "بهینه‌سازی شبکه تأمین در شرایط عدم قطعیت",
        description:
          "توسعه یک مدل تصمیم‌گیری برای بهبود عملکرد شبکه‌های تأمین در شرایط عدم قطعیت و نوسان تقاضا.",
        startYear: 2024,
        endYear: 2026,
        role: "پژوهشگر اصلی",
        fields: ["زنجیره تأمین", "بهینه‌سازی"],
      },
      {
        id: "p2",
        slug: "data-driven-resource-allocation",
        title: "مدل‌سازی تصمیم‌گیری داده‌محور برای تخصیص منابع",
        description:
          "توسعه چارچوبی برای استفاده از داده‌های عملیاتی در تصمیم‌گیری و تخصیص بهینه منابع.",
        startYear: 2023,
        endYear: 2025,
        fields: ["تحلیل داده", "تخصیص منابع"],
      },
      {
        id: "p3",
        slug: "dynamic-production-planning",
        title: "بهینه‌سازی برنامه‌ریزی تولید در محیط‌های پویا",
        description:
          "بررسی روش‌های بهینه‌سازی برای برنامه‌ریزی تولید در شرایط متغیر و محدودیت‌های عملیاتی.",
        startYear: 2022,
        endYear: 2024,
        fields: ["برنامه‌ریزی تولید", "بهینه‌سازی"],
      },
    ],
  },

  publications: {
    label: "چه چیزی منتشر کرده‌ام؟",
    title: "مقالات منتخب",
    description: "منتخبی از مقالات علمی، از جدیدترین به قدیمی‌ترین.",
    items: [
      {
        id: "pub1",
        title: "Optimization of Supply Chain Networks Under Uncertainty",
        authors: ["جواد زارعی", "محمد احمدی", "سارا کریمی"],
        year: 2026,
        journal: "International Journal of Production Economics",
        articleUrl: "#",
        pdfUrl: "#",
      },
      {
        id: "pub2",
        title: "A Data-Driven Framework for Multi-Criteria Decision Making",
        authors: ["جواد زارعی", "مهدی حسینی"],
        year: 2025,
        journal: "Expert Systems with Applications",
        articleUrl: "#",
        pdfUrl: "#",
      },
      {
        id: "pub3",
        title: "Robust Optimization Approaches for Dynamic Production Planning",
        authors: ["جواد زارعی", "..."],
        year: 2024,
        journal: "Computers & Industrial Engineering",
        articleUrl: "#",
      },
      {
        id: "pub4",
        title: "Decision Support for Resource Allocation in Complex Systems",
        authors: ["جواد زارعی", "..."],
        year: 2023,
        journal: "Applied Soft Computing",
        articleUrl: "#",
      },
    ],
  },

  statistics: {
    title: "آمار پژوهشی",
    items: [
      { id: "papers", value: "XX+", label: "مقاله علمی" },
      { id: "projects", value: "XX+", label: "پروژه پژوهشی" },
      { id: "years", value: "XX", label: "سال فعالیت پژوهشی" },
      { id: "collabs", value: "XX", label: "همکاری علمی" },
    ],
  },

  cta: {
    title: "ایده‌ای برای یک همکاری پژوهشی دارید؟",
    description:
      "برای همکاری پژوهشی، پروژه‌های مشترک یا تبادل نظر درباره یک مسئله علمی، می‌توانید با من در ارتباط باشید.",
    primary: { label: "تماس با من", href: "/contact" },
    secondary: { label: "مشاهده پروفایل", href: "/about" },
  },
};
