import{j as r}from"./iframe-P_LRH6yF.js";import{B as a,a as d}from"./build-your-stack.copy-D7Fl1SBe.js";import{M as o}from"./mode-frame-7-OmvgCw.js";import"./preload-helper-PPVm8Dsz.js";import"./tabs-CipgAtjt.js";import"./button-BNBLkNnQ.js";import"./icon-C6nQwgWl.js";import"./cx-BDMMs1jM.js";import"./options-panel-B6kssGv8.js";import"./focus-ring.module-B3VHbehf.js";import"./technology-card-D3BZh_Ln.js";import"./asset-PvhaBZcj.js";import"./card-reveal-CKtoDcHn.js";import"./card-media-BSE6dv1I.js";import"./case-card-O-q_tbRN.js";import"./block.module-ifZFSSN6.js";import"./accordion-list.module-DJQZh_dk.js";import"./logo-MjrzeFyP.js";import"./media-CIA0hqPx.js";const s=d,l={Desktop:"100%",Mobile:360},B={title:"Content blocks/Build your stack",parameters:{layout:"fullscreen",docs:{description:{component:"Intro, goal tabs, goal intro, four vertical Technology Cards and a full-width Case Card. Mobile: tabs scroll sideways, cards stack. Motion: block reveal staggered."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Mode:"Dark"},render:({Device:i="Desktop",Mode:n})=>r.jsx(o,{Mode:n,padding:0,children:r.jsx("div",{style:{maxWidth:l[i]},children:r.jsx(a,{...s})})})},t={},e={parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(i=>r.jsx(o,{Mode:i,padding:0,children:r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[r.jsx("div",{style:{width:1440,flexShrink:0},children:r.jsx(a,{...s})}),r.jsx("div",{style:{width:360,flexShrink:0},children:r.jsx(a,{...s})})]})},i))})},O=["Default","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
