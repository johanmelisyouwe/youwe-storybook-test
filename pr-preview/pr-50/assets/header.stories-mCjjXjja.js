import{j as e}from"./iframe-DxdOMY_J.js";import{H as p,N as n,U as u,M as h}from"./header-CmNPZy0u.js";import"./preload-helper-PPVm8Dsz.js";import"./responsive.module-B60RvgK7.js";import"./cx-BDMMs1jM.js";import"./focus-ring.module-B3VHbehf.js";import"./icon-C0twR1s7.js";import"./youwe-logo-CjHZHbtw.js";import"./button-D9vQ9I-4.js";import"./button-utility-qZWlahz5.js";import"./ask-youwe-ClbzQB_S.js";import"./index-BtE9JcUf.js";import"./card-media-B7TaGA58.js";import"./asset-yBL7KJ1-.js";import"./ask-B0cQRbsn.js";import"./prose-k6LA23Rh.js";const v={columns:[{heading:"Digital Infrastructure",links:["B2B Enterprise Commerce","D2C Commerce","PIM/MDM","Digital Experience (DXP)","Customer & Partner Portals","Cloud Architecture"].map(r=>({label:r,href:"#"}))},{heading:"Operational Optimization & Intelligence",links:["Pricing Intelligence","Agentic AI","AI Process Intelligence","Contract & Supply Chain","Product Lifecycle Management (PLM)","Sustainability & ESG"].map(r=>({label:r,href:"#"}))},{heading:"Foundation for Data & Integrations",links:["Enterprise Data Architecture","Data Compliance & Security","Data Engineering & API","AI & Analytics","ACI Weave"].map(r=>({label:r,href:"#"}))}]},m=[{label:"Services",href:"#",mega:v},{label:"Work",href:"#"},{label:"Industries",href:"#"},{label:"Tech Partners",href:"#"},{label:"Insights",href:"#"},{label:"About Us",href:"#"}],I={title:"Components/Header/Corporate",parameters:{layout:"fullscreen",docs:{description:{component:"Corporate site navigation, transparent over the hero. The Services mega menu opens on hover (closes 300ms after leaving), with Enter/ArrowDown, and closes with Esc. Mobile: full-screen menu sheet, page scroll locked. With `fixed`: glass once scrolled, hides on scroll down and returns on scroll up (duration/slow, ease/emphasized)."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile","Auto"],description:"Auto: both render, the screen width picks (hamburger below 1024px)"},Expanded:{control:"inline-radio",options:["No","Yes"]}},args:{Device:"Desktop",Expanded:"No"},render:r=>e.jsx("div",{style:{maxWidth:r.Device==="Mobile"?360:void 0,minHeight:r.Expanded==="Yes"?r.Device==="Mobile"?780:460:140},children:e.jsx(p,{...r,nav:m,current:"Services",inline:!0},`${r.Device}${r.Expanded}`)})},t={},l={args:{Expanded:"Yes"}},a={name:"With regions",render:r=>e.jsx("div",{style:{minHeight:260},children:e.jsx(p,{...r,nav:m,current:"Services",inline:!0,homeHref:"/nl",regions:[{label:"Global",href:"/",hreflang:"en"},{label:"UK",href:"/en-gb",hreflang:"en-GB"},{label:"NL",href:"/nl",hreflang:"nl",current:!0},{label:"SE",href:"/sv",hreflang:"sv"}]})})},c={args:{Device:"Mobile"},globals:{viewport:{value:"mobile"}}},d={args:{Device:"Mobile",Expanded:"Yes"},globals:{viewport:{value:"mobile"}}},s={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-md)",alignItems:"center"},children:[e.jsx(n,{label:"Work",href:"#"}),e.jsx(n,{label:"Work",href:"#",active:!0}),e.jsx(n,{label:"Work",href:"#",className:"pseudo-hover"}),e.jsx(n,{Size:"L",label:"Work",href:"#"}),e.jsx(n,{Size:"L",label:"Work",href:"#",active:!0}),e.jsx(n,{Size:"L",label:"Work",href:"#",className:"pseudo-hover"}),e.jsx(u,{label:"Careers",href:"#"})]}),e.jsx("div",{style:{position:"relative",maxWidth:1440},children:e.jsx(h,{...v,Feature:"Ask Youwe",inline:!0})})]})},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-2xl)"},children:[["No","Yes"].map(r=>e.jsx("div",{style:{maxWidth:1440},children:e.jsx(p,{Expanded:r,nav:m,current:"Services",inline:!0})},r)),e.jsx("div",{style:{display:"flex",gap:"var(--spacing-2xl)",alignItems:"start"},children:["No","Yes"].map(r=>e.jsx("div",{style:{width:360,outline:"1px dashed var(--color-shared-border-2)"},children:e.jsx(p,{Device:"Mobile",Expanded:r,nav:m,current:"Services",inline:!0})},r))})]})},o={args:{Device:"Auto"}},C=["Default","MegaMenuOpen","WithRegions","Mobile","MobileMenu","Parts","AllVariants","Responsive"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    Expanded: 'Yes'
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'With regions',
  render: args => <div style={{
    minHeight: 260
  }}>
            <Header {...args} nav={NAV} current="Services" inline homeHref="/nl" regions={[{
      label: 'Global',
      href: '/',
      hreflang: 'en'
    }, {
      label: 'UK',
      href: '/en-gb',
      hreflang: 'en-GB'
    }, {
      label: 'NL',
      href: '/nl',
      hreflang: 'nl',
      current: true
    }, {
      label: 'SE',
      href: '/sv',
      hreflang: 'sv'
    }]} />
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Region / locale switch (one entry per CMS locale) and the logo linking to the locale home.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  },
  globals: {
    viewport: {
      value: 'mobile'
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile',
    Expanded: 'Yes'
  },
  globals: {
    viewport: {
      value: 'mobile'
    }
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-md)',
      alignItems: 'center'
    }}>
                <NavLink label="Work" href="#" />
                <NavLink label="Work" href="#" active />
                <NavLink label="Work" href="#" className="pseudo-hover" />
                <NavLink Size="L" label="Work" href="#" />
                <NavLink Size="L" label="Work" href="#" active />
                <NavLink Size="L" label="Work" href="#" className="pseudo-hover" />
                <UtilityLink label="Careers" href="#" />
            </div>
            <div style={{
      position: 'relative',
      maxWidth: 1440
    }}>
                <MegaMenu {...MEGA} Feature="Ask Youwe" inline />
            </div>
        </div>
}`,...s.parameters?.docs?.source},description:{story:"_Nav link (M / L × Rest / Active / Hover), _Utility link and the Ask Youwe mega menu feature.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-2xl)'
  }}>
            {(['No', 'Yes'] as const).map(e => <div key={e} style={{
      maxWidth: 1440
    }}>
                    <Header Expanded={e} nav={NAV} current="Services" inline />
                </div>)}
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-2xl)',
      alignItems: 'start'
    }}>
                {(['No', 'Yes'] as const).map(e => <div key={e} style={{
        width: 360,
        outline: '1px dashed var(--color-shared-border-2)'
      }}>
                        <Header Device="Mobile" Expanded={e} nav={NAV} current="Services" inline />
                    </div>)}
            </div>
        </div>
}`,...i.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Expanded.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Auto'
  }
}`,...o.parameters?.docs?.source},description:{story:"Device=Auto, as the templates use it: resize the canvas below 1024px to get the hamburger.",...o.parameters?.docs?.description}}};export{i as AllVariants,t as Default,l as MegaMenuOpen,c as Mobile,d as MobileMenu,s as Parts,o as Responsive,a as WithRegions,C as __namedExportsOrder,I as default};
