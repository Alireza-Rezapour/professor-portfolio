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
      { id: "department", label: "دانشکده / گروه", value: "دانشکده مهندسی صنایع" },
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
        description: "پژوهش‌های مشترک در حوزه‌های بهینه‌سازی، تصمیم‌گیری و تحلیل داده.",
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
        description: "پرسش درباره دروس، راهنمایی پایان‌نامه‌ها و فرصت‌های آموزشی.",
      },
    ],
  },

  note: {
    title: "برای شروع یک گفت‌وگوی علمی آماده‌ام.",
    description:
      "اگر موضوعی برای پژوهش، همکاری یا گفت‌وگوی تخصصی دارید، خوشحال می‌شوم درباره آن بیشتر بدانم.",
  },
};
