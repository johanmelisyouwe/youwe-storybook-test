import { Logo } from './Logo'

/*
  Client logo by name — kept for existing callers; draws the logo exported from Figma (Clients/*) through
  Logo. width is the logo slot width (the Figma 190×100 frame scaled), the logo fits inside it.
*/
export type ClientName = string

export function ClientLogo({
    name,
    width = 140,
    className,
}: {
    name: ClientName
    width?: number
    className?: string
}) {
    return (
        <Logo
            name={name}
            box={[width * 0.8, ((width * 100) / 190) * 0.5]}
            className={className}
        />
    )
}
