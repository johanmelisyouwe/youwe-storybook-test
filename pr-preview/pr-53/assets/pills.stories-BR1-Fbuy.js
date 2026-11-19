import{j as e}from"./iframe-DJ-hZ8El.js";import{P as l}from"./pills-vB8KmAVJ.js";import{i as y}from"./icon-BNs9bniO.js";import"./preload-helper-PPVm8Dsz.js";import"./cx-BDMMs1jM.js";import"./focus-ring.module-B3VHbehf.js";const m={Rest:"",Hover:"pseudo-hover",Pressed:"pseudo-active",Focused:"pseudo-focus-visible",Disabled:""},f={title:"Components/Pill",component:l,parameters:{layout:"centered",docs:{description:{component:"Small selectable tag used for filter chips or option toggles, with optional icon placement. Motion: hover/active change background and colour (duration/fast, ease/standard)."}}},argTypes:{Variant:{control:"inline-radio",options:["Primary","Neutral"]},State:{control:"inline-radio",options:["Rest","Hover","Pressed","Focused","Disabled"]},Icon:{control:"inline-radio",options:["Leading","Trailing","Off"]},Size:{control:"inline-radio",options:["M","S"]},iconName:{control:"select",options:y},onClick:{action:"click"}},args:{Variant:"Primary",State:"Rest",Icon:"Off",Size:"M",label:"eCommerce"},render:({State:a,...r})=>e.jsx("div",{style:{display:"inline-block",padding:"var(--spacing-xs)"},children:e.jsx(l,{...r,className:m[a],disabled:a==="Disabled"||r.disabled})})},n={},o={args:{Variant:"Primary"}},i={args:{Variant:"Neutral"}},s={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{role:"group","aria-label":"Systems",style:{display:"flex",gap:"var(--spacing-2xs)"},children:["All","eCommerce","Experience","Artificial Intelligence","Digital Marketing"].map((a,r)=>e.jsx(l,{label:a,Variant:r===0?"Primary":"Neutral",pressed:r===0},a))})},p=["Rest","Hover","Pressed","Focused","Disabled"],t={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("table",{style:{borderSpacing:"var(--spacing-sm) var(--spacing-2xs)"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),p.map(a=>e.jsx("th",{className:"yw-body-xs-med",style:{textAlign:"left",color:"var(--color-shared-content-secondary)"},children:a},a))]})}),e.jsx("tbody",{children:["Primary","Neutral"].flatMap(a=>["Off","Leading","Trailing"].flatMap(r=>["M","S"].map(c=>e.jsxs("tr",{children:[e.jsx("td",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",whiteSpace:"nowrap"},children:`${a}, Icon=${r}, Size=${c}`}),p.map(d=>e.jsx("td",{style:{padding:"var(--spacing-3xs)"},children:e.jsx(l,{Variant:a,Icon:r,Size:c,label:"eCommerce",className:m[d],disabled:d==="Disabled"})},d))]},`${a}-${r}-${c}`))))})]})},S=["Default","Primary","Neutral","FilterRow","AllVariants"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Primary'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Neutral'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div role="group" aria-label="Systems" style={{
    display: 'flex',
    gap: 'var(--spacing-2xs)'
  }}>
            {['All', 'eCommerce', 'Experience', 'Artificial Intelligence', 'Digital Marketing'].map((l, i) => <Pills key={l} label={l} Variant={i === 0 ? 'Primary' : 'Neutral'} pressed={i === 0} />)}
        </div>
}`,...s.parameters?.docs?.source},description:{story:"As used in the Figma Filter bar: the selected pill is Primary, the rest Neutral.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <table style={{
    borderSpacing: 'var(--spacing-sm) var(--spacing-2xs)'
  }}>
            <thead>
                <tr>
                    <th />
                    {states.map(s => <th key={s} className="yw-body-xs-med" style={{
          textAlign: 'left',
          color: 'var(--color-shared-content-secondary)'
        }}>
                            {s}
                        </th>)}
                </tr>
            </thead>
            <tbody>
                {(['Primary', 'Neutral'] as const).flatMap(v => (['Off', 'Leading', 'Trailing'] as const).flatMap(i => (['M', 'S'] as const).map(z => <tr key={\`\${v}-\${i}-\${z}\`}>
                                <td className="yw-body-xs-reg" style={{
          color: 'var(--color-shared-content-secondary)',
          whiteSpace: 'nowrap'
        }}>{\`\${v}, Icon=\${i}, Size=\${z}\`}</td>
                                {states.map(s => <td key={s} style={{
          padding: 'var(--spacing-3xs)'
        }}>
                                        <Pills Variant={v} Icon={i} Size={z} label="eCommerce" className={PSEUDO[s]} disabled={s === 'Disabled'} />
                                    </td>)}
                            </tr>)))}
            </tbody>
        </table>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Icon × Size (rows) × State (columns). 60 combinations.",...t.parameters?.docs?.description}}};export{t as AllVariants,n as Default,s as FilterRow,i as Neutral,o as Primary,S as __namedExportsOrder,f as default};
