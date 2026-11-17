import{j as e}from"./iframe-DxdOMY_J.js";import{S as c,a as l}from"./service-card-DvrHYyO-.js";import{M as i}from"./mode-frame-DriQAKwW.js";import"./preload-helper-PPVm8Dsz.js";import"./card-reveal-DdoZHhGA.js";import"./icon-C0twR1s7.js";import"./cx-BDMMs1jM.js";import"./card-media-B7TaGA58.js";import"./asset-yBL7KJ1-.js";import"./button-link-DWl4SfAx.js";const d={Rest:"",Hover:"pseudo-hover"},p=[{Eyebrow:"01",Title:"B2B Enterprise Commerce",Description:"B2B webshops and procurement portals with customer-specific pricing, quote-to-order and 24/7 self-service ordering."},{Eyebrow:"02",Title:"D2C Commerce",Description:"B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly, on their own or alongside dealers and retailers."},{Eyebrow:"03",Title:"PIM/MDM",Description:"One source of truth for your product and master data, from PIM to customer and supplier records."}],m={Eyebrow:"01",Title:"Systems that Scale",Description:"Data architectures and integration layers that connect systems, improve data quality and enable analytics and AI.",Caption:"Proven at Quooker · 17 markets supported",link:"Foundation for Data & Integrations"},f={title:"Components/Service Card",parameters:{layout:"centered",docs:{description:{component:"Text-led card for services (Service Card) and the three systems (System Card). The whole card is one link. Hover/focus: red reveal, card text slides up and fades, the arrow stays straight (duration/card, ease/card)."}}},argTypes:{Mode:{control:"inline-radio",options:["Dark","Light"]},State:{control:"inline-radio",options:["Rest","Hover"]}},args:{Mode:"Dark",State:"Rest"},render:({Mode:s,State:r})=>e.jsx(i,{Mode:s,children:e.jsx("div",{style:{width:416},children:e.jsx(c,{...p[0],"Hover CTA":"Explore the service",href:"#",className:d[r]})})})},o={},n={render:({Mode:s,State:r})=>e.jsx(i,{Mode:s,children:e.jsx("div",{style:{width:416},children:e.jsx(l,{...m,"Hover CTA":"Explore the system",href:"#",className:d[r]})})})},a={parameters:{layout:"padded",controls:{include:["Mode"]}},render:({Mode:s})=>e.jsx(i,{Mode:s,children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 416px))",gap:"var(--spacing-sm)"},children:p.map(r=>e.jsx(c,{...r,"Hover CTA":"Explore the service",href:"#"},r.Title))})})},t={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(s=>e.jsx(i,{Mode:s,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 416px)",gap:"var(--spacing-lg)",alignItems:"start"},children:[["Rest","Hover"].map(r=>e.jsx(c,{...p[0],"Hover CTA":"Explore the service",href:"#",className:d[r]},r)),["Rest","Hover"].map(r=>e.jsx(l,{...m,"Hover CTA":"Explore the system",href:"#",className:d[r]},`sys-${r}`))]})},s))})},T=["Default","System","ServiceGrid","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: ({
    Mode,
    State
  }) => <ModeFrame Mode={Mode}>
            <div style={{
      width: 416
    }}>
                <SystemCard {...SYSTEM} {...{
        'Hover CTA': 'Explore the system'
      }} href="#" className={PSEUDO[State]} />
            </div>
        </ModeFrame>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode}>
            <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 416px))',
      gap: 'var(--spacing-sm)'
    }}>
                {SERVICES.map(s => <ServiceCard key={s.Title} {...s} {...{
        'Hover CTA': 'Explore the service'
      }} href="#" />)}
            </div>
        </ModeFrame>
}`,...a.parameters?.docs?.source},description:{story:"Three service cards as in the Services split block (4 columns each on desktop).",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 416px)',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                        {(['Rest', 'Hover'] as State[]).map(s => <ServiceCard key={s} {...SERVICES[0]} {...{
          'Hover CTA': 'Explore the service'
        }} href="#" className={PSEUDO[s]} />)}
                        {(['Rest', 'Hover'] as State[]).map(s => <SystemCard key={\`sys-\${s}\`} {...SYSTEM} {...{
          'Hover CTA': 'Explore the system'
        }} href="#" className={PSEUDO[s]} />)}
                    </div>
                </ModeFrame>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Mode × State, for Service Card and System Card.",...t.parameters?.docs?.description}}};export{t as AllVariants,o as Default,a as ServiceGrid,n as System,T as __namedExportsOrder,f as default};
