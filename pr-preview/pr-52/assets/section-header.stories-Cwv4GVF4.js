import{j as e}from"./iframe-Bhg6XAGb.js";import{a}from"./section-header-BSng5zMv.js";import"./preload-helper-PPVm8Dsz.js";import"./prose-CzvDEmKn.js";import"./cx-BDMMs1jM.js";import"./block.module-ifZFSSN6.js";const i={kicker:"Industries we serve",heading:"Selected case studies",body:"Explore how we’ve helped organizations build and scale their digital infrastructure, from custom commerce platforms to high-performing cloud environments. Each case highlights the impact of smart architecture and design choices."},c={Desktop:"100%",Mobile:360},h={title:"Content blocks/Section header",parameters:{layout:"fullscreen",docs:{description:{component:"Opens a section: optional kicker, heading/xl and an intro (max 524 wide). Motion: title words rise from 105% in a mask on scroll."}}},argTypes:{Alignment:{control:"inline-radio",options:["Left","Centered"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Alignment:"Left",Device:"Desktop",Kicker:!0},render:({Alignment:r,Device:o="Desktop",Kicker:d})=>e.jsx("div",{style:{maxWidth:c[o]},children:e.jsx(a,{...i,kicker:d?i.kicker:void 0,Alignment:r})})},n={},s={args:{Alignment:"Centered"}},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[["Left","Centered"].map(r=>e.jsx("div",{style:{maxWidth:1440},children:e.jsx(a,{...i,Alignment:r})},r)),e.jsx("div",{style:{display:"flex",gap:"var(--spacing-lg)"},children:["Left","Centered"].map(r=>e.jsx("div",{style:{width:360},children:e.jsx(a,{...i,Alignment:r})},r))})]})},x=["Default","Centered","AllVariants"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Alignment: 'Centered'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Left', 'Centered'] as const).map(a => <div key={a} style={{
      maxWidth: 1440
    }}>
                    <SectionHeader {...COPY} Alignment={a} />
                </div>)}
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-lg)'
    }}>
                {(['Left', 'Centered'] as const).map(a => <div key={a} style={{
        width: 360
      }}>
                        <SectionHeader {...COPY} Alignment={a} />
                    </div>)}
            </div>
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Alignment.",...t.parameters?.docs?.description}}};export{t as AllVariants,s as Centered,n as Default,x as __namedExportsOrder,h as default};
