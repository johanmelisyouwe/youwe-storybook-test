import { Icon } from '../../icons/Icon';
import { Button } from '../Button/Button';
import { Pills } from '../Pills/Pills';
import { InsightCard, type InsightCardProps } from '../InsightCard/InsightCard';
import '../../shared/block.css';
import '../../shared/focus-ring.css';
import '../FilterBar/FilterBar.css';
import './InsightsOverview.css';

/*
  Content blocks/Insights overview — built from the hand-built "All insights" frames on Page / Insights:
  desktop 26734:89 (inside "Insights · content" 26661:7329), mobile 26816:3083. Not a Figma component yet
  (proposed for design review).
  Heading: red-line kicker + heading/xl (gap 12). Desktop: type filters in the Filter bar box (tiles
  "All · 174" etc., label + arrow, 120 high, gap 16; the selected tile has the Filter bar's pressed outline),
  "Showing 12 of 174" body/sm/reg tertiary, a 3-column Insight Card grid (gap 16, rows 40), Show more
  (Outline M). Mobile: the types as a sideways-scrolling pill row, one card per row (gap 24).
  Gaps: heading → filters → count → grid → more 40 (mobile 24).
*/

export type InsightType = { label: string; count: number };
export type InsightItem = Omit<InsightCardProps, 'Device' | 'Variant' | 'className'>;

export type InsightsOverviewProps = {
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  kicker?: string;
  title?: string;
  /** Type filters; the first is usually "All" */
  types: InsightType[];
  /** Selected type label */
  type: string;
  onTypeChange?: (type: string) => void;
  /** Cards currently shown */
  items: InsightItem[];
  /** Total for the selected type (for "Showing x of y" and Show more) */
  total: number;
  onShowMore?: () => void;
  /** Shown when the selected type has no cards */
  empty?: string;
};

export function InsightsOverview({ Device = 'Desktop', kicker = 'Insights', title = 'All insights', types, type, onTypeChange, items, total, onShowMore, empty = 'Nothing here yet.' }: InsightsOverviewProps) {
  const mobile = Device === 'Mobile';
  const more = items.length < total;
  return (
    <section className={['yw-block', 'yw-insights', mobile && 'yw-insights--mobile'].filter(Boolean).join(' ')}>
      <div className="yw-block__inner">
        <div className="yw-insights__stack">
          <div className="yw-insights__heading yw-block-reveal">
            <span className="yw-kicker yw-body-sm-bold">{kicker}</span>
            <h2 className="yw-heading-xl">{title}</h2>
          </div>
          {mobile ? (
            <ul className="yw-filter-bar__pills yw-insights__pills" aria-label="Insight type">
              {types.map((t) => (
                <li key={t.label}><Pills Variant={t.label === type ? 'Primary' : 'Neutral'} label={`${t.label} · ${t.count}`} pressed={t.label === type} onClick={() => onTypeChange?.(t.label)} /></li>
              ))}
            </ul>
          ) : (
            <div className="yw-filter-bar" role="group" aria-label="Insight type">
              <ul className="yw-filter-bar__systems yw-insights__types" style={{ gridTemplateColumns: `repeat(${types.length}, minmax(0, 1fr))` }}>
                {types.map((t) => (
                  <li key={t.label}>
                    <button type="button" className="yw-filter-tile yw-focus-ring" aria-pressed={t.label === type} onClick={() => onTypeChange?.(t.label)}>
                      <span className="yw-body-sm-reg">{`${t.label} · ${t.count}`}</span>
                      <Icon name="arrow-forward" size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="yw-insights__count yw-body-sm-reg" aria-live="polite">{`Showing ${items.length} of ${total}`}</p>
          {items.length === 0 && <p className="yw-insights__empty yw-body-md-reg">{empty}</p>}
          <ul className="yw-insights__grid">
            {items.map((it, i) => <li key={`${it.Title}-${i}`}><InsightCard Device={Device} {...it} /></li>)}
          </ul>
          {more && <div><Button Variant="Outline" Size="M" label="Show more" onClick={onShowMore} /></div>}
        </div>
      </div>
    </section>
  );
}
