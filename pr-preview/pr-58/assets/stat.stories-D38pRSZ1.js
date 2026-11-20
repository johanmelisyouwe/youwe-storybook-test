import{j as e}from"./iframe-D5umqaB_.js";import{S as a,a as u}from"./stat-D1Y3rlTC.js";import{C as v}from"./client-logo-CEpYfJXq.js";import{M as c}from"./mode-frame-winMAjuD.js";import"./preload-helper-PPVm8Dsz.js";import"./asset-CFtxCGC7.js";import"./card-reveal-l_pU7Vnh.js";import"./icon-4kAYFwTI.js";import"./cx-BDMMs1jM.js";import"./card-media-lPeWeEze.js";import"./logo-C435U_SZ.js";import"./media-CIA0hqPx.js";const y={L:320,M:336},m=[{Value:"25",Label:"Years building digital commerce"},{Value:"900+",Label:"Projects delivered since 2000"},{Value:"250+",Label:"Specialists across every digital discipline"},{Value:"8",Label:"Offices in the Netherlands, the UK, Sweden, Indonesia and Ukraine"}],p={Value:"+43%",Label:"Marketable catalog uplift",logo:e.jsx(v,{name:"G-Star",width:80}),href:"#",context:"G-Star"},k={title:"Components/Stat",parameters:{layout:"centered",docs:{description:{component:"Single stat. Type=Client adds a client logo and round arrow link. Rows use a -1px gap so borders overlap. Motion: count up on scroll (1.6s ease-out, once) with `countUp`."}}},argTypes:{Type:{control:"inline-radio",options:["Client","Plain"]},Size:{control:"inline-radio",options:["L","M"]},Mode:{control:"inline-radio",options:["Dark","Light"]},State:{control:"inline-radio",options:["Rest","Hover"],description:"Type=Client only"}},args:{Type:"Plain",Size:"L",Mode:"Dark",State:"Rest"},render:({Type:r,Size:t="L",Mode:n,State:g})=>e.jsx(c,{Mode:n,children:e.jsx("div",{style:{width:y[t]},children:r==="Client"?e.jsx(a,{Type:"Client",Size:t,...p,className:g==="Hover"?"pseudo-hover":void 0}):e.jsx(a,{Size:t,...m[1]})})})},l={},d={args:{Type:"Client"}},o={parameters:{layout:"padded",controls:{include:["Mode"]}},render:({Mode:r})=>e.jsx(c,{Mode:r,children:e.jsx(u,{children:m.map(t=>e.jsx(a,{...t,countUp:!0},t.Value))})})},s={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(c,{Mode:r,children:e.jsx("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:["Client","Plain"].flatMap(t=>["L","M"].map(n=>e.jsx("div",{style:{width:y[n]},children:t==="Client"?e.jsx(a,{Type:"Client",Size:n,...p}):e.jsx(a,{Size:n,...m[0]})},t+n)))})},r))})},i={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{width:640},children:e.jsxs(u,{children:[e.jsx(a,{Type:"Client",...p}),e.jsx(a,{Type:"Client",...p,className:"pseudo-hover"})]})})},U=["Default","Client","Row","AllVariants","Hover"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    Type: 'Client'
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode}>
            <StatRow>
                {ABOUT.map(s => <Stat key={s.Value} {...s} countUp />)}
            </StatRow>
        </ModeFrame>
}`,...o.parameters?.docs?.source},description:{story:"A row of four (About Us), counting up when scrolled into view.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                        {(['Client', 'Plain'] as const).flatMap(t => (['L', 'M'] as const).map(z => <div key={t + z} style={{
          width: W[z]
        }}>
                                    {t === 'Client' ? <Stat Type="Client" Size={z} {...CLIENT} /> : <Stat Size={z} {...ABOUT[0]} />}
                                </div>))}
                    </div>
                </ModeFrame>)}
        </div>
}`,...s.parameters?.docs?.source},description:{story:"Every Figma variant: Type × Size × Mode.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 640
  }}>
            <StatRow>
                <Stat Type="Client" {...CLIENT} />
                <Stat Type="Client" {...CLIENT} className="pseudo-hover" />
            </StatRow>
        </div>
}`,...i.parameters?.docs?.source},description:{story:"Client stat: State=Rest and State=Hover (whole card is the link).",...i.parameters?.docs?.description}}};export{s as AllVariants,d as Client,l as Default,i as Hover,o as Row,U as __namedExportsOrder,k as default};
