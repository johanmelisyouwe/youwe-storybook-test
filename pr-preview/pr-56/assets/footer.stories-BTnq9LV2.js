import{j as r}from"./iframe-CBcYq4hM.js";import{F as p,a as m}from"./footer-9_NHPM4k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtE9JcUf.js";import"./responsive.module-_iw-xrH_.js";import"./cx-BDMMs1jM.js";import"./focus-ring.module-B3VHbehf.js";import"./icon-DPzqSC0C.js";import"./button-BY_kcHvm.js";const n=e=>e.map(o=>({label:o,href:"#"})),u=[{heading:"Digital Infrastructure",links:n(["B2B Enterprise Commerce","D2C Commerce","PIM/MDM","Digital Experience (DXP)","Customer & Partner Portals","Cloud Architecture"])},{heading:"Operational Optimization & Intelligence",links:n(["Pricing Intelligence","Agentic AI","AI Process Intelligence","Contract & Supply Chain","Product Lifecycle Management (PLM)","Sustainability & ESG"])},{heading:"Foundation for Data & Integrations",links:n(["Enterprise Data Architecture","Data Compliance & Security","Data Engineering & API","AI & Analytics","ACI Weave"])}],g=[{heading:"Youwe",links:n(["Work","Services","Industries","About us","Contact"])},...u],v=[{heading:"Youwe",links:n(["Home","Services","Work","Industries","Tech Partners","Insights","About Us"])},...u],h={text:"Tell us what you want to achieve and we will think along with you.",cta:{label:"Contact us",href:"#"}},d=e=>e==="Newsletter"?{columns:v,newsletter:h}:{columns:g},I={title:"Components/Footer/Corporate",parameters:{layout:"fullscreen",docs:{description:{component:"Corporate site footer. Sitemap: brand column plus three service columns. Newsletter: text and button first, plus a language selector. Static; links change colour on hover (duration/fast)."}}},argTypes:{Variant:{control:"inline-radio",options:["Sitemap","Newsletter"]},Device:{control:"inline-radio",options:["Desktop","Mobile","Auto"],description:"Auto: both render, the screen width picks (mobile below 768px)"}},args:{Variant:"Sitemap",Device:"Desktop"},render:({Variant:e,Device:o})=>r.jsx("div",{style:{maxWidth:o==="Mobile"?360:void 0},children:r.jsx(p,{Variant:e,Device:o,...d(e)})})},i={},l={args:{Variant:"Newsletter"}},c={args:{Device:"Mobile"},globals:{viewport:{value:"mobile"}}},t={parameters:{layout:"padded",controls:{disable:!0}},render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)"},children:[r.jsx(m,{label:"Work",href:"#"}),r.jsx(m,{Size:"S",label:"Work",href:"#"})]})},a={parameters:{controls:{disable:!0}},render:()=>r.jsxs("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:[["Sitemap","Newsletter"].map(e=>r.jsx("div",{style:{maxWidth:1440},children:r.jsx(p,{Variant:e,...d(e)})},e)),r.jsx("div",{style:{display:"flex",gap:"var(--spacing-xl)",alignItems:"start"},children:["Sitemap","Newsletter"].map(e=>r.jsx("div",{style:{width:360},children:r.jsx(p,{Variant:e,Device:"Mobile",...d(e)})},e))})]})},s={args:{Device:"Auto",Variant:"Newsletter"}},C=["Default","Newsletter","Mobile","Links","AllVariants","Responsive"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Newsletter'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  },
  globals: {
    viewport: {
      value: 'mobile'
    }
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-lg)'
  }}>
            <FooterLink label="Work" href="#" />
            <FooterLink Size="S" label="Work" href="#" />
        </div>
}`,...t.parameters?.docs?.source},description:{story:"_Footer link: Size M and S.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-xl)'
  }}>
            {(['Sitemap', 'Newsletter'] as const).map(v => <div key={v} style={{
      maxWidth: 1440
    }}>
                    <Footer Variant={v} {...props(v)} />
                </div>)}
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-xl)',
      alignItems: 'start'
    }}>
                {(['Sitemap', 'Newsletter'] as const).map(v => <div key={v} style={{
        width: 360
      }}>
                        <Footer Variant={v} Device="Mobile" {...props(v)} />
                    </div>)}
            </div>
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Device.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Auto',
    Variant: 'Newsletter'
  }
}`,...s.parameters?.docs?.source},description:{story:"Device=Auto, as the templates use it: resize the canvas below 768px to get the mobile footer.",...s.parameters?.docs?.description}}};export{a as AllVariants,i as Default,t as Links,c as Mobile,l as Newsletter,s as Responsive,C as __namedExportsOrder,I as default};
