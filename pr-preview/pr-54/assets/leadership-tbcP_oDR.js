import{j as e}from"./iframe-RIzWv_pe.js";import{C as d}from"./card-media-CdJfsXN_.js";import{S as u}from"./section-header-CJ1N3tPP.js";import{c as i}from"./cx-BDMMs1jM.js";import{b as l}from"./block.module-ifZFSSN6.js";import{s as r}from"./accordion-list.module-B4IZp007.js";function m({Photo:t="No",name:a,role:o,email:s,image:n}){return e.jsxs("article",{"data-plain":t==="No"||void 0,className:i(r.person),children:[t==="Yes"&&e.jsx(d,{src:n,alt:a,style:{height:320}}),e.jsxs("div",{className:r["person-info"],children:[e.jsx("h3",{className:"yw-body-lg-med",style:{margin:0},children:a}),e.jsx("span",{className:i(r["person-role"],"yw-body-md-reg"),children:o}),s&&e.jsx("a",{className:i(r["person-email"],"yw-body-md-reg"),href:`mailto:${s}`,children:s})]})]})}function p({kicker:t,title:a,people:o,photos:s=!1}){return e.jsx("section",{className:i(l.root,r.leadership),"aria-label":a,children:e.jsxs("div",{className:i(l.inner,r.inner),children:[e.jsx(u,{Layout:"Stacked",Kicker:t,Title:a}),e.jsx("ul",{className:r["leadership-people"],children:o.map(n=>e.jsx("li",{className:l.reveal,children:e.jsx(m,{...n,Photo:s?"Yes":"No"})},n.name))})]})})}m.__docgenInfo={description:"",methods:[],displayName:"PersonCard",props:{Photo:{required:!1,tsType:{name:"union",raw:"'Yes' | 'No'",elements:[{name:"literal",value:"'Yes'"},{name:"literal",value:"'No'"}]},description:"Figma: Photo",defaultValue:{value:"'No'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:""},role:{required:!0,tsType:{name:"string"},description:""},email:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}]},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"Leadership",props:{Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device (layout follows the block width)"},kicker:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},people:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    /** Figma: Photo */
    Photo?: 'Yes' | 'No'
    name: string
    role: string
    email?: string
    image?: ImageInput
}`,signature:{properties:[{key:"Photo",value:{name:"union",raw:"'Yes' | 'No'",elements:[{name:"literal",value:"'Yes'"},{name:"literal",value:"'No'"}],required:!1},description:"Figma: Photo"},{key:"name",value:{name:"string",required:!0}},{key:"role",value:{name:"string",required:!0}},{key:"email",value:{name:"string",required:!1}},{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1}}]}},{name:"literal",value:"'Photo'"}],raw:"Omit<PersonCardProps, 'Photo'>"}],raw:"Omit<PersonCardProps, 'Photo'>[]"},description:""},photos:{required:!1,tsType:{name:"boolean"},description:"Person Card photos (Figma Leadership uses Photo=No)",defaultValue:{value:"false",computed:!1}}}};export{p as L,m as P};
