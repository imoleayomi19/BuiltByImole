import Image from "next/image";
import Navbar from "./components/navbar";
import ProjectGrid from "./components/project-grid";

const socials = [
  ["X", "https://x.com/EmmanuelE81101", "/x.svg"],
  ["LinkedIn", "https://www.linkedin.com/in/emmanuel-imole-3b62b1367/", "/linkedin.svg"],
  ["GitHub", "https://github.com/imoleayomi19", "/github.svg"],
  ["Email", "mailto:eakintunde51@gmail.com", "/gmail.svg"],
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#e8e5df] text-[#151515] selection:bg-[#FFB400] selection:text-white">
      <Navbar />
      <main>
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-end gap-12 px-6 pb-16 pt-32 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B]">Lagos, Nigeria / 2025</p>
            <h1 className="font-serif text-[clamp(4.5rem,13vw,12rem)] leading-[0.78] tracking-[-0.07em]">Emmanuel<br /><span className="text-[#FFB400]">Imole.</span></h1>
            <p className="mt-12 max-w-xl text-xl leading-relaxed text-[#4e4b47] sm:text-2xl">Frontend developer and visual thinker building digital experiences with clarity, character, and a little edge.</p>
            <a href="#content-block-3" className="mt-10 inline-flex items-center gap-4 border-b-2 border-[#151515] pb-2 font-mono text-xs uppercase tracking-[0.22em] transition-colors hover:border-[#FFB400] hover:text-[#FFB400]">Explore selected work <span aria-hidden="true">↘</span></a>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:mb-4">
            <div className="absolute -left-5 -top-5 h-20 w-20 border-l border-t border-[#FFB400]" />
            <Image src="/imole-dp.webp" alt="Emmanuel Imole" width={500} height={600} priority className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
            <p className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[#68645d]"><span>Available for work</span><span>01 / 04</span></p>
          </div>
        </section>
 
        <section id="content-block-1" className="scroll-mt-24 border-t border-[#bbb7ae] bg-[#151515] text-[#e8e5df]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-16 lg:py-32">
            <p className="font-mono text-xl uppercase tracking-[0.25em] text-[#FFB400]">01 / About</p>
            <div><h2 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">Good work should feel obvious, not ordinary.</h2><p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#aaa69e]">I&apos;m Emmanuel, a Lagos-based frontend developer who turns loose ideas into fast, considered websites. I care about the details people feel: a clear hierarchy, a useful interaction, a page that earns its place on every screen.</p></div>
          </div>
        </section>

        <section id="content-block-2" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-16 flex items-end justify-between border-b border-[#bbb7ae] pb-6"><p className="font-mono text-xl uppercase tracking-[0.25em] text-[#FFB400]">02 / Capabilities</p><span className="font-mono text-xl text-[#68645d]">What I bring</span></div>
          <div className="grid gap-0 md:grid-cols-3">{["Frontend Engineering", "Product & Interface", "AI & Visual Systems"].map((skill, index) => <div key={skill} className="border-b border-[#bbb7ae] py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="font-mono text-xs text-[#FFB400]">0{index + 1}</span><h3 className="mt-16 font-serif text-3xl tracking-[-0.03em]">{skill}</h3><p className="mt-5 max-w-xs leading-relaxed text-[#68645d]">{["React, TypeScript, JavaScript. I build fast, responsive web apps that are useful, scalable, and built to last.", "From solar dashboards to e-commerce. I turn complex requirements into simple, thoughtful systems people actually enjoy using.", "AI Trainer + visual thinker. A sharp technical + visual POV that gives good products room to stand out."][index]}</p></div>)}</div>
        </section>

        <section id="content-block-3" className="scroll-mt-24">
          <ProjectGrid />
        </section>

        <section id="content-block-4" className="scroll-mt-24 bg-[#FFB400] px-6 py-24 text-[#151515] sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-7xl"><p className="font-mono text-xl uppercase tracking-[0.25em]">04 / Contact</p><h2 className="mt-16 max-w-5xl font-serif text-6xl leading-[0.85] tracking-[-0.06em] sm:text-9xl">Let&apos;s make<br />something <i>clear.</i></h2><a href="mailto:eakintunde51@gmail.com" className="mt-16 inline-flex border-b-2 border-[#151515] pb-3 font-mono text-sm uppercase tracking-[0.2em] transition-colors hover:border-white hover:text-white">Start a conversation ↗</a></div></section>
      </main>
      <footer className="bg-[#151515] px-6 py-8 text-[#e8e5df] sm:px-10 lg:px-16"><div className="mx-auto flex max-w-7xl flex-col gap-6 font-mono text-[10px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between"><span>Built by Imole / © 2025</span><div className="flex items-center gap-4">{socials.map(([label, href, icon]) => <a key={label} href={href} aria-label={label} title={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="opacity-80 transition-opacity hover:opacity-100"><Image src={icon} alt="" width={24} height={24} className="h-6 w-6 object-contain" /></a>)}</div></div></footer>
    </div>
  );
}



