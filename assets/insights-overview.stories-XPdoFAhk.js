import{j as e}from"./iframe-FrZ6yjpt.js";import{I as i}from"./insights-overview.demo-B27AUent.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtE9JcUf.js";import"./block.module-ifZFSSN6.js";import"./cx-BDMMs1jM.js";import"./icon-BCH5y6oG.js";import"./button-Dv8ebaqZ.js";import"./insight-card-DdFNhRvg.js";import"./card-reveal-Cf0v0aRH.js";import"./card-media-DJ8hY_y-.js";import"./asset-BwYZ-r8z.js";import"./button-link-eGq6jHSx.js";import"./pills-B-gpYNrw.js";import"./focus-ring.module-B3VHbehf.js";import"./filter-bar.module-CkVaOauI.js";import"./media-CIA0hqPx.js";const a={Desktop:"100%",Mobile:360},M={title:"Content blocks/Insights overview",parameters:{layout:"fullscreen",docs:{description:{component:'All insights: type filters (tiles on desktop, a sideways pill row on mobile), "Showing x of y", the Insight Card grid and Show more. Pick a type to filter; Show more adds the next 12.'}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Device:"Desktop"},render:({Device:t})=>e.jsx("div",{style:{width:a[t],margin:"0 auto"},children:e.jsx(i,{Device:t},t)})},r={},o={args:{Device:"Mobile"}},s={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:[e.jsx(i,{Device:"Desktop"}),e.jsx("div",{style:{width:360,margin:"0 auto"},children:e.jsx(i,{Device:"Mobile"})})]})},f=["Desktop","Mobile","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-xl)'
  }}>
            <InsightsOverviewDemo Device="Desktop" />
            <div style={{
      width: 360,
      margin: '0 auto'
    }}>
                <InsightsOverviewDemo Device="Mobile" />
            </div>
        </div>
}`,...s.parameters?.docs?.source}}};export{s as AllVariants,r as Desktop,o as Mobile,f as __namedExportsOrder,M as default};
