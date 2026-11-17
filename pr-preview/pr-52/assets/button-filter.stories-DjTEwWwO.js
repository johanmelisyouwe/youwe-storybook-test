import{j as e}from"./iframe-Bhg6XAGb.js";import{B as d}from"./button-filter-CctQGN4v.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-qAUSsq5c.js";import"./cx-BDMMs1jM.js";import"./focus-ring.module-B3VHbehf.js";const l={Rest:"",Hover:"pseudo-hover",Pressed:"pseudo-active",Focused:"pseudo-focus-visible",Disabled:""},v={title:"Components/Buttons/Filter",component:d,parameters:{layout:"centered",docs:{description:{component:"Button used to represent or trigger filter actions. The counter shows how many filters are active."}}},argTypes:{State:{control:"inline-radio",options:["Rest","Disabled","Focused","Hover","Pressed"]},Size:{control:"inline-radio",options:["M","S","L"]},"Active Filter":{control:"boolean"},count:{control:{type:"number",min:0,max:99}},onClick:{action:"click"}},args:{State:"Rest",Size:"M","Active Filter":!0,count:1,label:"Filters"},render:({State:r,...s})=>e.jsx("div",{style:{padding:"var(--spacing-xs)"},children:e.jsx(d,{...s,className:l[r],disabled:r==="Disabled"||s.disabled})})},t={},o={args:{Size:"M"}},n={args:{Size:"S"}},c={args:{Size:"L"}},i={args:{"Active Filter":!1}},p=["Rest","Hover","Pressed","Focused","Disabled"],a={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("table",{style:{borderSpacing:"var(--spacing-sm)"},children:e.jsx("tbody",{children:["L","M","S"].map(r=>e.jsxs("tr",{children:[e.jsx("td",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)"},children:`Size=${r}`}),p.map(s=>e.jsx("td",{children:e.jsx(d,{Size:r,label:"Filters",className:l[s],disabled:s==="Disabled"})},s))]},r))})})},x=["Default","M","S","L","NoActiveFilters","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'M'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'S'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'L'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    'Active Filter': false
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <table style={{
    borderSpacing: 'var(--spacing-sm)'
  }}>
            <tbody>
                {(['L', 'M', 'S'] as const).map(z => <tr key={z}>
                        <td className="yw-body-xs-reg" style={{
          color: 'var(--color-shared-content-secondary)'
        }}>{\`Size=\${z}\`}</td>
                        {states.map(s => <td key={s}>
                                <ButtonFilter Size={z} label="Filters" className={PSEUDO[s]} disabled={s === 'Disabled'} />
                            </td>)}
                    </tr>)}
            </tbody>
        </table>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Size (rows) × State (columns).",...a.parameters?.docs?.description}}};export{a as AllVariants,t as Default,c as L,o as M,i as NoActiveFilters,n as S,x as __namedExportsOrder,v as default};
