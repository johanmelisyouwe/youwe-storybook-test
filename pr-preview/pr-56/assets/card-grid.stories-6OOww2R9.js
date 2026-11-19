import{j as e}from"./iframe-CBcYq4hM.js";import{C as l}from"./card-grid-CVhASYN-.js";import{F as v}from"./feature-card-CG58FAJk.js";import{C as p}from"./case-card-BC4vJObq.js";import{Q as x}from"./quote-card-3fkt2fhi.js";import{S as w}from"./stat-BRytD5RZ.js";import{I as S}from"./insight-card-MDLG-HV0.js";import{S as k}from"./service-card-DNC8GaJ5.js";import{C}from"./client-logo-CAxca5Gk.js";import{M as m}from"./mode-frame-D4MrPu-8.js";import"./preload-helper-PPVm8Dsz.js";import"./section-header-Cwr67_qh.js";import"./prose-I08QCv5T.js";import"./cx-BDMMs1jM.js";import"./block.module-ifZFSSN6.js";import"./card-reveal-DQHMIm_J.js";import"./icon-DPzqSC0C.js";import"./card-media-bNj6MiJI.js";import"./asset-EdrFFxfS.js";import"./pills-D3NshKN7.js";import"./focus-ring.module-B3VHbehf.js";import"./button-BY_kcHvm.js";import"./button-link-DUKpWpuR.js";import"./ask-cK0HD_-t.js";import"./logo-BqPhP3mR.js";import"./media-CIA0hqPx.js";const u={Kicker:"Industries we serve",Title:`Pick an industry.
See the work.`,Body:"Each tile opens a quick view with the clients we work for in that industry."},g=[["B2B Enterprise Commerce","B2B webshops and procurement portals with customer-specific pricing, quote-to-order and 24/7 self-service ordering."],["D2C Commerce","B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly."],["PIM/MDM","One source of truth for your product and master data, from PIM to customer and supplier records."],["Digital Experience (DXP)","Digital experience platforms that combine content management, personalization and marketing automation."],["Customer & Partner Portals","Self-service portals that bring information together for your customers and partners."],["Cloud Architecture","Scalable cloud architectures for your applications and machine learning workloads."],["Pricing Intelligence","Pricing tools that take repeat work off your teams."],["Agentic AI","AI agents that automate the steps worth automating."],["AI Process Intelligence","Process mining that shows where work gets stuck."],["Data Engineering & API","Data architecture, APIs and governance for one shared source of data."]],D=t=>g.slice(0,t).map(([r,o],c)=>e.jsx(v,{Number:String(c+1).padStart(2,"0"),Title:r,Description:o},r)),h={Title:"How a Design System strengthened G-Star’s brand consistency",Client:"G-Star RAW",logo:e.jsx(C,{name:"G-Star"}),href:"#"},M=[e.jsx(p,{...h,stat:{value:"+43%",label:"marketable catalog uplift"}},"c"),e.jsx(w,{Value:"900+",Label:"Projects delivered since 2000"},"s"),e.jsx(x,{Quote:"“We turned the vision into a platform. Now we’re adding new customers and suppliers.”",Name:"Frank Daamen",Role:"Digital Director Bunzl & Founder of BunzlOne"},"q"),e.jsx(k,{Eyebrow:"01",Title:"B2B Enterprise Commerce",Description:g[0][1],"Hover CTA":"Explore the service",href:"#"},"sv"),e.jsx(S,{Type:"Whitepaper",Title:"What has to be in place before a PIM pays off",Meta:"Whitepaper · 6 min read",href:"#"},"i")],f={"2 columns":4,"3 columns":6,"4 columns":8,"5 columns":10,"Wide + 1":2,"1 + Wide":2,"Feature + 4":5,"Feature + 2":3,"Overflow scroll":6},y=Object.keys(f),d=t=>t==="Overflow scroll"?Array.from({length:6},(r,o)=>e.jsx(p,{...h},o)):D(f[t]),b={Desktop:"100%",Mobile:390},$={title:"Content blocks/Card grid",parameters:{layout:"fullscreen",docs:{description:{component:"Section intro + a grid of card cells. Pick a Layout and fill the cells with any card; Overflow scroll is one horizontal row that runs off the right edge. Motion: cards reveal staggered on scroll; cards keep their own hover."}}},argTypes:{Layout:{control:"select",options:y},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Layout:"3 columns",Device:"Desktop",Mode:"Dark","Show intro":!0},render:({Layout:t="3 columns",Device:r="Desktop",Mode:o,"Show intro":c})=>e.jsx(m,{Mode:o,padding:0,children:e.jsx("div",{style:{maxWidth:b[r]},children:e.jsx(l,{Layout:t,intro:c?u:void 0,cells:d(t)})})})},s={},i={args:{Layout:"Feature + 4"},render:({Mode:t})=>e.jsx(m,{Mode:t,padding:0,children:e.jsx("div",{style:{maxWidth:1440},children:e.jsx(l,{Layout:"Feature + 4",intro:u,cells:M})})})},n={args:{Layout:"Overflow scroll"}},a={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(t=>e.jsx(m,{Mode:t,padding:0,children:y.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"var(--spacing-lg)"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(l,{Layout:r,cells:d(r),label:r})}),e.jsx("div",{style:{width:390,flexShrink:0},children:e.jsx(l,{Layout:r,cells:d(r).slice(0,2),label:r})})]},r))},t))})},ee=["Default","MixedCards","OverflowScroll","AllVariants"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Feature + 4'
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode} padding={0}>
            <div style={{
      maxWidth: 1440
    }}>
                <CardGrid Layout="Feature + 4" intro={INTRO} cells={MIXED} />
            </div>
        </ModeFrame>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Overflow scroll'
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
            {(['Dark', 'Light'] as Mode[]).map(m => <ModeFrame key={m} Mode={m} padding={0}>
                    {LAYOUTS.map(l => <div key={l} style={{
        display: 'flex',
        alignItems: 'start',
        gap: 'var(--spacing-lg)'
      }}>
                            <div style={{
          width: 1440,
          flexShrink: 0
        }}>
                                <CardGrid Layout={l} cells={cellsFor(l)} label={l} />
                            </div>
                            <div style={{
          width: 390,
          flexShrink: 0
        }}>
                                <CardGrid Layout={l} cells={cellsFor(l).slice(0, 2)} label={l} />
                            </div>
                        </div>)}
                </ModeFrame>)}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Layout × Device (Mode via the toolbar; both modes in the Mode story args).",...a.parameters?.docs?.description}}};export{a as AllVariants,s as Default,i as MixedCards,n as OverflowScroll,ee as __namedExportsOrder,$ as default};
