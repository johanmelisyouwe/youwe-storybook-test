import { CardMedia } from '../../shared/CardMedia';
import '../../shared/focus-ring.css';
import './ImageCard.css';

/* Image Card — Figma 26904:35 (page "Cards"). */

export type ImageCardProps = {
  image?: string;
  alt?: string;
  /** Figma: Caption (Show caption) */
  Caption?: string;
  /** Aspect ratio of the image when the card does not fill a grid cell (Figma: 416 × 300) */
  ratio?: string;
  href?: string;
  className?: string;
};

export function ImageCard({ image, alt = '', Caption, ratio = '416 / 300', href, className }: ImageCardProps) {
  const inner = (
    <>
      <CardMedia className="yw-image-card__media" src={image} alt={alt} ratio={ratio} />
      {Caption && <span className="yw-image-card__caption yw-body-sm-reg">{Caption}</span>}
    </>
  );
  const cls = ['yw-image-card', className].filter(Boolean).join(' ');
  return href ? <a href={href} className={`${cls} yw-focus-ring`}>{inner}</a> : <figure className={cls}>{inner}</figure>;
}
