import{j as e}from"./iframe-YLxJkV3Y.js";import{S as u}from"./section-header-CuUw92Yc.js";import{c as l}from"./cx-BDMMs1jM.js";import{b as t}from"./block.module-ifZFSSN6.js";const d="_inner_menrm_22",p="_grid_menrm_27",v="_root_menrm_61",g="_intro_menrm_93",r={inner:d,grid:p,root:v,intro:g},y={"2 columns":void 0,"3 columns":void 0,"4 columns":void 0,"5 columns":void 0,"Wide + 1":"wide-1","1 + Wide":"1-wide","Feature + 4":"feature-4","Feature + 2":"feature-2","Overflow scroll":"scroll"};function f({Layout:a="3 columns",intro:i,cells:o,label:s}){const m=parseInt(a,10)||3;return e.jsx("section",{"data-layout":y[a],className:l(t.root,r.root),"aria-label":s??i?.Kicker,children:e.jsxs("div",{className:l(t.inner,r.inner),children:[i&&e.jsx("div",{className:r.intro,children:e.jsx(u,{...i})}),e.jsx("ul",{"data-stagger":!0,className:r.grid,style:{"--_cols":m},tabIndex:a==="Overflow scroll"?0:void 0,children:o.map((c,n)=>e.jsx("li",{style:{"--_i":n%4},children:c},n))})]})})}f.__docgenInfo={description:"",methods:[],displayName:"CardGrid",props:{Layout:{required:!1,tsType:{name:"union",raw:`| '2 columns'
| '3 columns'
| '4 columns'
| '5 columns'
| 'Wide + 1'
| '1 + Wide'
| 'Feature + 4'
| 'Feature + 2'
| 'Overflow scroll'`,elements:[{name:"literal",value:"'2 columns'"},{name:"literal",value:"'3 columns'"},{name:"literal",value:"'4 columns'"},{name:"literal",value:"'5 columns'"},{name:"literal",value:"'Wide + 1'"},{name:"literal",value:"'1 + Wide'"},{name:"literal",value:"'Feature + 4'"},{name:"literal",value:"'Feature + 2'"},{name:"literal",value:"'Overflow scroll'"}]},description:"Figma: Layout",defaultValue:{value:"'3 columns'",computed:!1}},Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device (layout follows the block width)"},intro:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /** Figma: Layout */
    Layout?: 'Split' | 'Stacked'
    /** Figma: Kicker (Show kicker) */
    Kicker?: string
    Title: string
    /** Figma: Body (Show body) */
    Body?: string
    className?: string
}`,signature:{properties:[{key:"Layout",value:{name:"union",raw:"'Split' | 'Stacked'",elements:[{name:"literal",value:"'Split'"},{name:"literal",value:"'Stacked'"}],required:!1},description:"Figma: Layout"},{key:"Kicker",value:{name:"string",required:!1},description:"Figma: Kicker (Show kicker)"},{key:"Title",value:{name:"string",required:!0}},{key:"Body",value:{name:"string",required:!1},description:"Figma: Body (Show body)"},{key:"className",value:{name:"string",required:!1}}]}},description:"Figma: Show intro — the Section intro on top"},cells:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:"Figma: Cell 1–10 / Cards"},label:{required:!1,tsType:{name:"string"},description:""}}};export{f as C};
