export type Language = "en" | "ar";

export interface Translations {
  nav: {
    name: string;
    capabilities: string;
    experiences: string;
    about: string;
    contact: string;
    talkCta: string;
  };
  hero: {
    headline: string;
    support: string;
    availability: string;
    primaryCta: string;
    secondaryCta: string;
  };
  capabilities: {
    title: string;
    items: {
      number: string;
      smallLabel?: string;
      title: string;
      description: string;
      linkText?: string;
    }[];
  };
  experiences: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  writing: {
    tags: string[];
    statement: string;
  };
  about: {
    mark: string;
    text: string;
  };
  contact: {
    title: string;
    subtitle: string;
    mainAction: string;
    whatsapp: {
      label: string;
      number: string;
      url: string;
    };
    linkedin: {
      label: string;
      url: string;
    };
    email: {
      label: string;
      address: string;
    };
    footer: {
      name: string;
      availability: string;
    };
  };
}

export const content: Record<Language, Translations> = {
  en: {
    nav: {
      name: "Mohammad Alkhayouti",
      capabilities: "Capabilities",
      experiences: "Experiences",
      about: "About",
      contact: "Contact",
      talkCta: "Let's talk",
    },
    hero: {
      headline: "Let me show you\nwhat I can do.",
      support: "I write, research, prepare content, handle customers, and manage print operations.",
      availability: "Looking for work Online or Offline in Damascus.",
      primaryCta: "What can I offer?",
      secondaryCta: "Contact me",
    },
    capabilities: {
      title: "What can I offer?",
      items: [
        {
          number: "01",
          title: "Content Writing & Research",
          description:
            "I write articles and posts in Arabic with scientific or creative precision, sourcing from reliable references, organizing information, applying SEO best practices, and preparing text for publication.",
        },
        {
          number: "02",
          title: "Website Creation",
          description:
            "I create and publish responsive personal and business websites, shaping their structure, visual identity, and user experience from idea to live site.",
        },
        {
          number: "03",
          smallLabel: "PUBLISHING",
          title: "Digital Publishing & Content Structure",
          description:
            "Formatting and publishing content through WordPress, organizing documents, improving article structure, and making content easier to read and access.",
        },
        {
          number: "04",
          smallLabel: "DESIGN",
          title: "Content & Document Design",
          description: "Creating visual materials that support educational content using Canva.",
        },
        {
          number: "05",
          title: "Printing",
          description:
            "I operate printing equipment and carry out printing and document copying based on the project requirements.",
        },
        {
          number: "06",
          title: "Customer Service",
          description:
            "I understand customer requests and deliver services and products professionally.",
        },
      ],
    },
    experiences: {
      title: "Experiences that shaped this path",
      items: [
        {
          title: "Research Reference",
          description: "Surveys, article formatting, preparation, and website publishing.",
        },
        {
          title: "Medical Student's Lens",
          description: "Experience in medical and scientific content writing.",
        },
        {
          title: "Al-Andalus Bookstore",
          description:
            "Around eight years in sales, customer care, printing, and document copying.",
        },
      ],
    },
    writing: {
      tags: ["Scientific Article", "Creative Writing", "Reliable Sources", "SEO"],
      statement: "I write content only after understanding the topic and the reader.",
    },
    about: {
      mark: "M",
      text: "I am Mohammad Alkhayouti, a medical student.",
    },
    contact: {
      title: "Let's talk.",
      subtitle: "Looking for work Online or Offline in Damascus.",
      mainAction: "Contact me",
      whatsapp: {
        label: "Chat on WhatsApp",
        number: "0981434844",
        url: "https://wa.me/963981434844",
      },
      linkedin: {
        label: "My LinkedIn Profile",
        url: "https://www.linkedin.com/in/mohammad-alkhayouti-443205324",
      },
      email: {
        label: "Send an Email",
        address: "mohammadalkhayouti@gmail.com",
      },
      footer: {
        name: "Mohammad Alkhayouti",
        availability: "Available for work — Online or Offline in Damascus.",
      },
    },
  },

  ar: {
    nav: {
      name: "محمد الخيوتي",
      capabilities: "ما أقدّمه",
      experiences: "تجارب",
      about: "عنّي",
      contact: "تواصل معي",
      talkCta: "لنتحدث",
    },
    hero: {
      headline: "دعني أريك\nما أستطيع فعله.",
      support: "أكتب، أبحث، أجهّز المحتوى، أتعامل مع الزبائن، وأجيد أعمال الطباعة.",
      availability: "أبحث عن عمل Online أو Offline في دمشق.",
      primaryCta: "ماذا أستطيع أن أقدّم؟",
      secondaryCta: "تواصل معي",
    },
    capabilities: {
      title: "ماذا أستطيع أن أقدّم؟",
      items: [
        {
          number: "01",
          title: "كتابة المحتوى والبحث",
          description:
            "أكتب المقالات والمنشورات بالعربية، بصياغة علمية أو إبداعية، بعد البحث في مصادر موثوقة وتنظيم المعلومات، مع مراعاة قواعد تحسين الظهور في محركات البحث SEO وتجهيز النص للنشر.",
        },
        {
          number: "02",
          title: "إنشاء المواقع",
          description:
            "إنشاء ونشر مواقع شخصية وتجارية متجاوبة، من بناء هيكل الموقع وهويته البصرية إلى تنظيم المحتوى وتجهيز الموقع للنشر.",
        },
        {
          number: "03",
          smallLabel: "النشر الرقمي",
          title: "النشر الرقمي وبنية المحتوى",
          description:
            "تنسيق المحتوى ونشره عبر WordPress، وتنظيم المستندات، وتحسين بنية المقالات، وجعل المحتوى أسهل في القراءة والوصول.",
        },
        {
          number: "04",
          smallLabel: "التصميم",
          title: "تصميم المحتوى والوثائق",
          description: "إنشاء مواد بصرية مساندة للمحتوى التعليمي باستخدام Canva.",
        },
        {
          number: "05",
          title: "الطباعة",
          description:
            "أتعامل مع ماكينات الطباعة وأنفّذ أعمال الطباعة وتصوير المستندات بحسب طبيعة الطلب.",
        },
        {
          number: "06",
          title: "التعامل مع الزبائن",
          description: "أفهم طلبات الزبائن وأقدّم لهم الخدمة والمنتج بطريقة مهنية.",
        },
      ],
    },
    experiences: {
      title: "تجارب صنعت هذه الصورة",
      items: [
        {
          title: "المرجع البحثي",
          description: "استبيانات، تنسيق مقالات، وتجهيزها ورفعها على الموقع.",
        },
        {
          title: "عدسة طالب طب",
          description: "تجربة في كتابة المحتوى الطبي والعلمي.",
        },
        {
          title: "مكتبة الأندلس",
          description: "نحو ثماني سنوات في بيع المنتجات، وخدمة الزبائن، والطباعة وتصوير المستندات.",
        },
      ],
    },
    writing: {
      tags: ["مقال علمي", "مقال إبداعي", "مصادر موثوقة", "SEO"],
      statement: "أكتب المحتوى بعد أن أفهم الموضوع والقارئ.",
    },
    about: {
      mark: "م",
      text: "أنا محمد الخيوتي طالب طب.",
    },
    contact: {
      title: "لنتحدث.",
      subtitle: "أبحث عن عمل Online أو Offline في دمشق.",
      mainAction: "تواصل معي",
      whatsapp: {
        label: "تواصل عبر WhatsApp",
        number: "0981434844",
        url: "https://wa.me/963981434844",
      },
      linkedin: {
        label: "حسابي على LinkedIn",
        url: "https://www.linkedin.com/in/mohammad-alkhayouti-443205324",
      },
      email: {
        label: "راسلني عبر البريد",
        address: "mohammadalkhayouti@gmail.com",
      },
      footer: {
        name: "محمد الخيوتي",
        availability: "متاح للعمل — Online أو Offline في دمشق.",
      },
    },
  },
};
