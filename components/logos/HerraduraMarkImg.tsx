import { herraduraMarkImageCandidates } from "@/data/clients";

type Props = {
  className?: string;
};

/**
 * Wordmark tipográfico Tequila Herradura (`/public/logos/herradura.svg`).
 */
export function HerraduraMarkImg({ className }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG local; nitidez nativa
    <img
      src={herraduraMarkImageCandidates[0]}
      alt="Tequila Herradura"
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
