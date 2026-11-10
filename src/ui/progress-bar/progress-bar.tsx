import styles from './progress-bar.module.css'

/* Progress Bar — Figma node 6284:7241 (page "– Progress Bar"). */

export type ProgressStep = 'Start' | '25%' | '50%' | '75%' | 'End'
const STEP: Record<ProgressStep, number> = {
    Start: 0,
    '25%': 25,
    '50%': 50,
    '75%': 75,
    End: 100,
}

export type ProgressBarProps = {
    /** Figma: Progress (or use `value` for any percentage) */
    Progress?: ProgressStep
    /** 0–100; overrides Progress */
    value?: number
    /** Accessible name, e.g. "Step 2 of 4" */
    label: string
}

export function ProgressBar({
    Progress = 'Start',
    value,
    label,
}: ProgressBarProps) {
    const v = Math.max(0, Math.min(100, value ?? STEP[Progress]))
    return (
        <div
            className={styles.root}
            role="progressbar"
            aria-label={label}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={v}
        >
            <div className={styles.bar} style={{ width: `${v}%` }} />
        </div>
    )
}
