import{j as e}from"./iframe-D5umqaB_.js";import{T as i}from"./tech-partners-split-B2fjKot7.js";import{a as o}from"./ask-youwe-CmPVpgbQ.js";import{M as s}from"./mode-frame-winMAjuD.js";import"./preload-helper-PPVm8Dsz.js";import"./technology-card-C1ilDt3h.js";import"./asset-CFtxCGC7.js";import"./card-reveal-l_pU7Vnh.js";import"./icon-4kAYFwTI.js";import"./cx-BDMMs1jM.js";import"./card-media-lPeWeEze.js";import"./button-link-Bjd3BX2L.js";import"./services-split-DzDYwwlT.js";import"./service-card-DJ8zsUnP.js";import"./block.module-ifZFSSN6.js";import"./index-BtE9JcUf.js";import"./ask-C65UAsvU.js";import"./prose-B8kVwPWH.js";import"./focus-ring.module-B3VHbehf.js";const n={kicker:"Foundation for Data & Integrations",title:"Systems that scale",body:"Data architectures and integration layers that connect systems, improve data quality and enable analytics and AI.",link:{label:"Foundation for Data & Integrations services",href:"#"},snippets:e.jsxs(e.Fragment,{children:[e.jsx(o,{Type:"Nudge",Title:"Magento on a customized ERP? See how JC-Electronics connected it through Alumio."}),e.jsx(o,{Type:"Question",Title:"Which partners do you use for data and integrations?"})]}),groups:[{label:"Integration",partners:[{Name:"Alumio",Description:"iPaaS that connects ERP, PIM and commerce.",href:"#"}]},{label:"Data platforms",partners:[{Name:"Databricks",Description:"Governed data engineering, analytics and AI.",href:"#"},{Name:"Microsoft Fabric",Description:"A governed Microsoft data foundation.",href:"#"}]},{label:"Cloud",partners:[{Name:"AWS",Description:"Integrations, data flows and AI workloads.",href:"#"},{Name:"Google Cloud",Description:"Data, analytics and AI, including BigQuery.",href:"#"}]}]},l={Desktop:"100%",Mobile:360},T={title:"Content blocks/Tech partners split",parameters:{layout:"fullscreen",docs:{description:{component:"Proposition intro (with link) and Ask Youwe snippets on the left, grouped Technology Cards on the right. Mobile: one column. Motion: block reveal staggered."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Mode:"Dark"},render:({Device:r="Desktop",Mode:d})=>e.jsx(s,{Mode:d,padding:0,children:e.jsx("div",{style:{maxWidth:l[r]},children:e.jsx(i,{...n})})})},a={},t={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(s,{Mode:r,padding:0,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(i,{...n})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(i,{...n})})]})},r))})},w=["Default","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
