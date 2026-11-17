import{j as e}from"./iframe-FrZ6yjpt.js";import{u as r,M as t}from"./blocks-Cwbp5BNw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BXxEjxiW.js";function o(n){const s={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Introduction/CMS integration"}),`
`,e.jsx(s.h1,{id:"cms-integration-contentful",children:"CMS integration (Contentful)"}),`
`,e.jsx(s.p,{children:"This Storybook is the source of truth for the Youwe site. Every template is built from blocks, and every block takes its content as props. This page lists the data shapes so a Contentful entry can be mapped onto a block one to one."}),`
`,e.jsx(s.h2,{id:"conventions",children:"Conventions"}),`
`,e.jsxs(s.p,{children:[`| What | Prop type | From Contentful |
|---|---|---|
| `,e.jsx(s.strong,{children:"Image"})," (every ",e.jsx(s.code,{children:"image"}),", ",e.jsx(s.code,{children:"poster"}),", ",e.jsx(s.code,{children:"images[]"}),", ",e.jsx(s.code,{children:"featureImage"}),", ",e.jsx(s.code,{children:"backgroundImage"}),") | ",e.jsx(s.code,{children:"string \\| { src, alt?, width?, height? }"})," | ",e.jsx(s.code,{children:"{ src: 'https:' + asset.fields.file.url, alt: asset.fields.description }"}),` |
| `,e.jsx(s.strong,{children:"Logo"})," (Case Card, Stat, Hero logo bar, Technology logos, Testimonial, Quote Card, Technology Card) | ",e.jsx(s.code,{children:"ReactNode \\| { src, alt }"})," (a code logo or an asset) | An SVG/PNG asset: ",e.jsx(s.code,{children:"{ src, alt: the client }"}),` |
| `,e.jsx(s.strong,{children:"Rich text"})," (Text column, Text + media, Case intro, Two-column text, Section header, Accordion items, Content tabs, Stats outcomes) | ",e.jsx(s.code,{children:"string \\| string[] \\| ReactNode"})," | ",e.jsx(s.code,{children:"documentToReactComponents(field)"})," from ",e.jsx(s.code,{children:"@contentful/rich-text-react-renderer"}),". Use plain elements (",e.jsx(s.code,{children:"p"}),", ",e.jsx(s.code,{children:"h3"}),", ",e.jsx(s.code,{children:"h4"}),", ",e.jsx(s.code,{children:"ul"}),", ",e.jsx(s.code,{children:"ol"}),", ",e.jsx(s.code,{children:"li"}),", ",e.jsx(s.code,{children:"a"}),", ",e.jsx(s.code,{children:"strong"}),", ",e.jsx(s.code,{children:"em"}),", ",e.jsx(s.code,{children:"blockquote"}),", ",e.jsx(s.code,{children:"img"}),", ",e.jsx(s.code,{children:"hr"}),`). The block styles them. |
| `,e.jsx(s.strong,{children:"Links"})," | ",e.jsx(s.code,{children:"{ label, href }"})," | A link entry, or ",e.jsx(s.code,{children:"{ label: entry.title, href: '/' + locale + '/' + entry.slug }"}),` |
| `,e.jsx(s.strong,{children:"Video"})," | ",e.jsx(s.code,{children:"string"}),` (file URL or Vimeo URL) | An asset URL or a Vimeo URL field |
| `,e.jsx(s.strong,{children:"UI text"})," (buttons, aria labels) | ",e.jsx(s.code,{children:"labels?: Partial<…_LABELS>"})," | Translations per locale; every component exports its English defaults, e.g. ",e.jsx(s.code,{children:"CASE_CAROUSEL_LABELS"}),". Placeholders such as ",e.jsx(s.code,{children:"{count}"}),` are filled by the component. |
| `,e.jsx(s.strong,{children:"Regions / locales"})," | Header and Footer ",e.jsx(s.code,{children:"regions: { label, href, hreflang, current }[]"})," | One entry per Contentful locale (Global ",e.jsx(s.code,{children:"/"}),", UK ",e.jsx(s.code,{children:"/en-gb"}),", NL ",e.jsx(s.code,{children:"/nl"}),", SE ",e.jsx(s.code,{children:"/sv"}),"). The Header's ",e.jsx(s.code,{children:"homeHref"}),` points the logo to the locale home. |
| `,e.jsx(s.strong,{children:"Device"})," | ",e.jsx(s.code,{children:"'Desktop' \\| 'Mobile'"})," | Not from the CMS: ",e.jsx(s.code,{children:"useDevice()"})," (below 768px is Mobile), or pass ",e.jsx(s.code,{children:'Device="Auto"'})," to Header and Footer |"]}),`
`,e.jsxs(s.p,{children:["Components with ",e.jsx(s.code,{children:"labels"}),": Header, Footer, Ask Youwe (bar, snippet, dock), Case carousel, Filter bar, Insights overview, Build your stack, Contact CTA, Testimonial, Breadcrumbs, Insight Card, Pagination, Video Player, Phone input, Cookie banner, Upcoming events. Other button texts are already props (",e.jsx(s.code,{children:"cta"}),", ",e.jsx(s.code,{children:"button"}),", ",e.jsx(s.code,{children:"submit"}),", ",e.jsx(s.code,{children:"Hover CTA"}),", ",e.jsx(s.code,{children:"closeLabel"}),")."]}),`
`,e.jsx(s.h2,{id:"ask-youwe-answer-service",children:"Ask Youwe (answer service)"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"AskDock"})," (on every page) sends questions to the site; the site answers through its own server-side API route, so no key reaches the browser."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<AskDock
    locale={locale} // e.g. 'nl'
    context={page.askQuestion}
    labels={askLabels} // panelTitle, loading, error, retry, sources, unavailable, close, send, followUp…
    Prompt={askLabels.prompt}
    fallback={askLabels.unavailable} // shown while there is no service
    onAsk={async (question, locale, { signal }) => {
        const res = await fetch('/api/ask', {
            method: 'POST',
            body: JSON.stringify({ question, locale }),
            signal,
        })
        if (res.status === 503) throw new AskUnavailableError() // → fallback text
        if (!res.ok) throw new Error(String(res.status)) // → error + Try again
        return res.json() // { text, sources?: [{ title, url }], followUps?: string[], cta?: { label, href } }
    }}
/>
`})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"States:"})," loading (dots and ",e.jsx(s.code,{children:"labels.loading"}),"), answered (text with blank lines as paragraphs, or rich text; source links; follow-up chips; CTA), error (",e.jsx(s.code,{children:"labels.error"})," plus Try again), unavailable (",e.jsx(s.code,{children:"fallback"}),", or ",e.jsx(s.code,{children:"labels.unavailable"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["No ",e.jsx(s.code,{children:"onAsk"}),":"]})," every question shows the fallback text."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Newest question wins:"})," a new question aborts the previous request through ",e.jsx(s.code,{children:"signal"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus:"})," opening moves focus into the panel's follow-up field. Closing (Esc or the close button) returns focus to where it was: the bar, or the snippet or card that asked."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Questions from elsewhere on the page:"}),' Ask snippets ("Ask about it"), AI Feature Cards and ',e.jsx(s.code,{children:"askYouwe(question)"})," all open the dock and go through the same ",e.jsx(s.code,{children:"onAsk"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"templates-and-their-blocks",children:"Templates and their blocks"}),`
`,e.jsxs(s.p,{children:["Each template is a list of sections. Sections marked ",e.jsx(s.em,{children:"optional"})," can be left out when an entry has no data for them."]}),`
`,e.jsxs(s.p,{children:[`| Template | Sections, in order |
|---|---|
| `,e.jsx(s.strong,{children:"Home"})," | Hero (Gradient, ",e.jsx(s.code,{children:'Background="WebGL"'}),`, logo bar) · Vertical slider (Scroll, chapters) · Stats · Case carousel (Pinned) · Testimonial (Tabs, quotes per client) · ACI Weave · Technology logos · Contact CTA |
| `,e.jsx(s.strong,{children:"Work"}),` | Hero · Filter bar · Card grid of Case Cards · Pagination · Contact CTA |
| `,e.jsx(s.strong,{children:"Work detail"})," (case) | Hero (Title + image, client logo) · Case intro (meta list: platforms, role…; lead; rich text body) · Media (Full bleed, image or video) · Section header · Media · Text column · Text + media · Testimonial ",e.jsx(s.em,{children:"optional"})," · Stats with ",e.jsx(s.code,{children:"outcomes"})," ",e.jsx(s.em,{children:"optional"})," · Media (Two-up, or Gallery with any number of images) ",e.jsx(s.em,{children:"optional"}),` · Case carousel (related cases) · Contact CTA |
| `,e.jsx(s.strong,{children:"Industries"}),` | Hero · Card grid (industries) · Card grid · Card grid · Contact CTA |
| `,e.jsx(s.strong,{children:"Industry detail"}),' | Hero (logo bar) · Text + media (with a Case Card) · Content tabs ("Who we work with", one tab per audience, optional case) ',e.jsx(s.em,{children:"optional"}),' · Case Card (featured) · Testimonial · Card grid (related services) · Case carousel · Offices ("Work with us") ',e.jsx(s.em,{children:"optional"}),` · Contact CTA |
| `,e.jsx(s.strong,{children:"Services"}),` | Hero · Services split × 3 (one per proposition) · Case carousel · Contact CTA |
| `,e.jsx(s.strong,{children:"Service detail"}),' | Hero (stats bar) · Card grids · Technology logos · Feature list · Stats · Card grid (more cases) · Technology logos · Card grid (related services) · Feature list Split (numbered steps, "phased approach") ',e.jsx(s.em,{children:"optional"})," · Accordion list (FAQ, rich text answers) ",e.jsx(s.em,{children:"optional"}),` · Contact CTA |
| `,e.jsx(s.strong,{children:"Tech partners"}),` | Hero · Build your stack · Tech partners split × 3 · Contact CTA |
| `,e.jsx(s.strong,{children:"Insights"}),` | Hero · Insight Card (Featured) + Upcoming events · Insights overview (filters by type with counts, Show more: controlled, so the list can come from a paginated query) · Contact CTA |
| `,e.jsx(s.strong,{children:"About"})," | Hero · Card grid · Stats · Offices · Leadership · Stats · Hero bar · Stats · Awards · Contact CTA |"]}),`
`,e.jsxs(s.p,{children:["Every page also has the ",e.jsx(s.strong,{children:"Header"})," (nav with mega menu, utility links, CTA, regions), the ",e.jsx(s.strong,{children:"Footer"})," (columns, legal links, social, regions) and the ",e.jsx(s.strong,{children:"Ask Youwe"})," dock (",e.jsx(s.code,{children:"context"})," question per page)."]}),`
`,e.jsx(s.h2,{id:"contentful-mapping-tips",children:"Contentful mapping tips"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"One content type per block."})," Model a page as a list of section entries (a reference field allowing the block types above), with a ",e.jsx(s.code,{children:"Device"}),"-free entry per block. A small switch maps each entry's content type to its block."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Variants are Figma names."})," Props such as ",e.jsx(s.code,{children:"Layout"}),", ",e.jsx(s.code,{children:"Mode"}),", ",e.jsx(s.code,{children:"Variant"})," and ",e.jsx(s.code,{children:"Type"})," take the exact Figma variant names (for example ",e.jsx(s.code,{children:"'Two-up'"})," or ",e.jsx(s.code,{children:"'Full width 3'"}),'). Use Contentful "dropdown" validations with the same values.']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mode per section."})," Wrap a block in ",e.jsx(s.code,{children:'Section Mode="Dark" | "Light"'})," (or set ",e.jsx(s.code,{children:"data-theme"})," on its wrapper). Store ",e.jsx(s.code,{children:"mode"})," on the section entry."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Optional sections render nothing when empty."})," Leave the section out of the list instead of passing empty arrays."]}),`
`]})]})}function d(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default};
