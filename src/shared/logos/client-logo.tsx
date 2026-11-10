import { Logo } from './logo'

/* Client logo by name, kept for existing callers: the Figma logo box (190×100) at the given slot width. */
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
    return <Logo name={name} width={width} className={className} />
}
