import{j as e}from"./iframe-CxYQBuog.js";import{A as r,a}from"./aci-weave.copy-F2vfbuD2.js";import"./preload-helper-PPVm8Dsz.js";import"./ask-youwe-CvfeyRvN.js";import"./index-BtE9JcUf.js";import"./icon-CfAeCo3R.js";import"./card-media-CGZdVCCm.js";import"./cx-BDMMs1jM.js";import"./asset-PQUp4Kqr.js";import"./ask-DZ_STNnq.js";import"./prose-Bn4l6ZqD.js";import"./focus-ring.module-B3VHbehf.js";import"./block.module-ifZFSSN6.js";import"./button-DwKgFnfC.js";import"./video-player-DRchYkJI.js";import"./media-CIA0hqPx.js";const p={Desktop:"100%",Mobile:360},W={title:"Content blocks/ACI Weave",parameters:{layout:"fullscreen",docs:{description:{component:'ACI Weave section (Home): kicker, title, body, Ask Youwe nudge and button next to a stack of demo videos: each a panel with a caption bar (caption and tag); a panel without a video file is a still screenshot. Two buttons. On desktop the text stays in view while the videos scroll; mobile stacks. Videos use the Video Player: they play muted while in view (Autoplay "In view", with a pause button), or on click with Autoplay "Off". With reduced motion they never autoplay.'}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Autoplay:{control:"inline-radio",options:["In view","Off"]}},args:{Device:"Desktop",Autoplay:"In view"},render:({Device:s,Autoplay:n})=>e.jsx("div",{style:{width:p[s],margin:"0 auto"},children:e.jsx(r,{Device:s,Autoplay:n,...a})})},o={},t={args:{Device:"Mobile"}},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:[e.jsx(r,{Device:"Desktop",...a}),e.jsx("div",{style:{width:360,margin:"0 auto"},children:e.jsx(r,{Device:"Mobile",...a})})]})},j=["Desktop","Mobile","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
