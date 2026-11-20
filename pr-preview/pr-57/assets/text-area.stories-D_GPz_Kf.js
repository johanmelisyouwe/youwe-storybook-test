import{j as t}from"./iframe-DDYG-0z7.js";import{T as d}from"./text-area-QkwBymVW.js";import{F as p,f as u}from"./field-story-CCbJjOeR.js";import"./preload-helper-PPVm8Dsz.js";import"./field-4ILBgowW.js";import"./cx-BDMMs1jM.js";import"./field.module-CGPLDjcs.js";const m="Tell us what you want to achieve and we will think along with you.",g="Tell us briefly how we can help.",L={title:"Components/Input/Text Area",component:d,parameters:{layout:"centered",docs:{description:{component:"Multi-line text input with a static label above the field, or an animated floating label."}}},argTypes:{Labels:{control:"inline-radio",options:["Static","Floating"]},State:{control:"select",options:p},status:{control:!1},controlClassName:{control:!1}},args:{Labels:"Static",State:"Rest",Label:"Message",Required:!0,Placeholder:!0,placeholderText:"How can we help you?",Hint:!1,"Hint text":g},render:({State:s,...e})=>{const a=u(s);return t.jsx("div",{style:{width:400},children:t.jsx(d,{...e,defaultValue:a.filled?m:"",status:a.status,disabled:a.disabled,controlClassName:a.controlClassName,Hint:s==="Error"||e.Hint},s+e.Labels)})}},n={},i={args:{Labels:"Static"}},c={args:{Labels:"Floating",Placeholder:!1}},r={parameters:{layout:"padded",controls:{disable:!0}},render:()=>{const s=[["Static",!0,p],["Floating",!1,p],["Floating",!0,["Rest","Hover","Active","Focused"]]];return t.jsx("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:s.map(([e,a,h])=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 400px)",gap:"var(--spacing-lg)"},children:h.map(l=>{const o=u(l);return t.jsxs("div",{children:[t.jsx("p",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",marginBottom:"var(--spacing-2xs)"},children:`${e}: ${l}${e==="Floating"?`, Placeholder=${a?"Yes":"No"}`:""}`}),t.jsx(d,{Labels:e,Label:"Message",Required:!0,Placeholder:a,placeholderText:"How can we help you?",Hint:l==="Error","Hint text":g,defaultValue:o.filled?m:"",status:o.status,disabled:o.disabled,controlClassName:o.controlClassName})]},l)})},e+a))})}},T=["Default","Static","Floating","AllVariants"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Labels: 'Static'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Labels: 'Floating',
    Placeholder: false
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => {
    const sets: ['Static' | 'Floating', boolean, readonly FieldState[]][] = [['Static', true, FIELD_STATES], ['Floating', false, FIELD_STATES], ['Floating', true, ['Rest', 'Hover', 'Active', 'Focused']]];
    return <div style={{
      display: 'grid',
      gap: 'var(--spacing-xl)'
    }}>
                {sets.map(([labels, ph, states]) => <div key={labels + ph} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 400px)',
        gap: 'var(--spacing-lg)'
      }}>
                        {states.map(st => {
          const s = fieldState(st);
          return <div key={st}>
                                    <p className="yw-body-xs-reg" style={{
              color: 'var(--color-shared-content-secondary)',
              marginBottom: 'var(--spacing-2xs)'
            }}>{\`\${labels}: \${st}\${labels === 'Floating' ? \`, Placeholder=\${ph ? 'Yes' : 'No'}\` : ''}\`}</p>
                                    <TextArea Labels={labels} Label="Message" Required Placeholder={ph} placeholderText="How can we help you?" Hint={st === 'Error'} {...{
              'Hint text': ERROR_COPY
            }} defaultValue={s.filled ? FILLED : ''} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} />
                                </div>;
        })}
                    </div>)}
            </div>;
  }
}`,...r.parameters?.docs?.source},description:{story:"Every Figma variant: Static Label (State, 9) and Floating Labels (State × Placeholder 'No' / 'Yes', 13).",...r.parameters?.docs?.description}}};export{r as AllVariants,n as Default,c as Floating,i as Static,T as __namedExportsOrder,L as default};
