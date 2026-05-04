import { useEffect } from 'react'

const translations = {
  sv: {
    nav_inc: "Beräknad inkomst",
    nav_inc_val: "45 000 kr / mån",
    nav_login: "Logga in",
    hero_t1: "Ansökan för",
    role_agent: "Betalningsagent",
    role_senior: "Senior Payment Agent",
    role_enterprise: "Företagsagent & Senior Konsult",
    hero_desc: "Säkra din framtida inkomst genom att ansluta dig till vårt nätverk av professionella betalningskonsulter.",
    label_name: "Ditt Fullständiga Namn",
    label_platform: "Tradingplattform",
    label_inc_target: "Önskad månadsinkomst",
    label_partners: "Välj dina anslutna program",
    badge_senior: "Kvalificerad: Senior Payment Agent",
    partner_enterprise: "Företagsagent",
    terms_title: "Juridisk Ansvarsförbindelse",
    terms_text: "Jag godkänner härmed att jag är personligt betalningsskyldig gentemot Global Partners och anslutna banker om medel försvinner, förskingras eller hanteras i strid med gällande penningtvättslagstiftning under utförandet av mina uppdrag.",
    label_sig: "Digital Signatur (Använd mus/finger)",
    btn_clear: "Rensa",
    btn_submit: "Signera & Skicka Ansökan",
    test_title: "Möt våra seniora agenter",
    test_desc: "Erfarenheter från verifierade konsulter över hela Sverige",
    test_gunnar: "\"Detta har gett mig en trygg extra inkomst på ca 15 000 kr varje månad. Jag kan verkligen rekommendera programmet!\"",
    test_marga: "\"Friheten är fantastisk. Nu har jag råd med resor jag drömt om som pensionär. Anslut dig idag, det är det bästa jag gjort!\"",
    test_sven: "\"Provisionen är bäst på marknaden och systemet är väldigt tydligt. En mycket stark rekommendation från min sida!\"",
    badge_v: "Verifierad",
    side_payout: "Utbetalningar Live",
    side_realtime: "Realtid",
    side_calc_label: "Beräknad månadskonsultation",
    side_calc_val: "45 000 kr",
    modal_wait: "Genererar Anställningskontrakt...",
    modal_welcome: "Välkommen!",
    modal_qualify: "Du har kvalificerat dig som Betalningsagent.",
    modal_qualify_prefix: "Du har kvalificerat dig som ",
    modal_provision: "Ditt kontrakt är klart. Din 6% provision sätts in direkt på ditt konto vid varje transaktion.",
    modal_forecast: "Prognos: 45 000 kr / mån",
    btn_download: "Ladda ner kontrakt (PDF)",
    pdf_title: "ANSTÄLLNINGSKONTRAKT",
    pdf_corp: "Global Payment Partners Network",
    pdf_date: "Datum",
    pdf_emp: "Anställd",
    pdf_role: "Roll",
    pdf_sec1: "1. UPPDRAG OCH PROVISION",
    pdf_sec1_desc: "Agenten agerar betalningskonsult för",
    pdf_sec1_part: "Betalningspartners",
    pdf_sec1_prov: "Provision: 6,00% per transaktion.",
    pdf_sec2: "2. ANSVARSFÖRBINDELSE",
    pdf_sec2_text: "Agenten godkänner personligt betalningsansvar gentemot Global Partners om medel försvinner eller hanteras felaktigt under utförandet av uppdraget.",
    pdf_sec3: "3. INKOMSTPROGNOS",
    pdf_sec3_val: "Beräknad månatlig inkomst: 45 000 SEK.",
    pdf_sig_line: "Signerat digitalt via Global Partners Portal",
    pdf_sig_name: "Namnteckning",
    search_placeholder: "Sök plattform...",
    inc_vals: ["5 000 kr", "10 000 kr", "15 000 kr", "20 000 kr +"],
    payout_text: "Provision Utbetald",
    payout_time: "Just nu"
  },
  en: {
    nav_inc: "Projected income",
    nav_inc_val: "€ 4,500 / month",
    nav_login: "Login",
    hero_t1: "Application for",
    role_agent: "Payment Agent",
    role_senior: "Senior Payment Agent",
    role_enterprise: "Enterprise Agent & Senior Consultant",
    hero_desc: "Secure your financial future by joining our network of professional payment consultants.",
    label_name: "Your Full Name",
    label_platform: "Trading Platform",
    label_inc_target: "Desired Monthly Income",
    label_partners: "Select Your Connected Programs",
    badge_senior: "Qualified: Senior Payment Agent",
    partner_enterprise: "Enterprise Agent",
    terms_title: "Legal Liability Agreement",
    terms_text: "I hereby agree that I am personally liable to Global Partners and affiliated banks if funds are lost, misappropriated, or handled in violation of current anti-money laundering legislation during the performance of my duties.",
    label_sig: "Digital Signature (Use mouse/finger)",
    btn_clear: "Clear",
    btn_submit: "Sign & Submit Application",
    test_title: "Meet Our Senior Agents",
    test_desc: "Experiences from verified consultants across Europe",
    test_gunnar: "\"This has provided me with a secure extra income of about €1,500 every month. I can truly recommend this program!\"",
    test_marga: "\"The freedom is fantastic. Now I can afford the travels I dreamed of as a retiree. Join today, it's the best thing I've done!\"",
    test_sven: "\"The commission is the best on the market and the system is very clear. A very strong recommendation from my side!\"",
    badge_v: "Verified",
    side_payout: "Live Payouts",
    side_realtime: "Real-time",
    side_calc_label: "Estimated Monthly Consultation",
    side_calc_val: "€ 4,500",
    modal_wait: "Generating Employment Contract...",
    modal_welcome: "Welcome!",
    modal_qualify: "You have qualified as a Payment Agent.",
    modal_qualify_prefix: "You have qualified as a ",
    modal_provision: "Your contract is ready. Your 6% commission will be deposited directly into your account for every transaction.",
    modal_forecast: "Forecast: € 4,500 / month",
    btn_download: "Download Contract (PDF)",
    pdf_title: "EMPLOYMENT CONTRACT",
    pdf_corp: "Global Payment Partners Network",
    pdf_date: "Date",
    pdf_emp: "Employee",
    pdf_role: "Role",
    pdf_sec1: "1. ASSIGNMENT AND COMMISSION",
    pdf_sec1_desc: "The Agent acts as a payment consultant for",
    pdf_sec1_part: "Payment Partners",
    pdf_sec1_prov: "Commission: 6.00% per transaction.",
    pdf_sec2: "2. LIABILITY AGREEMENT",
    pdf_sec2_text: "The Agent agrees to personal liability towards Global Partners if funds are lost or handled incorrectly during the performance of the assignment.",
    pdf_sec3: "3. INCOME FORECAST",
    pdf_sec3_val: "Estimated monthly income: € 4,500.",
    pdf_sig_line: "Signed digitally via Global Partners Portal",
    pdf_sig_name: "Signature",
    search_placeholder: "Search platform...",
    inc_vals: ["€ 500", "€ 1,000", "€ 1,500", "€ 2,000 +"],
    payout_text: "Commission Paid",
    payout_time: "Just now"
  }
}

