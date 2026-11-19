import{j as e}from"./iframe-CbOnJm3P.js";import{I as s}from"./insight-card-C4GYcBwG.js";import{M as l}from"./mode-frame-Bj7QCpey.js";import"./preload-helper-PPVm8Dsz.js";import"./card-reveal-BxwrfXKp.js";import"./icon-BOzTPXy8.js";import"./cx-BDMMs1jM.js";import"./card-media-BHyMWq8B.js";import"./asset-C3tFyaeA.js";import"./button-link-5JowQZgv.js";const i={Rest:"",Hover:"pseudo-hover"},n=[{Type:"Whitepaper",Title:"What has to be in place before a PIM pays off",Meta:"Whitepaper · 6 min read"},{Type:"Event",Title:"Higher Ground: what’s next for product data",Meta:"December 3, 2026 · SnowWorld Zoetermeer"},{Type:"Blog",Title:"The Wennink report: what it means for your AI and digital plans"}],m=(r,a)=>a==="Mobile"?336:r==="Featured"?1280:416,j={title:"Components/Insight Card",parameters:{layout:"centered",docs:{description:{component:'Card for an insight (blog, whitepaper, event, video, news). Featured = the large "Latest" card. Whole card is one link; hover/focus plays the red reveal.'}}},argTypes:{Variant:{control:"inline-radio",options:["Default","Featured"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]},State:{control:"inline-radio",options:["Rest","Hover"]}},args:{Variant:"Default",Device:"Desktop",Mode:"Dark",State:"Rest"},render:({Variant:r,Device:a,Mode:p,State:c})=>e.jsx(l,{Mode:p,children:e.jsx("div",{style:{width:m(r,a)},children:e.jsx(s,{...n[0],Variant:r,Device:a,href:"#",className:i[c]})})})},o={},d={args:{Variant:"Featured"},parameters:{layout:"padded"}},t={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(l,{Mode:r,children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-lg)",alignItems:"start"},children:["Rest","Hover"].flatMap(a=>[e.jsx("div",{style:{width:416},children:e.jsx(s,{...n[0],href:"#",className:i[a]})},`d${a}`),e.jsx("div",{style:{width:336},children:e.jsx(s,{...n[1],Device:"Mobile",href:"#",className:i[a]})},`m${a}`),e.jsx("div",{style:{width:336},children:e.jsx(s,{...n[2],Variant:"Featured",Device:"Mobile",href:"#",className:i[a]})},`fm${a}`),e.jsx("div",{style:{width:1280},children:e.jsx(s,{...n[0],Variant:"Featured",href:"#",className:i[a]})},`f${a}`)])})},r))})},w=["Default","Featured","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Featured'
  },
  parameters: {
    layout: 'padded'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
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
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                        {(['Rest', 'Hover'] as State[]).flatMap(s => [<div key={\`d\${s}\`} style={{
          width: 416
        }}>
                                <InsightCard {...ITEMS[0]} href="#" className={PSEUDO[s]} />
                            </div>, <div key={\`m\${s}\`} style={{
          width: 336
        }}>
                                <InsightCard {...ITEMS[1]} Device="Mobile" href="#" className={PSEUDO[s]} />
                            </div>, <div key={\`fm\${s}\`} style={{
          width: 336
        }}>
                                <InsightCard {...ITEMS[2]} Variant="Featured" Device="Mobile" href="#" className={PSEUDO[s]} />
                            </div>, <div key={\`f\${s}\`} style={{
          width: 1280
        }}>
                                <InsightCard {...ITEMS[0]} Variant="Featured" href="#" className={PSEUDO[s]} />
                            </div>])}
                    </div>
                </ModeFrame>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Device × Mode × State.",...t.parameters?.docs?.description}}};export{t as AllVariants,o as Default,d as Featured,w as __namedExportsOrder,j as default};
