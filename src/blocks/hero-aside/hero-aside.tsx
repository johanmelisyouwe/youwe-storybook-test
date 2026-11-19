import type { ReactNode } from 'react'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './hero-aside.module.css'

/*
  Content blocks/Hero aside — code block (not in Figma; added 19 November for the Event, and later
  Whitepaper, templates). A panel (e.g. Event details with the register CTA) that starts next to the
  hero title, in the right 4 of 12 columns, and stays in view (sticky, below the fixed header) while
  the hero image and the next block scroll by. It stops at the end of `children`, so it comes to rest
  beside the intro.
  - The Hero (Title + image) narrows its title to the left 8 columns inside this block, so the panel
    never covers it. Blocks in `children` must keep the right 4 columns free, e.g. Text + media 8/4
    with an empty `media`.
  - Below 1024 (block width) there is no sticky panel: it sits in the flow between the hero and the
    children.
*/

export type HeroAsideProps = {
    /** The Hero (Variant "Title + image") */
    hero: ReactNode
    /** The panel, e.g. <EventDetails /> */
    aside: ReactNode
    /** The block(s) the panel scrolls along with and stops beside, e.g. the intro */
    children: ReactNode
    /** Accessible name of the panel region, e.g. "Event details" */
    label?: string
}

export function HeroAside({ hero, aside, children, label }: HeroAsideProps) {
    return (
        <div data-hero-aside className={styles.root}>
            <div className={styles.hero}>{hero}</div>
            <div className={styles.rail}>
                <div className={cx(block.inner, styles.inner)}>
                    <aside aria-label={label} className={styles.aside}>
                        <div className={styles.sticky}>{aside}</div>
                    </aside>
                </div>
            </div>
            <div className={styles.rest}>{children}</div>
        </div>
    )
}
