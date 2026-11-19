import{j as r}from"./iframe-B4H4D0rs.js";import"./preload-helper-PPVm8Dsz.js";const d="_root_1jjia_7",c="_bar_1jjia_16",n={root:d,bar:c},p={Start:0,"25%":25,"50%":50,"75%":75,End:100};function t({Progress:e="Start",value:l,label:i}){const o=Math.max(0,Math.min(100,l??p[e]));return r.jsx("div",{className:n.root,role:"progressbar","aria-label":i,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o,children:r.jsx("div",{className:n.bar,style:{"--_value":`${o}%`}})})}t.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{Progress:{required:!1,tsType:{name:"union",raw:"'Start' | '25%' | '50%' | '75%' | 'End'",elements:[{name:"literal",value:"'Start'"},{name:"literal",value:"'25%'"},{name:"literal",value:"'50%'"},{name:"literal",value:"'75%'"},{name:"literal",value:"'End'"}]},description:"Figma: Progress (or use `value` for any percentage)",defaultValue:{value:"'Start'",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"0–100; overrides Progress"},label:{required:!0,tsType:{name:"string"},description:'Accessible name, e.g. "Step 2 of 4"'}}};const g={title:"Components/Progress Bar",component:t,parameters:{layout:"centered"},argTypes:{Progress:{control:"inline-radio",options:["Start","25%","50%","75%","End"]},value:{control:{type:"range",min:0,max:100}}},args:{Progress:"50%",label:"Progress"},render:e=>r.jsx("div",{style:{width:343},children:r.jsx(t,{...e})})},s={},a={parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)",width:343},children:["Start","25%","50%","75%","End"].map(e=>r.jsx(t,{Progress:e,label:`Progress ${e}`},e))})},v=["Default","AllVariants"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)',
    width: 343
  }}>
            {(['Start', '25%', '50%', '75%', 'End'] as const).map(p => <ProgressBar key={p} Progress={p} label={\`Progress \${p}\`} />)}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant (Progress).",...a.parameters?.docs?.description}}};export{a as AllVariants,s as Default,v as __namedExportsOrder,g as default};
