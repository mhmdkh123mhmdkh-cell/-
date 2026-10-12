export interface BlogContentBlock {
  type: "paragraph" | "heading" | "quote" | "list" | "callout";
  text?: string;
  level?: 2 | 3;
  citation?: string;
  items?: string[];
  title?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  isDemo?: boolean;
  coverImage?: string;
  isoDate: string;
  date: {
    ar: string;
    en: string;
  };
  author: {
    ar: string;
    en: string;
  };
  readTime: {
    ar: string;
    en: string;
  };
  tags: {
    ar: string[];
    en: string[];
  };
  title: {
    ar: string;
    en: string;
  };
  excerpt: {
    ar: string;
    en: string;
  };
  seo: {
    title: {
      ar: string;
      en: string;
    };
    description: {
      ar: string;
      en: string;
    };
  };
  content: {
    ar: BlogContentBlock[];
    en: BlogContentBlock[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "welcome-to-my-blog",
    slug: "welcome-to-my-blog",
    isDemo: true,
    isoDate: "2026-10-12",
    date: {
      ar: "12 أكتوبر 2026",
      en: "October 12, 2026",
    },
    author: {
      ar: "محمد الخيوتي",
      en: "Mohammad Alkhayouti",
    },
    readTime: {
      ar: "3 دقائق للقراءة",
      en: "3 min read",
    },
    tags: {
      ar: ["مقال تجريبي", "صناعة المحتوى", "التطوير الرقمي"],
      en: ["Demo Post", "Content Writing", "Web Strategy"],
    },
    title: {
      ar: "مرحبًا بكم في مدونتي",
      en: "Welcome to My Blog",
    },
    excerpt: {
      ar: "هذا مقال تجريبي يوضح شكل وتنسيق المقالات في المدونة. يمكنك استبداله أو إضافة مقالات جديدة بكل سهولة من ملف البيانات.",
      en: "This is a demo article demonstrating the layout and styling of blog articles. You can easily replace it or add new posts via the data file.",
    },
    seo: {
      title: {
        ar: "مرحبًا بكم في مدونتي — محمد الخيوتي",
        en: "Welcome to My Blog — Mohammad Alkhayouti",
      },
      description: {
        ar: "مقال تجريبي يوضح بنية وتصميم المدونة على موقع محمد الخيوتي الشخصي، وطريقة إضافة المقالات.",
        en: "A starter demo post showcasing the layout and structure of Mohammad Alkhayouti's blog.",
      },
    },
    content: {
      ar: [
        {
          type: "callout",
          title: "ملاحظة: هذا محتوى تجريبي جاهز للاستبدال",
          text: "هذا المقال أُضيف كنموذج هيكلي لتوضيح شكل وتنسيق المدونة داخل الموقع. يمكنك في أي وقت تعديل عنوانه ومحتواه أو استبداله بالكامل من خلال تعديل ملف: src/data/blog.ts دون الحاجة لتغيير أي تصميم في الصفحات.",
        },
        {
          type: "paragraph",
          text: "أهلاً بك في المساحة التدوينية الخاصة بي. أنشأتُ هذه المدونة لتكون نافذة لمشاركة التجارب والأفكار في مجالات كتابة المحتوى العربي الرصين، تصميم وتطوير المواقع المتجاوبة، وإدارة العمليات والنشر الرقمي.",
        },
        {
          type: "heading",
          level: 2,
          text: "ما الذي ستجده في هذه المدونة؟",
        },
        {
          type: "paragraph",
          text: "تركز التدوينات القادمة على الموازنة بين الدقة العلمية والأسلوب السلس الجذاب، مع تقديم خطوات عملية قابلة للتطبيق للمبدعين وأصحاب المشاريع والباحثين:",
        },
        {
          type: "list",
          items: [
            "استراتيجيات كتابة المحتوى التسويقي والعلمي المبني على مصادر موثوقة.",
            "مبادئ تصميم المواقع الشخصية والتجارية وتجربة المستخدم الخفيفة.",
            "تنظيم أطر النشر الرقمي باستخدام ووردبريس وأدوات إدارة المحتوى الحديثة.",
            "تجارب واقعية ودروس مستفادة من مشاريع العمل الحر وسوق العمل.",
          ],
        },
        {
          type: "quote",
          text: "المحتوى الجيد لا يُقاس بطوله، بل بقدرته على إيصال الفكرة الدقيقة للقارئ المستهدف بأوضح أسلوب وأقل جهد ذهني.",
          citation: "محمد الخيوتي",
        },
        {
          type: "heading",
          level: 2,
          text: "كيف أضيف مقالًا جديدًا إلى هذا الملف؟",
        },
        {
          type: "paragraph",
          text: "تم بناء هذه المدونة لتعمل بشكل ذاتي وبسيط للغاية؛ حيث يكفي نسخ هذا النموذج في مصفوفة blogPosts وإضافة العنوان، النبذة، التاريخ، والفقرات بالعربية والإنجليزية لتظهر المقالة تلقائيًا في صفحة المدونة مع مسار URL ثابت وخاص بها ومحسّن لمحركات البحث (SEO).",
        },
        {
          type: "paragraph",
          text: "شكرًا لزيارتك، ويسعدني دومًا تواصلك وملاحظاتك عبر قنوات التواصل المتاحة في الموقع.",
        },
      ],
      en: [
        {
          type: "callout",
          title: "Note: Starter Demo Content",
          text: "This post was added as an editorial placeholder to demonstrate the typography, layout, and responsiveness of the blog. You can easily customize, edit, or remove it in src/data/blog.ts without touching any page layout code.",
        },
        {
          type: "paragraph",
          text: "Welcome to my blog space. I created this blog to share hands-on reflections, insights, and practical guides on reliable content writing, responsive website crafting, and digital publishing pipelines.",
        },
        {
          type: "heading",
          level: 2,
          text: "What to expect in upcoming articles?",
        },
        {
          type: "paragraph",
          text: "Future articles will blend academic precision with reader-focused communication, exploring topics such as:",
        },
        {
          type: "list",
          items: [
            "Content marketing strategies that build genuine authority without ad spend.",
            "Designing clean personal and business websites with great typography and responsive layouts.",
            "Digital publishing workflows and editorial quality control.",
            "Practical insights from freelance and client projects.",
          ],
        },
        {
          type: "quote",
          text: "Effective content is measured not by volume, but by how clearly and efficiently it delivers genuine value to the reader.",
          citation: "Mohammad Alkhayouti",
        },
        {
          type: "heading",
          level: 2,
          text: "How to add new articles?",
        },
        {
          type: "paragraph",
          text: "This blog uses a lightweight, self-contained data model. To add a new post, simply append an entry to the blogPosts array in src/data/blog.ts. It will automatically show up on the blog index and get its own dedicated SEO-ready URL.",
        },
      ],
    },
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
