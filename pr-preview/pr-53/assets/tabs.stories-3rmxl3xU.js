import{j as e}from"./iframe-zwtNqTkm.js";import{T as i,a as o}from"./tabs-D8FosX-Z.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DIaQG4BW.js";import"./icon-DeIsMOez.js";import"./cx-BDMMs1jM.js";import"./options-panel-K_oZF1WG.js";import"./focus-ring.module-B3VHbehf.js";const c=["Manufacturing","Wholesale","Retail & Consumer Goods"].map(a=>({value:a,label:a})),d={Active:"",Rest:"",Hover:"pseudo-hover",Focused:"pseudo-focus-visible",Disabled:""},l=["Digital Infrastructure","Operational Optimization & Intelligence","Foundation for Data & Integrations"],h={title:"Components/Tabs",component:i,parameters:{layout:"padded",docs:{description:{component:"Tabs switch between views or sections. Motion: hover colour (duration/fast); the selected ink slides between tabs (duration/slow, ease/emphasized). Interaction: WAI-ARIA tabs, roving tabindex, Arrow/Home/End."}}},argTypes:{State:{control:"inline-radio",options:["Active","Rest","Hover","Focused","Disabled"]}},args:{State:"Rest",label:"Digital Infrastructure"},render:({State:a,label:p})=>e.jsx("div",{role:"tablist","aria-label":"Example",children:e.jsx(i,{label:p,selected:a==="Active",tabIndex:0,className:d[a],disabled:a==="Disabled"})})},r={},n={args:{State:"Active"}},s={parameters:{controls:{disable:!0}},render:()=>e.jsx(o,{label:"Practices",tabs:l,trailingOptions:c,panels:[e.jsx("p",{className:"yw-body-md-reg",style:{padding:"var(--spacing-lg) 0"},children:"Commerce, PIM, portals and experience platforms, connected to your ERP."},"1"),e.jsx("p",{className:"yw-body-md-reg",style:{padding:"var(--spacing-lg) 0"},children:"Complex workflows turned into intelligent, efficient systems: less manual work, less risk."},"2"),e.jsx("p",{className:"yw-body-md-reg",style:{padding:"var(--spacing-lg) 0"},children:"Data architectures and integration layers that connect systems, improve data quality and enable analytics and AI."},"3")]})},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:[e.jsx("div",{role:"tablist","aria-label":"Tab states",style:{display:"flex",gap:"var(--spacing-sm)"},children:["Rest","Hover","Active","Focused","Disabled"].map(a=>e.jsx(i,{label:"Digital Infrastructure",selected:a==="Active",tabIndex:0,className:d[a],disabled:a==="Disabled"},a))}),e.jsx("div",{style:{minHeight:200},children:e.jsx(o,{label:"Practices",tabs:l,trailingOptions:c,defaultMenuOpen:!0})}),e.jsx(o,{label:"Practices without action",tabs:l,"Trailing action":!1})]})},w=["Default","Active","Group","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    State: 'Active'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <TabGroup label="Practices" tabs={TABS} trailingOptions={MORE} panels={[<p key="1" className="yw-body-md-reg" style={{
    padding: 'var(--spacing-lg) 0'
  }}>
                    Commerce, PIM, portals and experience platforms, connected
                    to your ERP.
                </p>, <p key="2" className="yw-body-md-reg" style={{
    padding: 'var(--spacing-lg) 0'
  }}>
                    Complex workflows turned into intelligent, efficient
                    systems: less manual work, less risk.
                </p>, <p key="3" className="yw-body-md-reg" style={{
    padding: 'var(--spacing-lg) 0'
  }}>
                    Data architectures and integration layers that connect
                    systems, improve data quality and enable analytics and AI.
                </p>]} />
}`,...s.parameters?.docs?.source},description:{story:"Tab group (Figma State=Rest) with sliding ink, keyboard support and the trailing action.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-xl)'
  }}>
            <div role="tablist" aria-label="Tab states" style={{
      display: 'flex',
      gap: 'var(--spacing-sm)'
    }}>
                {(['Rest', 'Hover', 'Active', 'Focused', 'Disabled'] as State[]).map(s => <Tab key={s} label="Digital Infrastructure" selected={s === 'Active'} tabIndex={0} className={PSEUDO[s]} disabled={s === 'Disabled'} />)}
            </div>
            <div style={{
      minHeight: 200
    }}>
                <TabGroup label="Practices" tabs={TABS} trailingOptions={MORE} defaultMenuOpen />
            </div>
            <TabGroup label="Practices without action" tabs={TABS} {...{
      'Trailing action': false
    }} />
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Tab (State, 5) and Tab group (State=Rest, with and without trailing action).",...t.parameters?.docs?.description}}};export{n as Active,t as AllVariants,r as Default,s as Group,w as __namedExportsOrder,h as default};
