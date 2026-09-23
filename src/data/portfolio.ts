export type ProjectCategory = "writing" | "website" | "design" | "digital-project";

export interface ArticleSection {
  number?: string;
  heading?: {
    en: string;
    ar: string;
  };
  paragraphs: {
    en: string[];
    ar: string[];
  };
  isCallout?: boolean;
}

export interface CaseStudyDeliverable {
  en: string;
  ar: string;
}

export interface CaseStudyContent {
  intro: {
    en: string;
    ar: string;
  };
  sections: {
    concept: {
      heading: { en: string; ar: string };
      text: { en: string; ar: string };
    };
    role: {
      heading: { en: string; ar: string };
      text: { en: string; ar: string };
    };
    deliverables: {
      heading: { en: string; ar: string };
      items: CaseStudyDeliverable[];
    };
    techStack?: {
      heading: { en: string; ar: string };
      items: string[];
    };
    result?: {
      heading: { en: string; ar: string };
      text: { en: string; ar: string };
    };
  };
  liveUrl?: string;
  liveUrlLabel?: {
    en: string;
    ar: string;
  };
}

export interface PortfolioProject {
  id: string;
  slug: string;
  category: ProjectCategory;
  categoryLabel: {
    en: string;
    ar: string;
  };
  currentSiteBadge?: {
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
  article?: {
    intro: {
      en: string[];
      ar: string[];
    };
    sections: ArticleSection[];
    callout?: {
      heading: {
        en: string;
        ar: string;
      };
      paragraphs: {
        en: string[];
        ar: string[];
      };
    };
    conclusion?: {
      heading: {
        en: string;
        ar: string;
      };
      paragraphs: {
        en: string[];
        ar: string[];
      };
    };
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
  coverImage?: {
    src: string;
    alt: {
      en: string;
      ar: string;
    };
  };
  isPlaceholder?: boolean;
  caseStudy?: CaseStudyContent;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "item-writing",
    slug: "content-marketing",
    category: "writing",
    categoryLabel: {
      en: "Writing",
      ar: "كتابة محتوى",
    },
    title: {
      en: "5 Content Marketing Strategies for Your Business Without Ads",
      ar: "5 طرق للتسويق بالمحتوى لمشروعك دون إعلانات",
    },
    shortDescription: {
      en: "A strategic breakdown of how to build an organic content marketing system based on customer questions and compounding assets without relying on paid advertising.",
      ar: "دليل عملي لبناء نظام تسويق بالمحتوى يربط بين أسئلة الجمهور وأصول المحتوى وتوزيعها، دون الاعتماد المستمر على الإعلانات.",
    },
    coverImage: {
      src: "/images/content-marketing.jpg",
      alt: {
        ar: "مقال عن استراتيجيات التسويق بالمحتوى",
        en: "Article on content marketing strategies",
      },
    },
    coverPlaceholder: {
      badge: {
        en: "Article / Content",
        ar: "مقال تحريري",
      },
      pattern: "document",
    },
    seo: {
      title: {
        en: "5 Content Marketing Strategies for Your Business Without Ads — Mohammad Alkhayouti",
        ar: "5 طرق للتسويق بالمحتوى لمشروعك دون إعلانات — محمد الخيوتي",
      },
      description: {
        en: "How to build an organic content marketing system connecting audience questions, content production, distribution, and performance measurement without paid ads.",
        ar: "دليل عملي لبناء نظام تسويق بالمحتوى يربط بين أسئلة الجمهور وإنتاج المحتوى وتوزيعه وتحسين ظهوره وقياس أثره لمشروعك دون إعلانات.",
      },
    },
    isPlaceholder: false,
    article: {
      intro: {
        ar: [
          "يواجه كثير من أصحاب المشاريع مشكلة تبدو بسيطة في ظاهرها: كيف أجذب العملاء باستمرار إذا لم تكن لدي ميزانية كبيرة للإعلانات؟",
          "لا شك أن الإعلانات المدفوعة الطريق الأسرع للوصول إلى العملاء، لكنها تجعل هذا الوصول مرتبطاً بالإنفاق؛ فعندما تتوقف الحملة يتوقف الظهور أمام العميل، وهنا يأتي دور التسويق بالمحتوى، نظام يربط بين أسئلة الجمهور وإنتاج المحتوى وتوزيعه وتحسين ظهوره وقياس أثره. قد يحتاج التسويق بالمحتوى المزيد من الوقت لكنه استثمار في أصول محتوى تتراكم قيمتها، إليك سبع طرق تساعدك على بناء هذا النظام لمشروعك.",
        ],
        en: [
          "Many business owners face what appears to be a simple dilemma: How can I consistently attract customers without a large advertising budget?",
          "Paid advertising is undeniably the fastest route to reaching customers, but it ties your reach directly to spend; when the campaign stops, your visibility ends. This is where content marketing comes in—a system connecting audience inquiries, content creation, distribution, search visibility, and performance measurement. While content marketing requires more time, it is an investment in compounding content assets. Here are strategies to help you build this system for your business.",
        ],
      },
      sections: [
        {
          heading: {
            ar: "ابن خطة محتوى من عميلك",
            en: "Build a Content Plan Around Your Customer",
          },
          paragraphs: {
            ar: [
              "بدل أن تسأل نفسك كل أسبوع «ماذا أنشر؟»، ابحث عن «ما الذي يريد عملائي معرفته؟»",
              "تبدأ خطة المحتوى الجيدة بفهم الجمهور: ما أهدافه؟ ما المشكلات التي يواجهها؟ ما الأسئلة التي يكررها؟ ما الاعتراضات التي تمنعه من الشراء؟ وأين يبحث عن المعلومات؟ ويمكن الوصول إلى هذه الإجابات من خلال الحديث مع العملاء، ومراجعة الأسئلة المتكررة في المبيعات وخدمة العملاء، ومراقبة النقاشات في المجتمعات والمنصات التي يستخدمها الجمهور، إضافة إلى دراسة المحتوى الذي يقدمه المنافسون.",
            ],
            en: [
              "Instead of asking yourself every week 'What should I post?', ask: 'What do my customers actually want to know?'",
              "A sound content plan starts with understanding the audience: What are their goals? What challenges do they face? What recurring questions do they ask? What objections prevent them from purchasing? And where do they search for information? You can uncover these answers by talking directly with customers, reviewing FAQs from sales and support, observing discussions in relevant communities and platforms, and analyzing competitor content.",
            ],
          },
        },
        {
          heading: {
            ar: "لا تكتب لأجل البيع فقط",
            en: "Don't Write Solely to Sell",
          },
          paragraphs: {
            ar: [
              "اربط محتواك بالهدف والمرحلة التي يخدمها، فليست كل قطعة محتوى مطالبة ببيع المنتج مباشرة. في بداية رحلة العميل، ساعده على فهم المشكلة والتعرّف إلى الحلول المتاحة، ثم قارن بينها ووجّهه إلى الأنسب لاحتياجه. وعندما يقترب من اتخاذ القرار، قدّم له معلومات عملية عن المنتج أو الخدمة، مثل طريقة العمل، والأسئلة الشائعة، وتجارب العملاء، وكل ما يبدد تردده. لكن احذر من الوقوع في نشر محتوى تعليمي لا يقود إلى المنتج.",
            ],
            en: [
              "Align your content with the specific goal and stage it serves; not every piece of content needs to ask for an immediate sale. Early in the customer journey, help them grasp the problem and discover available solutions, then compare alternatives and guide them toward what best fits their need. As they approach a decision, provide actionable details about the product or service—how it works, FAQs, customer stories, and everything that eliminates hesitation. But beware of educational content that never leads back to your solution.",
            ],
          },
        },
        {
          heading: {
            ar: "لا تحاول أن تكون موجوداً في كل مكان",
            en: "Don't Try to Be Everywhere",
          },
          paragraphs: {
            ar: [
              "قد يبدو الانتشار على أكبر عدد من المنصات خطوة ضرورية للوصول إلى جمهور أوسع. لكن محاولة إنتاج محتوى مختلف لكل منصة قد تشتت جهودك وتستنزف فريقك وتؤدي في النهاية إلى محتوى ضعيف وغير منتظم.",
              "ما القنوات التي تحتاج إليها فعلاً؟ ابدأ من جمهورك وقدرتك على الاستمرار، لا من عدد المنصات المتاحة، اختر قناة أساسية كالموقع أو المدونة ثم استخدم وسائل التواصل الاجتماعي أو الفيديو أو البريد الإلكتروني لتوزيع المحتوى وإعادة تقديمه بصيغ تناسب كل جمهور.",
            ],
            en: [
              "Expanding across every available platform may seem like a necessary step to reach a broader audience. Yet attempting to create distinct content for every network scatters your focus, exhausts your team, and ultimately produces weak, irregular content.",
              "Which channels do you genuinely need? Start with your audience and your capacity for consistency, not the total number of available channels. Choose one primary anchor such as a website or blog, then leverage social media, video, or email to distribute and repurpose content into formats suited for each audience.",
            ],
          },
        },
        {
          heading: {
            ar: "وسّع وصول محتواك عبر محرك البحث والمجتمعات",
            en: "Expand Reach via Search Engines and Communities",
          },
          paragraphs: {
            ar: [
              "قد تنشر محتوى جيداً على حسابات مشروعك، لكنه لا يصل بالضرورة إلى الأشخاص الذين يحتاجون إليه في تلك اللحظة، فكثير من الجمهور يبدأ رحلته بطرح سؤال في محرك بحث أو مجتمع رقمي، لا بتصفح حساباتك مباشرة.",
              "فأين يبحث جمهورك عن إجاباتك؟ راقب الأسئلة والموضوعات التي تشغله في محركات البحث والمجتمعات الرقمية، ثم قدّم محتوى واضحاً يجيب عنها.",
              "لا تقتصر على القنوات التقليدية؛ فالجمهور يعتمد اليوم أيضاً على أدوات البحث المدعومة بالذكاء الاصطناعي للوصول إلى المعلومات.",
            ],
            en: [
              "You might publish solid content on your project's social profiles, but it does not necessarily reach people at the exact moment they need it. Much of your audience begins their journey with a search query or a question in a digital community, rather than browsing your profile directly.",
              "Where is your audience seeking answers? Monitor the questions and topics occupying their attention across search engines and online communities, then deliver clear content addressing them.",
              "Do not limit yourself to conventional channels; audiences today also rely on AI-powered search engines and conversational tools to retrieve information.",
            ],
          },
        },
        {
          heading: {
            ar: "قِس نتائج المحتوى وطوّر ما ينجح",
            en: "Measure Content Outcomes and Scale What Works",
          },
          paragraphs: {
            ar: [
              "لن تعرف ما الذي يستحق تكراره إذا لم تراجع النتائج. تابع التفاعل والوصول والزيارات والإجراءات التي يقوم بها الجمهور بعد مشاهدة المحتوى، قد يبدو أحد أنواع المحتوى ناجحاً لأنه حصد تفاعلاً كبيراً، بينما يجذب محتوى آخر عملاء جدد أو يدفع الجمهور إلى اتخاذ خطوة.",
              "لا قيمة للأرقام وحدها؛ قيمتها في مدى ارتباطها بأهداف مشروعك، راقب النتائج لتعرف ما الذي يحقق أثراً حقيقياً ووجّه مواردك نحوه.",
            ],
            en: [
              "You won't know what is worth repeating unless you review performance. Track engagement, reach, visits, and the specific actions audiences take after consuming your content. One piece might appear successful due to high engagement, while another quietly attracts new clients or prompts tangible decisions.",
              "Metrics have no value in isolation; their true value lies in alignment with your business objectives. Monitor results to identify what drives real impact, and direct your resources accordingly.",
            ],
          },
        },
      ],
      callout: {
        heading: {
          ar: "هل يغني التسويق بالمحتوى عن الإعلانات؟",
          en: "Does Content Marketing Replace Paid Ads?",
        },
        paragraphs: {
          ar: [
            "لا يعني التسويق بالمحتوى أن تتوقف عن الإعلانات المدفوعة تماماً، يمكن للإعلانات أن تساعد في الوصول إلى جمهور جديد بسرعة، بينما يعمل المحتوى على بناء أصل يمكن أن يستمر في جذب الناس وتثقيفهم بعد انتهاء الحملة.",
          ],
          en: [
            "Content marketing does not mean abandoning paid advertising entirely. Ads can accelerate access to a new audience rapidly, while content builds an enduring asset that continues attracting and educating people long after the ad campaign has concluded.",
          ],
        },
      },
      conclusion: {
        heading: {
          ar: "الخاتمة",
          en: "Conclusion",
        },
        paragraphs: {
          ar: [
            "لا يحتاج مشروعك إلى نشر أكبر عدد ممكن من المنشورات، بل إلى نظام يعرف ماذا يقدم ولمن ولماذا.",
            "ابدأ من أسئلة العملاء وحدد وظيفة كل محتوى، ثم اختر القنوات التي تستطيع الاستمرار فيها، وأعد استخدام الأفكار وراجع النتائج باستمرار.",
            "ابدأ اليوم واجمع عشرة أسئلة تتكرر من عملائك واختر سؤالاً واحداً حوّله إلى محتوى، قد تكون هذه الخطوة البسيطة بداية نظام كامل يساعد مشروعك على الوصول إلى جمهوره دون الاعتماد المستمر على الإعلانات.",
          ],
          en: [
            "Your business does not need to publish the highest volume of posts; it needs a system that understands what to deliver, to whom, and why.",
            "Start with customer questions, define the specific purpose of each piece of content, choose channels where you can sustain consistency, repurpose ideas, and review performance regularly.",
            "Start today: gather ten recurring questions from your clients, pick just one, and turn it into content. This simple step can be the foundation of a complete system that helps your business reach its audience without perpetual dependency on ads.",
          ],
        },
      },
    },
  },
  {
    id: "item-personal-website",
    slug: "personal-website",
    category: "website",
    categoryLabel: {
      en: "Design & Development",
      ar: "تصميم وتطوير",
    },
    currentSiteBadge: {
      en: "This website.",
      ar: "هذا الموقع.",
    },
    title: {
      en: "Personal Website Design & Development",
      ar: "تصميم وتطوير موقع شخصي احترافي",
    },
    shortDescription: {
      en: "A personal website I designed, developed, and deployed to present my services, experience, and work through a clear responsive experience.",
      ar: "موقع شخصي أنشأته من الفكرة إلى التصميم والتطوير والنشر، لعرض خدماتي وخبراتي وأعمالي بطريقة واضحة ومتجاوبة على مختلف الأجهزة.",
    },
    coverImage: {
      src: "/images/personal-website.jpg",
      alt: {
        ar: "صورة من موقع محمد الخيوتي الشخصي",
        en: "Screenshot of Mohammad Alkhayouti's personal website",
      },
    },
    coverPlaceholder: {
      badge: {
        en: "Live Website",
        ar: "موقع مباشر",
      },
      pattern: "code",
    },
    seo: {
      title: {
        en: "Personal Website Design & Development — Mohammad Alkhayouti",
        ar: "تصميم وتطوير موقع شخصي احترافي — محمد الخيوتي",
      },
      description: {
        en: "A personal website I designed, developed, and deployed to present my services, experience, and work through a clear responsive experience.",
        ar: "موقع شخصي أنشأته من الفكرة إلى التصميم والتطوير والنشر، لعرض خدماتي وخبراتي وأعمالي بطريقة واضحة ومتجاوبة على مختلف الأجهزة.",
      },
    },
    isPlaceholder: false,
    caseStudy: {
      intro: {
        ar: "موقع شخصي أنشأته من الفكرة إلى التصميم والتطوير والنشر، لعرض خدماتي وخبراتي وأعمالي بطريقة واضحة ومتجاوبة.",
        en: "A personal website I designed, developed, and deployed to present my services, experience, and work through a clear responsive experience.",
      },
      sections: {
        concept: {
          heading: {
            ar: "فكرة المشروع",
            en: "Project Concept",
          },
          text: {
            ar: "أنشأت هذا الموقع ليكون مساحة مهنية أقدّم من خلالها خدماتي وخبراتي وأعمالي، بدل الاعتماد على سيرة ذاتية تقليدية فقط. كان الهدف هو تحويل المعلومات الشخصية والمهنية إلى تجربة رقمية واضحة وسهلة التصفح.",
            en: "I created this website as a professional space to present my services, experience, and work instead of relying only on a traditional résumé. The goal was to turn personal and professional information into a clear and easy-to-navigate digital experience.",
          },
        },
        role: {
          heading: {
            ar: "دوري في المشروع",
            en: "My Role",
          },
          text: {
            ar: "قمت بتطوير المشروع من الفكرة الأولية إلى التصميم والتنفيذ، وتنظيم المحتوى، وإضافة النسختين العربية والإنجليزية، وتحسين تجربة الاستخدام على الهاتف والكمبيوتر، ثم رفع الموقع على الاستضافة.",
            en: "I developed the project from the initial concept through design and implementation, organized the content, added Arabic and English versions, improved the experience for mobile and desktop users, and deployed the website to hosting.",
          },
        },
        deliverables: {
          heading: {
            ar: "ما الذي تم تنفيذه؟",
            en: "What Was Implemented?",
          },
          items: [
            {
              ar: "التخطيط العام للموقع.",
              en: "Overall site planning and structure.",
            },
            {
              ar: "تنظيم الأقسام والمحتوى.",
              en: "Content hierarchy and section organization.",
            },
            {
              ar: "تصميم الهوية البصرية العامة.",
              en: "Visual identity and editorial aesthetic design.",
            },
            {
              ar: "إنشاء واجهة متجاوبة.",
              en: "Fully responsive multi-device user interface.",
            },
            {
              ar: "دعم اللغتين العربية والإنجليزية.",
              en: "Bilingual support for Arabic and English.",
            },
            {
              ar: "دعم اتجاه RTL للعربية.",
              en: "Native RTL layout direction and Arabic typography.",
            },
            {
              ar: "تحسين تجربة القراءة والتنقل.",
              en: "Optimized readability and intuitive navigation.",
            },
            {
              ar: "إنشاء قسم الأعمال.",
              en: "Structured portfolio and selected work showcase.",
            },
            {
              ar: "إنشاء صفحات دراسات الحالة.",
              en: "Dedicated in-depth case study architecture.",
            },
            {
              ar: "رفع الموقع ونشره على Netlify.",
              en: "Production build and deployment on Netlify.",
            },
            {
              ar: "ربط المشروع بمستودع GitHub.",
              en: "Git version control and GitHub repository setup.",
            },
            {
              ar: "اختبار الموقع على الهاتف والكمبيوتر.",
              en: "Rigorous cross-platform testing on mobile and desktop.",
            },
          ],
        },
      },
      liveUrl: "https://wa.me/963981434844",
      liveUrlLabel: {
        ar: "اطلب الخدمة →",
        en: "Request a service →",
      },
    },
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
