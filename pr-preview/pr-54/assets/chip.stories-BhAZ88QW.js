import{j as l}from"./iframe-RIzWv_pe.js";import{c as d}from"./cx-BDMMs1jM.js";import"./preload-helper-PPVm8Dsz.js";const u="_root_1jjib_11",v={root:u};function c({Variant:r="Positive",Size:e="M",label:p,className:m}){return l.jsx("span",{"data-variant":r.toLowerCase(),"data-size":e.toLowerCase(),className:d(v.root,e==="M"?"yw-body-md-med":"yw-body-xs-med",m),children:p})}c.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{Variant:{required:!1,tsType:{name:"union",raw:"'Positive' | 'Caution' | 'Negative' | 'Info'",elements:[{name:"literal",value:"'Positive'"},{name:"literal",value:"'Caution'"},{name:"literal",value:"'Negative'"},{name:"literal",value:"'Info'"}]},description:"Figma: Variant",defaultValue:{value:"'Positive'",computed:!1}},Size:{required:!1,tsType:{name:"union",raw:"'M' | 'S'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'S'"}]},description:"Figma: Size",defaultValue:{value:"'M'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/Chips",component:c,parameters:{layout:"centered"},argTypes:{Variant:{control:"inline-radio",options:["Positive","Caution","Negative","Info"]},Size:{control:"inline-radio",options:["M","S"]}},args:{Variant:"Positive",Size:"M",label:"Positive"}},t={},s={args:{Variant:"Positive",label:"Positive"}},i={args:{Variant:"Caution",label:"Caution"}},o={args:{Variant:"Negative",label:"Negative"}},n={args:{Variant:"Info",label:"Info"}},a={parameters:{controls:{disable:!0}},render:()=>l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, auto)",gap:"var(--spacing-sm)",alignItems:"center"},children:["M","S"].flatMap(r=>["Positive","Caution","Negative","Info"].map(e=>l.jsx(c,{Variant:e,Size:r,label:e},e+r)))})},V=["Default","Positive","Caution","Negative","Info","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Positive',
    label: 'Positive'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Caution',
    label: 'Caution'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Negative',
    label: 'Negative'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Info',
    label: 'Info'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: 'var(--spacing-sm)',
    alignItems: 'center'
  }}>
            {(['M', 'S'] as const).flatMap(z => (['Positive', 'Caution', 'Negative', 'Info'] as const).map(v => <Chip key={v + z} Variant={v} Size={z} label={v} />))}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Size.",...a.parameters?.docs?.description}}};export{a as AllVariants,i as Caution,t as Default,n as Info,o as Negative,s as Positive,V as __namedExportsOrder,y as default};
