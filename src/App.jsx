import DataImage from "./data";
import { listTools } from "./data";
import { listOrganisasi } from "./data";
import { listProyek } from "./data"; // 👉 pastikan listProyek sudah ada di data.js
import "animate.css";
import { useState } from "react";

function App() {
  // state untuk modal organisasi
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Fatimah Azzahra
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programing dan Desaigner,
            terutama pada pembuatan Website dan Desain seperti poster, pamflet
            serta banner, ketertarikan pada bidang ini sudah berlangsung lebih
            dari 4 tahun untuk semua bidang.
          </p>
          <div className="flex items-center">
            <a
              href="#"
              className="bg-[#3B38A0] p-4 rounded-2xl hover:bg-[#7A85C1]"
            >
              Download CV <i className="ri-download-2-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[380px] md:ml-auto"
        />
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg animate__animated animate__fadeInUp">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Diky Prayoga, seorang Full Stack Web Developer
            dan Designer untuk UI/UX Design maupun Product Digital, Saya percaya
            bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga
            setiap proyek yang saya kembangkan tidak hanya terlihat menarik
            tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-[#3B38A0]">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-[#3B38A0]">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pengalaman Organisasi */}
        <div className="pengalaman mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">
            Pengalaman Organisasi
          </h1>
          <p className="w-3/5 text-base/loose opacity-50 mb-10">
            Berikut ini beberapa pengalaman organisasi yang pernah saya jalani.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listOrganisasi.map((exp) => (
              <div
                key={exp.id}
                className="bg-zinc-800 p-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer animate__animated animate__fadeInUp transition-all duration-300"
                onClick={() => setSelectedCard(exp)}
              >
                <img
                  src={exp.gambar}
                  alt="Pengalaman"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-bold">{exp.tahun}</h2>
                <h3 className="text-[#3B38A0] font-semibold">{exp.jabatan}</h3>
                <p className="text-sm opacity-70 mt-2 line-clamp-3">
                  {exp.deskripsi}
                </p>
                <p className="text-xs opacity-50 mt-1">{exp.organisasi}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Preview Organisasi */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-zinc-900 p-6 rounded-xl w-11/12 md:w-2/3 lg:w-1/2 animate__animated animate__zoomIn relative">
              <button
                className="absolute top-3 right-3 text-white text-xl"
                onClick={() => setSelectedCard(null)}
              >
                ✕
              </button>
              <img
                src={selectedCard.gambar}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-1">{selectedCard.tahun}</h2>
              <h3 className="text-[#3B38A0] font-semibold mb-2">
                {selectedCard.jabatan}
              </h3>
              <p className="mb-3">{selectedCard.deskripsi}</p>
              <p className="text-sm opacity-60">{selectedCard.organisasi}</p>
            </div>
          </div>
        )}

        {/* Pengalaman Proyek */}
        <div className="proyek mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Pengalaman Proyek</h1>
          <p className="w-3/5 text-base/loose opacity-50 mb-10">
            Berikut ini beberapa proyek yang pernah saya kerjakan.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listProyek.map((proyek) => (
              <a
                key={proyek.id}
                href={proyek.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-5 rounded-xl shadow-md hover:shadow-lg animate__animated animate__fadeInUp transition-all duration-300 block"
              >
                <img
                  src={proyek.gambar}
                  alt={proyek.nama}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-bold">{proyek.nama}</h2>
                <h3 className="text-[#3B38A0] font-semibold">{proyek.tahun}</h3>
                <p className="text-sm opacity-70 mt-2 line-clamp-3">
                  {proyek.deskripsi}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="w-2/5 text-base/loose opacity-50">
            Berikut ini beberapa tools yang pernah saya gunakan.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex flex-col items-center gap-2 p-4 border border-zinc-600 rounded-md 
                hover:bg-zinc-800 hover:border-white group transition-all duration-300 
                animate__animated animate__fadeInUp"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="Tools"
                  className="w-16 h-16 object-contain"
                />
                <h4>{tool.nama}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
