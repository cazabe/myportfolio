export type InventorySection =
  | "projects"
  | "about"
  | "technologies"
  | "experience"
  | "social";

export type TileTone = "gold" | "green" | "steel" | "red" | "blue" | "purple";

export type InventoryTileData = {
  id: string;
  title: string;
  subtitle: string;
  section: InventorySection | "contact";
  colSpan: number;
  rowSpan: number;
  tone: TileTone;
  description: string;
  details: string[];
  technologies?: string[];
  imageLabel?: string;
  href?: string;
  ctaLabel?: string;
};
