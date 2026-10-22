export interface PortfolioLinkHotspot {
  uri: string;
  label: {
    ar: string;
    en: string;
  };
  isExternal: boolean;
  style: {
    left: number; // percentage
    top: number; // percentage
    width: number; // percentage
    height: number; // percentage
  };
}

export interface PortfolioPage {
  pageNumber: number;
  webpSrc: string;
  jpgSrc: string;
  title: {
    ar: string;
    en: string;
  };
  alt: {
    ar: string;
    en: string;
  };
  links: PortfolioLinkHotspot[];
}

export const portfolioPages: PortfolioPage[] = [
  {
    pageNumber: 1,
    webpSrc: "/portfolio-pages/page-01.webp",
    jpgSrc: "/portfolio-pages/page-01.jpg",
    title: {
      ar: "ملف أعمال — محمد الخيوتي",
      en: "Portfolio — Mohammad Alkhayouti",
    },
    alt: {
      ar: "الصفحة الأولى: غلاف ملف أعمال محمد الخيوتي، كاتب محتوى طبي وصانع محتوى سوشال ميديا، دمشق",
      en: "Page 1: Portfolio cover of Mohammad Alkhayouti, medical content writer and social media creator",
    },
    links: [
      {
        uri: "mailto:mohammadalkhayouti@gmail.com",
        label: {
          ar: "البريد الإلكتروني: mohammadalkhayouti@gmail.com",
          en: "Email: mohammadalkhayouti@gmail.com",
        },
        isExternal: false,
        style: {
          left: 36.0,
          top: 76.2,
          width: 28.0,
          height: 4.8,
        },
      },
    ],
  },
  {
    pageNumber: 2,
    webpSrc: "/portfolio-pages/page-02.webp",
    jpgSrc: "/portfolio-pages/page-02.jpg",
    title: {
      ar: "أهلًا ومرحبًا — نبذة عني",
      en: "Welcome — About Me",
    },
    alt: {
      ar: "الصفحة الثانية: نبذة عن محمد الخيوتي، طالب طب في السنة الخامسة، مع إحصائيات التفاعل على فيسبوك وتيليجرام",
      en: "Page 2: About Mohammad Alkhayouti, fifth-year medical student, with Facebook and Telegram statistics",
    },
    links: [],
  },
  {
    pageNumber: 3,
    webpSrc: "/portfolio-pages/page-03.webp",
    jpgSrc: "/portfolio-pages/page-03.jpg",
    title: {
      ar: "ما أقدّمه — مجالات العمل",
      en: "What I Offer — Service Areas",
    },
    alt: {
      ar: "الصفحة الثالثة: ما أقدّمه من خدمات - مقالات طبية، محتوى للمنصات، كاروسيل وتصميم، سكربت ريلز، WordPress وSEO، ومحتوى علمي ذاتي",
      en: "Page 3: Services offered - medical articles, platform content, carousels, reel scripts, WordPress & SEO",
    },
    links: [],
  },
  {
    pageNumber: 4,
    webpSrc: "/portfolio-pages/page-04.webp",
    jpgSrc: "/portfolio-pages/page-04.jpg",
    title: {
      ar: "مشاريع مختارة",
      en: "Selected Projects",
    },
    alt: {
      ar: "الصفحة الرابعة: فاصل مشاريع مختارة (5 مشاريع)",
      en: "Page 4: Selected projects section divider (5 projects)",
    },
    links: [],
  },
  {
    pageNumber: 5,
    webpSrc: "/portfolio-pages/page-05.webp",
    jpgSrc: "/portfolio-pages/page-05.jpg",
    title: {
      ar: "مشروع 1: تفاصيل كاروسيل توعوي لجراح عظام",
      en: "Project 1: Educational Carousel for Orthopedic Surgeon (Details)",
    },
    alt: {
      ar: "الصفحة الخامسة: تفاصيل كاروسيل توعوي لجراح عظام - الهدف والجمهور، الفكرة، الدور، وما يظهره العمل",
      en: "Page 5: Educational carousel details for orthopedic surgeon - objective, concept, role",
    },
    links: [],
  },
  {
    pageNumber: 6,
    webpSrc: "/portfolio-pages/page-06.webp",
    jpgSrc: "/portfolio-pages/page-06.jpg",
    title: {
      ar: "مشروع 1: شرائح كاروسيل توعوي لجراح عظام",
      en: "Project 1: Orthopedic Surgeon Carousel Slides",
    },
    alt: {
      ar: "الصفحة السادسة: شرائح كاروسيل جراح العظام حول تبديل مفصل الركبة ومراحل التعافي",
      en: "Page 6: Carousel slides for knee replacement surgery recovery and rehabilitation",
    },
    links: [],
  },
  {
    pageNumber: 7,
    webpSrc: "/portfolio-pages/page-07.webp",
    jpgSrc: "/portfolio-pages/page-07.jpg",
    title: {
      ar: "مشروع 2: مقالات طبية",
      en: "Project 2: Medical Articles",
    },
    alt: {
      ar: "الصفحة السابعة: مقالات طبية - استراتيجية الكتابة الصحية المبسطة والموثقة مع زر تصفح المدونة",
      en: "Page 7: Medical articles strategy and link to blog",
    },
    links: [
      {
        uri: "/blog",
        label: {
          ar: "تصفّح المدونة",
          en: "Browse Blog",
        },
        isExternal: false,
        style: {
          left: 77.03,
          top: 79.35,
          width: 10.47,
          height: 6.02,
        },
      },
    ],
  },
  {
    pageNumber: 8,
    webpSrc: "/portfolio-pages/page-08.webp",
    jpgSrc: "/portfolio-pages/page-08.jpg",
    title: {
      ar: "مشروع 3: منشورات «عدسة طالب طب» على Telegram",
      en: "Project 3: Lens Taleb Teb Posts on Telegram",
    },
    alt: {
      ar: "الصفحة الثامنة: منشورات عدسة طالب طب على Telegram مع أربعة أزرار لقراءة المنشورات",
      en: "Page 8: Lens Taleb Teb Telegram posts with four direct post links",
    },
    links: [
      {
        uri: "https://t.me/lenstaleb/29534",
        label: {
          ar: "قراءة منشور: كسر العظم لإطالة القامة",
          en: "Read post: Bone breaking for height elongation",
        },
        isExternal: true,
        style: {
          left: 70.83,
          top: 70.19,
          width: 16.67,
          height: 6.02,
        },
      },
      {
        uri: "https://t.me/lenstaleb/29696",
        label: {
          ar: "قراءة منشور: لغز السرطان: القلب والدماغ",
          en: "Read post: Cancer mystery: heart and brain",
        },
        isExternal: true,
        style: {
          left: 52.6,
          top: 70.19,
          width: 17.6,
          height: 6.02,
        },
      },
      {
        uri: "https://t.me/lenstaleb/29581",
        label: {
          ar: "قراءة منشور: حالة سريرية: تشنج عند رؤية الماء",
          en: "Read post: Clinical case: spasm seeing water",
        },
        isExternal: true,
        style: {
          left: 31.51,
          top: 70.19,
          width: 20.47,
          height: 6.02,
        },
      },
      {
        uri: "https://t.me/lenstaleb/29403",
        label: {
          ar: "قراءة منشور: قهوة العريس المالحة",
          en: "Read post: Salty groom's coffee",
        },
        isExternal: true,
        style: {
          left: 16.04,
          top: 70.19,
          width: 14.84,
          height: 6.02,
        },
      },
    ],
  },
  {
    pageNumber: 9,
    webpSrc: "/portfolio-pages/page-09.webp",
    jpgSrc: "/portfolio-pages/page-09.jpg",
    title: {
      ar: "مشروع 4: سلسلة «عادات صحية في رمضان»",
      en: "Project 4: Healthy Ramadan Habits Series",
    },
    alt: {
      ar: "الصفحة التاسعة: تفاصيل سلسلة عادات صحية في رمضان - الهدف والفكرة والعمل الجماعي",
      en: "Page 9: Healthy Ramadan habits series details and team collaboration",
    },
    links: [],
  },
  {
    pageNumber: 10,
    webpSrc: "/portfolio-pages/page-10.webp",
    jpgSrc: "/portfolio-pages/page-10.jpg",
    title: {
      ar: "مشروع 5: محتوى علمي على LinkedIn",
      en: "Project 5: Scientific Content on LinkedIn",
    },
    alt: {
      ar: "الصفحة العاشرة: مشروع ذاتي لمحتوى علمي على LinkedIn مع زر للانتقال إلى آخر المنشورات",
      en: "Page 10: Scientific content personal project on LinkedIn with link to posts",
    },
    links: [
      {
        uri: "https://lnkd.in/p/eHMYTbv4",
        label: {
          ar: "عرض آخر منشوراتي على LinkedIn",
          en: "View my latest posts on LinkedIn",
        },
        isExternal: true,
        style: {
          left: 77.5,
          top: 70.19,
          width: 10.0,
          height: 6.02,
        },
      },
    ],
  },
  {
    pageNumber: 11,
    webpSrc: "/portfolio-pages/page-11.webp",
    jpgSrc: "/portfolio-pages/page-11.jpg",
    title: {
      ar: "مواد إضافية — سيناريو ريل وAquaLife",
      en: "Additional Materials — Reel Script & AquaLife",
    },
    alt: {
      ar: "الصفحة الحادية عشرة: سيناريو ريل للنساء بعد سن الثلاثين وكاروسيل إنستغرام لـ AquaLife مع زر عرض الحساب",
      en: "Page 11: Reel script and AquaLife Instagram carousel with account link",
    },
    links: [
      {
        uri: "https://www.instagram.com/aqualife.med/",
        label: {
          ar: "عرض حساب AquaLife على Instagram",
          en: "View AquaLife account on Instagram",
        },
        isExternal: true,
        style: {
          left: 52.55,
          top: 56.11,
          width: 10.78,
          height: 6.3,
        },
      },
    ],
  },
  {
    pageNumber: 12,
    webpSrc: "/portfolio-pages/page-12.webp",
    jpgSrc: "/portfolio-pages/page-12.jpg",
    title: {
      ar: "كيف أعمل — منهجية العمل",
      en: "How I Work — Methodology",
    },
    alt: {
      ar: "الصفحة الثانية عشرة: منهجية العمل في 4 خطوات - فهم الجمهور، البحث في المراجع، تبسيط الفكرة، ونشر وقياس التفاعل",
      en: "Page 12: 4-step workflow - audience understanding, research, simplification, analytics",
    },
    links: [],
  },
  {
    pageNumber: 13,
    webpSrc: "/portfolio-pages/page-13.webp",
    jpgSrc: "/portfolio-pages/page-13.jpg",
    title: {
      ar: "الخبرة المهنية",
      en: "Professional Experience",
    },
    alt: {
      ar: "الصفحة الثالثة عشرة: سجل الخبرة في عدسة طالب طب، المرجع البحثي Resref، مجتمع الترجمة الطبية، وتطوع SAMS",
      en: "Page 13: Experience record at Lens Taleb Teb, Resref, medical translation community, and SAMS volunteer",
    },
    links: [],
  },
  {
    pageNumber: 14,
    webpSrc: "/portfolio-pages/page-14.webp",
    jpgSrc: "/portfolio-pages/page-14.jpg",
    title: {
      ar: "أدوات وشهادات",
      en: "Tools & Certifications",
    },
    alt: {
      ar: "الصفحة الرابعة عشرة: قائمة الأدوات والشهادات المهنية من إدراك وجامعة قطر وأكاديمية الفارابي ورواق وAlison",
      en: "Page 14: Tools and professional certifications",
    },
    links: [],
  },
  {
    pageNumber: 15,
    webpSrc: "/portfolio-pages/page-15.webp",
    jpgSrc: "/portfolio-pages/page-15.jpg",
    title: {
      ar: "للتواصل — محمد الخيوتي",
      en: "Contact — Mohammad Alkhayouti",
    },
    alt: {
      ar: "الصفحة الخامسة عشرة: قنوات التواصل مع محمد الخيوتي - واتساب، البريد الإلكتروني، لينكدإن، والموقع الشخصي",
      en: "Page 15: Contact channels - WhatsApp, Email, LinkedIn, and personal website",
    },
    links: [
      {
        uri: "https://wa.me/963981434844",
        label: {
          ar: "تواصل عبر واتساب",
          en: "Contact via WhatsApp",
        },
        isExternal: true,
        style: {
          left: 60.83,
          top: 65.74,
          width: 9.69,
          height: 8.8,
        },
      },
      {
        uri: "mailto:mohammadalkhayouti@gmail.com",
        label: {
          ar: "إرسال بريد إلكتروني إلى mohammadalkhayouti@gmail.com",
          en: "Send email to mohammadalkhayouti@gmail.com",
        },
        isExternal: false,
        style: {
          left: 29.48,
          top: 65.74,
          width: 30.52,
          height: 8.8,
        },
      },
      {
        uri: "https://www.linkedin.com/in/mohammad-alkhayouti-443205324",
        label: {
          ar: "زيارة الملف الشخصي على LinkedIn",
          en: "Visit LinkedIn profile",
        },
        isExternal: true,
        style: {
          left: 53.75,
          top: 76.02,
          width: 10.47,
          height: 8.8,
        },
      },
      {
        uri: "https://mohammadalkhayouti.netlify.app/",
        label: {
          ar: "زيارة الموقع الشخصي",
          en: "Visit personal website",
        },
        isExternal: false,
        style: {
          left: 35.78,
          top: 76.02,
          width: 17.14,
          height: 8.8,
        },
      },
    ],
  },
];
