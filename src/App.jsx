import DataImage from "./data";
import { listTools } from "./data";
import { listOrganisasi } from "./data";
import { listProyek } from "./data"; // 👉 pastikan listProyek sudah ada di data.js
import "animate.css";

function App() {
  return (
    <>
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <h1 className="text-4xl/snug font-bold leading-tight">
            Hi, Saya Fatimah Azzahra 👋
          </h1>
          <p className="text-2xl font-medium mt-3 mb-3">
            Web Developer & UI/UX Design
          </p>
          <p className="text-base/loose mb-6 opacity-50">
            Mahasiswi semester 5 D3 Manajemen Informatika Politeknik LP3I Jakarta Kampus Bekasi, berpengalaman dalam pengembangan aplikasi web dan mobile (frontend & backend). Menguasai dasar manajemen jaringan, perancangan UI/UX, serta rekayasa perangkat lunak. Terbiasa bekerja mandiri maupun kolaboratif dengan tanggung jawab tinggi, memiliki kemampuan analitis dan pemecahan masalah yang baik, serta berminat mengembangkan karier di bidang Web Development, UI/UX Design, dan System Analysis.
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
          alt="Hero Image"
          className="w-[380px] md:ml-auto"
        />
      </div>

      {/* Pengalaman Organisasi */}
      <div className="pengalaman mt-32">
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
              className="bg-zinc-900/70 p-5 rounded-xl shadow-md animate__animated animate__fadeInUp 
              transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-gray-200 border border-gray-400"
            >
              <img
                src={exp.gambar}
                alt="Pengalaman"
                className="w-full h-50 object-cover rounded-lg mb-4 shadow-sm"
              />
              <h2 className="text-lg font-bold text-gray-100">{exp.tahun}</h2>
              <h3 className="text-[#3B38A0] font-semibold">{exp.jabatan}</h3>
              <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                {exp.deskripsi}
              </p>
              <p className="text-xs text-gray-400 mt-1 italic">{exp.organisasi}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pengalaman Proyek */}
      <div className="proyek mt-32">
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
      <div className="tools mt-32 mb-20">
        <h1 className="text-3xl font-bold mb-4 text-center">Tools</h1>
        <p className="text-center text-base opacity-50 mb-10 max-w-2xl mx-auto">
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
    </>
  );
}

export default App;
