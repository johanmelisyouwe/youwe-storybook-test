import{j as e}from"./iframe-RIzWv_pe.js";import{T as d}from"./technology-card-tX2ZOnmK.js";import{M as l}from"./mode-frame-6HDYIqWE.js";import{L as g}from"./logo-DHvHftEN.js";import"./youwe-logo-DcJczzLT.js";import"./client-logo-BbqS7qZy.js";import{l as u}from"./media-CIA0hqPx.js";import"./preload-helper-PPVm8Dsz.js";import"./asset-Uklxo8LF.js";import"./card-reveal-al4UTiZv.js";import"./icon-DifRw7KX.js";import"./cx-BDMMs1jM.js";import"./card-media-CdJfsXN_.js";const p={Rest:"",Hover:"pseudo-hover"},y=r=>({...r,logo:u(r.Name,"partner")?e.jsx(g,{name:r.Name,kind:"partner",width:120}):void 0}),c=[{Name:"Databricks",Description:"Governed data engineering, analytics and AI."},{Name:"Microsoft Fabric",Description:"A governed Microsoft data foundation."},{Name:"Pimcore",Level:"Strategic Partner"},{Name:"Shopify Plus",Level:"Certified Partner"}].map(y),m={Horizontal:448,Vertical:292},R={title:"Components/Technology Card",parameters:{layout:"centered",docs:{description:{component:"Technology partner card. Horizontal for 2-column lists, Vertical for grids. The logo sits left in its 120×40 slot with no background and takes the content colour of the mode. Hover/focus: red reveal (duration/card, ease/card)."}}},argTypes:{Layout:{control:"inline-radio",options:["Horizontal","Vertical"]},Mode:{control:"inline-radio",options:["Dark","Light"]},State:{control:"inline-radio",options:["Rest","Hover"]}},args:{Layout:"Horizontal",Mode:"Dark",State:"Rest"},render:({Layout:r="Horizontal",Mode:a,State:s})=>e.jsx(l,{Mode:a,children:e.jsx("div",{style:{width:m[r]},children:e.jsx(d,{...c[0],Layout:r,href:"#",className:p[s]})})})},n={},i={args:{Layout:"Vertical"}},o={parameters:{layout:"padded",controls:{include:["Mode"]}},render:({Mode:r})=>e.jsx(l,{Mode:r,children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 448px)",gap:"var(--spacing-sm)"},children:c.map(a=>e.jsx(d,{...a,href:"#"},a.Name))})})},t={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(l,{Mode:r,children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-lg)",alignItems:"start"},children:["Horizontal","Vertical"].flatMap(a=>["Rest","Hover"].map(s=>e.jsx("div",{style:{width:m[a]},children:e.jsx(d,{...c[0],Layout:a,href:"#",className:p[s]})},a+s)))})},r))})},k=["Default","Vertical","PartnerList","AllVariants"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Vertical'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      gridTemplateColumns: 'repeat(2, 448px)',
      gap: 'var(--spacing-sm)'
    }}>
                {PARTNERS.map(p => <TechnologyCard key={p.Name} {...p} href="#" />)}
            </div>
        </ModeFrame>
}`,...o.parameters?.docs?.source},description:{story:"Partners overview: Horizontal cards in two columns.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
                        {(['Horizontal', 'Vertical'] as const).flatMap(l => (['Rest', 'Hover'] as State[]).map(s => <div key={l + s} style={{
          width: W[l]
        }}>
                                    <TechnologyCard {...PARTNERS[0]} Layout={l} href="#" className={PSEUDO[s]} />
                                </div>))}
                    </div>
                </ModeFrame>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Layout × Mode × State.",...t.parameters?.docs?.description}}};export{t as AllVariants,n as Default,o as PartnerList,i as Vertical,k as __namedExportsOrder,R as default};
