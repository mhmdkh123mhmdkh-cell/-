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
  coverImageAlt?: {
    ar: string;
    en: string;
  };
  cardImage?: string;
  cardImageAlt?: {
    ar: string;
    en: string;
  };
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
    id: "content-marketing-strategies-startups",
    slug: "content-marketing-strategies-startups",
    isDemo: false,
    coverImage: "/images/content-marketing.jpg",
    coverImageAlt: {
      ar: "5 طرق للتسويق بالمحتوى للمشاريع الناشئة دون إعلانات مدفوعة",
      en: "5 Content marketing strategies for startups without paid ads",
    },
    cardImage: "/images/blog-content-marketing.jpg",
    cardImageAlt: {
      ar: "مكتب عمل هادئ وبسيط يضم دفتر ملاحظات وقلم بمساحة مريحة للتخطيط",
      en: "A minimalist workspace desk with a clean notebook and pen",
    },
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
      ar: "5 دقائق للقراءة",
      en: "5 min read",
    },
    tags: {
      ar: [
        "التسويق وصناعة المحتوى",
        "التسويق بالمحتوى",
        "المشاريع الناشئة",
        "جذب العملاء",
        "تحسين محركات البحث",
        "استراتيجية المحتوى",
      ],
      en: ["Content Marketing", "Startups", "Customer Acquisition", "SEO", "Content Strategy"],
    },
    title: {
      ar: "5 طرق للتسويق بالمحتوى للمشاريع الناشئة دون إعلانات مدفوعة",
      en: "5 Content Marketing Strategies for Startups Without Paid Ads",
    },
    excerpt: {
      ar: "تعرّف على 5 طرق عملية للتسويق بالمحتوى للمشاريع الناشئة دون ميزانية إعلانية، مع التركيز على بناء الثقة، وجذب العملاء، وتهيئة المحتوى لمحركات البحث.",
      en: "Discover 5 practical content marketing strategies for startups without an advertising budget, focusing on building trust, attracting clients, and SEO.",
    },
    seo: {
      title: {
        ar: "5 طرق للتسويق بالمحتوى للمشاريع الناشئة دون إعلانات",
        en: "5 Content Marketing Strategies for Startups Without Ads",
      },
      description: {
        ar: "تعرّف على 5 طرق عملية للتسويق بالمحتوى للمشاريع الناشئة دون ميزانية إعلانية، مع التركيز على بناء الثقة، وجذب العملاء، وتهيئة المحتوى لمحركات البحث.",
        en: "Discover 5 practical content marketing strategies for startups without an advertising budget, focusing on building trust, attracting clients, and SEO.",
      },
    },
    content: {
      ar: [
        {
          type: "paragraph",
          text: "يواجه كثير من أصحاب المشاريع الناشئة مشكلة تبدو بسيطة في ظاهرها: كيف أجذب العملاء باستمرار إذا لم تكن لدي ميزانية كبيرة للإعلانات؟",
        },
        {
          type: "paragraph",
          text: "لا شك أن الإعلانات المدفوعة هي الطريق الأسرع للوصول إلى الجمهور، لكنها تجعل هذا الوصول مرتبطًا بالإنفاق المباشر؛ فعندما تتوقف الحملة يتوقف الظهور فورًا أمام العميل. وهنا تحديدًا يبرز دور التسويق بالمحتوى كنظام استثماري يربط بين أسئلة الجمهور وإنتاج المحتوى وتوزيعه وتحسين ظهوره في محركات البحث وقياس أثره. قد يحتاج التسويق بالمحتوى إلى بعض الوقت، لكنه استثمار في أصول معرفية تتراكم قيمتها بمرور الأيام. إليك خمس طرق عملية تساعدك على بناء هذا النظام لمشروعك الناشئ دون إعلانات مدفوعة.",
        },
        {
          type: "heading",
          level: 2,
          text: "1. ابنِ خطة محتوى من أسئلة عميلك الحقيقي",
        },
        {
          type: "paragraph",
          text: "بدل أن تسأل نفسك كل أسبوع «ماذا أنشر؟»، ابحث عن «ما الذي يريد عملائي معرفته فعليًا؟»",
        },
        {
          type: "paragraph",
          text: "تبدأ خطة المحتوى الناجحة بالفهم العميق للجمهور: ما أهدافه؟ ما المشكلات والتحديات التي تواجهه يوميًا؟ ما الأسئلة التي يكررها قبل الشراء؟ وما المخاوف أو الاعتراضات التي تمنعه من اتخاذ القرار؟ وأين يبحث عن إجاباته؟",
        },
        {
          type: "paragraph",
          text: "يمكنك الوصول إلى هذه الإجابات بسهولة عبر التحدث المباشر مع العملاء، ومراجعة الأسئلة والاستفسارات المتكررة في المبيعات وخدمة العملاء، ومراقبة النقاشات في المجتمعات الرقمية والمنتديات المتخصصة، إلى جانب دراسة وتحليل المحتوى الذي يطرحه المنافسون.",
        },
        {
          type: "heading",
          level: 2,
          text: "2. لا تكتب لأجل البيع المباشر فقط",
        },
        {
          type: "paragraph",
          text: "اربط محتواك دائمًا بالهدف والمرحلة التي يخدمها في رحلة العميل؛ فليست كل قطعة محتوى مطالبة بإتمام عملية بيع فورية.",
        },
        {
          type: "paragraph",
          text: "في بداية رحلة العميل، ساعده على تشخيص المشكلة واستيعاب أبعادها والتعرّف على الحلول المتاحة. في المرحلة التالية، قارن بين الخيارات وقدّم له نصائح موضوعية توجّهه نحو الأنسب لاحتياجه. وعندما يقترب من مرحلة اتخاذ القرار، وفّر له محتوى عمليًا ومقنعًا عن منتجك أو خدمتك: كيف تعمل بالتفصيل؟ ما الأسئلة الشائعة عنها؟ وما تجارب العملاء السابقين؟ كل ذلك يزيل التردد ويبني ثقة مستدامة.",
        },
        {
          type: "heading",
          level: 2,
          text: "3. ركّز جهودك ولا تحاول التواجد في كل مكان دفعة واحدة",
        },
        {
          type: "paragraph",
          text: "قد يبدو التواجد على كافة منصات التواصل خطوة مغرية للوصول إلى أكبر شريحة ممكنة، لكن محاولة إنتاج محتوى مخصص لكل منصة ستشتت جهود المشروع الناشئ وتستنزف موارده المحدودة وتؤدي غالبًا إلى محتوى متواضع وغير منتظم.",
        },
        {
          type: "paragraph",
          text: "ابدأ دائمًا من أين يتواجد جمهورك الأساسي وما قدرتك على الاستمرار بجودة عالية. اختر قناة مركزية واحدة كالموقع الإلكتروني أو المدونة لتكون مستودعًا لأصولك الدائمة، ثم استخدم منصة أو اثنتين لتوزيع المحتوى وإعادة صياغته في مقتطفات وبوستات قصيرة تلائم طبيعة المنصة وتجذب القراء إلى مدونتك.",
        },
        {
          type: "heading",
          level: 2,
          text: "4. وسّع وصول محتواك عبر محركات البحث والمجتمعات الرقمية",
        },
        {
          type: "paragraph",
          text: "قد تنشر محتوى قيّمًا للغاية على حساباتك، لكنه لا يصل بالضرورة إلى الأشخاص الذين يحتاجون إليه في اللحظة المناسبة؛ فالكثير من العملاء يبدأون رحلتهم بالبحث النشط عبر جوجل أو بطرح أسئلتهم في المجتمعات المهنية.",
        },
        {
          type: "paragraph",
          text: "راقب بدقة الكلمات المفتاحية والأسئلة الشائعة في مجالك، وهيّئ مقالاتك لمحركات البحث (SEO) عبر عناوين واضحة وهيكلة متناسقة وروابط داخلية ومحتوى متعمق. ولا تغفل اليوم أدوات البحث وتطبيقات الذكاء الاصطناعي التوليدي، إذ باتت تستقي إجاباتها وترشح المصادر الموثوقة التي تقدم إجابات شمولية ومباشرة.",
        },
        {
          type: "heading",
          level: 2,
          text: "5. قِس نتائج المحتوى وطوّر ما ينجح فعليًا",
        },
        {
          type: "paragraph",
          text: "لن تتمكن من تطوير استراتيجيتك إذا لم تراجع أداء ما تنشره بانتظام. تابع معدلات القراءة والتفاعل والزيارات العضوية والإجراءات الفعلية التي يتخذها الزوار بعد قراءة المقال.",
        },
        {
          type: "paragraph",
          text: "قد يحظى منشور بمئات التفاعلات السريعة دون أن يحقق أي قيمة تجارية، بينما ينجح مقال هادئ في جذب استفسارات نوعية من عملاء جادين ومستعدين للتعاقد. تذكّر دائمًا: لا قيمة للأرقام المجردة ما لم تخدم أهداف مشروعك واستدامته.",
        },
        {
          type: "callout",
          title: "هل يغني التسويق بالمحتوى عن الإعلانات الممولة؟",
          text: "لا يعني التسويق بالمحتوى التخلي الكامل عن الإعلانات؛ فالإعلانات أداة ممتازة لاختبار الأفكار والوصول السريع إلى شرائح جديدة. غير أن ميزتها تنتهي بانتهاء الميزانية، بينما يعمل المحتوى كأصل استثماري رقمي مستدام يواصل جذب العملاء وبناء السمعة المهنية لشهور وسنوات قادمة.",
        },
        {
          type: "heading",
          level: 2,
          text: "الخاتمة: ابدأ بنظام بسيط وراكم نتائجه",
        },
        {
          type: "paragraph",
          text: "لا تحتاج المشاريع الناشئة إلى كميات هائلة من المنشورات العشوائية، بل إلى نظام محكم وواضح يعرف ماذا يقدم، ولمن يقدمه، ولأي هدف.",
        },
        {
          type: "paragraph",
          text: "ابدأ اليوم خطوتك الأولى: اجمع خمسة أسئلة حقيقية تتكرر من عملائك المحتملين، واختر سؤالًا واحدًا وحوّله إلى مقال غني أو دليل مفيد. هذه الخطوة البسيطة هي نقطة الانطلاق لبناء حضور رقمي موثوق يجلب لك العملاء باستمرار دون الاعتماد الدائم على الإعلانات المدفوعة.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Many startup founders face a fundamental challenge: How do we consistently attract clients without an extensive advertising budget?",
        },
        {
          type: "paragraph",
          text: "Paid advertising is the fastest vehicle for immediate reach, but that reach remains strictly tied to ongoing spend—when the budget runs out, visibility abruptly ceases. Content marketing, by contrast, operates as a compounding asset system that connects customer inquiries, production, search visibility, and measurable conversion. Here are five practical methods to build this organic engine for your startup.",
        },
        {
          type: "heading",
          level: 2,
          text: "1. Build Your Content Plan Around Genuine Customer Questions",
        },
        {
          type: "paragraph",
          text: "Rather than asking 'What should we post this week?', ask: 'What do our ideal customers urgently need to understand?'",
        },
        {
          type: "paragraph",
          text: "A resilient strategy starts by understanding customer objectives, recurring operational hurdles, pre-purchase objections, and search behaviors. Mine these insights directly from sales discussions, support tickets, and specialized industry communities.",
        },
        {
          type: "heading",
          level: 2,
          text: "2. Do Not Write Solely for an Immediate Sale",
        },
        {
          type: "paragraph",
          text: "Map each piece of content to the buyer's journey. Early on, help prospects clarify their challenge and compare strategic avenues. As they approach decision-making, offer deep-dive walkthroughs, transparent FAQs, and evidence of capability.",
        },
        {
          type: "heading",
          level: 2,
          text: "3. Focus Your Energy Rather Than Spreading Across Every Channel",
        },
        {
          type: "paragraph",
          text: "Trying to master every social network simultaneously drains lean teams and dilutes quality. Anchor your core knowledge in a central website or blog, and repurpose high-value excerpts across one or two high-yield distribution networks.",
        },
        {
          type: "heading",
          level: 2,
          text: "4. Expand Reach via Organic Search and Engaged Communities",
        },
        {
          type: "paragraph",
          text: "Buyers actively seek answers via search engines and generative AI tools. Optimizing well-structured, authoritative articles ensures your startup surfaces precisely when intent is highest.",
        },
        {
          type: "heading",
          level: 2,
          text: "5. Measure Tangible Outcomes and Double Down on What Converts",
        },
        {
          type: "paragraph",
          text: "Differentiate between vanity metrics and commercial intent. A piece with modest impressions that consistently attracts high-intent inquiries is far more valuable than viral content that never moves the business forward.",
        },
        {
          type: "callout",
          title: "Does Content Marketing Replace Paid Ads?",
          text: "Content marketing does not require abandoning paid ads altogether. Ads provide immediate feedback and rapid testing, while content builds lasting equity that continues generating qualified interest long after a campaign ends.",
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion: Start Simple and Compound Your Results",
        },
        {
          type: "paragraph",
          text: "Gather five recurring questions from your prospective customers, select one, and write an insightful, direct guide answering it thoroughly. That single step begins your sustainable inbound pipeline.",
        },
      ],
    },
  },
  {
    id: "sleeping-with-lights-on",
    slug: "sleeping-with-lights-on",
    isDemo: false,
    cardImage: "/images/blog-sleep-lighting.jpg",
    cardImageAlt: {
      ar: "غرفة نوم هادئة ليلًا بإضاءة خافتة لطيفة على طاولة جانبية ومساحات واسعة",
      en: "A quiet bedroom at night with soft dim ambient light",
    },
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
      ar: "4 دقائق للقراءة",
      en: "4 min read",
    },
    tags: {
      ar: ["الصحة والنوم", "النوم", "جودة النوم", "الضوء الأزرق", "عادات صحية"],
      en: ["الصحة والنوم", "النوم", "جودة النوم", "الضوء الأزرق", "عادات صحية"],
    },
    title: {
      ar: "هل النوم مع الإضاءة مضر؟ تأثير الضوء ليلًا ونصائح لنوم أفضل",
      en: "",
    },
    excerpt: {
      ar: "هل يؤثر النوم مع الضوء على جودة النوم؟ تعرّف على دور الإضاءة والشاشات ليلًا، وما تقوله الدراسات، ونصائح بسيطة لتهيئة غرفة نوم أهدأ.",
      en: "",
    },
    seo: {
      title: {
        ar: "هل النوم مع الإضاءة مضر؟ تأثير الضوء ليلًا ونصائح لنوم أفضل",
        en: "هل النوم مع الإضاءة مضر؟ تأثير الضوء ليلًا ونصائح لنوم أفضل",
      },
      description: {
        ar: "هل يؤثر النوم مع الضوء على جودة النوم؟ تعرّف على دور الإضاءة والشاشات ليلًا، وما تقوله الدراسات، ونصائح بسيطة لتهيئة غرفة نوم أهدأ.",
        en: "هل يؤثر النوم مع الضوء على جودة النوم؟ تعرّف على دور الإضاءة والشاشات ليلًا، وما تقوله الدراسات، ونصائح بسيطة لتهيئة غرفة نوم أهدأ.",
      },
    },
    content: {
      ar: [
        {
          type: "paragraph",
          text: "يترك بعض الناس ضوءًا خافتًا أو شاشة تلفاز مضاءة أثناء النوم، بينما يفضّل آخرون ترك الغرفة مظلمة بالكامل. فهل يؤثر الضوء على جودة النوم؟",
        },
        {
          type: "paragraph",
          text: "تشير الأبحاث إلى أن الضوء يرتبط بتنظيم الساعة البيولوجية، وأن التعرض له خلال الليل قد يتداخل مع النوم لدى بعض الأشخاص. لكن قوة التأثير تختلف بحسب شدة الضوء وتوقيته ومدته، ولا تعني نتائج الدراسات أن كل ضوء ليلي يقلل جودة النوم.",
        },
        {
          type: "paragraph",
          text: "في هذا المقال، نوضح ما نعرفه عن الضوء والنوم، ونراجع ما تقوله الدراسات عن الإضاءة أثناء النوم، ثم نستعرض خطوات عملية لتقليل الضوء في غرفة النوم.",
        },
        {
          type: "heading",
          level: 2,
          text: "كيف يؤثر الضوء في دورة النوم؟",
        },
        {
          type: "paragraph",
          text: "تساعد الساعة البيولوجية الجسم على تنظيم أوقات اليقظة والنوم خلال اليوم. ويُعد الضوء من الإشارات البيئية التي تساعد على ضبط هذه الساعة؛ فالتعرض للضوء في المساء أو خلال فترة النوم قد يؤثر في توقيت النوم واليقظة، كما تختلف استجابة الجسم بحسب وقت التعرض وشدته ومدته.",
        },
        {
          type: "paragraph",
          text: "ويُشار أحيانًا إلى الضوء الأزرق المنبعث من بعض الشاشات ومصادر الإضاءة، لكنه ليس المصدر الوحيد للضوء الذي قد يؤثر في النوم. لذلك من الأدق التفكير في تقليل الإضاءة الساطعة عمومًا في الفترة السابقة للنوم، بدل افتراض أن فلتر الضوء الأزرق وحده يحل المشكلة.",
        },
        {
          type: "heading",
          level: 2,
          text: "هل النوم مع الإضاءة يؤثر في جودة النوم؟",
        },
        {
          type: "paragraph",
          text: "في دراسة تابعت بالغين في حياتهم اليومية، رُبطت زيادةُ التعرض للضوء خلال النوم ببعض المؤشرات، مثل زيادة تقطّع النوم وانخفاض نسبة الوقت الذي قضاه المشاركون نائمين خلال فترة وجودهم في السرير. ولم تجد الدراسة ارتباطًا واضحًا بين الضوء ومدة النوم نفسها.",
        },
        {
          type: "paragraph",
          text: "قد يكون الضوء أكثر إزعاجًا لبعض الأشخاص، خصوصًا إذا كان ساطعًا أو موجّهًا إلى العين، أو إذا ترافق مع أصوات وإشعارات من الأجهزة. إذا كنت تستيقظ كثيرًا أو تجد صعوبة في العودة إلى النوم، جرّب تقليل مصادر الضوء لعدة ليالٍ ولاحظ ما إذا طرأ تحسّن.",
        },
        {
          type: "heading",
          level: 2,
          text: "ماذا عن الضوء وزيادة الوزن؟",
        },
        {
          type: "paragraph",
          text: "في دراسة رصدية شملت نساءً في الولايات المتحدة وبورتوريكو، وُجد ارتباط بين النوم مع وجود ضوء أو تلفاز في الغرفة وزيادة احتمال اكتساب 5 كيلوغرامات أو أكثر خلال فترة المتابعة. وبلغت الزيادة النسبية في الاحتمال 17% مقارنة بمن لم يتعرضن للضوء أثناء النوم.",
        },
        {
          type: "paragraph",
          text: "هذه النتيجة لا تثبت أن الضوء هو سبب زيادة الوزن، ولا يصح تعميمها على كل الناس؛ فالدراسة تناولت فئة محددة، كما أن هناك عوامل أخرى ترتبط بالوزن. لذلك تُذكر النتيجة بوصفها ارتباطًا بحثيًا، لا وعدًا بأن إطفاء الضوء يمنع زيادة الوزن.",
        },
        {
          type: "heading",
          level: 2,
          text: "خطوات تساعد على تهيئة الغرفة للنوم",
        },
        {
          type: "list",
          items: [
            "أطفئ الإضاءة والتلفاز عند الاستعداد للنوم.",
            "استخدم ستائر تحجب ضوء الشارع أو ضوء الصباح، أو جرّب قناع العين إذا كان مناسبًا لك.",
            "ضع الهاتف بحيث لا يصل ضوؤه إليك، واستخدم وضع عدم الإزعاج لتقليل التنبيهات.",
            "خفّف الإضاءة قبل موعد النوم، وقلّل استخدام الهاتف أو الجهاز اللوحي قرب وقت النوم، خاصة إذا لاحظت أن ذلك يصعّب عليك الاسترخاء.",
            "حافظ قدر الإمكان على وقت ثابت للنوم والاستيقاظ، حتى في أيام الإجازة.",
            "اجعل الغرفة مريحة وهادئة، واختر درجة حرارة مناسبة لك.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "إذا كنت لا تستطيع النوم في الظلام",
        },
        {
          type: "paragraph",
          text: "ليس ضروريًا أن تغيّر كل شيء دفعة واحدة. إذا كنت تحتاج إلى ضوء لأسباب تتعلق بالراحة أو السلامة، فجرّب استخدام أقل قدر ممكن من الإضاءة، ووضعها بعيدًا عن مستوى العين، مع تجنب ترك التلفاز أو شاشة الهاتف مضاءة طوال الليل. وإذا كان الضوء ضروريًا بسبب طفل صغير أو ظرف صحي أو حاجة للحركة ليلًا، فالأولوية لاستخدام آمن ومناسب لاحتياجك.",
        },
        {
          type: "heading",
          level: 2,
          text: "متى تستشير مختصًا؟",
        },
        {
          type: "paragraph",
          text: "هذه النصائح عامة ولا تشخّص اضطرابات النوم. تحدث إلى طبيب أو مختص إذا استمرت صعوبة النوم وأثرت في نشاطك اليومي، أو إذا كان لديك نعاس شديد خلال النهار، أو شخير مرتفع مصحوب بتوقف أو صعوبة في التنفس أثناء النوم. وقد تتطلب هذه الأعراض تقييمًا يتجاوز تعديل إضاءة الغرفة.",
        },
      ],
      en: [],
    },
  },
  {
    id: "introduce-yourself-job-interview",
    slug: "introduce-yourself-job-interview",
    isDemo: false,
    coverImage: "/images/career-identity.jpg",
    coverImageAlt: {
      ar: "كيف تعرّف عن نفسك في مقابلة العمل؟ من معرفة الذات إلى بناء قصة مهنية",
      en: "",
    },
    cardImage: "/images/blog-job-interview.jpg",
    cardImageAlt: {
      ar: "شخص يستعد بهدوء في قاعة اجتماعات واسعة ومضاءة بنور طبيعي لمقابلة عمل",
      en: "A professional person quietly preparing in a naturally lit meeting room",
    },
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
      ar: "6 دقائق للقراءة",
      en: "6 min read",
    },
    tags: {
      ar: [
        "المسار المهني ومقابلات العمل",
        "مقابلة العمل",
        "التعريف عن النفس",
        "معرفة الذات",
        "المهارات المهنية",
        "المسار المهني",
      ],
      en: [],
    },
    title: {
      ar: "كيف تعرّف عن نفسك في مقابلة العمل؟ من معرفة الذات إلى بناء قصة مهنية",
      en: "",
    },
    excerpt: {
      ar: "تعلّم كيف تعرّف عن نفسك في مقابلة العمل بطريقة صادقة ومقنعة، عبر فهم مهاراتك وقيمك واستخدام قالب عملي لبناء قصة مهنية واضحة.",
      en: "",
    },
    seo: {
      title: {
        ar: "كيف تعرّف عن نفسك في مقابلة العمل؟",
        en: "",
      },
      description: {
        ar: "تعلّم كيف تعرّف عن نفسك في مقابلة العمل بطريقة صادقة ومقنعة، عبر فهم مهاراتك وقيمك واستخدام قالب عملي لبناء قصة مهنية واضحة.",
        en: "",
      },
    },
    content: {
      ar: [
        {
          type: "paragraph",
          text: 'أغلب من يستعد لمقابلة عمل يحفظ إجابة سؤال "عرّفنا عن نفسك" كنشيد مدرسي: جمل جاهزة، ترتيب متوقع، ونبرة يمكن التنبؤ بها من أول كلمة. المفارقة أن هذا السرد هو ما يفضح صاحبه؛ لأن من يعرف نفسه حقاً يحتاج فقط إلى أن يستحضر ما يعرفه عن قيمه ومهاراته وقدراته، ثم يصوغه بما يناسب اللحظة. الخلاصة أن المشكلة تكمن في غياب معرفة حقيقية بالذات يُبنى منها تعريف صادق ومقنع.',
        },
        {
          type: "heading",
          level: 2,
          text: "قبل أن تُعرّف نفسك، هل تعرفها حقًا؟",
        },
        {
          type: "paragraph",
          text: 'حين الحديث عن "معرفة الذات"، يذوب المصطلح في وعظ عام: اعرف نفسك، ثق بنفسك، حدد أهدافك. لكن هذه العبارات تخفي في الحقيقة ثلاثة مفاهيم منفصلة تمامًا، والخلط بينها هو ما يجعل كثيرين يظنون أنهم "لا يعرفون أنفسهم" بينما المشكلة الحقيقية أدق من ذلك.',
        },
        {
          type: "paragraph",
          text: "معرفة الذات هي الفهم الدقيق لما تقوم عليه شخصيتك فعليًا: قيمك، ودوافعك، وقدراتك الحقيقية، وحدودك أيضًا. هي سؤال وصفي: من أنت، وماذا تجيد، وماذا تريد؟",
        },
        {
          type: "paragraph",
          text: "أما تقدير الذات فهو حكم عام على قيمتك كإنسان، بمعزل عن أي مهمة محددة؛ إنه الشعور الداخلي بأنك تستحق الاحترام والمحبة بصرف النظر عن إنجازاتك.",
        },
        {
          type: "paragraph",
          text: "وأما الثقة بالنفس فهي أضيق من الاثنين معًا؛ إنها إيمانك بقدرتك على أداء مهمة معينة أو مواجهة موقف بعينه، وقد تكون واثقًا جدًا في مجال وغير واثق إطلاقًا في مجال آخر، دون أن يعني ذلك خللًا في تقديرك لذاتك.",
        },
        {
          type: "paragraph",
          text: 'هذا التفريق ليس ترفًا نظريًا؛ فمن يخلط بين تقدير الذات والثقة بالنفس قد يظن أن الحل لضعف ثقته في مهارة معينة هو "التفكير الإيجابي" العام، بينما الحل الفعلي هو ممارسة تلك المهارة تحديدًا حتى تتكوّن كفاءة حقيقية تدعم الثقة. ومن يخلط بين معرفة الذات وتقدير الذات، قد يعتقد أن الاعتراف بنقطة ضعف حقيقية فيه إهانة لذاته، بينما هو في الحقيقة شرط أساسي لأي تعريف مهني صادق.',
        },
        {
          type: "heading",
          level: 2,
          text: "لماذا تقلل من قدراتك؟",
        },
        {
          type: "paragraph",
          text: "هناك أسباب متكررة تجعل الشخص يستهين بمهارة يتقنها فعلًا، دون أن يعني ذلك خللًا نفسيًا عميقًا فيه. أحد هذه الأسباب هو الاعتياد؛ فما تفعله بسهولة يبدو لك بديهيًا، فتفترض أن الجميع يستطيعه، بينما هو في الحقيقة نتيجة تمرّن طويل لم تعد تشعر بثقله. سبب آخر هو المقارنة المستمرة بأشخاص أكثر خبرة منك في المجال نفسه، وهي مقارنة تُخفي التقدم الذي أحرزته أنت لأنها تقيسك بمن سبقك بسنوات، لا بنقطة انطلاقك. وهناك أيضًا ميل شائع إلى التركيز على الأخطاء القليلة وتجاهل النجاحات المتكررة، فيبقى الخطأ الواحد عالقًا في الذاكرة بينما تذوب عشرات المواقف التي أُنجزت بنجاح. وأخيرًا، قد ينسب البعض نجاحه إلى الحظ أو الظروف المناسبة، فيرفض الاعتراف بأن مهارته الشخصية كانت جزءًا أساسيًا من النتيجة.",
        },
        {
          type: "paragraph",
          text: 'هذه الأسباب ليست تشخيصًا نفسيًا لأحد، بل أنماط شائعة تستحق أن تراجع نفسك فيها قبل أن تحكم بأنك "لا تملك موهبة" في شيء تفعله جيدًا بالفعل.',
        },
        {
          type: "heading",
          level: 2,
          text: "قالب عملي للتعريف عن النفس",
        },
        {
          type: "paragraph",
          text: "قبل أن تحاول صياغة أي تعريف، أجب بصدق عن خمسة أسئلة: ما الذي أجيده فعلًا؟ وما الدليل الملموس على ذلك؟ ما الذي أستمتع به حين أعمل عليه؟ ما القيمة التي لا أريد أن أتنازل عنها في أي عمل أقبل عليه؟ وما المهارة التي أعرف أنني بحاجة إلى تطويرها؟ حاول أن تحوّل إجاباتك إلى نبذة مهنية من ستين إلى تسعين كلمة؛ ستجد أن أغلب عناصر التعريف الجيد كانت موجودة لديك من البداية، وكل ما احتجته هو تنظيمها.",
        },
        {
          type: "callout",
          title: "صيغة القالب المقترح",
          text: "«أنا [المجال أو الدور]، لدي خبرة أو اهتمام في [مجال محدد]. طوّرت [مهارتين أو ثلاثًا] من خلال [تجربة ملموسة]. ومن أبرز ما أنجزته [إنجاز أو نتيجة واضحة]. وأسعى الآن إلى [هدف مهني مرتبط بالفرصة التي أمامي].»",
        },
        {
          type: "paragraph",
          text: "التعريف نفسه يتغيّر بتغيّر من تكون ومرحلتك المهنية:",
        },
        {
          type: "list",
          items: [
            "الطالب الذي لا يملك خبرة وظيفية: يمكنه الاستناد إلى مشاريع دراسية أو عمل تطوعي أو أنشطة جامعية، وصياغتها بالطريقة نفسها: موقف، إجراء، نتيجة.",
            "الخريج الحديث: يركّز على تخصصه وأي تدريب عملي قام به، مع الإشارة إلى ما يبحث عنه في أول فرصة عمل.",
            "من يريد تغيير مساره المهني: يحتاج إلى إبراز المهارات القابلة للنقل بين المجالين، والربط الصريح بين خبرته السابقة وسبب توجهه الجديد.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "من السؤال الفلسفي إلى القرار العملي",
        },
        {
          type: "paragraph",
          text: 'سؤال "من أنا؟" قد يبدو تجريديًا، لكنه في جوهره سؤال عملي إن أُحسن استخدامه. فحين تعرف قيمك بدقة، تستطيع أن ترفض عرض عمل يتعارض معها دون تردد طويل. وحين تعرف دوافعك الحقيقية، تستطيع أن تختار تخصصًا أو مسارًا يتسق معها بدل أن تتبع توقعات من حولك. وحين تعرف حدودك بصدق، تستطيع أن تضع هدفًا يمكنك الالتزام به فعلًا، بدل هدف طموح على الورق فقط. معرفة الذات إذن ليست غاية في ذاتها، بل أداة تقود إلى قرارات أوضح، وتعريف مهني أكثر صدقًا وثباتًا أمام أي شخص تقابله.',
        },
      ],
      en: [],
    },
  },
  {
    id: "heartburn-risks-complications-treatment",
    slug: "heartburn-risks-complications-treatment",
    isDemo: false,
    cardImage: "/images/blog-heartburn.jpg",
    cardImageAlt: {
      ar: "رسم توضيحي طبي هادئ وبسيط للمريء والمعدة دون نصوص أو تفاصيل معقدة",
      en: "A calm, simplified medical illustration of the esophagus and stomach",
    },
    isoDate: "2026-10-13",
    date: {
      ar: "13 أكتوبر 2026",
      en: "October 13, 2026",
    },
    author: {
      ar: "محمد الخيوتي",
      en: "Mohammad Alkhayouti",
    },
    readTime: {
      ar: "4 دقائق للقراءة",
      en: "4 min read",
    },
    tags: {
      ar: [
        "الصحة والجهاز الهضمي",
        "حرقة المعدة",
        "الارتجاع المعدي المريئي",
        "صحة الجهاز الهضمي",
        "علاج حرقة المعدة",
      ],
      en: ["Digestive Health", "Heartburn", "GERD", "Digestive System", "Heartburn Treatment"],
    },
    title: {
      ar: "حرقة المعدة: المخاطر والمضاعفات والعلاج",
      en: "Heartburn: Risks, Complications, and Treatment",
    },
    excerpt: {
      ar: "تعرّف إلى أسباب حرقة المعدة ومضاعفات الارتجاع المعدي المريئي، ومتى تستدعي الأعراض مراجعة الطبيب، وما الخيارات العامة للتعامل معها.",
      en: "Learn about the causes of heartburn, complications of GERD, when symptoms require seeing a doctor, and general management options.",
    },
    seo: {
      title: {
        ar: "حرقة المعدة: المخاطر والمضاعفات والعلاج",
        en: "Heartburn: Risks, Complications, and Treatment",
      },
      description: {
        ar: "تعرّف إلى أسباب حرقة المعدة ومضاعفات الارتجاع المعدي المريئي، ومتى تستدعي الأعراض مراجعة الطبيب، وما الخيارات العامة للتعامل معها.",
        en: "Learn about the causes of heartburn, complications of GERD, when symptoms require seeing a doctor, and general management options.",
      },
    },
    content: {
      ar: [
        {
          type: "paragraph",
          text: "تُعد حرقة المعدة شعورًا حارقًا قد يظهر في الجزء العلوي من البطن أو خلف عظم الصدر. وقد يحدث هذا الشعور عندما يرتد حمض المعدة إلى المريء، وهو الأنبوب الذي يصل الحلق بالمعدة. يحدث الارتجاع عندما لا تعمل العضلة العاصرة السفلية للمريء على نحو مناسب، فتعود محتويات المعدة إلى المريء.",
        },
        {
          type: "heading",
          level: 2,
          text: "المخاطر",
        },
        {
          type: "paragraph",
          text: "عند حدوث حرقة المعدة بشكل متقطع أو لفترة قصيرة، نادرًا ما تكون خطيرة، لكنها قد تسبب شعورًا مؤقتًا بعدم الراحة وتختفي من تلقاء نفسها عادة. أما إذا كان الشخص يعاني من الحرقة بانتظام، فقد يكون السبب مرض الارتجاع المعدي المريئي، وهو اضطراب يحدث عندما لا تنغلق العضلة العاصرة أسفل المريء بشكل مناسب، ما يسمح لمحتويات المعدة بالارتداد إلى المريء.",
        },
        {
          type: "paragraph",
          text: "إذا كان الشخص يعاني من الحرقة أكثر من مرتين أسبوعيًا، وكان ذلك يؤثر في حياته اليومية، فقد يكون ذلك علامة تستدعي مناقشة الأعراض مع مختص صحي.",
        },
        {
          type: "heading",
          level: 2,
          text: "هل الحرقة خطيرة أثناء الحمل؟",
        },
        {
          type: "paragraph",
          text: "الحرقة شائعة خلال الحمل، ومع ذلك نادرًا ما تسبب مضاعفات خطيرة وتختفي عادة بعد الولادة.",
        },
        {
          type: "paragraph",
          text: "أحد أسباب الحرقة أثناء الحمل هو ارتفاع مستوى هرمون البروجسترون، الذي قد يؤدي إلى ارتخاء الصمام الوظيفي بين المريء والمعدة، ما يسمح للحمض بالصعود إلى المريء.",
        },
        {
          type: "paragraph",
          text: "كما يزداد الضغط على المعدة مع نمو الجنين، ما قد يسبب حدوث الحرقة أو الارتجاع الحمضي، خصوصًا في مراحل الحمل المتأخرة.",
        },
        {
          type: "heading",
          level: 2,
          text: "المضاعفات",
        },
        {
          type: "paragraph",
          text: "قد يرتبط الارتجاع المزمن بمضاعفات، ومنها:",
        },
        {
          type: "list",
          items: [
            "التهاب المريء، وقد يؤدي في بعض الحالات إلى النزيف أو القرحة.",
            "تآكل الأسنان إذا وصل حمض المعدة إلى الفم بشكل متكرر.",
            "تضيق المريء، ما قد يؤدي إلى صعوبة في البلع.",
            "مريء باريت، وهي حالة تتغير فيها بطانة المريء.",
            "قد يصاب عدد قليل من الأشخاص المصابين بمريء باريت بسرطان المريء.",
          ],
        },
        {
          type: "paragraph",
          text: "تشير بعض الدراسات إلى وجود علاقة بين مرض الارتجاع والربو أو تفاقم أعراضه، لكن العلاقة بينهما ما زالت قيد الدراسة ولا تثبت وحدها أن أحدهما يسبب الآخر.",
        },
        {
          type: "paragraph",
          text: "يمكن أن يساعد تقييم الحالة وعلاج الارتجاع عند الحاجة في تخفيف الأعراض والحد من بعض المخاطر والمضاعفات.",
        },
        {
          type: "heading",
          level: 2,
          text: "هل تؤثر الحرقة على القلب؟",
        },
        {
          type: "callout",
          title: "تنبيه هام بشأن ألم الصدر وصحة القلب",
          text: "قد تسبب حرقة المعدة إحساسًا حارقًا في الصدر مصدره المريء أو المعدة، لكن لا ينبغي افتراض أن كل ألم أو حرقان في الصدر سببه حرقة المعدة. إذا كان ألم الصدر شديدًا أو جديدًا، أو ترافق مع ضيق في التنفس أو تعرّق أو ألم يمتد إلى الذراع أو الفك، فاطلب الرعاية الطبية العاجلة فورًا.",
        },
        {
          type: "heading",
          level: 2,
          text: "العلاج",
        },
        {
          type: "paragraph",
          text: "قد يشمل التعامل مع حرقة المعدة تغييرات في نمط الحياة أو أدوية يحددها الطبيب بحسب الحالة. وفي الحالات الشديدة قد يناقش الطبيب خيارات أخرى.",
        },
        {
          type: "paragraph",
          text: "تشمل تغييرات نمط الحياة التي قد تساعد بعض الأشخاص:",
        },
        {
          type: "list",
          items: [
            "تناول وجبات صغيرة متعددة على مدار اليوم بدلًا من وجبات كبيرة.",
            "رفع الرأس قليلًا أثناء النوم إذا كان ذلك مناسبًا.",
            "الحفاظ على وزن صحي.",
            "تقليل التوتر.",
            "ملاحظة الأطعمة التي تزيد الأعراض وتقليلها بحسب الاستجابة.",
          ],
        },
        {
          type: "paragraph",
          text: "يمكن للحامل التي تعاني من الحرقة استشارة الطبيب بشأن التغييرات والعلاجات المناسبة لحالتها.",
        },
        {
          type: "paragraph",
          text: "قد تُستخدم أدوية مختلفة لعلاج الحرقة أو الارتجاع، مثل مضادات الحموضة أو حاصرات مستقبلات الهيستامين أو مثبطات مضخة البروتون. يجب اختيار الدواء المناسب واستعماله وفق إرشادات الطبيب أو الصيدلي، وخصوصًا أثناء الحمل أو عند وجود أمراض أخرى أو تناول أدوية أخرى.",
        },
        {
          type: "paragraph",
          text: "قد يخضع بعض الأشخاص الذين يعانون من الارتجاع المستمر إلى إجراء أو جراحة يحددها الطبيب بعد تقييم الحالة.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Heartburn is a burning sensation that can appear in the upper abdomen or behind the breastbone. It occurs when stomach acid flows back into the esophagus, the muscular tube connecting the throat to the stomach, often when the lower esophageal sphincter relaxes improperly.",
        },
        {
          type: "heading",
          level: 2,
          text: "Risks",
        },
        {
          type: "paragraph",
          text: "When heartburn occurs infrequently or for brief periods, it is rarely dangerous, typically causing temporary discomfort before resolving on its own. However, when experienced regularly, it may signal Gastroesophageal Reflux Disease (GERD).",
        },
        {
          type: "paragraph",
          text: "Experiencing heartburn more than twice a week in a way that impairs daily routine warrants consulting a healthcare professional.",
        },
        {
          type: "heading",
          level: 2,
          text: "Is Heartburn Dangerous During Pregnancy?",
        },
        {
          type: "paragraph",
          text: "Heartburn is common during pregnancy, rarely causes severe complications, and typically resolves following childbirth.",
        },
        {
          type: "paragraph",
          text: "Elevated progesterone levels can relax the lower esophageal sphincter, allowing acid to travel upward into the esophagus. Furthermore, increasing physical pressure from the developing fetus on the stomach contributes to acid reflux, particularly in the later stages of pregnancy.",
        },
        {
          type: "heading",
          level: 2,
          text: "Complications",
        },
        {
          type: "paragraph",
          text: "Chronic acid reflux can be associated with several complications, including:",
        },
        {
          type: "list",
          items: [
            "Esophagitis, which in certain instances can lead to bleeding or ulcers.",
            "Dental enamel erosion if acid repeatedly reaches the oral cavity.",
            "Esophageal strictures, resulting in difficulty swallowing.",
            "Barrett's esophagus, a condition where the esophageal lining undergoes cellular changes.",
            "A small subset of individuals with Barrett's esophagus may develop esophageal cancer.",
          ],
        },
        {
          type: "paragraph",
          text: "Research notes an observed association between GERD and asthma symptoms, although the relationship remains under study and does not establish sole causality.",
        },
        {
          type: "paragraph",
          text: "Appropriate clinical evaluation and targeted reflux management help alleviate symptoms and minimize potential risks.",
        },
        {
          type: "heading",
          level: 2,
          text: "Does Heartburn Affect the Heart?",
        },
        {
          type: "callout",
          title: "Important Safety Warning Regarding Chest Pain",
          text: "While heartburn originates from the esophagus or stomach, never assume that any chest discomfort is benign reflux. If chest pain is severe, newly onset, or accompanied by shortness of breath, cold sweats, or pain radiating to the arm or jaw, seek emergency medical care immediately.",
        },
        {
          type: "heading",
          level: 2,
          text: "Treatment & Management",
        },
        {
          type: "paragraph",
          text: "Management generally comprises lifestyle modifications and medications prescribed or recommended by a clinician based on the specific case.",
        },
        {
          type: "paragraph",
          text: "Helpful lifestyle adjustments may include:",
        },
        {
          type: "list",
          items: [
            "Eating smaller, more frequent meals rather than large heavy meals.",
            "Elevating the head of the bed during sleep when appropriate.",
            "Maintaining a healthy body weight.",
            "Managing and reducing stress.",
            "Identifying and reducing personal food triggers.",
          ],
        },
        {
          type: "paragraph",
          text: "Pregnant individuals should always consult their physician regarding safe dietary and therapeutic measures tailored to pregnancy.",
        },
        {
          type: "paragraph",
          text: "Various medications may be recommended, such as antacids, H2 receptor blockers, or proton pump inhibitors (PPIs). Proper medication must be chosen under professional clinical or pharmaceutical guidance.",
        },
        {
          type: "paragraph",
          text: "Individuals with persistent or refractory reflux may be evaluated by specialists for procedural or surgical interventions.",
        },
      ],
    },
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const decoded = decodeURIComponent(slug);
  return blogPosts.find(
    (post) =>
      post.slug === slug ||
      post.slug === decoded ||
      (post.slug === "introduce-yourself-job-interview" &&
        (decoded === "تعريف-عن-النفس-في-مقابلة-العمل" ||
          decoded === "/تعريف-عن-النفس-في-مقابلة-العمل" ||
          decoded.includes("تعريف-عن-النفس"))),
  );
}
