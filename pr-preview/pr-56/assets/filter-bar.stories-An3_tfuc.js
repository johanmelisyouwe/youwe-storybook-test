import{j as e}from"./iframe-Ceyw_MnB.js";import{F as l}from"./filter-bar-Ck9wBVRN.js";import{M as m}from"./mode-frame-DKh65ZYG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtE9JcUf.js";import"./dropdown-DfTByJJS.js";import"./icon-B8YMNobs.js";import"./field-B3CbaUQD.js";import"./cx-BDMMs1jM.js";import"./field.module-CGPLDjcs.js";import"./options-panel-CKFTUfoI.js";import"./use-listbox-D-xGjt6G.js";import"./pills-Dil9VfkW.js";import"./focus-ring.module-B3VHbehf.js";import"./button-filter-Buobpq3L.js";import"./button-BWOcu698.js";import"./filter-bar.module-CkVaOauI.js";const p=["eCommerce","Experience","Artificial Intelligence","Digital Marketing"],o=(...s)=>s.map(t=>({value:t,label:t})),d=[{label:"Industries",options:o("Manufacturing","Wholesale","Retail","Food & beverage")},{label:"Offering",options:o("Strategy","Design","Development","Growth")},{label:"Themes",options:o("B2B","Composable","Personalisation")},{label:"Platforms",options:o("Adobe Commerce","Hyvä","Shopware","Pimcore")},{label:"Technologies",options:o("Alumio","Algolia","Akeneo")}],c={Desktop:1280,Mobile:360},I={title:"Content blocks/Filter bar",parameters:{layout:"fullscreen",docs:{description:{component:"Overview filters: system tiles and five dropdowns on desktop; system pills, a Filters button and a bottom sheet on mobile. Motion: the sheet slides up (duration/slow, ease/emphasized)."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},State:{control:"inline-radio",options:["Default","Open"],description:"Open is Mobile only (the bottom sheet)"}},args:{Device:"Desktop",State:"Default"},render:({Device:s="Desktop",State:t})=>e.jsx(m,{Mode:"Dark",padding:s==="Desktop"?80:12,children:e.jsx("div",{style:{maxWidth:c[s]},children:e.jsx(l,{Device:s,State:t,systems:p,fields:d,count:9,inline:!0},`${s}-${t}`)})})},r={},n={args:{Device:"Mobile"}},a={args:{Device:"Mobile",State:"Open"}},i={parameters:{controls:{disable:!0}},render:()=>e.jsx(m,{Mode:"Dark",padding:24,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2xl)",alignItems:"start"},children:[e.jsx("div",{style:{width:1280,flexShrink:0},children:e.jsx(l,{systems:p,system:"eCommerce",fields:d,count:9})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(l,{Device:"Mobile",systems:p,fields:d,count:9})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(l,{Device:"Mobile",State:"Open",systems:p,fields:d,count:9,inline:!0})})]})})},A=["Desktop","Mobile","MobileOpen","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile',
    State: 'Open'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ModeFrame Mode="Dark" padding={24}>
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-2xl)',
      alignItems: 'start'
    }}>
                <div style={{
        width: 1280,
        flexShrink: 0
      }}>
                    <FilterBar systems={SYSTEMS} system="eCommerce" fields={FIELDS} count={9} />
                </div>
                <div style={{
        width: 360,
        flexShrink: 0
      }}>
                    <FilterBar Device="Mobile" systems={SYSTEMS} fields={FIELDS} count={9} />
                </div>
                <div style={{
        width: 360,
        flexShrink: 0
      }}>
                    <FilterBar Device="Mobile" State="Open" systems={SYSTEMS} fields={FIELDS} count={9} inline />
                </div>
            </div>
        </ModeFrame>
}`,...i.parameters?.docs?.source},description:{story:"Every Figma variant: Desktop Default, Mobile Default, Mobile Open (3).",...i.parameters?.docs?.description}}};export{i as AllVariants,r as Desktop,n as Mobile,a as MobileOpen,A as __namedExportsOrder,I as default};