const platforms = ["ScandiPortalen", "MetaTrader 4", "MetaTrader 5", "eToro", "Plus500", "IG Trading", "Saxo Bank", "Interactive Brokers", "AvaTrade", "CMC Markets", "XTB Online", "TradingView", "Robinhood", "Coinbase Pro", "Binance", "Kraken", "OKX", "Bybit", "KuCoin", "Bitstamp", "Gemini", "Bitfinex", "Gate.io", "Huobi", "MEXC", "Bitget", "Deribit", "Phemex", "Woo X", "dYdX", "GMX"].sort((a, b) => a === "ScandiPortalen" ? -1 : (b === "ScandiPortalen" ? 1 : a.localeCompare(b)))

let currentLang = 'sv'
let selectedPartners = new Set()

function setLanguage(lang) {
  currentLang = lang
  const t = translations[lang]

  document.getElementById('nav-income-label').textContent = t.nav_inc
  document.getElementById('nav-income-val').textContent = t.nav_inc_val
  document.getElementById('nav-login').textContent = t.nav_login
  document.getElementById('hero-t1').textContent = t.hero_t1
  document.getElementById('hero-desc').textContent = t.hero_desc
  document.getElementById('label-name').textContent = t.label_name
  document.getElementById('label-platform').textContent = t.label_platform
  document.getElementById('label-income-target').textContent = t.label_inc_target
  document.getElementById('label-partners').textContent = t.label_partners
  document.getElementById('badge-senior-text').textContent = t.badge_senior
  document.getElementById('partner-enterprise').textContent = t.partner_enterprise
  document.getElementById('label-terms-title').textContent = t.terms_title
  document.getElementById('label-terms-text').textContent = t.terms_text
  document.getElementById('label-signature').textContent = t.label_sig
  document.getElementById('btn-clear').textContent = t.btn_clear
  document.getElementById('btn-submit-text').textContent = t.btn_submit
  document.getElementById('test-title').textContent = t.test_title
  document.getElementById('test-desc').textContent = t.test_desc
  document.getElementById('test-gunnar-text').textContent = t.test_gunnar
  document.getElementById('test-marga-text').textContent = t.test_marga
  document.getElementById('test-sven-text').textContent = t.test_sven
  document.getElementById('side-payout-title').textContent = t.side_payout
  document.getElementById('side-realtime').textContent = t.side_realtime
  document.getElementById('side-calc-label').textContent = t.side_calc_label
  document.getElementById('side-calc-val').textContent = t.side_calc_val
  document.getElementById('modal-wait').textContent = t.modal_wait
  document.getElementById('modal-welcome').textContent = t.modal_welcome
  document.getElementById('modal-qualify-prefix').textContent = t.modal_qualify_prefix
  document.getElementById('modal-qualify-role').textContent = t.role_agent
  document.getElementById('modal-provision').textContent = t.modal_provision
  document.getElementById('modal-forecast').textContent = t.modal_forecast
  document.getElementById('btn-download').textContent = t.btn_download
  document.getElementById('platformSearch').placeholder = t.search_placeholder

  document.getElementById('inc-v1').textContent = t.inc_vals[0]
  document.getElementById('inc-v2').textContent = t.inc_vals[1]
  document.getElementById('inc-v3').textContent = t.inc_vals[2]
  document.getElementById('inc-v4').textContent = t.inc_vals[3]

  document.querySelectorAll('[id^="badge-v"]').forEach(el => el.textContent = t.badge_v)

  document.getElementById('btn-sv').classList.toggle('active', lang === 'sv')
  document.getElementById('btn-en').classList.toggle('active', lang === 'en')

  updateStatus()
}

