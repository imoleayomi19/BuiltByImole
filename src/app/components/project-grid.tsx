"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
  number: string;
  title: string;
  type: string;
  image: string;
  liveUrl?: string;
};

const projects: Project[] = [
  { number: "01", title: "Ile-Ife Grand Resort", type: "Web design", image: "/ife.webp" },
  { number: "02", title: "Emmy Quiz App", type: "Product design", image: "/quiz.jpg" },
  { number: "03", title: "FitTrack", type: "Experience design", image: "/workout.jpg" },
  { number: "04", title: "Imole Portfolio", type: "Digital identity", image: "/folio-2.jpg" },
];

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <div className="bg-[#151515] px-6 py-24 text-[#e8e5df] sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <button type="button" onClick={() => setSelectedProject(null)} className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-[#aaa69e] transition-colors hover:text-[#FFB400]">
            <span aria-hidden="true">←</span> Back to selected work
          </button>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FFB400]">{selectedProject.number} / {selectedProject.type}</p>
          <h3 className="mt-5 max-w-4xl font-serif text-5xl leading-none tracking-[-0.05em] sm:text-8xl">{selectedProject.title}</h3>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden border border-[#3b3b3b] bg-[#222]">
            <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="(max-width: 1280px) 100vw, 1152px" className="object-cover" priority />
          </div>
          <a href={selectedProject.liveUrl || "#"} target={selectedProject.liveUrl ? "_blank" : undefined} rel={selectedProject.liveUrl ? "noreferrer" : undefined} className="mt-8 inline-flex border-b border-[#FFB400] pb-2 font-mono text-sm uppercase tracking-[0.18em] text-[#FFB400] transition-colors hover:border-white hover:text-white">
            Open live project <span aria-hidden="true" className="ml-3">↗</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-[#151515] px-6 py-24 text-[#e8e5df] sm:px-10 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#aaa69e_0.6px,transparent_0.6px)] [background-size:6px_6px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-4 border-b border-[#4b4b4b] pb-6 sm:flex-row sm:items-end">
          <div><p className="font-mono text-xl uppercase tracking-[0.25em] text-[#FFB400]">03 / Selected work</p><h3 className="mt-6 font-serif text-6xl leading-none tracking-[-0.06em] sm:text-8xl">The index.</h3></div>
          <p className="max-w-xs text-sm leading-relaxed text-[#aaa69e]">A living archive of experiments, client work, and things made to learn by doing.</p>
        </div>
        <div className="grid gap-x-16 gap-y-20 sm:grid-cols-2">
          {projects.map((project) => (
            <button type="button" key={project.number} onClick={() => setSelectedProject(project)} className="group text-left">
              <div className="relative aspect-[1.45/1] overflow-hidden bg-[#292929] ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-2">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <span className="absolute left-4 top-4 bg-[#e8e5df] px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-[#151515]">{project.number}</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4 border-b border-[#4b4b4b] pb-4">
                <div><h4 className="font-serif text-3xl tracking-[-0.04em] transition-colors group-hover:text-[#FFB400]">{project.title}</h4><p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-[#aaa69e]">{project.type}</p></div>
                <span aria-hidden="true" className="font-mono text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}