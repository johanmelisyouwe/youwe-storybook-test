import{r as S,j as e}from"./iframe-zwtNqTkm.js";import{I as x}from"./icon-DeIsMOez.js";import{c as f}from"./cx-BDMMs1jM.js";import{B as V}from"./button-DIaQG4BW.js";import"./preload-helper-PPVm8Dsz.js";const j="_close_1yz5y_10 _root_17q0n_11",E="_root_1yz5y_15",N="_icon_1yz5y_72",C="_content_1yz5y_79",T="_title_1yz5y_87",b="_message_1yz5y_90",n={close:j,root:E,icon:N,content:C,title:T,message:b},Y={Information:"info-two-tone",Success:"success-check",Warning:"warning",Error:"error"};function i({Variant:s="Information",Shadow:a="Yes",title:g,message:c,closeLabel:w="Close",onClose:v}){const[h,I]=S.useState(!1),_=s==="Error"||s==="Warning";return e.jsxs("div",{role:_?"alert":"status","data-variant":s.toLowerCase(),"data-shadow":a==="Yes"||void 0,"data-leaving":h||void 0,className:f(n.root),onTransitionEnd:y=>{h&&y.target===y.currentTarget&&y.propertyName==="opacity"&&v?.()},children:[e.jsx("span",{className:n.icon,"aria-hidden":"true",children:e.jsx(x,{name:Y[s],size:24})}),e.jsxs("span",{className:n.content,children:[e.jsx("span",{className:f(n.title,"yw-body-sm-bold"),children:g}),e.jsx("span",{className:f(n.message,"yw-body-sm-reg"),children:c})]}),e.jsx("button",{type:"button",className:n.close,"aria-label":w,onClick:()=>v?I(!0):void 0,children:e.jsx(x,{name:"close-md",size:16})})]})}i.__docgenInfo={description:"",methods:[],displayName:"Toaster",props:{Variant:{required:!1,tsType:{name:"union",raw:"'Information' | 'Success' | 'Warning' | 'Error'",elements:[{name:"literal",value:"'Information'"},{name:"literal",value:"'Success'"},{name:"literal",value:"'Warning'"},{name:"literal",value:"'Error'"}]},description:"Figma: Variant",defaultValue:{value:"'Information'",computed:!1}},Shadow:{required:!1,tsType:{name:"union",raw:"'Yes' | 'No'",elements:[{name:"literal",value:"'Yes'"},{name:"literal",value:"'No'"}]},description:"Figma: Shadow",defaultValue:{value:"'Yes'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const r={Information:["Info","New settings available on your account."],Success:["Success","Your changes are saved successfully."],Warning:["Warning","Username you have entered is invalid."],Error:["Error","Error has occurred while saving changes."]},P={title:"Components/Toaster",component:i,parameters:{layout:"centered",docs:{description:{component:'Transient notification. Motion: enters with fade + distance/sm rise (duration/base, ease/emphasized), exits with fade (duration/fast, ease/exit). Error and Warning use role="alert".'}}},argTypes:{Variant:{control:"inline-radio",options:["Information","Success","Warning","Error"]},Shadow:{control:"inline-radio",options:["Yes","No"]}},args:{Variant:"Information",Shadow:"Yes",title:r.Information[0],message:r.Information[1]},render:s=>e.jsx("div",{style:{width:400},children:e.jsx(i,{...s,title:r[s.Variant??"Information"][0],message:r[s.Variant??"Information"][1]},s.Variant)})},l={},d={args:{Variant:"Information"}},m={args:{Variant:"Success"}},p={args:{Variant:"Warning"}},u={args:{Variant:"Error"}},t={parameters:{controls:{disable:!0}},render:()=>{const[s,a]=S.useState(0),[g,c]=S.useState(!1);return e.jsxs("div",{style:{width:400,display:"grid",gap:"var(--spacing-sm)",justifyItems:"start"},children:[e.jsx(V,{Variant:"Solid",Size:"S",label:"Show toast",onClick:()=>{a(s+1),c(!0)}}),g&&e.jsx(i,{Variant:"Success",title:r.Success[0],message:r.Success[1],onClose:()=>c(!1)},s)]})}},o={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 400px)",gap:"var(--spacing-lg)"},children:["Yes","No"].map(s=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-sm)"},children:["Information","Success","Warning","Error"].map(a=>e.jsx(i,{Variant:a,Shadow:s,title:r[a][0],message:r[a][1]},a))},s))})},B=["Default","Information","Success","Warning","Error","Motion","AllVariants"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Information'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Success'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Warning'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Error'
  }
}`,...u.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Shows the enter and exit motion: show a toast, then close it.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Shadow (8).",...o.parameters?.docs?.description}}};export{o as AllVariants,l as Default,u as Error,d as Information,t as Motion,m as Success,p as Warning,B as __namedExportsOrder,P as default};
