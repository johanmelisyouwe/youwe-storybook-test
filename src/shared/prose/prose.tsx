import type { ReactNode } from 'react'
import { cx } from '../cx'
import styles from './prose.module.css'

/*
  Rich text for CMS body fields. A body prop takes:
  - a string: one paragraph
  - a string[]: one paragraph each
  - ReactNode: rendered rich text (e.g. Contentful rich text through @contentful/rich-text-react-renderer).
    Use plain elements (p, h3, h4, ul, ol, li, a, strong, em, blockquote, img, hr); Prose styles them with the
    tokens: links underlined in content/link, lists with bullets/numbers, bold, H3/H4 in the heading styles.
*/

export type RichText = string | string[] | ReactNode

export function Prose({
    children,
    className,
    as: Tag = 'div',
}: {
    children: RichText
    className?: string
    as?: 'div' | 'span'
}) {
    if (children == null || children === '') return null
    const content =
        typeof children === 'string' ? (
            <p>{children}</p>
        ) : Array.isArray(children) &&
          children.every((c) => typeof c === 'string') ? (
            (children as string[]).map((p, i) => <p key={i}>{p}</p>)
        ) : (
            children
        )
    return <Tag className={cx(styles.prose, className)}>{content}</Tag>
}
