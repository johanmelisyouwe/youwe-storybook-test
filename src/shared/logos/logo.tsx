import { logoFor, type LogoKind } from '../../media/media'

/*
  Client, technology and partner logos as in Figma: drawn in their Figma logo box (Clients/* and
  Technologies/* 190×100, partner Logos/* 120×40) with the logo's own margins inside, as a CSS mask in the
  text colour (dark and light mode). `width` is the slot width from Figma (case card 140, stat 80, hero
  bar 118, technology grid 118, partner card 120…); the height follows the box. Names without an
  exported logo fall back to the name as text.
*/
export function Logo({
    name,
    width = 140,
    kind = 'client',
    className,
}: {
    name: string
    width?: number
    kind?: LogoKind
    className?: string
}) {
    const l = logoFor(name, kind)
    if (!l)
        return (
            <span
                className={['yw-body-md-bold', className]
                    .filter(Boolean)
                    .join(' ')}
            >
                {name}
            </span>
        )
    const mask = `url("${l.src}") center / contain no-repeat`
    return (
        <span
            role="img"
            aria-label={name}
            className={className}
            style={{
                display: 'inline-block',
                width,
                height: Math.round(width / l.ratio),
                background: 'currentColor',
                mask,
                WebkitMask: mask,
                flexShrink: 0,
            }}
        />
    )
}
