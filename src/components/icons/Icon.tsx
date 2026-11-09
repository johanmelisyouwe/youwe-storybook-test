/*
  Icons exported from the Figma icon components (SVG export through the Figma MCP server).
  Paths are unchanged; the hard-coded white fill is replaced by currentColor so the
  icon takes the colour of its component (the Figma icons are colour-bound the same way).
  Add icons here as components need them, always exported from Figma.
*/

const paths = {
  // shopping-basket / Style=filled, size=lg (24) — default icon of Button/Basic in Figma
  'shopping-basket': {
    viewBox: '0 0 24 24',
    d: 'M17.21 9.00002L12.83 2.44002C12.64 2.16002 12.32 2.02002 12 2.02002C11.68 2.02002 11.36 2.16002 11.17 2.45002L6.79 9.00002H2C1.45 9.00002 1 9.45002 1 10C1 10.09 1.01 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45002 22.55 9.00002 22 9.00002H17.21ZM9 9.00002L12 4.60002L15 9.00002H9ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z',
  },
  // show-password / Style=rounded, size=md (16) — leading icon of Pills in Figma
  'show-password': {
    viewBox: '0 0 16 16',
    d: 'M7.99999 2.66675C4.66666 2.66675 1.81999 4.74008 0.666656 7.66675C1.81999 10.5934 4.66666 12.6667 7.99999 12.6667C11.3333 12.6667 14.18 10.5934 15.3333 7.66675C14.18 4.74008 11.3333 2.66675 7.99999 2.66675ZM7.99999 11.0001C6.15999 11.0001 4.66666 9.50675 4.66666 7.66675C4.66666 5.82675 6.15999 4.33341 7.99999 4.33341C9.83999 4.33341 11.3333 5.82675 11.3333 7.66675C11.3333 9.50675 9.83999 11.0001 7.99999 11.0001ZM7.99999 5.66675C6.89332 5.66675 5.99999 6.56008 5.99999 7.66675C5.99999 8.77342 6.89332 9.66675 7.99999 9.66675C9.10666 9.66675 9.99999 8.77342 9.99999 7.66675C9.99999 6.56008 9.10666 5.66675 7.99999 5.66675Z',
  },
  // info / Style=sharp, size=md (16) — trailing icon of Pills in Figma
  info: {
    viewBox: '0 0 16 16',
    d: 'M7.99967 1.33325C4.31967 1.33325 1.33301 4.31992 1.33301 7.99992C1.33301 11.6799 4.31967 14.6666 7.99967 14.6666C11.6797 14.6666 14.6663 11.6799 14.6663 7.99992C14.6663 4.31992 11.6797 1.33325 7.99967 1.33325ZM8.66634 11.3333H7.33301V7.33325H8.66634V11.3333ZM8.66634 5.99992H7.33301V4.66658H8.66634V5.99992Z',
  },
  // star-full / Style=rounded, size=sm (12) — icon of Tag in Figma
  'star-full': {
    viewBox: '0 0 12 12',
    d: 'M5.99998 8.75976L8.07498 10.0148C8.45498 10.2448 8.91998 9.90476 8.81998 9.47476L8.26998 7.11476L10.105 5.52476C10.44 5.23476 10.26 4.68476 9.81997 4.64976L7.40498 4.44476L6.45998 2.21476C6.28998 1.80976 5.70998 1.80976 5.53998 2.21476L4.59498 4.43976L2.17998 4.64476C1.73998 4.67976 1.55998 5.22976 1.89498 5.51976L3.72998 7.10976L3.17998 9.46976C3.07998 9.89976 3.54498 10.2398 3.92498 10.0098L5.99998 8.75976Z',
  },
} as const;

export type IconName = keyof typeof paths;
export const iconNames = Object.keys(paths) as IconName[];

export function Icon({ name, size, className }: { name: IconName; size: number; className?: string }) {
  const p = paths[name];
  return (
    <svg className={className} width={size} height={size} viewBox={p.viewBox} fill="none" aria-hidden="true" focusable="false">
      <path d={p.d} fill="currentColor" />
    </svg>
  );
}