function filterPartners(amount) {
  const section = document.getElementById('partnerSection')
  const partners = document.querySelectorAll('.partner-card')
  section.style.opacity = "1"
  section.style.pointerEvents = "auto"
  partners.forEach(p => {
    const tier = parseInt(p.getAttribute('data-tier'))
    if (tier <= amount) p.classList.remove('hidden')
    else { p.classList.add('hidden'); p.classList.remove('active'); selectedPartners.delete(p.id.replace('p-', '')) }
  })
  updateStatus()
}

function togglePartner(id) {
  const el = document.getElementById(`p-${id}`)
  if (selectedPartners.has(id)) { selectedPartners.delete(id); el.classList.remove('active') }
  else { selectedPartners.add(id); el.classList.add('active') }
  updateStatus()
}

function updateStatus() {
  const isSenior = selectedPartners.size >= 5
  const hasCompany = selectedPartners.has('company')
  const t = translations[currentLang]

  let roleName = t.role_agent
  if (hasCompany) roleName = t.role_enterprise
  else if (isSenior) roleName = t.role_senior

  document.getElementById('titleRole').textContent = roleName
  document.getElementById('seniorBadge').classList.toggle('hidden', !isSenior)
}

function closeModal() {
  document.getElementById('successModal').classList.add('hidden')
  document.getElementById('modalLoading').classList.remove('hidden')
  document.getElementById('modalContent').classList.add('hidden')
}

