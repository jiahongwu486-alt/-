/* Character archive v2 — structured profiles. profile = product_interpretation (not measured data). */

const APP_CHARACTERS = [
  {
    person_id: "P-001",
    names: { en: "Saladin", ar: "صلاح الدين الأيوبي" }, aliases: ["Salah ad-Din Yusuf ibn Ayyub"],
    years: "1137–1193", region: "Levant & Egypt", era: "12th century (Ayyubid)",
    identity_category: "arab_historical", identity_note: "Kurdish-born founder of the Ayyubid dynasty ruling Egypt and Syria.",
    role: "Ruler and military commander",
    bio: {
      en: "Founder of the Ayyubid dynasty, Saladin united Egypt and Syria, retook Jerusalem in 1187, and became widely known for justice and restraint toward rivals.",
      ar: "مؤسس الدولة الأيوبية، وحّد مصر والشام، واستعاد القدس عام 1187، واشتهر بالعدل وضبط النفس تجاه خصومه."
    },
    contributions: ["Unified Egypt and Syria under the Ayyubids", "Retook Jerusalem (1187) and concluded the Third Crusade negotiations"],
    sources: [
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography and reign" },
      { title: "Saladin: The Politics of the Holy War", author: "M. C. Lyons & D. E. P. Jackson", type: "academic_book", verified: false, supports: "Life and campaigns" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Facts unverified online; identity note present.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.75, decisiveness: 0.85, collaboration: 0.65, independence: 0.7, exploration: 0.35, risk_assessment: 0.7 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his documented strategy, unity-building and restraint.",
    epithet: { en: "The Just Strategist", ar: "القائد العادل" },
    tagline: { en: "Build unity through fairness", ar: "وحّد الصفوف بالعدل" },
    strengths: [
      { en: "Long-view strategy", ar: "رؤية استراتيجية بعيدة المدى" },
      { en: "Fairness and restraint", ar: "إنصاف وضبط للنفس" },
      { en: "Uniting rival factions", ar: "توحيد الفرقاء" },
      { en: "Calm under pressure", ar: "هدوء تحت الضغط" }
    ],
    blindspots: [
      { en: "Carrying every burden alone.", ar: "حمل كل الأعباء وحدك." },
      { en: "Diplomacy that silences your own needs.", ar: "دبلوماسية تُسكت احتياجاتك." }
    ],
    decision_style: {
      en: "You decide by weighing principle and consequence, then commit firmly.",
      ar: "أنت تقرر بموازنة المبدأ والنتيجة، ثم تلتزم بثبات."
    },
    collaboration_style: {
      en: "You unify by being consistently fair, and you mediate between camps.",
      ar: "أنت توحّد عبر العدل الثابت، وتتوسّط بين الأطراف."
    },
    growth: {
      en: "Share the weight and let others lead; forgiveness and listening are strengths too.",
      ar: "شارك العبء ودع الآخرين يقودون؛ فالعفو والاستماع قوتان أيضاً."
    },
    difference: {
      en: "Where explorers chase the horizon, you consolidate and build durable order.",
      ar: "حين يطارد المستكشفون الأفق، أنت ترسّخ وتبني نظاماً دائماً."
    },
    historical_note: {
      en: "Sources: Encyclopaedia of Islam (2nd ed.) and Lyons & Jackson, 'Saladin'. Status: needs verification.",
      ar: "المصادر: دائرة المعارف الإسلامية (ط2) وليونز وجاكسون «صلاح الدين». الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-002",
    names: { en: "Ibn Battuta", ar: "ابن بطوطة" }, aliases: ["Abu Abdallah Muhammad ibn Battuta"],
    years: "1304–1369", region: "Morocco to China (travels)", era: "14th century (Marinid)",
    identity_category: "arab_historical", identity_note: "Maghrebi Arab traveler and scholar from Tangier.",
    role: "Traveler, jurist and chronicler",
    bio: {
      en: "The most widely traveled pre-modern chronicler, Ibn Battuta journeyed for nearly three decades across North Africa, the Middle East, Asia and the Indian Ocean, later dictating the Rihla.",
      ar: "أوسع رحّالي ما قبل العصر الحديث، جاب ابن بطوطة قرابة ثلاثة عقود عبر شمال أفريقيا والشرق الأوسط وآسيا والمحيط الهندي، ثم أملى «الرحلة»."
    },
    contributions: ["The Rihla (Travels), a key geographic and social record", "Served as qadi across several courts"],
    sources: [
      { title: "The Travels of Ibn Battuta", author: "Ed. H. A. R. Gibb (Hakluyt Society)", type: "edited_primary_source", verified: false, supports: "Travels and life" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.45, decisiveness: 0.7, collaboration: 0.5, independence: 0.8, exploration: 0.9, risk_assessment: 0.35 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his sustained travel, adaptability and empirical curiosity.",
    epithet: { en: "The Restless Explorer", ar: "الرحّالة الذي لا يهدأ" },
    tagline: { en: "Turn the unknown into home", ar: "حوّل المجهول إلى وطن" },
    strengths: [
      { en: "Adaptability", ar: "قدرة على التكيّف" },
      { en: "Empirical curiosity", ar: "فضول قائم على المشاهدة" },
      { en: "Resilience", ar: "مرونة" },
      { en: "Turning uncertainty into opportunity", ar: "تحويل الغموض إلى فرصة" }
    ],
    blindspots: [
      { en: "Restlessness that becomes escape.", ar: "قلق يتحول إلى هروب." },
      { en: "Starting many things, finishing few.", ar: "بدء الكثير وإتمام القليل." }
    ],
    decision_style: {
      en: "You decide fast and empirically, trusting what you learn by doing.",
      ar: "أنت تقرر سريعاً وبمنهج عملي، واثقاً بما تتعلمه بالممارسة."
    },
    collaboration_style: {
      en: "You adapt to any group, then move on when the road calls.",
      ar: "أنت تتكيّف مع أي جماعة، ثم تمضي حين يناديك الطريق."
    },
    growth: {
      en: "Give your journeys a purpose and a port; completion can be its own adventure.",
      ar: "امنح رحلاتك غاية وميناءً؛ فالإتمام قد يكون مغامرة بحد ذاته."
    },
    difference: {
      en: "Unlike consolidators, you measure life in horizons rather than foundations.",
      ar: "على عكس المرسِّخين، تقيس الحياة بالآفاق لا بالأساسات."
    },
    historical_note: {
      en: "Sources: Gibb's edition of the Rihla and Encyclopaedia of Islam. Status: needs verification.",
      ar: "المصادر: طبعة جب للرحلة ودائرة المعارف الإسلامية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-003",
    names: { en: "Harun al-Rashid", ar: "هارون الرشيد" }, aliases: ["Harun ibn al-Mahdi"],
    years: "763–809", region: "Baghdad (Abbasid)", era: "8th–9th century (Abbasid)",
    identity_category: "arab_historical", identity_note: "Fifth Abbasid caliph of Arab lineage.",
    role: "Caliph and patron",
    bio: {
      en: "Fifth Abbasid caliph, Harun al-Rashid presided over a flourishing Baghdad that drew scholars and artists, a reign later romanticized in the Thousand and One Nights.",
      ar: "الخليفة العباسي الخامس، أشرف هارون الرشيد على بغداد مزدهرة تستقطب العلماء والفنانين، وقد خلّدت «ألف ليلة وليلة» عهده."
    },
    contributions: ["Patronage of the early Abbasid intellectual renaissance", "Diplomatic ties with Charlemagne's court"],
    sources: [
      { title: "Harun al-Rashid and the World of the Thousand and One Nights", author: "André Clot", type: "academic_book", verified: false, supports: "Reign and court culture" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.55, decisiveness: 0.6, collaboration: 0.85, independence: 0.4, exploration: 0.6, risk_assessment: 0.4 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his patronage, court-building and diplomacy.",
    epithet: { en: "The Generous Patron", ar: "الراعي الكريم" },
    tagline: { en: "Lift others and you lift the age", ar: "ارفع الآخرين ترفع عصرك" },
    strengths: [
      { en: "Generosity", ar: "كرم" },
      { en: "Bringing people together", ar: "جمع الناس" },
      { en: "Spotting and lifting talent", ar: "اكتشاف المواهب ورعايتها" },
      { en: "Loyalty", ar: "وفاء" }
    ],
    blindspots: [
      { en: "People-pleasing that overrides your needs.", ar: "إرضاء الناس على حساب احتياجاتك." },
      { en: "Avoiding necessary conflict until it grows.", ar: "تجنّب الخلاف حتى يكبر." }
    ],
    decision_style: {
      en: "You decide with people in mind, favoring choices that keep the circle whole.",
      ar: "أنت تقرر والآخرون في ذهنك، مفضلاً ما يُبقي الدائرة متماسكة."
    },
    collaboration_style: {
      en: "You lead by patronage and warmth, celebrating others' gifts.",
      ar: "أنت تقود بالرعاية والدفء، محتفياً بمواهب الآخرين."
    },
    growth: {
      en: "Set boundaries; generosity without limits empties the giver.",
      ar: "ضع حدوداً؛ فالكرم بلا حدود يُفرغ العاطي."
    },
    difference: {
      en: "Where strategists command, you gather and lift.",
      ar: "حين يقود الاستراتيجيون بالقيادة، أنت تجمع وترفع."
    },
    historical_note: {
      en: "Sources: Clot, 'Harun al-Rashid' and Encyclopaedia of Islam. Status: needs verification.",
      ar: "المصادر: كلو «هارون الرشيد» ودائرة المعارف الإسلامية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-004",
    names: { en: "Rumi", ar: "جلال الدين الرومي" }, aliases: ["Jalal ad-Din Muhammad Balkhi"],
    years: "1207–1273", region: "Konya (Anatolia)", era: "13th century (Seljuk)",
    identity_category: "related_civilization", identity_note: "Persian poet and Sufi master in the wider Islamic world, writing in Persian.",
    role: "Poet, mystic and teacher",
    bio: {
      en: "Persian poet and Sufi teacher whose Masnavi and lyric verses turned loss and longing into some of the most widely read spiritual poetry in the world.",
      ar: "شاعر ومعلّم صوفي فارسي حوّل الفقد والشوق في «المثنوي» وقصائده إلى شعر روحي من أوسع ما قُرئ في العالم."
    },
    contributions: ["The Masnavi, a major Sufi didactic poem", "Foundational influence on the Mevlevi order"],
    sources: [
      { title: "Rumi: Past and Present, East and West", author: "Franklin D. Lewis", type: "academic_book", verified: false, supports: "Life and works" },
      { title: "The Masnavi", author: "Tr. Jawid Mojaddedi (Oxford)", type: "edited_primary_source", verified: false, supports: "Poetic corpus" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "medium", review_status: "needs_fact_check", review_notes: "Religious/spiritual content; identity note present.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.35, decisiveness: 0.5, collaboration: 0.75, independence: 0.55, exploration: 0.7, risk_assessment: 0.3 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his expressive, transformative teaching and poetic output.",
    epithet: { en: "The Transformative Poet", ar: "الشاعر المحوِّل" },
    tagline: { en: "Turn pain into meaning", ar: "حوّل الألم إلى معنى" },
    strengths: [
      { en: "Deep empathy", ar: "تعاطف عميق" },
      { en: "Creative expression", ar: "تعبير إبداعي" },
      { en: "Turning pain into beauty", ar: "تحويل الألم إلى جمال" },
      { en: "Inspiring change", ar: "إلهام التغيير" }
    ],
    blindspots: [
      { en: "Intensity that blurs boundaries.", ar: "شدّة تذيب الحدود." },
      { en: "Escaping into feeling instead of acting.", ar: "الهروب إلى الشعور بدل الفعل." }
    ],
    decision_style: {
      en: "You decide from inner resonance, trusting what moves the heart.",
      ar: "أنت تقرر من صدى داخلي، واثقاً بما يحرّك القلب."
    },
    collaboration_style: {
      en: "You connect by sharing meaning, inviting others into transformation.",
      ar: "أنت تتواصل بمشاركة المعنى، داعياً الآخرين إلى التحوّل."
    },
    growth: {
      en: "Root inspiration in daily practice; not every feeling must become a fire.",
      ar: "أرسِ الإلهام في ممارسة يومية؛ ليس على كل شعور أن يصبح ناراً."
    },
    difference: {
      en: "Unlike systematic thinkers, you transmute experience rather than organize it.",
      ar: "على عكس المفكرين المنهجيين، أنت تحوّل التجربة بدل تنظيمها."
    },
    historical_note: {
      en: "Sources: Lewis, 'Rumi' and Mojaddedi's Masnavi. Status: needs verification.",
      ar: "المصادر: لويس «الرومي» وترجمة موجددي للمثنوي. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-005",
    names: { en: "Ibn Sina (Avicenna)", ar: "ابن سينا" }, aliases: ["Abu Ali al-Husayn ibn Sina"],
    years: "980–1037", region: "Bukhara & Isfahan (Persia)", era: "10th–11th century (Islamic Golden Age)",
    identity_category: "arab_cultural_sphere", identity_note: "Persian polymath who wrote chiefly in Arabic.",
    role: "Physician, philosopher and polymath",
    bio: {
      en: "Persian polymath whose Canon of Medicine organized centuries of medical knowledge and whose philosophical works shaped both Islamic and Latin scholastic thought.",
      ar: "موسوعي فارسي نظّم «القانون في الطب» قروناً من المعرفة الطبية، وشكّلت فلسفته الفكر الإسلامي والمدرسي اللاتيني معاً."
    },
    contributions: ["The Canon of Medicine (al-Qanun fi al-Tibb)", "The Book of Healing, a philosophical encyclopedia"],
    sources: [
      { title: "Avicenna (Great Medieval Thinkers)", author: "Jon McGinnis", type: "academic_book", verified: false, supports: "Life and philosophy" },
      { title: "Encyclopaedia Iranica", author: "Ed. Ehsan Yarshater", type: "encyclopedia", verified: false, supports: "Biography and works" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.9, decisiveness: 0.65, collaboration: 0.45, independence: 0.75, exploration: 0.7, risk_assessment: 0.55 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his systematic synthesis and depth of scholarship.",
    epithet: { en: "The Ordering Sage", ar: "الحكيم المنظِّم" },
    tagline: { en: "Master deeply, heal widely", ar: "أتقن بعمق واشفِ بوسع" },
    strengths: [
      { en: "Depth of thought", ar: "عمق في التفكير" },
      { en: "Systematic mastery", ar: "إتقان منهجي" },
      { en: "Self-discipline", ar: "انضباط ذاتي" },
      { en: "Knowledge in service of care", ar: "معرفة في خدمة العناية" }
    ],
    blindspots: [
      { en: "Overwork and isolation.", ar: "إرهاق وعزلة." },
      { en: "Mistaking certainty for truth.", ar: "خلط اليقين بالحقيقة." }
    ],
    decision_style: {
      en: "You decide by building a system, reasoning to the root before acting.",
      ar: "أنت تقرر ببناء نظام، مفكراً حتى الجذر قبل التصرف."
    },
    collaboration_style: {
      en: "You work best with clear structure and deep, focused exchanges.",
      ar: "أنت تعمل بأفضل صورة مع بنية واضحة وتبادل عميق مركّز."
    },
    growth: {
      en: "Let others in; not everything can be organized, some things must be lived.",
      ar: "اسمح للآخرين بالدخول؛ ليس كل شيء يمكن تنظيمه، فبعضه يجب أن يُعاش."
    },
    difference: {
      en: "Where free spirits wander, you build the map others later follow.",
      ar: "حين تتجوّل الأرواح الحرة، أنت ترسم الخريطة التي سيتبعها الآخرون لاحقاً."
    },
    historical_note: {
      en: "Sources: McGinnis, 'Avicenna' and Encyclopaedia Iranica. Status: needs verification.",
      ar: "المصادر: مكجينيس «ابن سينا» ودائرة المعارف الإيرانية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-006",
    names: { en: "Ibn Rushd (Averroes)", ar: "ابن رشد" }, aliases: ["Abu al-Walid Muhammad ibn Rushd"],
    years: "1126–1198", region: "Córdoba & Marrakesh (Al-Andalus)", era: "12th century (Almohad)",
    identity_category: "arab_historical", identity_note: "Andalusian Arab philosopher and jurist.",
    role: "Philosopher, jurist and physician",
    bio: {
      en: "Andalusian philosopher and judge whose commentaries revived Aristotle for Latin Europe and who argued for the compatibility of reason and revelation.",
      ar: "فيلسوف وقاضٍ أندلسي أحيت شروحه أرسطو في أوروبا اللاتينية، وجادل في التوافق بين العقل والوحي."
    },
    contributions: ["Commentaries on Aristotle that shaped scholasticism", "The Decisive Treatise on reason and revelation"],
    sources: [
      { title: "Averroes and his Philosophy", author: "Oliver Leaman", type: "academic_book", verified: false, supports: "Life and thought" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "medium", review_status: "needs_fact_check", review_notes: "Religious-philosophical controversy; handle with care.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.65, decisiveness: 0.7, collaboration: 0.45, independence: 0.9, exploration: 0.65, risk_assessment: 0.5 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his independent inquiry and intellectual courage.",
    epithet: { en: "The Independent Questioner", ar: "المفكر المستقل" },
    tagline: { en: "Reason is a form of courage", ar: "العقل ضرب من الشجاعة" },
    strengths: [
      { en: "Intellectual courage", ar: "شجاعة فكرية" },
      { en: "Independence", ar: "استقلالية" },
      { en: "Precision", ar: "دقّة" },
      { en: "Bridging worlds", ar: "الجمع بين عوالم مختلفة" }
    ],
    blindspots: [
      { en: "Independence becoming isolation.", ar: "استقلال يتحول إلى عزلة." },
      { en: "Rigor without warmth.", ar: "دقّة بلا دفء." }
    ],
    decision_style: {
      en: "You decide by questioning inherited answers and following your own reasoning.",
      ar: "أنت تقرر بمساءلة الأجوبة الموروثة واتباع عقلانيتك."
    },
    collaboration_style: {
      en: "You engage through argument, and you respect those who meet you with rigor.",
      ar: "أنت تتعامل عبر الحجاج، وتحترم من يلاقيك بالدقة."
    },
    growth: {
      en: "Pair rigor with humility; truth persuades more when it arrives with warmth.",
      ar: "اقرن الدقة بالتواضع؛ فالحقيقة تقنع أكثر حين تأتي بدفء."
    },
    difference: {
      en: "Unlike harmonizers, you prefer a hard truth to a comfortable consensus.",
      ar: "على عكس الموفّقين، تفضّل الحقيقة الصعبة على الإجماع المريح."
    },
    historical_note: {
      en: "Sources: Leaman, 'Averroes' and Encyclopaedia of Islam. Status: needs verification.",
      ar: "المصادر: ليمان «ابن رشد» ودائرة المعارف الإسلامية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-007",
    names: { en: "Rabi'a al-Adawiyya", ar: "رابعة العدوية" }, aliases: ["Rabi'a of Basra"],
    years: "c. 714–801", region: "Basra", era: "8th century",
    identity_category: "arab_historical", identity_note: "Arab mystic of Basra, venerated as a Sufi saint.",
    role: "Mystic and poet",
    bio: {
      en: "Early Sufi figure of Basra associated with the ideal of selfless divine love, later commemorated in hagiographic tradition.",
      ar: "شخصية صوفية مبكرة من البصرة ارتبطت بمثال الحب الإلهي الخالص، وحفظتها كتب المناقب لاحقاً."
    },
    contributions: ["Emblematic figure of selfless love in Sufi tradition", "Subject of later hagiographic literature"],
    sources: [
      { title: "Rabi'a the Mystic", author: "Margaret Smith", type: "academic_book", verified: false, supports: "Life and legacy" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "high", review_status: "excluded_religious_figure", review_notes: "Venerated religious figure; excluded from entertainment matching per policy.", version: "2.0.0", allowed_match: false,
    profile: { planning: 0.5, decisiveness: 0.4, collaboration: 0.7, independence: 0.6, exploration: 0.3, risk_assessment: 0.3 },
    profile_type: "product_interpretation",
    profile_rationale: "Retained for archive completeness only; not used in matching.",
    epithet: { en: "The Constant Heart", ar: "القلب الثابت" },
    tagline: { en: "Love as a discipline", ar: "الحب كمنهج حياة" },
    strengths: [{ en: "Sincerity", ar: "صدق" }, { en: "Constancy", ar: "ثبات" }],
    blindspots: [{ en: "Self-denial.", ar: "إنكار الذات." }, { en: "Unattainable standards for the heart.", ar: "معايير مستحيلة للقلب." }],
    decision_style: { en: "Decisions rooted in devotion and inner constancy.", ar: "قرارات متجذرة في الإخلاص والثبات الداخلي." },
    collaboration_style: { en: "Connects through sincerity and service.", ar: "يتواصل عبر الصدق والخدمة." },
    growth: { en: "Love yourself as steadily as you love your ideals.", ar: "أحبب نفسك بثباتك الذي تحب به مُثُلك." },
    difference: { en: "Excluded from matching (religious figure).", ar: "مستبعدة من المطابقة (شخصية دينية)." },
    historical_note: { en: "Excluded from matching per religious-figure policy.", ar: "مستبعدة من المطابقة وفق سياسة الشخصيات الدينية." }
  },
  {
    person_id: "P-008",
    names: { en: "Omar Khayyam", ar: "عمر الخيام" }, aliases: ["Ghiyath al-Din Abu al-Fath Umar ibn Ibrahim"],
    years: "1048–1131", region: "Nishapur (Persia)", era: "11th–12th century (Seljuk)",
    identity_category: "related_civilization", identity_note: "Persian mathematician, astronomer and poet.",
    role: "Mathematician, astronomer and poet",
    bio: {
      en: "Persian mathematician and astronomer who reformed the calendar and whose quatrains, the Rubaiyat, meditate on transience, beauty and uncertainty.",
      ar: "رياضي وفلكي فارسي صحّح التقويم، وتتأمل رباعياته في الفناء والجمال والغموض."
    },
    contributions: ["Reform of the solar calendar (Jalali)", "The Rubaiyat, a celebrated quatrain cycle"],
    sources: [
      { title: "The Wine of Wisdom: Omar Khayyam", author: "Mehdi Aminrazavi", type: "academic_book", verified: false, supports: "Life and works" },
      { title: "Encyclopaedia Iranica", author: "Ed. Ehsan Yarshater", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.35, decisiveness: 0.4, collaboration: 0.4, independence: 0.75, exploration: 0.8, risk_assessment: 0.3 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his combined scientific rigor and poetic skepticism.",
    epithet: { en: "The Contemplative Free Spirit", ar: "الروح الحرة المتأملة" },
    tagline: { en: "Wonder is a way of knowing", ar: "الدهشة طريق إلى المعرفة" },
    strengths: [
      { en: "Wonder", ar: "دهشة" },
      { en: "Honesty about uncertainty", ar: "صدق تجاه الغموض" },
      { en: "Poetic insight", ar: "بصيرة شاعرية" },
      { en: "Living in the present", ar: "عيش اللحظة" }
    ],
    blindspots: [
      { en: "Drift becoming melancholy.", ar: "تيّه يتحول إلى حزن." },
      { en: "Avoiding commitment to protect freedom.", ar: "تجنّب الالتزام حفاظاً على الحرية." }
    ],
    decision_style: {
      en: "You decide with open eyes, holding certainty lightly.",
      ar: "أنت تقرر بعينين مفتوحتين، ممسكاً باليقين بخفّة."
    },
    collaboration_style: {
      en: "You connect through shared wonder rather than shared plans.",
      ar: "أنت تتواصل عبر الدهشة المشتركة لا الخطط المشتركة."
    },
    growth: {
      en: "Choose something to build anyway; joy deepens when you stay to watch it grow.",
      ar: "اختر شيئاً لتبنيه رغم ذلك؛ فالفرح يتعمق حين تبقى لتراه ينمو."
    },
    difference: {
      en: "Unlike order-builders, you question whether the pattern holds at all.",
      ar: "على عكس بناة النظام، تتساءل إن كان النمط صامداً أصلاً."
    },
    historical_note: {
      en: "Sources: Aminrazavi, 'The Wine of Wisdom' and Encyclopaedia Iranica. Status: needs verification.",
      ar: "المصادر: أمين رضوي «خمرة الحكمة» ودائرة المعارف الإيرانية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-009",
    names: { en: "Al-Khwarizmi", ar: "الخوارزمي" }, aliases: ["Muhammad ibn Musa al-Khwarizmi"],
    years: "c. 780–850", region: "Baghdad (House of Wisdom)", era: "9th century (Abbasid)",
    identity_category: "arab_cultural_sphere", identity_note: "Persian scholar working in Arabic in Baghdad.",
    role: "Mathematician, astronomer and geographer",
    bio: {
      en: "Scholar of Baghdad's House of Wisdom whose work on algebra gave the discipline its name and whose name survives in the word 'algorithm'.",
      ar: "عالم من بيت الحكمة في بغداد أعطى علم الجبر اسمه، وبقي اسمه حياً في كلمة «الخوارزمية»."
    },
    contributions: ["Al-Kitab al-Mukhtasar fi Hisab al-Jabr (algebra)", "Foundational work on the decimal positional system"],
    sources: [
      { title: "The Algebra of al-Khwarizmi", author: "Roshdi Rashed", type: "academic_book", verified: false, supports: "Mathematical work" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.95, decisiveness: 0.55, collaboration: 0.5, independence: 0.65, exploration: 0.5, risk_assessment: 0.6 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his methodical systematization of procedures.",
    epithet: { en: "The Method Builder", ar: "واضع المنهج" },
    tagline: { en: "Name the pattern, then repeat it", ar: "سمِّ النمط ثم كرّره" },
    strengths: [
      { en: "Methodical clarity", ar: "وضوح منهجي" },
      { en: "Turning chaos into steps", ar: "تحويل الفوضى إلى خطوات" },
      { en: "Foundational thinking", ar: "تفكير تأسيسي" },
      { en: "Patience with detail", ar: "صبر على التفاصيل" }
    ],
    blindspots: [
      { en: "Preferring the method over the person.", ar: "تفضيل المنهج على الشخص." },
      { en: "Undervaluing what can't be formalized.", ar: "التقليل مما لا يمكن صياغته." }
    ],
    decision_style: {
      en: "You decide by reducing a problem to repeatable steps.",
      ar: "أنت تقرر باختزال المشكلة إلى خطوات قابلة للتكرار."
    },
    collaboration_style: {
      en: "You share through systems others can pick up and run.",
      ar: "أنت تشارك عبر أنظمة يستطيع الآخرون حملها وتشغيلها."
    },
    growth: {
      en: "Let some things stay unformalized; not every truth fits a formula.",
      ar: "اترك بعض الأشياء بلا صياغة؛ فليس كل حقيقة تصلح لمعادلة."
    },
    difference: {
      en: "Unlike improvisers, you believe most problems yield to a clear procedure.",
      ar: "على عكس المرتجلين، تؤمن بأن معظم المشكلات تنحل بإجراء واضح."
    },
    historical_note: {
      en: "Sources: Rashed, 'The Algebra of al-Khwarizmi' and Encyclopaedia of Islam. Status: needs verification.",
      ar: "المصادر: رشيد «جبر الخوارزمي» ودائرة المعارف الإسلامية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-010",
    names: { en: "Ibn Khaldun", ar: "ابن خلدون" }, aliases: ["Abd al-Rahman ibn Muhammad ibn Khaldun"],
    years: "1332–1406", region: "Tunis, Cairo", era: "14th century",
    identity_category: "arab_historical", identity_note: "Arab historian and statesman of North Africa.",
    role: "Historian, sociologist and statesman",
    bio: {
      en: "North African scholar and statesman whose Muqaddimah pioneered a systematic, cause-seeking approach to history and society, anticipating social science.",
      ar: "عالم ورجل دولة من شمال أفريقيا وضعت «مقدمته» منهجاً منظّمياً سبّبياً للتاريخ والمجتمع، مستبقاً العلوم الاجتماعية."
    },
    contributions: ["The Muqaddimah (Prolegomena) to his universal history", "Theory of asabiyya (social cohesion)"],
    sources: [
      { title: "Ibn Khaldun: An Intellectual Biography", author: "Robert Irwin", type: "academic_book", verified: false, supports: "Life and thought" },
      { title: "The Muqaddimah", author: "Tr. Franz Rosenthal", type: "edited_primary_source", verified: false, supports: "Primary work" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.8, decisiveness: 0.6, collaboration: 0.55, independence: 0.75, exploration: 0.65, risk_assessment: 0.7 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his causal analysis of societies and states.",
    epithet: { en: "The Pattern Seer", ar: "رائي الأنماط" },
    tagline: { en: "Find the cause behind the rise and fall", ar: "جد السبب خلف الصعود والسقوط" },
    strengths: [
      { en: "Causal analysis", ar: "تحليل سببي" },
      { en: "Seeing the long arc", ar: "رؤية القوس الطويل" },
      { en: "Independence of mind", ar: "استقلال في الفكر" },
      { en: "Connecting theory and practice", ar: "ربط النظرية بالممارسة" }
    ],
    blindspots: [
      { en: "Seeing systems more clearly than people.", ar: "رؤية الأنظمة أوضح من الناس." },
      { en: "Detachment that reads as coldness.", ar: "انفصال يُقرأ بروداً." }
    ],
    decision_style: {
      en: "You decide by tracing causes and likely long-term consequences.",
      ar: "أنت تقرر بتتبع الأسباب والعواقب طويلة الأمد."
    },
    collaboration_style: {
      en: "You contribute the frame others use to coordinate.",
      ar: "أنت تقدّم الإطار الذي يستخدمه الآخرون للتنسيق."
    },
    growth: {
      en: "Pair your analysis with warmth; people change when they feel understood.",
      ar: "اقرن تحليلك بالدفء؛ فالناس يتغيّرون حين يشعرون بالفهم."
    },
    difference: {
      en: "Where doers act, you first ask why the pattern repeats.",
      ar: "حين يتحرك الفاعلون، تسأل أنت أولاً لماذا يتكرر النمط."
    },
    historical_note: {
      en: "Sources: Irwin, 'Ibn Khaldun' and Rosenthal's Muqaddimah. Status: needs verification.",
      ar: "المصادر: إروين «ابن خلدون» وترجمة روزنتال للمقدمة. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-011",
    names: { en: "Ibn al-Haytham (Alhazen)", ar: "ابن الهيثم" }, aliases: ["Alhazen"],
    years: "c. 965–1040", region: "Basra & Cairo", era: "10th–11th century",
    identity_category: "arab_historical", identity_note: "Arab scientist active in Basra and Egypt.",
    role: "Scientist and mathematician",
    bio: {
      en: "Pioneering scientist whose Book of Optics established experimentation as a method and explained vision through light, influencing later European science.",
      ar: "عالم رائد جعل «كتاب المناظر» التجربةَ منهجاً وفسّر الرؤية عبر الضوء، مؤثراً في العلم الأوروبي لاحقاً."
    },
    contributions: ["Kitab al-Manazir (Book of Optics)", "Early formulation of a scientific, experimental method"],
    sources: [
      { title: "Ibn al-Haytham: First Scientist", author: "Bradley Steffens", type: "academic_book", verified: false, supports: "Life and method" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.7, decisiveness: 0.6, collaboration: 0.4, independence: 0.85, exploration: 0.8, risk_assessment: 0.6 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his experimental rigor and independent inquiry.",
    epithet: { en: "The Experimental Truth-Seeker", ar: "طالب الحقيقة بالتجربة" },
    tagline: { en: "Test it before you trust it", ar: "جرّبه قبل أن تثق به" },
    strengths: [
      { en: "Experimental rigor", ar: "صرامة تجريبية" },
      { en: "Independent inquiry", ar: "بحث مستقل" },
      { en: "Patience with doubt", ar: "صبر على الشك" },
      { en: "Precision", ar: "دقّة" }
    ],
    blindspots: [
      { en: "Isolation in long solitary work.", ar: "عزلة في العمل الانفرادي الطويل." },
      { en: "Demanding proof where trust would do.", ar: "المطالبة بالبرهان حيث تكفي الثقة." }
    ],
    decision_style: {
      en: "You decide by evidence, testing assumptions before committing.",
      ar: "أنت تقرر بالدليل، مختبراً الافتراضات قبل الالتزام."
    },
    collaboration_style: {
      en: "You work best with peers who value rigor over ceremony.",
      ar: "أنت تعمل بأفضل صورة مع أقران يقدّرون الدقة على المجاملة."
    },
    growth: {
      en: "Not every truth is testable; some things are learned by trust and time.",
      ar: "ليس كل حقيقة قابلة للاختبار؛ فبعضها يُتعلَّم بالثقة والزمن."
    },
    difference: {
      en: "Unlike tradition-keepers, you privilege the experiment over authority.",
      ar: "على عكس حماة التقليد، تقدّم التجربة على السلطة."
    },
    historical_note: {
      en: "Sources: Steffens, 'Ibn al-Haytham' and Encyclopaedia of Islam. Status: needs verification.",
      ar: "المصادر: ستيفنز «ابن الهيثم» ودائرة المعارف الإسلامية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-012",
    names: { en: "Al-Biruni", ar: "البيروني" }, aliases: ["Abu Rayhan al-Biruni"],
    years: "973–1048", region: "Khwarezm & Ghazni", era: "10th–11th century",
    identity_category: "arab_cultural_sphere", identity_note: "Persian polymath who wrote chiefly in Arabic.",
    role: "Polymath: astronomer, geographer, Indologist",
    bio: {
      en: "Persian polymath who measured the earth, catalogued cultures, and produced a pioneering study of India, combining observation with disciplined scholarship.",
      ar: "موسوعي فارسي قاس الأرض وفهرس الثقافات وقدّم دراسة رائدة عن الهند، جامعاً بين الملاحظة والعلم المنضبط."
    },
    contributions: ["Kitab al-Hind (study of India)", "Measurements of Earth's radius and geodesy"],
    sources: [
      { title: "Al-Biruni: Master Astronomer and Muslim Scholar", author: "Bill Scheppler", type: "academic_book", verified: false, supports: "Life and science" },
      { title: "Encyclopaedia Iranica", author: "Ed. Ehsan Yarshater", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.85, decisiveness: 0.6, collaboration: 0.5, independence: 0.8, exploration: 0.85, risk_assessment: 0.55 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his systematic, cross-cultural scholarship.",
    epithet: { en: "The Measuring Mind", ar: "العقل القائس" },
    tagline: { en: "Know the world by measuring it", ar: "اعرف العالم بقياسه" },
    strengths: [
      { en: "Cross-cultural curiosity", ar: "فضول عبر الثقافات" },
      { en: "Observational precision", ar: "دقة في الملاحظة" },
      { en: "Disciplined scholarship", ar: "علم منضبط" },
      { en: "Synthesis of fields", ar: "توليف بين المجالات" }
    ],
    blindspots: [
      { en: "Depth that isolates you from peers.", ar: "عمق يعزلك عن الأقران." },
      { en: "Measuring what is better felt.", ar: "قياس ما يُحسّ أفضل من أن يُقاس." }
    ],
    decision_style: {
      en: "You decide by gathering the widest evidence before concluding.",
      ar: "أنت تقرر بجمع أوسع الأدلة قبل الاستنتاج."
    },
    collaboration_style: {
      en: "You bridge cultures and disciplines, translating between worlds.",
      ar: "أنت تجسر بين الثقافات والتخصصات، مترجماً بين العوالم."
    },
    growth: {
      en: "Some things are known by presence, not measurement; leave room for both.",
      ar: "بعض الأشياء تُعرف بالحضور لا بالقياس؛ اترك مساحة للاثنين."
    },
    difference: {
      en: "Unlike specialists, your strength is the map that connects many fields.",
      ar: "على عكس المتخصصين، قوتك في الخريطة التي تصل حقولاً كثيرة."
    },
    historical_note: {
      en: "Sources: Scheppler, 'Al-Biruni' and Encyclopaedia Iranica. Status: needs verification.",
      ar: "المصادر: شبلر «البيروني» ودائرة المعارف الإيرانية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-013",
    names: { en: "Fatima al-Fihri", ar: "فاطمة الفهرية" }, aliases: ["Umm al-Banin"],
    years: "c. 800–880", region: "Kairouan & Fez", era: "9th century",
    identity_category: "arab_historical", identity_note: "Arab woman credited with founding the al-Qarawiyyin mosque-college in Fez; attribution rests mainly on later sources.",
    role: "Founder and patron",
    bio: {
      en: "Traditionally credited with founding the al-Qarawiyyin mosque and study center in Fez with her inheritance, an institution later regarded as among the oldest universities.",
      ar: "تُنسب إليها تقليدياً إقامة جامع القرويين ومركزه العلمي في فاس من ميراثها، وهي مؤسسة تُعدّ لاحقاً من أقدم الجامعات."
    },
    contributions: ["Founding of al-Qarawiyyin in Fez (attributed)", "Endowment supporting scholarship"],
    sources: [
      { title: "Encyclopaedia of Islam, 2nd ed. ('al-Karawiyyin')", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Institution history; founder attribution from later sources" },
      { title: "Fez and its University", author: "Historical survey (unverified)", type: "secondary_source", verified: false, supports: "General history" }
    ],
    source_quality: "later_source_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Founder attribution mainly from later chronicles; flagged.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.75, decisiveness: 0.55, collaboration: 0.75, independence: 0.55, exploration: 0.4, risk_assessment: 0.5 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from her legacy as an institution-builder and patron.",
    epithet: { en: "The Institution Builder", ar: "بانية المؤسسات" },
    tagline: { en: "Build what outlives you", ar: "ابنِ ما يعيش بعدك" },
    strengths: [
      { en: "Long-term vision", ar: "رؤية طويلة الأمد" },
      { en: "Quiet generosity", ar: "كرم هادئ" },
      { en: "Investing in knowledge", ar: "استثمار في المعرفة" },
      { en: "Community building", ar: "بناء للمجتمع" }
    ],
    blindspots: [
      { en: "Self-effacement that hides your role.", ar: "تواضع يخفي دورك." },
      { en: "Building for others before yourself.", ar: "البناء للآخرين قبل نفسك." }
    ],
    decision_style: {
      en: "You decide with legacy in mind, choosing what will last.",
      ar: "أنت تقرر والإرث في ذهنك، مختاراً ما سيدوم."
    },
    collaboration_style: {
      en: "You enable others by building the structures they work within.",
      ar: "أنت تمكّن الآخرين ببناء الهياكل التي يعملون داخلها."
    },
    growth: {
      en: "Claim credit for what you build; visible example inspires as much as the work.",
      ar: "انسب لنفسك ما تبنيه؛ فالقدوة الظاهرة تُلهم بقدر العمل."
    },
    difference: {
      en: "Where conquerors take, you endow.",
      ar: "حين يأخذ الفاتحون، أنت توقف وتؤسس."
    },
    historical_note: {
      en: "Sources: Encyclopaedia of Islam. Founder attribution rests on later sources; needs verification.",
      ar: "المصادر: دائرة المعارف الإسلامية. نسب التأسيس قائم على مصادر متأخرة؛ بانتظار التحقق."
    }
  },
  {
    person_id: "P-014",
    names: { en: "Al-Mutanabbi", ar: "المتنبي" }, aliases: ["Abu al-Tayyib Ahmad ibn al-Husayn"],
    years: "915–965", region: "Iraq & Syria", era: "10th century",
    identity_category: "arab_historical", identity_note: "Arab poet, among the most celebrated in the Arabic canon.",
    role: "Poet",
    bio: {
      en: "Celebrated Arab poet whose panegyrics and pride-filled verse set a standard for classical Arabic poetry and whose self-confidence became legendary.",
      ar: "شاعر عربي شهير وضعت مدائحه واعتزازه بنفسه معياراً للشعر العربي الكلاسيكي، وصارت ثقته بنفسه مضرباً للمثل."
    },
    contributions: ["Corpus of classical Arabic panegyric and pride poetry", "Enduring stylistic influence on Arabic verse"],
    sources: [
      { title: "Al-Mutanabbi: Voice of the Abbasid Poetic Ideal", author: "Margaret Larkin", type: "academic_book", verified: false, supports: "Life and poetry" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.4, decisiveness: 0.8, collaboration: 0.5, independence: 0.85, exploration: 0.55, risk_assessment: 0.45 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his bold, self-assured poetic persona.",
    epithet: { en: "The Bold Voice", ar: "الصوت الجريء" },
    tagline: { en: "Say it with the force it deserves", ar: "قُلها بالقوة التي تستحقها" },
    strengths: [
      { en: "Self-confidence", ar: "ثقة بالنفس" },
      { en: "Eloquent expression", ar: "تعبير بليغ" },
      { en: "Courage to stand out", ar: "شجاعة التميّز" },
      { en: "Independence of spirit", ar: "استقلال الروح" }
    ],
    blindspots: [
      { en: "Pride that strains relationships.", ar: "اعتزاز يجهد العلاقات." },
      { en: "Boldness without a patient audience.", ar: "جرأة بلا جمهور صبور." }
    ],
    decision_style: {
      en: "You decide from conviction and voice it without hedging.",
      ar: "أنت تقرر من قناعة وتعلنها بلا مواربة."
    },
    collaboration_style: {
      en: "You inspire through force of voice, and you chafe under smallness.",
      ar: "أنت تُلهم بقوة الصوت، وتضيق ذرعاً بالصغائر."
    },
    growth: {
      en: "Boldness opens ears, but listening keeps them; temper pride with curiosity.",
      ar: "الجرأة تفتح الآذان، لكن الاستماع يُبقيها؛ خفّف الاعتزاز بالفضول."
    },
    difference: {
      en: "Unlike quiet builders, you lead with the word.",
      ar: "على عكس البناة الصامتين، أنت تقود بالكلمة."
    },
    historical_note: {
      en: "Sources: Larkin, 'Al-Mutanabbi' and Encyclopaedia of Islam. Status: needs verification.",
      ar: "المصادر: لاركن «المتنبي» ودائرة المعارف الإسلامية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-015",
    names: { en: "Ziryab", ar: "زرياب" }, aliases: ["Abu al-Hasan Ali ibn Nafi"],
    years: "789–857", region: "Baghdad & Córdoba", era: "9th century (Al-Andalus)",
    identity_category: "arab_cultural_sphere", identity_note: "Origin debated (Persian/Kurdish/Iraqi); rose to fame in the courts of Baghdad and Córdoba.",
    role: "Musician, stylist and tastemaker",
    bio: {
      en: "Musician and tastemaker who transformed the court culture of Córdoba, shaping music, cuisine, fashion and etiquette in ways that outlived him.",
      ar: "موسيقي وصانع ذوق غيّر ثقافة بلاط قرطبة، مؤثراً في الموسيقى والطعام واللباس والآداب بما تجاوز عصره."
    },
    contributions: ["Musical innovations and the Córdoba music school", "Cultural influence on cuisine, fashion and etiquette"],
    sources: [
      { title: "Ziryab: The Man and the Myth", author: "Dwight Reynolds (in edited volume)", type: "academic_chapter", verified: false, supports: "Life and cultural role" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Legend and fact interwoven; flagged.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.55, decisiveness: 0.5, collaboration: 0.65, independence: 0.6, exploration: 0.85, risk_assessment: 0.35 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his boundary-crossing innovation in taste and art.",
    epithet: { en: "The Tastemaker", ar: "صانع الذوق" },
    tagline: { en: "Style is a form of thought", ar: "الأناقة شكل من التفكير" },
    strengths: [
      { en: "Aesthetic innovation", ar: "ابتكار جمالي" },
      { en: "Cultural synthesis", ar: "توليف ثقافي" },
      { en: "Crossing boundaries", ar: "عبور الحدود" },
      { en: "Refining the everyday", ar: "تهذيب اليومي" }
    ],
    blindspots: [
      { en: "Perfectionism about taste.", ar: "سعي إلى الكمال في الذوق." },
      { en: "Restlessness between scenes.", ar: "قلق بين الأوساط." }
    ],
    decision_style: {
      en: "You decide by feel and taste, trusting a sense others learn to value.",
      ar: "أنت تقرر بالإحساس والذوق، واثقاً بحاسة يتعلم الآخرون تقديرها."
    },
    collaboration_style: {
      en: "You elevate a group by raising its standards and its atmosphere.",
      ar: "أنت ترتقي بمجموعة عبر رفع معاييرها وأجوائها."
    },
    growth: {
      en: "Taste is powerful; ground it in craft so style becomes substance.",
      ar: "الذوق قوة؛ أرسِه في حرفة كي تتحول الأناقة إلى جوهر."
    },
    difference: {
      en: "Unlike system-builders, you change a culture through its textures.",
      ar: "على عكس بناة الأنظمة، تغيّر ثقافة عبر نسيجها وتفاصيلها."
    },
    historical_note: {
      en: "Sources: Reynolds, 'Ziryab' and Encyclopaedia of Islam. Legend/fact boundary flagged.",
      ar: "المصادر: رينولدز «زرياب» ودائرة المعارف الإسلامية. جرى التنبيه إلى تداخل الأسطورة والحقيقة."
    }
  },
  {
    person_id: "P-016",
    names: { en: "Shajar al-Durr", ar: "شجر الدر" }, aliases: ["Shajarat al-Durr"],
    years: "d. 1257", region: "Egypt", era: "13th century (early Mamluk)",
    identity_category: "arab_cultural_sphere", identity_note: "Non-Arab (Turkic/Armenian origin) who became the first female ruler of Egypt in the Mamluk period.",
    role: "Ruler",
    bio: {
      en: "First woman to rule Egypt after the Ayyubid collapse, Shajar al-Durr briefly held the sultanate and helped establish the Mamluk state.",
      ar: "أول امرأة تحكم مصر بعد انهيار الأيوبيين؛ تولت شجر الدر السلطنة لفترة وجيزة وساعدت في تأسيس دولة المماليك."
    },
    contributions: ["Briefly held the sultanate of Egypt", "Role in the transition to Mamluk rule"],
    sources: [
      { title: "The Mamluk Sultanate from a Gendered Perspective", author: "ed. academic volume (unverified)", type: "secondary_source", verified: false, supports: "Rule and context" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "medium", review_status: "needs_fact_check", review_notes: "Gender and power context; handle carefully.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.7, decisiveness: 0.9, collaboration: 0.6, independence: 0.75, exploration: 0.35, risk_assessment: 0.7 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from her decisive hold on power in a constrained context.",
    epithet: { en: "The Steadfast Sovereign", ar: "السلطانة الثابتة" },
    tagline: { en: "Hold the seat others thought impossible", ar: "اثبت في مقعد ظنّه الآخرون مستحيلاً" },
    strengths: [
      { en: "Decisiveness", ar: "حسم" },
      { en: "Strategic patience", ar: "صبر استراتيجي" },
      { en: "Navigating constraint", ar: "الإبحار عبر القيود" },
      { en: "Institutional instinct", ar: "حس مؤسسي" }
    ],
    blindspots: [
      { en: "Bearing pressure without a trusted inner circle.", ar: "تحمّل الضغط بلا حلقة ثقة." },
      { en: "Hard choices that isolate you.", ar: "قرارات صعبة تعزلك." }
    ],
    decision_style: {
      en: "You decide firmly under constraint, protecting the whole even at cost.",
      ar: "أنت تقرر بحزم تحت القيود، حامياً الكل حتى بكلفة."
    },
    collaboration_style: {
      en: "You lead through alliances, holding power with few dependable allies.",
      ar: "أنت تقود عبر التحالفات، ممسكاً بالسلطة مع حلفاء قلائل."
    },
    growth: {
      en: "Build a circle you can trust; even the firmest hand needs steady partners.",
      ar: "ابنِ حلقة تثق بها؛ فحتى اليد الأكثر ثباتاً تحتاج شركاء أوفياء."
    },
    difference: {
      en: "Where builders raise institutions, you hold a seat in a storm.",
      ar: "حين يبني البنّاؤون مؤسسات، أنت تمسك مقعداً في عاصفة."
    },
    historical_note: {
      en: "Sources: Encyclopaedia of Islam and secondary scholarship. Status: needs verification.",
      ar: "المصادر: دائرة المعارف الإسلامية ودراسات ثانوية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-017",
    names: { en: "Al-Kindi", ar: "الكندي" }, aliases: ["Ya'qub ibn Ishaq al-Kindi"],
    years: "c. 801–873", region: "Kufa & Baghdad", era: "9th century (Abbasid)",
    identity_category: "arab_historical", identity_note: "Arab philosopher, the first major figure of the Arabic philosophical tradition.",
    role: "Philosopher and scientist",
    bio: {
      en: "First major philosopher of the Arabic tradition, Al-Kindi reconciled Greek philosophy with Islamic thought and wrote across philosophy, mathematics and medicine.",
      ar: "أول فيلسوف كبير في التراث العربي؛ واءم الكندي بين الفلسفة اليونانية والفكر الإسلامي وكتب في الفلسفة والرياضيات والطب."
    },
    contributions: ["Foundational Arabic philosophical corpus", "Works on mathematics, optics and medicine"],
    sources: [
      { title: "Al-Kindi: The Philosopher of the Arabs", author: "George N. Atiyeh (ed.)", type: "academic_book", verified: false, supports: "Life and thought" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.7, decisiveness: 0.55, collaboration: 0.55, independence: 0.75, exploration: 0.75, risk_assessment: 0.55 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his synthesizing, boundary-bridging scholarship.",
    epithet: { en: "The Bridging Philosopher", ar: "الفيلسوف الجسور" },
    tagline: { en: "Reconcile what others keep apart", ar: "وائم ما يُبقي الآخرون بينه انفصالاً" },
    strengths: [
      { en: "Synthesis", ar: "توليف" },
      { en: "Intellectual openness", ar: "انفتاح فكري" },
      { en: "Breadth", ar: "اتساع" },
      { en: "Clarity", ar: "وضوح" }
    ],
    blindspots: [
      { en: "Spreading across too many fields.", ar: "التشتت بين حقول كثيرة." },
      { en: "Bridging at the cost of a firm stand.", ar: "الجسر على حساب موقف حاسم." }
    ],
    decision_style: {
      en: "You decide by finding the common principle beneath opposing views.",
      ar: "أنت تقرر بإيجاد المبدأ المشترك تحت الآراء المتعارضة."
    },
    collaboration_style: {
      en: "You connect traditions and people who assume they can't meet.",
      ar: "أنت تصل بين تقاليد وأشخاص يظنون أن اللقاء مستحيل."
    },
    growth: {
      en: "Bridges need firm ground on both ends; state your own position clearly.",
      ar: "الجسور تحتاج أرضاً صلبة عند طرفيها؛ أعلن موقفك بوضوح."
    },
    difference: {
      en: "Unlike partisans, you see the truth distributed across camps.",
      ar: "على عكس المتحزبين، ترى الحقيقة موزعة بين المعسكرات."
    },
    historical_note: {
      en: "Sources: Atiyeh, 'Al-Kindi' and Encyclopaedia of Islam. Status: needs verification.",
      ar: "المصادر: عطية «الكندي» ودائرة المعارف الإسلامية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-018",
    names: { en: "Al-Farabi", ar: "الفارابي" }, aliases: ["Abu Nasr al-Farabi"],
    years: "c. 872–950", region: "Baghdad & Aleppo", era: "9th–10th century",
    identity_category: "arab_cultural_sphere", identity_note: "Origin debated (Turkic/Persian); worked within the Arabic philosophical tradition.",
    role: "Philosopher and political thinker",
    bio: {
      en: "Philosopher known as the 'Second Teacher' after Aristotle, Al-Farabi wrote on logic, music and the ideal political community.",
      ar: "فيلسوف لُقّب بـ«المعلم الثاني» بعد أرسطو؛ كتب الفارابي في المنطق والموسيقى والمدينة الفاضلة."
    },
    contributions: ["Al-Madina al-Fadila (The Virtuous City)", "Works on logic, music and political philosophy"],
    sources: [
      { title: "Al-Farabi and His School", author: "Ian Richard Netton", type: "academic_book", verified: false, supports: "Life and thought" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Origin debated; identity note present.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.75, decisiveness: 0.55, collaboration: 0.65, independence: 0.7, exploration: 0.65, risk_assessment: 0.45 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his systematic political and ethical vision.",
    epithet: { en: "The Architect of the Ideal", ar: "مهندس المدينة الفاضلة" },
    tagline: { en: "Design the community before you live in it", ar: "صمّم المدينة قبل أن تسكنها" },
    strengths: [
      { en: "Systematic vision", ar: "رؤية منهجية" },
      { en: "Ethical clarity", ar: "وضوح أخلاقي" },
      { en: "Breadth of mind", ar: "اتساع في الفكر" },
      { en: "Teaching through structure", ar: "تعليم عبر البنية" }
    ],
    blindspots: [
      { en: "Ideals that outrun human messiness.", ar: "مُثُل تتجاوز فوضى البشر." },
      { en: "Preferring the blueprint to the living room.", ar: "تفضيل المخطط على الواقع المعاش." }
    ],
    decision_style: {
      en: "You decide against an ideal, asking what the best version looks like.",
      ar: "أنت تقرر وفق مثال أعلى، سائلاً كيف تبدو النسخة الأفضل."
    },
    collaboration_style: {
      en: "You gather people around a shared picture of the good.",
      ar: "أنت تجمع الناس حول صورة مشتركة للخير."
    },
    growth: {
      en: "Let reality revise the blueprint; the ideal is a compass, not a cage.",
      ar: "دع الواقع يعدّل المخطط؛ فالمثال بوصلة لا قفص."
    },
    difference: {
      en: "Unlike improvisers, you begin from the design and work outward.",
      ar: "على عكس المرتجلين، تبدأ من التصميم ثم تبني."
    },
    historical_note: {
      en: "Sources: Netton, 'Al-Farabi and His School' and Encyclopaedia of Islam. Status: needs verification.",
      ar: "المصادر: نيتون «الفارابي ومدرسته» ودائرة المعارف الإسلامية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-019",
    names: { en: "Ibn al-Nafis", ar: "ابن النفيس" }, aliases: ["Ala al-Din Abu al-Hasan Ali ibn Abi al-Hazm"],
    years: "1213–1288", region: "Damascus & Cairo", era: "13th century",
    identity_category: "arab_historical", identity_note: "Arab physician of Damascus and Cairo.",
    role: "Physician and scholar",
    bio: {
      en: "Arab physician who first described the pulmonary circulation of the blood, centuries before it was established in Europe.",
      ar: "طبيب عربي وصف لأول مرة الدورة الدموية الصغرى، قبل قرون من إثباتها في أوروبا."
    },
    contributions: ["Description of pulmonary circulation", "Commentaries on Ibn Sina's Canon"],
    sources: [
      { title: "Ibn al-Nafis and the Discovery of Pulmonary Circulation", author: "Academic article (unverified)", type: "secondary_source", verified: false, supports: "Medical discovery" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.75, decisiveness: 0.6, collaboration: 0.5, independence: 0.8, exploration: 0.7, risk_assessment: 0.55 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his independent medical observation and scholarship.",
    epithet: { en: "The Observant Healer", ar: "الطبيب الملاحظ" },
    tagline: { en: "Look again at what everyone missed", ar: "انظر من جديد إلى ما فات الجميع" },
    strengths: [
      { en: "Careful observation", ar: "ملاحظة دقيقة" },
      { en: "Independent conclusion", ar: "استنتاج مستقل" },
      { en: "Depth in a field", ar: "عمق في التخصص" },
      { en: "Patience", ar: "صبر" }
    ],
    blindspots: [
      { en: "Work that goes unrecognized in its time.", ar: "عمل لا يُعترف به في زمنه." },
      { en: "Detail over communication.", ar: "التفاصيل على حساب التواصل." }
    ],
    decision_style: {
      en: "You decide from what you observe, even when it contradicts authority.",
      ar: "أنت تقرر مما تلاحظه، حتى حين يخالف السلطة."
    },
    collaboration_style: {
      en: "You contribute depth quietly and value peers who verify rather than flatter.",
      ar: "أنت تساهم بالعمق بهدوء وتقدّر من يدقق بدل أن يجاملك."
    },
    growth: {
      en: "Share your findings while they can help; truth delayed is help withheld.",
      ar: "شارك نتائجك وهي قادرة على النفع؛ فالحقيقة المؤجلة مساعدة محجوزة."
    },
    difference: {
      en: "Unlike bold voices, you let the observation speak for you.",
      ar: "على عكس الأصوات الجريئة، تدع الملاحظة تتحدث عنك."
    },
    historical_note: {
      en: "Sources: Encyclopaedia of Islam and secondary scholarship. Status: needs verification.",
      ar: "المصادر: دائرة المعارف الإسلامية ودراسات ثانوية. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-020",
    names: { en: "Wallada bint al-Mustakfi", ar: "ولادة بنت المستكفي" }, aliases: ["Wallada of Córdoba"],
    years: "994–1091", region: "Córdoba (Al-Andalus)", era: "11th century",
    identity_category: "arab_historical", identity_note: "Andalusian Arab poet and Umayyad princess.",
    role: "Poet and patron",
    bio: {
      en: "Umayyad princess and poet of Córdoba who ran a celebrated literary salon and wrote candid, self-possessed verse rare for its frankness.",
      ar: "أميرة أموية وشاعرة من قرطبة أدارت مجلساً أدبياً شهيراً وكتبت شعراً صريحاً واثقاً نادراً في جرأته."
    },
    contributions: ["Candid poetic corpus", "Patronage of a literary salon in Córdoba"],
    sources: [
      { title: "Women Poets of Al-Andalus", author: "academic anthology (unverified)", type: "secondary_source", verified: false, supports: "Poetry and role" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "medium", review_status: "needs_fact_check", review_notes: "Frank verse and gender context; handle with care.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.35, decisiveness: 0.55, collaboration: 0.7, independence: 0.8, exploration: 0.65, risk_assessment: 0.35 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from her independence, expressiveness and salon leadership.",
    epithet: { en: "The Free Voice", ar: "الصوت الحر" },
    tagline: { en: "Belong to no one but your truth", ar: "لا تنتسب إلا لحقيقتك" },
    strengths: [
      { en: "Self-possession", ar: "تماسك ذاتي" },
      { en: "Frank expression", ar: "تعبير صريح" },
      { en: "Gathering creative circles", ar: "جمع الدوائر الإبداعية" },
      { en: "Independence", ar: "استقلالية" }
    ],
    blindspots: [
      { en: "Freedom that refuses needed bonds.", ar: "حرية ترفض روابط لازمة." },
      { en: "Frankness that wounds the unprepared.", ar: "صراحة تجرح غير المستعدين." }
    ],
    decision_style: {
      en: "You decide by your own truth and say it plainly.",
      ar: "أنت تقرر وفق حقيقتك وتقولها بوضوح."
    },
    collaboration_style: {
      en: "You lead salons rather than hierarchies, gathering peers as equals.",
      ar: "أنت تقود المجالس لا الهياكل، جامعاً الأقران على قدم المساواة."
    },
    growth: {
      en: "Freedom grows when chosen; anchor it in commitments you actually want.",
      ar: "الحرية تنمو حين تُختار؛ أرسِها في التزامات تريدها حقاً."
    },
    difference: {
      en: "Unlike courtiers, you refuse to trade voice for position.",
      ar: "على عكس الحاشية، ترفض مقايضة الصوت بالمكانة."
    },
    historical_note: {
      en: "Sources: Encyclopaedia of Islam and Andalusian poetry scholarship. Status: needs verification.",
      ar: "المصادر: دائرة المعارف الإسلامية ودراسات الشعر الأندلسي. الحالة: بانتظار التحقق."
    }
  },
  {
    person_id: "P-021",
    names: { en: "Al-Jahiz", ar: "الجاحظ" }, aliases: ["Abu Uthman Amr ibn Bahr"],
    years: "776–868", region: "Basra & Baghdad", era: "8th–9th century (Abbasid)",
    identity_category: "arab_historical", identity_note: "Arab prose writer and polymath of Basra.",
    role: "Writer and polymath",
    bio: {
      en: "Arab prose master and polymath whose witty, encyclopedic works on animals, society and language made him a founding figure of Arabic literary prose.",
      ar: "أستاذ النثر العربي وموسوعي جعلت أعماله الظريفة الموسوعية في الحيوان والمجتمع واللغة منه شخصية مؤسِّسة للنثر الأدبي العربي."
    },
    contributions: ["Kitab al-Hayawan (Book of Animals)", "Essays on society, language and rhetoric"],
    sources: [
      { title: "The Life and Works of al-Jahiz", author: "Charles Pellat", type: "academic_book", verified: false, supports: "Life and works" },
      { title: "Encyclopaedia of Islam, 2nd ed.", author: "Ed. P. Bearman et al. (Brill)", type: "encyclopedia", verified: false, supports: "Biography" }
    ],
    source_quality: "standard_reference_unverified", verification_status: "needs_verification",
    cultural_sensitivity: "low", review_status: "needs_fact_check", review_notes: "Unverified online.", version: "2.0.0", allowed_match: true,
    profile: { planning: 0.5, decisiveness: 0.55, collaboration: 0.55, independence: 0.7, exploration: 0.85, risk_assessment: 0.35 },
    profile_type: "product_interpretation",
    profile_rationale: "Interpretive mapping from his wide-ranging, witty curiosity.",
    epithet: { en: "The Witty Observer", ar: "الملاحظ الظريف" },
    tagline: { en: "Curiosity is a form of generosity", ar: "الفضول شكل من الكرم" },
    strengths: [
      { en: "Insatiable curiosity", ar: "فضول لا يشبع" },
      { en: "Wit and style", ar: "ظرف وأسلوب" },
      { en: "Observing the everyday", ar: "ملاحظة اليومي" },
      { en: "Breadth of knowledge", ar: "اتساع المعرفة" }
    ],
    blindspots: [
      { en: "Digression that loses the point.", ar: "استطراد يضيّع الهدف." },
      { en: "Watching life more than committing to it.", ar: "مراقبة الحياة أكثر من الالتزام بها." }
    ],
    decision_style: {
      en: "You decide by gathering everything, then letting the telling reveal the truth.",
      ar: "أنت تقرر بجمع كل شيء، ثم تدع السرد يكشف الحقيقة."
    },
    collaboration_style: {
      en: "You connect by entertaining and informing at once.",
      ar: "أنت تتواصل بالإمتاع والإفادة معاً."
    },
    growth: {
      en: "Finish the story; a well-kept point outlives a thousand digressions.",
      ar: "أنهِ الحكاية؛ فالفكرة المتقنة تعيش أطول من ألف استطراد."
    },
    difference: {
      en: "Unlike solemn scholars, you make knowledge feel alive.",
      ar: "على عكس العلماء المتجهّمين، تجعل المعرفة حيّة."
    },
    historical_note: {
      en: "Sources: Pellat, 'al-Jahiz' and Encyclopaedia of Islam. Status: needs verification.",
      ar: "المصادر: بيلا «الجاحظ» ودائرة المعارف الإسلامية. الحالة: بانتظار التحقق."
    }
  }
];

if (typeof window !== "undefined") {
  window.APP_CHARACTERS = APP_CHARACTERS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = APP_CHARACTERS;
}
