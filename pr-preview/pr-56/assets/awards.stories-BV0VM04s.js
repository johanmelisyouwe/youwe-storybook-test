import{j as e}from"./iframe-CMEFyaA1.js";import{A as s}from"./awards-DaVxUMi7.js";import{b as a}from"./media-CIA0hqPx.js";import"./preload-helper-PPVm8Dsz.js";import"./asset-g08xwDaq.js";import"./card-media-0_57ir45.js";import"./cx-BDMMs1jM.js";import"./icon-a91ShoXL.js";import"./block.module-ifZFSSN6.js";import"./accordion-list.module-B4IZp007.js";const i=[{name:"Northern Digital Award",image:a("northern-digital-award")},{name:"LRQA certificate",image:a("lrqa")},{name:"Award-winning B2B implementation",image:a("award-winning-b2b-implementation")},{name:"Great Place To Work",image:a("great-place-to-work")}],o={Desktop:"100%",Mobile:360},h={title:"Content blocks/Awards",parameters:{layout:"fullscreen",docs:{description:{component:"Awards and certificates row, after the client Stats on About Us."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Device:"Desktop"},render:({Device:n="Desktop"})=>e.jsx("div",{style:{maxWidth:o[n]},children:e.jsx(s,{badges:i})})},t={},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(s,{badges:i})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(s,{badges:i})})]})},u=["Default","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
                <Awards badges={BADGES} />
            </div>
            <div style={{
      width: 360,
      flexShrink: 0
    }}>
                <Awards badges={BADGES} />
            </div>
        </div>
}`,...r.parameters?.docs?.source},description:{story:"Every Figma variant (Device).",...r.parameters?.docs?.description}}};export{r as AllVariants,t as Default,u as __namedExportsOrder,h as default};
