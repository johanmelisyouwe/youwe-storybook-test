import{j as s,r as h}from"./iframe-zwtNqTkm.js";import{C as b,a as S}from"./checkbox-DGLoz9mR.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-DeIsMOez.js";import"./cx-BDMMs1jM.js";const m={Rest:"",Hover:"pseudo-hover",Pressed:"pseudo-active",Focused:"",Disabled:"",Indeterminate:""},p=e=>e==="Focused"?"pseudo-focus-visible":"",D={title:"Components/Checkbox",component:b,parameters:{layout:"centered",docs:{description:{component:"Binary selection input, standalone (Checkbox) or with a label (Checkbox label). Indeterminate exists only checked; Disabled only unchecked (as in Figma)."}}},argTypes:{Active:{control:"inline-radio",options:["No","Yes"]},State:{control:"inline-radio",options:["Rest","Hover","Pressed","Focused","Disabled","Indeterminate"]},Size:{control:"inline-radio",options:["S","M","L"]}},args:{Active:"No",State:"Rest",Size:"M",label:"Manufacturing"},render:({State:e,Active:a,label:n,...t})=>{const[x,g]=h.useState(a==="Yes");return s.jsx(S,{...t,label:n,Active:e==="Disabled"?"No":x?"Yes":"No",onChange:g,className:m[e],inputClassName:p(e),disabled:e==="Disabled"})}},i={},o={args:{Size:"S"}},c={args:{Size:"M"}},l={args:{Size:"L"}},d={render:({State:e,Active:a,Size:n})=>s.jsx(b,{Size:n,Active:a,indeterminate:e==="Indeterminate","aria-label":"Manufacturing",className:m[e],inputClassName:p(e),disabled:e==="Disabled"})},u=["Rest","Hover","Pressed","Focused","Indeterminate","Disabled"],y=(e,a)=>!(e==="Yes"&&a==="Disabled")&&!(e==="No"&&a==="Indeterminate"),r={parameters:{layout:"padded",controls:{disable:!0}},render:()=>s.jsx("div",{style:{display:"grid",gap:"var(--spacing-2xl)"},children:[!1,!0].map(e=>s.jsxs("table",{style:{borderSpacing:"var(--spacing-lg) var(--spacing-sm)"},children:[s.jsx("caption",{className:"yw-heading-sm",style:{textAlign:"left"},children:e?"Checkbox label":"Checkbox"}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{}),u.filter(a=>!(e&&a==="Indeterminate")).map(a=>s.jsx("th",{className:"yw-body-xs-med",style:{textAlign:"left",color:"var(--color-shared-content-secondary)"},children:a},a))]})}),s.jsx("tbody",{children:["No","Yes"].flatMap(a=>["S","M","L"].map(n=>s.jsxs("tr",{children:[s.jsx("td",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)"},children:`Active=${a}, Size=${n}`}),u.filter(t=>!(e&&t==="Indeterminate")).map(t=>s.jsx("td",{children:y(a,t)&&(e?s.jsx(S,{Size:n,Active:a,label:"Manufacturing",className:m[t],inputClassName:p(t),disabled:t==="Disabled"}):s.jsx(b,{Size:n,Active:a,indeterminate:t==="Indeterminate","aria-label":"Manufacturing",className:m[t],inputClassName:p(t),disabled:t==="Disabled"}))},t))]},a+n)))})]},String(e)))})},k=["Default","S","M","L","Standalone","AllVariants"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'S'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'M'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    Size: 'L'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ({
    State,
    Active,
    Size
  }) => <Checkbox Size={Size} Active={Active} indeterminate={State === 'Indeterminate'} aria-label="Manufacturing" className={PSEUDO[State]} inputClassName={FOCUS(State)} disabled={State === 'Disabled'} />
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-2xl)'
  }}>
            {[false, true].map(labelled => <table key={String(labelled)} style={{
      borderSpacing: 'var(--spacing-lg) var(--spacing-sm)'
    }}>
                    <caption className="yw-heading-sm" style={{
        textAlign: 'left'
      }}>
                        {labelled ? 'Checkbox label' : 'Checkbox'}
                    </caption>
                    <thead>
                        <tr>
                            <th />
                            {STATES.filter(s => !(labelled && s === 'Indeterminate')).map(s => <th key={s} className="yw-body-xs-med" style={{
            textAlign: 'left',
            color: 'var(--color-shared-content-secondary)'
          }}>
                                    {s}
                                </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {(['No', 'Yes'] as const).flatMap(a => (['S', 'M', 'L'] as const).map(z => <tr key={a + z}>
                                    <td className="yw-body-xs-reg" style={{
            color: 'var(--color-shared-content-secondary)'
          }}>{\`Active=\${a}, Size=\${z}\`}</td>
                                    {STATES.filter(s => !(labelled && s === 'Indeterminate')).map(s => <td key={s}>
                                            {exists(a, s) && (labelled ? <CheckboxLabel Size={z} Active={a} label="Manufacturing" className={PSEUDO[s]} inputClassName={FOCUS(s)} disabled={s === 'Disabled'} /> : <Checkbox Size={z} Active={a} indeterminate={s === 'Indeterminate'} aria-label="Manufacturing" className={PSEUDO[s]} inputClassName={FOCUS(s)} disabled={s === 'Disabled'} />)}
                                        </td>)}
                                </tr>))}
                    </tbody>
                </table>)}
        </div>
}`,...r.parameters?.docs?.source},description:{story:"Every Figma variant: Checkbox (30) and Checkbox label (27): Active × State × Size.",...r.parameters?.docs?.description}}};export{r as AllVariants,i as Default,l as L,c as M,o as S,d as Standalone,k as __namedExportsOrder,D as default};
