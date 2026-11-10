import type { ReactNode } from 'react'
import { ServiceCard, type ServiceCardProps } from '../ServiceCard/ServiceCard'
import '../../shared/block.css'
import './ServicesSplit.css'

/* Content blocks/Services split — Figma 26849:946. */

/** Shared left column of the split blocks: kicker, heading/2xl title, body, optional link and snippets. */
export function SplitIntro({
    kicker,
    title,
    body,
    link,
    snippets,
}: {
    kicker: string
    title: string
    body: string
    link?: ReactNode
    snippets?: ReactNode
}) {
    return (
        <div className="yw-split__left">
            <div className="yw-split__intro yw-block-reveal">
                <h2 className="yw-split__title">
                    <span className="yw-kicker yw-body-sm-bold">{kicker}</span>
                    <span className="yw-heading-2xl">{title}</span>
                </h2>
                <p className="yw-body-lg-reg">{body}</p>
                {link}
            </div>
            {snippets && (
                <div className="yw-split__snippets yw-block-reveal">
                    {snippets}
                </div>
            )}
        </div>
    )
}

export type ServicesSplitProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker: string
    title: string
    body: string
    /** Ask Youwe snippets under the intro */
    snippets?: ReactNode
    services: ServiceCardProps[]
}

export function ServicesSplit({
    kicker,
    title,
    body,
    snippets,
    services,
}: ServicesSplitProps) {
    const a = services.filter((_, i) => i % 2 === 0)
    const b = services.filter((_, i) => i % 2 === 1)
    return (
        <section className="yw-block yw-split" aria-label={title}>
            <div className="yw-block__inner">
                <SplitIntro
                    kicker={kicker}
                    title={title}
                    body={body}
                    snippets={snippets}
                />
                <div className="yw-split__cols">
                    <ul className="yw-split__col">
                        {a.map((s) => (
                            <li key={s.Title} className="yw-block-reveal">
                                <ServiceCard {...s} />
                            </li>
                        ))}
                    </ul>
                    <ul className="yw-split__col yw-split__col--offset">
                        {b.map((s) => (
                            <li key={s.Title} className="yw-block-reveal">
                                <ServiceCard {...s} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
