import sync from '../../../figma-sync.json'
import { cx } from '../../shared/cx'
import { YouweLogo } from '../../shared/logos/youwe-logo'
import styles from './introduction.module.css'

/*
  Introduction page (docs, not a Figma component). Built from the design system itself: tokens, the .yw-*
  text styles, the Youwe logo and the dark surfaces of the site. Counts come from figma-sync.json.
*/

const FIGMA = 'https://www.figma.com/design/IP237ISXsaciooPrSykYMh/'
const REPO = 'https://github.com/johanmelisyouwe/youwe-storybook-test'

// Links open in the Storybook window (the docs page runs in an iframe next to iframe.html)
const sb = (path: string) => `./?path=${path}`

const components = sync.components.filter((c) => c.status === 'complete').length
const blocks = sync.components.filter(
    (c) => c.status === 'complete' && c.figma.name.startsWith('Content blocks/')
).length
const templates = sync.templates.length

const SECTIONS = [
    {
        n: '01',
        title: 'Foundations',
        body: 'Colour, typography, spacing, radius, motion and effects. Every value is a Figma variable or style, turned into CSS custom properties.',
        href: sb('/story/foundations--colors'),
    },
    {
        n: '02',
        title: 'Components',
        body: 'Buttons, inputs, cards, header, footer and Ask Youwe. Each Figma variant and state is a story, with the Figma property names as props.',
        href: sb('/story/components-buttons-basic--default'),
    },
    {
        n: '03',
        title: 'Content blocks',
        body: 'Page sections: hero, card grid, case carousel, stats, vertical slider and more. Built to be stacked into pages.',
        href: sb('/story/content-blocks-hero--default'),
    },
    {
        n: '04',
        title: 'Templates',
        body: 'The approved pages, desktop and mobile, assembled from content blocks with the Figma copy, images and motion.',
        href: sb('/story/templates-home--desktop'),
    },
]

const TOOLBAR = [
    ['Mode', 'Dark and Light: the two modes of the Figma colour collection.'],
    ['Viewport', 'Mobile (360) and Desktop (1440) match the Figma frames; the layout is fluid in between and above.'],
    ['Accessibility', 'Every story is checked for contrast, labels and roles in the Accessibility panel. Text meets WCAG AA.'],
    ['States', 'Hover, focus and pressed states are shown with the Pseudo states panel, so they can be reviewed side by side.'],
]

const PRINCIPLES = [
    ['Figma is the source of truth', 'Values, names, variants and copy come from Figma. No invented colours, sizes or content.'],
    ['Desktop leads', 'Mobile follows the desktop design and content; the same component switches its layout by width.'],
    ['Accessible by default', 'AA contrast, 24px tap targets, a correct heading outline and full keyboard focus.'],
    ['Motion with care', 'Expressive scroll motion on the pages, and none at all when reduced motion is on.'],
]

const FLOW = [
    ['Figma variables', 'Exported to tokens/figma-variables.json'],
    ['Tokens', 'pnpm tokens builds src/tokens/tokens.css'],
    ['Components', 'Figma variants as props, CSS Modules on tokens'],
    ['Checks', 'check-legacy and check-coverage on every change'],
    ['Storybook', 'Built and published on every merge to main'],
]

