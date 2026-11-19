import{j as e}from"./iframe-B4H4D0rs.js";import{T as r}from"./text-media-ClhPjgK2.js";import{a as l}from"./media-CIA0hqPx.js";import"./preload-helper-PPVm8Dsz.js";import"./prose-sluXy4rs.js";import"./cx-BDMMs1jM.js";import"./card-media-BAhI-j8_.js";import"./icon-BnH5x8Cc.js";import"./asset-CV2FOsXU.js";import"./block.module-ifZFSSN6.js";import"./text-media.module-OMNKoLnS.js";const p={image:l("009"),heading:`Global thinking,
global understanding`,body:"We’re a driven collective of over 270 specialists. Big enough to cover every digital discipline, yet close enough to truly understand the specifics of your business. Together, we create digital ecosystems that drive lasting growth."},c={Desktop:"100%",Tablet:768,Mobile:360},M={title:"Content blocks/Text + media",parameters:{layout:"fullscreen",docs:{description:{component:"Text and media side by side (Split 6/6, 4/8, 8/4; media left or right); stacked on tablet and mobile. Theme: Dark, Deep blue or Light. Motion: text block reveal, media clip reveal."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile","Tablet"]},"Media position":{control:"inline-radio",options:["Right","Left"]},Split:{control:"inline-radio",options:["6/6","4/8","8/4"]},Theme:{control:"inline-radio",options:["Dark","Deep blue","Light"]}},args:{Device:"Desktop","Media position":"Right",Split:"6/6",Theme:"Dark"},render:t=>e.jsx("div",{style:{maxWidth:c[t.Device??"Desktop"]},children:e.jsx(r,{...p,...t})})},a={},n={args:{Theme:"Deep blue"}},o={args:{Theme:"Light","Media position":"Left"}},s={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Deep blue","Light"].map(t=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-sm)"},children:[["Right","Left"].flatMap(i=>["6/6","4/8","8/4"].map(d=>e.jsx("div",{style:{maxWidth:1440},children:e.jsx(r,{...p,"Media position":i,Split:d,Theme:t})},i+d))),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)",alignItems:"start"},children:[["Right","Left"].map(i=>e.jsx("div",{style:{width:768},children:e.jsx(r,{...p,Device:"Tablet","Media position":i,Theme:t})},`t${i}`)),["Right","Left"].map(i=>e.jsx("div",{style:{width:360},children:e.jsx(r,{...p,Device:"Mobile","Media position":i,Theme:t})},`m${i}`))]})]},t))})},k=["Default","DeepBlue","Light","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Theme: 'Deep blue'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Theme: 'Light',
    'Media position': 'Left'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Dark', 'Deep blue', 'Light'] as const).map(t => <div key={t} style={{
      display: 'grid',
      gap: 'var(--spacing-sm)'
    }}>
                    {(['Right', 'Left'] as const).flatMap(p => (['6/6', '4/8', '8/4'] as const).map(s => <div key={p + s} style={{
        maxWidth: 1440
      }}>
                                <TextMedia {...COPY} {...{
          'Media position': p
        }} Split={s} Theme={t} />
                            </div>))}
                    <div style={{
        display: 'flex',
        gap: 'var(--spacing-sm)',
        alignItems: 'start'
      }}>
                        {(['Right', 'Left'] as const).map(p => <div key={\`t\${p}\`} style={{
          width: 768
        }}>
                                <TextMedia {...COPY} Device="Tablet" {...{
            'Media position': p
          }} Theme={t} />
                            </div>)}
                        {(['Right', 'Left'] as const).map(p => <div key={\`m\${p}\`} style={{
          width: 360
        }}>
                                <TextMedia {...COPY} Device="Mobile" {...{
            'Media position': p
          }} Theme={t} />
                            </div>)}
                    </div>
                </div>)}
        </div>
}`,...s.parameters?.docs?.source},description:{story:"Every Figma variant: Media position × Split × Theme on desktop, plus tablet and mobile.",...s.parameters?.docs?.description}}};export{s as AllVariants,n as DeepBlue,a as Default,o as Light,k as __namedExportsOrder,M as default};
