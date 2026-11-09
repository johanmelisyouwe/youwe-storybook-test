import type { CSSProperties, ReactNode } from 'react';
import { Icon } from '../icons/Icon';
import './card-reveal.css';

/* Card image frame. Without `src` it shows the Figma placeholder (surface/base-3 + image icon). */
export function CardMedia({ src, alt = '', ratio, className, style, children }: { src?: string; alt?: string; ratio?: string; className?: string; style?: CSSProperties; children?: ReactNode }) {
  return (
    <span className={['yw-card-media', className].filter(Boolean).join(' ')} style={{ display: 'block', aspectRatio: ratio, ...style }}>
      {src ? <img src={src} alt={alt} loading="lazy" /> : <span className="yw-card-media__placeholder" aria-hidden="true"><Icon name="image" size={24} /></span>}
      {children}
    </span>
  );
}
