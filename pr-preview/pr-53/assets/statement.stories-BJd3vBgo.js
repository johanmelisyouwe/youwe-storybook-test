import{j as e}from"./iframe-DNZaqLqF.js";import{S as i}from"./statement-EKoQyVCv.js";import"./preload-helper-PPVm8Dsz.js";import"./asset-DP6gzN9-.js";import"./cx-BDMMs1jM.js";import"./block.module-ifZFSSN6.js";const n="Customers can access product info, locate stores, and order accessories to keep their Quooker products running smoothly.",a={Desktop:"100%",Mobile:360},x={title:"Content blocks/Statement",parameters:{layout:"fullscreen",docs:{description:{component:"One large statement (heading/xl). Optional giant decorative rows (image-filled and outlined, as on the v2 site) drift ±9% in opposite directions on scroll (aria-hidden)."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Device:"Desktop"},render:({Device:o="Desktop"})=>e.jsx("div",{style:{maxWidth:a[o]},children:e.jsx(i,{text:n})})},r={},t={render:()=>e.jsxs("div",{style:{maxWidth:1440},children:[e.jsx("div",{style:{height:"60vh"}}),e.jsx(i,{text:n,rows:[{text:"We pick the platform"},{text:"that fits your business."}]}),e.jsx("div",{style:{height:"80vh"}})]})},s={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440},children:e.jsx(i,{text:n})}),e.jsx("div",{style:{width:360},children:e.jsx(i,{text:n})})]})},v=["Default","WithGiantRows","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 1440
  }}>
            <div style={{
      height: '60vh'
    }} />
            <Statement text={TEXT} rows={[{
      text: 'We pick the platform'
    }, {
      text: 'that fits your business.'
    }]} />
            <div style={{
      height: '80vh'
    }} />
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Giant rows as on the v2 site (partners section): image-filled + outlined, drifting ±9% in opposite directions on scroll. Scroll the canvas. The image fill is not imported yet, so the image row uses the Ask Youwe glow colours.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      width: 1440
    }}>
                <Statement text={TEXT} />
            </div>
            <div style={{
      width: 360
    }}>
                <Statement text={TEXT} />
            </div>
        </div>
}`,...s.parameters?.docs?.source},description:{story:"Every Figma variant (Device).",...s.parameters?.docs?.description}}};export{s as AllVariants,r as Default,t as WithGiantRows,v as __namedExportsOrder,x as default};
