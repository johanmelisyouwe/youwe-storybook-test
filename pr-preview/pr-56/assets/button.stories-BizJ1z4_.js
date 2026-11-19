import{j as a}from"./iframe-Ceyw_MnB.js";import{B as l}from"./button-BWOcu698.js";import{i as g}from"./icon-B8YMNobs.js";import"./preload-helper-PPVm8Dsz.js";import"./cx-BDMMs1jM.js";const m={Rest:"",Hover:"pseudo-hover",Pressed:"pseudo-active",Focused:"pseudo-focus-visible",Disabled:""},y=({State:s,...e})=>a.jsx("div",{style:{display:"inline-block",padding:"var(--spacing-xs)"},children:a.jsx(l,{...e,className:m[s],disabled:s==="Disabled"||e.disabled})}),w={title:"Components/Buttons/Basic",component:l,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6284-4476"},docs:{description:{component:"Primary button with three visual variants, four sizes and optional leading, trailing or icon-only configuration. Motion: hover changes background and colour (duration/fast, ease/standard); the trailing icon nudges forward (duration/base, ease/emphasized). No scaling. Focus ring: shared/border/system/focus."}}},argTypes:{Variant:{control:"inline-radio",options:["Primary","Outline","Solid"]},Icon:{control:"inline-radio",options:["Off","Leading","Trailing","Only"]},State:{control:"inline-radio",options:["Rest","Hover","Pressed","Focused","Disabled"]},Size:{control:"inline-radio",options:["XS","S","M","L"]},iconName:{control:"select",options:g},icon:{control:!1},onClick:{action:"click"}},args:{Variant:"Primary",Icon:"Off",State:"Rest",Size:"L",label:"Get in touch",iconName:"shopping-basket"},render:y},r={},o={args:{Variant:"Primary"}},t={args:{Variant:"Outline"}},i={args:{Variant:"Solid"}},u=["Primary","Outline","Solid"],h=["Off","Leading","Trailing","Only"],x=["L","M","S","XS"],p=["Rest","Hover","Pressed","Focused","Disabled"],n={parameters:{layout:"padded",controls:{disable:!0}},render:()=>a.jsx("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:u.map(s=>a.jsxs("section",{children:[a.jsx("h3",{className:"yw-heading-sm",style:{marginBottom:"var(--spacing-sm)"},children:s}),a.jsxs("table",{style:{borderSpacing:"var(--spacing-sm) var(--spacing-2xs)"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{}),p.map(e=>a.jsx("th",{className:"yw-body-xs-med",style:{textAlign:"left",color:"var(--color-shared-content-secondary)"},children:e},e))]})}),a.jsx("tbody",{children:h.flatMap(e=>x.map(c=>a.jsxs("tr",{children:[a.jsx("td",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",whiteSpace:"nowrap"},children:`Icon=${e}, Size=${c}`}),p.map(d=>a.jsx("td",{style:{padding:"var(--spacing-3xs)"},children:a.jsx(l,{Variant:s,Icon:e,Size:c,label:"Get in touch",className:m[d],disabled:d==="Disabled"})},d))]},`${e}-${c}`)))})]})]},s))})},P=["Default","Primary","Outline","Solid","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Primary'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Outline'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Solid'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-xl)'
  }}>
            {variants.map(v => <section key={v}>
                    <h3 className="yw-heading-sm" style={{
        marginBottom: 'var(--spacing-sm)'
      }}>
                        {v}
                    </h3>
                    <table style={{
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
                            {icons.flatMap(i => sizes.map(z => <tr key={\`\${i}-\${z}\`}>
                                        <td className="yw-body-xs-reg" style={{
              color: 'var(--color-shared-content-secondary)',
              whiteSpace: 'nowrap'
            }}>{\`Icon=\${i}, Size=\${z}\`}</td>
                                        {states.map(s => <td key={s} style={{
              padding: 'var(--spacing-3xs)'
            }}>
                                                <Button Variant={v} Icon={i} Size={z} label="Get in touch" className={PSEUDO[s]} disabled={s === 'Disabled'} />
                                            </td>)}
                                    </tr>))}
                        </tbody>
                    </table>
                </section>)}
        </div>
}`,...n.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Icon × Size (rows) × State (columns). 240 combinations, all exist in Figma.",...n.parameters?.docs?.description}}};export{n as AllVariants,r as Default,t as Outline,o as Primary,i as Solid,P as __namedExportsOrder,w as default};
