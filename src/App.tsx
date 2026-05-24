import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Mail,
  Clock, 
  Facebook, 
  Youtube, 
  ChevronRight, 
  ArrowRight,
  Sliders,
  CheckCircle,
  Menu,
  X,
  Plus,
  Minus,
  Settings,
  Activity,
  UserCheck
} from 'lucide-react';
import { SYSTEM_SERVICES, WORKSHOP_STEPS } from './workshopData';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [distanceKm, setDistanceKm] = useState(15);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['serwis', 'warsztat', 'rejestracja-sekcja', 'kontakt'];
      const scrollPosition = window.scrollY + 250; // trigger offset for visual balance

      let currentSection = '';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Automatically fallback to kontakt near the end of scroll
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        currentSection = 'kontakt';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic calculated transport values
  const transportVal = (() => {
    const cost = Math.max(0, distanceKm - 20) * 4 + 60;
    return {
      price: cost,
      freeWithService: distanceKm <= 20
    };
  })();

  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] font-sans antialiased select-none">
      
      {/* SOLID SIGNAL BAR Accent (No unrequested gradient, 5px red) */}
      <div className="h-[5px] bg-[#CC2200] w-full" />

      {/* STICKY UTILITY BAR */}
      <div className="bg-[#1A1A1A] text-zinc-400 py-3 px-6 text-xs font-mono border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F5C800]" />
            <span className="text-zinc-300 tracking-[0.15em] uppercase text-[9px]">DIAGNOSTYKA • SPRZEDAŻ • TRANSPORT MASZYN OGRODOWYCH</span>
          </div>
          <div className="flex items-center gap-6 text-[10px]">
            <span className="flex items-center gap-1.5 text-zinc-300"><Clock className="w-3.5 h-3.5 text-[#CC2200]" /> PN - SB: 7:00 - 20:00</span>
            <span className="text-zinc-600">|</span>
            <a href="tel:503198307" className="text-white hover:text-[#F5C800] tracking-wider transition-colors font-bold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#CC2200]" /> 503 198 307
            </a>
          </div>
        </div>
      </div>

      {/* NAVIGATION HEADER - Clean, High contrast */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-[#E0E0E0] py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Brand Frame */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden border border-[#E0E0E0] group-hover:border-[#CC2200] transition-colors rounded-sm">
              <img 
                src="https://i.ibb.co/4R81yVb0/638081677-1041686919021059-8857343836275545084-n.jpg" 
                alt="Logo Traktorki Kosiarki Jasło" 
                className="w-full h-full object-cover transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-display font-extrabold text-lg sm:text-xl tracking-tighter uppercase leading-none text-zinc-950">
                TRAKTORKI KOSIARKI <span className="text-[#CC2200]">JASŁO</span>
              </div>
              <p className="font-sans text-[8px] tracking-[0.25em] text-zinc-400 uppercase font-black leading-none mt-1">
                Naprawa • Sprzedaż • Transport
              </p>
            </div>
          </a>

          {/* Dynamic Interactive Links */}
          <nav className="hidden lg:flex items-center gap-10 text-[10px] font-display font-bold uppercase tracking-widest text-zinc-600">
            <a 
              href="#serwis" 
              className={`transition-all pb-1 border-b-2 ${
                activeSection === 'serwis' 
                  ? 'text-[#CC2200] border-[#CC2200]' 
                  : 'text-zinc-600 border-transparent hover:text-[#CC2200] hover:border-[#CC2200]'
              }`}
            >
              Zakres napraw
            </a>
            <a 
              href="#warsztat" 
              className={`transition-all pb-1 border-b-2 ${
                activeSection === 'warsztat' 
                  ? 'text-[#CC2200] border-[#CC2200]' 
                  : 'text-zinc-600 border-transparent hover:text-[#CC2200] hover:border-[#CC2200]'
              }`}
            >
              O warsztacie
            </a>
            <a 
              href="#rejestracja-sekcja" 
              className={`transition-all pb-1 border-b-2 ${
                activeSection === 'rejestracja-sekcja' 
                  ? 'text-[#CC2200] border-[#CC2200]' 
                  : 'text-zinc-600 border-transparent hover:text-[#CC2200] hover:border-[#CC2200]'
              }`}
            >
              Kalkulator transportu
            </a>
            <a 
              href="#kontakt" 
              className={`transition-all pb-1 border-b-2 ${
                activeSection === 'kontakt' 
                  ? 'text-[#CC2200] border-[#CC2200]' 
                  : 'text-zinc-600 border-transparent hover:text-[#CC2200] hover:border-[#CC2200]'
              }`}
            >
              Kontakt i Dojazd
            </a>
          </nav>

          {/* Clean Action Options */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://www.facebook.com/profile.php?id=100095392813419" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-[#E0E0E0] hover:text-[#CC2200] hover:border-[#CC2200] transition-colors"
              aria-label="Facebook Link"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://www.youtube.com/@naprawatraktorkowjaslo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-[#E0E0E0] hover:text-[#CC2200] hover:border-[#CC2200] transition-colors"
              aria-label="YouTube Link"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a 
              href="tel:503198307" 
              className="bg-[#1A1A1A] hover:bg-[#CC2200] text-white py-2 px-5 text-[10px] font-display font-black tracking-widest uppercase transition-colors"
            >
              ZADZWOŃ TERAZ
            </a>
          </div>

          {/* Mobile hamburger (Thin lines) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-zinc-950 border border-[#E0E0E0]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Full Screen Overlay Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[110px] bg-white z-50 flex flex-col justify-start px-8 py-10 space-y-6"
            >
              <nav className="flex flex-col space-y-6 text-lg font-display font-extrabold uppercase tracking-widest text-[#1A1A1A]">
                <a 
                  href="#serwis" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`border-b border-zinc-100 pb-3 transition-colors ${activeSection === 'serwis' ? 'text-[#CC2200]' : 'text-[#1A1A1A]'}`}
                >
                  Zakres napraw
                </a>
                <a 
                  href="#warsztat" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`border-b border-zinc-100 pb-3 transition-colors ${activeSection === 'warsztat' ? 'text-[#CC2200]' : 'text-[#1A1A1A]'}`}
                >
                  O warsztacie
                </a>
                <a 
                  href="#rejestracja-sekcja" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`border-b border-zinc-100 pb-3 transition-colors ${activeSection === 'rejestracja-sekcja' ? 'text-[#CC2200]' : 'text-[#1A1A1A]'}`}
                >
                  Kalkulator transportu
                </a>
                <a 
                  href="#kontakt" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`transition-colors ${activeSection === 'kontakt' ? 'text-[#CC2200]' : 'text-[#1A1A1A]'}`}
                >
                  Kontakt i Dojazd
                </a>
              </nav>

              <div className="pt-8 border-t border-[#E0E0E0] flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100095392813419" target="_blank" rel="noopener noreferrer" className="p-3 border border-zinc-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@naprawatraktorkowjaslo" target="_blank" rel="noopener noreferrer" className="p-3 border border-zinc-200">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              <a href="tel:503198307" className="w-full bg-[#CC2200] text-white py-4 text-center font-display font-black text-sm uppercase tracking-widest mt-auto">
                ZADZWOŃ: 503 198 307
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* RED ACCENT LINE span */}
      <div className="h-[1px] bg-[#E0E0E0] w-full" />

      {/* HERO SECTION - Dark, Minimal, Compact Spacing without excessive vertical gap above heading */}
      <section id="hero" className="relative bg-[#1A1A1A] text-white overflow-hidden py-14 lg:py-24">
        
        {/* Background outline/faded word pattern representation */}
        <div className="absolute top-8 right-10 select-none opacity-[0.03] text-white font-display font-extrabold text-[12vw] tracking-wider leading-none pointer-events-none">
          JASŁO
        </div>

        {/* Technical silhouette Faint Vector (1/4 total SVG in page) */}
        <div className="absolute top-10 right-12 w-1/3 h-1/2 opacity-[0.04] pointer-events-none hidden lg:block select-none">
          <svg viewBox="0 0 100 65" className="w-full h-full text-white" stroke="currentColor" fill="none" strokeWidth="0.3">
            <rect x="20" y="30" width="55" height="15" rx="1" />
            <circle cx="32" cy="45" r="9" />
            <circle cx="62" cy="45" r="11" />
            <path d="M 68 30 L 60 12 L 40 12 L 35 30" />
            <line x1="48" y1="12" x2="40" y2="30" />
          </svg>
        </div>

        {/* Pure design section label */}
        <div className="absolute top-6 left-6 sm:left-10 md:top-8 font-mono text-zinc-600 text-[9px] sm:text-[10px] tracking-widest uppercase pb-1 border-b border-zinc-800 hidden sm:block">
          PROFESJONALNY SERWIS MECHANICZNY
        </div>

        {/* Content grid with balanced compact margins */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="max-w-7xl mx-auto w-full px-6 pt-12 sm:pt-16 pb-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          {/* Main heading */}
          <div className="lg:col-span-8 text-left">
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
              }}
              className="inline-block bg-[#F5C800] text-zinc-950 font-mono text-[9px] tracking-[0.2em] font-black uppercase px-2.5 py-1 mb-6"
            >
              SOLIDNA REPARACJA I SERWIS
            </motion.div>

            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="font-display font-extrabold tracking-tight uppercase leading-[0.9] text-5xl sm:text-6xl lg:text-[5.4rem] max-w-3xl mb-4"
            >
              NIEOCZEKIWANY BRAK MOCY? <span className="text-[#CC2200]">PRZYWIEŹ DO NAS.</span>
            </motion.h1>

            {/* Red accent line under heading */}
            <motion.div 
              variants={{
                hidden: { width: 0 },
                visible: { width: 50, transition: { duration: 0.6, delay: 0.3 } }
              }}
              className="h-[2.5px] bg-[#CC2200] mb-8" 
            />

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="font-sans font-light text-zinc-400 text-sm sm:text-base leading-relaxed max-w-sm"
            >
              Twój traktorek ogrodowy stracił siłę pod wzniesienia lub nierówno tnie trawę? Nie odkładaj naprawy na potem. Zgłoś kosiarkę przez formularz i zamów nasz pewny transport lawetą.
            </motion.p>

          </div>

          {/* Simple asymmetric CTA container bottom-right */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, delay: 0.5 } }
            }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end mt-8 lg:mt-0"
          >
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#1A1A1A", borderColor: "#FFFFFF" }}
              whileTap={{ scale: 0.98 }}
              href="#rejestracja-sekcja" 
              className="bg-[#CC2200] text-white border border-[#CC2200] px-8 py-5 text-xs font-display font-extrabold tracking-widest uppercase transition-all flex items-center gap-3"
            >
              ZGŁOŚ DO SERWISU <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

        </motion.div>

        {/* Ultra-subtle light background frame alignment line */}
        <div className="h-[1px] bg-zinc-800/60 w-full" />
      </section>

      {/* SECTION 1: ONE STRONG MESSAGE / ESSENCE STATEMENT (High-End Editorial look) */}
      <section className="py-24 bg-white border-b border-[#E0E0E0] select-none overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Fills only 55% space - asymmetry */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <span className="font-mono text-[#CC2200] text-xs font-bold tracking-[0.25em] uppercase block">
              SOLIDNE RZEMIOSŁO I TRAKTORKI
            </span>
            
            <h2 className="font-display font-extrabold text-[#1A1A1A] uppercase leading-[1.0] text-3xl sm:text-[2.6rem] max-w-xl">
              Uczciwe podejście, czysty warsztat i pełna dokładność przy każdym traktorku.
            </h2>
            
            <p className="font-sans font-light text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg">
              Rozumiemy, jak uciążliwa jest awaria kosiarki w środku sezonu. Dlatego w naszym warsztacie w Jaśle każdą maszynę traktujemy z pełnym zaangażowaniem. Regenerujemy skrzynie hydrostatyczne, sprawdzamy paski, ostrzymy noże i przywracamy silnikom pełną moc.
            </p>
          </motion.div>

          {/* Fills remaining space with structural spacing of key features, no boxes on white background */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 border-l border-[#E0E0E0] pl-8 space-y-8 text-left"
          >
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <span className="font-mono text-[#CC2200] text-[10px] uppercase tracking-wider block font-bold mb-1">TESTY POD OBCIĄŻENIEM</span>
              <p className="font-sans font-light text-zinc-600 text-xs leading-relaxed">
                Każdy sprzęt po skończonej naprawie sprawdzamy w terenie na wzniesieniach i przy rozruchu noży pod pełnym obciążeniem.
              </p>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <span className="font-mono text-[#CC2200] text-[10px] uppercase tracking-wider block font-bold mb-1">ZATWIERDZENIE KOSZTÓW</span>
              <p className="font-sans font-light text-zinc-600 text-xs leading-relaxed">
                Po dokonaniu dokładnych oględzin i demontażu, dzwonimy do Ciebie z rzetelną wyceną. Bez niespodziewanych opłat.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: THE SPECS LIST (No generic cards, elegant custom line table listing) */}
      <section id="serwis" className="py-24 bg-[#F5F5F5] border-b border-[#E0E0E0] select-none">
        

        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl mb-16 text-left">
            <span className="font-mono text-[#CC2200] text-xs tracking-[0.25em] uppercase font-bold block mb-2">SPECYFIKACJA SERWISU ORAZ PAKIETÓW</span>
            <h2 className="font-display font-extrabold tracking-tight text-[#1A1A1A] uppercase text-4xl leading-none">
              ZOBACZ CZYSTE WARUNKI WSPÓŁPRACY
            </h2>
            <div className="w-12 h-1 bg-[#CC2200] mt-4" />
          </div>

          {/* Custom tabular service display, clean line elements */}
          <div className="border-t border-zinc-900 mt-8 text-left">
            {SYSTEM_SERVICES.map((srv, idx) => (
              <motion.div 
                key={srv.id} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.12 }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.75)", x: 4 }}
                className="py-10 border-b border-[#E0E0E0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-4 transition-all duration-300"
              >
                
                {/* Index / Service Badge */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[#CC2200] text-xs font-bold">[ 0{idx + 1} ]</span>
                    {srv.recommended && (
                      <span className="bg-[#F5C800] text-zinc-950 font-mono text-[8px] tracking-[0.15em] uppercase font-bold px-2 py-0.5 animate-pulse">
                        ZALECANE PRZED SEZONEM
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-extrabold text-zinc-900 text-lg uppercase tracking-tight">
                    {srv.name}
                  </h3>
                  <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
                    CZAS REALIZACJI: {srv.duration}
                  </div>
                </div>

                {/* Technical Points representation */}
                <div className="lg:col-span-5">
                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block mb-3">ZAKRES PRAC SERWISOWYCH:</span>
                  <ul className="space-y-2.5 text-zinc-600 text-xs font-sans font-light">
                    {srv.specs.map((item, keyIdx) => (
                      <li key={keyIdx} className="flex items-start gap-2.5">
                        <span className="text-[#CC2200] font-bold text-[10px] select-none mt-0.5">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Trigger call */}
                <div className="lg:col-span-3 lg:text-right flex flex-col items-start lg:items-end justify-between h-full gap-4">
                  <div>
                    <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-wider block mb-1">SZACOWANY KOSZT USŁUGI:</span>
                    <span className="font-mono text-[#CC2200] text-sm font-semibold whitespace-nowrap bg-white px-3 py-1.5 border border-[#E0E0E0] md:inline-block">
                      {srv.price}
                    </span>
                  </div>
                  <a 
                    href="#rejestracja-sekcja" 
                    className="inline-flex items-center gap-2 font-mono text-[9px] font-bold text-zinc-500 hover:text-[#CC2200] uppercase tracking-widest"
                  >
                    OBLICZ KOSZT TRANSPORTU <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: EDITORIAL LAYOUT FEATURING THE USER'S WORK LAB PHOTO */}
      <section id="warsztat" className="py-24 bg-[#1A1A1A] text-white relative border-b border-zinc-900 overflow-hidden">
        
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-[#121212] opacity-100" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column (5 cols) - Asymmetrical framed display for the real work photo */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative border border-zinc-700 bg-[#1A1A1A] p-4 shadow-2xl">
                
                <div className="absolute -top-3 left-6 bg-[#1A1A1A] font-mono text-[8px] text-zinc-400 uppercase tracking-widest px-2.5 py-0.5 border border-zinc-700 z-10">
                  REALNE ZDJĘCIE Z NASZEGO WARSZTATU
                </div>

                <div className="relative aspect-square overflow-hidden bg-zinc-800">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src="https://i.ibb.co/N2mHFhnq/606433952-978873431969075-8105606869903917327-n.jpg"
                    alt="Naprawa traktorków kosiarki w warsztacie"
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay outline symbol watermark with slow rotation animation */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="absolute bottom-3 right-3 p-2 bg-[#1A1A1A]/90 text-[#F5C800]"
                  >
                    <Settings className="w-4 h-4" />
                  </motion.div>
                </div>

                <div className="mt-4 pt-1 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                  <span>SERWIS MASZYN W JAŚLE</span>
                  <span className="text-[#CC2200]">STANOWISKO CZYNNE</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column (7 cols) - Beautiful technical steps */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-left space-y-8"
            >
              <span className="font-mono text-[#F5C800] text-xs font-bold tracking-[0.25em] uppercase block">
                SPRAWNA METODA SERWISOWA
              </span>

              <h2 className="font-display font-extrabold text-white uppercase text-3xl sm:text-[2.6rem] leading-none max-w-xl">
                Wygodny odbiór maszyny spod Twojego domu
              </h2>

              <p className="font-sans font-light text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Każdą naprawioną maszynę poddajemy testom statycznym i dynamicznym pod wysokim ciśnieniem, upewniając się, że skrzynia jest szczelna, a silnik stabilnie trzyma fabryczne obroty.
              </p>

              {/* Steps container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-zinc-800 pt-8 text-left">
                {WORKSHOP_STEPS.map((step, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                    className="space-y-1.5"
                  >
                    <div className="font-mono text-[#CC2200] text-xs font-bold flex items-center gap-2">
                      <span>[{step.num}]</span>
                      <span className="h-[1px] bg-zinc-800 flex-1" />
                    </div>
                    <h4 className="font-display font-extrabold text-zinc-100 uppercase text-sm tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-zinc-400 font-sans font-light text-[11px] leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 4: SPLIT INTERACTIVE SYSTEM PANEL (Calculator & Transportation Pricing) */}
      <section id="rejestracja-sekcja" className="py-24 bg-white border-b border-[#E0E0E0] select-none">
        
        {/* Dynamic header */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column (4 cols out of 12) - Context and Instructions */}
            <div className="lg:col-span-4 text-left space-y-6">
              <span className="font-mono text-[#CC2200] text-xs font-bold tracking-[0.25em] uppercase block">
                LOGISTYKA & TRANSPORT
              </span>
              <h2 className="font-display font-extrabold text-zinc-900 uppercase text-3xl sm:text-[2.5rem] leading-[1.0] max-w-sm">
                Wycena kosztu transportu
              </h2>
              <p className="font-sans font-light text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-xs">
                Użyj naszego kalkulatora, aby błyskawicznie obliczyć koszt odbioru i dowozu Twojej kosiarki lub traktorka dwustronnie naszym bezpiecznym transportem z najazdami.
              </p>


            </div>

            {/* Right Interactive Form Box (8 cols out of 12) */}
            <div className="lg:col-span-8 bg-[#F5F5F5] p-8 border border-[#E0E0E0] text-left">
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <span className="font-mono text-[#CC2200] text-[9px] uppercase tracking-widest font-bold">ZAKRES I KOSZT DOJAZDU</span>
                  <h3 className="font-display font-extrabold text-[#1A1A1A] text-lg uppercase mt-1">
                    Ustal odległość transportu pod Twoje drzwi
                  </h3>
                </div>

                <div className="space-y-6 font-mono text-xs">
                  
                  {/* Distance adjustment counter */}
                  <div className="bg-white p-5 border border-[#E0E0E0] space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-zinc-400 text-[9px] uppercase block">Odległość od warsztatu (w jedną stronę):</span>
                        <motion.span 
                          key={distanceKm}
                          initial={{ scale: 0.9, opacity: 0.7 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="font-sans font-black text-[#1A1A1A] text-2xl tracking-tighter block"
                        >
                          {distanceKm} KM
                        </motion.span>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          type="button"
                          onClick={() => setDistanceKm(prev => Math.max(1, prev - 5))}
                          className="p-3 bg-zinc-100 hover:bg-[#CC2200] hover:text-white transition-colors border border-zinc-200 cursor-pointer"
                          title="Odejmij 5 KM"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          type="button"
                          onClick={() => setDistanceKm(prev => Math.min(100, prev + 5))}
                          className="p-3 bg-zinc-100 hover:bg-[#CC2200] hover:text-white transition-colors border border-zinc-200 cursor-pointer"
                          title="Dodaj 5 KM"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </div>
                    {/* Interactive progress bar */}
                    <div className="h-1 bg-zinc-100 w-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, (distanceKm / 50) * 100)}%` }}
                        transition={{ type: "spring", stiffness: 80, damping: 12 }}
                        className={`h-full ${distanceKm <= 20 ? 'bg-[#F2C100]' : 'bg-[#CC2200]'}`}
                      />
                    </div>
                  </div>

                  {/* Calculated result display */}
                  <div className="bg-white p-6 border border-[#E0E0E0] space-y-4">
                    <div>
                      <span className="text-zinc-400 text-[9px] uppercase block">Status opłaty transportowej:</span>
                      {transportVal.freeWithService ? (
                        <span className="font-display font-extrabold text-[#CC2200] text-lg uppercase block">
                          DARMOWY W OBIE STRONY
                        </span>
                      ) : (
                        <span className="font-display font-extrabold text-[#CC2200] text-lg uppercase block">
                          SZACOWANO: {transportVal.price} PLN
                        </span>
                      )}
                    </div>

                    <p className="text-zinc-500 font-sans text-xs font-light leading-relaxed">
                      Oferujemy bezpieczny odbiór maszyny ze sprawnymi najazdami z okolic Jasła (38-200), Skołyszyna, Kołaczyc, Biecza, Krosna i powiatów ościennych. 
                      {transportVal.freeWithService && ' Przy zgłoszeniu naprawy traktorka do odległości 20km transport jest darmowy.'}
                    </p>
                  </div>

                  <a 
                    href="tel:503198307"
                    className="w-full bg-[#1A1A1A] hover:bg-[#CC2200] text-white py-4 text-xs font-display font-extrabold uppercase tracking-widest transition-colors text-center block"
                  >
                    ZADZWOŃ I USTAL SZCZEGÓŁY ODBIORU
                  </a>

                </div>
              </motion.div>

            </div>

          </div>
        </div>

      </section>

      {/* SECTION 6: MAP & CONTACT (Pure Technical Info Panels, Asymmetric Layout) */}
      <section id="kontakt" className="py-24 bg-[#1A1A1A] text-white border-b border-zinc-950 select-none overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Col (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 text-left space-y-6"
            >
              <span className="font-mono text-[#CC2200] text-xs font-bold tracking-[0.25em] uppercase block">
                ADRES ARCHIWUM WARSZTATU I DOJAZD
              </span>

              <h2 className="font-display font-extrabold text-white uppercase text-3xl sm:text-[2.5rem] leading-none">
                NASZ ADRES I TELEFON W JAŚLE
              </h2>

              {/* High Contrast Red Accent line */}
              <div className="w-[50px] h-[3px] bg-[#CC2200]" />

              <p className="font-sans font-light text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                Masz problem z dostarczeniem ciężkiego lub niesprawnego traktorka kosiarki? Zadzwoń bezpośrednio lub skorzystaj z kalkulatora odległości na stronie. Nasz warsztat mieści się w Jaśle, organizujemy bezpieczny transport ze sprawnym najazdem w promieniu do 50 km.
              </p>

              {/* No SVG clutter list representation */}
              <div className="space-y-5 pt-8 border-t border-zinc-800 font-mono text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#CC2200] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 text-[10px] block uppercase">SIEDZIBA GŁÓWNA WARSZTATU:</span>
                    <span>Jasło 38-200, woj. podkarpackie, Polska</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#CC2200] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 text-[10px] block uppercase">ZADZWOŃ BEZPOŚREDNIO:</span>
                    <a href="tel:503198307" className="text-white hover:text-[#F5C800] font-bold text-sm">503 198 307</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#CC2200] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 text-[10px] block uppercase">ZAPYTANIA EMAIL:</span>
                    <span>traktorki@interia.com</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Map frame Col (7 cols) - Clean static placeholder alignment */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="lg:col-span-7 w-full"
            >
              <div className="border border-zinc-800 p-3 bg-zinc-950">
                
                {/* Dimensions */}
                <div className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest block mb-2 text-right">
                  POŁOŻENIE WARSZTATU: JASŁO (38-200)
                </div>

                {/* Aesthetic Map block */}
                <div className="relative aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center p-6 text-center">
                  
                  {/* Simple location compass lines */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                    className="absolute inset-0 opacity-[0.06] pointer-events-none select-none"
                  >
                    <svg className="w-full h-full text-white" stroke="currentColor" strokeWidth="1">
                      <line x1="50%" y1="0" x2="50%" y2="100%" />
                      <line x1="0" y1="50%" x2="100%" y2="50%" />
                      <circle cx="50%" cy="50%" r="40" />
                    </svg>
                  </motion.div>

                  <div className="relative z-10 max-w-sm space-y-4">
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-[#CC2200] text-white p-2.5 max-w-max mx-auto rounded-sm shadow-lg"
                    >
                      <MapPin className="w-5 h-5" />
                    </motion.div>
                    <h3 className="font-display font-extrabold text-sm uppercase text-white tracking-wide">
                      TEREN DZIAŁANIA: JASŁO I SĄSIEDNIE GMINY
                    </h3>
                    <p className="font-sans font-light text-xs text-zinc-400 leading-normal">
                      Pracujemy lokalnie na Podkarpaciu. Odbieramy pojazdy koszące od klientów ułatwiając logistykę całego serwisu. Dysponujemy stabilnymi najazdami dla ciężkich traktorków, kosiarek i riderów.
                    </p>
                    <motion.a 
                      whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.1)", zIndex: 10 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://www.facebook.com/profile.php?id=100095392813419" 
                      target="_blank" 
                      className="inline-block border border-zinc-700 hover:border-white text-zinc-300 hover:text-white py-2 px-4 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Zobacz Nasz Profil Facebook
                    </motion.a>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION: Two Column Professional Grid, Minimal Layout */}
      <footer className="bg-[#1A1A1A] text-zinc-500 py-16 text-xs border-t border-zinc-800 select-none">
        
        {/* Red separator line accent for Footer top */}
        <div className="h-[2px] bg-[#CC2200] w-20 mb-10 mx-6 md:mx-auto max-w-7xl" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-left">
          
          <div className="space-y-4">
            <span className="font-display font-extrabold tracking-tight uppercase text-white text-base">
              TRAKTORKI KOSIARKI <span className="text-[#CC2200]">JASŁO</span>
            </span>
            <p className="font-sans font-light text-zinc-500 text-xs leading-relaxed max-w-md">
              Kwalifikowany warsztat techniczny i rzemieślnicza sprzedaż traktorków kosiarek. Przywracamy optymalną kulturę pracy silnika spalinowego, precyzyjną sterowność i właściwe parametry ostrzenia elementów tnących.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=100095392813419" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@naprawatraktorkowjaslo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4 text-left md:text-right font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
            <span className="text-zinc-500 text-[9px] block">DANE KONTAKTOWE I ADRES:</span>
            <p className="text-zinc-300 leading-normal">
              Jasło 38-200, woj. podkarpackie<br />
              Telefon kontaktowy: <strong className="text-white">503 198 307</strong><br />
              Napisz do nas: traktorki@interia.com
            </p>
            <p className="text-zinc-600 text-[9px] font-sans leading-relaxed tracking-normal pt-4">
              © 2026 Traktorki Kosiarki Jasło. Rzetelny rzemieślniczy serwis maszyn ogrodowych. Wszelkie prawa zastrzeżone.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
