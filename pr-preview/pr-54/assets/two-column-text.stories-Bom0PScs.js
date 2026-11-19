import{j as t}from"./iframe-B4H4D0rs.js";import{T as n}from"./two-column-text-CdDh96mg.js";import{a as o}from"./longform.copy-DQ5LMA7t.js";import"./preload-helper-PPVm8Dsz.js";import"./text-column-CoG6A-qY.js";import"./cx-BDMMs1jM.js";import"./prose-sluXy4rs.js";import"./block.module-ifZFSSN6.js";const i={Desktop:"100%",Mobile:360},x={title:"Content blocks/Two-column text",parameters:{layout:"fullscreen",docs:{description:{component:"Label + lead on the left, body on the right. Split 4/8 gives the lead a narrower column. Motion: block reveal."}}},argTypes:{Split:{control:"inline-radio",options:["6/6","4/8"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Split:"6/6",Device:"Desktop"},render:e=>t.jsx("div",{style:{maxWidth:i[e.Device??"Desktop"]},children:t.jsx(n,{...o,...e})})},s={},a={name:"4/8",args:{Split:"4/8"}},r={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[["6/6","4/8"].map(e=>t.jsx("div",{style:{maxWidth:1440},children:t.jsx(n,{...o,Split:e})},e)),t.jsx("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:["6/6","4/8"].map(e=>t.jsx("div",{style:{width:360},children:t.jsx(n,{...o,Split:e})},e))})]})},y=["Default","Second","AllVariants"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '4/8',
  args: {
    Split: '4/8'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['6/6', '4/8'] as const).map(v => <div key={v} style={{
      maxWidth: 1440
    }}>
                    <TwoColumnText {...TWO_COLUMN} {...{
        Split: v
      }} />
                </div>)}
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-lg)',
      alignItems: 'start'
    }}>
                {(['6/6', '4/8'] as const).map(v => <div key={v} style={{
        width: 360
      }}>
                        <TwoColumnText {...TWO_COLUMN} {...{
          Split: v
        }} />
                    </div>)}
            </div>
        </div>
}`,...r.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Split.",...r.parameters?.docs?.description}}};export{r as AllVariants,s as Default,a as Second,y as __namedExportsOrder,x as default};
