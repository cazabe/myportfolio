import Image from "next/image";

export default function CharacterPanel() {
  return (
    <aside className="rounded-2xl border border-stone-700/80 bg-linear-to-b from-stone-900 via-neutral-950 to-black p-4 shadow-[inset_0_0_35px_rgba(0,0,0,0.85),0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="mb-3 flex items-center justify-between border-b border-amber-200/20 pb-3">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-100/70">
          Operator
        </span>
        <span className="font-mono text-sm text-stone-300">515370 PTAS</span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-stone-700 bg-stone-950">
        <Image
          src="/avatar-placeholder.svg"
          alt="Stylized developer avatar placeholder"
          width={720}
          height={960}
          priority
          className="aspect-3/4 w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/60 to-transparent p-4">
          <p className="text-lg font-black uppercase tracking-[0.18em] text-stone-50">
            Carlos Z.
          </p>
          <p className="text-xs uppercase tracking-[0.24em] text-amber-100/75">
            Frontend Developer
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs uppercase tracking-[0.18em] text-stone-300">
        <div className="rounded border border-stone-700 bg-black/25 p-3">
          <span className="block text-stone-500">Status</span>
          Ready
        </div>
        <div className="rounded border border-stone-700 bg-black/25 p-3">
          <span className="block text-stone-500">Mode</span>
          Inspect
        </div>
      </div>
    </aside>
  );
}
