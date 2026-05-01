import Image from "next/image";

export default function CharacterPanel() {
  return (
    <aside className="re4-character-panel relative min-h-136 overflow-hidden rounded-2xl border border-stone-950/90 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="re4-ptas absolute right-4 top-3 z-20 font-serif text-2xl font-black italic tracking-[0.08em] text-stone-200">
        99669999 <span className="text-sm">PTAS</span>
      </div>

      <div className="re4-character-arch absolute inset-y-8 -left-12 w-56 rounded-full" />
      <div className="re4-character-backdrop absolute inset-0" />

      <div className="absolute inset-x-5 bottom-24 top-16 z-10">
        <Image
          src="/avatar-placeholder.svg"
          alt="Stylized developer avatar placeholder"
          width={720}
          height={960}
          priority
          className="re4-character-image h-full w-full object-contain object-bottom"
        />
      </div>

      <div className="absolute bottom-10 right-5 z-20 flex items-end gap-2">
        <div className="re4-health-ring grid h-24 w-24 place-items-center rounded-full">
          <div className="re4-health-screen grid h-16 w-16 place-items-center rounded-full text-center font-mono text-2xl text-cyan-100">
            250
          </div>
        </div>
        <span className="mb-1 font-serif text-2xl italic text-stone-300 drop-shadow-[2px_2px_0_rgba(0,0,0,0.85)]">
          Carlos
        </span>
      </div>

      <div className="re4-command-rail absolute inset-x-0 bottom-0 z-30 flex min-h-12 items-center gap-3 px-5">
        <span className="grid h-7 w-7 place-items-center rounded-full border border-stone-900 bg-stone-800 font-serif text-lg font-black text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
          2
        </span>
        <span className="font-serif text-xl font-black italic tracking-[0.14em] text-stone-200 drop-shadow-[2px_2px_0_rgba(0,0,0,0.9)]">
          Move selection
        </span>
      </div>
    </aside>
  );
}
