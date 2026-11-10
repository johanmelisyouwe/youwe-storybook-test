import { CardMedia } from '../../shared/card-reveal/card-media'
import { SectionIntro } from '../section-header'
import '../../shared/block/block.css'
import '../accordion-list/accordion-list.css'

/* Content blocks/Leadership — Figma 26848:385; Person Card — Figma 26763:60. Styles in AccordionList.css. */

export type PersonCardProps = {
    /** Figma: Photo */
    Photo?: 'Yes' | 'No'
    name: string
    role: string
    email?: string
    image?: string
}

export function PersonCard({
    Photo = 'No',
    name,
    role,
    email,
    image,
}: PersonCardProps) {
    return (
        <article
            className={['yw-person', Photo === 'No' && 'yw-person--plain']
                .filter(Boolean)
                .join(' ')}
        >
            {Photo === 'Yes' && (
                <CardMedia src={image} alt={name} style={{ height: 320 }} />
            )}
            <div className="yw-person__info">
                <h3 className="yw-body-lg-med" style={{ margin: 0 }}>
                    {name}
                </h3>
                <span className="yw-person__role yw-body-md-reg">{role}</span>
                {email && (
                    <a
                        className="yw-person__email yw-body-md-reg"
                        href={`mailto:${email}`}
                    >
                        {email}
                    </a>
                )}
            </div>
        </article>
    )
}

export type LeadershipProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker: string
    title: string
    people: Omit<PersonCardProps, 'Photo'>[]
    /** Person Card photos (Figma Leadership uses Photo=No) */
    photos?: boolean
}

export function Leadership({
    kicker,
    title,
    people,
    photos = false,
}: LeadershipProps) {
    return (
        <section className="yw-block yw-leadership" aria-label={title}>
            <div className="yw-block__inner">
                <SectionIntro Layout="Stacked" Kicker={kicker} Title={title} />
                <ul className="yw-leadership__people">
                    {people.map((p) => (
                        <li key={p.name} className="yw-block-reveal">
                            <PersonCard {...p} Photo={photos ? 'Yes' : 'No'} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
