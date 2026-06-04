// ===== Scroll reveal (staggered fade-in) =====
const rv = document.querySelectorAll('.rv');
const io = new IntersectionObserver((es) => {
  es.forEach((e) => {
    if (e.isIntersecting) {
      const sibs = Array.from(e.target.parentElement.querySelectorAll('.rv'));
      const idx = sibs.indexOf(e.target);
      e.target.style.transitionDelay = (Math.max(idx, 0) * 0.07) + 's';
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
rv.forEach(el => io.observe(el));

// ===== i18n: JP / EN toggle =====
const i18n = {
  ja: {}, // Japanese = original HTML, filled at runtime
  en: {
    nav_cta: "Sign up free",
    hero_badge: "Travel creators welcome",
    hero_badge2: "Post on any platform",
    hero_h1: 'Turn your <span class="hl">travel posts</span><br>into <span class="acc-sun">real income</span>.',
    hero_sub: 'Just share <strong>special plans on hotels\u2019 & ryokan official sites</strong>. With exclusive deals you won\u2019t find on online travel agencies, tripla Buzz lets you earn while recommending truly great stays to your followers \u2014 a performance-based affiliate program, <strong>tripla Buzz</strong>.',
    hero_cta: "Sign up in 60 sec",
    hero_cta2: "See income simulation",
    fc1_n: "\u201cTips for stay posts\u201d guide",
    fc1_s: "Free for members",
    fc2_n: "3% per completed stay",
    fc2_s: "3% of the booking amount paid",
    logos_title: "Popular hotels & ryokan nationwide are on board (example)",
    logo1: "Resort Hotels", logo2: "Hot Spring Ryokan", logo3: "City Hotels", logo4: "Glamping", logo5: "Luxury",
    pain_eyebrow: "YOUR PAIN",
    pain_h2: 'Posting about travel, yet<br>it never turns into earnings.',
    pain_lead: "You have real influence with travel lovers \u2014 but do you keep hitting these walls?",
    pain1_h: "Low payouts",
    pain1_p: "Travel offers pay little, so promoting them rarely grows your income.",
    pain2_h: "Everyone has the same offers",
    pain2_p: "Only the usual OTA deals \u2014 no differentiation, and CVR plateaus.",
    pain3_h: "Slow payments",
    pain3_p: "Payouts come months later, so cash flow stalls and you can\u2019t reinvest.",
    pain4_h: "Finding offers is tedious",
    pain4_p: "Hunting for good stays eats your time. You can\u2019t focus on creating.",
    pain5_h: "No stays worth sharing",
    pain5_p: "The very stays you\u2019d love to recommend often have no affiliate offer.",
    pain6_h: "Thin support",
    pain6_p: "Replies take days, so you can\u2019t move fast on improvements.",
    pain_note: 'The problem may not be your influence, but <span class="acc">the offers you handle</span>.',
    sim_eyebrow: "SIMULATION",
    sim_h2: 'Convert your influence<br>into rewards \u2014',
    sim_lead: "The figures below are model cases (example). Actual results are not guaranteed.",
    th1: "Monthly clicks", th2: "Booking rate", th3: "Room price", th4: "Est. confirmed reward / mo.",
    rate1: "\u00A550,000", rate2: "\u00A550,000", rate3: "\u00A550,000",
    rev1: "approx. \u00A575K", rev2: "approx. \u00A5300K", rev3: "approx. \u00A5750K",
    scroll_hint: "Scroll horizontally",
    caseA_who: "A / Travel influencer",
    caseA_p: "I just posted on Instagram during my stay \u2014 it turned into nice pocket money!",
    caseB_who: "B / Travel blogger",
    caseB_p: "I get to stay at a discount in exchange for a PR post \u2014 a great deal plus side income.",
    sim_disc: "* All figures are model cases and do not guarantee earnings.",
    steps_eyebrow: "EASY START",
    steps_h2: "Get started in just 3 steps.",
    step1_h: "Sign up free",
    step1_p: "60 seconds with email or social login. No fees at all.",
    step2_h: "Pick an offer",
    step2_p: "Choose a stay to promote and grab links & assets in one tap.",
    step3_h: "Post & earn",
    step3_p: "Share on your usual SNS or blog. Track results in real time.",
    step_note: "Before posting, you\u2019ll need to stay at the property once. Experiencing it yourself lets you recommend it to your followers with confidence.",
    final_eyebrow: "JOIN NOW",
    final_h2: 'Make your next trip one<br>you post about \u2014 and profit from.',
    final_sub: "Exclusive offers for great stays fill up on a first-come basis.",
    final_r2: 'Signup is free and takes <strong>60 seconds</strong>. Zero risk.',
    final_r3: 'Issue a link today and <strong>start stacking results today</strong>.',
    final_cta: "Register as a partner for free",
    final_micro: "No fees ever / Cancel anytime",
    footer_tag: "Share your travels, and earn. \u2014 Performance-based affiliate",
    company_eyebrow: "ABOUT US",
    company_h2: "About the operating company",
    company_name: "tripla Co., Ltd.",
    company_desc: "Listed on the Tokyo Stock Exchange Growth Market in FY2022, tripla is a hotel-tech company providing the booking engine \u201ctripla Book\u201d to maximize hotels\u2019 direct web bookings, the AI chatbot \u201ctripla Bot,\u201d and the CRM / marketing automation \u201ctripla Connect.\u201d The performance-based affiliate service \u201ctripla Buzz\u201d is one of them.",
    company_cta: "Visit official site",
    company_cta2: "Corporate info",
    cf1_l: "MAIN SERVICES",
    cf1_v: "Booking engine / AI chatbot / CRM \u00b7 MA",
    cf2_l: "THIS SERVICE",
    cf2_v: "tripla Buzz (performance-based affiliate)",
    cf3_l: "GROUP COMPANIES",
    cf3_v: "Surehigh (Taiwan) / BookandLink (Indonesia) / tripla Thailand",
    footer_official: "Official site",
    footer_ir: "Corporate info",
    footer_recruit: "Careers"
  }
};

// Capture original Japanese HTML for each element
document.querySelectorAll('[data-i18n]').forEach(el => {
  i18n.ja[el.dataset.i18n] = el.innerHTML;
});

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const t = i18n[lang][el.dataset.i18n];
    if (t !== undefined) el.innerHTML = t;
  });
  document.querySelectorAll('#langToggle [data-lang]').forEach(s => {
    s.hidden = (s.dataset.lang !== lang);
  });
}

const toggle = document.getElementById('langToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const next = document.documentElement.lang === 'en' ? 'ja' : 'en';
    setLang(next);
  });
}
