/* humoyun.dev — translations
   en · ru · uz (Latin)
   Values may contain HTML (innerHTML insertion).
*/
window.I18N = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      stack: "Stack",
      work: "Work",
      about: "About",
      cta: "Get in touch"
    },
    hero: {
      badge: "Available for new engagements · Q2 2026",
      title: '<span class="line">I build <span class="grad">AI systems</span></span><span class="line">that run businesses</span><span class="line">on autopilot.</span>',
      sub: "I'm <strong>Humoyun Sodikov</strong> — a developer and AI automation engineer. I integrate AI into businesses, websites, and operations so teams stop doing the busywork humans shouldn't be doing in 2026.",
      ctaPrimary: "Start a project",
      ctaGhost: "See what I do",
      stat1: "Years building software",
      stat2: "AI & automation systems shipped",
      stat3: "Workflows automated away",
      scroll: "scroll"
    },
    services: {
      eyebrow: "01 — Capabilities",
      title: 'What I actually do <span class="grad">for you</span>.',
      sub: 'Real systems. Real ROI. Not vague "AI consulting" — engineered software that pays for itself.',
      s1: {
        title: "AI Automation",
        body: "Replace manual workflows with agentic systems — email, CRM, ops, content, lead-gen, reporting. Lights-out execution while you sleep.",
        l1: "End-to-end agent pipelines",
        l2: "Cron + event-driven workflows",
        l3: "Human-in-the-loop where it matters"
      },
      s2: {
        title: "AI Integration",
        body: "Drop Claude, GPT, or custom models into the tools your team already lives in — sites, CRMs, dashboards, mobile, internal apps.",
        l1: "Custom RAG over your data",
        l2: "Tool-use & function calling",
        l3: "Streaming chat & assistants"
      },
      s3: {
        title: "Modern Web Development",
        body: "Fast, beautiful, accessible sites and apps. Marketing pages, dashboards, portals, internal tools — designed and engineered to convert.",
        l1: "Next.js · React · TypeScript",
        l2: "Pixel-grade design execution",
        l3: "Edge-deployed, scoring 95+ Lighthouse"
      },
      s4: {
        title: "AI Agents & Chatbots",
        body: "Domain-trained sales & support agents that sound human, follow your SOP, and don't hallucinate prices. Telegram, Instagram, WhatsApp, web.",
        l1: "Multi-platform deployment",
        l2: "Custom persona & knowledge base",
        l3: "CRM + handoff to humans"
      },
      s5: {
        title: "Backend & Data Systems",
        body: "APIs, scrapers, pipelines, dashboards, and the deterministic infrastructure that keeps the AI half honest.",
        l1: "Python · Postgres · Supabase",
        l2: "Modal · serverless · webhooks",
        l3: "Observability & alerts built-in"
      },
      s6: {
        title: "AI Strategy & Architecture",
        body: "Before you spend, I figure out what's worth automating. Lean systems, real cost models, and a plan that won't melt your margins.",
        l1: "ROI-modelled rollouts",
        l2: "Stack & vendor selection",
        l3: "Risk, eval & guardrails"
      }
    },
    process: {
      eyebrow: "02 — Process",
      title: 'How a project <span class="grad">actually goes</span>.',
      sub: "Four steps. No theatre. No 80-slide decks.",
      p1: { title: "Discover", body: "We pin down where your time is being spent, where the leaks are, and where AI actually compounds — vs where it's just shiny.", time: "Week 1" },
      p2: { title: "Architect", body: "A lean blueprint — stack, costs, integrations, evals — that we'll both look back on in 6 months and not regret.", time: "Week 1–2" },
      p3: { title: "Build", body: "Deterministic code where it must be deterministic, LLMs where they earn their keep. Ship in small, working slices.", time: "Week 2–6" },
      p4: { title: "Tune & hand off", body: "Measure, refine, and document so your team owns it. Or I stay on retainer and keep the system getting smarter.", time: "Ongoing" }
    },
    stack: {
      eyebrow: "03 — Stack",
      title: 'The toolbox <span class="grad">I reach for</span>.',
      sub: "Mostly boring, mostly battle-tested. The flashy bits are saved for where they matter.",
      c1: { label: "AI / LLMs", items: ["Claude (Opus, Sonnet, Haiku)", "OpenAI GPT-4 & GPT-5", "DeepSeek · Gemini · open models", "LangChain / direct SDKs", "RAG · embeddings · evals"] },
      c2: { label: "Languages", items: ["Python", "TypeScript / JavaScript", "SQL", "Bash · PowerShell", "HTML · CSS"] },
      c3: { label: "Frontend", items: ["Next.js · React", "Tailwind · shadcn/ui", "Framer Motion", "Vite · Astro", "Vanilla, when it's enough"] },
      c4: { label: "Backend & Infra", items: ["FastAPI · Node", "Supabase · Postgres", "Modal · Vercel · Railway", "Cron · webhooks · queues", "Playwright · scrapers"] },
      c5: { label: "Integrations", items: ["Telegram · Instagram · WhatsApp", "Slack · Notion · Linear", "Google Workspace (Sheets, Docs, Drive)", "Meta Graph · Stripe", "n8n · Zapier · Make"] },
      c6: { label: "How I work", items: ["Ship in small slices", "Type-safe by default", "Observability from day one", "Docs that future-you will thank", "Boring tech &gt; novel tech"] }
    },
    work: {
      eyebrow: "04 — Work",
      title: 'A taste of <span class="grad">what I\'ve shipped</span>.',
      sub: "Real client systems and personal projects, redacted where it matters.",
      w1: { tag: "AI Sales Agent", title: "SATMakon — Instagram &amp; Telegram sales bot", body: "A bilingual (UZ / RU) sales agent for a B2B service business. Talks like a human, qualifies leads, handles objections, hands off to phone. Meta Graph webhooks + Playwright fallback, persona-tuned, hosted on Railway." },
      w2: { tag: "EdTech AI Agent", title: "Zaman Academy — Telegram enrolment agent", body: "&ldquo;Madina&rdquo; — an admissions advisor for a private academy. Trained on intake docs, handles parents in UZ, books calls, qualifies, and never confidently invents a tuition price." },
      w3: { tag: "Internal Tooling", title: "Strateg AI — agent orchestrator", body: "A 3-layer architecture (directives / orchestration / execution) that lets non-technical operators run real business workflows by writing markdown. Modal webhooks, Slack streaming, Google Workspace integration." },
      w4: { tag: "This Website", title: "humoyun.dev — yes, this one", body: "Hand-rolled HTML, CSS and JavaScript. No frameworks, no templates, no AI-generated boilerplate slop. Designed, built, and deployed in one sitting — which is roughly how I work on client projects too." }
    },
    about: {
      eyebrow: "05 — About",
      title: 'I help teams <span class="grad">feel ten times</span> their size.',
      p1: "I'm Humoyun Sodikov — a developer, an AI engineer, and the kind of person who genuinely enjoys deleting work that shouldn't exist.",
      p2: "For the last few years I've been building automations, agents, scrapers, dashboards and full-stack apps for founders and operators who refuse to scale by hiring more humans for repetitive jobs. Whether it's a 1-person shop or a 50-person ops team, the pattern is the same: <em>find the boring, find the leaky, replace it with software that just works.</em>",
      p3: "I work full-stack, lean toward Python and TypeScript, and I take craft seriously — both in the code and in the surface the user sees. This site is one example.",
      cta: "Let's build something",
      term: {
        role: "Humoyun Sodikov · AI automation engineer",
        r1: "- I build AI systems for businesses",
        r2: "- I integrate AI into existing products",
        r3: "- I write the deterministic glue underneath",
        avail: "open · taking 1–2 new projects"
      }
    },
    contact: {
      eyebrow: "06 — Contact",
      title: 'Got a workflow you\'re <span class="grad">tired of doing</span>?',
      sub: "Tell me what's broken, slow, or expensive. I'll write back fast — usually with a quick sketch of how I'd fix it.",
      tg: "Telegram",
      gh: "GitHub",
      big: "Say hi →"
    },
    footer: {
      role: "AI Automation Engineer · Developer",
      credit: 'Designed &amp; built — from scratch, by hand — by <strong>Humoyun Sodikov</strong>. Yes, this site too.',
      year: "Built in 2026"
    }
  },

  ru: {
    nav: {
      services: "Услуги",
      process: "Процесс",
      stack: "Стек",
      work: "Работы",
      about: "Обо мне",
      cta: "Связаться"
    },
    hero: {
      badge: "Открыт для новых проектов · Q2 2026",
      title: '<span class="line">Я создаю <span class="grad">AI&#8209;системы</span>,</span><span class="line">которые ведут бизнес</span><span class="line">на автопилоте.</span>',
      sub: "Меня зовут <strong>Хумоюн Содиков</strong> — разработчик и инженер по AI&#8209;автоматизации. Я внедряю ИИ в бизнес, сайты и операции, чтобы команды перестали делать рутину, которой человеку в 2026 году заниматься не положено.",
      ctaPrimary: "Начать проект",
      ctaGhost: "Что я делаю",
      stat1: "Лет в разработке",
      stat2: "AI и автоматизаций запущено",
      stat3: "Процессов автоматизировано",
      scroll: "вниз"
    },
    services: {
      eyebrow: "01 — Возможности",
      title: 'Что я реально <span class="grad">делаю для вас</span>.',
      sub: 'Реальные системы. Реальный ROI. Без расплывчатого «AI&#8209;консалтинга» — инженерный софт, который окупает себя.',
      s1: {
        title: "AI&#8209;автоматизация",
        body: "Замена ручных процессов агентными системами — почта, CRM, операции, контент, лидген, отчёты. Всё крутится, пока вы спите.",
        l1: "Сквозные агент-пайплайны",
        l2: "Cron + event-driven процессы",
        l3: "Человек в петле, где это важно"
      },
      s2: {
        title: "Интеграция ИИ",
        body: "Внедрение Claude, GPT или кастомных моделей в инструменты, в которых уже живёт ваша команда — сайты, CRM, дашборды, мобильные и внутренние приложения.",
        l1: "Кастомный RAG по вашим данным",
        l2: "Tool-use и function calling",
        l3: "Стриминговые чаты и ассистенты"
      },
      s3: {
        title: "Современная веб-разработка",
        body: "Быстрые, красивые, доступные сайты и приложения. Лендинги, дашборды, порталы, внутренние тулы — спроектированы и собраны, чтобы конвертить.",
        l1: "Next.js · React · TypeScript",
        l2: "Pixel-perfect-исполнение",
        l3: "Edge-деплой, 95+ Lighthouse"
      },
      s4: {
        title: "AI&#8209;агенты и чат-боты",
        body: "Обученные под вашу нишу sales- и support-агенты, которые звучат как живой человек, следуют SOP и не выдумывают цены. Telegram, Instagram, WhatsApp, веб.",
        l1: "Мульти-платформенный деплой",
        l2: "Кастомная персона и база знаний",
        l3: "CRM + передача оператору"
      },
      s5: {
        title: "Backend и системы данных",
        body: "API, скрейперы, пайплайны, дашборды и детерминированная инфра, которая держит AI-часть в узде.",
        l1: "Python · Postgres · Supabase",
        l2: "Modal · serverless · webhooks",
        l3: "Логи и алерты из коробки"
      },
      s6: {
        title: "AI&#8209;стратегия и архитектура",
        body: "До того как тратить — определяю, что реально стоит автоматизировать. Lean-системы, честные cost-модели и план, который не съест маржу.",
        l1: "Внедрение под модель ROI",
        l2: "Подбор стека и вендоров",
        l3: "Риски, evals и guardrails"
      }
    },
    process: {
      eyebrow: "02 — Процесс",
      title: 'Как реально <span class="grad">идёт проект</span>.',
      sub: "Четыре шага. Без театра. Без презентаций на 80 слайдов.",
      p1: { title: "Discover", body: "Разбираемся, куда уходит ваше время, где течёт и где ИИ реально окупается, а где — просто блестит.", time: "Неделя 1" },
      p2: { title: "Architect", body: "Чёткий план — стек, расходы, интеграции, evals — на который через 6 месяцев не будет стыдно смотреть.", time: "Неделя 1–2" },
      p3: { title: "Build", body: "Детерминированный код там, где надо детерминированно. LLM — там, где они окупаются. Релизим маленькими рабочими кусками.", time: "Неделя 2–6" },
      p4: { title: "Tune & hand off", body: "Замеряем, шлифуем и документируем, чтобы команда владела системой. Или я остаюсь на retainer и докручиваю систему дальше.", time: "Дальше" }
    },
    stack: {
      eyebrow: "03 — Стек",
      title: 'Инструменты, <span class="grad">к которым тянусь</span>.',
      sub: "В основном скучные и проверенные. Яркое — там, где это нужно.",
      c1: { label: "AI / LLM", items: ["Claude (Opus, Sonnet, Haiku)", "OpenAI GPT-4 и GPT-5", "DeepSeek · Gemini · open-модели", "LangChain / прямые SDK", "RAG · эмбеддинги · evals"] },
      c2: { label: "Языки", items: ["Python", "TypeScript / JavaScript", "SQL", "Bash · PowerShell", "HTML · CSS"] },
      c3: { label: "Фронтенд", items: ["Next.js · React", "Tailwind · shadcn/ui", "Framer Motion", "Vite · Astro", "Vanilla, когда хватает"] },
      c4: { label: "Бэкенд и инфра", items: ["FastAPI · Node", "Supabase · Postgres", "Modal · Vercel · Railway", "Cron · webhooks · очереди", "Playwright · скрейперы"] },
      c5: { label: "Интеграции", items: ["Telegram · Instagram · WhatsApp", "Slack · Notion · Linear", "Google Workspace (Sheets, Docs, Drive)", "Meta Graph · Stripe", "n8n · Zapier · Make"] },
      c6: { label: "Как я работаю", items: ["Релиз маленькими кусками", "Type-safe по умолчанию", "Логирование с первого дня", "Доки, за которые «ты-будущий» скажет спасибо", "Скучные технологии &gt; новые"] }
    },
    work: {
      eyebrow: "04 — Работы",
      title: 'Что я уже <span class="grad">выкатил</span>.',
      sub: "Реальные клиентские системы и личные проекты, с купюрами где надо.",
      w1: { tag: "AI Sales-агент", title: "SATMakon — sales-бот в Instagram и Telegram", body: "Двуязычный (UZ/RU) sales-агент для B2B&#8209;сервиса. Звучит как человек, квалифицирует лиды, отрабатывает возражения, передаёт на звонок. Meta Graph webhooks + Playwright fallback, кастомная персона, хостинг на Railway." },
      w2: { tag: "EdTech AI&#8209;агент", title: "Zaman Academy — Telegram-агент по поступлению", body: "«Мадина» — консультант по приёму для частной академии. Обучена на ваших документах, общается с родителями на узбекском, бронирует звонки, квалифицирует — и никогда уверенно не выдумывает цену обучения." },
      w3: { tag: "Внутренний инструмент", title: "Strateg AI — оркестратор агентов", body: "3-слойная архитектура (директивы / оркестрация / исполнение), позволяющая нетехническим людям запускать реальные бизнес-процессы через markdown. Modal webhooks, стриминг в Slack, интеграция с Google Workspace." },
      w4: { tag: "Этот сайт", title: "humoyun.dev — да, тот самый", body: "Чистый HTML, CSS и JavaScript руками. Никаких фреймворков, шаблонов и AI-генерированного шлака. Спроектировано, собрано и задеплоено за один присест — примерно так же я работаю и над клиентскими проектами." }
    },
    about: {
      eyebrow: "05 — Обо мне",
      title: 'Помогаю командам <span class="grad">ощущать себя</span> в 10 раз больше.',
      p1: "Меня зовут Хумоюн Содиков — разработчик, AI&#8209;инженер и человек, который искренне получает удовольствие, удаляя работу, которой существовать не должно.",
      p2: "Последние несколько лет я делаю автоматизации, агентов, скрейперы, дашборды и фуллстек-приложения для основателей и операционных команд, которые отказываются масштабироваться через найм людей на рутину. Будь то 1 человек или команда в 50 — паттерн один: <em>найти скучное, найти текущее, заменить софтом, который просто работает.</em>",
      p3: "Я фуллстек, тяну в сторону Python и TypeScript, и серьёзно отношусь к ремеслу — и к коду, и к тому, что видит пользователь. Этот сайт — один из примеров.",
      cta: "Давайте что-нибудь построим",
      term: {
        role: "Хумоюн Содиков · AI-инженер по автоматизации",
        r1: "- Делаю AI-системы для бизнеса",
        r2: "- Внедряю AI в существующие продукты",
        r3: "- Пишу детерминированный клей под капотом",
        avail: "открыт · беру 1–2 новых проекта"
      }
    },
    contact: {
      eyebrow: "06 — Контакты",
      title: 'Есть процесс, от которого <span class="grad">вы устали</span>?',
      sub: "Расскажите, что у вас сломано, медленно или дорого. Отвечу быстро — обычно с наброском, как я бы это починил.",
      tg: "Telegram",
      gh: "GitHub",
      big: "Напишите →"
    },
    footer: {
      role: "AI-инженер автоматизации · Разработчик",
      credit: 'Спроектировано и собрано — с нуля, руками — <strong>Хумоюн Содиков</strong>. Да, этот сайт тоже.',
      year: "Собрано в 2026"
    }
  },

  uz: {
    nav: {
      services: "Xizmatlar",
      process: "Jarayon",
      stack: "Texnologiya",
      work: "Loyihalar",
      about: "Men haqimda",
      cta: "Bog'lanish"
    },
    hero: {
      badge: "Yangi loyihalarga ochiqman · 2026 Q2",
      title: '<span class="line">Men <span class="grad">AI tizimlar</span> quraman</span><span class="line">— biznesni avtopilotda</span><span class="line">boshqaradigan.</span>',
      sub: "Men <strong>Humoyun Sodiqov</strong> — dasturchi va AI&#8209;avtomatlashtirish muhandisi. AI&#8209;ni biznesga, saytlarga va jarayonlarga integratsiya qilaman, toki jamoalar 2026&#8209;yilda inson bajarmasligi kerak bo'lgan zerikarli ishlardan qutulsin.",
      ctaPrimary: "Loyihani boshlash",
      ctaGhost: "Nima qilishim",
      stat1: "Yillik dasturchilik tajriba",
      stat2: "AI va avtomatlashtirish tizimi",
      stat3: "Avtomatlashtirilgan jarayon",
      scroll: "pastga"
    },
    services: {
      eyebrow: "01 — Imkoniyatlar",
      title: 'Men siz uchun aniq <span class="grad">nima qilaman</span>.',
      sub: 'Haqiqiy tizimlar. Haqiqiy ROI. Hech qanday tuman «AI&#8209;konsalting» emas — o\'zini qoplaydigan muhandislik dasturlari.',
      s1: {
        title: "AI&#8209;avtomatlashtirish",
        body: "Qo'lda bajariladigan ishlarni agent tizimlar bilan almashtirish — email, CRM, operatsiyalar, kontent, lid&#8209;generatsiya, hisobotlar. Siz uxlayotganingizda ham ishlaydi.",
        l1: "To'liq tsikl agent pipeline'lari",
        l2: "Cron + event-driven jarayonlar",
        l3: "Kerakli joyda — odam qarori"
      },
      s2: {
        title: "AI integratsiyasi",
        body: "Claude, GPT yoki maxsus modellarni jamoangiz allaqachon ishlatadigan asboblarga — saytlar, CRM, dashboard, mobil va ichki ilovalarga joylashtirish.",
        l1: "Ma'lumotlaringiz bo'yicha RAG",
        l2: "Tool-use va function calling",
        l3: "Streaming chat va assistentlar"
      },
      s3: {
        title: "Zamonaviy veb-dasturlash",
        body: "Tez, chiroyli, qulay saytlar va ilovalar. Landing, dashboard, portal, ichki vositalar — konversiya uchun loyihalashtirilgan va ishlab chiqilgan.",
        l1: "Next.js · React · TypeScript",
        l2: "Pixel darajadagi dizayn",
        l3: "Edge-deploy, 95+ Lighthouse"
      },
      s4: {
        title: "AI agentlar va chat-botlar",
        body: "Sizning sohangizga moslab o'qitilgan sotuv va qo'llab-quvvatlash agentlari — odam kabi gaplashadi, SOP'ni bajaradi va narxlarni o'ylab topmaydi. Telegram, Instagram, WhatsApp, veb.",
        l1: "Ko'p platformali deploy",
        l2: "Maxsus persona va bilim bazasi",
        l3: "CRM + operatorga uzatish"
      },
      s5: {
        title: "Backend va ma'lumot tizimlari",
        body: "API'lar, skrayper, pipeline, dashboard va AI qismni nazoratda ushlaydigan determinatsion infratuzilma.",
        l1: "Python · Postgres · Supabase",
        l2: "Modal · serverless · webhooks",
        l3: "Kuzatuv va alertlar — boshidanoq"
      },
      s6: {
        title: "AI strategiya va arxitektura",
        body: "Pul sarflashdan oldin nima avtomatlashtirishga arzishini aniqlayman. Lean tizimlar, haqiqiy xarajat modellari va marjani yemaydigan reja.",
        l1: "ROI'ga moslangan joriy etish",
        l2: "Stek va vendor tanlash",
        l3: "Risklar, evals va guardrails"
      }
    },
    process: {
      eyebrow: "02 — Jarayon",
      title: 'Loyiha <span class="grad">qanday ketadi</span>.',
      sub: "To'rt qadam. Teatr yo'q. 80 slaydli prezentatsiyalar yo'q.",
      p1: { title: "O'rganish", body: "Sizning vaqtingiz qayerga ketayotganini, qayerda sizib chiqayotganini va AI qayerda haqiqatan ham foyda berishini aniqlaymiz — shunchaki yaltirog'i emas.", time: "1-hafta" },
      p2: { title: "Arxitektura", body: "Aniq reja — stek, xarajat, integratsiya, evals — 6 oydan keyin ham afsuslanmaydigan.", time: "1–2-hafta" },
      p3: { title: "Qurish", body: "Determin kerak joyda — determin kod. LLM o'z hisobini chiqaradigan joyda. Kichik ishlaydigan qismlarda release qilamiz.", time: "2–6-hafta" },
      p4: { title: "Sozlash va topshirish", body: "O'lchaymiz, sozlaymiz va hujjatlashtiramiz — jamoangiz egasi bo'lsin. Yoki retainer'da qolib, tizimni aqlliroq qilaveraman.", time: "Davom etadi" }
    },
    stack: {
      eyebrow: "03 — Texnologiya",
      title: 'Men <span class="grad">qo\'l uradigan</span> asboblar.',
      sub: "Asosan zerikarli, asosan sinab ko'rilgan. Yaltiroq narsalar faqat kerak joyda.",
      c1: { label: "AI / LLM", items: ["Claude (Opus, Sonnet, Haiku)", "OpenAI GPT-4 va GPT-5", "DeepSeek · Gemini · open modellar", "LangChain / to'g'ridan SDK", "RAG · embeddings · evals"] },
      c2: { label: "Tillar", items: ["Python", "TypeScript / JavaScript", "SQL", "Bash · PowerShell", "HTML · CSS"] },
      c3: { label: "Frontend", items: ["Next.js · React", "Tailwind · shadcn/ui", "Framer Motion", "Vite · Astro", "Vanilla, agar yetib bersa"] },
      c4: { label: "Backend va infra", items: ["FastAPI · Node", "Supabase · Postgres", "Modal · Vercel · Railway", "Cron · webhook · navbatlar", "Playwright · skrayperlar"] },
      c5: { label: "Integratsiyalar", items: ["Telegram · Instagram · WhatsApp", "Slack · Notion · Linear", "Google Workspace (Sheets, Docs, Drive)", "Meta Graph · Stripe", "n8n · Zapier · Make"] },
      c6: { label: "Qanday ishlayman", items: ["Kichik qismlarda release qilish", "Type-safe — boshidanoq", "Birinchi kundan kuzatuv", "Kelajakdagi siz minnatdor bo'ladigan hujjatlar", "Zerikarli tex &gt; yangi tex"] }
    },
    work: {
      eyebrow: "04 — Loyihalar",
      title: 'Allaqachon <span class="grad">yetkazganlarimdan</span>.',
      sub: "Haqiqiy mijoz tizimlari va shaxsiy loyihalar, kerakli joyda yashirilgan.",
      w1: { tag: "AI sotuv agenti", title: "SATMakon — Instagram &amp; Telegram sotuv bot", body: "B2B xizmat biznesi uchun ikki tilli (UZ/RU) sotuv agenti. Inson kabi gaplashadi, lidlarni baholaydi, e'tirozlarni hal qiladi, qo'ng'iroqqa uzatadi. Meta Graph webhook + Playwright fallback, maxsus persona, Railway'da hosting." },
      w2: { tag: "EdTech AI agenti", title: "Zaman Academy — Telegram qabul agenti", body: "«Madina» — xususiy akademiya uchun qabul bo'yicha maslahatchi. Hujjatlaringizdan o'rgangan, ota-onalar bilan o'zbekcha gaplashadi, qo'ng'iroqlarni rejalashtiradi, baholaydi — va hech qachon ishonch bilan ta'lim narxini o'ylab topmaydi." },
      w3: { tag: "Ichki vosita", title: "Strateg AI — agent orkestratori", body: "3 qatlamli arxitektura (direktivalar / orkestratsiya / ijro), texnik bo'lmagan operatorlarga markdown yozib haqiqiy biznes jarayonlarini ishga tushirish imkonini beradi. Modal webhook, Slack'ga streaming, Google Workspace integratsiyasi." },
      w4: { tag: "Shu sayt", title: "humoyun.dev — ha, aynan shu", body: "Qo'lda yozilgan HTML, CSS va JavaScript. Hech qanday framework, shablon yoki AI tomonidan yaratilgan keraksiz kod yo'q. Bir o'tirishda loyihalashtirildi, qurildi va deploy qilindi — mijoz loyihalarda ham men shu tarzda ishlayman." }
    },
    about: {
      eyebrow: "05 — Men haqimda",
      title: 'Jamoalarni <span class="grad">10 baravar kattaroq</span> his qilishga yordam beraman.',
      p1: "Men Humoyun Sodiqov — dasturchi, AI&#8209;muhandis va mavjud bo'lmasligi kerak bo'lgan ishlarni o'chirishdan chinakam zavq oladigan odamman.",
      p2: "So'nggi bir necha yil davomida men asoschilar va operatsion jamoalar uchun avtomatizatsiyalar, agentlar, skrayperlar, dashbordlar va full-stack ilovalar quryapman — bu jamoalar takroriy ishlar uchun odam yollab kengaymaslikka qaror qilgan. Bir kishilik bo'lsa-da, 50 kishilik jamoa bo'lsa-da — naqsh bir xil: <em>zerikarlini topish, oqayotganni topish, ishlaydigan dastur bilan almashtirish.</em>",
      p3: "Men full-stack ishlayman, Python va TypeScript tomonga moyilman va ish sifatiga jiddiy qarayman — ham kodda, ham foydalanuvchi ko'radigan tomonda. Bu sayt — bunga bir misol.",
      cta: "Keling, biror narsa quramiz",
      term: {
        role: "Humoyun Sodiqov · AI avtomatlashtirish muhandisi",
        r1: "- Biznes uchun AI tizimlar quraman",
        r2: "- AI'ni mavjud mahsulotlarga integratsiya qilaman",
        r3: "- Ostidagi determin kodni yozaman",
        avail: "ochiq · 1–2 yangi loyiha olaman"
      }
    },
    contact: {
      eyebrow: "06 — Aloqa",
      title: '<span class="grad">Charchatgan</span> bir jarayon bormi?',
      sub: "Nima buzilgan, sekin yoki qimmat ekanini ayting. Tez javob qaytaraman — odatda men buni qanday tuzatishim haqida qisqacha eskiz bilan.",
      tg: "Telegram",
      gh: "GitHub",
      big: "Salom yozing →"
    },
    footer: {
      role: "AI avtomatlashtirish muhandisi · Dasturchi",
      credit: 'Loyihalashtirilgan va qurilgan — noldan, qo\'lda — <strong>Humoyun Sodiqov</strong> tomonidan. Ha, bu sayt ham.',
      year: "2026'da qurilgan"
    }
  }
};
