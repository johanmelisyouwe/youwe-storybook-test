import{j as e}from"./iframe-BSf27kik.js";import{A as r,a}from"./aci-weave.copy-CCV-l7eQ.js";import"./preload-helper-PPVm8Dsz.js";import"./ask-youwe-CEaRlgkj.js";import"./index-BtE9JcUf.js";import"./icon-CFiociWL.js";import"./card-media-BjTXrnD5.js";import"./cx-BDMMs1jM.js";import"./asset-81uOSvzA.js";import"./ask-Drwa6zfs.js";import"./prose-BSvSR0X8.js";import"./focus-ring.module-B3VHbehf.js";import"./block.module-ifZFSSN6.js";import"./button-C7H0ez--.js";import"./video-player-CnU203Lk.js";import"./media-CIA0hqPx.js";const p={Desktop:"100%",Mobile:360},W={title:"Content blocks/ACI Weave",parameters:{layout:"fullscreen",docs:{description:{component:'ACI Weave section (Home): kicker, title, body, Ask Youwe nudge and button next to a stack of demo videos: each a panel with a caption bar (caption and tag); a panel without a video file is a still screenshot. Two buttons. On desktop the text stays in view while the videos scroll; mobile stacks. Videos use the Video Player: they play muted while in view (Autoplay "In view", with a pause button), or on click with Autoplay "Off". With reduced motion they never autoplay.'}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Autoplay:{control:"inline-radio",options:["In view","Off"]}},args:{Device:"Desktop",Autoplay:"In view"},render:({Device:s,Autoplay:n})=>e.jsx("div",{style:{width:p[s],margin:"0 auto"},children:e.jsx(r,{Device:s,Autoplay:n,...a})})},o={},t={args:{Device:"Mobile"}},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:[e.jsx(r,{Device:"Desktop",...a}),e.jsx("div",{style:{width:360,margin:"0 auto"},children:e.jsx(r,{Device:"Mobile",...a})})]})},j=["Desktop","Mobile","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-xl)'
  }}>
            <AciWeave Device="Desktop" {...ACI_WEAVE} />
            <div style={{
      width: 360,
      margin: '0 auto'
    }}>
                <AciWeave Device="Mobile" {...ACI_WEAVE} />
            </div>
        </div>
}`,...i.parameters?.docs?.source}}};export{i as AllVariants,o as Desktop,t as Mobile,j as __namedExportsOrder,W as default};
