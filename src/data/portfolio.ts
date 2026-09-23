export type ProjectCategory = "writing" | "website" | "design" | "digital-project";

export interface PortfolioProject {
  id: string;
  slug: string;
  category: ProjectCategory;
  categoryLabel: {
    en: string;
    ar: string;
  };
  title: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  fullContent?: {
    en: string;
    ar: string;
  };
  coverPlaceholder: {
    badge: {
      en: string;
      ar: string;
    };
    pattern: "document" | "code" | "layout" | "workflow";
  };
  seo: {
    title: {
      en: string;
      ar: string;
    };
    description: {
      en: string;
      ar: string;
    };
  };
  isPlaceholder: true;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "item-writing",
    slug: "writing-sample-specimen",
    category: "writing",
    categoryLabel: {
      en: "Writing",
      ar: "كتابة ومحتوى",
    },
    title: {
      en: "Research Article / Content Specimen",
      ar: "نموذج مقال بحثي / محتوى معرفي",
    },
    shortDescription: {
      en: "Structured framework for upcoming research articles, scientific references, or analytical writing pieces.",
      ar: "هيكلية تمهيدية مخصصة لعرض المقالات البحثية، المراجع العلمية، أو المحتوى التحريري القادم.",
    },
    fullContent: {
      en: "This is a structural placeholder for a future comprehensive writing sample. Real content, references, and publication details will be populated here.",
      ar: "هذا نموذج هيكلي تمهيدي لعمل تحريري قادم. سيتم إدراج المحتوى الفعلي، والمصادر الموثوقة، وتفاصيل النشر لاحقاً.",
    },
    coverPlaceholder: {
      badge: {
        en: "Writing Specimen",
        ar: "نموذج كتابة",
      },
      pattern: "document",
    },
    seo: {
      title: {
        en: "Writing Specimen — Mohammad Alkhayouti",
        ar: "نموذج مقال ومحتوى — محمد الخيوتي",
      },
      description: {
        en: "Research and editorial writing portfolio specimen.",
        ar: "نموذج كتابة وبحث تحريري ضمن أعمالي.",
      },
    },
    isPlaceholder: true,
  },
  {
    id: "item-website",
    slug: "website-architecture-specimen",
    category: "website",
    categoryLabel: {
      en: "Website",
      ar: "موقع إلكتروني",
    },
    title: {
      en: "Responsive Web Platform Blueprint",
      ar: "نموذج هيكلية موقع ويب متجاوب",
    },
    shortDescription: {
      en: "Structural framework showcasing information architecture, responsive user interface, and digital identity.",
      ar: "هيكلية تمهيدية لعرض بناء المواقع المتجاوبة، تجربة المستخدم، وتكامل الهوية الرقمية.",
    },
    fullContent: {
      en: "This is a structural placeholder for an upcoming website case study. Real technical stack, live links, and interface walkthrough will be included here.",
      ar: "هذا نموذج هيكلي تمهيدي لمشروع موقع ويب قادم. سيتم إدراج الرابط الحي، والتقنيات المستخدمة، وتفاصيل البناء لاحقاً.",
    },
    coverPlaceholder: {
      badge: {
        en: "Web Architecture",
        ar: "بنية موقع ويب",
      },
      pattern: "code",
    },
    seo: {
      title: {
        en: "Web Platform Specimen — Mohammad Alkhayouti",
        ar: "نموذج موقع ويب — محمد الخيوتي",
      },
      description: {
        en: "Web creation and responsive architecture portfolio specimen.",
        ar: "نموذج إنشاء وتطوير مواقع الويب ضمن أعمالي.",
      },
    },
    isPlaceholder: true,
  },
  {
    id: "item-design",
    slug: "document-design-specimen",
    category: "design",
    categoryLabel: {
      en: "Design",
      ar: "تصميم",
    },
    title: {
      en: "Visual Layout & Educational Graphics",
      ar: "نموذج تصميم بصري ومواد تعليمية",
    },
    shortDescription: {
      en: "Structural framework for editorial document styling, infographics, and supporting educational collateral.",
      ar: "هيكلية تمهيدية مخصصة لعرض تصميم المستندات، المواد البصرية التعليمية، والمخرجات التنسيقية.",
    },
    fullContent: {
      en: "This is a structural placeholder for an upcoming design specimen. Design assets, typography sheets, and graphic collateral will be added here.",
      ar: "هذا نموذج هيكلي تمهيدي لعمل تصميمي قادم. سيتم إدراج النماذج التصميمية، واللوحات البصرية، وتفاصيل التنسيق لاحقاً.",
    },
    coverPlaceholder: {
      badge: {
        en: "Visual System",
        ar: "نظام بصري",
      },
      pattern: "layout",
    },
    seo: {
      title: {
        en: "Design Specimen — Mohammad Alkhayouti",
        ar: "نموذج تصميم وهوية — محمد الخيوتي",
      },
      description: {
        en: "Content and document design portfolio specimen.",
        ar: "نموذج تصميم المحتوى والمستندات ضمن أعمالي.",
      },
    },
    isPlaceholder: true,
  },
  {
    id: "item-digital-project",
    slug: "digital-operations-specimen",
    category: "digital-project",
    categoryLabel: {
      en: "Digital Project",
      ar: "مشروع رقمي",
    },
    title: {
      en: "Publishing Workflow & Operational System",
      ar: "نموذج نظام نشر وعمليات رقمية",
    },
    shortDescription: {
      en: "Structural framework representing WordPress publishing workflows, document pipelines, or operational execution.",
      ar: "هيكلية تمهيدية لعرض إدارة دورة النشر الرقمي عبر WordPress، تنظيم الوثائق، أو العمليات الميدانية.",
    },
    fullContent: {
      en: "This is a structural placeholder for an upcoming digital operations workflow. Process documentation and project metrics will be displayed here.",
      ar: "هذا نموذج هيكلي تمهيدي لمشروع رقمي قادم. سيتم إدراج توثيق الخطوات، والمخرجات العملية لاحقاً.",
    },
    coverPlaceholder: {
      badge: {
        en: "Digital Operations",
        ar: "عمليات رقمية",
      },
      pattern: "workflow",
    },
    seo: {
      title: {
        en: "Digital Project Specimen — Mohammad Alkhayouti",
        ar: "نموذج مشروع رقمي — محمد الخيوتي",
      },
      description: {
        en: "Digital publishing and operations portfolio specimen.",
        ar: "نموذج إدارة النشر والعمليات الرقمية ضمن أعمالي.",
      },
    },
    isPlaceholder: true,
  },
];
