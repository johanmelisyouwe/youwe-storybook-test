import { Icon } from '../../icons/Icon';
import { Button } from '../Button/Button';
import { ButtonFilter } from '../ButtonFilter/ButtonFilter';
import '../../shared/focus-ring.css';
import './Breadcrumbs.css';

/*
  Breadcrumbs — Figma Breadcrumbs/Desktop 18846:21440 and Breadcrumbs/Mobile 18703:12478 (page "Breadcrumbs").
  Links are _breadcrumb-link (15409:8869): State Rest / Hover / Active (current page) / Focused.
  Desktop "Show back button" (default off): Button/Basic Outline, Leading chevron-left, S, "Back" to the parent page, gap 12.
*/

export type Crumb = { label: string; href?: string };

export type BreadcrumbsProps = {
  /** Path from Home to the current page; the last item is the current page (State=Active) */
  items: Crumb[];
  /** Figma: two components, Breadcrumbs/Desktop and Breadcrumbs/Mobile */
  Device?: 'Desktop' | 'Mobile';
  /** Desktop only. Figma: Show back button — "Back" to the parent page before the crumbs */
  'Show back button'?: boolean;
  /** Mobile only. Figma: Filter button */
  'Filter button'?: boolean;
  onFilter?: () => void;
  className?: string;
  /** Story helper: class on every link (e.g. pseudo-focus-visible) */
  linkClassName?: string;
};

export function Breadcrumbs({ items, Device = 'Desktop', 'Show back button': back = false, 'Filter button': filter = true, onFilter, className, linkClassName }: BreadcrumbsProps) {
  if (Device === 'Mobile') {
    const parent = items[items.length - 2] ?? items[0];
    return (
      <nav aria-label="Breadcrumb" className={['yw-breadcrumbs', 'yw-breadcrumbs--mobile', className].filter(Boolean).join(' ')}>
        <Button Variant="Outline" Icon="Leading" Size="S" iconName="chevron-left" label={parent.label} href={parent.href} />
        {filter && <ButtonFilter Size="S" label="Filter" {...{ 'Active Filter': false }} onClick={onFilter} />}
      </nav>
    );
  }
  return (
    <nav aria-label="Breadcrumb" className={['yw-breadcrumbs', back && 'yw-breadcrumbs--back', className].filter(Boolean).join(' ')}>
      {back && <Button Variant="Outline" Icon="Leading" Size="S" iconName="chevron-left" label="Back" href={(items[items.length - 2] ?? items[0]).href ?? '#'} />}
      <ol className="yw-breadcrumbs__list">
        {items.map((c, i) => {
          const current = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="yw-breadcrumbs__item yw-body-xs-reg">
              <a className={['yw-breadcrumbs__link', 'yw-focus-ring', linkClassName].filter(Boolean).join(' ')} href={c.href ?? '#'} aria-current={current ? 'page' : undefined}>
                {i > 0 && <span className="yw-breadcrumbs__chevron" aria-hidden="true"><Icon name="chevron-right" size={16} /></span>}
                <span className="yw-breadcrumbs__text">{c.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
