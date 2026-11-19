import{j as e}from"./iframe-zwtNqTkm.js";import{c as t}from"./cx-BDMMs1jM.js";import{b as n}from"./block.module-ifZFSSN6.js";import{P as m}from"./prose-DKG_KmjR.js";import{C as d}from"./case-card-yeR6MyAJ.js";import{a as g}from"./tabs-D8FosX-Z.js";const c="_inner_gaexc_3",p="_head_gaexc_9",v="_intro_gaexc_16",y="_panel_gaexc_20",h="_body_gaexc_38",r={inner:c,head:p,intro:v,panel:y,body:h};function b({kicker:i,title:s,intro:l,tabs:o,label:u}){return e.jsx("section",{className:t(n.root,r.root),children:e.jsxs("div",{className:t(n.inner,r.inner),children:[e.jsxs("div",{className:t(r.head,n.reveal),children:[i&&e.jsx("span",{className:t(n.kicker,"yw-body-sm-bold"),children:i}),e.jsx("h2",{className:"yw-heading-xl",children:s}),l&&e.jsx(m,{className:t(r.intro,"yw-body-md-reg"),children:l})]}),e.jsx(g,{label:u??s,"Trailing action":!1,tabs:o.map(a=>a.label),panels:o.map(a=>e.jsxs("div",{"data-case":a.case?"":void 0,className:r.panel,children:[e.jsx(m,{className:t(r.body,"yw-body-lg-reg"),children:a.body}),a.case&&e.jsx("div",{className:r.case,children:e.jsx(d,{...a.case,Size:"One third"})})]},a.label))})]})})}b.__docgenInfo={description:"",methods:[],displayName:"ContentTabs",props:{Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:""},kicker:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},intro:{required:!1,tsType:{name:"union",raw:"string | string[] | ReactNode",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"ReactNode"}]},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    label: string
    body: RichText
    /** Related case next to the text */
    case?: CaseCardProps
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"body",value:{name:"union",raw:"string | string[] | ReactNode",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"ReactNode"}],required:!0}},{key:"case",value:{name:"signature",type:"object",raw:`{
    /** Figma: Size */
    Size?: CaseCardSize
    /** Figma: Device */
    Device?: 'Desktop' | 'Mobile'
    Title: string
    Client: string
    /** Figma: Client logo */
    logo?: LogoInput
    /** Figma: Image — case photo (without it: the image placeholder) */
    image?: ImageInput
    /** Figma: Show stat */
    stat?: Omit<CaseStatProps, 'Size'>
    /** Figma: Show tags */
    tags?: string[]
    'Hover CTA'?: string
    'Hover context'?: string
    href: string
    className?: string
}`,signature:{properties:[{key:"Size",value:{name:"union",raw:"'One third' | 'Two thirds' | 'Full' | 'One quarter'",elements:[{name:"literal",value:"'One third'"},{name:"literal",value:"'Two thirds'"},{name:"literal",value:"'Full'"},{name:"literal",value:"'One quarter'"}],required:!1},description:"Figma: Size"},{key:"Device",value:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}],required:!1},description:"Figma: Device"},{key:"Title",value:{name:"string",required:!0}},{key:"Client",value:{name:"string",required:!0}},{key:"logo",value:{name:"union",raw:"ReactNode | ImageAsset",elements:[{name:"ReactNode"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1},description:"Figma: Client logo"},{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1},description:"Figma: Image — case photo (without it: the image placeholder)"},{key:"stat",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    /** Figma: Type */
    Type?: CaseStatType
    /** Figma: Size (L = desktop card, M = mobile card) */
    Size?: 'L' | 'M'
    value: string
    label: string
    /** Before-after: the "before" value */
    before?: string
    /** Pair: the second stat */
    value2?: string
    label2?: string
}`,signature:{properties:[{key:"Type",value:{name:"union",raw:`| 'Single'
| 'Trend'
| 'Before-after'
| 'Stacked'
| 'Pair'`,elements:[{name:"literal",value:"'Single'"},{name:"literal",value:"'Trend'"},{name:"literal",value:"'Before-after'"},{name:"literal",value:"'Stacked'"},{name:"literal",value:"'Pair'"}],required:!1},description:"Figma: Type"},{key:"Size",value:{name:"union",raw:"'L' | 'M'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"}],required:!1},description:"Figma: Size (L = desktop card, M = mobile card)"},{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"before",value:{name:"string",required:!1},description:'Before-after: the "before" value'},{key:"value2",value:{name:"string",required:!1},description:"Pair: the second stat"},{key:"label2",value:{name:"string",required:!1}}]}},{name:"literal",value:"'Size'"}],raw:"Omit<CaseStatProps, 'Size'>",required:!1},description:"Figma: Show stat"},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"Figma: Show tags"},{key:"Hover CTA",value:{name:"string",required:!1}},{key:"Hover context",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}}]},required:!1},description:"Related case next to the text"}]}}],raw:"ContentTab[]"},description:""},label:{required:!1,tsType:{name:"string"},description:"Accessible name of the tab list (defaults to the title)"}}};export{b as C};
