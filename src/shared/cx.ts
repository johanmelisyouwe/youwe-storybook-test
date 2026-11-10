// One line instead of clsx (same as waypoint's ui-core); swap it in if we ever need object/array syntax.
export const cx = (...classes: (string | false | null | undefined)[]) =>
    classes.filter(Boolean).join(' ')
