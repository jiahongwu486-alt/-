/* ============================================================
   Historical Persona — Middle East edition content
   This file is the whole "knowledge base" for one country version.
   To build another country version, copy the whole "middle-east"
   folder and replace this file (questions + archetypes + strings).
   ============================================================ */

const APP_CONTENT = {
  version: {
    id: "middle-east",
    eyebrow: { en: "Historical Persona · Middle East", ar: "الشخصية التاريخية · الشرق الأوسط" }
  },

  ui: {
    brand: { en: "Historical Persona", ar: "الشخصية التاريخية" },
    homeTitle: {
      en: "Which historical figure shares your soul?",
      ar: "أيّ شخصية تاريخية تشبه روحك؟"
    },
    homeSub: {
      en: "Twelve scenario questions, eight prototypes drawn from history, and a mirror for the patterns that keep recurring in your life — and the direction they point toward.",
      ar: "اثنا عشر سؤالاً موقفياً، وثمانية نماذج مستمدة من التاريخ، ومرآة للأنماط التي تتكرر في حياتك — والاتجاه الذي تشير إليه."
    },
    begin: { en: "Begin the test", ar: "ابدأ الاختبار" },
    freeNote: {
      en: "Answer the full test free · Pay $1.99 to unlock your report",
      ar: "أجب عن الاختبار مجاناً · ادفع 1.99$ لفتح تقريرك"
    },
    features: [
      {
        en: "12 scenario questions",
        ar: "12 سؤالاً موقفياً",
        desc: {
          en: "Everyday dilemmas that reveal how you actually choose.",
          ar: "مواقف يومية تكشف كيف تختار فعلاً."
        }
      },
      {
        en: "8 historical prototypes",
        ar: "8 نماذج تاريخية",
        desc: {
          en: "Scholars, poets, rulers and travelers who share your temperament.",
          ar: "علماء وشعراء وقادة ورحّالة يشبهونك في الطبع."
        }
      },
      {
        en: "A direction forward",
        ar: "اتجاه نحو الأمام",
        desc: {
          en: "Your strengths, your recurring blind spots, and the next step.",
          ar: "نقاط قوتك، ونقاطك العمياء المتكررة، وخطوتك التالية."
        }
      }
    ],
    questionCounter: {
      en: (n, total) => `Question ${n} of ${total}`,
      ar: (n, total) => `السؤال ${n} من ${total}`
    },
    back: { en: "Back", ar: "رجوع" },
    optionA: { en: "A", ar: "أ" },
    optionB: { en: "B", ar: "ب" },

    resultReady: { en: "Your historical prototype is ready", ar: "نموذجك التاريخي جاهز" },
    resultLockedHint: {
      en: "You've completed the test. The mirror is one step away.",
      ar: "أكملت الاختبار. المرآة على بُعد خطوة واحدة."
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

    yourPrototype: { en: "Your historical prototype", ar: "نموذجك التاريخي" },
    strengths: { en: "Core strengths", ar: "أبرز نقاط القوة" },
    blindspots: { en: "Recurring blind spots", ar: "النقاط العمياء المتكررة" },
    growth: { en: "Your growth direction", ar: "اتجاه نموّك" },
    echo: { en: "Historical echo", ar: "الصدى التاريخي" },
    share: { en: "Share my result", ar: "شارك نتيجتي" },
    retake: { en: "Retake the test", ar: "أعد الاختبار" },
    copied: { en: "Copied", ar: "تم النسخ" },
    footerNote: {
      en: "An interpretive guide for self-understanding, not a clinical assessment.",
      ar: "دليل تفسيري لمعرفة الذات، وليس تقييماً نفسياً إكلينيكياً."
    }
  },

  dimensions: [
    {
      id: "EI",
      name: { en: "Energy", ar: "الطاقة" },
      poleA: { code: "E", en: "Outward", ar: "منفتح" },
      poleB: { code: "I", en: "Inward", ar: "متأمل" }
    },
    {
      id: "RF",
      name: { en: "Decision", ar: "القرار" },
      poleA: { code: "R", en: "Reason", ar: "العقل" },
      poleB: { code: "F", en: "Feeling", ar: "الوجدان" }
    },
    {
      id: "ON",
      name: { en: "Drive", ar: "الدافع" },
      poleA: { code: "O", en: "Order", ar: "النظام" },
      poleB: { code: "N", en: "Quest", ar: "الاستكشاف" }
    }
  ],

  questions: [
    {
      dim: "EI",
      en: {
        q: "A busy week ends and a free weekend arrives. You are more likely to…",
        a: "Head out with friends — being around people recharges you.",
        b: "Turn off your phone, read or walk alone to recharge quietly."
      },
      ar: {
        q: "انتهى أسبوع مزدحم وحلّ يوم عطلة. على الأرجح أنت…",
        a: "تخرج مع أصدقائك، فالتواجد مع الناس يشحن طاقتك.",
        b: "تُطفئ هاتفك وتقرأ أو تتمشّى وحدك لتستعيد هدوءك."
      }
    },
    {
      dim: "EI",
      en: {
        q: "You enter a room full of strangers. Your first instinct is to…",
        a: "Start conversations and build connections quickly.",
        b: "Observe first and find a comfortable corner."
      },
      ar: {
        q: "تدخل مجلساً مليئاً بغرباء. أول ما تميل إليه هو…",
        a: "أن تبدأ الحديث وتكوّن علاقات بسرعة.",
        b: "أن تراقب أولاً وتجد لنفسك زاوية مريحة."
      }
    },
    {
      dim: "EI",
      en: {
        q: "When an important idea strikes you, you usually…",
        a: "Think out loud, sharpening it through discussion.",
        b: "Turn it over in your mind before deciding whether to share."
      },
      ar: {
        q: "عندما تخطر لك فكرة مهمة، فأنت غالباً…",
        a: "تفكّر بصوت عالٍ وتصقلها بالنقاش.",
        b: "تقلّبها في ذهنك قبل أن تقرر مشاركتها."
      }
    },
    {
      dim: "EI",
      en: {
        q: "In a team brainstorm, you are more like…",
        a: "Someone who throws out many ideas — discussion excites you.",
        b: "Someone who listens first, then offers a considered judgment."
      },
      ar: {
        q: "في جلسة عصف ذهني، أنت أقرب إلى…",
        a: "من يطرح أفكاراً كثيرة، فالنقاش يثير حماسك.",
        b: "من يستمع أولاً ثم يقدّم رأياً مدروساً."
      }
    },
    {
      dim: "RF",
      en: {
        q: "A friend confides a problem to you. Your first move is to…",
        a: "Analyze the problem and map a way out.",
        b: "Empathize with their feelings and let them know you care."
      },
      ar: {
        q: "يشكو لك صديقٌ همّه. أول ما تفعله هو…",
        a: "تحليل المشكلة ورسم طريق للخروج منها.",
        b: "التعاطف مع مشاعره وإشعاره بأنك تهتم."
      }
    },
    {
      dim: "RF",
      en: {
        q: "For big decisions, you trust…",
        a: "Data, logic, and weighing pros and cons.",
        b: "Your inner sense of what feels right."
      },
      ar: {
        q: "في القرارات الكبرى، أنت تثق بـ…",
        a: "البيانات والمنطق وموازنة الإيجابيات والسلبيات.",
        b: "إحساسك الداخلي بما هو صواب."
      }
    },
    {
      dim: "RF",
      en: {
        q: "When your team disagrees, the most important thing is…",
        a: "Reaching a sound conclusion based on facts and principles.",
        b: "Honoring everyone's feelings and keeping harmony."
      },
      ar: {
        q: "عندما يختلف فريقك، الأهم هو…",
        a: "الوصول إلى خلاصة سليمة قائمة على الحقائق والمبادئ.",
        b: "مراعاة مشاعر الجميع والحفاظ على الانسجام."
      }
    },
    {
      dim: "RF",
      en: {
        q: "To judge whether someone is trustworthy, you weigh…",
        a: "Whether they do what they say — consistency.",
        b: "Whether they are sincere and care about others."
      },
      ar: {
        q: "لكي تحكم على مصداقية شخص، تنظر إلى…",
        a: "مدى تطابق أقواله مع أفعاله.",
        b: "مدى صدقه واهتمامه بالآخرين."
      }
    },
    {
      dim: "ON",
      en: {
        q: "For the next five years, you prefer…",
        a: "A clear roadmap with milestones.",
        b: "Staying open and embracing whatever comes."
      },
      ar: {
        q: "بالنسبة للسنوات الخمس القادمة، تفضّل…",
        a: "خريطة طريق واضحة بأهداف مرحلية.",
        b: "البقاء منفتحاً وتقبّل ما يأتي."
      }
    },
    {
      dim: "ON",
      en: {
        q: "When traveling, you prefer…",
        a: "Planning ahead and following an itinerary.",
        b: "Going with the flow and letting chance surprise you."
      },
      ar: {
        q: "عند السفر، تفضّل…",
        a: "التخطيط المسبق واتباع جدول محدد.",
        b: "السير بلا قيود وترك المصادفة تفاجئك."
      }
    },
    {
      dim: "ON",
      en: {
        q: "Faced with a repetitive routine, you feel…",
        a: "Stability gives security — I enjoy the familiar.",
        b: "Repetition suffocates me — I crave novelty."
      },
      ar: {
        q: "أمام روتين متكرر، تشعر أن…",
        a: "الاستقرار يمنح الأمان، وأنا أستمتع بالمألوف.",
        b: "التكرار يخنقني، وأنا أتوق إلى الجديد."
      }
    },
    {
      dim: "ON",
      en: {
        q: "Learning a new field, you would rather…",
        a: "Build foundations step by step, systematically.",
        b: "Dive into what interests you and learn by doing."
      },
      ar: {
        q: "عند تعلّم مجال جديد، تفضّل…",
        a: "بناء الأساسيات خطوة بخطوة وبمنهجية.",
        b: "الانغماس فيما يثير اهتمامك والتعلّم بالممارسة."
      }
    }
  ],

  archetypes: {
    ERO: {
      code: "E·R·O",
      figure: { en: "Saladin", ar: "صلاح الدين الأيوبي" },
      epithet: { en: "The Just Strategist", ar: "القائد العادل" },
      years: { en: "1137 – 1193", ar: "1137 – 1193" },
      tagline: { en: "Build unity through fairness", ar: "توحيد الصفوف بالعدل" },
      essence: {
        en: "You move through the world with energy, clear logic, and a deep need for order. Like Saladin, you build unity — not by force alone, but by being consistently fair.",
        ar: "أنت تتحرك في العالم بطاقة ووضوح منطقي وحاجة عميقة إلى النظام. مثل صلاح الدين، أنت توحّد الصفوف — لا بالقوة وحدها، بل بالعدل الثابت."
      },
      strengths: [
        { en: "Strategic, long-view thinking", ar: "تفكير استراتيجي بعيد المدى" },
        { en: "Fairness and self-restraint", ar: "إنصاف وضبط للنفس" },
        { en: "Uniting people behind a cause", ar: "توحيد الناس خلف هدف" },
        { en: "Calm under pressure", ar: "هدوء تحت الضغط" }
      ],
      blindspots: [
        { en: "You can over-control and carry every burden alone.", ar: "قد تسيطر أكثر من اللازم وتحمل كل الأعباء وحدك." },
        { en: "Diplomacy sometimes silences your own feelings.", ar: "الدبلوماسية أحياناً تُسكت مشاعرك أنت." }
      ],
      growth: {
        en: "Learn to share the weight and let others lead. Your strength is not only in command — it is in your capacity to forgive, to listen, and to let loyalty flow both ways.",
        ar: "تعلّم أن تشارك العبء وتترك الآخرين يقودون. قوتك ليست في القيادة فقط، بل في قدرتك على العفو والاستماع، وفي جعل الولاء يسير في الاتجاهين."
      },
      echo: {
        en: "Saladin united fractured lands not by charisma alone but by consistent justice — even toward his rivals. His dilemma between loyalty and ambition, war and mercy, is yours too.",
        ar: "وحّد صلاح الدين بلاداً ممزقة لا بالكاريزما وحدها بل بعدل ثابت — حتى تجاه خصومه. معضلته بين الولاء والطموح، وبين الحرب والرحمة، هي معضلتك أيضاً."
      }
    },

    ERN: {
      code: "E·R·N",
      figure: { en: "Ibn Battuta", ar: "ابن بطوطة" },
      epithet: { en: "The Restless Explorer", ar: "الرحّالة الذي لا يهدأ" },
      years: { en: "1304 – 1369", ar: "1304 – 1369" },
      tagline: { en: "Turn the unknown into home", ar: "حوّل المجهول إلى وطن" },
      essence: {
        en: "You learn by doing and trust evidence gathered with your own feet. Like Ibn Battuta, your rationality serves a restless curiosity that keeps pulling you toward the horizon.",
        ar: "أنت تتعلّم بالممارسة وتثق بما تجمعه قدماك من أدلة. مثل ابن بطوطة، عقلانيتك في خدمة فضول لا يهدأ يشدّك دائماً نحو الأفق."
      },
      strengths: [
        { en: "Adaptability", ar: "قدرة على التكيّف" },
        { en: "Pragmatic curiosity", ar: "فضول عملي" },
        { en: "Resilience", ar: "مرونة وصلابة" },
        { en: "Turning uncertainty into opportunity", ar: "تحويل عدم اليقين إلى فرصة" }
      ],
      blindspots: [
        { en: "Restlessness can become escape.", ar: "قد يتحوّل القلق الدائم إلى هروب." },
        { en: "Starting is easy for you; finishing is hard.", ar: "البدء سهل عليك، أما الإتمام فصعب." }
      ],
      growth: {
        en: "Give your journeys a purpose and a port to return to. Completion can be its own adventure; depth rewards the one who stays.",
        ar: "امنح رحلاتك غايةً وميناءً تعود إليه. الإتمام قد يكون مغامرة بحد ذاته، والعمق يكافئ من يبقى."
      },
      echo: {
        en: "He traveled for nearly three decades, but his journey became meaning only when he returned to write it down and share it.",
        ar: "سافر ما يقرب من ثلاثة عقود، لكن رحلته اكتسبت معناها حين عاد ليكتبها ويشاركها."
      }
    },

    EFO: {
      code: "E·F·O",
      figure: { en: "Harun al-Rashid", ar: "هارون الرشيد" },
      epithet: { en: "The Generous Patron", ar: "الراعي الكريم" },
      years: { en: "763 – 809", ar: "763 – 809" },
      tagline: { en: "Lift others and you lift the age", ar: "ارفع الآخرين ترفع عصرك" },
      essence: {
        en: "You make communities flourish. Outward and warm, you love bringing people together, celebrating their gifts, and holding the circle steady.",
        ar: "أنت تُزهر المجتمعات من حولك. منفتح ودافئ، تحب جمع الناس والاحتفاء بمواهبهم والحفاظ على تماسك الدائرة."
      },
      strengths: [
        { en: "Generosity", ar: "كرم" },
        { en: "Bringing people together", ar: "جمع الناس" },
        { en: "Spotting and lifting talent", ar: "اكتشاف المواهب ورعايتها" },
        { en: "Loyalty", ar: "وفاء" }
      ],
      blindspots: [
        { en: "People-pleasing can override your own needs.", ar: "إرضاء الناس قد يطغى على احتياجاتك أنت." },
        { en: "You avoid necessary conflict until it grows.", ar: "تتجنّب الخلاف الضروري حتى يكبر." }
      ],
      growth: {
        en: "Set boundaries; generosity without limits empties the giver. Your warmth is a fire — protect the flame that keeps it burning.",
        ar: "ضع حدوداً؛ فالكرم بلا حدود يُفرغ العاطي. دفؤك نارٌ — احمِ الشعلة التي تُبقيها متّقدة."
      },
      echo: {
        en: "His court became a beacon because he lifted others, yet his legend also warns of being consumed by appearances and entourage.",
        ar: "أصبح بلاطه منارةً لأنه رفع الآخرين، لكن أسطورته تحذّر أيضاً من أن تبتلعك المظاهر والحاشية."
      }
    },

    EFN: {
      code: "E·F·N",
      figure: { en: "Rumi", ar: "جلال الدين الرومي" },
      epithet: { en: "The Transformative Poet", ar: "الشاعر المحوِّل" },
      years: { en: "1207 – 1273", ar: "1207 – 1273" },
      tagline: { en: "Turn pain into meaning", ar: "حوّل الألم إلى معنى" },
      essence: {
        en: "You turn feeling into meaning and seek to awaken others. Outward and quest-driven, your gift is transmuting experience into something that moves people.",
        ar: "أنت تحوّل الشعور إلى معنى وتسعى لإيقاظ الآخرين. منفتح ومدفوع بالسعي، موهبتك هي تحويل التجربة إلى ما يحرّك النفوس."
      },
      strengths: [
        { en: "Deep empathy", ar: "تعاطف عميق" },
        { en: "Creative expression", ar: "تعبير إبداعي" },
        { en: "Turning pain into beauty", ar: "تحويل الألم إلى جمال" },
        { en: "Inspiring change", ar: "إلهام التغيير" }
      ],
      blindspots: [
        { en: "Intensity can blur your boundaries.", ar: "قد تُذيب الشدّة حدودك." },
        { en: "You sometimes escape into feeling instead of acting.", ar: "أحياناً تهرب إلى الشعور بدل الفعل." }
      ],
      growth: {
        en: "Root inspiration in daily practice. Not every feeling must become a fire; some should become a steady light.",
        ar: "أرسِ الإلهام في ممارسة يومية. ليس على كل شعور أن يتحوّل إلى نار؛ فبعضه يجب أن يصبح نوراً ثابتاً."
      },
      echo: {
        en: "Rumi's greatest poetry emerged from loss and friendship, and his ecstasy was grounded in discipline — the turning, the practice.",
        ar: "خرج أعظم شعر الرومي من فَقْدٍ وصداقة، وكان وجده راسخاً في انضباط — في الدوران والممارسة."
      }
    },

    IRO: {
      code: "I·R·O",
      figure: { en: "Ibn Sina (Avicenna)", ar: "ابن سينا" },
      epithet: { en: "The Ordering Sage", ar: "الحكيم المنظِّم" },
      years: { en: "980 – 1037", ar: "980 – 1037" },
      tagline: { en: "Master deeply, heal widely", ar: "أتقن بعمق، واشفِ بوسع" },
      essence: {
        en: "You systematize knowledge and seek to understand things to their root — often so you can help. Like Ibn Sina, your order is not cold; it is care made rigorous.",
        ar: "أنت تنظّم المعرفة وتسعى لفهم الأشياء حتى جذورها — غالباً لكي تساعد. مثل ابن سينا، نظامك ليس بارداً؛ إنه عناية صارت دقّة."
      },
      strengths: [
        { en: "Depth of thought", ar: "عمق في التفكير" },
        { en: "Systematic mastery", ar: "إتقان منهجي" },
        { en: "Self-discipline", ar: "انضباط ذاتي" },
        { en: "Turning knowledge into care", ar: "تحويل المعرفة إلى عناية" }
      ],
      blindspots: [
        { en: "Overwork and isolation creep up on you.", ar: "يتسلّل إليك الإرهاق والعزلة." },
        { en: "You can mistake certainty for truth.", ar: "قد تخلط بين اليقين والحقيقة." }
      ],
      growth: {
        en: "Let others in and share your inner world. Not everything can be organized — some things must simply be lived.",
        ar: "اسمح للآخرين بالدخول وشاركهم عالمك الداخلي. ليس كل شيء يمكن تنظيمه؛ فبعض الأشياء يجب أن تُعاش فحسب."
      },
      echo: {
        en: "He wrote the Canon of Medicine and shaped centuries of thought, yet his letters reveal a man who craved connection beyond books.",
        ar: "كتب القانون في الطب وشكّل قروناً من الفكر، لكن رسائله تكشف رجلاً تاق إلى صلة تتجاوز الكتب."
      }
    },

    IRN: {
      code: "I·R·N",
      figure: { en: "Ibn Rushd (Averroes)", ar: "ابن رشد" },
      epithet: { en: "The Independent Questioner", ar: "المفكر المستقل" },
      years: { en: "1126 – 1198", ar: "1126 – 1198" },
      tagline: { en: "Reason is a form of courage", ar: "العقل ضرب من الشجاعة" },
      essence: {
        en: "You question inherited answers and seek truth through your own reasoning. Like Ibn Rushd, your independence is both your gift and your burden.",
        ar: "أنت تتساءل عن الأجوبة الموروثة وتطلب الحقيقة بعقلك. مثل ابن رشد، استقلالك هديتك وعبؤك معاً."
      },
      strengths: [
        { en: "Intellectual courage", ar: "شجاعة فكرية" },
        { en: "Independence", ar: "استقلالية" },
        { en: "Precision", ar: "دقّة" },
        { en: "Bridging worlds", ar: "الجمع بين عوالم مختلفة" }
      ],
      blindspots: [
        { en: "Your independence can become isolation.", ar: "قد يتحوّل استقلالك إلى عزلة." },
        { en: "Rigor without warmth pushes people away.", ar: "الدقّة بلا دفء تُبعد الناس." }
      ],
      growth: {
        en: "Pair rigor with humility. Truth persuades more when it arrives with warmth; people change when they feel understood.",
        ar: "اقرن الدقّة بالتواضع. الحقيقة تقنع أكثر حين تأتي بدفء، والناس يتغيّرون حين يشعرون بأنهم مفهومون."
      },
      echo: {
        en: "He argued that reason and faith can coexist — and paid a price for it. His integrity outlived his censure.",
        ar: "جادل بأن العقل والإيمان يمكن أن يتعايشا — ودفع ثمن ذلك. لكن نزاهته عاشت بعد محنته."
      }
    },

    IFO: {
      code: "I·F·O",
      figure: { en: "Rabi'a al-Adawiyya", ar: "رابعة العدوية" },
      epithet: { en: "The Constant Heart", ar: "القلب الثابت" },
      years: { en: "c. 714 – 801", ar: "حوالي 714 – 801" },
      tagline: { en: "Love as a discipline", ar: "الحب كمنهج حياة" },
      essence: {
        en: "You live by inner constancy, and love for you is not a passing mood but a discipline. Like Rabi'a, your devotion gives you a rare, quiet steadiness.",
        ar: "أنت تعيش بثبات داخلي، والحب عندك ليس مزاجاً عابراً بل منهجاً. مثل رابعة، يمنحك إخلاصك ثباتاً هادئاً نادراً."
      },
      strengths: [
        { en: "Sincerity", ar: "صدق" },
        { en: "Steadfastness", ar: "ثبات" },
        { en: "Inner peace", ar: "سلام داخلي" },
        { en: "Selfless devotion", ar: "إخلاص بلا مقابل" }
      ],
      blindspots: [
        { en: "Self-denial can erase your own needs.", ar: "قد يمحو إنكار الذات احتياجاتك." },
        { en: "You hold your heart to impossible standards.", ar: "تحاسب قلبك بمعايير مستحيلة." }
      ],
      growth: {
        en: "Love yourself as steadily as you love your ideals. Your worth is not only in giving; receiving is a form of trust too.",
        ar: "أحبب نفسك بثباتك نفسه الذي تحب به مُثُلك. قيمتك ليست في العطاء فقط؛ فالأخذ شكل من أشكال الثقة أيضاً."
      },
      echo: {
        en: "She taught that love should be for its own sake — not for reward or fear — a radical inner freedom born of constancy.",
        ar: "علّمت أن الحب ينبغي أن يكون لذاته — لا لثواب ولا لخوف — حرية داخلية جذرية وُلدت من الثبات."
      }
    },

    IFN: {
      code: "I·F·N",
      figure: { en: "Omar Khayyam", ar: "عمر الخيام" },
      epithet: { en: "The Contemplative Free Spirit", ar: "الروح الحرة المتأملة" },
      years: { en: "1048 – 1131", ar: "1048 – 1131" },
      tagline: { en: "Wonder is a way of knowing", ar: "الدهشة طريق إلى المعرفة" },
      essence: {
        en: "You see life's beauty and brevity with unusual clarity and keep asking what remains. Like Khayyam, you hold science and wonder in the same hand.",
        ar: "ترى جمال الحياة وقِصَرها بوضوح نادر، ولا تكف عن السؤال عمّا يبقى. مثل الخيام، تحمل العلم والدهشة في كف واحدة."
      },
      strengths: [
        { en: "Wonder", ar: "دهشة" },
        { en: "Honesty about uncertainty", ar: "صدق تجاه الغموض" },
        { en: "Poetic insight", ar: "بصيرة شاعرية" },
        { en: "Living in the present", ar: "عيش اللحظة" }
      ],
      blindspots: [
        { en: "Drift can become a quiet melancholy.", ar: "قد يتحوّل التيّه إلى حزن هادئ." },
        { en: "Fear of losing freedom keeps you from committing.", ar: "الخوف من فقدان الحرية يمنعك من الالتزام." }
      ],
      growth: {
        en: "Choose something to build anyway. Joy deepens when you stay long enough to watch it grow.",
        ar: "اختر شيئاً لتبنيه رغم ذلك. الفرح يتعمّق حين تبقى ما يكفي لتراه ينمو."
      },
      echo: {
        en: "A mathematician who also wrote of wine and transience, he refused to pretend certainty where there was wonder.",
        ar: "رياضي كتب أيضاً عن الخمر والفناء، رفض أن يتظاهر باليقين حيث توجد دهشة."
      }
    }
  }
};

if (typeof window !== "undefined") {
  window.APP_CONTENT = APP_CONTENT;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = APP_CONTENT;
}
