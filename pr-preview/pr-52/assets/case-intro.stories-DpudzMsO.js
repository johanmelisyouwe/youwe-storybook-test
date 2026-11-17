import{j as t}from"./iframe-FrZ6yjpt.js";import{C as o}from"./case-intro-ChQpxicd.js";import{C as n}from"./longform.copy-DcCsOMtY.js";import"./preload-helper-PPVm8Dsz.js";import"./cx-BDMMs1jM.js";import"./block.module-ifZFSSN6.js";import"./prose-NzbFOMRN.js";const r={Desktop:"100%",Mobile:360},y={title:"Content blocks/Case intro",parameters:{layout:"fullscreen",docs:{description:{component:"Case page opener: meta list (Platforms, Role, Solution) beside a lead and body. Motion: block reveal."}}},argTypes:{"Meta position":{control:"inline-radio",options:["Left","Right"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{"Meta position":"Left",Device:"Desktop"},render:e=>t.jsx("div",{style:{maxWidth:r[e.Device??"Desktop"]},children:t.jsx(o,{...n,...e})})},a={},i={name:"Right",args:{"Meta position":"Right"}},s={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[["Left","Right"].map(e=>t.jsx("div",{style:{maxWidth:1440},children:t.jsx(o,{...n,"Meta position":e})},e)),t.jsx("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:["Left","Right"].map(e=>t.jsx("div",{style:{width:360},children:t.jsx(o,{...n,"Meta position":e})},e))})]})},h=["Default","Second","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Right',
  args: {
    'Meta position': 'Right'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Left', 'Right'] as const).map(v => <div key={v} style={{
      maxWidth: 1440
    }}>
                    <CaseIntro {...CASE_INTRO} {...{
        'Meta position': v
      }} />
                </div>)}
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-lg)',
      alignItems: 'start'
    }}>
                {(['Left', 'Right'] as const).map(v => <div key={v} style={{
        width: 360
      }}>
                        <CaseIntro {...CASE_INTRO} {...{
          'Meta position': v
        }} />
                    </div>)}
            </div>
        </div>
}`,...s.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Meta position.",...s.parameters?.docs?.description}}};export{s as AllVariants,a as Default,i as Second,h as __namedExportsOrder,y as default};
