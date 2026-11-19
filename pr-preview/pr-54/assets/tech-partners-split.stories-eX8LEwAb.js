import{j as e}from"./iframe-BGyXAfDM.js";import{T as i}from"./tech-partners-split-BMX1dxkm.js";import{a as o}from"./ask-youwe-05879pPl.js";import{M as s}from"./mode-frame-v4DrqJV0.js";import"./preload-helper-PPVm8Dsz.js";import"./technology-card-Dk0RDFRW.js";import"./asset-ZYTJMLL-.js";import"./card-reveal-GDgXIWgS.js";import"./icon-d7Tk8VzI.js";import"./cx-BDMMs1jM.js";import"./card-media-smYYa_3r.js";import"./button-link-Bw1kONYs.js";import"./services-split-sA8W7Xhp.js";import"./service-card-VQqvggZa.js";import"./block.module-ifZFSSN6.js";import"./index-BtE9JcUf.js";import"./ask-D0IbUsMr.js";import"./prose-Cy1xFsmV.js";import"./focus-ring.module-B3VHbehf.js";const n={kicker:"Foundation for Data & Integrations",title:"Systems that scale",body:"Data architectures and integration layers that connect systems, improve data quality and enable analytics and AI.",link:{label:"Foundation for Data & Integrations services",href:"#"},snippets:e.jsxs(e.Fragment,{children:[e.jsx(o,{Type:"Nudge",Title:"Magento on a customized ERP? See how JC-Electronics connected it through Alumio."}),e.jsx(o,{Type:"Question",Title:"Which partners do you use for data and integrations?"})]}),groups:[{label:"Integration",partners:[{Name:"Alumio",Description:"iPaaS that connects ERP, PIM and commerce.",href:"#"}]},{label:"Data platforms",partners:[{Name:"Databricks",Description:"Governed data engineering, analytics and AI.",href:"#"},{Name:"Microsoft Fabric",Description:"A governed Microsoft data foundation.",href:"#"}]},{label:"Cloud",partners:[{Name:"AWS",Description:"Integrations, data flows and AI workloads.",href:"#"},{Name:"Google Cloud",Description:"Data, analytics and AI, including BigQuery.",href:"#"}]}]},l={Desktop:"100%",Mobile:360},T={title:"Content blocks/Tech partners split",parameters:{layout:"fullscreen",docs:{description:{component:"Proposition intro (with link) and Ask Youwe snippets on the left, grouped Technology Cards on the right. Mobile: one column. Motion: block reveal staggered."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Mode:"Dark"},render:({Device:r="Desktop",Mode:d})=>e.jsx(s,{Mode:d,padding:0,children:e.jsx("div",{style:{maxWidth:l[r]},children:e.jsx(i,{...n})})})},a={},t={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(s,{Mode:r,padding:0,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(i,{...n})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(i,{...n})})]})},r))})},w=["Default","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Dark', 'Light'] as Mode[]).map(m => <ModeFrame key={m} Mode={m} padding={0}>
                    <div style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                        <div style={{
          width: 1440,
          flexShrink: 0
        }}>
                            <TechPartnersSplit {...COPY} />
                        </div>
                        <div style={{
          width: 360,
          flexShrink: 0
        }}>
                            <TechPartnersSplit {...COPY} />
                        </div>
                    </div>
                </ModeFrame>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Mode × Device.",...t.parameters?.docs?.description}}};export{t as AllVariants,a as Default,w as __namedExportsOrder,T as default};
