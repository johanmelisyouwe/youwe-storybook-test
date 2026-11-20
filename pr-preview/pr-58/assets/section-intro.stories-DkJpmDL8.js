import{j as e}from"./iframe-D5umqaB_.js";import{S as s}from"./section-header-Cw1BQ98U.js";import{M as c}from"./mode-frame-winMAjuD.js";import{b as i}from"./block.module-ifZFSSN6.js";import"./preload-helper-PPVm8Dsz.js";import"./prose-B8kVwPWH.js";import"./cx-BDMMs1jM.js";const d={Kicker:"Industries we serve",Title:`Pick an industry.
See the work.`,Body:"Each tile opens a quick view with the clients we work for in that industry."},p={Desktop:1280,Mobile:336},x={title:"Content blocks/Section intro",parameters:{layout:"padded",docs:{description:{component:"Section intro inside the container: kicker, title (heading/xl) and body. Split = title left, body right; Stacked = body under the title; mobile always stacks. Motion: title word reveal; the body lights up word by word as you scroll (28% → 100%, never fades back)."}}},argTypes:{Layout:{control:"inline-radio",options:["Split","Stacked"]},Mode:{control:"inline-radio",options:["Dark","Light"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Layout:"Split",Mode:"Dark",Device:"Desktop"},render:({Layout:r,Mode:t,Device:l})=>e.jsx(c,{Mode:t,children:e.jsx("div",{className:i.root,style:{maxWidth:p[l],background:"none"},children:e.jsx(s,{...d,Layout:r})})})},o={},n={args:{Layout:"Stacked"}},a={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(c,{Mode:r,children:e.jsx("div",{style:{display:"grid",gap:"var(--spacing-2xl)"},children:["Split","Stacked"].map(t=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2xl)",alignItems:"start"},children:[e.jsx("div",{className:i.root,style:{width:1280,background:"none"},children:e.jsx(s,{...d,Layout:t})}),e.jsx("div",{className:i.root,style:{width:336,background:"none"},children:e.jsx(s,{...d,Layout:t})})]},t))})},r))})},S=["Default","Stacked","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Stacked'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Dark', 'Light'] as Mode[]).map(m => <ModeFrame key={m} Mode={m}>
                    <div style={{
        display: 'grid',
        gap: 'var(--spacing-2xl)'
      }}>
                        {(['Split', 'Stacked'] as const).map(l => <div key={l} style={{
          display: 'flex',
          gap: 'var(--spacing-2xl)',
          alignItems: 'start'
        }}>
                                <div className={block.root} style={{
            width: 1280,
            background: 'none'
          }}>
                                    <SectionIntro {...COPY} Layout={l} />
                                </div>
                                <div className={block.root} style={{
            width: 336,
            background: 'none'
          }}>
                                    <SectionIntro {...COPY} Layout={l} />
                                </div>
                            </div>)}
                    </div>
                </ModeFrame>)}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Layout × Mode × Device.",...a.parameters?.docs?.description}}};export{a as AllVariants,o as Default,n as Stacked,S as __namedExportsOrder,x as default};
