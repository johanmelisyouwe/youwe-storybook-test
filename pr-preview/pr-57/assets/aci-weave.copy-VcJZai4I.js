import{j as e}from"./iframe-DhUkatZW.js";import{a as h}from"./ask-youwe-Cc_M-UVb.js";import{b as u}from"./block.module-ifZFSSN6.js";import{C as v}from"./card-media-DsHcV6dQ.js";import{c as r}from"./cx-BDMMs1jM.js";import{B as p}from"./button-xEboWB0_.js";import{V as f}from"./video-player-DAJqAc0T.js";import{v as k,a as c}from"./media-D6l-TJH3.js";const b="_root_1jy1d_3",w="_inner_1jy1d_4",A="_grid_1jy1d_9",_="_content_1jy1d_24",x="_text_1jy1d_36",q="_body_1jy1d_46",j="_videos_1jy1d_51",I="_video_1jy1d_51",S="_caption_1jy1d_71",N="_tag_1jy1d_79",T="_actions_1jy1d_83",t={root:b,inner:w,grid:A,content:_,text:x,body:q,videos:j,video:I,caption:S,tag:N,actions:T};function C({caption:s,tag:i,poster:n,src:o,alt:l,Autoplay:a}){return e.jsxs("figure",{className:t.video,children:[o?e.jsx(f,{src:o,poster:n,title:s,Autoplay:a}):e.jsx(v,{src:n,alt:l,ratio:"16 / 9"}),e.jsxs("figcaption",{className:r(t.caption,"yw-body-sm-reg"),children:[e.jsx("span",{children:s}),i&&e.jsx("span",{className:t.tag,children:i})]})]})}function E({Device:s="Desktop",kicker:i="ACI Weave",title:n,body:o,snippet:l,button:a,button2:d,videos:g,Autoplay:y="In view"}){return e.jsx("section",{className:r(u.root,t.root),children:e.jsx("div",{className:r(u.inner,t.inner),children:e.jsxs("div",{className:t.grid,children:[e.jsxs("div",{"data-rise":!0,className:t.content,children:[e.jsxs("div",{className:t.text,children:[e.jsx("span",{className:r(u.kicker,"yw-body-sm-bold"),children:i}),e.jsx("h2",{className:"yw-heading-xl",children:n}),e.jsx("p",{className:r(t.body,"yw-body-lg-reg"),children:o}),l&&e.jsx(h,{Type:"Nudge",Device:s,...l})]}),(a||d)&&e.jsxs("div",{className:t.actions,children:[a&&e.jsx(p,{Variant:"Primary",Size:"M",label:a.label,href:a.href}),d&&e.jsx(p,{Variant:"Solid",Size:"M",label:d.label,href:d.href})]})]}),e.jsx("div",{"data-stagger":!0,className:t.videos,children:g.map(m=>e.jsx(C,{...m,Autoplay:y},m.caption))})]})})})}E.__docgenInfo={description:"",methods:[],displayName:"AciWeave",props:{Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device (layout follows the block width)",defaultValue:{value:"'Desktop'",computed:!1}},kicker:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ACI Weave'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},body:{required:!0,tsType:{name:"string"},description:""},snippet:{required:!1,tsType:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
    /** Figma: Type */
    Type?: 'Question' | 'Nudge' | 'Case'
    Device?: 'Desktop' | 'Mobile'
    /** Question / Nudge text, or the Case Title */
    Title: string
    /** Case: Meta (Show meta) */
    Meta?: string
    /** Eyebrow reason, e.g. "Related case" */
    reason?: string
    image?: ImageInput
    /** Case: Show second button */
    'Show second button'?: boolean
    href?: string
    /** "Ask about it" / Ask: default askYouwe(), so the page's AskDock answers it through its onAsk */
    onAsk?: (q: string) => void
    className?: string
    /** UI text, for translations: { ...ASK_YOUWE_LABELS } */
    labels?: Partial<typeof ASK_YOUWE_LABELS>
}`,signature:{properties:[{key:"Type",value:{name:"union",raw:"'Question' | 'Nudge' | 'Case'",elements:[{name:"literal",value:"'Question'"},{name:"literal",value:"'Nudge'"},{name:"literal",value:"'Case'"}],required:!1},description:"Figma: Type"},{key:"Device",value:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}],required:!1}},{key:"Title",value:{name:"string",required:!0},description:"Question / Nudge text, or the Case Title"},{key:"Meta",value:{name:"string",required:!1},description:"Case: Meta (Show meta)"},{key:"reason",value:{name:"string",required:!1},description:'Eyebrow reason, e.g. "Related case"'},{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1}},{key:"Show second button",value:{name:"boolean",required:!1},description:"Case: Show second button"},{key:"href",value:{name:"string",required:!1}},{key:"onAsk",value:{name:"signature",type:"function",raw:"(q: string) => void",signature:{arguments:[{type:{name:"string"},name:"q"}],return:{name:"void"}},required:!1},description:`"Ask about it" / Ask: default askYouwe(), so the page's AskDock answers it through its onAsk`},{key:"className",value:{name:"string",required:!1}},{key:"labels",value:{name:"Partial",elements:[{name:"ASK_YOUWE_LABELS"}],raw:"Partial<typeof ASK_YOUWE_LABELS>",required:!1},description:"UI text, for translations: { ...ASK_YOUWE_LABELS }"}]}},{name:"union",raw:"'Title' | 'href' | 'onAsk'",elements:[{name:"literal",value:"'Title'"},{name:"literal",value:"'href'"},{name:"literal",value:"'onAsk'"}]}],raw:"Pick<AskSnippetProps, 'Title' | 'href' | 'onAsk'>"},description:"Ask Youwe/Snippet (Nudge) under the body"},button:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}},description:""},button2:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}},description:"Second button (Solid), next to the first"},videos:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    caption: string
    /** Right side of the caption bar, e.g. Demo */
    tag?: string
    poster?: ImageInput
    /** Video file or Vimeo URL; without it the panel shows the poster as a still screenshot */
    src?: string
    /** Still screenshot: alt text */
    alt?: string
}`,signature:{properties:[{key:"caption",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!1},description:"Right side of the caption bar, e.g. Demo"},{key:"poster",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1}},{key:"src",value:{name:"string",required:!1},description:"Video file or Vimeo URL; without it the panel shows the poster as a still screenshot"},{key:"alt",value:{name:"string",required:!1},description:"Still screenshot: alt text"}]}}],raw:"WeaveVideo[]"},description:""},Autoplay:{required:!1,tsType:{name:"union",raw:"VideoPlayerProps['Autoplay']"},description:`Video Player autoplay: "In view" (default) plays each video muted while it's on screen`,defaultValue:{value:"'In view'",computed:!1}}}};const U={kicker:"ACI Weave",title:"AI agents that work inside your systems",body:`ACI Weave by Youwe is an AI platform that organizations use to build and run AI agents connected to their ERP, PIM, CRM and commerce platform, with access to more than 25,000 AI models.
Your rules decide what an agent may do. A person approves where it counts, and every change and approval is logged.`,snippet:{Title:"How at Kingspan Insulated Panels, order emails become SAP orders once a person approves them by using ACI Weave.",href:"#"},button:{label:"Explore ACI Weave",href:"#"},button2:{label:"Kingspan case",href:"#"},videos:[{caption:"ACI Weave in action",tag:"Demo",poster:c("011"),src:k("011")},{caption:"Workflows, approvals and audit log",tag:"Dashboard",poster:c("015")},{caption:"Agents connected to ERP, PIM, CRM and commerce",tag:"Agents",poster:c("016")}]};export{E as A,U as a};
