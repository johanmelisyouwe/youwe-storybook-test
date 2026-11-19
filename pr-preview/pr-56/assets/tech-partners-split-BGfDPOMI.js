import{j as e}from"./iframe-DntXcq6m.js";import{T as d}from"./technology-card-CXcQJic3.js";import{B as g}from"./button-link-DKeOiP2X.js";import{a as c,s as r}from"./services-split-rTOi5Kqv.js";import{c as t}from"./cx-BDMMs1jM.js";import{b as n}from"./block.module-ifZFSSN6.js";function y({kicker:l,title:s,body:u,link:i,snippets:m,groups:p}){return e.jsx("section",{"data-layout":"tech",className:t(n.root,r.root),"aria-label":s,children:e.jsxs("div",{className:t(n.inner,r.inner),children:[e.jsx(c,{kicker:l,title:s,body:u,snippets:m,link:i&&e.jsx(g,{Size:"md",label:i.label,href:i.href})}),e.jsx("div",{className:r.groups,children:p.map(a=>e.jsxs("section",{className:t(r.group,n.reveal),"aria-label":a.label,children:[e.jsx("h3",{className:t(r["group-label"],"yw-body-xs-caps"),children:a.label}),e.jsx("ul",{className:r.cols,style:{margin:0,padding:0,listStyle:"none"},children:a.partners.map(o=>e.jsx("li",{children:e.jsx(d,{...o,Layout:"Vertical"})},o.Name))})]},a.label))})]})})}y.__docgenInfo={description:"",methods:[],displayName:"TechPartnersSplit",props:{Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device (layout follows the block width)"},kicker:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},body:{required:!0,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}},description:""},snippets:{required:!1,tsType:{name:"ReactNode"},description:""},groups:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; partners: TechnologyCardProps[] }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"partners",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1},description:"Figma: Logo — partner logo; without it the name is shown as a wordmark (Figma logo placeholder)"},{key:"Show button",value:{name:"boolean",required:!1},description:"Figma: Show button"},{key:"Hover CTA",value:{name:"string",required:!1}},{key:"Hover context",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"TechnologyCardProps[]",required:!0}}]}}],raw:"{ label: string; partners: TechnologyCardProps[] }[]"},description:""}}};export{y as T};
