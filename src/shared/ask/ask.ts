import { useEffect, useRef } from 'react'

/*
  "Ask Youwe this": a page-wide request to open Ask Youwe with a question. Components that offer a question
  (e.g. the AI Feature Card's link) call askYouwe(); whatever shows Ask Youwe on the page (the docked bar on
  the templates) listens with useAskYouwe(). The two never import each other, so on the real site the
  listener can hand the question to the real Ask Youwe service instead.
*/

export const ASK_EVENT = 'yw:ask'

export type AskDetail = { question: string }

export function askYouwe(question: string) {
    window.dispatchEvent(
        new CustomEvent<AskDetail>(ASK_EVENT, { detail: { question } })
    )
}

export function useAskYouwe(handler: (question: string) => void) {
    const ref = useRef(handler)
    ref.current = handler
    useEffect(() => {
        const on = (e: Event) =>
            ref.current((e as CustomEvent<AskDetail>).detail.question)
        window.addEventListener(ASK_EVENT, on)
        return () => window.removeEventListener(ASK_EVENT, on)
    }, [])
}
