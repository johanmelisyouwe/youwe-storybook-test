import{r as v,j as e}from"./iframe-CNsxMot_.js";import{a as f}from"./tabs-JIV0_gqw.js";import{T as k}from"./technology-card-0SBalk1l.js";import{C as b}from"./case-card-BshzWUpH.js";import{c as n}from"./cx-BDMMs1jM.js";import{b as m}from"./block.module-ifZFSSN6.js";import{s as r}from"./accordion-list.module-B4IZp007.js";import{L as t}from"./logo-Bj_HhwVw.js";import{c as w}from"./media-CIA0hqPx.js";const S={goals:"Goals"};function q({kicker:l,title:i,body:o,goals:u,selected:c=0,labels:g}){const p={...S,...g},[y,h]=v.useState(c);return e.jsx("section",{className:n(m.root,r.stack),"aria-label":i,children:e.jsxs("div",{className:n(m.inner,r.inner),children:[e.jsxs("div",{className:r["stack-header"],children:[e.jsxs("h2",{className:r["stack-title"],children:[e.jsx("span",{className:n(m.kicker,"yw-body-sm-bold"),children:l}),e.jsx("span",{className:"yw-heading-xl",children:i})]}),e.jsx("p",{className:"yw-body-md-reg",children:o})]}),e.jsx(f,{label:p.goals,tabs:u.map(a=>a.label),"Trailing action":!1,selected:y,onChange:h,panels:u.map(a=>e.jsxs("div",{className:r["stack-goal"],children:[e.jsxs("div",{className:r["stack-goal-intro"],children:[a.system&&e.jsx("span",{className:n(r["stack-system"],"yw-body-xs-bold"),children:a.system}),a.intro&&e.jsx("p",{className:"yw-body-lg-reg",children:a.intro})]}),a.partners&&e.jsx("ul",{className:r["stack-partners"],children:a.partners.map(d=>e.jsx("li",{children:e.jsx(k,{...d,Layout:"Vertical"})},d.Name))}),a.case&&e.jsx(b,{...a.case,Size:"Full"})]},a.label))})]})})}q.__docgenInfo={description:"",methods:[],displayName:"BuildYourStack",props:{Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device (layout follows the block width)"},kicker:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},body:{required:!0,tsType:{name:"string"},description:""},goals:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Tab label, e.g. "Sell B2B online" */
    label: string
    /** e.g. "05  Drive revenue" */
    system?: string
    intro?: string
    partners?: TechnologyCardProps[]
    case?: CaseCardProps
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:'Tab label, e.g. "Sell B2B online"'},{key:"system",value:{name:"string",required:!1},description:'e.g. "05  Drive revenue"'},{key:"intro",value:{name:"string",required:!1}},{key:"partners",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Figma: Layout */
    Layout?: 'Horizontal' | 'Vertical'
    Name: string
    /** Figma: Level (Show level) — e.g. "Certified Partner" */
    Level?: string
    /** Figma: Description (Show description) */
    Description?: string
    /** Figma: Logo — partner logo; without it the name is shown as a wordmark (Figma logo placeholder) */
    logo?: LogoInput
    /** Figma: Show button */
    'Show button'?: boolean
    'Hover CTA'?: string
    'Hover context'?: string
    href: string
    className?: string
}`,signature:{properties:[{key:"Layout",value:{name:"union",raw:"'Horizontal' | 'Vertical'",elements:[{name:"literal",value:"'Horizontal'"},{name:"literal",value:"'Vertical'"}],required:!1},description:"Figma: Layout"},{key:"Name",value:{name:"string",required:!0}},{key:"Level",value:{name:"string",required:!1},description:'Figma: Level (Show level) — e.g. "Certified Partner"'},{key:"Description",value:{name:"string",required:!1},description:"Figma: Description (Show description)"},{key:"logo",value:{name:"union",raw:"ReactNode | ImageAsset",elements:[{name:"ReactNode"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1},description:"Figma: Logo — partner logo; without it the name is shown as a wordmark (Figma logo placeholder)"},{key:"Show button",value:{name:"boolean",required:!1},description:"Figma: Show button"},{key:"Hover CTA",value:{name:"string",required:!1}},{key:"Hover context",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"TechnologyCardProps[]",required:!1}},{key:"case",value:{name:"signature",type:"object",raw:`{
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
| 'Pair'`,elements:[{name:"literal",value:"'Single'"},{name:"literal",value:"'Trend'"},{name:"literal",value:"'Before-after'"},{name:"literal",value:"'Stacked'"},{name:"literal",value:"'Pair'"}],required:!1},description:"Figma: Type"},{key:"Size",value:{name:"union",raw:"'L' | 'M'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"}],required:!1},description:"Figma: Size (L = desktop card, M = mobile card)"},{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"before",value:{name:"string",required:!1},description:'Before-after: the "before" value'},{key:"value2",value:{name:"string",required:!1},description:"Pair: the second stat"},{key:"label2",value:{name:"string",required:!1}}]}},{name:"literal",value:"'Size'"}],raw:"Omit<CaseStatProps, 'Size'>",required:!1},description:"Figma: Show stat"},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"Figma: Show tags"},{key:"Hover CTA",value:{name:"string",required:!1}},{key:"Hover context",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"StackGoal[]"},description:""},selected:{required:!1,tsType:{name:"number"},description:"Initially selected goal",defaultValue:{value:"0",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"BUILD_YOUR_STACK_LABELS"}],raw:"Partial<typeof BUILD_YOUR_STACK_LABELS>"},description:"UI text, for translations: { ...BUILD_YOUR_STACK_LABELS }"}}};const L={label:"Sell B2B online",system:"05  Drive revenue",intro:"Adobe Commerce runs the shop on a Hyvä storefront. Pimcore holds the product data and Alumio connects it all to your ERP.",partners:[{Name:"Alumio",logo:e.jsx(t,{name:"Alumio",kind:"partner",width:120}),Level:"Integration",Description:"iPaaS that connects ERP, PIM and commerce.",href:"#"},{Name:"Adobe",logo:e.jsx(t,{name:"Adobe",kind:"partner",width:120}),Level:"Commerce",Description:"Adobe Commerce as the B2B platform.",href:"#"},{Name:"Hyvä",logo:e.jsx(t,{name:"Hyvä",kind:"partner",width:120}),Level:"Gold Partner",Description:"Fast Magento storefront.",href:"#"},{Name:"Pimcore",logo:e.jsx(t,{name:"Pimcore",kind:"partner",width:120}),Level:"Strategic Partner",Description:"One source for product data.",href:"#"}],case:{Title:"Accelerating Growth with a Digital Pioneer in Sports Supplements",Client:"XXL Nutrition",logo:e.jsx(t,{name:"XXL Nutrition",width:140}),image:w("xxl","wide"),tags:["Magento","Adobe Commerce"],href:"#"}},s=(l,i)=>({label:l,system:`0${i}  System`,intro:"Goal intro to follow: which platforms we combine for this goal and how they work together.",partners:[1,2,3,4].map(o=>({Name:`Partner ${o}`,Level:"Partner level",Description:"One line on the role of this partner.",href:"#"})),case:{Title:"Case title to follow",Client:"Client",tags:["Platform","Technology"],href:"#"}}),x=[s("Connect your systems",1),s("Build a data foundation",2),s("Put AI agents to work",3),s("Sharpen your pricing",4),L],I={kicker:"Build your stack",title:"Start with what you need.",body:"Pick a goal. See the partners we usually combine for it, and a client who runs that stack today.",goals:x,selected:4};export{q as B,I as a};
