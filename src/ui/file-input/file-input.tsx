import { useId, useState } from 'react'
import { FieldShell } from '../field'
import { cx } from '../../shared/cx'
import styles from './file-input.module.css'

/*
  File Input — code component (not in Figma as a component; the Figma Contact page has an "Attachment
  (optional)" field, added 19 November). Built on the shared Field shell (static label, control box) like
  Text Input: a small outline "Choose file" button and the file name, or the hint ("No file chosen · PDF
  or DOCX, max 10 MB") until a file is picked. The native input is visually hidden but keeps the
  keyboard focus (a focus outline shows on the button).
*/

export const FILE_INPUT_LABELS = {
    choose: 'Choose file',
    none: 'No file chosen',
}

export type FileInputProps = {
    Label: string
    Required?: boolean
    /** Shown after "No file chosen", e.g. "PDF or DOCX, max 10 MB" */
    hint?: string
    /** e.g. ".pdf,.docx" */
    accept?: string
    name?: string
    onChange?: (file: File | undefined) => void
    labels?: Partial<typeof FILE_INPUT_LABELS>
}

export function FileInput({
    Label,
    Required,
    hint,
    accept,
    name,
    onChange,
    labels: l,
}: FileInputProps) {
    const L = { ...FILE_INPUT_LABELS, ...l }
    const id = useId()
    const [file, setFile] = useState<string>()
    return (
        <FieldShell
            labels="Static"
            id={id}
            label={Label}
            required={Required}
            filled={!!file}
        >
            <span className={styles.row}>
                <input
                    id={id}
                    type="file"
                    name={name}
                    accept={accept}
                    required={Required}
                    className={styles.input}
                    onChange={(e) => {
                        const f = e.target.files?.[0]
                        setFile(f?.name)
                        onChange?.(f)
                    }}
                />
                <span
                    aria-hidden="true"
                    className={cx(styles.button, 'yw-body-xs-reg')}
                >
                    {L.choose}
                </span>
                <span
                    data-filled={file ? true : undefined}
                    className={cx(styles.name, 'yw-body-sm-reg')}
                >
                    {file ?? [L.none, hint].filter(Boolean).join(' · ')}
                </span>
            </span>
        </FieldShell>
    )
}
