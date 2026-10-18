/* Question bank v2 — 36 enabled scenario questions, 6 per dimension. */

const APP_QUESTIONS = [
  {
    question_id: "Q-PLN-001", dimension: "planning", secondary: ["decisiveness"],
    scenario: "work",
    en: { q: "A complex project lands on your desk with a loose deadline. You start by…",
      a: "Drafting phases and milestones.", b: "Starting the most urgent part immediately.",
      c: "Meeting the team to align on who does what.", d: "Prototyping a few approaches to see what sticks." },
    ar: { q: "يصل إليك مشروع معقّد بموعد نهائي مرن. تبدأ بـ…",
      a: "وضع مراحل ومراحل زمنية.", b: "الشروع فوراً في الجزء الأكثر إلحاحاً.",
      c: "الاجتماع بالفريق للاتفاق على توزيع الأدوار.", d: "تجربة نماذج أولية لمعرفة ما ينجح." },
    scores: { a: { planning: 1 }, b: { decisiveness: 1 }, c: { collaboration: 1 }, d: { exploration: 1 } },
    rationale: "Each option expresses a different behavioral response to ambiguity.", limitations: "Forced-choice self-report; single scenario.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-PLN-002", dimension: "planning", secondary: ["risk_assessment"],
    scenario: "longterm",
    en: { q: "For the coming year, you prefer to…",
      a: "Set quarterly goals with checkpoints.", b: "Commit to one big bet and push it.",
      c: "Keep options open and revisit as things evolve.", d: "Identify the biggest risks and insure against them." },
    ar: { q: "بالنسبة للسنة القادمة، تفضّل…",
      a: "وضع أهداف فصلية بنقاط تحقق.", b: "الالتزام برهان كبير واحد والدفع نحوه.",
      c: "إبقاء الخيارات مفتوحة وإعادة النظر مع التطور.", d: "تحديد أكبر المخاطر والتحوّط منها." },
    scores: { a: { planning: 1 }, b: { decisiveness: 1 }, c: { exploration: 1 }, d: { risk_assessment: 1 } },
    rationale: "Options map to planning, decisiveness, exploration and risk.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-PLN-003", dimension: "planning", secondary: [],
    scenario: "daily",
    en: { q: "Before a busy day, you usually…",
      a: "Write a prioritized to-do list.", b: "Tackle whatever feels most urgent first.",
      c: "Check in with colleagues on shared tasks.", d: "Leave room for whatever comes up." },
    ar: { q: "قبل يوم مزدحم، أنت عادةً…",
      a: "تكتب قائمة مهام مرتّبة بالأولوية.", b: "تبدأ بما يبدو أكثر إلحاحاً.",
      c: "تتواصل مع الزملاء بشأن المهام المشتركة.", d: "تترك مساحة لما قد يطرأ." },
    scores: { a: { planning: 1 }, b: { decisiveness: 1 }, c: { collaboration: 1 }, d: { exploration: 1 } },
    rationale: "Daily behavior reveals organizing vs reacting preferences.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-PLN-004", dimension: "planning", secondary: ["collaboration"],
    scenario: "resource",
    en: { q: "You're given a limited budget for a team goal. Your first step is…",
      a: "Allocating it across needs with a plan.", b: "Spending fast on the highest-leverage item.",
      c: "Agreeing priorities with the team.", d: "Holding some back to stay flexible." },
    ar: { q: "مُنحت ميزانية محدودة لهدف الفريق. خطوتك الأولى هي…",
      a: "توزيعها على الاحتياجات وفق خطة.", b: "إنفاقها سريعاً على العنصر الأعلى أثراً.",
      c: "الاتفاق مع الفريق على الأولويات.", d: "الاحتفاظ بجزء منها للمرونة." },
    scores: { a: { planning: 1 }, b: { decisiveness: 1 }, c: { collaboration: 1 }, d: { risk_assessment: 1 } },
    rationale: "Resource allocation exposes planning vs action vs shared vs cautious styles.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-PLN-005", dimension: "planning", secondary: ["independence"],
    scenario: "team",
    en: { q: "Halfway through a project you realize you're behind schedule. You…",
      a: "Re-plan: cut scope and re-sequence.", b: "Push the team to sprint and catch up.",
      c: "Talk it through and redistribute the load.", d: "Question whether the original plan still fits." },
    ar: { q: "في منتصف المشروع تكتشف أنك متأخر عن الجدول. أنت…",
      a: "تعيد التخطيط: تقلّص النطاق وتعيد الترتيب.", b: "تدفع الفريق للانطلاق واللحاق.",
      c: "تناقش الأمر وتعيد توزيع الأعباء.", d: "تتساءل إن كانت الخطة الأصلية لا تزال مناسبة." },
    scores: { a: { planning: 1 }, b: { decisiveness: 1 }, c: { collaboration: 1 }, d: { independence: 1 } },
    rationale: "Slippage response reveals planning, drive, teamwork or independent re-evaluation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-PLN-006", dimension: "planning", secondary: [],
    scenario: "work",
    en: { q: "Your ideal work environment is one where…",
      a: "Processes are clear and repeatable.", b: "Decisions are made fast and we move.",
      c: "People support each other openly.", d: "New ideas are always welcome." },
    ar: { q: "بيئة عملك المثالية هي التي…",
      a: "تكون فيها العمليات واضحة وقابلة للتكرار.", b: "تُتّخذ فيها القرارات بسرعة ونمضي.",
      c: "يدعم فيها الناس بعضهم بعضاً بصراحة.", d: "يُرحَّب فيها دائماً بالأفكار الجديدة." },
    scores: { a: { planning: 1 }, b: { decisiveness: 1 }, c: { collaboration: 1 }, d: { exploration: 1 } },
    rationale: "Environment preference signals dominant work orientation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },

  {
    question_id: "Q-DEC-001", dimension: "decisiveness", secondary: [],
    scenario: "pressure",
    en: { q: "A deadline is hours away and the plan is failing. You…",
      a: "Make the call and accept imperfection.", b: "Re-examine priorities before acting.",
      c: "Rally the team for a joint decision.", d: "Try a bold new approach on the spot." },
    ar: { q: "الموعد النهائي بعد ساعات والخطة تفشل. أنت…",
      a: "تتخذ القرار وتتقبّل النقص.", b: "تعيد فحص الأولويات قبل التصرف.",
      c: "تجمع الفريق لاتخاذ قرار مشترك.", d: "تجرّب نهجاً جديداً جريئاً فوراً." },
    scores: { a: { decisiveness: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { exploration: 1 } },
    rationale: "Crisis response distinguishes decisive vs deliberative vs social vs inventive.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-DEC-002", dimension: "decisiveness", secondary: ["independence"],
    scenario: "work",
    en: { q: "Two good options are on the table. You typically…",
      a: "Pick one quickly and commit.", b: "Compare them against criteria.",
      c: "Ask others what they'd choose.", d: "Trust your own read and go." },
    ar: { q: "أمامك خياران جيّدان. أنت غالباً…",
      a: "تختار أحدهما سريعاً وتلتزم.", b: "تقارنهما وفق معايير.",
      c: "تسأل الآخرين ماذا كانوا سيختارون.", d: "تثق بقراءتك الخاصة وتمضي." },
    scores: { a: { decisiveness: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { independence: 1 } },
    rationale: "Choice between equal options reveals decision style.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-DEC-003", dimension: "decisiveness", secondary: ["risk_assessment"],
    scenario: "daily",
    en: { q: "When a decision can't be reversed easily, you…",
      a: "Still decide, then manage consequences.", b: "Slow down and map scenarios.",
      c: "Gather more data before deciding.", d: "Seek the group's consensus." },
    ar: { q: "عندما لا يمكن التراجع عن القرار بسهولة، أنت…",
      a: "تقرر رغم ذلك ثم تدير العواقب.", b: "تتمهّل وترسم السيناريوهات.",
      c: "تجمع مزيداً من المعطيات قبل القرار.", d: "تطلب توافق المجموعة." },
    scores: { a: { decisiveness: 1 }, b: { risk_assessment: 1 }, c: { planning: 1 }, d: { collaboration: 1 } },
    rationale: "Irreversibility tests decisiveness vs caution vs analysis vs consensus.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-DEC-004", dimension: "decisiveness", secondary: ["exploration"],
    scenario: "innovation",
    en: { q: "Your team is stuck arguing between two directions. You…",
      a: "Choose one and end the loop.", b: "Propose a third, untested option.",
      c: "Let each side pilot their idea.", d: "Step back and decide for yourself." },
    ar: { q: "فريقك عالق في جدال بين اتجاهين. أنت…",
      a: "تختار واحداً وتنهي الجدال.", b: "تقترح خياراً ثالثاً غير مجرَّب.",
      c: "تترك كل طرف يجرّب فكرته.", d: "تنسحب وتقرر بنفسك." },
    scores: { a: { decisiveness: 1 }, b: { exploration: 1 }, c: { collaboration: 1 }, d: { independence: 1 } },
    rationale: "Impasse resolution reveals directive, inventive, participative or autonomous styles.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-DEC-005", dimension: "decisiveness", secondary: ["risk_assessment"],
    scenario: "work",
    en: { q: "You made a decision that's now clearly wrong. You…",
      a: "Reverse it fast and move on.", b: "Analyze what led to the error first.",
      c: "Own it openly with the people affected.", d: "Weigh the cost of reversing vs staying." },
    ar: { q: "اتخذت قراراً تبيّن خطؤه بوضوح. أنت…",
      a: "تتراجع عنه سريعاً وتمضي.", b: "تحلل أولاً ما الذي أدى إلى الخطأ.",
      c: "تعترف به صراحة أمام المتأثرين.", d: "توازن بين كلفة التراجع والاستمرار." },
    scores: { a: { decisiveness: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { risk_assessment: 1 } },
    rationale: "Error recovery reveals action, analysis, accountability or cost-benefit styles.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-DEC-006", dimension: "decisiveness", secondary: [],
    scenario: "pressure",
    en: { q: "In a crisis, you value most…",
      a: "A clear directive and quick action.", b: "A careful plan before anyone moves.",
      c: "Everyone knowing their role and supporting each other.", d: "Someone willing to take an unconventional path." },
    ar: { q: "في الأزمات، أكثر ما تقدّره هو…",
      a: "توجيه واضح وتصرف سريع.", b: "خطة متقنة قبل أي تحرك.",
      c: "معرفة كل شخص دوره ودعم بعضهم بعضاً.", d: "شخص مستعد لسلوك طريق غير مألوف." },
    scores: { a: { decisiveness: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { exploration: 1 } },
    rationale: "Crisis values surface preferred operating mode.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },

  {
    question_id: "Q-COL-001", dimension: "collaboration", secondary: ["independence"],
    scenario: "team",
    en: { q: "A teammate's work is holding the project back. You…",
      a: "Offer help and realign expectations.", b: "Take over their part to protect the timeline.",
      c: "Raise it directly and suggest a fix.", d: "Redesign the task so it depends on them less." },
    ar: { q: "عمل زميل يعرقل المشروع. أنت…",
      a: "تعرض المساعدة وتعيد ضبط التوقعات.", b: "تتولى دوره لحماية الجدول الزمني.",
      c: "تثير الأمر مباشرة وتقترح حلاً.", d: "تعيد تصميم المهمة لتقليل الاعتماد عليه." },
    scores: { a: { collaboration: 1 }, b: { decisiveness: 1 }, c: { independence: 1 }, d: { planning: 1 } },
    rationale: "Performance issue response reveals supportive, directive, direct or structural styles.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-COL-002", dimension: "collaboration", secondary: [],
    scenario: "team",
    en: { q: "In a meeting, two colleagues disagree sharply. You…",
      a: "Referee and find the shared ground.", b: "Push for a decision to end the stalemate.",
      c: "Stay quiet and let them sort it out.", d: "Introduce a new framing that reframes the issue." },
    ar: { q: "في اجتماع، يختلف زميلان بشدة. أنت…",
      a: "تتوسّط وتجد الأرضية المشتركة.", b: "تدفع نحو قرار لإنهاء الجمود.",
      c: "تبقى صامتاً وتتركهما يحلّان الأمر.", d: "تقدّم تأطيراً جديداً يعيد صياغة المسألة." },
    scores: { a: { collaboration: 1 }, b: { decisiveness: 1 }, c: { independence: 1 }, d: { exploration: 1 } },
    rationale: "Conflict stance distinguishes mediation, arbitration, withdrawal or reframing.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-COL-003", dimension: "collaboration", secondary: [],
    scenario: "work",
    en: { q: "You prefer to share credit by…",
      a: "Naming everyone's contribution explicitly.", b: "Just getting the result out and moving on.",
      c: "Keeping it low-key; results speak.", d: "Documenting the process so it's traceable." },
    ar: { q: "تفضّل مشاركة الفضل عبر…",
      a: "ذكر مساهمة كل شخص صراحةً.", b: "إخراج النتيجة والمضي قدماً فحسب.",
      c: "البقاء هادئاً؛ فالنتائج تتحدث.", d: "توثيق العملية لتكون قابلة للتتبع." },
    scores: { a: { collaboration: 1 }, b: { decisiveness: 1 }, c: { independence: 1 }, d: { planning: 1 } },
    rationale: "Credit-sharing reveals social, outcome, reserved or procedural orientation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-COL-004", dimension: "collaboration", secondary: ["decisiveness"],
    scenario: "daily",
    en: { q: "A colleague asks for help when you're overloaded. You…",
      a: "Give a smaller, targeted yes.", b: "Say no clearly so nothing slips.",
      c: "Decide based on your own priorities.", d: "Suggest an alternative approach instead." },
    ar: { q: "يطلب منك زميل المساعدة وأنت مثقل. أنت…",
      a: "تمنحه موافقة صغيرة محددة.", b: "ترفض بوضوح حتى لا يتعثر شيء.",
      c: "تقرر بناءً على أولوياتك.", d: "تقترح بدلاً من ذلك نهجاً آخر." },
    scores: { a: { collaboration: 1 }, b: { decisiveness: 1 }, c: { independence: 1 }, d: { exploration: 1 } },
    rationale: "Boundary-setting with a peer reveals supportive, firm, self-directed or creative styles.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-COL-005", dimension: "collaboration", secondary: [],
    scenario: "team",
    en: { q: "You're asked to lead a group you don't know well. You first…",
      a: "Build rapport and learn their strengths.", b: "Set the direction and expectations immediately.",
      c: "Work mostly alone and delegate narrowly.", d: "Propose a fresh way of working together." },
    ar: { q: "طُلب منك قيادة مجموعة لا تعرفها جيداً. أولاً…",
      a: "تبني الألفة وتتعرّف نقاط قوتهم.", b: "تحدد الاتجاه والتوقعات فوراً.",
      c: "تعمل غالباً وحدك وتفوّض بشكل ضيق.", d: "تقترح طريقة عمل جديدة معاً." },
    scores: { a: { collaboration: 1 }, b: { decisiveness: 1 }, c: { independence: 1 }, d: { exploration: 1 } },
    rationale: "Leading strangers reveals relational, directive, autonomous or inventive styles.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-COL-006", dimension: "collaboration", secondary: [],
    scenario: "conflict",
    en: { q: "After a conflict, you usually…",
      a: "Repair the relationship proactively.", b: "Move on once the issue is settled.",
      c: "Keep your distance until trust returns.", d: "Analyze what the conflict revealed." },
    ar: { q: "بعد خلاف، أنت عادةً…",
      a: "تبادر إلى إصلاح العلاقة.", b: "تمضي قدماً بعد تسوية المسألة.",
      c: "تحافظ على مسافة حتى تعود الثقة.", d: "تحلل ما كشفه الخلاف." },
    scores: { a: { collaboration: 1 }, b: { decisiveness: 1 }, c: { independence: 1 }, d: { planning: 1 } },
    rationale: "Post-conflict behavior reveals repair, closure, distance or reflection.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },

  {
    question_id: "Q-IND-001", dimension: "independence", secondary: [],
    scenario: "work",
    en: { q: "Your manager's instructions contradict your judgment. You…",
      a: "Follow your judgment and explain why.", b: "Do as asked to avoid friction.",
      c: "Ask for clarification before acting.", d: "Propose a compromise." },
    ar: { q: "تعليمات مديرك تناقض حكمك. أنت…",
      a: "تتبع حكمك وتشرح السبب.", b: "تنفّذ كما طُلب لتجنب الاحتكاك.",
      c: "تطلب توضيحاً قبل التصرف.", d: "تقترح حلاً وسطاً." },
    scores: { a: { independence: 1 }, b: { collaboration: 1 }, c: { planning: 1 }, d: { decisiveness: 1 } },
    rationale: "Authority conflict reveals autonomy, compliance, clarification or negotiation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-IND-002", dimension: "independence", secondary: ["collaboration"],
    scenario: "team",
    en: { q: "In group decisions, you tend to…",
      a: "Form your own view and defend it.", b: "Align with the group's lean.",
      c: "Wait until the evidence is clear.", d: "Push the group toward a quick conclusion." },
    ar: { q: "في قرارات المجموعة، تميل إلى…",
      a: "تكوين رأيك الخاص والدفاع عنه.", b: "المواءمة مع ميل المجموعة.",
      c: "الانتظار حتى يتضح الدليل.", d: "دفع المجموعة نحو خلاصة سريعة." },
    scores: { a: { independence: 1 }, b: { collaboration: 1 }, c: { planning: 1 }, d: { decisiveness: 1 } },
    rationale: "Group-decision stance reveals autonomy, conformity, evidence-waiting or drive.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-IND-003", dimension: "independence", secondary: ["exploration"],
    scenario: "learning",
    en: { q: "Learning something new, you prefer…",
      a: "To figure it out yourself first.", b: "To learn with a study partner or class.",
      c: "A structured course or curriculum.", d: "To jump into a real project." },
    ar: { q: "عند تعلّم شيء جديد، تفضّل…",
      a: "أن تكتشفه بنفسك أولاً.", b: "أن تتعلّم مع شريك أو في صف.",
      c: "منهجاً أو دورة منظمة.", d: "أن تنغمس في مشروع حقيقي." },
    scores: { a: { independence: 1 }, b: { collaboration: 1 }, c: { planning: 1 }, d: { exploration: 1 } },
    rationale: "Learning preference reveals self-directed, social, structured or experiential styles.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-IND-004", dimension: "independence", secondary: [],
    scenario: "work",
    en: { q: "Working late on a hard problem alone, you feel…",
      a: "Focused and in control.", b: "Lonely — you'd rather be with the team.",
      c: "Energized only if there's a clear plan.", d: "Restless, wishing you could try something new." },
    ar: { q: "وأنت تعمل حتى وقت متأخر على مشكلة صعبة وحدك، تشعر…",
      a: "بالتركيز والسيطرة.", b: "بالوحدة — كنت تفضّل البقاء مع الفريق.",
      c: "بالنشاط فقط إذا كانت هناك خطة واضحة.", d: "بالقلق والرغبة في تجربة شيء جديد." },
    scores: { a: { independence: 1 }, b: { collaboration: 1 }, c: { planning: 1 }, d: { exploration: 1 } },
    rationale: "Solo-work affect reveals autonomy comfort vs social need vs structure need vs novelty need.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-IND-005", dimension: "independence", secondary: [],
    scenario: "resource",
    en: { q: "You trust a decision more when…",
      a: "You made it yourself.", b: "The team reached it together.",
      c: "It follows a clear process.", d: "It was made quickly and tested." },
    ar: { q: "تثق بالقرار أكثر عندما…",
      a: "تتخذه بنفسك.", b: "يتوصل إليه الفريق معاً.",
      c: "يتبع عملية واضحة.", d: "يُتّخذ بسرعة ويُختبر." },
    scores: { a: { independence: 1 }, b: { collaboration: 1 }, c: { planning: 1 }, d: { decisiveness: 1 } },
    rationale: "Trust source reveals autonomy, consensus, process or speed orientation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-IND-006", dimension: "independence", secondary: [],
    scenario: "pressure",
    en: { q: "Under pressure, you'd rather…",
      a: "Work alone and own the result.", b: "Rally people around you.",
      c: "Slow down and work the plan.", d: "Improvise a new way through." },
    ar: { q: "تحت الضغط، تفضّل…",
      a: "العمل وحدك وتحمل مسؤولية النتيجة.", b: "حشد الناس حولك.",
      c: "التمهّل والسير وفق الخطة.", d: "ارتجال طريق جديد للعبور." },
    scores: { a: { independence: 1 }, b: { collaboration: 1 }, c: { planning: 1 }, d: { exploration: 1 } },
    rationale: "Pressure preference reveals autonomy, social rallying, plan adherence or improvisation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },

  {
    question_id: "Q-EXP-001", dimension: "exploration", secondary: [],
    scenario: "daily",
    en: { q: "A free afternoon opens up. You're drawn to…",
      a: "Trying something you've never done.", b: "Finishing a task you already started.",
      c: "Catching up with people you care about.", d: "Making a decision you've been postponing." },
    ar: { q: "تتاح لك فترة بعد الظهر. تنجذب إلى…",
      a: "تجربة شيء لم تفعله من قبل.", b: "إنهاء مهمة بدأتها بالفعل.",
      c: "اللقاء بمن تهتم لأمرهم.", d: "اتخاذ قرار كنت تؤجله." },
    scores: { a: { exploration: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { decisiveness: 1 } },
    rationale: "Free-time pull reveals novelty, completion, social or resolution drives.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-EXP-002", dimension: "exploration", secondary: [],
    scenario: "innovation",
    en: { q: "At work, you're known for…",
      a: "Proposing new ideas and experiments.", b: "Delivering on time and in order.",
      c: "Making the team feel included.", d: "Saying yes when others hesitate." },
    ar: { q: "في العمل، أنت معروف بـ…",
      a: "اقتراح أفكار وتجارب جديدة.", b: "التسليم في الوقت وبشكل منظّم.",
      c: "إشعار الفريق بالانتماء.", d: "قول نعم حين يتردد الآخرون." },
    scores: { a: { exploration: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { decisiveness: 1 } },
    rationale: "Reputation reveals innovative, reliable, inclusive or bold contributions.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-EXP-003", dimension: "exploration", secondary: [],
    scenario: "learning",
    en: { q: "When a topic fascinates you, you…",
      a: "Dive down the rabbit hole for hours.", b: "Read one systematic overview.",
      c: "Discuss it with someone who knows more.", d: "Apply it immediately to a problem." },
    ar: { q: "عندما يفتنك موضوع، أنت…",
      a: "تغوص فيه لساعات.", b: "تقرأ نظرة عامة منهجية واحدة.",
      c: "تناقشه مع من يعرف أكثر.", d: "تطبقه فوراً على مشكلة." },
    scores: { a: { exploration: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { decisiveness: 1 } },
    rationale: "Curiosity follow-through reveals depth-dive, overview, social or applied styles.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-EXP-004", dimension: "exploration", secondary: [],
    scenario: "daily",
    en: { q: "Routine days make you feel…",
      a: "Restless — you need novelty.", b: "Safe — you like the rhythm.",
      c: "Connected — you enjoy the shared pace.", d: "Impatient — you want outcomes." },
    ar: { q: "الأيام الروتينية تجعلك تشعر…",
      a: "بالقلق — تحتاج إلى الجديد.", b: "بالأمان — يعجبك الإيقاع.",
      c: "بالارتباط — تستمتع بالوتيرة المشتركة.", d: "بنفاد الصبر — تريد نتائج." },
    scores: { a: { exploration: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { decisiveness: 1 } },
    rationale: "Routine affect reveals novelty, stability, social or outcome orientation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-EXP-005", dimension: "exploration", secondary: [],
    scenario: "work",
    en: { q: "Faced with an unfamiliar tool, you…",
      a: "Start clicking and learn by doing.", b: "Read the manual first.",
      c: "Ask a colleague to walk you through it.", d: "Decide if it's worth learning at all." },
    ar: { q: "أمام أداة غير مألوفة، أنت…",
      a: "تبدأ بالضغط وتتعلّم بالممارسة.", b: "تقرأ الدليل أولاً.",
      c: "تطلب من زميل أن يشرحها لك.", d: "تقرر إن كانت تستحق التعلّم أصلاً." },
    scores: { a: { exploration: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { decisiveness: 1 } },
    rationale: "Tool adoption reveals experiential, methodical, social or pragmatic styles.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-EXP-006", dimension: "exploration", secondary: [],
    scenario: "longterm",
    en: { q: "Your ideal future includes…",
      a: "Many different places and pursuits.", b: "Deep mastery of one craft.",
      c: "Strong, lasting community.", d: "A few bold, decisive bets." },
    ar: { q: "مستقبلك المثالي يتضمّن…",
      a: "أماكن ومساعي كثيرة ومتنوعة.", b: "إتقاناً عميقاً لمهنة واحدة.",
      c: "مجتمعاً قوياً دائماً.", d: "رهانات قليلة جريئة وحاسمة." },
    scores: { a: { exploration: 1 }, b: { planning: 1 }, c: { collaboration: 1 }, d: { decisiveness: 1 } },
    rationale: "Future vision reveals breadth, depth, community or boldness.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },

  {
    question_id: "Q-RSK-001", dimension: "risk_assessment", secondary: [],
    scenario: "resource",
    en: { q: "Before a big investment of time or money, you…",
      a: "Identify what could go wrong and prepare.", b: "Go for it if it feels right.",
      c: "Research alternatives thoroughly.", d: "Consult people you trust." },
    ar: { q: "قبل استثمار كبير للوقت أو المال، أنت…",
      a: "تحدد ما قد يخطئ وتستعد.", b: "تقدم عليه إذا شعرت أنه صواب.",
      c: "تبحث في البدائل بدقة.", d: "تستشير من تثق بهم." },
    scores: { a: { risk_assessment: 1 }, b: { decisiveness: 1 }, c: { exploration: 1 }, d: { collaboration: 1 } },
    rationale: "Pre-investment behavior reveals risk, gut, research or social orientation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-RSK-002", dimension: "risk_assessment", secondary: ["decisiveness"],
    scenario: "pressure",
    en: { q: "A high-risk, high-reward opportunity appears. You…",
      a: "Weigh downside vs upside carefully.", b: "Seize it before it disappears.",
      c: "Study it further before deciding.", d: "Ask your team to evaluate it together." },
    ar: { q: "تظهر فرصة عالية المخاطرة وعالية العائد. أنت…",
      a: "توازن بدقة بين الخسارة والمكسب.", b: "تغتنمها قبل أن تختفي.",
      c: "تدرسها أكثر قبل القرار.", d: "تطلب من فريقك تقييمها معاً." },
    scores: { a: { risk_assessment: 1 }, b: { decisiveness: 1 }, c: { planning: 1 }, d: { collaboration: 1 } },
    rationale: "Opportunity response reveals risk-weighing, speed, study or shared evaluation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-RSK-003", dimension: "risk_assessment", secondary: [],
    scenario: "innovation",
    en: { q: "Introducing a new idea to your group, you…",
      a: "Pilot it small to limit the downside.", b: "Push it hard and fast.",
      c: "Build a detailed rollout plan.", d: "Let everyone shape it together." },
    ar: { q: "عند طرح فكرة جديدة على مجموعتك، أنت…",
      a: "تجرّبها على نطاق صغير للحد من الخسارة.", b: "تدفعها بقوة وسرعة.",
      c: "تبني خطة طرح مفصلة.", d: "تدع الجميع يساهم في صياغتها." },
    scores: { a: { risk_assessment: 1 }, b: { decisiveness: 1 }, c: { planning: 1 }, d: { collaboration: 1 } },
    rationale: "Idea introduction reveals controlled pilot, force, planning or co-creation.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-RSK-004", dimension: "risk_assessment", secondary: [],
    scenario: "daily",
    en: { q: "Your instinct about risk is…",
      a: "Trust but verify with a worst-case check.", b: "Trust your gut and act.",
      c: "Avoid it unless the plan is solid.", d: "Share it and decide together." },
    ar: { q: "حدسك تجاه المخاطرة هو…",
      a: "الثقة مع التحقق بفحص أسوأ الاحتمالات.", b: "الثقة بإحساسك والتصرف.",
      c: "تجنّبها ما لم تكن الخطة متينة.", d: "مشاركتها والاتفاق معاً." },
    scores: { a: { risk_assessment: 1 }, b: { decisiveness: 1 }, c: { planning: 1 }, d: { collaboration: 1 } },
    rationale: "Risk instinct reveals verify-then-trust, gut, avoidance or shared decision.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-RSK-005", dimension: "risk_assessment", secondary: [],
    scenario: "work",
    en: { q: "When things go wrong, you first ask…",
      a: "What warning signs did we miss?", b: "What do we do right now?",
      c: "Where did the plan break?", d: "Who can help us recover?" },
    ar: { q: "عندما تسوء الأمور، تسأل أولاً…",
      a: "ما الإشارات التحذيرية التي فاتتنا؟", b: "ماذا نفعل الآن؟",
      c: "أين تعطّلت الخطة؟", d: "من يستطيع مساعدتنا على التعافي؟" },
    scores: { a: { risk_assessment: 1 }, b: { decisiveness: 1 }, c: { planning: 1 }, d: { collaboration: 1 } },
    rationale: "Failure inquiry reveals risk-learning, action, process or social recovery.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  },
  {
    question_id: "Q-RSK-006", dimension: "risk_assessment", secondary: ["exploration"],
    scenario: "longterm",
    en: { q: "For your future, you'd rather…",
      a: "Accept managed risk for steady gains.", b: "Take one bold swing.",
      c: "Follow a proven, stable path.", d: "Explore many small possibilities." },
    ar: { q: "لمستقبلك، تفضّل…",
      a: "تقبّل مخاطرة مُدارة لتحقيق مكاسب ثابتة.", b: "المجازفة بضربة جريئة واحدة.",
      c: "سلوك طريق مستقر مجرَّب.", d: "استكشاف إمكانيات صغيرة كثيرة." },
    scores: { a: { risk_assessment: 1 }, b: { decisiveness: 1 }, c: { planning: 1 }, d: { exploration: 1 } },
    rationale: "Future risk stance reveals managed, bold, stable or exploratory approaches.", limitations: "Self-report.", version: "2.0.0", status: "published", source: "original_author", similar_to: []
  }
];

if (typeof window !== "undefined") {
  window.APP_QUESTIONS = APP_QUESTIONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = APP_QUESTIONS;
}
