import { isValidElement, type ReactNode } from 'react'

/*
  CMS assets. Every image and logo prop takes either a URL string or an asset object, so Contentful data
  (file URL + description) maps straight on:
    image={{ src: entry.fields.image.fields.file.url, alt: entry.fields.image.fields.description }}
  Logos also still take a code logo (<Logos.Quooker />); an asset renders as an <img> sized like the code logos.
*/

export type ImageAsset = {
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}

/** An image: a URL, or an asset with alt text */
export type ImageInput = string | ImageAsset

/** A logo: a code logo (ReactNode), a URL, or an asset with alt text */
export type LogoInput = ReactNode | ImageAsset

export const isAsset = (x: unknown): x is ImageAsset =>
    typeof x === 'object' &&
    x !== null &&
    !isValidElement(x) &&
    !Array.isArray(x) &&
    typeof (x as ImageAsset).src === 'string'

export const assetSrc = (i?: ImageInput | null): string | undefined =>
    typeof i === 'string' ? i : (i?.src ?? undefined)

/** The asset's alt text if it has one, else the fallback */
export const assetAlt = (i?: ImageInput | null, fallback = ''): string =>
    typeof i === 'object' && i?.alt != null ? i.alt : fallback

/** Renders a LogoInput: code logos as they are, a URL or asset as an <img> filling the logo slot's height */
export function Logo({
    value,
    alt = '',
    className,
}: {
    value: LogoInput | string
    alt?: string
    className?: string
}) {
    if (typeof value === 'string' && /^(https?:|\/|\.|data:)/.test(value))
        return (
            <img
                src={value}
                alt={alt}
                className={className}
                style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
            />
        )
    if (isAsset(value))
        return (
            <img
                src={value.src}
                alt={value.alt ?? alt}
                width={value.width}
                height={value.height}
                className={className}
                style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
            />
        )
    return <>{value}</>
}
