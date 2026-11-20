import{j as e}from"./iframe-DhUkatZW.js";import{A as l}from"./accordion-Cp-xP0F6.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-Did7bX6l.js";import"./cx-BDMMs1jM.js";import"./focus-ring.module-B3VHbehf.js";const p={Rest:"",Hover:"pseudo-hover",Focused:"pseudo-focus-visible"},t=[["What is ACI Weave?","ACI Weave by Youwe is an AI platform that organizations use to build and run AI agents connected to their ERP, PIM, CRM and commerce platform, with access to more than 25,000 AI models."],["What does ACI stand for?","ACI stands for Artificial Corporate Intelligence. ACI Weave is the platform that orchestrates agents between your data layer, such as ERP, CRM, PIM, a data lake and file shares, and the places where work happens."],["When does a person approve the work of an agent?","At the steps you choose. For each workflow you decide which steps need approval from an employee. At Kingspan Insulated Panels, no order reaches SAP until a person has approved it."]],v={title:"Components/Accordion",component:l,parameters:{layout:"padded",docs:{description:{component:"Collapsible section with a caret or plus/minus indicator. Motion: height (duration/slow, ease/emphasized), icon rotation (duration/base). Native details/summary."}}},argTypes:{Style:{control:"inline-radio",options:["Caret","Plus-Minus"]},Expanded:{control:"inline-radio",options:["No","Yes"]},State:{control:"inline-radio",options:["Rest","Hover","Focused"]},children:{control:!1}},args:{Style:"Caret",Expanded:"No",State:"Rest",label:t[0][0]},render:({State:s,...a})=>e.jsx("div",{style:{maxWidth:600},children:e.jsx(l,{...a,summaryClassName:p[s],children:e.jsx("p",{children:t[0][1]})},`${a.Expanded}-${a.Style}`)})},n={},o={args:{Style:"Caret"}},i={args:{Style:"Plus-Minus"}},d={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{maxWidth:600},children:t.map(([s,a])=>e.jsx(l,{label:s,name:"faq",children:e.jsx("p",{children:a})},s))})},r={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 600px))",gap:"var(--spacing-xl)"},children:["Caret","Plus-Minus"].map(s=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)",alignContent:"start"},children:["No","Yes"].flatMap(a=>["Rest","Hover","Focused"].map(c=>e.jsxs("div",{children:[e.jsx("p",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",marginBottom:"var(--spacing-2xs)"},children:`Style=${s}, Expanded=${a}, State=${c}`}),e.jsx(l,{Style:s,Expanded:a,label:t[0][0],summaryClassName:p[c],children:e.jsx("p",{children:t[0][1]})})]},a+c)))},s))})},S=["Default","Caret","PlusMinus","FaqList","AllVariants"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Style: 'Caret'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Style: 'Plus-Minus'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    maxWidth: 600
  }}>
            {FAQ.map(([q, a]) => <Accordion key={q} label={q} name="faq">
                    <p>{a}</p>
                </Accordion>)}
        </div>
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 600px))',
    gap: 'var(--spacing-xl)'
  }}>
            {(['Caret', 'Plus-Minus'] as const).map(st => <div key={st} style={{
      display: 'grid',
      gap: 'var(--spacing-lg)',
      alignContent: 'start'
    }}>
                    {(['No', 'Yes'] as const).flatMap(ex => (['Rest', 'Hover', 'Focused'] as State[]).map(s => <div key={ex + s}>
                                <p className="yw-body-xs-reg" style={{
          color: 'var(--color-shared-content-secondary)',
          marginBottom: 'var(--spacing-2xs)'
        }}>{\`Style=\${st}, Expanded=\${ex}, State=\${s}\`}</p>
                                <Accordion Style={st} Expanded={ex} label={FAQ[0][0]} summaryClassName={PSEUDO[s]}>
                                    <p>{FAQ[0][1]}</p>
                                </Accordion>
                            </div>))}
                </div>)}
        </div>
}`,...r.parameters?.docs?.source},description:{story:"Every Figma variant: Style × Expanded × State (12).",...r.parameters?.docs?.description}}};export{r as AllVariants,o as Caret,n as Default,d as FaqList,i as PlusMinus,S as __namedExportsOrder,v as default};
