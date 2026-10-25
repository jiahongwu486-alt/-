/* ============================================================
   Historical Persona — core data (v2)
   meta + ui strings + dimensions + report modules
   Questions live in data-questions.js, characters in data-characters.js
   ============================================================ */

const APP_DATA = {
  version: "2.0.0",
  versionId: "middle-east",
  publishedAt: "2026-10-18",

  ui: {
    brand: { en: "Historical Persona", ar: "الشخصية التاريخية" },
    homeTitle: {
      en: "Which historical figure shares your temperament?",
      ar: "أيّ شخصية تاريخية تشبه طباعك؟"
    },
    homeSub: {
      en: "Scenario questions across six behavioral dimensions, matched against a verified library of historical figures — and a mirror for the patterns that keep recurring in your life.",
      ar: "أسئلة موقفية عبر ستة أبعاد سلوكية، تُطابق مع مكتبة موثّقة من الشخصيات التاريخية — ومرآة للأنماط التي تتكرر في حياتك."
    },
    begin: { en: "Begin the test", ar: "ابدأ الاختبار" },
    freeNote: {
      en: "Answer the full test free · Pay $1.99 to unlock your report",
      ar: "أجب عن الاختبار مجاناً · ادفع 1.99$ لفتح تقريرك"
    },
    features: [
      {
        en: "6 behavioral dimensions",
        ar: "6 أبعاد سلوكية",
        desc: {
          en: "Planning, decisiveness, collaboration, independence, exploration and risk.",
          ar: "التخطيط، الحسم، التعاون، الاستقلالية، الاستكشاف، وتقدير المخاطر."
        }
      },
      {
        en: "A source-backed figure library",
        ar: "مكتبة شخصيات موثّقة المصادر",
        desc: {
          en: "Scholars, poets, rulers, travelers and builders from the Arab cultural sphere.",
          ar: "علماء وشعراء وحكّام ورحّالة وبنّاؤون من الفضاء الثقافي العربي."
        }
      },
      {
        en: "A report that grows with you",
        ar: "تقرير ينمو معك",
        desc: {
          en: "Strengths, blind spots, decision style and a 30-day plan.",
          ar: "نقاط القوة، والنقاط العمياء، وأسلوب القرار، وخطة 30 يوماً."
        }
      }
    ],
    questionCounter: {
      en: (n, total) => `Question ${n} of ${total}`,
      ar: (n, total) => `السؤال ${n} من ${total}`
    },
    back: { en: "Back", ar: "رجوع" },
    optA: { en: "A", ar: "أ" },
    optB: { en: "B", ar: "ب" },
    optC: { en: "C", ar: "ج" },
    optD: { en: "D", ar: "د" },

    resultReady: { en: "Your historical match is ready", ar: "تطابقك التاريخي جاهز" },
    resultLockedHint: {
      en: "You've completed the test. Your mirror is one step away.",
      ar: "أكملت الاختبار. مرآتك على بُعد خطوة واحدة."
    },
    unlockPrice: { en: "Unlock my full report", ar: "افتح تقريري الكامل" },
    priceNote: { en: "One-time payment · Instant access", ar: "دفعة واحدة · وصول فوري" },
    demoLink: { en: "Preview with a demo code", ar: "معاينة برمز تجريبي" },
    enterCode: { en: "Enter unlock code", ar: "أدخل رمز الفتح" },
    unlock: { en: "Unlock", ar: "فتح" },
    codeWrong: {
      en: "That code isn't valid. Try the demo code.",
      ar: "الرمز غير صحيح. جرّب الرمز التجريبي."
    },
    completedPayment: { en: "I've completed payment", ar: "أكملت الدفع" },
    completedPaymentHint: {
      en: "Paid already? Click here to refresh your access.",
      ar: "هل دفعت بالفعل؟ اضغط هنا لتحديث وصولك."
    },

    yourPrototype: { en: "Your primary match", ar: "تطابقك الأساسي" },
    secondaryMatch: { en: "Your kindred figure", ar: "شخصيتك الشبيهة" },
    dimAnalysis: { en: "Your six dimensions", ar: "أبعادك الستة" },
    strengths: { en: "Core strengths", ar: "أبرز نقاط القوة" },
    blindspots: { en: "Recurring blind spots", ar: "النقاط العمياء المتكررة" },
    decisionStyle: { en: "Decision style", ar: "أسلوب اتخاذ القرار" },
    collaborationStyle: { en: "Collaboration & conflict", ar: "التعاون وفضّ الخلاف" },
    growth: { en: "Growth direction", ar: "اتجاه النمو" },
    historicalNote: { en: "Historical background & sources", ar: "الخلفية التاريخية والمصادر" },
    limitations: { en: "Limitations & disclaimer", ar: "الحدود وإخلاء المسؤولية" },
    share: { en: "Share my result", ar: "شارك نتيجتي" },
    retake: { en: "Retake the test", ar: "أعد الاختبار" },
    copied: { en: "Copied", ar: "تم النسخ" },
    footerNote: {
      en: "An interpretive guide for self-understanding, not a clinical or scientific assessment.",
      ar: "دليل تفسيري لمعرفة الذات، وليس تقييماً إكلينيكياً أو علمياً."
    },
    signIn: { en: "Sign in", ar: "تسجيل الدخول" },
    signUp: { en: "Sign up", ar: "إنشاء حساب" },
    logout: { en: "Log out", ar: "تسجيل الخروج" },
    emailLabel: { en: "Email", ar: "البريد الإلكتروني" },
    passwordLabel: { en: "Password", ar: "كلمة المرور" },
    authTitleLogin: { en: "Welcome back", ar: "مرحباً بعودتك" },
    authTitleSignup: { en: "Create your account", ar: "أنشئ حسابك" },
    authSubmitLogin: { en: "Sign in", ar: "تسجيل الدخول" },
    authSubmitSignup: { en: "Create account", ar: "إنشاء الحساب" },
    authEmailTaken: { en: "That email is already registered.", ar: "هذا البريد مسجّل بالفعل." },
    authInvalidCredentials: { en: "Incorrect email or password.", ar: "البريد أو كلمة المرور غير صحيحة." },
    authPasswordTooShort: { en: "Password must be at least 8 characters.", ar: "يجب ألا تقل كلمة المرور عن 8 أحرف." },
    authInvalidEmail: { en: "Please enter a valid email.", ar: "يرجى إدخال بريد إلكتروني صالح." },
    authNotYourReport: { en: "This report belongs to another account.", ar: "هذا التقرير يخص حساباً آخر." },
    authServerError: { en: "Something went wrong. Try again.", ar: "حدث خطأ. حاول مرة أخرى." },

    payEmailLabel: { en: "Email (for your report & receipt)", ar: "البريد الإلكتروني (لتقريرك وإيصال الدفع)" },
    emailRequired: { en: "Please enter a valid email so we can deliver your report.", ar: "يرجى إدخال بريد إلكتروني صالح لتسليم تقريرك." },
    paymentChecking: { en: "Confirming your payment…", ar: "جارٍ تأكيد دفعتك…" },
    paymentFailed: { en: "We couldn't confirm your payment yet. If you already paid, your report will appear shortly — or tap refresh.", ar: "تعذّر تأكيد الدفعة بعد. إن كنت دفعت، سيظهر تقريرك قريباً — أو اضغط تحديث." },
    paymentRefresh: { en: "Refresh", ar: "تحديث" }
  },

  dimensions: [
    {
      id: "planning",
      en: "Planning", ar: "التخطيط",
      desc: {
        en: "How you organize, prioritize and structure your efforts.",
        ar: "كيف تنظّم جهودك وترتّب أولوياتك وتهيكل عملك."
      },
      highLabel: { en: "Planner", ar: "مخطِّط" },
      lowLabel: { en: "Spontaneous", ar: "عفوي" }
    },
    {
      id: "decisiveness",
      en: "Decisiveness", ar: "الحسم",
      desc: {
        en: "How quickly and firmly you act and commit.",
        ar: "مدى سرعة وثبات فعلك والتزامك بالقرار."
      },
      highLabel: { en: "Decisive", ar: "حاسم" },
      lowLabel: { en: "Deliberate", ar: "متأنٍّ" }
    },
    {
      id: "collaboration",
      en: "Collaboration", ar: "التعاون",
      desc: {
        en: "How you communicate, involve others and handle conflict.",
        ar: "كيف تتواصل وتُشرك الآخرين وتتعامل مع الخلاف."
      },
      highLabel: { en: "Collaborative", ar: "تعاوني" },
      lowLabel: { en: "Independent", ar: "مستقل" }
    },
    {
      id: "independence",
      en: "Independence", ar: "الاستقلالية",
      desc: {
        en: "How much you rely on your own judgment and act alone.",
        ar: "مدى اعتمادك على حكمك الخاص وتصرّفك وحدك."
      },
      highLabel: { en: "Self-reliant", ar: "معتمد على الذات" },
      lowLabel: { en: "Consultative", ar: "استشاري" }
    },
    {
      id: "exploration",
      en: "Exploration", ar: "الاستكشاف",
      desc: {
        en: "How you learn, experiment and seek novelty.",
        ar: "كيف تتعلّم وتجرّب وتسعى إلى الجديد."
      },
      highLabel: { en: "Explorer", ar: "مستكشف" },
      lowLabel: { en: "Consolidator", ar: "مُرسِّخ" }
    },
    {
      id: "risk_assessment",
      en: "Risk assessment", ar: "تقدير المخاطر",
      desc: {
        en: "How you identify, weigh and respond to risk.",
        ar: "كيف تدرك المخاطر وتوازنها وتستجيب لها."
      },
      highLabel: { en: "Risk-aware", ar: "واعٍ بالمخاطر" },
      lowLabel: { en: "Risk-tolerant", ar: "متسامح مع المخاطر" }
    }
  ],

  report: {
    dimensionBuckets: {
      planning: {
        high: {
          en: "You think in structure: goals, milestones and sequences come naturally. Use it to turn other people's ideas into durable systems — but leave room for the unplanned.",
          ar: "أنت تفكّر ببنية: الأهداف والمراحل والتسلسل تأتي إليك طبيعياً. استخدم ذلك لتحويل أفكار الآخرين إلى أنظمة راسخة — لكن اترك مساحة لما هو غير مخطط."
        },
        mid: {
          en: "You balance preparation with improvisation. Structure when stakes are high, loosen the reins when the path is unclear.",
          ar: "أنت توازن بين الاستعداد والارتجال. نظّم عندما تكون المخاطر عالية، وخفّف القيود عندما يكون الطريق غير واضح."
        },
        low: {
          en: "You prefer to respond in the moment rather than script ahead. Your agility is a strength; pair it with one simple backup plan for what matters most.",
          ar: "أنت تفضّل الاستجابة في اللحظة بدل التخطيط المسبق. مرونتك قوة؛ اقرنها بخطة بديلة واحدة بسيطة لما يهمك أكثر."
        }
      },
      decisiveness: {
        high: {
          en: "You commit quickly and move. Speed creates momentum; just verify you've heard the quieter voices before the door closes.",
          ar: "أنت تلتزم وتتحرك بسرعة. السرعة تصنع زخماً؛ فقط تأكد أنك سمعت الأصوات الأهدأ قبل أن يُغلق الباب."
        },
        mid: {
          en: "You decide when it counts and pause when it doesn't. That is a rare calibration — keep noticing which situations need which.",
          ar: "أنت تحسم عندما يلزم الأمر وتتوقف عندما لا يلزم. هذه معايرة نادرة — واصل ملاحظة أي المواقف يحتاج أياً منها."
        },
        low: {
          en: "You weigh options carefully before acting. Deliberation is a form of respect; protect it, but name a deadline so it doesn't become delay.",
          ar: "أنت توازن الخيارات بعناية قبل التصرف. التروّي نوع من الاحترام؛ حافظ عليه، لكن حدّد موعداً نهائياً كي لا يتحول إلى تأجيل."
        }
      },
      collaboration: {
        high: {
          en: "You lift teams by including people and softening conflict. Your glue matters — remember that not every difference needs to be resolved.",
          ar: "أنت ترفع الفرق بإشراك الناس وتهدئة الخلاف. دورك اللاصق مهم — تذكّر أن ليس كل خلاف يحتاج إلى حلّ."
        },
        mid: {
          en: "You move fluidly between leading and supporting. Choose deliberately when the group needs your voice versus your ears.",
          ar: "أنت تتنقل بسلاسة بين القيادة والمساندة. اختر بوعي متى يحتاج الفريق إلى صوتك ومتى يحتاج إلى أذنك."
        },
        low: {
          en: "You work best with clear ownership and quiet focus. That is legitimate; communicate your needs so others don't read it as distance.",
          ar: "أنت تعمل بأفضل صورة مع ملكية واضحة وتركيز هادئ. ذلك مشروع؛ عبّر عن احتياجاتك حتى لا يقرأه الآخرون بوصفه نفوراً."
        }
      },
      independence: {
        high: {
          en: "You trust your own compass and act without waiting. Independence is your engine; let trusted others check your blind side.",
          ar: "أنت تثق ببوصلة نفسك وتتصرف دون انتظار. الاستقلال محرّكك؛ دع من تثق بهم يتفقدون زاويتك العمياء."
        },
        mid: {
          en: "You know when to decide alone and when to consult. Keep that boundary explicit with the people who depend on you.",
          ar: "أنت تعرف متى تقرر وحدك ومتى تستشير. اجعل هذا الحد واضحاً لمن يعتمدون عليك."
        },
        low: {
          en: "You make better choices with input from others. That is not weakness — it is a distributed form of wisdom; just don't outsource the final call.",
          ar: "أنت تتخذ قرارات أفضل بمشاركة الآخرين. هذا ليس ضعفاً، بل حكمة موزّعة؛ فقط لا توكّل القرار الأخير لغيرك."
        }
      },
      exploration: {
        high: {
          en: "Novelty feeds you. You learn by diving in; give each new pursuit a small, finishing step so exploration becomes accomplishment.",
          ar: "الجديد يغذّيك. أنت تتعلّم بالانغماس؛ امنح كل سعي جديد خطوة إنجاز صغيرة كي يتحول الاستكشاف إلى إنجاز."
        },
        mid: {
          en: "You sample widely but consolidate when something proves worth it. Trust that instinct to know when curiosity should become commitment.",
          ar: "أنت تجرّب على نطاق واسع لكنك ترسّخ عندما يثبت شيء أنه يستحق. ثق بحدسك لمعرفة متى يتحول الفضول إلى التزام."
        },
        low: {
          en: "You deepen rather than wander. Mastery is your gift; schedule a little deliberate novelty so growth doesn't become routine.",
          ar: "أنت تتعمّق بدل أن تتجوّل. الإتقان موهبتك؛ أضف جرعة من التجديد المتعمّد كي لا يتحول النمو إلى روتين."
        }
      },
      risk_assessment: {
        high: {
          en: "You see what could go wrong and price it in. Foresight protects your work; avoid letting it become the reason nothing starts.",
          ar: "أنت ترى ما قد يحدث من خطأ وتحتسبه. البصيرة تحمي عملك؛ تجنّب أن تتحول إلى سبب لعدم البدء."
        },
        mid: {
          en: "You read risk in context — cautious where it's costly, bold where it's cheap. That contextual sense is your edge.",
          ar: "أنت تقرأ المخاطرة في سياقها — حذر حيث تكون مكلفة، وجريء حيث تكون رخيصة. هذا الحسّ السياقي هو ميزتك."
        },
        low: {
          en: "You accept uncertainty and move. Boldness opens doors; keep one honest worst-case check before the big leaps.",
          ar: "أنت تتقبّل الغموض وتمضي. الجرأة تفتح أبواباً؛ أبقِ فحصاً صادقاً واحداً لأسوأ الاحتمالات قبل القفزات الكبرى."
        }
      }
    },
    thirtyDay: {
      en: "Week 1: clarify one goal that uses your {d1}. Week 2: practice one habit that strengthens your {d2}. Week 3: design one experiment outside your comfort zone. Week 4: review what changed and choose the next step.",
      ar: "الأسبوع 1: وضّح هدفاً واحداً يوظّف {d1}. الأسبوع 2: مارس عادة واحدة تقوّي {d2}. الأسبوع 3: صمّم تجربة واحدة خارج منطقة راحتك. الأسبوع 4: راجع ما تغيّر واختر الخطوة التالية."
    },
    disclaimer: {
      en: "This is an interpretive exercise for self-reflection. Personality matches are product interpretations based on historical biography, not scientific measurement of you or the figures. Historical facts are separated from modern interpretation and should be verified against the cited sources.",
      ar: "هذا تمرين تفسيري للتأمل الذاتي. مطابقات الشخصية هي قراءات للمنتج مبنية على سِيَر تاريخية، وليست قياساً علمياً لك أو للشخصيات. الحقائق التاريخية مفصولة عن التفسير الحديث وينبغي التحقق منها عبر المصادر المذكورة."
    }
  }
};

if (typeof window !== "undefined") {
  window.APP_DATA = APP_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = APP_DATA;
}
