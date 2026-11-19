import{j as e}from"./iframe-DntXcq6m.js";import{a as x}from"./ask-DbpicIg-.js";import{b as n}from"./block.module-ifZFSSN6.js";import{C as d}from"./card-reveal-DUQ1XL92.js";import{C as m,r as g}from"./card-media-DIsYxhDV.js";import{c as s}from"./cx-BDMMs1jM.js";import{I as p}from"./icon-C9Y1_h2x.js";import{c as b}from"./ask-youwe-WJcNo5K6.js";import{S as _}from"./service-card-CwopZEj1.js";const h="_svc_fxcp2_2",k="_inner_fxcp2_7",w="_head_fxcp2_14",q="_kicker_fxcp2_25",j="_tagline_fxcp2_29",N="_grid_fxcp2_33",A="_lead_fxcp2_41",T="_leadimg_fxcp2_54",I="_leadcard_fxcp2_66",C="_eyebrow_fxcp2_81",D="_services_fxcp2_86",H="_root_fxcp2_102",S="_caseimg_fxcp2_124",R="_stat_fxcp2_136",Y="_value_fxcp2_146",L="_label_fxcp2_155",E="_client_fxcp2_159",M="_ask_fxcp2_168",F="_asktop_fxcp2_185",z="_question_fxcp2_192",O="_askbtn_fxcp2_196",r={svc:h,inner:k,head:w,kicker:q,tagline:j,grid:N,lead:A,leadimg:T,leadcard:I,eyebrow:C,services:D,root:H,case:"_case_fxcp2_113",caseimg:S,stat:R,value:Y,label:L,client:E,ask:M,asktop:F,question:z,askbtn:O};function P({kicker:y,title:c,tagline:l,Lead:v="Left",lead:i,services:f,case:a,ask:t}){const o=a?.cta??"Read the case";return e.jsx("section",{className:s(n.root,r.root),"aria-label":c,"data-lead":v.toLowerCase(),children:e.jsxs("div",{className:s(n.inner,r.inner),children:[e.jsxs("div",{className:s(r.head,n.reveal),children:[e.jsx("span",{className:s(n.kicker,r.kicker,"yw-body-sm-bold"),children:y}),e.jsx("h2",{className:"yw-heading-xl",children:c}),l&&e.jsx("p",{className:s(r.tagline,"yw-body-md-reg"),children:l})]}),e.jsxs("div",{className:r.grid,children:[e.jsxs("div",{className:s(r.lead,n.reveal),children:[e.jsx(m,{src:i.image,placeholder:!1,className:r.leadimg}),e.jsxs("div",{className:r.leadcard,children:[e.jsx("span",{className:s(r.eyebrow,"yw-body-sm-bold"),children:i.eyebrow}),e.jsx("p",{className:"yw-body-lg-reg",children:i.body})]})]}),e.jsx("ul",{className:r.services,children:f.map(u=>e.jsx("li",{className:n.reveal,children:e.jsx(_,{...u,className:r.svc})},u.Title))}),a&&e.jsxs("a",{href:a.href,className:s(g.root,r.case,n.reveal),children:[e.jsx(m,{src:a.image,className:r.caseimg}),e.jsxs("span",{className:r.stat,children:[e.jsx("span",{className:r.value,children:a.value}),e.jsx("span",{className:s(r.label,"yw-body-sm-reg"),children:a.label}),e.jsxs("span",{className:s(r.client,"yw-body-xs-med"),children:[a.client," · ",o,e.jsx(p,{name:"arrow-forward",size:16})]})]}),e.jsx(d,{cta:o,context:a.client})]}),t&&e.jsxs("button",{type:"button",className:s(g.root,r.ask,n.reveal),onClick:()=>(t.onAsk??x)(t.question),children:[e.jsxs("span",{className:r.asktop,children:[e.jsx(b,{}),e.jsx("span",{className:"yw-body-xs-med",children:t.label})]}),e.jsxs("span",{className:s(r.question,"yw-heading-sm"),children:["“",t.question,"”"]}),e.jsxs("span",{className:s(r.askbtn,"yw-body-xs-med"),children:[t.button??"Ask",e.jsx(p,{name:"arrow-forward",size:16})]}),e.jsx(d,{cta:t.button??"Ask",context:t.question})]})]})]})})}P.__docgenInfo={description:"",methods:[],displayName:"ServicesMosaic",props:{Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:""},kicker:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},tagline:{required:!1,tsType:{name:"string"},description:"One line, top right"},Lead:{required:!1,tsType:{name:"union",raw:"'Left' | 'Right'",elements:[{name:"literal",value:"'Left'"},{name:"literal",value:"'Right'"}]},description:"Which side the lead image takes",defaultValue:{value:"'Left'",computed:!1}},lead:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    image: ImageInput
    /** e.g. 01 · Infrastructure · 6 services */
    eyebrow: string
    body: string
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!0}},{key:"eyebrow",value:{name:"string",required:!0},description:"e.g. 01 · Infrastructure · 6 services"},{key:"body",value:{name:"string",required:!0}}]}},description:""},services:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Figma: Eyebrow (Show eyebrow) — e.g. "01" */
    Eyebrow?: string
    Title: string
    Description: string
    /** Figma: Hover CTA / Hover context */
    'Hover CTA': string
    'Hover context'?: string
    href: string
    className?: string
}`,signature:{properties:[{key:"Eyebrow",value:{name:"string",required:!1},description:'Figma: Eyebrow (Show eyebrow) — e.g. "01"'},{key:"Title",value:{name:"string",required:!0}},{key:"Description",value:{name:"string",required:!0}},{key:"Hover CTA",value:{name:"string",required:!0},description:"Figma: Hover CTA / Hover context"},{key:"Hover context",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"ServiceCardProps[]"},description:""},case:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    image: ImageInput
    value: string
    label: string
    client: string
    href: string
    /** Default: Read the case */
    cta?: string
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"client",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"cta",value:{name:"string",required:!1},description:"Default: Read the case"}]}},description:""},ask:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /** e.g. Ask Youwe about Infrastructure */
    label: string
    question: string
    /** Default: Ask */
    button?: string
    /** Default: askYouwe(question), answered by the page's Ask Youwe dock */
    onAsk?: (question: string) => void
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"e.g. Ask Youwe about Infrastructure"},{key:"question",value:{name:"string",required:!0}},{key:"button",value:{name:"string",required:!1},description:"Default: Ask"},{key:"onAsk",value:{name:"signature",type:"function",raw:"(question: string) => void",signature:{arguments:[{type:{name:"string"},name:"question"}],return:{name:"void"}},required:!1},description:"Default: askYouwe(question), answered by the page's Ask Youwe dock"}]}},description:""}}};export{P as S};
