import{r as v,j as e}from"./iframe-BGyXAfDM.js";import{I as x}from"./icon-d7Tk8VzI.js";import{c as n}from"./cx-BDMMs1jM.js";import{r as y}from"./focus-ring.module-B3VHbehf.js";import"./preload-helper-PPVm8Dsz.js";const S="_root_use2g_11",T="_text_use2g_41",i={root:S,text:T,"icon-tooltip":"_icon-tooltip_use2g_48","icon-tooltip-trigger":"_icon-tooltip-trigger_use2g_52","icon-tooltip-bubble":"_icon-tooltip-bubble_use2g_57"};function l({Size:t="M",text:s,id:p,className:c}){return e.jsx("span",{role:"tooltip",id:p,"data-size":t.toLowerCase(),className:n(i.root,c),children:e.jsx("span",{className:n(i.text,"yw-body-xs-reg"),children:s})})}function d({Size:t="M",text:s,label:p="More information",tooltipSize:c="M",className:g,triggerClassName:f}){const m=v.useId();return e.jsxs("span",{"data-size":t.toLowerCase(),className:n(i["icon-tooltip"],g),children:[e.jsx("button",{type:"button",className:n(i["icon-tooltip-trigger"],y.root,f),"aria-label":p,"aria-describedby":m,children:e.jsx(x,{name:"info-filled",size:t==="S"?16:24})}),e.jsx("span",{className:i["icon-tooltip-bubble"],children:e.jsx(l,{id:m,Size:c,text:s})})]})}l.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{Size:{required:!1,tsType:{name:"union",raw:"'M' | 'S'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'S'"}]},description:"Figma: Size",defaultValue:{value:"'M'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"IconTooltip",props:{Size:{required:!1,tsType:{name:"union",raw:"'M' | 'S'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'S'"}]},description:"Figma: Size (icon 24 / 16)",defaultValue:{value:"'M'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:"Tooltip text (shown on hover and keyboard focus)"},label:{required:!1,tsType:{name:"string"},description:"Accessible name of the trigger",defaultValue:{value:"'More information'",computed:!1}},tooltipSize:{required:!1,tsType:{name:"union",raw:"'M' | 'S'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'S'"}]},description:"Tooltip size; defaults to M (Figma shows the M tooltip on both icon sizes)",defaultValue:{value:"'M'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},triggerClassName:{required:!1,tsType:{name:"string"},description:""}}};const u="Agents only use data sources that you have approved. Youwe is ISO 27001 certified.",j={title:"Components/Tooltip",component:d,parameters:{layout:"centered",docs:{description:{component:"Contextual information on hover or keyboard focus. Motion: opacity + small rise (duration/fast, ease/standard)."}}},argTypes:{State:{control:"inline-radio",options:["Rest","Active","Focused"]},Size:{control:"inline-radio",options:["M","S"]}},args:{State:"Rest",Size:"M",text:u},render:({State:t,...s})=>e.jsx("div",{style:{paddingTop:160},children:e.jsx(d,{...s,className:t==="Active"?"pseudo-hover":"",triggerClassName:t==="Focused"?"pseudo-focus-visible":""})})},a={},r={args:{State:"Active"}},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-2xl)"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-xl)",alignItems:"end"},children:[e.jsx(l,{Size:"M",text:u}),e.jsx(l,{Size:"S",text:"9,999"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 240px)",rowGap:160,paddingTop:140},children:["M","S"].flatMap(t=>["Rest","Active","Focused"].map(s=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(d,{Size:t,text:u,className:s==="Active"?"pseudo-hover":"",triggerClassName:s==="Focused"?"pseudo-focus-visible":""})},t+s)))})]})},N=["Default","Active","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    State: 'Active'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-2xl)'
  }}>
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-xl)',
      alignItems: 'end'
    }}>
                <Tooltip Size="M" text={TEXT} />
                <Tooltip Size="S" text="9,999" />
            </div>
            <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 240px)',
      rowGap: 160,
      paddingTop: 140
    }}>
                {(['M', 'S'] as const).flatMap(z => (['Rest', 'Active', 'Focused'] as State[]).map(s => <div key={z + s} style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
                            <IconTooltip Size={z} text={TEXT} className={s === 'Active' ? 'pseudo-hover' : ''} triggerClassName={s === 'Focused' ? 'pseudo-focus-visible' : ''} />
                        </div>))}
            </div>
        </div>
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant: Tooltip (Size M / S) and Icon tooltip (State × Size).",...o.parameters?.docs?.description}}};export{r as Active,o as AllVariants,a as Default,N as __namedExportsOrder,j as default};
