import { Icon } from '../../icons/Icon';
import '../../shared/focus-ring.css';
import './Pagination.css';

/* Pagination — Figma 6284:7106 (Variant: View amount, Pagination × Device). */

/** Pages to show around the current page; 'gap' renders an ellipsis. Page 1 of 12 → 1 2 3 … 12 (Figma). */
export function pageItems(page: number, total: number): (number | 'gap')[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const start = Math.max(1, Math.min(page - 1, total - 2));
  const window = [start, start + 1, start + 2];
  const items: (number | 'gap')[] = [];
  if (window[0] > 1) items.push(1);
  if (window[0] > 2) items.push('gap');
  items.push(...window);
  if (window[2] < total - 1) items.push('gap');
  if (window[2] < total) items.push(total);
  return items;
}

export type PaginationProps = {
  /** Figma: Variant */
  Variant?: 'View amount' | 'Pagination';
  /** Figma: Device — mobile shows first/last and only the current page */
  Device?: 'Desktop' | 'Mobile';
  /** Current page (1-based) */
  page?: number;
  /** Number of pages */
  total?: number;
  onPageChange?: (page: number) => void;
  /** View amount: items per page and the options */
  perPage?: number;
  perPageOptions?: number[];
  onPerPageChange?: (n: number) => void;
  /** Story helper: classes per button for pseudo states */
  buttonClassName?: string;
  className?: string;
};

export function Pagination({ Variant = 'Pagination', Device = 'Desktop', page = 1, total = 12, onPageChange, perPage = 12, perPageOptions = [12, 24, 48], onPerPageChange, buttonClassName, className }: PaginationProps) {
  if (Variant === 'View amount') {
    return (
      <div className={['yw-view-amount yw-body-md-reg', className].filter(Boolean).join(' ')}>
        <span id="yw-view-max">View max.</span>
        <span className="yw-compact-select" style={{ padding: 0 }}>
          <select className="yw-focus-ring yw-body-md-reg" aria-labelledby="yw-view-max yw-per-page" value={perPage} onChange={(e) => onPerPageChange?.(Number(e.target.value))}>
            {perPageOptions.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
          <Icon name="chevron-down" size={24} />
        </span>
        <span id="yw-per-page">per page</span>
      </div>
    );
  }

  const go = (p: number) => onPageChange?.(Math.min(total, Math.max(1, p)));
  const btn = (cls = '') => ['yw-page-btn yw-focus-ring yw-body-md-reg', cls, buttonClassName].filter(Boolean).join(' ');
  const first = page <= 1;
  const last = page >= total;

  return (
    <nav className={['yw-pagination', className].filter(Boolean).join(' ')} aria-label="Pagination">
      {Device === 'Mobile' && (
        <button type="button" className={btn()} disabled={first} onClick={() => go(1)} aria-label="First page"><Icon name="first-page" size={24} /></button>
      )}
      <button type="button" className={btn('yw-page-btn--prev')} disabled={first} onClick={() => go(page - 1)} aria-label="Previous page">
        <Icon name="chevron-left" size={24} />Prev
      </button>
      <ol>
        {(Device === 'Mobile' ? [page] : pageItems(page, total)).map((it, i) => (
          <li key={it === 'gap' ? `gap-${i}` : it}>
            {it === 'gap'
              ? <span className="yw-page-gap yw-body-md-reg" aria-hidden="true">…</span>
              : <button type="button" className={btn()} aria-current={it === page ? 'page' : undefined} aria-label={`Page ${it}`} onClick={() => go(it)}>{it}</button>}
          </li>
        ))}
      </ol>
      <button type="button" className={btn('yw-page-btn--next')} disabled={last} onClick={() => go(page + 1)} aria-label="Next page">
        Next<Icon name="chevron-right" size={24} />
      </button>
      {Device === 'Mobile' && (
        <button type="button" className={btn()} disabled={last} onClick={() => go(total)} aria-label="Last page"><Icon name="last-page" size={24} /></button>
      )}
    </nav>
  );
}
