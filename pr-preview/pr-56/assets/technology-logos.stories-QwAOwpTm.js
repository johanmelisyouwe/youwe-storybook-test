import{j as e}from"./iframe-CBcYq4hM.js";import{T as n}from"./technology-logos-D_tA5Eab.js";import{M as p}from"./mode-frame-D4MrPu-8.js";import"./preload-helper-PPVm8Dsz.js";import"./asset-EdrFFxfS.js";import"./button-BY_kcHvm.js";import"./icon-DPzqSC0C.js";import"./cx-BDMMs1jM.js";import"./statement-CTOEGr2Z.js";import"./block.module-ifZFSSN6.js";const u=["Pimcore","Adobe","Commercetools","HubSpot","Shopify","Hyvä","Alumio","Storyblok","Drupal","Symson","AWS","ACI Weave","Databricks","Microsoft Fabric","Klaviyo","Adyen","Sendcloud","Channable"],l=(o,r=2)=>u.slice(0,o*r).map(d=>({name:d})),m={Title:"Driven by the best technologies",Body:"Everything we do is aimed at delivering real business outcomes for our clients. We rely on proven foundations, using the best AI technologies available today. No experimental tools, but enterprise-grade solutions you can trust to scale securely and reliably.",button:{label:"All tech partners",href:"#"}},g={Title:"The technology we build on",Body:"We pick the platform that fits your business, then connect it to the rest of your landscape.",rows:["We pick the platforms","that fit your business"],button:{label:"All tech partners",href:"#"}},y={Default:6,"Grid 4":4,"Grid 5":5,"Grid 6":6,"Grid 8":8},c=o=>({...o==="Default"?g:m,logos:l(y[o])}),h={Desktop:"100%",Mobile:360},j={title:"Content blocks/Technology logos",parameters:{layout:"fullscreen",docs:{description:{component:"Technology logos in fixed slots per row (Grid 4/5/6/8); Default adds the giant drifting rows. Empty slots keep their space without a border. Motion: logos reveal staggered; hover lowers the opacity."}}},argTypes:{Layout:{control:"inline-radio",options:["Default","Grid 6","Grid 4","Grid 5","Grid 8"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Layout:"Grid 6",Device:"Desktop",Mode:"Dark"},render:({Layout:o="Grid 6",Device:r="Desktop",Mode:d})=>e.jsx(p,{Mode:d,padding:0,children:e.jsx("div",{style:{maxWidth:h[r]},children:e.jsx(n,{Layout:o,...c(o)})})})},s={args:{Layout:"Default"}},i={},a={render:({Mode:o})=>e.jsx(p,{Mode:o,padding:0,children:e.jsx("div",{style:{maxWidth:1440},children:e.jsx(n,{Layout:"Grid 6",...m,logos:[...l(6,1),...l(5,1),null]})})})},t={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(o=>e.jsx(p,{Mode:o,padding:0,children:["Default","Grid 6","Grid 4","Grid 5","Grid 8"].map(r=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(n,{Layout:r,...c(r)})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(n,{Layout:r,...c(r)})})]},r))},o))})},A=["Default","Grid6","WithEmptySlot","AllVariants"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Default'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode} padding={0}>
            <div style={{
      maxWidth: 1440
    }}>
                <TechnologyLogos Layout="Grid 6" {...GRID} logos={[...logos(6, 1), ...logos(5, 1), null]} />
            </div>
        </ModeFrame>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
                    {(['Default', 'Grid 6', 'Grid 4', 'Grid 5', 'Grid 8'] as Layout[]).map(l => <div key={l} style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                            <div style={{
          width: 1440,
          flexShrink: 0
        }}>
                                <TechnologyLogos Layout={l} {...props(l)} />
                            </div>
                            <div style={{
          width: 360,
          flexShrink: 0
        }}>
                                <TechnologyLogos Layout={l} {...props(l)} />
                            </div>
                        </div>)}
                </ModeFrame>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Layout × Mode × Device.",...t.parameters?.docs?.description}}};export{t as AllVariants,s as Default,i as Grid6,a as WithEmptySlot,A as __namedExportsOrder,j as default};
