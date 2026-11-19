import{j as e}from"./iframe-CbOnJm3P.js";import{F as u}from"./feature-card-Cj_XHNTs.js";import{W as p}from"./section-header-ChV86WNb.js";import{c as i}from"./cx-BDMMs1jM.js";import{b as t}from"./block.module-ifZFSSN6.js";import{s as a}from"./stats-block.module-BUD_PW8o.js";function c({Layout:n="Grid",kicker:s,heading:m,body:l,items:o}){const d=e.jsxs("div",{className:a["feature-list-head"],children:[s&&e.jsx("span",{className:i(t.kicker,"yw-body-sm-bold"),children:s}),e.jsx("h2",{className:"yw-heading-xl",children:e.jsx(p,{text:m})}),l&&e.jsx("p",{className:"yw-body-md-reg",children:l})]});return e.jsx("section",{"data-split":n==="Split"||void 0,className:i(t.root,a["feature-list"]),children:e.jsxs("div",{className:i(t.inner,a.inner,a["feature-list-inner"]),children:[d,n==="Grid"?e.jsx("ul",{className:a["feature-list-grid"],children:o.map(r=>e.jsx("li",{children:e.jsx(u,{...r,Variant:"Card",reveal:!0})},r.Title))}):e.jsx("ol",{className:a["feature-list-items"],children:o.map((r,g)=>e.jsx("li",{children:e.jsx(u,{...r,Number:r.Number??String(g+1).padStart(2,"0"),Variant:"Plain",reveal:!0})},r.Title))})]})})}c.__docgenInfo={description:"",methods:[],displayName:"FeatureList",props:{Layout:{required:!1,tsType:{name:"union",raw:"'Grid' | 'Split'",elements:[{name:"literal",value:"'Grid'"},{name:"literal",value:"'Split'"}]},description:"Figma: Layout",defaultValue:{value:"'Grid'",computed:!1}},Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device (layout follows the block width)"},kicker:{required:!1,tsType:{name:"string"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},body:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    /** Figma: Variant */
    Variant?: 'Card' | 'Plain' | 'AI'
    /** Figma: Number (Show number) — e.g. "01" */
    Number?: string
    Title: string
    /** Optional (e.g. Whitepaper chapter tiles: a title only) */
    Description?: string
    /** Figma: Show image */
    image?: ImageInput | true
    /** Figma: Show tags (up to 3) */
    tags?: string[]
    /** Figma: Show arrow */
    'Show arrow'?: boolean
    /** Figma: Show button — button label */
    button?: { label: string; href?: string }
    /** Figma: Show link — link label */
    link?: { label: string; href?: string }
    /** AI variant: the link opens Ask Youwe with this question (instead of going to href) */
    ask?: string
    /** The whole card links here (card hover: red reveal) */
    href?: string
    /** Card hover CTA (default: the link label, else "Read more"; "Ask Youwe" for ask cards) */
    'Hover CTA'?: string
    /** Scroll reveal (Figma motion); off in Storybook grids by default */
    reveal?: boolean
    className?: string
}`,signature:{properties:[{key:"Variant",value:{name:"union",raw:"'Card' | 'Plain' | 'AI'",elements:[{name:"literal",value:"'Card'"},{name:"literal",value:"'Plain'"},{name:"literal",value:"'AI'"}],required:!1},description:"Figma: Variant"},{key:"Number",value:{name:"string",required:!1},description:'Figma: Number (Show number) — e.g. "01"'},{key:"Title",value:{name:"string",required:!0}},{key:"Description",value:{name:"string",required:!1},description:"Optional (e.g. Whitepaper chapter tiles: a title only)"},{key:"image",value:{name:"union",raw:"ImageInput | true",elements:[{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}]},{name:"literal",value:"true"}],required:!1},description:"Figma: Show image"},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"Figma: Show tags (up to 3)"},{key:"Show arrow",value:{name:"boolean",required:!1},description:"Figma: Show arrow"},{key:"button",value:{name:"signature",type:"object",raw:"{ label: string; href?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]},required:!1},description:"Figma: Show button — button label"},{key:"link",value:{name:"signature",type:"object",raw:"{ label: string; href?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]},required:!1},description:"Figma: Show link — link label"},{key:"ask",value:{name:"string",required:!1},description:"AI variant: the link opens Ask Youwe with this question (instead of going to href)"},{key:"href",value:{name:"string",required:!1},description:"The whole card links here (card hover: red reveal)"},{key:"Hover CTA",value:{name:"string",required:!1},description:'Card hover CTA (default: the link label, else "Read more"; "Ask Youwe" for ask cards)'},{key:"reveal",value:{name:"boolean",required:!1},description:"Scroll reveal (Figma motion); off in Storybook grids by default"},{key:"className",value:{name:"string",required:!1}}]}},{name:"literal",value:"'Variant'"}],raw:"Omit<FeatureCardProps, 'Variant'>"}],raw:"Omit<FeatureCardProps, 'Variant'>[]"},description:""}}};export{c as F};
