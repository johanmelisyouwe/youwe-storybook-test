import{j as r}from"./iframe-RIzWv_pe.js";import{B as a,a as d}from"./build-your-stack.copy-BMk_3N01.js";import{M as o}from"./mode-frame-6HDYIqWE.js";import"./preload-helper-PPVm8Dsz.js";import"./tabs-BOS-oFbe.js";import"./button-DTlfqX8k.js";import"./icon-DifRw7KX.js";import"./cx-BDMMs1jM.js";import"./options-panel-CYpjicum.js";import"./focus-ring.module-B3VHbehf.js";import"./technology-card-tX2ZOnmK.js";import"./asset-Uklxo8LF.js";import"./card-reveal-al4UTiZv.js";import"./card-media-CdJfsXN_.js";import"./case-card-BeAg5F1A.js";import"./block.module-ifZFSSN6.js";import"./accordion-list.module-B4IZp007.js";import"./logo-DHvHftEN.js";import"./media-CIA0hqPx.js";const s=d,l={Desktop:"100%",Mobile:360},B={title:"Content blocks/Build your stack",parameters:{layout:"fullscreen",docs:{description:{component:"Intro, goal tabs, goal intro, four vertical Technology Cards and a full-width Case Card. Mobile: tabs scroll sideways, cards stack. Motion: block reveal staggered."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Mode:"Dark"},render:({Device:i="Desktop",Mode:n})=>r.jsx(o,{Mode:n,padding:0,children:r.jsx("div",{style:{maxWidth:l[i]},children:r.jsx(a,{...s})})})},t={},e={parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(i=>r.jsx(o,{Mode:i,padding:0,children:r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[r.jsx("div",{style:{width:1440,flexShrink:0},children:r.jsx(a,{...s})}),r.jsx("div",{style:{width:360,flexShrink:0},children:r.jsx(a,{...s})})]})},i))})},O=["Default","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
                            <BuildYourStack {...COPY} />
                        </div>
                        <div style={{
          width: 360,
          flexShrink: 0
        }}>
                            <BuildYourStack {...COPY} />
                        </div>
                    </div>
                </ModeFrame>)}
        </div>
}`,...e.parameters?.docs?.source},description:{story:"Every Figma variant: Mode × Device.",...e.parameters?.docs?.description}}};export{e as AllVariants,t as Default,O as __namedExportsOrder,B as default};
