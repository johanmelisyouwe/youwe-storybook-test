import{j as t}from"./iframe-CNsxMot_.js";import{D as p}from"./dropdown-DAjy97Oa.js";import{F as u,f as g}from"./field-story-CCbJjOeR.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-B5n_Fust.js";import"./field-_j5bS6UR.js";import"./cx-BDMMs1jM.js";import"./field.module-CGPLDjcs.js";import"./options-panel-DKH949I7.js";import"./use-listbox-CIvu4XcA.js";const m=["The Netherlands","United Kingdom","Sweden","Indonesia","Ukraine"].map(a=>({value:a,label:a})),y="Select your country.",L={title:"Components/Input/Dropdown",component:p,parameters:{layout:"centered",docs:{description:{component:"Select input with a static or floating label and the Figma options panel. Keyboard: Enter/Space/Arrow opens, Arrow keys move, Enter selects, Escape closes."}}},argTypes:{Labels:{control:"inline-radio",options:["Static","Floating"]},State:{control:"select",options:u},options:{control:!1},status:{control:!1},controlClassName:{control:!1}},args:{Labels:"Static",State:"Rest",Label:"Country",Required:!0,Placeholder:!0,placeholderText:"Select your country",Hint:!1,"Hint text":y,options:m},render:({State:a,...e})=>{const s=g(a);return t.jsx("div",{style:{width:240,minHeight:320},children:t.jsx(p,{...e,defaultValue:s.filled?"The Netherlands":void 0,defaultOpen:a==="Active",status:s.status,disabled:s.disabled,controlClassName:s.controlClassName,Hint:a==="Error"||e.Hint},a+e.Labels)})}},l={},i={args:{Labels:"Static"}},c={args:{Labels:"Floating",Placeholder:!1}},d={args:{State:"Active"}},r={parameters:{layout:"padded",controls:{disable:!0}},render:()=>{const a=[["Static",!0,u.filter(e=>e!=="Active")],["Floating",!1,u.filter(e=>e!=="Active")],["Floating",!0,["Rest","Hover","Focused"]]];return t.jsxs("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:[a.map(([e,s,v])=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 240px)",gap:"var(--spacing-lg)"},children:v.map(o=>{const n=g(o);return t.jsxs("div",{children:[t.jsx("p",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",marginBottom:"var(--spacing-2xs)"},children:`${e}: ${o}${e==="Floating"?`, Placeholder=${s?"Yes":"No"}`:""}`}),t.jsx(p,{Labels:e,Label:"Country",Required:!0,Placeholder:s,placeholderText:"Select your country",options:m,Hint:o==="Error","Hint text":y,defaultValue:n.filled?"The Netherlands":void 0,status:n.status,disabled:n.disabled,controlClassName:n.controlClassName})]},o)})},e+s)),t.jsxs("div",{style:{minHeight:320},children:[t.jsx("p",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",marginBottom:"var(--spacing-2xs)"},children:"Static: Active (open)"}),t.jsx("div",{style:{width:240},children:t.jsx(p,{Label:"Country",Required:!0,placeholderText:"Select your country",options:m,defaultOpen:!0,controlClassName:"pseudo-focus-within"})})]})]})}},R=["Default","Static","Floating","Open","AllVariants"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Labels: 'Static'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Labels: 'Floating',
    Placeholder: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    State: 'Active'
  }
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => {
    const sets: ['Static' | 'Floating', boolean, readonly FieldState[]][] = [['Static', true, FIELD_STATES.filter(s => s !== 'Active')], ['Floating', false, FIELD_STATES.filter(s => s !== 'Active')], ['Floating', true, ['Rest', 'Hover', 'Focused']]];
    return <div style={{
      display: 'grid',
      gap: 'var(--spacing-xl)'
    }}>
                {sets.map(([labels, ph, states]) => <div key={labels + ph} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 240px)',
        gap: 'var(--spacing-lg)'
      }}>
                        {states.map(st => {
          const s = fieldState(st);
          return <div key={st}>
                                    <p className="yw-body-xs-reg" style={{
              color: 'var(--color-shared-content-secondary)',
              marginBottom: 'var(--spacing-2xs)'
            }}>{\`\${labels}: \${st}\${labels === 'Floating' ? \`, Placeholder=\${ph ? 'Yes' : 'No'}\` : ''}\`}</p>
                                    <Dropdown Labels={labels} Label="Country" Required Placeholder={ph} placeholderText="Select your country" options={COUNTRIES} Hint={st === 'Error'} {...{
              'Hint text': ERROR_COPY
            }} defaultValue={s.filled ? 'The Netherlands' : undefined} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} />
                                </div>;
        })}
                    </div>)}
                <div style={{
        minHeight: 320
      }}>
                    <p className="yw-body-xs-reg" style={{
          color: 'var(--color-shared-content-secondary)',
          marginBottom: 'var(--spacing-2xs)'
        }}>
                        Static: Active (open)
                    </p>
                    <div style={{
          width: 240
        }}>
                        <Dropdown Label="Country" Required placeholderText="Select your country" options={COUNTRIES} defaultOpen controlClassName="pseudo-focus-within" />
                    </div>
                </div>
            </div>;
  }
}`,...r.parameters?.docs?.source},description:{story:"Every Figma variant: Static Labels (State, 9) and Floating Labels (State × Placeholder 'No' / 'Yes', 13). Active = open.",...r.parameters?.docs?.description}}};export{r as AllVariants,l as Default,c as Floating,d as Open,i as Static,R as __namedExportsOrder,L as default};
