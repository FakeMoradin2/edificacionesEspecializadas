import type { MetadataRoute } from "next";
import { siteName } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Edif. Especializada",
    description:
      "Remodelaciones, adecuaciones y construcción especializada en Jalisco y México.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0A192F",
    icons: [
      {
        src: "/logo.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
    ],
  };
}
