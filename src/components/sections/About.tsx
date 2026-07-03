import { experiences } from "@/data/experience";
import ExperienceItem from "@/components/ui/ExperienceItem";

// warna aksen yang bergantian per item timeline — silakan tambah/ubah
const ACCENTS = ["#7C3AED", "#06B6D4", "#F43F5E", "#F59E0B", "#10B981"];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 max-w-4xl mx-auto bg-white"
    >
      {/* aurora blobs — warna-warni, halus, di belakang konten */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"
          style={{ animation: "blobMove 13s ease-in-out infinite" }}
        />
        <div
          className="absolute top-10 right-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"
          style={{ animation: "blobMove 15s ease-in-out infinite 1.5s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-rose-300/25 blur-3xl"
          style={{ animation: "blobMove 12s ease-in-out infinite 0.8s" }}
        />
      </div>

      <div
        className="text-center mb-12 opacity-0"
        style={{ animation: "fadeInUp 0.6s ease-out 0.05s forwards" }}
      >
        <p className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-violet-500 bg-violet-50 px-3 py-1 rounded-full mb-4">
          // about
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mahasiswa S1 Ilmu Komputer di IPB University yang tertarik membangun
          pengalaman web yang immersive dan interaktif, sambil terus belajar
          dari organisasi dan program pengembangan diri.
        </p>
      </div>

      {/* timeline: garis gradient + titik warna bergantian di kiri tiap item */}
      <div className="relative pl-8">
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/60 via-cyan-400/50 to-rose-400/40"
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <div
                key={index}
                className="relative opacity-0"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${0.15 + index * 0.1}s forwards`,
                }}
              >
                <span
                  aria-hidden
                  className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-white"
                  style={{
                    backgroundColor: accent,
                    boxShadow: `0 0 12px 2px ${accent}55`,
                  }}
                />
                <div className="rounded-xl p-4 -ml-4 transition-all hover:shadow-md hover:-translate-y-0.5">
                  <ExperienceItem
                    role={exp.role}
                    organization={exp.organization}
                    period={exp.period}
                    description={exp.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}