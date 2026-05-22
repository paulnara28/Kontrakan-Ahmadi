import { useState } from 'react';
import { ROOMS_DATA } from '../data.ts';
import { 
  Camera, CheckCircle, Info, Flame, Grid, Shield, Zap, Droplet, Trash, Ban, Sparkles 
} from 'lucide-react';

export default function RoomDetails() {
  const photos = [
    {
      id: 'photo-hero',
      title: 'Tampak Dalam Kamar',
      desc: 'Ruangan kosong yang rapi, bersih, dihiasi lantai keramik mulus, siap diatur dengan furnitur pribadi Anda semau Anda.',
      src: '/src/assets/images/room_hero_1779427904467.png'
    },
    {
      id: 'photo-bathroom',
      title: 'Kamar Mandi Dalam',
      desc: 'Privasi penuh dengan kamar mandi dalam di setiap unit. Kebersihan terjaga kualitas keramiknya gres.',
      src: '/src/assets/images/room_bathroom_1779427923654.png'
    },
    {
      id: 'photo-corridor',
      title: 'Selasar Koridor Depan',
      desc: 'Area teras luar berlantai keramik yang bersih dan asri dengan beberapa tanaman vas, menciptakan udara sejuk siang hari.',
      src: '/src/assets/images/room_corridor_1779427943030.png'
    },
    {
      id: 'photo-parking',
      title: 'Area Parkir Mobil & Motor',
      desc: 'Terdapat area parkir kendaraan mobil dan motor di lahan kosong pekarangan depan rumah saja secara praktis.',
      src: '/src/assets/images/room_parking_1779427960324.png'
    }
  ];

  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const activePhoto = photos[activePhotoIdx];
  const availableRoomsCount = ROOMS_DATA.filter(r => r.status === 'tersedia').length;

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20" id="galeri-dan-harga">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* KOLOM KIRI: Galeri Foto Kamar (Carousel) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative group overflow-hidden bg-slate-100 rounded-2xl border border-slate-200 shadow-md">
            <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-blue-400" />
              {activePhoto.title}
            </span>
            
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] md:aspect-[16:11] object-cover hover:scale-103 transition-transform duration-500"
            />
            
            {/* Ambient shadow gradient back */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white">
              <h4 className="font-extrabold text-base md:text-lg mb-1">{activePhoto.title}</h4>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans">{activePhoto.desc}</p>
            </div>
          </div>

          {/* Thumbnails list */}
          <div className="grid grid-cols-4 gap-2.5">
            {photos.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActivePhotoIdx(idx)}
                className={`relative group rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activePhotoIdx === idx 
                    ? 'border-blue-600 scale-95 shadow-sm' 
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
                id={`carousel-thumbnail-${idx}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
              </button>
            ))}
          </div>
        </div>

        {/* KOLOM KANAN: Transparansi Harga & Ketersediaan Kamar */}
        <div className="lg:col-span-5 flex flex-col gap-6" id="pricing-details-panel">
          <div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Harga Jujur & Transparan
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-2 font-sans tracking-tight">
              Sewa Bulanan Ekonomis
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Tidak ada biaya siluman. Bayar pas di awal sesuai kesepakatan langsung tinggal.
            </p>
          </div>

          {/* CARD UTAMA SEWA */}
          <div className="bg-white border-2 border-slate-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-slate-900 text-white p-6 justify-between flex items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Harga Flat Kamar Kosongan</p>
                <p className="text-3xl font-black text-white mt-1">
                  Rp 1.250.000<span className="text-sm font-semibold text-slate-300"> / Bulan</span>
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-yellow-400 text-slate-900 text-[10px] uppercase font-black px-2.5 py-1 rounded-md">
                  Tipe 2 Kamar
                </span>
                <p className="text-[10px] text-slate-400 mt-1">Sisa {availableRoomsCount} Kamar Kosong</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Rincian Fasilitas Kamar & Biaya:</h4>
              
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-sm bg-white p-2.5 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Droplet className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="text-slate-700 font-medium">Biaya Air Bersih</span>
                  </div>
                  <span className="text-amber-700 font-bold text-xs bg-amber-50 px-2 py-0.5 rounded-md">Sesuai Pemakaian</span>
                </div>

                <div className="flex items-center justify-between text-sm bg-white p-2.5 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-slate-700 font-medium">Biaya Listrik Token</span>
                  </div>
                  <span className="text-amber-700 font-bold text-xs bg-amber-50 px-2 py-0.5 rounded-md">Sesuai Pemakaian</span>
                </div>

                <div className="flex items-center justify-between text-sm bg-white p-2.5 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="text-slate-700">Parkir Mobil & Motor</span>
                  </div>
                  <span className="text-emerald-700 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded-md">Lahan Depan</span>
                </div>

                <div className="flex items-center justify-between text-sm bg-white p-2.5 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-700">Kamar Mandi Dalam</span>
                  </div>
                  <span className="text-emerald-700 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded-md">Tersedia</span>
                </div>
              </div>

              <div className="mt-4 p-3.5 bg-yellow-50/70 border border-yellow-100 rounded-xl flex gap-2">
                <Info className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-yellow-800 leading-normal">
                  *Penting: Biaya air dan listrik tidak ditanggung oleh pengelola (tidak gratis). Biaya tersebut dibebankan sepenuhnya kepada penyewa sesuai pemakaian masing-masing demi kenyamanan & keadilan bersama.
                </p>
              </div>
            </div>
          </div>

          {/* STATUS INTEGRASI KAMAR INDIKATOR */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5" id="unit-status-box">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Denah Unit Utama (7 Kamar)</span>
              <span className="text-xs font-normal text-slate-500 uppercase tracking-normal">Status Hari Ini</span>
            </h4>
            
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {ROOMS_DATA.map((room) => (
                <div
                  key={room.id}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                    room.status === 'tersedia'
                      ? 'bg-emerald-50/50 border-emerald-300 text-emerald-900 font-extrabold shadow-xs ring-2 ring-emerald-400/20'
                      : 'bg-slate-50 border-slate-100 text-slate-400 font-medium'
                  }`}
                  id={`grid-unit-${room.id}`}
                >
                  <span className="text-xs uppercase tracking-tight block">Unit</span>
                  <span className="text-sm font-black tracking-tighter mt-0.5 block">{room.name.split(' ')[1]}</span>
                  
                  <span className="mt-2.5 flex h-1.5 w-1.5 relative">
                    {room.status === 'tersedia' ? (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </>
                    ) : (
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-300"></span>
                    )}
                  </span>
                  
                  <p className="text-[9px] uppercase font-bold mt-1 tracking-tighter">
                    {room.status === 'tersedia' ? 'KOSONG' : 'TERISI'}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
