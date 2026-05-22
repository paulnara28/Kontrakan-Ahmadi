import { RoomUnit, FAQItem, Testimonial, FurnitureItem } from './types.ts';

export const ROOMS_DATA: RoomUnit[] = [
  {
    id: 'kamar-01',
    name: 'Kamar 101',
    status: 'terisi',
    priceMonthly: 1250000,
    features: ['Stopkontak ganda', 'Kamar Mandi Dalam', 'Ventilasi udara luar']
  },
  {
    id: 'kamar-02',
    name: 'Kamar 102',
    status: 'terisi',
    priceMonthly: 1250000,
    features: ['Stopkontak ganda', 'Kamar Mandi Dalam', 'Ventilasi udara luar']
  },
  {
    id: 'kamar-03',
    name: 'Kamar 103',
    status: 'tersedia',
    priceMonthly: 1250000,
    features: ['Kondisi gres', 'Kamar Mandi Dalam', 'Dekat gerbang luar']
  },
  {
    id: 'kamar-04',
    name: 'Kamar 104',
    status: 'terisi',
    priceMonthly: 1250000,
    features: ['Stopkontak ganda', 'Kamar Mandi Dalam', 'Ventilasi adem']
  },
  {
    id: 'kamar-05',
    name: 'Kamar 105',
    status: 'terisi',
    priceMonthly: 1250000,
    features: ['Stopkontak ganda', 'Kamar Mandi Dalam', 'Pencahayaan terang']
  },
  {
    id: 'kamar-06',
    name: 'Kamar 106',
    status: 'tersedia',
    priceMonthly: 1250000,
    features: ['Kondisi bersih baru cat', 'Kamar Mandi Dalam', 'Area tengah tenang']
  },
  {
    id: 'kamar-07',
    name: 'Kamar 107',
    status: 'terisi',
    priceMonthly: 1250000,
    features: ['Stopkontak ganda', 'Kamar Mandi Dalam', 'Pojok tenang']
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'Sewa & Biaya',
    question: 'Harga sewa Rp 1.250.000 itu sudah termasuk apa saja?',
    answer: 'Sudah termasuk sewa ruang kontrakan dengan fasilitas Kamar Mandi Dalam dan biaya kebersihan lingkungan. Terkait biaya pemakaian listrik dan pemakaian air bersih tidak ditanggung (tidak gratis), melainkan dibebankan sepenuhnya kepada penyewa sesuai dengan jumlah pemakaian masing-masing agar adil.'
  },
  {
    category: 'Fasilitas & Aturan',
    question: 'Bolehkah saya membawa barang elektronik banyak, seperti kulkas atau rice cooker?',
    answer: 'Sangat boleh! Karena biaya listrik dan air dibebankan secara mandiri sesuai pemakaian, Anda bebas menggunakan alat elektronik apa pun sesuai kebutuhan Anda sehari-hari.'
  },
  {
    category: 'Ketentuan Penghuni',
    question: 'Apakah boleh ditempati oleh pasangan suami-istri (pasutri)?',
    answer: 'Boleh sekali. Untuk kenyamanan dan tertib administrasi lingkungan, pasutri wajib menyerahkan fotokopi KTP masing-masing beserta fotokopi Buku Nikah atau Kartu Keluarga kepada pengelola.'
  },
  {
    category: 'Fasilitas & Aturan',
    question: 'Bagaimana dengan jam malam? Apakah gerbang dikunci?',
    answer: 'Tidak ada jam malam yang kaku karena setiap penghuni akan diberikan duplikat kunci gerbang utama sendiri. Kamu bebas pulang jam berapa saja (misal sepulang kerja shift malam), asalkan tetap menjaga ketenangan bagi tetangga kos di malam hari.'
  },
  {
    category: 'Sewa & Biaya',
    question: 'Bagaimana cara melakukan pembayaran dan syarat masuknya?',
    answer: 'Pembayaran sewa dilakukan di awal setiap bulan secara tunai atau transfer antar bank sebelum menempati kamar. Di awal masuk, cukup membayar biaya sewa 1 bulan penuh sebesar Rp 1.250.000 tanpa deposit atau biaya tersembunyi.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Mas Asep Setiadi',
    role: 'Karyawan Swasta',
    quote: 'Sudah hampir setahun tinggal di sini adem banget. Kamar mandi dalamnya bersih, air jetpump lancar terus gak pernah macet. Pak Ahmadi juga ramah luar biasa, kalau ada masalah kecil langsung sigap dibantu.',
    stayDuration: 'Tinggal 11 Bulan',
    rating: 5
  },
  {
    name: 'Mbak Dewi Lestari',
    role: 'Karyawati Retail',
    quote: 'Suka banget karena kamarnya tipe kosongan, jadi saya bisa dengan bebas nata kasur dan lemari sendiri sesuai selera estetik saya. Harganya bersahabat banget buat fasilitas kamar mandi dalam di sekitar area ini.',
    stayDuration: 'Tinggal 6 Bulan',
    rating: 5
  },
  {
    name: 'Mas Rian Prasetyo',
    role: 'Mahasiswa / Pekerja Lepas',
    quote: 'Parkiran motornya teduh dipasang kanopi tebal, jadi motor kesayangan tidak kepanasan atau kehujanan kalau ditinggal seharian. Lokasinya tenang sekali, pas buat istirahat sehabis aktivitas seharian.',
    stayDuration: 'Tinggal 8 Bulan',
    rating: 5
  }
];

// Furniture options with standard starting scaling
export const FURNITURE_PRESETS: FurnitureItem[] = [
  { id: 'mat-single', name: 'Kasur Single', emoji: '🛏️', width: 25, height: 40 },
  { id: 'mat-double', name: 'Kasur Double', emoji: '🛌', width: 35, height: 40 },
  { id: 'wardrobe', name: 'Lemari Pakaian', emoji: '🚪', width: 20, height: 18 },
  { id: 'desk', name: 'Meja & Kursi Kerja', emoji: '💻', width: 24, height: 20 },
  { id: 'tv', name: 'Tv & Meja Kecil', emoji: '📺', width: 22, height: 12 },
  { id: 'fan', name: 'Kipas Angin Berdiri', emoji: '🌀', width: 12, height: 12 },
  { id: 'dispenser', name: 'Dispenser Air', emoji: '🚰', width: 12, height: 12 },
  { id: 'rug', name: 'Karpet Santai', emoji: '🦦', width: 30, height: 30 }
];
