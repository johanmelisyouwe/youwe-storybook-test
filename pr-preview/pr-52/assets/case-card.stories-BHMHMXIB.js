import{j as e}from"./iframe-Bhg6XAGb.js";import{C as l,a as g}from"./case-card-N4BGJJ2U.js";import{C as v}from"./client-logo-cfXcIiBu.js";import{M as c}from"./mode-frame-CA6KrD6n.js";import{c as y}from"./media-CIA0hqPx.js";import"./preload-helper-PPVm8Dsz.js";import"./asset-sClvoiV0.js";import"./icon-qAUSsq5c.js";import"./card-reveal-8ZbpWhzn.js";import"./cx-BDMMs1jM.js";import"./card-media-BLVjU-7P.js";import"./logo-DiOiuIBJ.js";const d={Rest:"",Hover:"pseudo-hover"},m={"One third":416,"Two thirds":848,Full:1280,"One quarter":308},p={Title:"How a Design System strengthened G-Star’s brand consistency",Client:"G-Star RAW",logo:e.jsx(v,{name:"G-Star"}),image:y("g-star"),stat:{Type:"Single",value:"+43%",label:"marketable catalog uplift"},tags:["Design System","Commerce"],"Hover context":"How G-Star kept its brand consistent"},S=[{Type:"Single",value:"+43%",label:"marketable catalog uplift"},{Type:"Trend",value:"28%",label:"more qualified leads"},{Type:"Before-after",before:"12 days",value:"3 days",label:"order processing time"},{Type:"Stacked",value:"€2.4M",label:"added annual revenue in year one"},{Type:"Pair",value:"17",label:"countries live",value2:"3×",label2:"faster launches"}],z={title:"Components/Case Card",parameters:{layout:"centered",docs:{description:{component:"Case study card. The whole card is one link. Hover/focus: the red panel wipes up from the bottom and its text slides in 40px from the right (duration/card, ease/card)."}}},argTypes:{Size:{control:"inline-radio",options:["One third","Two thirds","Full","One quarter"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]},State:{control:"inline-radio",options:["Rest","Hover"]}},args:{Size:"One third",Device:"Desktop",Mode:"Dark",State:"Rest"},render:({Size:r,Device:a,Mode:t,State:u})=>e.jsx(c,{Mode:t,children:e.jsx("div",{style:{width:a==="Mobile"?336:m[r]},children:e.jsx(l,{...p,Size:r,Device:a,href:"#",className:d[u]})})})},i={},n={args:{State:"Hover"}},s={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, auto)",gap:"var(--spacing-sm)",justifyItems:"start"},children:S.flatMap(r=>["L","M"].map(a=>e.jsx(g,{...r,Size:a},r.Type+a)))})},o={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(c,{Mode:r,children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-lg)",alignItems:"start"},children:["Rest","Hover"].flatMap(a=>[...["One quarter","One third","Two thirds","Full"].map(t=>e.jsx("div",{style:{width:m[t]},children:e.jsx(l,{...p,Size:t,href:"#",className:d[a]})},t+a)),e.jsx("div",{style:{width:336},children:e.jsx(l,{...p,Device:"Mobile",href:"#",className:d[a]})},`m${a}`)])})},r))})},H=["Default","Hover","StatOptions","AllVariants"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    State: 'Hover'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    gap: 'var(--spacing-sm)',
    justifyItems: 'start'
  }}>
            {STATS.flatMap(s => (['L', 'M'] as const).map(z => <CaseStat key={s.Type + z} {...s} Size={z} />))}
        </div>
}`,...s.parameters?.docs?.source},description:{story:"_Case Card/Stat: every Type × Size.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
                        {(['Rest', 'Hover'] as State[]).flatMap(s => [...(['One quarter', 'One third', 'Two thirds', 'Full'] as CaseCardSize[]).map(z => <div key={z + s} style={{
          width: W[z]
        }}>
                                    <CaseCard {...GSTAR} Size={z} href="#" className={PSEUDO[s]} />
                                </div>), <div key={\`m\${s}\`} style={{
          width: 336
        }}>
                                <CaseCard {...GSTAR} Device="Mobile" href="#" className={PSEUDO[s]} />
                            </div>])}
                    </div>
                </ModeFrame>)}
        </div>
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant: Size × Device × Mode × State.",...o.parameters?.docs?.description}}};export{o as AllVariants,i as Default,n as Hover,s as StatOptions,H as __namedExportsOrder,z as default};
