import { logoFor } from '../../media/media';

/*
  Client and technology logos (Figma "Clients/*" and "Technologies/*"), drawn as a CSS mask so they take
  the text colour (light and dark mode). The logo fits a box (default 120×32, like the Figma logo slots);
  names without an exported logo fall back to the name as text.
*/
export function Logo({ name, box = [120, 32], className }: { name: string; box?: [number, number]; className?: string }) {
  const l = logoFor(name);
  if (!l) return <span className={['yw-body-md-bold', className].filter(Boolean).join(' ')}>{name}</span>;
  const width = Math.min(box[0], box[1] * l.ratio);
  const mask = `url("${l.src}") center / contain no-repeat`;
  return (
    <span
      role="img"
      aria-label={name}
      className={className}
      style={{ display: 'inline-block', width, height: width / l.ratio, background: 'currentColor', mask, WebkitMask: mask, flexShrink: 0 }}
    />
  );
}
