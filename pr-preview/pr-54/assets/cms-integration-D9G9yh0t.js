import{j as e}from"./iframe-RIzWv_pe.js";import{u as t,M as r}from"./blocks-L37uxuO4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdYDHsFs.js";function o(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Introduction/CMS integration"}),`
`,e.jsx(n.h1,{id:"cms-integration-contentful",children:"CMS integration (Contentful)"}),`
`,e.jsx(n.p,{children:"This Storybook is the source of truth for the Youwe site. Every template is built from blocks, and every block takes its content as props. This page lists the data shapes so a Contentful entry can be mapped onto a block one to one."}),`
`,e.jsx(n.h2,{id:"conventions",children:"Conventions"}),`
`,e.jsxs(n.p,{children:[`| What | Prop type | From Contentful |
|---|---|---|
| `,e.jsx(n.strong,{children:"Image"})," (every ",e.jsx(n.code,{children:"image"}),", ",e.jsx(n.code,{children:"poster"}),", ",e.jsx(n.code,{children:"images[]"}),", ",e.jsx(n.code,{children:"featureImage"}),", ",e.jsx(n.code,{children:"backgroundImage"}),") | ",e.jsx(n.code,{children:"string \\| { src, alt?, width?, height? }"})," | ",e.jsx(n.code,{children:"{ src: 'https:' + asset.fields.file.url, alt: asset.fields.description }"}),` |
| `,e.jsx(n.strong,{children:"Logo"})," (Case Card, Stat, Hero logo bar, Technology logos, Testimonial, Quote Card, Technology Card) | ",e.jsx(n.code,{children:"ReactNode \\| { src, alt }"})," (a code logo or an asset) | An SVG/PNG asset: ",e.jsx(n.code,{children:"{ src, alt: the client }"}),` |
| `,e.jsx(n.strong,{children:"Rich text"})," (Text column, Text + media, Case intro, Two-column text, Section header, Accordion items, Content tabs, Stats outcomes) | ",e.jsx(n.code,{children:"string \\| string[] \\| ReactNode"})," | ",e.jsx(n.code,{children:"documentToReactComponents(field)"})," from ",e.jsx(n.code,{children:"@contentful/rich-text-react-renderer"}),". Use plain elements (",e.jsx(n.code,{children:"p"}),", ",e.jsx(n.code,{children:"h3"}),", ",e.jsx(n.code,{children:"h4"}),", ",e.jsx(n.code,{children:"ul"}),", ",e.jsx(n.code,{children:"ol"}),", ",e.jsx(n.code,{children:"li"}),", ",e.jsx(n.code,{children:"a"}),", ",e.jsx(n.code,{children:"strong"}),", ",e.jsx(n.code,{children:"em"}),", ",e.jsx(n.code,{children:"blockquote"}),", ",e.jsx(n.code,{children:"img"}),", ",e.jsx(n.code,{children:"hr"}),`). The block styles them. |
| `,e.jsx(n.strong,{children:"Links"})," | ",e.jsx(n.code,{children:"{ label, href }"})," | A link entry, or ",e.jsx(n.code,{children:"{ label: entry.title, href: '/' + locale + '/' + entry.slug }"}),` |
| `,e.jsx(n.strong,{children:"Video"})," | ",e.jsx(n.code,{children:"string"}),` (file URL or Vimeo URL) | An asset URL or a Vimeo URL field |
| `,e.jsx(n.strong,{children:"UI text"})," (buttons, aria labels) | ",e.jsx(n.code,{children:"labels?: Partial<…_LABELS>"})," | Translations per locale; every component exports its English defaults, e.g. ",e.jsx(n.code,{children:"CASE_CAROUSEL_LABELS"}),". Placeholders such as ",e.jsx(n.code,{children:"{count}"}),` are filled by the component. |
| `,e.jsx(n.strong,{children:"Regions / locales"})," | Header and Footer ",e.jsx(n.code,{children:"regions: { label, href, hreflang, current }[]"})," | One entry per Contentful locale (Global ",e.jsx(n.code,{children:"/"}),", UK ",e.jsx(n.code,{children:"/en-gb"}),", NL ",e.jsx(n.code,{children:"/nl"}),", SE ",e.jsx(n.code,{children:"/sv"}),"). The Header's ",e.jsx(n.code,{children:"homeHref"}),` points the logo to the locale home. |
| `,e.jsx(n.strong,{children:"Device"})," | ",e.jsx(n.code,{children:"'Desktop' \\| 'Mobile'"})," | Not from the CMS: ",e.jsx(n.code,{children:"useDevice()"})," (below 768px is Mobile), or pass ",e.jsx(n.code,{children:'Device="Auto"'})," to Header and Footer |"]}),`
`,e.jsxs(n.p,{children:["Components with ",e.jsx(n.code,{children:"labels"}),": Header, Footer, Ask Youwe (bar, snippet, dock), Case carousel, Filter bar, Insights overview, Build your stack, Contact CTA, Testimonial, Breadcrumbs, Insight Card, Pagination, Video Player, Phone input, Cookie banner, Upcoming events. Other button texts are already props (",e.jsx(n.code,{children:"cta"}),", ",e.jsx(n.code,{children:"button"}),", ",e.jsx(n.code,{children:"submit"}),", ",e.jsx(n.code,{children:"Hover CTA"}),", ",e.jsx(n.code,{children:"closeLabel"}),")."]}),`
`,e.jsx(n.h2,{id:"ask-youwe-answer-service",children:"Ask Youwe (answer service)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"AskDock"})," (on every page) sends questions to the site; the site answers through its own server-side API route, so no key reaches the browser."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<AskDock
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
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"States:"})," loading (dots and ",e.jsx(n.code,{children:"labels.loading"}),"), answered (text with blank lines as paragraphs, or rich text; source links; follow-up chips; CTA), error (",e.jsx(n.code,{children:"labels.error"})," plus Try again), unavailable (",e.jsx(n.code,{children:"fallback"}),", or ",e.jsx(n.code,{children:"labels.unavailable"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["No ",e.jsx(n.code,{children:"onAsk"}),":"]})," every question shows the fallback text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Newest question wins:"})," a new question aborts the previous request through ",e.jsx(n.code,{children:"signal"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus:"})," opening moves focus into the panel's follow-up field. Closing (Esc or the close button) returns focus to where it was: the bar, or the snippet or card that asked."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Questions from elsewhere on the page:"}),' Ask snippets ("Ask about it"), AI Feature Cards and ',e.jsx(n.code,{children:"askYouwe(question)"})," all open the dock and go through the same ",e.jsx(n.code,{children:"onAsk"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"templates-and-their-blocks",children:"Templates and their blocks"}),`
`,e.jsxs(n.p,{children:["Each template is a list of sections. Sections marked ",e.jsx(n.em,{children:"optional"})," can be left out when an entry has no data for them."]}),`
`,e.jsxs(n.p,{children:[`| Template | Sections, in order |
|---|---|
| `,e.jsx(n.strong,{children:"Home"})," | Hero (Gradient, ",e.jsx(n.code,{children:'Background="WebGL"'}),`, logo bar) · Vertical slider (Scroll, chapters) · Stats · Case carousel (Pinned) · Testimonial (Tabs, quotes per client) · ACI Weave · Technology logos · Contact CTA |
| `,e.jsx(n.strong,{children:"Work"}),` | Hero · Filter bar · Card grid of Case Cards · Pagination · Contact CTA |
| `,e.jsx(n.strong,{children:"Work detail"})," (case) | Hero (Title + image, client logo) · Case intro (meta list: platforms, role…; lead; rich text body) · Media (Full bleed, image or video) · Section header · Media · Text column · Text + media · Testimonial ",e.jsx(n.em,{children:"optional"})," · Stats with ",e.jsx(n.code,{children:"outcomes"})," ",e.jsx(n.em,{children:"optional"})," · Media (Two-up, or Gallery with any number of images) ",e.jsx(n.em,{children:"optional"}),` · Case carousel (related cases) · Contact CTA |
| `,e.jsx(n.strong,{children:"Industries"}),` | Hero · Card grid (industries) · Card grid · Card grid · Contact CTA |
| `,e.jsx(n.strong,{children:"Industry detail"}),' | Hero (logo bar) · Text + media (with a Case Card) · Content tabs ("Who we work with", one tab per audience, optional case) ',e.jsx(n.em,{children:"optional"}),' · Case Card (featured) · Testimonial · Card grid (related services) · Case carousel · Offices ("Work with us") ',e.jsx(n.em,{children:"optional"}),` · Contact CTA |
| `,e.jsx(n.strong,{children:"Services"}),` | Hero · Services split × 3 (one per proposition) · Case carousel · Contact CTA |
| `,e.jsx(n.strong,{children:"Service detail"}),' | Hero (stats bar) · Card grids · Technology logos · Feature list · Stats · Card grid (more cases) · Technology logos · Card grid (related services) · Feature list Split (numbered steps, "phased approach") ',e.jsx(n.em,{children:"optional"})," · Accordion list (FAQ, rich text answers) ",e.jsx(n.em,{children:"optional"}),` · Contact CTA |
| `,e.jsx(n.strong,{children:"Tech partners"}),` | Hero · Build your stack · Tech partners split × 3 · Contact CTA |
| `,e.jsx(n.strong,{children:"Insights"}),` | Hero · Insight Card (Featured) + Upcoming events · Insights overview (filters by type with counts, Show more: controlled, so the list can come from a paginated query) · Contact CTA |
| `,e.jsx(n.strong,{children:"Insight detail: Blog"})," | Hero (Title + image, breadcrumb) · Case intro (meta: published, type, topics; lead; rich text) · Stats (key figures) · Media · Two-column text 4/8 × n (rich text) · Feature list Split (steps) ",e.jsx(n.em,{children:"optional"})," · Text + media (example) ",e.jsx(n.em,{children:"optional"})," · Text column · Accordion list (FAQ) ",e.jsx(n.em,{children:"optional"}),` · Two-column text (sources) · Card grid of Insight Cards · Contact CTA |
| `,e.jsx(n.strong,{children:"Insight detail: Blog v2"})," | Hero · Case intro (meta + lead, no body) · Stats · Media · Article (sections with ",e.jsx(n.code,{children:"id"}),", nav label, heading, rich text, optional ",e.jsx(n.code,{children:"steps"}),", ",e.jsx(n.code,{children:"faq"}),` or other content; the "On this page" nav is built from the sections) · Card grid of Insight Cards · Contact CTA |
| `,e.jsx(n.strong,{children:"Insight detail: Event"})," | Hero (Title + image, breadcrumb) · Text + media 8/4 (intro + Event details: date, time, venue rows; Register now → ",e.jsx(n.code,{children:"#register"}),", Plan your route) · Article (meta; sections: why attend, agenda, Timetable, takeaways, venue, Registration form with ",e.jsx(n.code,{children:"onSubmit(FormData)"}),`) · Card grid of Insight Cards (more events) · Contact CTA |
| `,e.jsx(n.strong,{children:"About"})," | Hero · Card grid · Stats · Offices · Leadership · Stats · Hero bar · Stats · Awards · Contact CTA |"]}),`
`,e.jsxs(n.p,{children:["Every page also has the ",e.jsx(n.strong,{children:"Header"})," (nav with mega menu, utility links, CTA, regions), the ",e.jsx(n.strong,{children:"Footer"})," (columns, legal links, social, regions) and the ",e.jsx(n.strong,{children:"Ask Youwe"})," dock (",e.jsx(n.code,{children:"context"})," question per page)."]}),`
`,e.jsx(n.h2,{id:"contentful-mapping-tips",children:"Contentful mapping tips"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One content type per block."})," Model a page as a list of section entries (a reference field allowing the block types above), with a ",e.jsx(n.code,{children:"Device"}),"-free entry per block. A small switch maps each entry's content type to its block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Variants are Figma names."})," Props such as ",e.jsx(n.code,{children:"Layout"}),", ",e.jsx(n.code,{children:"Mode"}),", ",e.jsx(n.code,{children:"Variant"})," and ",e.jsx(n.code,{children:"Type"})," take the exact Figma variant names (for example ",e.jsx(n.code,{children:"'Two-up'"})," or ",e.jsx(n.code,{children:"'Full width 3'"}),'). Use Contentful "dropdown" validations with the same values.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mode per section."})," Wrap a block in ",e.jsx(n.code,{children:'Section Mode="Dark" | "Light"'})," (or set ",e.jsx(n.code,{children:"data-theme"})," on its wrapper). Store ",e.jsx(n.code,{children:"mode"})," on the section entry."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Optional sections render nothing when empty."})," Leave the section out of the list instead of passing empty arrays."]}),`
`]})]})}function d(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{d as default};
