import{j as e}from"./iframe-Bhg6XAGb.js";import{s as a,L as u,B as v,b as d}from"./longform.copy-Cta0Wndm.js";import{c as o}from"./cx-BDMMs1jM.js";import{b as l}from"./block.module-ifZFSSN6.js";import"./preload-helper-PPVm8Dsz.js";import"./prose-CzvDEmKn.js";function i({Split:s="6/6",label:c,lead:p,body:m}){return e.jsx("section",{className:o(l.root,a.longform),children:e.jsx("div",{className:l.inner,children:e.jsxs("div",{"data-split":s==="4/8"?"4-8":void 0,className:o(a["two-col"],l.reveal),children:[e.jsxs("div",{className:a["two-col-lead"],children:[c&&e.jsx("span",{className:o(a["two-col-label"],"yw-body-md-bold"),children:c}),e.jsx(u,{children:p})]}),e.jsx("div",{className:a["two-col-body"],children:e.jsx(v,{paragraphs:m})})]})})})}i.__docgenInfo={description:"",methods:[],displayName:"TwoColumnText",props:{Split:{required:!1,tsType:{name:"union",raw:"'6/6' | '4/8'",elements:[{name:"literal",value:"'6/6'"},{name:"literal",value:"'4/8'"}]},description:"Figma: Split",defaultValue:{value:"'6/6'",computed:!1}},Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device (layout follows the block width)"},label:{required:!1,tsType:{name:"string"},description:""},lead:{required:!0,tsType:{name:"string"},description:""},body:{required:!0,tsType:{name:"union",raw:"string | string[] | ReactNode",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"ReactNode"}]},description:"Paragraphs, or CMS rich text (links, lists, bold, H3)"}}};const g={Desktop:"100%",Mobile:360},j={title:"Content blocks/Two-column text",parameters:{layout:"fullscreen",docs:{description:{component:"Label + lead on the left, body on the right. Split 4/8 gives the lead a narrower column. Motion: block reveal."}}},argTypes:{Split:{control:"inline-radio",options:["6/6","4/8"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Split:"6/6",Device:"Desktop"},render:s=>e.jsx("div",{style:{maxWidth:g[s.Device??"Desktop"]},children:e.jsx(i,{...d,...s})})},r={},n={name:"4/8",args:{Split:"4/8"}},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[["6/6","4/8"].map(s=>e.jsx("div",{style:{maxWidth:1440},children:e.jsx(i,{...d,Split:s})},s)),e.jsx("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:["6/6","4/8"].map(s=>e.jsx("div",{style:{width:360},children:e.jsx(i,{...d,Split:s})},s))})]})},S=["Default","Second","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '4/8',
  args: {
    Split: '4/8'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['6/6', '4/8'] as const).map(v => <div key={v} style={{
      maxWidth: 1440
    }}>
                    <TwoColumnText {...TWO_COLUMN} {...{
        Split: v
      }} />
                </div>)}
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-lg)',
      alignItems: 'start'
    }}>
                {(['6/6', '4/8'] as const).map(v => <div key={v} style={{
        width: 360
      }}>
                        <TwoColumnText {...TWO_COLUMN} {...{
          Split: v
        }} />
                    </div>)}
            </div>
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Split.",...t.parameters?.docs?.description}}};export{t as AllVariants,r as Default,n as Second,S as __namedExportsOrder,j as default};
