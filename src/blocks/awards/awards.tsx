import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from '../accordion-list/accordion-list.module.css'

/* Content blocks/Awards — Figma 27096:9988. Styles in AccordionList.css (batch 9 blocks). */

export type AwardsProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** Figma: Title */
    Title?: string
    /** Badges (95×95); `image` is the badge artwork (one-colour SVG, drawn in the text colour), `name` its accessible name */
    badges: { name: string; image?: string }[]
}

export function Awards({
    Title = 'Trusted by industry leaders',
    badges,
}: AwardsProps) {
    return (
        <section className={cx(block.root, styles.awards)} aria-label={Title}>
            <div className={cx(block.inner, styles.inner)}>
                <div className={cx(styles['awards-row'], block.reveal)}>
                    <h2
                        className={cx(
                            styles['awards-title'],
                            'yw-body-lg-bold'
                        )}
                    >
                        {Title}
                    </h2>
                    <ul className={styles['awards-badges']}>
                        {badges.map((b) => (
                            <li
                                key={b.name}
                                className={styles['awards-badge']}
                                title={b.name}
                            >
                                {b.image ? (
                                    <span
                                        role="img"
                                        aria-label={b.name}
                                        className={styles['awards-art']}
                                        style={{
                                            WebkitMaskImage: `url(${b.image})`,
                                            maskImage: `url(${b.image})`,
                                        }}
                                    />
                                ) : (
                                    <>
                                        <CardMedia
                                            src={b.image}
                                            alt={b.name}
                                            ratio="1 / 1"
                                        />
                                        <span className="yw-visually-hidden">
                                            {b.name}
                                        </span>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
