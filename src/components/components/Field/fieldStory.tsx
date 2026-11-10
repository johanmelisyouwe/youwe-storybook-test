/*
  Story helpers shared by the input stories: map a Figma State value to real props
  (value, status, disabled) plus a pseudo-state class for the preview.
*/
export const FIELD_STATES = [
    'Rest',
    'Hover',
    'Active',
    'Filled',
    'Filled Hover',
    'Disabled',
    'Focused',
    'Success',
    'Error',
] as const
export type FieldState = (typeof FIELD_STATES)[number]

export function fieldState(state: FieldState) {
    const filled = ['Filled', 'Filled Hover', 'Success', 'Error'].includes(
        state
    )
    return {
        filled,
        status:
            state === 'Success'
                ? ('Success' as const)
                : state === 'Error'
                  ? ('Error' as const)
                  : undefined,
        disabled: state === 'Disabled',
        controlClassName: /Hover/.test(state)
            ? 'pseudo-hover'
            : state === 'Active' || state === 'Focused'
              ? 'pseudo-focus-within'
              : '',
    }
}
