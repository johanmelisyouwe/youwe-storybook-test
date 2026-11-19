import{j as s,r as g}from"./iframe-RIzWv_pe.js";import{T as c}from"./toggle-CRWbkzuk.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-DifRw7KX.js";import"./cx-BDMMs1jM.js";import"./focus-ring.module-B3VHbehf.js";const d={Rest:"",Hover:"pseudo-hover",Focused:"pseudo-focus-visible",Disabled:""},D={title:"Components/Toggle",component:c,parameters:{layout:"centered",docs:{description:{component:"On/off switch for a binary setting. Motion: knob slides (duration/base, ease/emphasized); track colour (duration/base, ease/standard). Figma has no disabled-on variant."}}},argTypes:{State:{control:"inline-radio",options:["Rest","Hover","Focused","Disabled"]},Size:{control:"inline-radio",options:["M","L"]},Active:{control:"inline-radio",options:["No","Yes"]}},args:{State:"Rest",Size:"M",Active:"No",label:"Toggle"},render:({State:a,Active:r,...e})=>{const[p,m]=g.useState(r==="Yes"),l=a==="Disabled";return s.jsx(c,{...e,Active:l?"No":p?"Yes":"No",onChange:m,className:d[a],disabled:l})}},t={},n={args:{Size:"M"}},i={args:{Size:"L"}},o={parameters:{controls:{disable:!0}},render:()=>s.jsx("table",{style:{borderSpacing:"var(--spacing-lg) var(--spacing-sm)"},children:s.jsx("tbody",{children:["M","L"].flatMap(a=>["No","Yes"].map(r=>s.jsxs("tr",{children:[s.jsx("td",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)"},children:`Size=${a}, Active=${r}`}),["Rest","Hover","Focused","Disabled"].map(e=>s.jsx("td",{children:e==="Disabled"&&r==="Yes"?null:s.jsx(c,{Size:a,Active:r,label:`${e} toggle`,className:d[e],disabled:e==="Disabled"})},e))]},a+r)))})})},z=["Default","M","L","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'M'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'L'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <table style={{
    borderSpacing: 'var(--spacing-lg) var(--spacing-sm)'
  }}>
            <tbody>
                {(['M', 'L'] as const).flatMap(z => (['No', 'Yes'] as const).map(a => <tr key={z + a}>
                            <td className="yw-body-xs-reg" style={{
          color: 'var(--color-shared-content-secondary)'
        }}>{\`Size=\${z}, Active=\${a}\`}</td>
                            {(['Rest', 'Hover', 'Focused', 'Disabled'] as State[]).map(s => <td key={s}>
                                    {s === 'Disabled' && a === 'Yes' ? null : <Toggle Size={z} Active={a} label={\`\${s} toggle\`} className={PSEUDO[s]} disabled={s === 'Disabled'} />}
                                </td>)}
                        </tr>))}
            </tbody>
        </table>
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant (14): Size × Active × State; Disabled exists only for Active=No.",...o.parameters?.docs?.description}}};export{o as AllVariants,t as Default,i as L,n as M,z as __namedExportsOrder,D as default};
