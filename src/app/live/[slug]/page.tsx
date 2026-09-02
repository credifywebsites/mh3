import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { liveModuleRegistry } from "@/components/live/registry";
import { liveModules } from "@/config/liveModules";
import siteConfig from "@/config/site";

export function generateStaticParams() {
  return Object.keys(liveModuleRegistry).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const label = liveModules.find((module) => module.slug === slug)?.label ?? "Live Preview";
  return {
    title: `${label} | ${siteConfig.name} Live Preview`,
    robots: { index: false, follow: false },
  };
}

export default async function LiveModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // The module previews are Credify-only, same as the partner deck they're linked from.
  if (siteConfig.name.toLowerCase() !== "credify") {
    notFound();
  }

  const { slug } = await params;
  const ModuleComponent = liveModuleRegistry[slug];
  if (!ModuleComponent) {
    notFound();
  }

  return <ModuleComponent />;
}
