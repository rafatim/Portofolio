import React, { useEffect } from "react";
import DataImage from "./data";
import { listTools, listOrganisasi, listProyek } from "./data";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 900, // lebih lama dan smooth (1.5 detik)
    once: false,    // animasi bisa muncul lagi saat scroll naik/turun
    offset: 100,    // mulai animasi sebelum elemen benar2 terlihat
    easing: "ease-in-out", // transisi halus
  });
}, []);


  return (
    <>
      {/* Hero */}
<div id="hero" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
  <div data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-out">
    <h1 className="text-4xl/snug font-bold leading-tight">
      Hi, Saya Fatimah Azzahra 👋
    </h1>
    <p className="text-2xl font-medium mt-3 mb-3">
      Web Developer & UI/UX Design
    </p>
    <p className="text-base/loose mb-6 opacity-50">
      Mahasiswi D3 Manajemen Informatika Politeknik LP3I Jakarta Kampus Bekasi semester 5,
      berpengalaman dalam pengembangan aplikasi web dan mobile (frontend & backend).
      Menguasai dasar manajemen jaringan, perancangan UI/UX, serta rekayasa perangkat lunak.
      Terbiasa bekerja mandiri maupun kolaboratif dengan tanggung jawab tinggi,
      memiliki kemampuan analitis dan pemecahan masalah yang baik,
      serta berminat mengembangkan karier di bidang Web Development, UI/UX Design, dan System Analysis.
    </p>
    <div className="flex items-center">
      <a
        href="./assets/CV-Fatimah Azzahra.pdf"
        download
        className="bg-[#3B38A0] p-4 rounded-2xl hover:bg-[#7A85C1]"
      >
        Download CV <i className="ri-download-2-line ri-lg"></i>
      </a>
    </div>
  </div>

  <img
    src={DataImage.HeroImage}
    alt="Hero"
    className="w-[380px] md:ml-auto"
    data-aos="fade-left"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
  />
</div>


      {/* Pengalaman Organisasi */}
      <div id="organisasi" className="pengalaman mt-32" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Pengalaman Organisasi
        </h1>
        <p className="text-center text-base opacity-40 mb-10 max-w-2xl mx-auto">
          Berikut ini beberapa pengalaman organisasi yang pernah saya jalani.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {listOrganisasi.map((exp) => (
            <div
              key={exp.id}
              data-aos="fade-up" // animasi sama
              className="bg-zinc-900/70 p-5 rounded-xl shadow-md 
              transform transition-all duration-300 hover:scale-105 hover:shadow-xl 
              text-gray-200 border border-gray-400"
            >
              <img
                src={exp.gambar}
                alt="Pengalaman"
                className="w-full h-50 object-cover rounded-lg mb-4 shadow-sm"
              />
              <h2 className="text-lg font-bold text-gray-100">{exp.tahun}</h2>
              <h3 className="text-[#3B38A0] font-semibold">{exp.jabatan}</h3>
              <p className="text-sm text-gray-300 mt-2 line-clamp-3">{exp.deskripsi}</p>
              <p className="text-xs text-gray-400 mt-1 italic">{exp.organisasi}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pengalaman Proyek */}
      <div id="proyek" className="proyek mt-32" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-4 text-center">Pengalaman Proyek</h1>
        <p className="text-center text-base opacity-50 mb-10 max-w-2xl mx-auto">
          Berikut ini beberapa proyek yang pernah saya kerjakan.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listProyek.map((proyek) => (
            <a
              key={proyek.id}
              href={proyek.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up" // animasi sama
              className="bg-zinc-800 p-5 rounded-xl shadow-md hover:shadow-lg 
              transition-all duration-300 block"
            >
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-bold">{proyek.nama}</h2>
              <h3 className="text-[#3B38A0] font-semibold">{proyek.tahun}</h3>
              <p className="text-sm opacity-70 mt-2 line-clamp-3">{proyek.deskripsi}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Tools */}
<div id="tools" className="tools mt-32" data-aos="fade-up">
  <h1 className="text-2xl font-bold mb-3 text-center">Tools</h1>
  <p className="text-center text-sm opacity-60 mb-8 max-w-xl mx-auto">
    Berikut ini beberapa tools yang pernah saya gunakan.
  </p>
  <div className="tools-box mt-10 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
    {listTools.map((tool) => (
      <div
        key={tool.id}
        data-aos="fade-up"
        className="flex flex-col items-center gap-1.5 p-3 border border-zinc-700 rounded-lg
        hover:bg-zinc-800 hover:border-white group transition-all duration-300 shadow-sm"
      >
        <img
          src={tool.gambar}
          alt={tool.nama}
          className="w-12 h-12 object-contain"
        />
        <h4 className="text-sm font-medium text-center">{tool.nama}</h4>
      </div>
    ))}
  </div>
</div>

    </>
  );
}

export default App;
