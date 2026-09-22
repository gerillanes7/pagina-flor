import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export type WorkData = {
  slug: string;
  plate: string;
  order: number | null;
  title: { readonly es: string; readonly en: string };
  year: number | null;
  medium: { readonly es: string; readonly en: string };
  dimensions: string;
  availability: "available" | "reserved" | "sold" | "current";
  image: string;
  note?: { readonly es?: string; readonly en?: string };
};

export type WorkEntry = { slug: string; data: WorkData };

export type CvData = {
  year: number | null;
  kind: "solo" | "group" | "fair" | "award" | "residency" | "talk" | "publication";
  title: string;
  venue: string;
  city: string;
  url: string;
  order: number | null;
};

export type PressData = {
  year: number | null;
  publication: string;
  title: string;
  author: string;
  url: string;
  excerpt?: { readonly es?: string; readonly en?: string };
  order: number | null;
};

export type HomePanelsData = {
  obraPanel: string | null;
  cartaPanel: string | null;
  contactoPanel: string | null;
};

function getReader() {
  return createReader(process.cwd(), keystaticConfig);
}

function asWorkData(entry: unknown): WorkData {
  return entry as WorkData;
}

function asCvData(entry: unknown): CvData {
  return entry as CvData;
}

function asPressData(entry: unknown): PressData {
  return entry as PressData;
}

export async function listWorks(): Promise<WorkEntry[]> {
  const reader = getReader();
  const items = await reader.collections.works.all();
  return items
    .map((item) => ({
      slug: item.slug,
      data: asWorkData(item.entry),
    }))
    .sort((a, b) => {
      const oa = a.data.order ?? 0;
      const ob = b.data.order ?? 0;
      if (oa !== ob) return oa - ob;
      return a.slug.localeCompare(b.slug);
    });
}

export async function readWork(slug: string): Promise<WorkEntry | null> {
  try {
    const data = await getReader().collections.works.read(slug);
    if (!data) return null;
    return { slug, data: asWorkData(data) };
  } catch {
    return null;
  }
}

export async function listCv(): Promise<CvData[]> {
  const reader = getReader();
  const items = await reader.collections.cv.all();
  return items
    .map((item) => asCvData(item.entry))
    .sort((a, b) => {
      const ya = a.year ?? 0;
      const yb = b.year ?? 0;
      if (ya !== yb) return yb - ya;
      return (a.order ?? 0) - (b.order ?? 0);
    });
}

export async function listPress(): Promise<PressData[]> {
  const reader = getReader();
  const items = await reader.collections.press.all();
  return items
    .map((item) => asPressData(item.entry))
    .sort((a, b) => {
      const ya = a.year ?? 0;
      const yb = b.year ?? 0;
      if (ya !== yb) return yb - ya;
      return (a.order ?? 0) - (b.order ?? 0);
    });
}

export async function readBio() {
  try {
    return await getReader().singletons.bio.read();
  } catch {
    return null;
  }
}

export async function readStudio() {
  try {
    return await getReader().singletons.studio.read();
  } catch {
    return null;
  }
}

export async function readHomePanels(): Promise<HomePanelsData | null> {
  try {
    const data = (await getReader().singletons.homePanels.read()) as
      | HomePanelsData
      | null;
    return data;
  } catch {
    return null;
  }
}

export function resolveImage(path: string | undefined): string {
  if (!path) return "";
  if (/^(https?:)?\/\//.test(path) || path.startsWith("/")) return path;
  return `/paintings/${path}`;
}
