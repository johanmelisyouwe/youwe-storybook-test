import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import tokens from '../styles/tokens.json';

/*
  Foundations render straight from src/styles/tokens.json, which is generated
  from the Figma export. Nothing on these pages is typed by hand: if a value
  looks wrong, fix it in Figma, re-export and run `npm run tokens`.
*/

const meta: Meta = {
  title: 'Foundations',
  parameters: { layout: 'padded' },
};
export default meta;

const label: React.CSSProperties = { color: 'var(--content-secondary)' };
const grid = (min: number): React.CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
  gap: 'var(--space-sm)',
});
const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-heading-md" style={{ margin: 'var(--space-2xl) 0 var(--space-sm)' }}>{children}</h2>
);

const groupBy = <T extends { name: string }>(items: T[], depth = 1) =>
  items.reduce<Record<string, T[]>>((acc, t) => {
    const key = t.name.split('/').slice(0, depth).join('/');
    (acc[key] ||= []).push(t);
    return acc;
  }, {});

export const Colors: StoryObj = {
  render: () => (
    <div>
      <p className="text-body-md-reg" style={label}>
        Semantic colours switch with the Mode toolbar (dark / light). Components should only use semantic tokens.
      </p>
      {Object.entries(groupBy(tokens.colors.semantic, 2)).map(([group, items]) => (
        <section key={group}>
          <H>{group}</H>
          <div style={grid(220)}>
            {items.map((t) => (
              <div key={t.name} style={{ border: '1px solid var(--border-2)', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
                <div style={{ height: 56, background: `var(${t.css})` }} />
                <div style={{ padding: 'var(--space-2xs) var(--space-xs)' }}>
                  <div className="text-body-sm-med">{t.name}</div>
                  <code className="text-body-xs-reg" style={label}>{t.css}</code>
                  <div className="text-body-xs-reg" style={label}>dark {t.dark} · light {t.light}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      <H>Primitives</H>
      <div style={grid(140)}>
        {tokens.colors.primitives.map((t) => (
          <div key={t.name}>
            <div style={{ height: 48, borderRadius: 'var(--radius-4)', background: t.value, border: '1px solid var(--border-2)' }} />
            <div className="text-body-xs-med" style={{ marginTop: 4 }}>{t.name}</div>
            <code className="text-body-xs-reg" style={label}>{t.value}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Typography: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
      <p className="text-body-md-reg" style={label}>
        Text styles from Figma as classes. Sizes scale per breakpoint (desktop / tablet / mobile) via font_semantics.
      </p>
      {tokens.textStyles.map((t) => (
        <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 'var(--space-lg)', alignItems: 'baseline', borderTop: '1px solid var(--border-2)', paddingTop: 'var(--space-sm)' }}>
          <div>
            <div className="text-body-sm-med">{t.name}</div>
            <code className="text-body-xs-reg" style={label}>.{t.className}</code>
            <div className="text-body-xs-reg" style={label}>{t.style} · {t.size}px · {t.lh} · {t.ls}</div>
          </div>
          <div className={t.className}>Systems that scale, optimize and drive revenue</div>
        </div>
      ))}
    </div>
  ),
};

export const Spacing: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-2xs)' }}>
      {tokens.spacing.map((t) => (
        <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '120px 160px 1fr', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <span className="text-body-sm-med">{t.name} · {t.value}px</span>
          <code className="text-body-xs-reg" style={label}>{t.css}</code>
          <div style={{ height: 16, width: `var(${t.css})`, background: 'var(--content-brand)' }} />
        </div>
      ))}
    </div>
  ),
};

export const Radius: StoryObj = {
  render: () => (
    <div style={grid(160)}>
      {tokens.radius.map((t) => (
        <div key={t.name}>
          <div style={{ height: 72, background: 'var(--surface-base-3)', borderRadius: `var(${t.css})` }} />
          <div className="text-body-xs-med" style={{ marginTop: 4 }}>{t.name}</div>
          <code className="text-body-xs-reg" style={label}>{t.css}</code>
        </div>
      ))}
    </div>
  ),
};

export const Motion: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-2xs)' }}>
      <p className="text-body-md-reg" style={label}>Motion tokens from the Figma “motion” collection. See Brand / Motion in Figma for usage.</p>
      {tokens.motion.map((t) => (
        <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '200px 260px 1fr', gap: 'var(--space-sm)' }}>
          <span className="text-body-sm-med">{t.name}</span>
          <code className="text-body-xs-reg" style={label}>{t.css}</code>
          <span className="text-body-sm-reg">{String(t.value)}</span>
        </div>
      ))}
    </div>
  ),
};

export const Effects: StoryObj = {
  render: () => (
    <div style={grid(200)}>
      {tokens.effects.map((t) => (
        <div key={t.name}>
          <div style={{ height: 80, background: 'var(--surface-base-2)', borderRadius: 'var(--radius-8)', boxShadow: `var(${t.css}, none)`, backdropFilter: `blur(var(${t.css}-blur, 0))` }} />
          <div className="text-body-xs-med" style={{ marginTop: 8 }}>{t.name}</div>
          <code className="text-body-xs-reg" style={label}>{t.css}</code>
        </div>
      ))}
    </div>
  ),
};
