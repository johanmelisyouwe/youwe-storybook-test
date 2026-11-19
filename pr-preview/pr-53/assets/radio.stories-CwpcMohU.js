import{j as a,r as b}from"./iframe-DJ-hZ8El.js";import{R as d,a as u}from"./radio-HwpiViB-.js";import"./preload-helper-PPVm8Dsz.js";import"./cx-BDMMs1jM.js";const g=["Rest","Hover","Pressed","Focused","Disabled","Active","Active Hover","Active Pressed","Active Focused"],l=e=>/Hover/.test(e)?"pseudo-hover":/Pressed/.test(e)?"pseudo-active":"",p=e=>/Focused/.test(e)?"pseudo-focus-visible":"",x={title:"Components/Radio Button",component:d,parameters:{layout:"centered",docs:{description:{component:"Single-select input for mutually exclusive choices within a group."}}},argTypes:{State:{control:"select",options:g},Size:{control:"inline-radio",options:["M","L"]}},args:{State:"Rest",Size:"M"},render:({State:e,Size:s})=>a.jsx(d,{Size:s,checked:e.startsWith("Active"),"aria-label":"Option",className:l(e),inputClassName:p(e),disabled:e==="Disabled"})},o={},i={args:{Size:"M"}},c={args:{Size:"L"}},r={parameters:{controls:{disable:!0}},render:()=>{const[e,s]=b.useState("Digital Infrastructure");return a.jsxs("fieldset",{style:{border:0,padding:0,display:"grid",gap:"var(--spacing-sm)"},children:[a.jsx("legend",{className:"yw-body-sm-med",style:{marginBottom:"var(--spacing-xs)"},children:"Offering"}),["Digital Infrastructure","Operational Optimization & Intelligence","Foundation for Data & Integrations"].map(n=>a.jsx(u,{name:"offering",value:n,label:n,checked:e===n,onChange:m=>m&&s(m)},n))]})}},t={parameters:{layout:"padded",controls:{disable:!0}},render:()=>a.jsx("table",{style:{borderSpacing:"var(--spacing-xl) var(--spacing-sm)"},children:a.jsx("tbody",{children:g.map(e=>a.jsxs("tr",{children:[a.jsx("td",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)"},children:e}),["M","L"].map(s=>a.jsx("td",{children:a.jsx(d,{Size:s,checked:e.startsWith("Active"),"aria-label":`${e} ${s}`,className:l(e),inputClassName:p(e),disabled:e==="Disabled"})},s)),a.jsx("td",{children:a.jsx(u,{label:"Digital Infrastructure",checked:e.startsWith("Active"),className:l(e),inputClassName:p(e),disabled:e==="Disabled"})})]},e))})})},S=["Default","M","L","Group","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'M'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'L'
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('Digital Infrastructure');
    return <fieldset style={{
      border: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--spacing-sm)'
    }}>
                <legend className="yw-body-sm-med" style={{
        marginBottom: 'var(--spacing-xs)'
      }}>
                    Offering
                </legend>
                {['Digital Infrastructure', 'Operational Optimization & Intelligence', 'Foundation for Data & Integrations'].map(o => <RadioLabel key={o} name="offering" value={o} label={o} checked={v === o} onChange={x => x && setV(x)} />)}
            </fieldset>;
  }
}`,...r.parameters?.docs?.source},description:{story:"A working group with labels (Radio button label).",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <table style={{
    borderSpacing: 'var(--spacing-xl) var(--spacing-sm)'
  }}>
            <tbody>
                {STATES.map(s => <tr key={s}>
                        <td className="yw-body-xs-reg" style={{
          color: 'var(--color-shared-content-secondary)'
        }}>
                            {s}
                        </td>
                        {(['M', 'L'] as const).map(z => <td key={z}>
                                <Radio Size={z} checked={s.startsWith('Active')} aria-label={\`\${s} \${z}\`} className={pseudo(s)} inputClassName={focus(s)} disabled={s === 'Disabled'} />
                            </td>)}
                        <td>
                            <RadioLabel label="Digital Infrastructure" checked={s.startsWith('Active')} className={pseudo(s)} inputClassName={focus(s)} disabled={s === 'Disabled'} />
                        </td>
                    </tr>)}
            </tbody>
        </table>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Radio button (State × Size, 18) and Radio button label (State, 9).",...t.parameters?.docs?.description}}};export{t as AllVariants,o as Default,r as Group,c as L,i as M,S as __namedExportsOrder,x as default};
