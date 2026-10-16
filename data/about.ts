// Typed mock data for /about. Every section component receives its slice as props,
// so each key below can later be replaced by a Prisma/PostgreSQL query result
// (e.g. profile, education, experience, researchInterests, teachingCourses, achievements).
// All content is placeholder text, to be replaced with the real CV.

import { heroContent, professorName, type ActionLink } from "./content";

export interface ProfileLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface AboutProfile {
  eyebrow: string;
  name: string;
  position: string;
  university: string;
  statement: string;
  image: { src: string; alt: string };
  links: ProfileLink[];
}

export interface BiographyData {
  title: string;
  /** First paragraph is shown as the larger lead paragraph */
  paragraphs: string[];
}

export interface ResearchInterestsData {
  title: string;
  items: { title: string; description: string }[];
}

export interface CareerEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  description?: string;
  current?: boolean;
}

export interface CareerData {
  title: string;
  items: CareerEntry[];
}

export interface ResearchApproachData {
  title: string;
  statement: string;
  paragraph: string;
  principles: { title: string; description: string }[];
}

export interface TeachingData {
  title: string;
  courses: { id: string; title: string; level: string }[];
  link: ActionLink;
}

export interface AchievementsData {
  title: string;
  /** Placeholder values (e.g. "XX+") are meant to be replaced */
  stats: { id: string; value: string; label: string }[];
  highlightsTitle: string;
  highlights: { id: string; title: string; description: string }[];
}

export interface SnapshotData {
  title: string;
  items: { id: string; label: string; value: string; href?: string }[];
}

export interface AboutCtaData {
  title: string;
  description: string;
  primary: ActionLink;
  secondary: ActionLink;
}

export interface AboutData {
  profile: AboutProfile;
  biography: BiographyData;
  researchInterests: ResearchInterestsData;
  education: CareerData;
  approach: ResearchApproachData;
  experience: CareerData;
  teaching: TeachingData;
  achievements: AchievementsData;
  snapshot: SnapshotData;
  cta: AboutCtaData;
}

const email = "professor@university.ac.ir";

