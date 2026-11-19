import{j as r}from"./iframe-B4H4D0rs.js";import{C as u}from"./compact-dropdown-Dbskyzmy.js";import{M as c}from"./mode-frame-v5sto56E.js";import"./preload-helper-PPVm8Dsz.js";import"./cx-BDMMs1jM.js";import"./icon-BnH5x8Cc.js";import"./field.module-CGPLDjcs.js";const l=["Rest","Hover","Active","Filled","Filled Hover","Disabled","Focused","Success","Error"],g=[12,24,48];function p({State:e,Size:s,Hint:o}){const d=!["Rest","Hover","Focused","Active"].includes(e),m={Hover:"pseudo-hover","Filled Hover":"pseudo-hover",Focused:"pseudo-focus-within",Active:"pseudo-focus-within"}[e];return r.jsx(u,{Size:s,Hint:o,"Hint text":e==="Error"?"Choose a number":e==="Success"?"Saved":"Items per page",options:g,placeholder:d?void 0:"",defaultValue:d?12:void 0,status:e==="Success"?"Success":e==="Error"?"Error":void 0,disabled:e==="Disabled",controlClassName:m,"aria-label":"Items per page"},e)}const H={title:"Components/Input/Compact dropdown",parameters:{layout:"centered",docs:{description:{component:'Small number picker without a label, e.g. "View max. 12 per page" in Pagination. Native select, field states from the input fields (hover, focus, success, error, disabled).'}}},argTypes:{State:{control:"select",options:l},Size:{control:"inline-radio",options:["M","S"]},Hint:{control:"boolean"},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{State:"Filled",Size:"M",Hint:!1,Mode:"Dark"},render:({Mode:e,...s})=>r.jsx(c,{Mode:e,padding:32,children:r.jsx(p,{...s})})},a={},n={args:{Size:"S"}},t={args:{Hint:!0}},i={parameters:{controls:{include:["Mode"]}},render:({Mode:e})=>r.jsx(c,{Mode:e,padding:32,children:r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(9, auto)",gap:"var(--spacing-md)",alignItems:"start"},children:["M","S"].flatMap(s=>l.map(o=>r.jsxs("div",{style:{display:"grid",gap:"var(--spacing-2xs)"},children:[r.jsx("span",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)"},children:`${o}, ${s}`}),r.jsx(p,{State:o,Size:s,Hint:o==="Error"||o==="Success"})]},s+o)))})})},E=["Default","Small","WithHint","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'S'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    Hint: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode} padding={32}>
            <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(9, auto)',
      gap: 'var(--spacing-md)',
      alignItems: 'start'
    }}>
                {(['M', 'S'] as const).flatMap(Size => STATES.map(State => <div key={Size + State} style={{
        display: 'grid',
        gap: 'var(--spacing-2xs)'
      }}>
                            <span className="yw-body-xs-reg" style={{
          color: 'var(--color-shared-content-secondary)'
        }}>{\`\${State}, \${Size}\`}</span>
                            <Example State={State} Size={Size} Hint={State === 'Error' || State === 'Success'} />
                        </div>))}
            </div>
        </ModeFrame>
}`,...i.parameters?.docs?.source}}};export{i as AllVariants,a as Default,n as Small,t as WithHint,E as __namedExportsOrder,H as default};
