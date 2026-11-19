import{j as e}from"./iframe-B4H4D0rs.js";import{P as m}from"./prose-sluXy4rs.js";import{S as u}from"./stat-CZ6lT0RJ.js";import{c as r}from"./cx-BDMMs1jM.js";import{b as s}from"./block.module-ifZFSSN6.js";import{s as i}from"./stats-block.module-BUD_PW8o.js";function c({Type:o="Client",intro:t,stats:l,outcomes:n}){return e.jsx("section",{className:r(s.root,i.root),"aria-label":t?.kicker,children:e.jsxs("div",{className:r(s.inner,i.inner),children:[t&&e.jsxs("div",{className:r(i.intro,s.reveal),children:[t.kicker&&e.jsx("span",{className:r(s.kicker,"yw-body-sm-bold"),children:t.kicker}),e.jsx("h2",{className:"yw-heading-2xl",children:t.title}),t.body&&e.jsx("p",{className:r(i.body,"yw-body-lg-reg"),children:t.body})]}),e.jsx("div",{className:i.row,style:{"--_n":l.length},children:l.slice(0,4).map(a=>e.jsx(u,{...a,Type:o,countUp:!0},a.Value+a.Label))}),n&&(Array.isArray(n)&&n.every(a=>typeof a=="string")?e.jsx("ul",{className:r(i.outcomes,"yw-body-lg-reg"),children:n.map(a=>e.jsx("li",{children:a},a))}):e.jsx(m,{className:r(i.outcomes,"yw-body-lg-reg"),children:n}))]})})}c.__docgenInfo={description:"",methods:[],displayName:"StatsBlock",props:{Type:{required:!1,tsType:{name:"union",raw:"'Client' | 'Plain'",elements:[{name:"literal",value:"'Client'"},{name:"literal",value:"'Plain'"}]},description:"Figma: Type",defaultValue:{value:"'Client'",computed:!1}},Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device (layout follows the block width)"},intro:{required:!1,tsType:{name:"signature",type:"object",raw:"{ kicker?: string; title: string; body?: string }",signature:{properties:[{key:"kicker",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"body",value:{name:"string",required:!1}}]}},description:"Figma: Show intro"},stats:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    /** Figma: Type */
    Type?: 'Client' | 'Plain'
    /** Figma: Size (L desktop, M mobile) */
    Size?: 'L' | 'M'
    /** e.g. "+12.7%", "900+", "25" */
    Value: string
    Label: string
    /** Type=Client: Figma Logo */
    logo?: LogoInput
    /** Type=Client: link of the round arrow (Show button) */
    href?: string
    /** Hover overlay CTA (linked Client stat) */
    cta?: string
    /** Hover overlay context line, e.g. the client */
    context?: string
    /** Count up when scrolled into view (Figma motion: 1.6s ease-out, once) */
    countUp?: boolean
    className?: string
}`,signature:{properties:[{key:"Type",value:{name:"union",raw:"'Client' | 'Plain'",elements:[{name:"literal",value:"'Client'"},{name:"literal",value:"'Plain'"}],required:!1},description:"Figma: Type"},{key:"Size",value:{name:"union",raw:"'L' | 'M'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"}],required:!1},description:"Figma: Size (L desktop, M mobile)"},{key:"Value",value:{name:"string",required:!0},description:'e.g. "+12.7%", "900+", "25"'},{key:"Label",value:{name:"string",required:!0}},{key:"logo",value:{name:"union",raw:"ReactNode | ImageAsset",elements:[{name:"ReactNode"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1},description:"Type=Client: Figma Logo"},{key:"href",value:{name:"string",required:!1},description:"Type=Client: link of the round arrow (Show button)"},{key:"cta",value:{name:"string",required:!1},description:"Hover overlay CTA (linked Client stat)"},{key:"context",value:{name:"string",required:!1},description:"Hover overlay context line, e.g. the client"},{key:"countUp",value:{name:"boolean",required:!1},description:"Count up when scrolled into view (Figma motion: 1.6s ease-out, once)"},{key:"className",value:{name:"string",required:!1}}]}},{name:"union",raw:"'Type' | 'Size'",elements:[{name:"literal",value:"'Type'"},{name:"literal",value:"'Size'"}]}],raw:"Omit<StatProps, 'Type' | 'Size'>"}],raw:"Omit<StatProps, 'Type' | 'Size'>[]"},description:"Figma: Show stat 3 / Show stat 4 — 2 to 4 stats"},outcomes:{required:!1,tsType:{name:"union",raw:"string[] | RichText",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"union",raw:"string | string[] | ReactNode",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"ReactNode"}]}]},description:'Outcomes under the stats (v2 case "The results"): a list of results, or CMS rich text'}}};export{c as S};
