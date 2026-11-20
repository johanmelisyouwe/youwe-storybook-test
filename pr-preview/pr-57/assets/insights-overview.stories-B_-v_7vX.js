import{j as e}from"./iframe-YLxJkV3Y.js";import{I as i}from"./insights-overview.demo-Ckaz6RvE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtE9JcUf.js";import"./block.module-ifZFSSN6.js";import"./cx-BDMMs1jM.js";import"./icon-kvpOkNOe.js";import"./button-2sIXhgoB.js";import"./insight-card-BEXGVug8.js";import"./card-reveal-X558JT50.js";import"./card-media-CwR6Uwur.js";import"./asset-DxwWGYn5.js";import"./button-link-CLDG0YUI.js";import"./pills-BjlF9bNc.js";import"./focus-ring.module-B3VHbehf.js";import"./filter-bar.module-CkVaOauI.js";import"./media-D6l-TJH3.js";const a={Desktop:"100%",Mobile:360},M={title:"Content blocks/Insights overview",parameters:{layout:"fullscreen",docs:{description:{component:'All insights: type filters (tiles on desktop, a sideways pill row on mobile), "Showing x of y", the Insight Card grid and Show more. Pick a type to filter; Show more adds the next 12.'}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Device:"Desktop"},render:({Device:t})=>e.jsx("div",{style:{width:a[t],margin:"0 auto"},children:e.jsx(i,{Device:t},t)})},r={},o={args:{Device:"Mobile"}},s={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:[e.jsx(i,{Device:"Desktop"}),e.jsx("div",{style:{width:360,margin:"0 auto"},children:e.jsx(i,{Device:"Mobile"})})]})},f=["Desktop","Mobile","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
