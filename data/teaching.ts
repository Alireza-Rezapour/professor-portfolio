import type { ActionLink } from "./content";

export interface Course {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  level: string;
  field: string;
  featured?: boolean;
}

export const courseHref = (course: Pick<Course, "slug">) =>
  `/teaching/${course.slug}`;
export const courseMeta = (course: Pick<Course, "level" | "field">) =>
  `${course.level} · ${course.field}`;

export const courses: Course[] = [
  {
    id: "or1",
    slug: "operations-research-1",
    title: "تحقیق در عملیات ۱",
    titleEn: "Operations Research I",
    description:
      "آشنایی با مدل‌سازی ریاضی مسائل تصمیم‌گیری و روش‌های پایه حل مسائل بهینه‌سازی.",
    level: "کارشناسی",
    field: "مهندسی صنایع",
    featured: true,
  },
  {
    id: "or2",
    slug: "operations-research-2",
    title: "تحقیق در عملیات ۲",
    titleEn: "Operations Research II",
    description:
      "ادامه روش‌های تحقیق در عملیات با تمرکز بر مدل‌های پیشرفته‌تر و مسائل تصمیم‌گیری پیچیده.",
    level: "کارشناسی",
    field: "مهندسی صنایع",
    featured: true,
  },
  {
    id: "mcdm",
    slug: "multi-criteria-decision-making",
    title: "تصمیم‌گیری چندمعیاره",
    titleEn: "Multi-Criteria Decision Making",
    description:
      "بررسی روش‌های تصمیم‌گیری در شرایطی که انتخاب میان گزینه‌ها تحت تأثیر چندین معیار قرار دارد.",
    level: "کارشناسی ارشد",
    field: "مهندسی صنایع",
    featured: true,
  },
  {
    id: "mo",
    slug: "modeling-and-optimization",
    title: "مدل‌سازی و بهینه‌سازی",
    titleEn: "Modeling & Optimization",
    description:
      "مدل‌سازی مسائل واقعی و استفاده از روش‌های بهینه‌سازی برای یافتن راهکارهای مناسب.",
    level: "تحصیلات تکمیلی",
    field: "مهندسی صنایع",
    featured: true,
  },
];

export const featuredCourses = courses.filter((c) => c.featured).slice(0, 4);

export interface TeachingPreviewData {
  eyebrow: string;
  title: string;
  description: string;
  link: ActionLink;
}

export const teachingPreview: TeachingPreviewData = {
  eyebrow: "تدریس",
  title: "آموزش برای ساختن درک عمیق‌تر از مسئله",
  description:
    "در تدریس، تلاش می‌کنم مفاهیم مهندسی صنایع و روش‌های تحلیلی را به شکلی کاربردی و قابل درک ارائه کنم و دانشجویان را به تفکر مسئله‌محور و تحلیل مستقل تشویق کنم.",
  link: { label: "مشاهده همه درس‌ها", href: "/teaching" },
};

export interface TeachingPageData {
  hero: { eyebrow: string; title: string; description: string };
  philosophy: { label: string; title: string; paragraphs: string[] };
  courses: {
    label: string;
    title: string;
    description: string;
    items: Course[];
  };
  approach: {
    label: string;
    title: string;
    description: string;
    items: { id: string; title: string; description: string }[];
  };
  cta: {
    title: string;
    description: string;
    primary: ActionLink;
    secondary: ActionLink;
  };
}

export const teachingData: TeachingPageData = {
  hero: {
    eyebrow: "تدریس",
    title: "آموزش، بخشی از مسیر فهم عمیق‌تر مسائل است",
    description:
      "در فعالیت آموزشی خود تلاش می‌کنم مفاهیم مهندسی صنایع را با تمرکز بر درک مسئله، تفکر تحلیلی و ارتباط میان مباحث نظری و مسائل واقعی ارائه کنم.",
  },

  philosophy: {
    label: "رویکرد آموزشی",
    title:
      "یادگیری زمانی معنا پیدا می‌کند که بتوان مفاهیم را در یک مسئله واقعی به کار گرفت.",
    paragraphs: [
      "در تدریس، هدف تنها انتقال مجموعه‌ای از روش‌ها و فرمول‌ها نیست؛ بلکه تلاش می‌کنم دانشجویان بتوانند مسئله را به درستی تعریف کنند، مفروضات مدل را بشناسند و درباره نتایج به شکل انتقادی فکر کنند.",
      "ترکیب مفاهیم نظری با مثال‌ها و مسائل واقعی، بخش مهمی از رویکرد آموزشی من است. تلاش می‌کنم دانشجویان علاوه بر یادگیری روش، منطق پشت آن و محدودیت‌های استفاده از آن را نیز درک کنند.",
    ],
  },

  courses: {
    label: "دروس",
    title: "دروس و زمینه‌های آموزشی",
    description:
      "برخی از مهم‌ترین درس‌هایی که در حوزه مهندسی صنایع و زمینه‌های مرتبط ارائه می‌کنم.",
    items: courses,
  },

  approach: {
    label: "شیوه کار در کلاس",
    title: "روش آموزشی",
    description:
      "چند اصل ساده که کلاس‌ها و تمرین‌ها بر پایه آن‌ها طراحی می‌شوند.",
    items: [
      {
        id: "problem-first",
        title: "شروع از مسئله",
        description:
          "هر مبحث با یک مسئله واقعی یا نیمه‌واقعی آغاز می‌شود تا دانشجو پیش از آموختن روش، نیاز به آن را حس کند.",
      },
      {
        id: "theory-practice",
        title: "پیوند نظریه و کاربرد",
        description:
          "مفاهیم نظری همراه با مثال‌های عددی، مطالعات موردی و تمرین‌های مدل‌سازی ارائه می‌شوند.",
      },
      {
        id: "critical-thinking",
        title: "تفکر انتقادی درباره نتایج",
        description:
          "دانشجویان تشویق می‌شوند مفروضات مدل، محدودیت‌های روش و اعتبار نتایج را بررسی کنند.",
      },
      {
        id: "active-learning",
        title: "یادگیری فعال و بازخورد",
        description:
          "پرسش و گفت‌وگو در کلاس، تمرین‌های دوره‌ای و بازخورد مستمر بخشی از فرایند یادگیری است.",
      },
    ],
  },

  cta: {
    title: "درباره دروس یا همکاری آموزشی پرسشی دارید؟",
    description:
      "برای پرسش درباره دروس، راهنمایی پایان‌نامه‌ها یا فرصت‌های آموزشی می‌توانید با من در ارتباط باشید.",
    primary: { label: "تماس با من", href: "/contact" },
    secondary: { label: "مشاهده پژوهش‌ها", href: "/research" },
  },
};
