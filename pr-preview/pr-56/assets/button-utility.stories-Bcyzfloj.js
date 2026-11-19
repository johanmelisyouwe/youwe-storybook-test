import{j as n}from"./iframe-CBcYq4hM.js";import{B as i}from"./button-utility-Ce7XzBfr.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-DPzqSC0C.js";import"./cx-BDMMs1jM.js";const c={Rest:"",Hover:"pseudo-hover",Focused:"pseudo-focus-visible"},S={title:"Components/Buttons/Utility",component:i,parameters:{layout:"centered",docs:{description:{component:"Compact secondary button for utility or contextual actions (close), where space is constrained."}}},argTypes:{State:{control:"inline-radio",options:["Rest","Hover","Focused"]},Size:{control:"inline-radio",options:["M","S"]},onClick:{action:"click"}},args:{State:"Rest",Size:"M",label:"Close"},render:({State:s,...r})=>n.jsx(i,{...r,className:c[s]})},a={},t={args:{Size:"M"}},o={args:{Size:"S"}},e={parameters:{controls:{disable:!0}},render:()=>n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto)",gap:"var(--spacing-lg)",alignItems:"center"},children:["M","S"].flatMap(s=>["Rest","Hover","Focused"].map(r=>n.jsx(i,{Size:s,label:"Close",className:c[r]},s+r)))})},g=["Default","M","S","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'M'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'S'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    gap: 'var(--spacing-lg)',
    alignItems: 'center'
  }}>
            {(['M', 'S'] as const).flatMap(z => (['Rest', 'Hover', 'Focused'] as State[]).map(s => <ButtonUtility key={z + s} Size={z} label="Close" className={PSEUDO[s]} />))}
        </div>
}`,...e.parameters?.docs?.source},description:{story:"Every Figma variant: Size × State.",...e.parameters?.docs?.description}}};export{e as AllVariants,a as Default,t as M,o as S,g as __namedExportsOrder,S as default};
