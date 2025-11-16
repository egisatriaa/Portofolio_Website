import DataImage from './data';
import { listTools, listProyek } from './data';

function App() {
    return (
        <>
            <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
                <div className="animate__animated animate__fadeInUp animate__delay-3s">
                    <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
                        <img src={DataImage.HeroImage} alt="HeroImage" className="w-10 rounded-md" loading="lazy" />
                        <p>Egi Satria Dharma Yudha Wicaksana S.Tr.Kom</p>
                    </div>
                    <h1 className="text-5xl/tight font-bold mb-6">Halo Saya Egi Satria</h1>
                    <p className=" text-base/loose mb-6 opacity-50">
                        Saya seorang Full Stack Developer dengan pengalaman membangun aplikasi web end-to-end, mulai dari frontend, backend, hingga deployment. Terbiasa menggunakan JavaScript, Ruby, dan React.js untuk menciptakan aplikasi yang
                        responsif, efisien, dan mudah dikembangkan.
                    </p>
                    <div className="flex items-center sm:gap-4 gap-2">
                        <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">
                            Download CV <i className="ri-download-2-fill"></i>
                        </a>
                        <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">
                            See Project <i className="ri-arrow-down-fill"></i>
                        </a>
                    </div>
                </div>
                <img src={DataImage.HeroImage} alt="HeroImage" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
            </div>

            {/* About */}
            <div className="tentang mt-32 py-10" id="tentang">
                <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000">
                    <img src={DataImage.HeroImage} alt="" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />

                    {/* Teks untuk mobile */}
                    <p className="text-base/loose mb-10 sm:hidden">
                        Full Stack Developer berpengalaman membangun aplikasi web end-to-end. Terbiasa dengan frontend, backend, database, dan deployment. Proaktif, komunikatif, serta siap belajar cepat dan berkolaborasi dalam tim.
                    </p>

                    {/* Teks untuk desktop/tablet */}
                    <p className="text-base/loose mb-10 hidden sm:block">
                        Saya seorang Full Stack Developer yang berpengalaman membangun aplikasi web end-to-end menggunakan JavaScript, Ruby, dan React.js. Selama internship di PT. Kharisma Indotech Pratama dan proyek akademik, saya terlibat langsung
                        dalam pengembangan fitur frontend, integrasi backend, pengelolaan database, serta deployment aplikasi agar responsif, efisien, dan stabil. Saya terbiasa mengikuti coding conventions, menerapkan prinsip Object-Oriented
                        Programming, melakukan unit testing dan integration testing, serta menulis dokumentasi teknis untuk mempermudah kolaborasi tim. Selain kemampuan teknis, saya proaktif, komunikatif, dan siap belajar cepat untuk beradaptasi
                        dengan workflow tim. Saya selalu bersemangat berbagi ide, berpartisipasi dalam code review, dan memastikan aplikasi yang dikembangkan berkualitas tinggi. Saat ini saya siap berkontribusi sebagai Fullstack Web Developer,
                        menghadirkan solusi digital yang scalable, efisien, dan user-friendly.
                    </p>

                    <div className="flex items-center justify-between">
                        <img src={DataImage.HeroImage} alt="Hero Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
                        <div className="flex items-center gap-6">
                            <div>
                                <h1 className="text-4xl mb-1 ">
                                    20 <span className="text-violet-500">+</span>
                                </h1>
                                <p>Project selesai</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl mb-1 ">
                                4 <span className="text-violet-500">+</span>
                            </h1>
                            <p> Tahun Pengalaman</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project */}
            <div className="proyek mt-32 py-10" id="proyek">
                <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">
                    Project
                </h1>
                <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    Berikut ini beberapa project yang telah saya buat
                </p>
                <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listProyek.map((proyek) => (
                        <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
                            <img src={proyek.gambar} alt="proyek Image" loading="lazy" />
                            <div>
                                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                                <p className="text-base/loose mb-4">{proyek.desk}</p>
                                <div className="flex flex-wrap gap-2">
                                    {proyek.tools.map((tool, index) => (
                                        <p className="py-1 px-3 bg-zinc-600 border border-zinc-500 rounded-md font-semibold" key={index}>
                                            {tool}
                                        </p>
                                    ))}
                                </div>
                                <div className="mt-8 text-center">
                                    <a className="bg-violet-700 p-3 rounded-lg block border border-zinc-500 hover:bg-violet-600" href={proyek.link} target="_blank" rel="noopener noreferrer">
                                        Lihat Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-duration="1000">
                <a href="https://github.com/egisatriaa" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-violet-700 rounded-lg border border-zinc-500 hover:bg-violet-600 font-semibold">
                    See More →
                </a>
            </div>

            {/* contact */}
            <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
                <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">
                    Kontak
                </h1>
                <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    Mari terhubung dengan saya
                </p>
                <form action="https://formsubmit.co/egi.satriadyw@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Nama lengkap</label>
                            <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Email</label>
                            <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pesan" className="font-semibold">
                                message
                            </label>
                            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukkan Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-500 hover:bg-violet-600">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;
