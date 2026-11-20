import{r as S,j as e}from"./iframe-YLxJkV3Y.js";import{f as U}from"./index-BtE9JcUf.js";import{I as q}from"./icon-kvpOkNOe.js";import{F as $}from"./field-C5gNFsbw.js";import{O as k}from"./options-panel-Dskzo1kE.js";import{u as D}from"./use-listbox-BFqIwLer.js";import{c as P}from"./cx-BDMMs1jM.js";import{s as l}from"./field.module-CGPLDjcs.js";import{f as j}from"./field-story-CCbJjOeR.js";import"./preload-helper-PPVm8Dsz.js";const c=a=>`/figma-assets/flags/${a}.svg`,G=[{value:"+31",label:"+31",flag:c("NL"),country:"The Netherlands"},{value:"+44",label:"+44",flag:c("GB"),country:"United Kingdom"},{value:"+46",label:"+46",flag:c("SE"),country:"Sweden"},{value:"+62",label:"+62",flag:c("ID"),country:"Indonesia"},{value:"+38",label:"+38",flag:c("UA"),country:"Ukraine"}],K={code:"Country code",current:"Country code {code} ({country})"};function z({value:a,onChange:s,disabled:t,defaultOpen:m,locales:o=G,L:f}){const g=S.useId(),y=o.findIndex(n=>n.value===a),r=D(o.length,y,n=>s(o[n].value),m),i=o[y]??o[0];return e.jsxs("span",{ref:r.root,style:{display:"contents"},children:[e.jsxs("button",{type:"button",className:l.locale,"aria-haspopup":"listbox","aria-expanded":r.open,"aria-controls":`${g}-list`,"aria-label":U(f.current,{code:i.label,country:i.country}),disabled:t,onClick:n=>{n.stopPropagation(),r.setOpen(!r.open)},onKeyDown:r.onKeyDown,children:[e.jsx("img",{className:l["locale-flag"],src:i.flag,alt:"",width:22,height:16}),e.jsx(q,{name:r.open?"arrow-drop-up":"arrow-drop-down",size:24}),e.jsx("span",{className:P(l["locale-code"],"yw-body-md-reg"),children:i.label})]}),r.open&&e.jsx(k,{id:`${g}-list`,options:o,selected:a,activeIndex:r.active,label:f.code,onHover:r.setActive,onSelect:n=>{s(n),r.setOpen(!1)}})]})}function p({Labels:a="Static",Label:s,Required:t=!1,Hint:m=!1,"Hint text":o,Suffix:f=!1,placeholderText:g="0000 000 000",countryCode:y="+31",value:r,defaultValue:i,onChange:n,status:T,disabled:L,defaultLocaleOpen:w,name:O,controlClassName:I,labels:_}){const R={...K,..._},N=S.useId(),[E,A]=S.useState(y),[V,B]=S.useState(i??""),C=r??V;return e.jsx($,{labels:a,id:N,label:s,required:t,hint:m,hintText:o,status:T,disabled:L,floated:!0,filled:!!C,controlClassName:I,className:l.phone,trailing:f?e.jsx("span",{className:l.suffix,"aria-hidden":"true",children:e.jsx(q,{name:"search",size:24})}):null,children:e.jsxs("span",{className:l["phone-row"],children:[e.jsx(z,{L:R,value:E,disabled:L,defaultOpen:w,onChange:d=>{A(d),n?.({countryCode:d,number:C})}}),e.jsx("input",{id:N,className:P(l.input,"yw-body-md-reg"),type:"tel",inputMode:"tel",autoComplete:"tel-national",name:O,required:t,disabled:L,"aria-invalid":T==="Error"||void 0,"aria-describedby":m&&o?`${N}-hint`:void 0,placeholder:g,value:C,onChange:d=>{B(d.target.value),n?.({countryCode:E,number:d.target.value})}})]})})}p.__docgenInfo={description:"",methods:[],displayName:"PhoneInput",props:{Labels:{required:!1,tsType:{name:"union",raw:"'Static' | 'Floating'",elements:[{name:"literal",value:"'Static'"},{name:"literal",value:"'Floating'"}]},description:"",defaultValue:{value:"'Static'",computed:!1}},Label:{required:!0,tsType:{name:"string"},description:"Figma: Label"},Required:{required:!1,tsType:{name:"boolean"},description:"Figma: Required",defaultValue:{value:"false",computed:!1}},Hint:{required:!1,tsType:{name:"boolean"},description:"Figma: Hint",defaultValue:{value:"false",computed:!1}},"Hint text":{required:!1,tsType:{name:"string"},description:"Figma: Hint text"},Suffix:{required:!1,tsType:{name:"boolean"},description:"Figma: Suffix (search icon)",defaultValue:{value:"false",computed:!1}},placeholderText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'0000 000 000'",computed:!1}},countryCode:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'+31'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: { countryCode: string; number: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ countryCode: string; number: string }",signature:{properties:[{key:"countryCode",value:{name:"string",required:!0}},{key:"number",value:{name:"string",required:!0}}]}},name:"value"}],return:{name:"void"}}},description:""},status:{required:!1,tsType:{name:"union",raw:"'Success' | 'Error'",elements:[{name:"literal",value:"'Success'"},{name:"literal",value:"'Error'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},defaultLocaleOpen:{required:!1,tsType:{name:"boolean"},description:"Open the locale panel initially (story previews)"},name:{required:!1,tsType:{name:"string"},description:""},controlClassName:{required:!1,tsType:{name:"string"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"PHONE_INPUT_LABELS"}],raw:"Partial<typeof PHONE_INPUT_LABELS>"},description:"UI text, for translations: { ...PHONE_INPUT_LABELS }"}}};const F=["Rest","Hover","Active","Filled","Filled Hover","Disabled","Focused","Error"],H="Enter a valid phone number.",se={title:"Components/Input/Phone",component:p,parameters:{layout:"centered",docs:{description:{component:"Phone number input with a country code selector (flags from Figma) and a static or floating label."}}},argTypes:{Labels:{control:"inline-radio",options:["Static","Floating"]},State:{control:"select",options:F},status:{control:!1},controlClassName:{control:!1}},args:{Labels:"Static",State:"Rest",Label:"Phone",Required:!0,Hint:!1,"Hint text":H,Suffix:!1},render:({State:a,...s})=>{const t=j(a);return e.jsx("div",{style:{width:240,minHeight:320},children:e.jsx(p,{...s,defaultValue:t.filled?"7890 123 456":"",status:t.status,disabled:t.disabled,controlClassName:t.controlClassName,Hint:a==="Error"||s.Hint},a+s.Labels)})}},b={},v={args:{Labels:"Static"}},h={args:{Labels:"Floating"}},x={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{width:240,minHeight:320},children:e.jsx(p,{Label:"Phone",Required:!0,defaultLocaleOpen:!0})})},u={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:["Static","Floating"].map(a=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 240px)",gap:"var(--spacing-lg)"},children:F.map(s=>{const t=j(s);return e.jsxs("div",{children:[e.jsx("p",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",marginBottom:"var(--spacing-2xs)"},children:`${a}: ${s}`}),e.jsx(p,{Labels:a,Label:"Phone",Required:!0,Hint:s==="Error","Hint text":H,defaultValue:t.filled?"7890 123 456":"",status:t.status,disabled:t.disabled,controlClassName:t.controlClassName})]},s)})},a))})},re=["Default","Static","Floating","CountryCodes","AllVariants"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    Labels: 'Static'
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    Labels: 'Floating'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 240,
    minHeight: 320
  }}>
            <PhoneInput Label="Phone" Required defaultLocaleOpen />
        </div>
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-xl)'
  }}>
            {(['Static', 'Floating'] as const).map(labels => <div key={labels} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 240px)',
      gap: 'var(--spacing-lg)'
    }}>
                    {PHONE_STATES.map(st => {
        const s = fieldState(st);
        return <div key={st}>
                                <p className="yw-body-xs-reg" style={{
            color: 'var(--color-shared-content-secondary)',
            marginBottom: 'var(--spacing-2xs)'
          }}>{\`\${labels}: \${st}\`}</p>
                                <PhoneInput Labels={labels} Label="Phone" Required Hint={st === 'Error'} {...{
            'Hint text': ERROR_COPY
          }} defaultValue={s.filled ? '7890 123 456' : ''} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} />
                            </div>;
      })}
                </div>)}
        </div>
}`,...u.parameters?.docs?.source},description:{story:"Every Figma variant: Static Labels (State, 8) and Floating Labels (State, 8).",...u.parameters?.docs?.description}}};export{u as AllVariants,x as CountryCodes,b as Default,h as Floating,v as Static,re as __namedExportsOrder,se as default};
