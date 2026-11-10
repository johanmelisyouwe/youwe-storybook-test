import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import resolved from '../tokens/tokens.resolved.json'
import figma from '../../tokens/figma-variables.json'

/*
  Foundations render straight from the generated token files:
  - src/tokens/tokens.resolved.json (every CSS variable with its value per Figma mode)
  - tokens/figma-variables.json (text styles)
  Nothing on these pages is typed by hand (FIGMA-SYNC.md step 6). If a value looks
  wrong, fix it in Figma, re-export and run `pnpm tokens`.
*/

const meta: Meta = {
    title: 'Foundations',
    parameters: { layout: 'padded' },
}
export default meta

type Modes = Record<string, string>
const tokens = Object.entries(resolved as Record<string, Modes>)
const pick = (re: RegExp) => tokens.filter(([name]) => re.test(name))
const slug = (s: string) =>
    s
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')

const muted: React.CSSProperties = {
    color: 'var(--color-shared-content-secondary)',
}
const grid = (min: number): React.CSSProperties => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
    gap: 'var(--spacing-sm)',
})
const H = ({ children }: { children: React.ReactNode }) => (
    <h2
        className="yw-heading-md"
        style={{ margin: 'var(--spacing-2xl) 0 var(--spacing-sm)' }}
    >
        {children}
    </h2>
)
const Code = ({ children }: { children: React.ReactNode }) => (
    <code
        className="yw-body-xs-reg"
        style={{ ...muted, wordBreak: 'break-all' }}
    >
        {children}
    </code>
)

const groupBy = (list: [string, Modes][], depth: number) =>
    list.reduce<Record<string, [string, Modes][]>>((acc, t) => {
        const key = t[0].replace(/^--/, '').split('-').slice(0, depth).join('-')
        ;(acc[key] ||= []).push(t)
        return acc
    }, {})

export const Colors: StoryObj = {
    render: () => {
        const semantic = pick(/^--color-(shared|component)-/)
        const primitives = tokens.filter(
            ([n, m]) =>
                n.startsWith('--color-') &&
                !/^--color-(shared|component)-/.test(n) &&
                'Value' in m
        )
        return (
            <div>
                <p className="yw-body-md-reg" style={muted}>
                    Semantic colours switch with the Mode toolbar (dark /
                    light). Components use semantic tokens only.
                </p>
                {Object.entries(groupBy(semantic, 3)).map(([group, items]) => (
                    <section key={group}>
                        <H>{group}</H>
                        <div style={grid(220)}>
                            {items.map(([name, modes]) => (
                                <div
                                    key={name}
                                    style={{
                                        border: '1px solid var(--color-shared-border-2)',
                                        borderRadius:
                                            'var(--component-radius-card)',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <div
                                        style={{
                                            height: 56,
                                            background: `var(${name})`,
                                        }}
                                    />
                                    <div
                                        style={{
                                            padding:
                                                'var(--spacing-2xs) var(--spacing-xs)',
                                        }}
                                    >
                                        <Code>{name}</Code>
                                        <div
                                            className="yw-body-xs-reg"
                                            style={muted}
                                        >
                                            {'dark '}
                                            {modes.dark}
                                            {' · light '}
                                            {modes.light}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
                <H>Primitives</H>
                <div style={grid(140)}>
                    {primitives.map(([name, m]) => (
                        <div key={name}>
                            <div
                                style={{
                                    height: 48,
                                    borderRadius: 'var(--shared-radius-4)',
                                    background: `var(${name})`,
                                    border: '1px solid var(--color-shared-border-2)',
                                }}
                            />
                            <Code>{name}</Code>
                            <div className="yw-body-xs-reg" style={muted}>
                                {m.Value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
}

type TextStyle = {
    name: string
    family: string
    weight: string
    size: string | number
    lineHeight: string | number
    letterSpacing: string
}

export const Typography: StoryObj = {
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            <p className="yw-body-md-reg" style={muted}>
                Figma text styles as classes. Sizes switch per breakpoint
                (desktop / tablet / mobile) through the font_semantics
                variables.
            </p>
            {(figma._textStyles as TextStyle[]).map((t) => (
                <div
                    key={t.name}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '220px 1fr',
                        gap: 'var(--spacing-lg)',
                        alignItems: 'baseline',
                        borderTop: '1px solid var(--color-shared-border-2)',
                        paddingTop: 'var(--spacing-sm)',
                    }}
                >
                    <div>
                        <div className="yw-body-sm-med">{t.name}</div>
                        <Code>.yw-{slug(t.name)}</Code>
                        <div className="yw-body-xs-reg" style={muted}>
                            {`line-height ${t.lineHeight} · letter-spacing ${t.letterSpacing}`}
                        </div>
                    </div>
                    <div className={`yw-${slug(t.name)}`}>
                        Systems that scale, optimize and drive revenue
                    </div>
                </div>
            ))}
        </div>
    ),
}

const Scale = ({
    re,
    bar,
}: {
    re: RegExp
    bar: (name: string) => React.CSSProperties
}) => (
    <div style={{ display: 'grid', gap: 'var(--spacing-2xs)' }}>
        {pick(re).map(([name, m]) => (
            <div
                key={name}
                style={{
                    display: 'grid',
                    gridTemplateColumns: '260px 120px 1fr',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)',
                }}
            >
                <Code>{name}</Code>
                <span className="yw-body-sm-reg">{Object.values(m)[0]}</span>
                <div style={bar(name)} />
            </div>
        ))}
    </div>
)

export const Spacing: StoryObj = {
    render: () => (
        <Scale
            re={/^--spacing-/}
            bar={(n) => ({
                height: 16,
                width: `var(${n})`,
                background: 'var(--color-shared-content-brand)',
            })}
        />
    ),
}

export const Radius: StoryObj = {
    render: () => (
        <div style={grid(180)}>
            {pick(/radius/).map(([name, m]) => (
                <div key={name}>
                    <div
                        style={{
                            height: 72,
                            background: 'var(--color-shared-surface-base-3)',
                            borderRadius: `var(${name})`,
                        }}
                    />
                    <Code>{name}</Code>
                    <div className="yw-body-xs-reg" style={muted}>
                        {Object.values(m)[0]}
                    </div>
                </div>
            ))}
        </div>
    ),
}

export const Motion: StoryObj = {
    render: () => (
        <div>
            <p
                className="yw-body-md-reg"
                style={{ ...muted, marginBottom: 'var(--spacing-lg)' }}
            >
                Motion tokens from the Figma “motion” collection. Usage and
                recipes: the Brand / Motion page in Figma.
            </p>
            <Scale re={/^--motion-/} bar={() => ({})} />
        </div>
    ),
}

export const Effects: StoryObj = {
    render: () => (
        <div style={grid(200)}>
            {pick(/^--effect-/).map(([name]) => (
                <div key={name}>
                    <div
                        style={{
                            height: 80,
                            background: 'var(--color-shared-surface-base-2)',
                            borderRadius: 'var(--shared-radius-8)',
                            ...(name.endsWith('-blur')
                                ? { backdropFilter: `blur(var(${name}))` }
                                : { boxShadow: `var(${name})` }),
                        }}
                    />
                    <Code>{name}</Code>
                </div>
            ))}
        </div>
    ),
}
