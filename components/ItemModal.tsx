"use client";

import { useEffect } from "react";
import type { InventoryTileData } from "@/types/inventory";

type ItemModalProps = {
  item: InventoryTileData | null;
  onClose: () => void;
};

export default function ItemModal({ item, onClose }: ItemModalProps) {
  useEffect(() => {
    if (!item) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="item-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-amber-200/35 bg-linear-to-br from-stone-950 via-stone-900 to-black text-stone-100 shadow-[0_0_55px_rgba(245,197,97,0.18),0_30px_80px_rgba(0,0,0,0.65)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-amber-200/20 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-100/60">
              Item Inspection
            </p>
            <h2
              id="item-modal-title"
              className="mt-1 text-2xl font-black uppercase tracking-[0.14em]"
            >
              {item.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-stone-600 px-3 py-2 text-sm uppercase tracking-[0.2em] text-stone-300 transition hover:border-amber-200 hover:text-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            Close
          </button>
        </div>

        <div className="grid gap-5 p-5 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-stone-700 bg-black/35 p-3">
            <div className="inspect-preview flex aspect-video items-center justify-center rounded-lg border border-stone-700 bg-stone-950 p-4 text-center">
              <span className="text-sm font-bold uppercase tracking-[0.28em] text-amber-100/70">
                {item.imageLabel ?? item.subtitle}
              </span>
            </div>
            {item.technologies ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-amber-200/25 bg-amber-100/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <p className="text-base leading-7 text-stone-200">{item.description}</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="mt-6 inline-flex rounded border border-amber-200/60 bg-amber-100/10 px-4 py-3 text-sm font-black uppercase tracking-[0.22em] text-amber-100 transition hover:bg-amber-100/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
              >
                {item.ctaLabel ?? "Open link"}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
