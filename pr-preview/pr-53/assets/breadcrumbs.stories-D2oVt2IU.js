import{j as e}from"./iframe-BNIXmb8p.js";import{B as s}from"./breadcrumbs-CuBFaLMo.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-DCU5zjMq.js";import"./button-DDYWGEnZ.js";import"./cx-BDMMs1jM.js";import"./button-filter-BZuRIHu0.js";import"./focus-ring.module-B3VHbehf.js";const r=[{label:"Home",href:"#"},{label:"Work",href:"#"},{label:"JC-Electronics"}],k={title:"Components/Breadcrumbs",component:s,parameters:{layout:"padded"},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},State:{control:"inline-radio",options:["Rest","Hover","Focused"],description:"_breadcrumb-link State (Active = the current page)"},items:{control:"object"},"Show back button":{control:"boolean",description:"Desktop only"}},args:{Device:"Desktop",State:"Rest",items:r,"Show back button":!1,"Filter button":!0},render:({State:n,...c})=>e.jsx("div",{style:{maxWidth:c.Device==="Mobile"?343:void 0},children:e.jsx(s,{...c,linkClassName:n==="Focused"?"pseudo-focus-visible":n==="Hover"?"pseudo-hover":void 0})})},t={},a={args:{"Show back button":!0}},i={args:{Device:"Mobile"},globals:{viewport:{value:"mobile"}}},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[e.jsx(s,{items:r}),e.jsx(s,{items:r,linkClassName:"pseudo-hover"}),e.jsx(s,{items:r,linkClassName:"pseudo-focus-visible"}),e.jsx(s,{items:r,"Show back button":!0}),e.jsxs("div",{style:{width:343,display:"grid",gap:"var(--spacing-sm)"},children:[e.jsx(s,{Device:"Mobile",items:r}),e.jsx(s,{Device:"Mobile",items:r,"Filter button":!1})]})]})},h=["Default","BackButton","Mobile","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    'Show back button': true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  },
  globals: {
    viewport: {
      value: 'mobile'
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            <Breadcrumbs items={ITEMS} />
            <Breadcrumbs items={ITEMS} linkClassName="pseudo-hover" />
            <Breadcrumbs items={ITEMS} linkClassName="pseudo-focus-visible" />
            <Breadcrumbs items={ITEMS} {...{
      'Show back button': true
    }} />
            <div style={{
      width: 343,
      display: 'grid',
      gap: 'var(--spacing-sm)'
    }}>
                <Breadcrumbs Device="Mobile" items={ITEMS} />
                <Breadcrumbs Device="Mobile" items={ITEMS} {...{
        'Filter button': false
      }} />
            </div>
        </div>
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant: Desktop (link states Rest / Active / Hover / Focused, and with the back button) and Mobile (Filter button on / off).",...o.parameters?.docs?.description}}};export{o as AllVariants,a as BackButton,t as Default,i as Mobile,h as __namedExportsOrder,k as default};
