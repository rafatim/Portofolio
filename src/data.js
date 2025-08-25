import HeroImage from "/assets/hero-img.png";

const Image = {
    HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/php.png";
import Tools3 from "/assets/tools/ci.png";
import Tools4 from "/assets/tools/reactjs.png";
import Tools5 from "/assets/tools/dart.png";
import Tools6 from "/assets/tools/flutter.png";
import Tools7 from "/assets/tools/boostrap.png";
import Tools8 from "/assets/tools/figma.png";
import Tools9 from "/assets/tools/html.png";
import Tools10 from "/assets/tools/css.png";;
import Tools11 from "/assets/tools/phpMyadmin.png";
import Tools12 from "/assets/tools/winbox.png";

export const listTools =[
{
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
},
{
    id: 2,
    gambar: Tools2,
    nama: "PHP",
},
{
    id: 3,
    gambar: Tools3,
    nama: "CodeIgniter",
},
{
    id: 4,
    gambar: Tools4,
    nama: "ReactJS",
},
{
    id: 5,
    gambar: Tools5,
    nama: "Dart",
},
{
    id: 6,
    gambar: Tools6,
    nama: "Flutter",
},
{
    id: 7,
    gambar: Tools7,
    nama: "Boostrap",
},
{
    id: 8,
    gambar: Tools8,
    nama: "Figma",
},
{
    id: 9,
    gambar: Tools9,
    nama: "HTML",
},
{
    id: 10,
    gambar: Tools10,
    nama: "CSS",
},
{
    id: 11,
    gambar: Tools11,
    nama: "phpMyadmin",
},
{
    id: 12,
    gambar: Tools12,
    nama: "Winbox",
},
]

import Organisasi1 from "/assets/organisasi/sekre-kartar.jpg";
import Organisasi2 from "/assets/organisasi/desain-bem.jpg";
import Organisasi3 from "/assets/organisasi/humas-bem.jpg";

export const listOrganisasi =[
    {
      id: 1,
      tahun: "2023 - Sekarang",
      jabatan: "Sekretaris Karang Taruna",
      deskripsi:
        "Menyusun dan mengelola dokumen administrasi organisasi.",
      organisasi: "Darma Bakti RT008/015",
      gambar: Organisasi1,
    },
    {
      id: 2,
      tahun: "2023 - 2024",
      jabatan: "Desain Media BEM",
      deskripsi:
        "Merancang konten visual untuk keperluan publikasi dan media sosial kegiatan kampus menggunakan Canva dan CapCut. Mendokumentasikan berbagai kegiatan kampus sebagai kameramen dan pengelola konten visual.",
      organisasi: "Politeknik LP3I Jakarta Kampus Bekasi",
      gambar: Organisasi2,
    },
    {
      id: 3,
      tahun: "2024 - 2025",
      jabatan: "Humas BEM",
      deskripsi:
        "Mendukung kelancaran komunikasi internal serta penyebaran informasi kepada anggota. Berperan dalam mendukung kelancaran kegiatan organisasi dan menjaga hubungan kerja yang harmonis melalui koordinasi dan penyelesaian masalah secara kolaboratif.",
      organisasi: "Politeknik LP3I Jakarta Kampus Bekasi",
      gambar: Organisasi3,
    },
]

import Proyek1 from "/assets/proyek/Rasaminang.png";
import Proyek2 from "/assets/proyek/Ratravels.png";
import Proyek3 from "/assets/proyek/visiontech.png";
import Proyek4 from "/assets/proyek/zebra.png";
import Proyek5 from "/assets/proyek/bumar.png";
import Proyek6 from "/assets/proyek/cekBMI.png";
import Proyek7 from "/assets/proyek/studitrackk.png";

export const listProyek =[
{
  id: 1,
  nama: "Web Rasa Minang",
  tahun: "2023",
  deskripsi: "Website restoran berbasis PHP dasar yang menampilkan menu khas Minang dengan katalog makanan dan sistem pemesanan sederhana.",
  gambar: Proyek1,
  link: "https://github.com/rafatim/Rasa-Minang",
},
{
  id: 2,
  nama: "Web RaTravels",
  tahun: "2023",
  deskripsi: "Website travel agent berbasis PHP CRUD sederhana dengan dua role (admin dan user) untuk booking paket wisata lokal maupun internasional.",
  gambar: Proyek2,
  link: "https://github.com/rafatim/RaTravels",
},
{
  id: 3,
  nama: "Web VisionTech",
  tahun: "2024",
  deskripsi: "Website penjualan televisi berbasis CodeIgniter 3 dengan fitur pengelolaan produk dan transaksi sederhana.",
  gambar: Proyek3,
  link: "https://github.com/rafatim/VisionTech",
},
{
  id: 4,
  nama: "Figma Desktop Zebra",
  tahun: "2024",
  deskripsi: "Desain UI/UX untuk dashboard aplikasi manajemen proyek berbasis web dengan tampilan modern dan user-friendly.",
  gambar: Proyek4,
  link: "https://www.figma.com/design/9Jo21pSNHmF5wjNwE9pufy/Untitled?node-id=24-167&t=s5YqEkDrKxZsc2o6-1",
},
{
  id: 5,
  nama: "Figma Desktop Kontrakan Bumar",
  tahun: "2024",
  deskripsi: "Prototype desain UI/UX untuk aplikasi dashboard berbasis web dengan interaksi navigasi yang responsif.",
  gambar: Proyek5,
  link: "https://www.figma.com/proto/MANQjXjJqubgYQUzgw7PmT/Untitled?node-id=18-54&t=UEPwOZpvXDljdM6L-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A54",
},
{
  id: 6,
  nama: "Aplikasi CekBMI",
  tahun: "2025",
  deskripsi: "Aplikasi mobile berbasis Dart/Flutter untuk menghitung Indeks Massa Tubuh (BMI) lengkap dengan tampilan grafik interaktif.",
  gambar: Proyek6,
  link: "https://github.com/rafatim/Cek-BMI---Dart",
},
{
  id: 7,
  nama: "Aplikasi StudiTrack",
  tahun: "2025",
  deskripsi: "Aplikasi mobile pencatat jadwal belajar mahasiswa dengan fitur reminder otomatis untuk meningkatkan manajemen waktu belajar dengan API.",
  gambar: Proyek7,
  link: "https://github.com/rafatim/UAS-fatimah",
},
]