function clearSignature() {
  const canvas = document.getElementById('signaturePad')
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function downloadContract() {
  const { jsPDF } = window.jspdf
  const doc = new jsPDF()
  const t = translations[currentLang]
  const name = document.getElementById('userName').value || "Agent"
  const platform = document.getElementById('selectedPlatform').value || "-"
  const partners = Array.from(selectedPartners).join(', ')
  const date = new Date().toLocaleDateString(currentLang === 'sv' ? 'sv-SE' : 'en-GB')

  doc.setFontSize(22)
  doc.text(t.pdf_title, 105, 20, null, 'center')
  doc.setFontSize(14)
  doc.text(t.pdf_corp, 105, 30, null, 'center')
  doc.setLineWidth(0.5); doc.line(20, 35, 190, 35)

  doc.setFontSize(12)
  doc.text(`${t.pdf_date}: ${date}`, 20, 45)
  doc.text(`${t.pdf_emp}: ${name}`, 20, 52)
  doc.text(`${t.pdf_role}: ${document.getElementById('titleRole').textContent}`, 20, 59)

  doc.setFontSize(14); doc.text(t.pdf_sec1, 20, 75)
  doc.setFontSize(11)
  doc.text(`${t.pdf_sec1_desc}: ${platform}.`, 20, 82)
  doc.text(`${t.pdf_sec1_part}: ${partners}.`, 20, 89)
  doc.text(t.pdf_sec1_prov, 20, 96)

  doc.setFontSize(14); doc.text(t.pdf_sec2, 20, 110)
  doc.setFontSize(10)
  const lines = doc.splitTextToSize(t.pdf_sec2_text, 170)
  doc.text(lines, 20, 117)

  doc.setFontSize(14); doc.text(t.pdf_sec3, 20, 135)
  doc.setFontSize(11)
  doc.text(t.pdf_sec3_val, 20, 142)

  doc.text(t.pdf_sig_line, 20, 170)
  doc.text(`__________________________`, 20, 180)
  doc.text(`${t.pdf_sig_name}: ${name}`, 20, 187)

  doc.save(`Contract_${name.replace(/\s/g, '_')}.pdf`)
}

export default function App() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons()

    const canvas = document.getElementById('signaturePad')
    const ctx = canvas.getContext('2d')
    let isDrawing = false

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.strokeStyle = '#0f172a'
    }
    function startDrawing(e) { isDrawing = true; draw(e) }
    function stopDrawing() { isDrawing = false; ctx.beginPath() }
    function draw(e) {
      if (!isDrawing) return
      const rect = canvas.getBoundingClientRect()
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top
      ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y)
    }

    const onTouchStart = (e) => { e.preventDefault(); if (e.touches[0]) startDrawing(e.touches[0]) }
    const onTouchMove = (e) => { e.preventDefault(); if (e.touches[0]) draw(e.touches[0]) }

    canvas.addEventListener('mousedown', startDrawing)
    canvas.addEventListener('mousemove', draw)
    window.addEventListener('mouseup', stopDrawing)
    canvas.addEventListener('touchstart', onTouchStart)
    canvas.addEventListener('touchmove', onTouchMove)
    canvas.addEventListener('touchend', stopDrawing)
    window.addEventListener('resize', resizeCanvas)
    const resizeTimer = setTimeout(resizeCanvas, 100)

    // Platform search dropdown
    const searchInput = document.getElementById('platformSearch')
    const dropdown = document.getElementById('platformDropdown')
    const hiddenPlatform = document.getElementById('selectedPlatform')

    function renderDropdown(list) {
      dropdown.innerHTML = ''; dropdown.classList.remove('hidden')
      list.forEach(p => {
        const div = document.createElement('div')
        div.className = `p-4 px-6 hover:bg-slate-50 cursor-pointer text-xl transition-colors border-b border-slate-50 ${p === 'ScandiPortalen' ? 'text-blue-600 font-bold bg-blue-50/30' : 'text-slate-700'}`
        div.innerHTML = `<span>${p}</span>${p === 'ScandiPortalen' ? ' <span class="text-[12px] bg-blue-600 text-white px-3 py-1 rounded ml-3">VALD / SELECTED</span>' : ''}`
        div.onclick = () => { searchInput.value = p; hiddenPlatform.value = p; dropdown.classList.add('hidden') }
        dropdown.appendChild(div)
      })
    }

    const onSearchFocus = () => renderDropdown(platforms)
    const onSearchInput = (e) => {
      const filtered = platforms.filter(p => p.toLowerCase().includes(e.target.value.toLowerCase()))
      renderDropdown(filtered)
    }
    const onDocClick = (e) => {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) dropdown.classList.add('hidden')
    }
    searchInput.addEventListener('focus', onSearchFocus)
    searchInput.addEventListener('input', onSearchInput)
    document.addEventListener('click', onDocClick)

    // Form submit
    const form = document.getElementById('agentForm')
    const onSubmit = (e) => {
      e.preventDefault()
      if (selectedPartners.size === 0) { alert(currentLang === 'sv' ? "Vänligen välj minst en partner." : "Please select at least one partner."); return }
      const blank = document.createElement('canvas'); blank.width = canvas.width; blank.height = canvas.height
      if (canvas.toDataURL() === blank.toDataURL()) { alert(currentLang === 'sv' ? "Vänligen signera digitalt i fältet ovan." : "Please sign the application digitally above."); return }

      const modal = document.getElementById('successModal')
      const loader = document.getElementById('modalLoading')
      const content = document.getElementById('modalContent')
      modal.classList.remove('hidden')

      setTimeout(() => { loader.classList.add('hidden'); content.classList.remove('hidden'); if (window.lucide) window.lucide.createIcons() }, 3000)
    }
    form.addEventListener('submit', onSubmit)

    // Live Feed
    const feed = document.getElementById('payoutFeed')
    function addLiveRow() {
      const t = translations[currentLang]
      const names = ["E. Johansson", "B. Nilsson", "K-G. Berg", "M. Persson", "S. Larsson", "I. Karlsson"]
      const n = names[Math.floor(Math.random() * names.length)]
      const v = (Math.random() * 1500 + 200).toFixed(2)
      const div = document.createElement('div')
      div.className = "flex items-center justify-between animate-fadeIn pb-4 border-b border-slate-50 last:border-0"
      div.innerHTML = `<div class="space-y-1"><div class="text-sm font-bold text-slate-800">${n}</div><div class="text-[10px] text-slate-400 uppercase tracking-widest">${t.payout_text}</div></div><div class="text-right"><div class="text-xl font-bold text-emerald-600">+€${v}</div><div class="text-[10px] text-slate-300 font-bold">${t.payout_time}</div></div>`
      feed.prepend(div)
      if (feed.children.length > 7) feed.removeChild(feed.lastChild)
    }
    const feedInterval = setInterval(addLiveRow, 4000)
    for (let i = 0; i < 5; i++) addLiveRow()

    // Default language
    setLanguage('sv')

    return () => {
      canvas.removeEventListener('mousedown', startDrawing)
      canvas.removeEventListener('mousemove', draw)
      window.removeEventListener('mouseup', stopDrawing)
      canvas.removeEventListener('touchstart', onTouchStart)
      canvas.removeEventListener('touchmove', onTouchMove)
      canvas.removeEventListener('touchend', stopDrawing)
      window.removeEventListener('resize', resizeCanvas)
      searchInput.removeEventListener('focus', onSearchFocus)
      searchInput.removeEventListener('input', onSearchInput)
      document.removeEventListener('click', onDocClick)
      form.removeEventListener('submit', onSubmit)
      clearTimeout(resizeTimer)
      clearInterval(feedInterval)
    }
  }, [])

  return (
    <>
      {/* Header / Navigation */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white border-b-2 border-slate-100 sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 gold-gradient flex items-center justify-center rounded shadow-lg rotate-45">
            <i data-lucide="crown" className="text-white w-6 h-6 -rotate-45"></i>
          </div>
          <div>
            <span className="block text-xl font-bold tracking-widest uppercase text-slate-800">Global Partners</span>
            <span className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.3em]">Institutional Grade</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex border-2 border-slate-100 rounded-lg overflow-hidden">
            <button onClick={() => setLanguage('sv')} id="btn-sv" className="lang-btn px-4 py-1 text-sm font-bold active transition-colors">SE</button>
            <button onClick={() => setLanguage('en')} id="btn-en" className="lang-btn px-4 py-1 text-sm font-bold transition-colors">EN</button>
          </div>

          <div className="bg-emerald-50 px-5 py-2 rounded-lg border border-emerald-100 text-emerald-700">
            <span className="text-[10px] block opacity-70 font-bold uppercase" id="nav-income-label">Beräknad inkomst</span>
            <span className="font-bold text-lg" id="nav-income-val">45 000 kr / mån</span>
          </div>
          <button className="bg-slate-900 text-white px-8 py-3 rounded font-bold hover:bg-[#c5a059] transition-all" id="nav-login">Logga in</button>
        </div>
      </nav>

      <div className="max-w-[1440px] mx-auto px-6 py-12 grid lg:grid-cols-12 gap-10">

        {/* Huvudansökan */}
        <div className="lg:col-span-8 space-y-12">
          <header className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light text-slate-900 serif-title leading-tight">
              <span id="hero-t1">Ansökan för</span> <br /><span id="titleRole" className="text-[#c5a059]">Betalningsagent</span>
            </h1>
            <p className="text-slate-500 text-xl font-light max-w-2xl leading-relaxed" id="hero-desc">
              Säkra din framtida inkomst genom att ansluta dig till vårt nätverk av professionella betalningskonsulter.
            </p>
          </header>

          <section className="exclusive-card p-8 md:p-12">
            <form id="agentForm" className="space-y-12">

              {/* Namn och Plattform */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-400" id="label-name">Ditt Fullständiga Namn</label>
                  <input type="text" id="userName" required placeholder="Karl-Erik Nilsson" className="w-full border-b-2 border-slate-200 py-4 text-2xl focus:outline-none transition-all placeholder:text-slate-200 font-medium" />
                </div>

                <div className="space-y-3 relative">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-400" id="label-platform">Tradingplattform</label>
                  <div className="relative">
                    <input type="text" id="platformSearch" placeholder="..." className="w-full border-b-2 border-slate-200 py-4 text-2xl focus:outline-none transition-all placeholder:text-slate-200 font-medium" />
                    <i data-lucide="search" className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300"></i>
                  </div>
                  <div id="platformDropdown" className="hidden absolute top-full left-0 w-full mt-2 bg-white border-2 border-slate-100 shadow-2xl z-50 max-h-72 overflow-y-auto custom-scroll rounded-xl"></div>
                  <input type="hidden" id="selectedPlatform" required />
                </div>
              </div>

              {/* Inkomstmål */}
              <div className="space-y-6 bg-slate-50 p-8 rounded-xl border border-slate-100">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-400 block mb-4 font-bold" id="label-income-target">Önskad månadsinkomst</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <input type="radio" name="income" id="inc5" value="5000" className="hidden income-option" onChange={() => filterPartners(5000)} />
                    <label htmlFor="inc5" className="flex flex-col items-center justify-center p-6 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-slate-400 transition-all">
                      <span className="font-bold text-xl" id="inc-v1">5 000 kr</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input type="radio" name="income" id="inc10" value="10000" className="hidden income-option" onChange={() => filterPartners(10000)} />
                    <label htmlFor="inc10" className="flex flex-col items-center justify-center p-6 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-slate-400 transition-all">
                      <span className="font-bold text-xl" id="inc-v2">10 000 kr</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input type="radio" name="income" id="inc15" value="15000" className="hidden income-option" onChange={() => filterPartners(15000)} />
                    <label htmlFor="inc15" className="flex flex-col items-center justify-center p-6 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-slate-400 transition-all">
                      <span className="font-bold text-xl" id="inc-v3">15 000 kr</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input type="radio" name="income" id="inc20" value="20000" className="hidden income-option" onChange={() => filterPartners(20000)} />
                    <label htmlFor="inc20" className="flex flex-col items-center justify-center p-6 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-slate-400 transition-all">
                      <span className="font-bold text-xl" id="inc-v4">20 000 kr +</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Samarbetspartners */}
              <div id="partnerSection" className="space-y-6 opacity-40 pointer-events-none transition-opacity duration-500">
                <div className="flex justify-between items-end border-b-2 border-slate-50 pb-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-400 font-bold" id="label-partners">Välj dina anslutna program</label>
                  <div id="seniorBadge" className="hidden flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100">
                    <i data-lucide="award" className="w-4 h-4"></i>
                    <span id="badge-senior-text">Kvalificerad: Senior Payment Agent</span>
                  </div>
                </div>

                <div id="partnerGrid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
                  <div onClick={() => togglePartner('klarna')} id="p-klarna" data-tier="5000" className="partner-card bg-white rounded-xl cursor-pointer flex flex-col items-center justify-center space-y-2 hover:shadow-md">
                    <div className="w-12 h-12 bg-[#FFB3C7]/20 text-[#FFB3C7] rounded-full flex items-center justify-center font-bold">K</div>
                    <span className="font-bold text-slate-700 text-sm">Klarna</span>
                  </div>
                  <div onClick={() => togglePartner('revolut')} id="p-revolut" data-tier="10000" className="partner-card hidden bg-white rounded-xl cursor-pointer flex flex-col items-center justify-center space-y-2 hover:shadow-md">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center">
                      <i data-lucide="zap" className="w-5 h-5"></i>
                    </div>
                    <span className="font-bold text-slate-700 text-sm">Revolut</span>
                  </div>
                  <div onClick={() => togglePartner('resurs')} id="p-resurs" data-tier="10000" className="partner-card hidden bg-white rounded-xl cursor-pointer flex flex-col items-center justify-center space-y-2 hover:shadow-md">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold italic">R</div>
                    <span className="font-bold text-slate-700 text-sm text-center leading-tight">Resurs Bank</span>
                  </div>
                  <div onClick={() => togglePartner('remember')} id="p-remember" data-tier="15000" className="partner-card hidden bg-white rounded-xl cursor-pointer flex flex-col items-center justify-center space-y-2 hover:shadow-md">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                      <i data-lucide="shield-check" className="w-5 h-5"></i>
                    </div>
                    <span className="font-bold text-slate-700 text-sm">re:member</span>
                  </div>
                  <div onClick={() => togglePartner('seb')} id="p-seb" data-tier="20000" className="partner-card hidden bg-white rounded-xl cursor-pointer flex flex-col items-center justify-center space-y-2 hover:shadow-md">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">SEB</div>
                    <span className="font-bold text-slate-700 text-sm">SEB</span>
                  </div>
                  <div onClick={() => togglePartner('company')} id="p-company" data-tier="20000" className="partner-card hidden bg-white rounded-xl cursor-pointer flex flex-col items-center justify-center space-y-2 hover:shadow-md border-emerald-200 bg-emerald-50/20">
                    <div className="w-12 h-12 bg-slate-800 text-[#c5a059] rounded-full flex items-center justify-center">
                      <i data-lucide="briefcase" className="w-6 h-6"></i>
                    </div>
                    <span className="font-bold text-slate-900 text-sm" id="partner-enterprise">Företagsagent</span>
                  </div>
                </div>
              </div>

              {/* Villkor */}
              <div className="space-y-4 bg-red-50 p-8 rounded-xl border border-red-100">
                <label className="text-sm font-bold uppercase tracking-widest text-red-800 block mb-2 italic font-bold" id="label-terms-title">Juridisk Ansvarsförbindelse</label>
                <div className="flex items-start space-x-6">
                  <input type="checkbox" required id="terms" className="mt-1 w-8 h-8 rounded border-red-300 text-red-600 focus:ring-red-500 flex-shrink-0" />
                  <label htmlFor="terms" className="text-lg text-red-900 leading-relaxed font-semibold" id="label-terms-text">
                    Jag godkänner härmed att jag är personligt betalningsskyldig gentemot Global Partners och anslutna banker om medel försvinner, förskingras eller hanteras i strid med gällande penningtvättslagstiftning under utförandet av mina uppdrag.
                  </label>
                </div>
              </div>

              {/* Signatur */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-400 font-bold" id="label-signature">Digital Signatur (Använd mus/finger)</label>
                  <button type="button" onClick={clearSignature} className="text-xs font-bold text-red-500 hover:underline uppercase tracking-widest" id="btn-clear">Rensa</button>
                </div>
                <div className="relative w-full h-48">
                  <canvas id="signaturePad" className="w-full h-full rounded-xl"></canvas>
                </div>
              </div>

              <button type="submit" className="w-full py-8 bg-slate-900 text-white font-bold text-2xl tracking-[0.2em] uppercase hover:bg-[#c5a059] transition-all shadow-2xl rounded-xl flex items-center justify-center space-x-4 group">
                <span id="btn-submit-text">Signera & Skicka Ansökan</span>
                <i data-lucide="arrow-right" className="w-8 h-8 group-hover:translate-x-2 transition-transform"></i>
              </button>
            </form>
          </section>

          {/* Testimonials */}
          <section className="space-y-12 pb-20">
            <div className="text-center">
              <h2 className="text-4xl serif-title text-slate-900" id="test-title">Möt våra seniora agenter</h2>
              <p className="text-slate-500 font-light mt-2 italic text-xl" id="test-desc">Erfarenheter från verifierade konsulter över hela Sverige</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Gunnar */}
              <div className="exclusive-card p-10 space-y-6 flex flex-col items-center text-center border-t-4 border-t-[#c5a059]">
                <div className="relative w-40 h-40">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJj7QuVHGYyG-1GpKBE941ZrOYZHt97y8Lg&s" className="w-full h-full rounded-full border-4 border-white shadow-xl object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="" />
                  <div className="senior-badge uppercase" id="badge-v1">Verifierad</div>
                </div>
                <p className="text-lg text-slate-700 font-light italic leading-relaxed" id="test-gunnar-text">"Detta har gett mig en trygg extra inkomst på ca 15 000 kr varje månad. Jag kan verkligen rekommendera programmet!"</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">— Gunnar, 74 år</p>
              </div>
              {/* Margareta */}
              <div className="exclusive-card p-10 space-y-6 flex flex-col items-center text-center border-t-4 border-t-[#c5a059]">
                <div className="relative w-40 h-40">
                  <img src="data:image/jpeg;base64,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" className="w-full h-full rounded-full border-4 border-white shadow-xl object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="" />
                  <div className="senior-badge uppercase" id="badge-v2">Verifierad</div>
                </div>
                <p className="text-lg text-slate-700 font-light italic leading-relaxed" id="test-marga-text">"Friheten är fantastisk. Nu har jag råd med resor jag drömt om som pensionär. Anslut dig idag, det är det bästa jag gjort!"</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">— Margareta, 71 år</p>
              </div>
              {/* Sven-Erik */}
              <div className="exclusive-card p-10 space-y-6 flex flex-col items-center text-center border-t-4 border-t-[#c5a059]">
                <div className="relative w-40 h-40">
                  <img src="https://img.freepik.com/free-photo/senior-man-holding-book-medium-shot_23-2148399490.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-full rounded-full border-4 border-white shadow-xl object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="" />
                  <div className="senior-badge uppercase" id="badge-v3">Verifierad</div>
                </div>
                <p className="text-lg text-slate-700 font-light italic leading-relaxed" id="test-sven-text">"Provisionen är bäst på marknaden och systemet är väldigt tydligt. En mycket stark rekommendation från min sida!"</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">— Sven-Erik, 78 år</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="exclusive-card overflow-hidden sticky top-32">
            <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em]" id="side-payout-title">Utbetalningar Live</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase" id="side-realtime">Realtid</span>
            </div>
            <div id="payoutFeed" className="p-6 space-y-6"></div>
            <div className="p-8 border-t-2 border-slate-50 bg-slate-50/50">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1" id="side-calc-label">Beräknad månadskonsultation</label>
              <div className="text-4xl font-light serif-title text-emerald-600" id="side-calc-val">45 000 kr</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Success */}
      <div id="successModal" className="hidden fixed inset-0 z-[100] flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"></div>
        <div className="exclusive-card max-w-xl w-full p-12 text-center relative z-10 border-[#c5a059]">
          <button type="button" onClick={closeModal} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors shadow-md z-20">
            <i data-lucide="x" className="w-6 h-6"></i>
          </button>
          <div id="modalLoading" className="space-y-6">
            <div className="w-20 h-20 border-4 border-slate-200 border-t-[#c5a059] rounded-full animate-spin mx-auto"></div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-900" id="modal-wait">Genererar Anställningskontrakt...</h2>
          </div>
          <div id="modalContent" className="hidden space-y-8">
            <div className="w-24 h-24 gold-gradient rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <i data-lucide="check" className="text-white w-12 h-12"></i>
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-light serif-title" id="modal-welcome">Välkommen!</h2>
              <p className="text-2xl text-slate-600" id="modal-qualify">
                <span id="modal-qualify-prefix">Du har kvalificerat dig som </span>
                <strong className="font-bold text-slate-900" id="modal-qualify-role">Betalningsagent</strong>
                <span>.</span>
              </p>
              <div className="bg-emerald-50 border-2 border-emerald-100 p-8 rounded-xl space-y-4">
                <p className="text-emerald-800 font-bold text-xl leading-relaxed" id="modal-provision">
                  Ditt kontrakt är klart. Din 6% provision sätts in direkt på ditt konto vid varje transaktion.
                </p>
                <p className="text-2xl font-bold text-emerald-700" id="modal-forecast">Prognos: 45 000 kr / mån</p>
              </div>
            </div>
            <button onClick={downloadContract} className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl uppercase tracking-widest text-lg hover:bg-[#c5a059] transition-all flex items-center justify-center space-x-3">
              <i data-lucide="download" className="w-6 h-6"></i>
              <span id="btn-download">Ladda ner kontrakt (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
