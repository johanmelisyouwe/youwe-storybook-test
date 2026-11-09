import type { ReactNode } from 'react';

/* Story helper: renders children in a Figma Mode (Dark / Light) with that mode's page surface. */
export type Mode = 'Dark' | 'Light';
export function ModeFrame({ Mode, children, padding = 24 }: { Mode?: Mode; children: ReactNode; padding?: number }) {
  if (!Mode) return <>{children}</>;
  return (
    <div data-theme={Mode.toLowerCase()} style={{ background: 'var(--color-shared-surface-base-1)', color: 'var(--color-shared-content-primary)', padding }}>
      {children}
    </div>
  );
}
