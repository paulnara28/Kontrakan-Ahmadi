import { useState, useEffect } from 'react';
import AboutUs from './components/AboutUs.tsx';
import ContactForm from './components/ContactForm.tsx';
import RoomDetails from './components/RoomDetails.tsx';
import FAQAndReviews from './components/FAQAndReviews.tsx';
import roomHeroImg from './assets/images/room_hero_1779427904467.png';
import { 
  Home, MapPin, Maximize2, ShieldCheck, Zap, Droplet, Clock, Phone, Menu, X, Check, Heart, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [popupSelectedMsg, setPopupSelectedMsg] = useState('Halo Pak Ahmadi, apakah sisa 2 kamar sewa Rp 1.250.000 masih tersedia?');

  // Monitor scroll for header background transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show contact popup after a short delayed timer on load with subtle introduction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactPopup(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleStickyWhatsApp = () => {
    // Show the interactive wizard/popup on screen
    setShowContactPopup(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" id="ahmadi-kontrakan-root">
      
      {/* 1. NAVIGASI ATAS: HEADER STICKY WITH SLEEK SHADOW */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-md nav-shadow border-b border-slate-100 py-4 md:py-5' 
            : 'bg-white/90 backdrop-blur-md py-6 md:py-8'
        }`}
        id="main-sticky-header"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand Logo Kiri */}
          <button 
            onClick={() => scrollToSection('ahmadi-kontrakan-root')}
            className="flex items-center gap-2 group text-left focus:outline-none cursor-pointer"
            id="brand-logo-button"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
              AK
            </div>
            <div>
              <h1 className="font-sans font-black text-slate-900 tracking-tight text-sm md:text-base leading-none">
                AHMADI <span className="text-blue-600">KONTRAKAN</span>
              </h1>
              <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase mt-1">Hunian Bersih & Tenang</p>
            </div>
          </button>

          {/* Navigasi Desktop Tengah */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-600 tracking-wider uppercase">
            <button 
              onClick={() => scrollToSection('kelebihan-utama')} 
              className="hover:text-blue-600 transition-colors cursor-pointer"
              id="nav-link-fasilitas"
            >
              Fasilitas
            </button>
            <button 
              onClick={() => scrollToSection('galeri-dan-harga')} 
              className="hover:text-blue-600 transition-colors cursor-pointer"
              id="nav-link-harga"
            >
              Galeri & Harga
            </button>
            <button 
              onClick={() => scrollToSection('tentang-kami')} 
              className="hover:text-blue-600 transition-colors cursor-pointer"
              id="nav-link-tentang"
            >
              Tentang Kami
            </button>
          </nav>

          {/* Indikator Status & CTA Kanan */}
          <div className="flex items-center gap-3">
            {/* Live Indicator Lamp representing the Sleek pulse indicator */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-full py-1.5 px-3 md:px-4 text-[10px] md:text-xs font-bold text-emerald-800 flex items-center gap-2">
              <span className="pulse-indicator"></span>
              <span className="font-semibold italic">Sisa 2 Kamar Tersedia</span>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Panel Menu Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden font-sans shadow-lg"
              id="mobile-navigation-drawer"
            >
              <div className="px-6 py-4 flex flex-col gap-3 text-sm font-bold text-slate-700">
                <button 
                  onClick={() => scrollToSection('kelebihan-utama')} 
                  className="text-left py-2 hover:text-blue-600 border-b border-slate-50 cursor-pointer"
                >
                  Fasilitas Utama
                </button>
                <button 
                  onClick={() => scrollToSection('galeri-dan-harga')} 
                  className="text-left py-2 hover:text-blue-600 border-b border-slate-50 cursor-pointer"
                >
                  Galeri Foto & Info Harga
                </button>
                <button 
                  onClick={() => scrollToSection('tentang-kami')} 
                  className="text-left py-2 hover:text-blue-600 border-b border-slate-50 cursor-pointer"
                >
                  Tentang Pengenang Bpk Ahmadi
                </button>
                <button 
                  onClick={() => {
                    setShowContactPopup(true);
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left py-2 hover:text-emerald-600 cursor-pointer text-emerald-600 flex items-center gap-1.5 border-t border-slate-50 pt-3"
                >
                  <Phone className="w-4 h-4" />
                  Hubungi Pengelola (WhatsApp)
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. MAIN LANDING PAGE SECTIONS */}
      <main className="flex-1 pt-28 md:pt-36">

        {/* THE HERO SECTION */}
        <section className="px-4 md:px-8 max-w-6xl mx-auto mb-12" id="hero-banner-frame">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm">
            
            {/* Teks Hero */}
            <div className="lg:col-span-7 space-y-6 lg:pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100/50 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Hunian Bersih & Nyaman di Lokasi Tenang
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans text-left">
                Kontrakan Bersih, Tenang, & <span className="text-blue-600">Bebas Atur</span> Ruanganmu.
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed font-sans text-left max-w-xl">
                Tipe kosongan dengan kamar mandi dalam. Pilihan hunian mandiri yang lebih hemat, nyaman, dan tenang. Terbatas hanya 7 unit eksklusif untuk menjaga ketenteraman.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <button
                  onClick={() => scrollToSection('galeri-dan-harga')}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-black text-[11px] sm:text-xs md:text-sm py-3 px-4.5 sm:py-3.5 sm:px-6 rounded-xl cursor-pointer shadow-sm transition-all duration-200"
                  id="hero-btn-gallery"
                >
                  Lihat Foto &amp; Tarif
                </button>
                <button
                  onClick={() => setShowContactPopup(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[11px] sm:text-xs md:text-sm py-3 px-4.5 sm:py-3.5 sm:px-6 rounded-xl cursor-pointer shadow-sm flex items-center gap-1.5 transition-all duration-200"
                  id="hero-btn-contact-popup"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Hubungi Pengelola (WA)
                </button>
              </div>

              {/* Tambah mini detail stats */}
              <div className="pt-5 border-t border-slate-100 grid grid-cols-3 gap-2 text-left animate-fade-in">
                <div className="bg-slate-50/80 p-2 sm:p-2.5 rounded-xl border border-slate-100/50">
                  <span className="block font-black text-slate-900 text-xs sm:text-sm md:text-base leading-none">7 Kamar</span>
                  <span className="text-[8px] sm:text-[9.5px] text-slate-400 uppercase tracking-widest font-bold mt-1.5 block">Total Unit</span>
                </div>
                <div className="bg-emerald-50/40 p-2 sm:p-2.5 rounded-xl border border-emerald-50">
                  <span className="block font-black text-emerald-600 text-xs sm:text-sm md:text-base leading-none">2 Tersedia</span>
                  <span className="text-[8px] sm:text-[9.5px] text-emerald-500 uppercase tracking-widest font-bold mt-1.5 block">Terbuka</span>
                </div>
                <div className="bg-slate-50/80 p-2 sm:p-2.5 rounded-xl border border-slate-100/50">
                  <span className="block font-black text-slate-900 text-xs sm:text-sm md:text-base leading-none">Privasi</span>
                  <span className="text-[8px] sm:text-[9.5px] text-slate-400 uppercase tracking-widest font-bold mt-1.5 block">KM Dalam</span>
                </div>
              </div>
            </div>

            {/* Gambar Hero */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <img
                  src={roomHeroImg}
                  alt="Ahmadi Kontrakan Kamar Kosong"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-video md:aspect-square object-cover hover:scale-103 transition-transform duration-700"
                />
                {/* Visual Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl flex justify-between items-center shadow-lg">
                  <span className="text-slate-500 text-xs font-semibold">Tipe Kosongan</span>
                  <span className="text-slate-900 font-extrabold text-xs">Bersih &amp; Rapi</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* INFORMASI TEKNIS (Grid 4 Kotak) with Sleek Spec cards style */}
        <section className="px-4 md:px-8 max-w-6xl mx-auto py-10 scroll-mt-20" id="kelebihan-utama">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="bg-blue-50 text-blue-600 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
              Fasilitas &amp; Kelebihan Utama
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-2 font-sans tracking-tight">
              Spesifikasi Fisik Kamar Kontrakan
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Fasilitas unggulan yang terkelola dengan baik demi kenyamanan total para penghuninya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Kotak 1 */}
            <div className="spec-card-sleek space-y-3" id="spec-box-size">
              <div className="text-3xl">📐</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Ukuran Nyaman</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Ruang lapang (3x4 meter) bebas Anda tata kasur &amp; lemari sesuka Anda.
                </p>
              </div>
            </div>

            {/* Kotak 2 */}
            <div className="spec-card-sleek space-y-3" id="spec-box-bathroom">
              <div className="text-3xl">🚿</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">KM Dalam</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Privasi penuh tanpa harus antre bergiliran mandi di pagi hari.
                </p>
              </div>
            </div>

            {/* Kotak 3 */}
            <div className="spec-card-sleek space-y-3" id="spec-box-electricity">
              <div className="text-3xl">⚡</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Listrik Token</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Sistem meteran mandiri di setiap kamar untuk kontrol biaya sepuasnya.
                </p>
              </div>
            </div>

            {/* Kotak 4 */}
            <div className="spec-card-sleek space-y-3" id="spec-box-parking">
              <div className="text-3xl">🅿️</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Parkir Mobil &amp; Motor</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Terdapat area parkir bisa menampung mobil dan motor di lahan kosong pekarangan depan rumah saja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GALERI, PRICING, MAP, & UNIT STATUSES */}
        <RoomDetails />

        {/* ABOUT US (TENTANG KAMI) */}
        <AboutUs />

        {/* FAQ & COLLAPSIBLE Q&A */}
        <FAQAndReviews />

        {/* WHATSAPP FORM AND MESSAGE CONSTRUCTOR */}
        <ContactForm />

      </main>

      {/* 3. FOOTER PROFESIONAL */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 font-sans" id="professional-footer">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          {/* Grid layout utama footer */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            
            {/* Branding pojok kiri */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="w-8.5 h-8.5 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                  AK
                </div>
                <h4 className="font-black tracking-wider text-base">AHMADI KONTRAKAN</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                Penyedia sewa hunian kamar kosongan bulanan terbatas hanya 7 unit. Terkenal bersih, tenang, ramah di kantong, dan bebas biaya tambahan siluman. Dikelola langsung dengan penuh kekeluargaan oleh Bpk. Ahmadi sekeluarga.
              </p>
              <div className="pt-2 flex flex-col gap-2 text-xs">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <a 
                    href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiotae6mcyUAxUAAAAAHQAAAAAQCg..i&rlz=1C1GCEA_enID1212ID1212&fvr=1&pvq=OhYweDA6MHg4M2VlMzdlMzA5NDk2N2Vk&cs=0&um=1&ie=UTF-8&fb=1&gl=id&sa=X&ftid=0x320df5a5eed5ac45:0x83ee37e3094967ed" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 hover:underline transition-colors leading-relaxed"
                  >
                  Jl. Gatot Subroto Gg. H.M Saleh, Rinding, Kec. Tj. Redeb, Kabupaten Berau, Kalimantan Timur 77314
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Call/WA: <a href="https://wa.me/628125339745" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:underline">08125339745</a> (Hubungi Sebelum Datang)</span>
                </div>
              </div>
            </div>

            {/* Menu Navigasi Cepat */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="text-white text-xs font-black uppercase tracking-widest">Akses Cepat</h5>
              <div className="flex flex-col gap-2.5 text-xs">
                <button 
                  onClick={() => scrollToSection('kelebihan-utama')} 
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Fasilitas Unggulan
                </button>
                <button 
                  onClick={() => scrollToSection('galeri-dan-harga')} 
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Daftar Kamar &amp; Tarif
                </button>
                <button 
                  onClick={() => scrollToSection('tentang-kami')} 
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Profil Singkat Pak Ahmadi
                </button>
                <button 
                  onClick={() => scrollToSection('kontak-pengelola')} 
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Tanya Sisa Kamar (WhatsApp)
                </button>
              </div>
            </div>

            {/* Ketaatan Lingkungan & Catatan Keamanan */}
            <div className="md:col-span-4 space-y-4">
              <h5 className="text-white text-xs font-black uppercase tracking-widest">Ketentuan &amp; Keamanan</h5>
              <p className="text-xs leading-relaxed text-slate-400">
                Setiap penyewa kontrakan wajib menyetorkan salinan KTP asli. Saling tenggang rasa terhadap tetangga sekitar merupakan pilar kenyamanan bersama. Aturan tidak kaku namun ketertiban adalah yang utama demi menjaga lingkungan yang tetap asri, teduh, dan tenteram.
              </p>
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
                <p className="text-[10px] text-slate-300 font-semibold leading-relaxed flex gap-2">
                  <span className="text-amber-400 shrink-0">✔</span>
                  Biaya air dan listrik tidak ditanggung sesuai pemakaian, dibebankan ke penyewa. Lahan parkir berada di depan rumah.
                </p>
              </div>
            </div>

          </div>

          {/* Bagian Bawah Hak Cipta */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-slate-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Ahmadi Kontrakan. Seluruh hak cipta dilindungi. Website resmi landing page.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="hover:text-slate-300 cursor-default">Syarat & Ketentuan</span>
              <span>&bull;</span>
              <span className="hover:text-slate-300 cursor-default">Dekat Akses Kampus & Tol</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 4. POPUP HUBUNGI PENGELOLA (DISELESAIKAN UNTUK MOBILE & DESKTOP) */}
      <AnimatePresence>
        {showContactPopup && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-20 right-4 left-4 sm:left-auto sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 p-5 overflow-hidden font-sans"
            id="mobile-hubungi-pengelola-popup"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                    PA
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5 leading-tight">
                    Pak Ahmadi (Pengelola)
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Merespon WhatsApp Cepat</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactPopup(false)}
                className="p-1 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors text-xs font-bold leading-normal cursor-pointer"
                aria-label="Tutup"
                id="close-contact-popup"
              >
                Tutup
              </button>
            </div>

            {/* Body */}
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Butuh bantuan cepat? Pilih pertanyaan di bawah ini untuk dikirimkan langsung ke WhatsApp Pak Ahmadi:
            </p>

            {/* Predefined templates links */}
            <div className="gap-2 flex flex-col mb-4">
              {[
                { label: 'Tanya Kamar Ready', query: 'Halo Pak Ahmadi, apakah sisa kamar sewa Rp 1.250.000 masih tersedia untuk bulan ini?' },
                { label: 'Tanya Parkir Mobil', query: 'Halo Pak Ahmadi, apakah area depan rumah aman dan cukup luas untuk parkir mobil saya?' },
                { label: 'Atur Jadwal Survei', query: 'Halo Pak Ahmadi, bolehkah saya bikin jadwal survei besok sore untuk melihat kamarnya?' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setPopupSelectedMsg(item.query)}
                  className={`w-full text-left p-3 rounded-xl text-xs border transition-all cursor-pointer block ${
                    popupSelectedMsg === item.query
                      ? 'bg-blue-50 border-blue-400 text-blue-700 font-bold'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <p className="font-bold text-[11px] mb-0.5 text-slate-900">{item.label}</p>
                  <p className="text-[10px] text-slate-500 truncate leading-tight">{item.query}</p>
                </button>
              ))}
            </div>

            {/* WhatsApp direct trigger */}
            <button
              onClick={() => {
                const encoded = encodeURIComponent(popupSelectedMsg);
                window.open(`https://api.whatsapp.com/send?phone=628125339745&text=${encoded}`, '_blank');
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              Kirim ke WhatsApp 08125339745
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. STICKY WHATSAPP CALL-TO-ACTION (LOCKED AT BOTTOM VIEWPORT FOR HP USERS) */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button
          onClick={handleStickyWhatsApp}
          className={`${showContactPopup ? 'bg-slate-900' : 'bg-blue-600 hover:bg-blue-700'} text-white font-extrabold text-xs md:text-sm py-3 px-4 md:py-3.5 md:px-5 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all outline-hidden border border-white/20 cursor-pointer`}
          title="Tanya Kamar via WhatsApp"
          id="global-sticky-whatsapp-btn"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <Phone className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">Hubungi Pengelola {showContactPopup ? '(Tutup Info)' : '(WA)'}</span>
          <span className="sm:hidden">{showContactPopup ? 'Tutup Info' : 'Hubungi Pengelola'}</span>
        </button>
      </div>

    </div>
  );
}
