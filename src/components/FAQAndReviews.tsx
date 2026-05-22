import { useState } from 'react';
import { FAQS_DATA, TESTIMONIALS_DATA } from '../data.ts';
import { ChevronDown, ChevronUp, Star, HelpCircle, MessageSquareQuote, Check } from 'lucide-react';

export default function FAQAndReviews() {
  const [openFAQIdx, setOpenFAQIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenFAQIdx(prev => prev === idx ? null : idx);
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20" id="tanya-jawab">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* KOLOM KIRI: Tanya Jawab Sehari-hari (Collapsible Accordions) */}
        <div className="lg:col-span-6 flex flex-col gap-6" id="faq-section bg-white">
          <div>
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Paling Sering Ditanyakan
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 font-sans tracking-tight">
              Tanya Jawab Sehari-hari
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Jawaban ringkas dan jujur menggunakan bahasa sehari-hari untuk semua pertanyaan calon penyewa.
            </p>
          </div>

          <div className="space-y-3" id="accordion-container">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFAQIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-all ${
                    isOpen 
                      ? 'border-blue-500 bg-blue-50/10' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                  id={`faq-item-${idx}`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <span className="text-slate-500">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 md:px-5 pb-5 pt-0 text-slate-600 font-sans text-xs md:text-sm leading-relaxed border-t border-slate-100 mt-1">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* KOLOM KANAN: Testimonial Penghuni Kontrakan */}
        <div className="lg:col-span-6 flex flex-col gap-6" id="reviews-section">
          <div>
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Kisah Nyata Penghuni
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 font-sans tracking-tight">
              Suara Penghuni Kontrakan
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Cerita jujur dari mereka yang sudah tinggal dan merasakan rukun di Ahmadi Kontrakan.
            </p>
          </div>

          <div className="space-y-4">
            {TESTIMONIALS_DATA.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 shadow-xs p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
                id={`testimonial-item-${idx}`}
              >
                <div className="absolute top-4 right-4 text-slate-100 z-0">
                  <MessageSquareQuote className="w-14 h-14" />
                </div>

                <div className="relative z-10">
                  {/* Stars indicators */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed italic font-medium">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-xs md:text-sm">{testimonial.name}</h5>
                    <p className="text-[10px] text-slate-400">{testimonial.role}</p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 py-1 px-2.5 rounded-full flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-500" />
                    {testimonial.stayDuration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
