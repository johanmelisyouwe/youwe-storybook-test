import{j as e}from"./iframe-CNsxMot_.js";import{T as t}from"./text-input-q419xv1W.js";import{F as u,f as x}from"./field-story-CCbJjOeR.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-B5n_Fust.js";import"./field-_j5bS6UR.js";import"./cx-BDMMs1jM.js";import"./field.module-CGPLDjcs.js";const b="Enter a valid business email address.",R={title:"Components/Input/Text",component:t,parameters:{layout:"centered",docs:{description:{component:"Single-line text input with a static label above the field, or an animated floating label inside it."}}},argTypes:{Labels:{control:"inline-radio",options:["Static","Floating"]},State:{control:"select",options:u},Placeholder:{control:"boolean",description:"Static: show placeholder. Floating: Figma axis Placeholder=Yes/No"},Required:{control:"boolean"},Hint:{control:"boolean"},Suffix:{control:"boolean"},status:{control:!1},controlClassName:{control:!1}},args:{Labels:"Static",State:"Rest",Label:"Business email",Required:!0,Placeholder:!0,placeholderText:"name@company.com",Hint:!1,"Hint text":b,Suffix:!1,type:"email"},render:({State:o,...r})=>{const a=x(o);return e.jsx("div",{style:{width:240},children:e.jsx(t,{...r,defaultValue:a.filled?"name@company.com":"",status:a.status,disabled:a.disabled,controlClassName:a.controlClassName},o+r.Labels)})}},i={},c={args:{Labels:"Static"}},d={args:{Labels:"Floating",Placeholder:!1}},m={args:{State:"Error",Hint:!0}},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--spacing-sm)",width:496},children:[e.jsx(t,{Label:"First name",Required:!0,placeholderText:"First name",autoComplete:"given-name"}),e.jsx(t,{Label:"Last name",Required:!0,placeholderText:"Last name",autoComplete:"family-name"}),e.jsx(t,{Label:"Business email",Required:!0,placeholderText:"name@company.com",type:"email",autoComplete:"email"}),e.jsx(t,{Label:"Phone number",Required:!0,placeholderText:"Phone number",type:"tel",autoComplete:"tel"})]})},s={parameters:{layout:"padded",controls:{disable:!0}},render:()=>{const o=["Rest","Hover","Active","Focused"],r=(a,g,y)=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 240px)",gap:"var(--spacing-lg)"},children:y.map(n=>{const l=x(n);return e.jsxs("div",{children:[e.jsx("p",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",marginBottom:"var(--spacing-2xs)"},children:`${a}: ${n}${a==="Floating"?`, Placeholder=${g?"Yes":"No"}`:""}`}),e.jsx(t,{Labels:a,Label:"Business email",Required:!0,Placeholder:g,placeholderText:"name@company.com",Hint:n==="Error","Hint text":b,defaultValue:l.filled?"name@company.com":"",status:l.status,disabled:l.disabled,controlClassName:l.controlClassName})]},n)})});return e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:[r("Static",!0,u),r("Floating",!1,u),r("Floating",!0,o)]})}},E=["Default","Static","Floating","Error","ContactForm","AllVariants"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Labels: 'Static'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    Labels: 'Floating',
    Placeholder: false
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    State: 'Error',
    Hint: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--spacing-sm)',
    width: 496
  }}>
            <TextInput Label="First name" Required placeholderText="First name" autoComplete="given-name" />
            <TextInput Label="Last name" Required placeholderText="Last name" autoComplete="family-name" />
            <TextInput Label="Business email" Required placeholderText="name@company.com" type="email" autoComplete="email" />
            <TextInput Label="Phone number" Required placeholderText="Phone number" type="tel" autoComplete="tel" />
        </div>
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => {
    const floatingYes: FieldState[] = ['Rest', 'Hover', 'Active', 'Focused'];
    const row = (labels: 'Static' | 'Floating', placeholder: boolean, states: readonly FieldState[]) => <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 240px)',
      gap: 'var(--spacing-lg)'
    }}>
                {states.map(st => {
        const s = fieldState(st);
        return <div key={st}>
                            <p className="yw-body-xs-reg" style={{
            color: 'var(--color-shared-content-secondary)',
            marginBottom: 'var(--spacing-2xs)'
          }}>{\`\${labels}: \${st}\${labels === 'Floating' ? \`, Placeholder=\${placeholder ? 'Yes' : 'No'}\` : ''}\`}</p>
                            <TextInput Labels={labels} Label="Business email" Required Placeholder={placeholder} placeholderText="name@company.com" Hint={st === 'Error'} {...{
            'Hint text': ERROR_COPY
          }} defaultValue={s.filled ? 'name@company.com' : ''} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} />
                        </div>;
      })}
            </div>;
    return <div style={{
      display: 'grid',
      gap: 'var(--spacing-xl)'
    }}>
                {row('Static', true, FIELD_STATES)}
                {row('Floating', false, FIELD_STATES)}
                {row('Floating', true, floatingYes)}
            </div>;
  }
}`,...s.parameters?.docs?.source},description:{story:"Every Figma variant: Static Labels (State, 9) and Floating Labels (State × Placeholder, 13).",...s.parameters?.docs?.description}}};export{s as AllVariants,p as ContactForm,i as Default,m as Error,d as Floating,c as Static,E as __namedExportsOrder,R as default};
