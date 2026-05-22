import { ShieldCheck, Heart, Sparkles, HelpCircle } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="bg-slate-50 border-y border-slate-100 py-16 px-4 md:px-8 scroll-mt-20" id="tentang-kami">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
            Mengenal Lebih Dekat
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 font-sans tracking-tight">
            Tentang Kami & Pengelola
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 text-sm md:text-base leading-relaxed">
            Berawal dari keinginan menyediakan hunian mandiri yang nyaman, tertib, dan bebas ribet dengan biaya yang pas di kantong para pekerja dan mahasiswa.
          </p>
        </div>

        {/* Narrative & Visual block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Cerita Bpk Ahmadi */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Ahmadi Kontrakan 👋
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Selamat datang di website resmi <strong className="text-slate-900">Ahmadi Kontrakan</strong>. Sebagai pemilik sekaligus pengelola langsung, saya berkomitmen penuh untuk menjaga kenyamanan seluruh penyewa kontrakan. 
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Saya menyadari betul bahwa setelah lelah beraktivitas seharian, yang kita cari adalah tempat istirahat yang <span className="text-blue-600 font-bold">tenang, bebas bising, dan bersih</span>. Oleh karena itu, di sini saya membatasi hunian hanya sebanyak <strong>7 unit kamar</strong> agar suasana kekeluargaan dan ketenangan tetap terjaga dengan maksimal.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Di sini kami memberikan kebebasan bagi penyewa untuk menata ruangan sekreatif mungkin karena tipenya kosongan. Tidak ada biaya siluman, semua aturan jelas di awal, dan sistem tagihan pemakaian tertib. Saya selalu siap membantu jika ada fasilitas kamar mandi atau kunci yang perlu perbaikan.
            </p>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Pengelola Langsung</p>
                <p className="text-slate-800 font-extrabold text-base">Ahmadi Kontrakan & Keluarga</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3.5 py-2 text-emerald-800 text-xs font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Siap Melayani Pertanyaan & Kunjungan Lokasi
              </div>
            </div>
          </div>

          {/* Core Values Minimalist Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">Kondisi Bangunan Gres & Bersih</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Semua kamar rutin dibersihkan secara detail sebelum ditinggali penyewa baru. Toilet dan dinding dicat rapi sehingga nyaman ditempati sejak hari pertama.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">Keamanan & Privasi Terjaga</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Dilengkapi gerbang utama yang kokoh, area parkir teduh berada di dalam pagar, serta privasi penuh dengan kamar mandi mandiri di dalam unit kamar masing-masing.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">Suasana Tenang untuk Fokus</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Tidak dekat dengan jalan raya besar yang bising, lingkungan ramah dan kondusif untuk beristirahat setelah lelah pulang kantor atau belajar.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
