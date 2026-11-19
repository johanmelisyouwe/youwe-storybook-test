import{j as e}from"./iframe-CMEFyaA1.js";import{C as d}from"./card-media-0_57ir45.js";import{b as s}from"./block.module-ifZFSSN6.js";import"./preload-helper-PPVm8Dsz.js";import"./cx-BDMMs1jM.js";import"./icon-a91ShoXL.js";import"./asset-g08xwDaq.js";function t({title:i="Solutions",items:o}){return e.jsx("section",{className:s.root,"aria-label":i,children:e.jsxs("div",{className:s.inner,style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2xl)"},children:[e.jsx("h2",{className:"yw-body-2xl-med",style:{margin:0,textAlign:"center"},children:i}),e.jsx("ul",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 1fr))",gap:"var(--spacing-sm)",margin:0,padding:0,listStyle:"none"},children:o.map(n=>e.jsxs("li",{className:s.reveal,style:{display:"flex",flexDirection:"column",gap:"var(--spacing-sm)"},children:[e.jsx(d,{src:n.image,ratio:"416 / 367"}),e.jsxs("span",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-xs)"},children:[e.jsx("span",{className:"yw-body-xl-med",children:n.title}),e.jsx("span",{className:"yw-body-md-reg",style:{color:"var(--color-shared-content-secondary)"},children:n.body})]})]},n.title))})]})})}t.__docgenInfo={description:"",methods:[],displayName:"SolutionsGrid",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Solutions'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ title: string; body: string; image?: ImageInput; href?: string }",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"body",value:{name:"string",required:!0}},{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"{ title: string; body: string; image?: ImageInput; href?: string }[]"},description:""}}};const l=[{title:"Cloud-Native AI Infrastructure",body:"Scalable cloud architecture for AI workloads."},{title:"MLOps and Model Lifecycle Management",body:"End-to-end ML pipeline management."},{title:"GPU-Accelerated Compute Infrastructure",body:"High-performance computing for model training."},{title:"Real-time AI Inference at Scale",body:"Low-latency inference for production workloads."},{title:"AI Model Monitoring and Observability",body:"Monitoring of model performance and drift."},{title:"Hybrid and Multi-cloud AI Infrastructure",body:"Flexible deployment across clouds and on-premise."}],x={title:"Content blocks/Solutions grid",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"Three-column grid of image cards with a title and one-line description. Motion: block reveal staggered."}}},args:{title:"Solutions",items:l},render:i=>e.jsx("div",{style:{maxWidth:1440},children:e.jsx(t,{...i})})},a={},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(t,{items:l})}),e.jsx("div",{style:{width:390,flexShrink:0},children:e.jsx(t,{items:l.slice(0,3)})})]})},h=["Default","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-lg)',
    alignItems: 'start'
  }}>
            <div style={{
      width: 1440,
      flexShrink: 0
    }}>
                <SolutionsGrid items={ITEMS} />
            </div>
            <div style={{
      width: 390,
      flexShrink: 0
    }}>
                <SolutionsGrid items={ITEMS.slice(0, 3)} />
            </div>
        </div>
}`,...r.parameters?.docs?.source},description:{story:"The Figma component has one variant; desktop and a narrow frame.",...r.parameters?.docs?.description}}};export{r as AllVariants,a as Default,h as __namedExportsOrder,x as default};
