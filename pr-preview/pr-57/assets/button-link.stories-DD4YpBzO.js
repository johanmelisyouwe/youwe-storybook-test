import{j as n}from"./iframe-YLxJkV3Y.js";import{B as i}from"./button-link-CLDG0YUI.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-kvpOkNOe.js";import"./cx-BDMMs1jM.js";const g={title:"Components/Buttons/Link",component:i,parameters:{layout:"centered"},argTypes:{Size:{control:"inline-radio",options:["lg","md","sm"]},onClick:{action:"click"}},args:{Size:"md",label:"Explore the system",href:"#"}},r={},s={args:{Size:"lg"}},a={args:{Size:"md"}},t={args:{Size:"sm"}},e={parameters:{controls:{disable:!0}},render:()=>n.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)",justifyItems:"start"},children:["lg","md","sm"].map(o=>n.jsx(i,{Size:o,label:"Explore the system",href:"#"},o))})},u=["Default","Lg","Md","Sm","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'lg'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'md'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'sm'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)',
    justifyItems: 'start'
  }}>
            {(['lg', 'md', 'sm'] as const).map(z => <ButtonLink key={z} Size={z} label="Explore the system" href="#" />)}
        </div>
}`,...e.parameters?.docs?.source},description:{story:"Every Figma variant (Size).",...e.parameters?.docs?.description}}};export{e as AllVariants,r as Default,s as Lg,a as Md,t as Sm,u as __namedExportsOrder,g as default};
