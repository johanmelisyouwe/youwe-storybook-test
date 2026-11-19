import{j as s,r as u}from"./iframe-RIzWv_pe.js";import{T as m}from"./toaster-BzkJgQ64.js";import{B as S}from"./button-DTlfqX8k.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-DifRw7KX.js";import"./cx-BDMMs1jM.js";const e={Information:["Info","New settings available on your account."],Success:["Success","Your changes are saved successfully."],Warning:["Warning","Username you have entered is invalid."],Error:["Error","Error has occurred while saving changes."]},w={title:"Components/Toaster",component:m,parameters:{layout:"centered",docs:{description:{component:'Transient notification. Motion: enters with fade + distance/sm rise (duration/base, ease/emphasized), exits with fade (duration/fast, ease/exit). Error and Warning use role="alert".'}}},argTypes:{Variant:{control:"inline-radio",options:["Information","Success","Warning","Error"]},Shadow:{control:"inline-radio",options:["Yes","No"]}},args:{Variant:"Information",Shadow:"Yes",title:e.Information[0],message:e.Information[1]},render:r=>s.jsx("div",{style:{width:400},children:s.jsx(m,{...r,title:e[r.Variant??"Information"][0],message:e[r.Variant??"Information"][1]},r.Variant)})},o={},i={args:{Variant:"Information"}},c={args:{Variant:"Success"}},d={args:{Variant:"Warning"}},p={args:{Variant:"Error"}},n={parameters:{controls:{disable:!0}},render:()=>{const[r,a]=u.useState(0),[g,l]=u.useState(!1);return s.jsxs("div",{style:{width:400,display:"grid",gap:"var(--spacing-sm)",justifyItems:"start"},children:[s.jsx(S,{Variant:"Solid",Size:"S",label:"Show toast",onClick:()=>{a(r+1),l(!0)}}),g&&s.jsx(m,{Variant:"Success",title:e.Success[0],message:e.Success[1],onClose:()=>l(!1)},r)]})}},t={parameters:{controls:{disable:!0}},render:()=>s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 400px)",gap:"var(--spacing-lg)"},children:["Yes","No"].map(r=>s.jsx("div",{style:{display:"grid",gap:"var(--spacing-sm)"},children:["Information","Success","Warning","Error"].map(a=>s.jsx(m,{Variant:a,Shadow:r,title:e[a][0],message:e[a][1]},a))},r))})},I=["Default","Information","Success","Warning","Error","Motion","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Information'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Success'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Warning'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Error'
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [n, setN] = useState(0);
    const [open, setOpen] = useState(false);
    return <div style={{
      width: 400,
      display: 'grid',
      gap: 'var(--spacing-sm)',
      justifyItems: 'start'
    }}>
                <Button Variant="Solid" Size="S" label="Show toast" onClick={() => {
        setN(n + 1);
        setOpen(true);
      }} />
                {open && <Toaster key={n} Variant="Success" title={COPY.Success[0]} message={COPY.Success[1]} onClose={() => setOpen(false)} />}
            </div>;
  }
}`,...n.parameters?.docs?.source},description:{story:"Shows the enter and exit motion: show a toast, then close it.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 400px)',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Yes', 'No'] as const).map(sh => <div key={sh} style={{
      display: 'grid',
      gap: 'var(--spacing-sm)'
    }}>
                    {(['Information', 'Success', 'Warning', 'Error'] as const).map(v => <Toaster key={v} Variant={v} Shadow={sh} title={COPY[v][0]} message={COPY[v][1]} />)}
                </div>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Shadow (8).",...t.parameters?.docs?.description}}};export{t as AllVariants,o as Default,p as Error,i as Information,n as Motion,c as Success,d as Warning,I as __namedExportsOrder,w as default};