export function Introduction() {
    return (
        <div data-theme="dark" className={styles.root}>
            <header className={styles.hero}>
                <YouweLogo width={64} />
                <div className={styles['hero-text']}>
                    <span className={cx(styles.kicker, 'yw-body-sm-bold')}>
                        Design system
                    </span>
                    <h1 className={cx(styles.title, 'yw-heading-2xl')}>
                        Youwe design system
                    </h1>
                    <p className={cx(styles.lead, 'yw-body-xl-reg')}>
                        The components, content blocks and page templates of the
                        Youwe website, built from the Youwe Figma file. Figma is
                        the source of truth; this Storybook is how it looks and
                        behaves in code.
                    </p>
                </div>
                <dl className={styles.stats}>
                    {[
                        [components, 'Components in sync with Figma'],
                        [blocks, 'Content blocks'],
                        [templates, 'Page templates, desktop and mobile'],
                        ['AA', 'Text contrast, both modes'],
                    ].map(([v, l]) => (
                        <div key={l} className={styles.stat}>
                            <dt className={cx(styles['stat-label'], 'yw-body-md-reg')}>{l}</dt>
                            <dd className={cx(styles['stat-value'], 'yw-heading-xl')}>{v}</dd>
                        </div>
                    ))}
                </dl>
            </header>

            <section className={styles.section} aria-labelledby="intro-start">
                <h2 id="intro-start" className={cx(styles.kicker, 'yw-body-sm-bold')}>
                    What's here
                </h2>
                <ul className={styles.cards}>
                    {SECTIONS.map((s) => (
                        <li key={s.title}>
                            <a href={s.href} target="_top" className={styles.card}>
                                <span className={cx(styles['card-n'], 'yw-body-sm-bold')}>{s.n}</span>
                                <span className="yw-heading-md">{s.title}</span>
                                <span className={cx(styles.muted, 'yw-body-md-reg')}>{s.body}</span>
                                <span className={cx(styles['card-link'], 'yw-body-sm-bold')}>
                                    Open
                                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                                        <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.section} aria-labelledby="intro-principles">
                <h2 id="intro-principles" className={cx(styles.kicker, 'yw-body-sm-bold')}>
                    Principles
                </h2>
                <ul className={styles.grid}>
                    {PRINCIPLES.map(([t, b]) => (
                        <li key={t} className={styles.item}>
                            <span className="yw-body-lg-bold">{t}</span>
                            <span className={cx(styles.muted, 'yw-body-md-reg')}>{b}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.section} aria-labelledby="intro-toolbar">
                <h2 id="intro-toolbar" className={cx(styles.kicker, 'yw-body-sm-bold')}>
                    Using this Storybook
                </h2>
                <ul className={styles.grid}>
                    {TOOLBAR.map(([t, b]) => (
                        <li key={t} className={styles.item}>
                            <span className="yw-body-lg-bold">{t}</span>
                            <span className={cx(styles.muted, 'yw-body-md-reg')}>{b}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.section} aria-labelledby="intro-flow">
                <h2 id="intro-flow" className={cx(styles.kicker, 'yw-body-sm-bold')}>
                    From Figma to code
                </h2>
                <ol className={styles.flow}>
                    {FLOW.map(([t, b], i) => (
                        <li key={t} className={styles.step}>
                            <span className={cx(styles['card-n'], 'yw-body-sm-bold')}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="yw-body-lg-bold">{t}</span>
                            <span className={cx(styles.muted, 'yw-body-sm-reg')}>{b}</span>
                        </li>
                    ))}
                </ol>
            </section>

            <section className={styles.section} aria-labelledby="intro-dev">
                <h2 id="intro-dev" className={cx(styles.kicker, 'yw-body-sm-bold')}>
                    For developers
                </h2>
                <div className={styles.dev}>
                    <p className={cx(styles.muted, 'yw-body-lg-reg')}>
                        Next.js and React with TypeScript. Components are CSS Modules
                        on the generated tokens, grouped by role:{' '}
                        <code>src/ui</code>, <code>src/blocks</code>,{' '}
                        <code>src/site</code> and <code>src/shared</code>, with the
                        page templates in <code>src/templates</code>. Read{' '}
                        <code>AGENTS.md</code>, <code>FIGMA-SYNC.md</code> and{' '}
                        <code>CONVENTIONS.md</code> in the repository before changing
                        anything.
                    </p>
                    <p className={cx(styles.muted, 'yw-body-lg-reg')}>
                        Typeface: Aktiv Grotesk in Regular, Medium and Bold, the
                        weights the Figma text styles use.
                    </p>
                    <div className={styles.links}>
                        <a className={styles.button} href={FIGMA} target="_blank" rel="noreferrer">
                            Open the Figma file
                        </a>
                        <a className={cx(styles.button, styles['button-outline'])} href={REPO} target="_blank" rel="noreferrer">
                            View the repository
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
