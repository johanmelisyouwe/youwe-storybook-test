import{j as e}from"./iframe-DJ-hZ8El.js";import{S as s}from"./services-split-CEdul2H7.js";import{a}from"./ask-youwe-BVysxQZz.js";import{M as d}from"./mode-frame-BOIQO0FT.js";import"./preload-helper-PPVm8Dsz.js";import"./service-card-D6w8AQRk.js";import"./card-reveal-CJRN4ocg.js";import"./icon-BNs9bniO.js";import"./cx-BDMMs1jM.js";import"./card-media-BKmXf15g.js";import"./asset-B6CICw_C.js";import"./button-link-DV4xyiCb.js";import"./block.module-ifZFSSN6.js";import"./index-BtE9JcUf.js";import"./ask-Bm5Upei-.js";import"./prose-Bv7A8Lpc.js";import"./focus-ring.module-B3VHbehf.js";const n={kicker:"Practice 01",title:"Digital Infrastructure",body:"We build digital platforms that directly support revenue growth and strengthen market position. From advanced commerce systems to AI-powered infrastructure, we create the backbone modern businesses need to operate, scale, and compete in markets that keep moving faster.",snippets:e.jsxs(e.Fragment,{children:[e.jsx(a,{Type:"Case",Title:"Scaling smart: Quooker’s expansion to 17 countries",Meta:"Case · Quooker"}),e.jsx(a,{Type:"Question",Title:"How did Kingspan connect its systems with AI agents?"})]}),services:[["01","B2B Enterprise Commerce","B2B webshops and procurement portals with customer-specific pricing, quote-to-order and 24/7 self-service ordering."],["02","D2C Commerce","B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly, on their own or alongside dealers and retailers."],["03","PIM/MDM","One source of truth for your product and master data, from PIM to customer and supplier records."],["04","Digital Experience (DXP)","Digital experience platforms that combine content management, personalization and marketing automation."],["05","Customer & Partner Portals","Self-service portals that bring information together for your customers and partners."],["06","Cloud Architecture","Scalable cloud architectures for your applications and machine learning workloads, from development to production."]].map(([r,i,c])=>({Eyebrow:r,Title:i,Description:c,"Hover CTA":"Explore the service",href:"#"}))},p={Desktop:"100%",Mobile:360},P={title:"Content blocks/Services split",parameters:{layout:"fullscreen",docs:{description:{component:"Proposition intro with Ask Youwe snippets on the left, Service Cards in two staggered columns on the right. Mobile: one column. Motion: block reveal staggered."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Mode:"Dark"},render:({Device:r="Desktop",Mode:i})=>e.jsx(d,{Mode:i,padding:0,children:e.jsx("div",{style:{maxWidth:p[r]},children:e.jsx(s,{...n})})})},o={},t={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(d,{Mode:r,padding:0,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(s,{...n})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(s,{...n})})]})},r))})},A=["Default","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
                            <ServicesSplit {...COPY} />
                        </div>
                        <div style={{
          width: 360,
          flexShrink: 0
        }}>
                            <ServicesSplit {...COPY} />
                        </div>
                    </div>
                </ModeFrame>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Mode × Device.",...t.parameters?.docs?.description}}};export{t as AllVariants,o as Default,A as __namedExportsOrder,P as default};
