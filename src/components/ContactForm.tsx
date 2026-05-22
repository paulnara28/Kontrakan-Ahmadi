import React, { useState, useMemo } from 'react';
import { Send, PhoneCall, HelpCircle, MessageCircle, Calendar, User, Briefcase, ChevronRight } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('Pekerja Swasta');
  const [moveInDate, setMoveInDate] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('Mana Saja Yang Ready');
  const [extraQuestion, setExtraQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Default real phone number for Bpk. Ahmadi
  const PHONE_NUMBER = '628125339745';

  const whatsAppMessage = useMemo(() => {
    const opening = `Halo Pengelola Ahmadi Kontrakan, perkenalkan saya *${name || 'Calon Penyewa'}* (${profession}).`;
    const body = `Saya sangat tertarik untuk bertanya seputar kamar sewa kosongan bulanan Ahmadi Kontrakan.`;
    const target = moveInDate ? `Rencana perkiraan tanggal masuk: *${moveInDate}*` : 'Saya berencana masuk/pindah dalam waktu dekat.';
    const unit = `Unit kamar pilihan: *${selectedUnit}*.`;
    const notes = extraQuestion.trim() ? `Ada pertanyaan tambahan: "${extraQuestion.trim()}"` : '';
    
    return [opening, body, target, unit, notes].filter(Boolean).join('\n\n');
  }, [name, profession, moveInDate, selectedUnit, extraQuestion]);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Mohon ketik nama Anda terlebih dahulu sebelum mengirim pesan.');
      return;
    }
    const encodedText = encodeURIComponent(whatsAppMessage);
    const url = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-50 border-t border-slate-100 py-16 px-4 md:px-8 scroll-mt-20" id="kontak-pengelola">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
            Langkah Terakhir
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 font-sans tracking-tight">
            Tanya Ketersediaan Kamar
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Isi formulir sederhana di bawah ini untuk mengirim pertanyaan langsung ke WhatsApp Pak Ahmadi secara otomatis.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 flex flex-col justify-between">
          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" /> Nama Lengkap Anda <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ketik nama panggilan Anda di sini..."
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-slate-800 transition-all outline-hidden font-sans"
                id="input-customer-name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" /> Pekerjaan / Status
                </label>
                <select
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl p-3 text-sm text-slate-800 transition-all outline-hidden font-sans cursor-pointer"
                  id="input-customer-profession"
                >
                  <option value="Pekerja Swasta">Karyawan / Pekerja Swasta</option>
                  <option value="Mahasiswa">Mahasiswa / Mahasiswi</option>
                  <option value="Wiraswasta">Wirausaha / Driver ojol</option>
                  <option value="Pasangan Suami Istri">Pasangan Suami Istri (Pasutri)</option>
                  <option value="Lainnya">Lainnya / Sendiri</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" /> Perkiraan Tanggal Masuk
                </label>
                <input
                  type="text"
                  value={moveInDate}
                  onChange={(e) => setMoveInDate(e.target.value)}
                  placeholder="Contoh: Awal bulan besok, dll"
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-slate-800 transition-all outline-hidden font-sans"
                  id="input-customer-date"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Pilih Unit Kamar (Jika Ada Keinginan Khusus)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Mana Saja Yang Ready', 'Kamar 103 (Kosong)', 'Kamar 106 (Kosong)'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedUnit(opt)}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      selectedUnit === opt
                        ? 'bg-blue-600 border-blue-600 text-white font-extrabold shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                    id={`select-unit-option-${opt.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" /> Tanya Hal Lain (Opsional)
              </label>
              <textarea
                rows={2}
                value={extraQuestion}
                onChange={(e) => setExtraQuestion(e.target.value)}
                placeholder="Misalnya: 'Boleh bawa kulkas kecil mas?', 'Ada deposit awal gak?'"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl p-3 text-sm text-slate-800 transition-all outline-hidden font-sans resize-none"
                id="input-customer-notes"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex justify-center items-center gap-2 cursor-pointer mt-4"
              id="btn-submit-inquiry"
            >
              <MessageCircle className="w-5 h-5" />
              Tanya Kamar via WhatsApp Sekarang
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </form>

          <p className="text-[10px] text-slate-400 text-center mt-3 leading-relaxed">
            *Tautan akan otomatis mengarah ke WhatsApp Messenger HP/Komputer Anda ke nomor *08125339745* tanpa perlu mengetik ulang pesan atau menyimpan kontak.
          </p>

          {submitted && (
            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <span className="text-2xl">🎉</span>
              <p className="font-extrabold text-slate-900 text-sm mt-1">Pesan Terkirim!</p>
              <p className="text-xs text-slate-600 mt-1">
                Koneksi sudah diarahkan ke WhatsApp Pak Ahmadi secara otomatis.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
