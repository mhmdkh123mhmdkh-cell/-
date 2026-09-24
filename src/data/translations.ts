export type Language = "en" | "ar";

export interface Translations {
  nav: {
    name: string;
    capabilities: string;
    selectedWork: string;
    experiences: string;
    about: string;
    contact: string;
    talkCta: string;
  };
  hero: {
    name: string;
    tagline: string;
    headline?: string;
    support?: string;
    availability?: string;
    primaryCta: string;
    secondaryCta: string;
  };
  selectedWork: {
    title: string;
    subtitle: string;
    viewWorkAction: string;
    placeholderNotice: string;
    backAction: string;
  };
  capabilities: {
    title: string;
    items: {
      number?: string;
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
  about: {
    title: string;
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
      selectedWork: "My Work",
      experiences: "Experiences",
      about: "About",
      contact: "Contact",
      talkCta: "Let's talk",
    },
    hero: {
      name: "Mohammad Alkhayouti",
      tagline: "I help turn an idea into content, design, and a website.",
      headline: "Mohammad Alkhayouti",
      support: "",
      availability: "",
      primaryCta: "What can I offer?",
      secondaryCta: "Contact me",
    },
    selectedWork: {
      title: "My Work",
      subtitle: "",
      viewWorkAction: "View work",
      placeholderNotice: "Structural Placeholder",
      backAction: "Back to My Work",
    },
    capabilities: {
      title: "What can I offer?",
      items: [
        {
          title: "Content Writing & Research",
          description:
            "I write articles and posts in Arabic with scientific or creative precision, sourcing from reliable references, organizing information, applying SEO best practices, and preparing text for publication.",
        },
        {
          title: "Website Creation",
          description:
            "I create and publish responsive personal and business websites, shaping their structure, visual identity, and user experience from idea to live site.",
        },
        {
          title: "Digital Publishing & Content Structure",
          description:
            "Formatting and publishing content through WordPress, organizing documents, improving article structure, and making content easier to read and access.",
        },
        {
          title: "Content & Document Design",
          description: "Creating visual materials that support educational content using Canva.",
        },
        {
          title: "Printing",
          description:
            "I operate printing equipment and carry out printing and document copying based on the project requirements.",
        },
        {
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
        {
          title: "Freelance Work",
          description:
            "Providing content, website, and design services according to clients’ needs, from concept and execution to delivery.",
        },
      ],
    },
    about: {
      title: "About",
      text: "It is difficult for me to define myself by a single title. I am a medical student, but medicine is not the only thing I learn. The digital world is not separate from who I am. I enjoy researching, learning, and experimenting—not merely for knowledge, but to give an idea the chance to see the light instead of remaining trapped in the mind.",
    },
    contact: {
      title: "Let's talk",
      subtitle: "Available for work Online or Offline in Damascus.",
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
      selectedWork: "أعمالي",
      experiences: "تجارب",
      about: "عنّي",
      contact: "تواصل معي",
      talkCta: "لنتحدث",
    },
    hero: {
      name: "محمد الخيوتي",
      tagline: "أساعد في تحويل الفكرة إلى محتوى وتصميم وموقع.",
      headline: "محمد الخيوتي",
      support: "",
      availability: "",
      primaryCta: "ماذا أستطيع أن أقدّم؟",
      secondaryCta: "تواصل معي",
    },
    selectedWork: {
      title: "أعمالي",
      subtitle: "",
      viewWorkAction: "عرض العمل",
      placeholderNotice: "نموذج تمهيدي",
      backAction: "العودة إلى أعمالي",
    },
    capabilities: {
      title: "ماذا أستطيع أن أقدّم؟",
      items: [
        {
          title: "كتابة المحتوى والبحث",
          description:
            "أكتب المقالات والمنشورات بالعربية، بصياغة علمية أو إبداعية، بعد البحث في مصادر موثوقة وتنظيم المعلومات، مع مراعاة قواعد تحسين الظهور في محركات البحث SEO وتجهيز النص للنشر.",
        },
        {
          title: "إنشاء المواقع",
          description:
            "إنشاء ونشر مواقع شخصية وتجارية متجاوبة، من بناء هيكل الموقع وهويته البصرية إلى تنظيم المحتوى وتجهيز الموقع للنشر.",
        },
        {
          title: "النشر الرقمي وبنية المحتوى",
          description:
            "تنسيق المحتوى ونشره عبر WordPress، وتنظيم المستندات، وتحسين بنية المقالات، وجعل المحتوى أسهل في القراءة والوصول.",
        },
        {
          title: "تصميم المحتوى والوثائق",
          description: "إنشاء مواد بصرية مساندة للمحتوى التعليمي باستخدام Canva.",
        },
        {
          title: "الطباعة",
          description:
            "أتعامل مع ماكينات الطباعة وأنفّذ أعمال الطباعة وتصوير المستندات بحسب طبيعة الطلب.",
        },
        {
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
        {
          title: "العمل الحر",
          description:
            "تقديم خدمات المحتوى والمواقع والتصميم بحسب احتياجات العملاء، من الفكرة والتنفيذ إلى التسليم.",
        },
      ],
    },
    about: {
      title: "عنّي",
      text: "يَصعب عليّ تعريف نفسي في مُسمّى واحد، أنا طالب طب لكن الطب ليس الشيء الوحيد الذي أتعلمه، والعالم الرقمي ليس مجالًا منفصلًا عني، أحب أن أبحث وأتعلم وأجرّب، لا لمجرد المعرفة، بل لأمنح الفكرة فرصة أن ترى النور ولا تبقى حبيسة العقل.",
    },
    contact: {
      title: "لنتحدث",
      subtitle: "متاح للعمل Online أو Offline في دمشق.",
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
