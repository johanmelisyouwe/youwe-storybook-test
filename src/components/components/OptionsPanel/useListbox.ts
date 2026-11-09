import { useEffect, useRef, useState, type KeyboardEvent } from 'react';

/*
  Keyboard and open/close behaviour for a select-only combobox (WAI-ARIA APG):
  Enter/Space/ArrowDown opens, Arrow Up/Down move, Home/End jump, Enter selects, Escape closes,
  clicking outside closes.
*/
export function useListbox(count: number, selectedIndex: number, onSelectIndex: (i: number) => void, initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);
  const [active, setActive] = useState(selectedIndex);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (root.current && !root.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (!open) {
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        setActive(selectedIndex < 0 ? 0 : selectedIndex);
        setOpen(true);
      }
      return;
    }
    const keys: Record<string, () => void> = {
      ArrowDown: () => setActive((a) => Math.min(count - 1, a + 1)),
      ArrowUp: () => setActive((a) => Math.max(0, a - 1)),
      Home: () => setActive(0),
      End: () => setActive(count - 1),
      Enter: () => { onSelectIndex(active); setOpen(false); },
      ' ': () => { onSelectIndex(active); setOpen(false); },
      Escape: () => setOpen(false),
      Tab: () => setOpen(false),
    };
    if (keys[e.key]) {
      if (e.key !== 'Tab') e.preventDefault();
      keys[e.key]();
    }
  };

  return { open, setOpen, active, setActive, onKeyDown, root };
}
