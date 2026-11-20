import{j as s}from"./iframe-DhUkatZW.js";import{A as i}from"./anchor-nav-DRlOuEQS.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-Did7bX6l.js";import"./cx-BDMMs1jM.js";import"./focus-ring.module-B3VHbehf.js";const o=[{id:"in-brief",label:"The report in brief"},{id:"government",label:"What the government does"},{id:"why-ai",label:"Why AI is central"},{id:"what-it-means",label:"What it means for you"},{id:"six-steps",label:"Investment-ready in 6 steps"},{id:"how-youwe-helps",label:"How Youwe helps"},{id:"faq",label:"FAQ"},{id:"sources",label:"Sources"}],v={title:"Components/Anchor nav",component:i,parameters:{layout:"padded"},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},current:{control:"select",options:o.map(e=>e.id)},items:{control:"object"}},args:{Device:"Desktop",items:o,current:"why-ai"},render:e=>s.jsx("div",{style:{maxWidth:e.Device==="Mobile"?343:288},children:s.jsx(i,{...e})})},r={},t={args:{Device:"Mobile"}},a={name:"All variants",render:e=>s.jsxs("div",{style:{display:"flex",gap:64,alignItems:"flex-start"},children:[s.jsx("div",{style:{width:288},children:s.jsx(i,{...e,Device:"Desktop"})}),s.jsx("div",{style:{width:343},children:s.jsx(i,{...e,Device:"Mobile"})})]})},h=["Desktop","Mobile","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: args => <div style={{
    display: 'flex',
    gap: 64,
    alignItems: 'flex-start'
  }}>
            <div style={{
      width: 288
    }}>
                <AnchorNav {...args} Device="Desktop" />
            </div>
            <div style={{
      width: 343
    }}>
                <AnchorNav {...args} Device="Mobile" />
            </div>
        </div>
}`,...a.parameters?.docs?.source}}};export{a as AllVariants,r as Desktop,t as Mobile,h as __namedExportsOrder,v as default};