export const aboutData: AboutData = {
  profile: {
    eyebrow: "درباره من",
    name: professorName,
    position: "استادیار مهندسی صنایع",
    university: "دانشگاه صنعتی شیراز",
    statement:
      "پژوهشگر حوزه تصمیم‌گیری، بهینه‌سازی و تحلیل داده در سیستم‌های پیچیده",
    image: heroContent.image,
    links: [
      { id: "scholar", label: "Google Scholar", href: "#", external: true },
      { id: "orcid", label: "ORCID", href: "#", external: true },
      { id: "researchgate", label: "ResearchGate", href: "#", external: true },
      { id: "email", label: "ایمیل", href: `mailto:${email}` },
    ],
  },

  biography: {
    title: "مسیر من از مهندسی تا پژوهش",
    paragraphs: [
      "من دکتر جواد زارعی، عضو هیئت علمی دانشکده مهندسی صنایع دانشگاه صنعتی شیراز هستم. علاقه من به مهندسی صنایع از سال‌های دانشجویی با یک پرسش ساده شروع شد: چگونه می‌توان در شرایط پیچیده و نامطمئن، تصمیم‌هایی بهتر گرفت؟",
      "تحصیلات خود را در مقاطع کارشناسی، کارشناسی ارشد و دکتری مهندسی صنایع گذرانده‌ام و در این مسیر بیشتر روی مدل‌سازی ریاضی، بهینه‌سازی و تحقیق در عملیات کار کرده‌ام. پس از دکتری، پژوهش‌هایم را به سمت مسائلی برده‌ام که داده‌های واقعی و محدودیت‌های صنعتی در آن‌ها نقش اصلی دارند.",
      "امروز فعالیت‌های پژوهشی من در سه محور دنبال می‌شود: بهینه‌سازی و تصمیم‌گیری، تحلیل داده، و مدیریت زنجیره تأمین. در هر سه حوزه می‌کوشم روش‌های تحلیلی را به مسئله‌های واقعی صنعت و خدمات نزدیک کنم.",
      "در کنار پژوهش، تدریس را بخش جدایی‌ناپذیر کار علمی می‌دانم. در کلاس‌هایم تلاش می‌کنم دانشجویان فقط روش‌ها را نیاموزند، بلکه شیوه مسئله‌پردازی و نقد نتایج را هم یاد بگیرند و با راهنمایی پایان‌نامه‌ها به پژوهشگرانی مستقل تبدیل شوند.",
    ],
  },

  researchInterests: {
    title: "حوزه‌های پژوهشی",
    items: [
      {
        title: "بهینه‌سازی و تحقیق در عملیات",
        description: "توسعه مدل‌ها و روش‌های حل برای مسائل پیچیده تصمیم‌گیری",
      },
      {
        title: "تصمیم‌گیری چندمعیاره",
        description: "طراحی چارچوب‌های تحلیلی برای تصمیم‌های چندبعدی",
      },
      {
        title: "تحلیل داده و سیستم‌های پیچیده",
        description: "استفاده از داده برای شناخت الگوها و بهبود تصمیم‌ها",
      },
      {
        title: "مدیریت زنجیره تأمین",
        description: "مدل‌سازی و بهینه‌سازی جریان‌های پیچیده تأمین",
      },
    ],
  },

  education: {
    title: "مسیر علمی",
    items: [
      {
        id: "edu-1",
        period: "۱۴۰۱ — اکنون",
        title: "عضو هیئت علمی",
        organization: "دانشگاه صنعتی شیراز",
        description:
          "تدریس و پژوهش در گروه مهندسی صنایع و راهنمایی پایان‌نامه‌های تحصیلات تکمیلی.",
        current: true,
      },
      {
        id: "edu-2",
        period: "۱۳۹۴ — ۱۳۹۹",
        title: "دکتری مهندسی صنایع",
        organization: "دانشگاه ...",
        description:
          "رساله در زمینه بهینه‌سازی و تصمیم‌گیری در شرایط عدم قطعیت.",
      },
      {
        id: "edu-3",
        period: "۱۳۹۲ — ۱۳۹۴",
        title: "کارشناسی ارشد مهندسی صنایع",
        organization: "دانشگاه ...",
      },
      {
        id: "edu-4",
        period: "۱۳۸۸ — ۱۳۹۲",
        title: "کارشناسی مهندسی صنایع",
        organization: "دانشگاه ...",
      },
    ],
  },

  approach: {
    title: "نگاه من به پژوهش",
    statement:
      "پژوهش زمانی ارزشمند است که بتواند مسئله‌ای واقعی را بهتر تعریف کند و تصمیمی بهتر برای آن ارائه دهد.",
    paragraph:
      "در پژوهش‌هایم تلاش می‌کنم تحلیل ریاضی را با داده‌های واقعی و شناخت دقیق از مسئله ترکیب کنم. مدل‌سازی و بهینه‌سازی برای من ابزارند، نه هدف؛ هدف این است که نتیجه برای تصمیم‌گیرنده قابل فهم، قابل اعتماد و قابل استفاده باشد.",
    principles: [
      {
        title: "تعریف دقیق مسئله",
        description:
          "پیش از انتخاب روش، مسئله و محدودیت‌های آن را با ذی‌نفعان روشن می‌کنم.",
      },
      {
        title: "مدل‌سازی و تحلیل",
        description:
          "روش‌های بهینه‌سازی و تحلیل داده را متناسب با ماهیت مسئله انتخاب و توسعه می‌دهم.",
      },
      {
        title: "اعتبارسنجی در عمل",
        description:
          "نتایج را با داده‌های واقعی و بازخورد کاربران ارزیابی می‌کنم.",
      },
    ],
  },

  experience: {
    title: "سوابق علمی و حرفه‌ای",
    items: [
      {
        id: "exp-1",
        period: "۱۴۰۱ — اکنون",
        title: "عضو هیئت علمی",
        organization: "دانشگاه صنعتی شیراز",
        description:
          "تدریس دروس تحقیق در عملیات و برنامه‌ریزی، راهنمایی پایان‌نامه‌ها و اجرای پروژه‌های پژوهشی.",
      },
      {
        id: "exp-2",
        period: "۱۳۹۹ — ۱۴۰۱",
        title: "پژوهشگر پسادکتری",
        organization: "دانشگاه ...",
        description:
          "پژوهش درباره مدل‌های بهینه‌سازی داده‌محور برای مسائل تصمیم‌گیری پیچیده.",
      },
      {
        id: "exp-3",
        period: "۱۳۹۷ — ۱۴۰۰",
        title: "مشاور پروژه‌های بهینه‌سازی زنجیره تأمین",
        organization: "شرکت ...",
        description:
          "همکاری در پروژه‌های صنعتی و پژوهشی در زمینه برنامه‌ریزی و بهینه‌سازی زنجیره تأمین.",
      },
    ],
  },

  teaching: {
    title: "حوزه‌های تدریس",
    courses: [
      { id: "c1", title: "تحقیق در عملیات ۱", level: "کارشناسی" },
      { id: "c2", title: "تحقیق در عملیات ۲", level: "کارشناسی" },
      { id: "c3", title: "کنترل پروژه", level: "کارشناسی" },
      { id: "c4", title: "برنامه‌ریزی تولید", level: "کارشناسی" },
      { id: "c5", title: "مدیریت زنجیره تأمین", level: "کارشناسی ارشد" },
      { id: "c6", title: "تصمیم‌گیری", level: "کارشناسی ارشد" },
    ],
    link: { label: "مشاهده همه دروس", href: "/teaching" },
  },

  achievements: {
    title: "دستاوردهای برگزیده",
    // Placeholder values: replace with real numbers
    stats: [
      { id: "papers", value: "XX+", label: "مقاله علمی" },
      { id: "projects", value: "XX+", label: "پروژه پژوهشی" },
      { id: "years", value: "XX", label: "سال فعالیت دانشگاهی" },
      { id: "awards", value: "XX", label: "افتخار علمی" },
    ],
    highlightsTitle: "برگزیده‌ها",
    highlights: [
      {
        id: "h1",
        title: "داوری مجلات علمی",
        description:
          "داور مجلات علمی‌پژوهشی در حوزه مهندسی صنایع و تحقیق در عملیات",
      },
      {
        id: "h2",
        title: "عضویت در انجمن‌های علمی",
        description: "عضو انجمن‌های علمی مهندسی صنایع و تحقیق در عملیات",
      },
      {
        id: "h3",
        title: "فعالیت در همایش‌ها",
        description:
          "عضو کمیته علمی و ارائه‌دهنده مقاله در همایش‌های ملی و بین‌المللی",
      },
      {
        id: "h4",
        title: "راهنمایی پایان‌نامه‌ها",
        description: "راهنمایی پایان‌نامه‌های کارشناسی ارشد و دکتری",
      },
    ],
  },

  snapshot: {
    title: "در یک نگاه",
    items: [
      { id: "position", label: "سمت فعلی", value: "استادیار مهندسی صنایع" },
      { id: "university", label: "دانشگاه", value: "دانشگاه صنعتی شیراز" },
      {
        id: "expertise",
        label: "حوزه تخصص",
        value: "تحقیق در عملیات و بهینه‌سازی",
      },
      { id: "location", label: "محل فعالیت", value: "شیراز، ایران" },
      { id: "email", label: "ایمیل", value: email, href: `mailto:${email}` },
    ],
  },

  cta: {
    title: "برای همکاری پژوهشی در ارتباط باشید",
    description:
      "اگر درباره یک پروژه پژوهشی، همکاری علمی یا موضوعی مرتبط با حوزه‌های فعالیت من ایده‌ای دارید، خوشحال می‌شوم در ارتباط باشیم.",
    primary: { label: "تماس با من", href: "/contact" },
    secondary: { label: "مشاهده پژوهش‌ها", href: "/research" },
  },
};
