import{j as e}from"./iframe-Ceyw_MnB.js";import{C as i}from"./contact-cta-D8B4VkDQ.js";import{M as l}from"./mode-frame-DKh65ZYG.js";import{a as p}from"./media-CIA0hqPx.js";import"./preload-helper-PPVm8Dsz.js";import"./text-input-Dg7L8Zs-.js";import"./icon-B8YMNobs.js";import"./field-B3CbaUQD.js";import"./cx-BDMMs1jM.js";import"./field.module-CGPLDjcs.js";import"./dropdown-DfTByJJS.js";import"./options-panel-CKFTUfoI.js";import"./use-listbox-D-xGjt6G.js";import"./text-area-BqExmJyp.js";import"./checkbox-C1XEAyPD.js";import"./button-BWOcu698.js";import"./file-input-DqrSrHXq.js";import"./breadcrumbs-CGxosXEV.js";import"./button-filter-Buobpq3L.js";import"./focus-ring.module-B3VHbehf.js";import"./card-media-C0nHAvhQ.js";import"./asset-Bvo5E4T5.js";import"./block.module-ifZFSSN6.js";const d=["The Netherlands","United Kingdom","Sweden","Belgium","Germany","Indonesia","Ukraine","Other"].map(r=>({value:r,label:r})),m={title:"Get in touch with our experts",body:"Ready to take the next step? Feel free to contact us. You can reach our experts personally or call us at our general phone number:",phone:"+31 10 466 86 38",countries:d},u={title:"Where does growth get stuck?",body:"Tell us what you want to achieve and we will think along with you.",primary:{label:"Contact us",href:"#"},secondary:{label:"Submit an RFP",href:"#"},image:p("005"),offices:["Rotterdam","Groningen","London","Leeds","Shrewsbury","Stockholm","Bandung","Kyiv"]},s=r=>r==="Form"?m:u,g={Desktop:"100%",Mobile:360},h=["Form","Sub-footer split","Sub-footer background"],G={title:"Content blocks/Contact CTA",parameters:{layout:"fullscreen",docs:{description:{component:"Contact form or sub-footer call to action (split with an image, or over a background image). Motion: block reveal; image variants use a clip reveal on scroll."}}},argTypes:{Variant:{control:"inline-radio",options:["Form","Sub-footer split","Sub-footer background"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Variant:"Form",Device:"Desktop"},render:({Variant:r="Form",Device:c="Desktop"})=>e.jsx(l,{Mode:"Dark",padding:0,children:e.jsx("div",{style:{maxWidth:g[c]},children:e.jsx(i,{...s(r),Variant:r,Device:c})})})},t={},a={args:{Variant:"Sub-footer split"}},n={args:{Variant:"Sub-footer background"}},o={parameters:{controls:{disable:!0}},render:()=>e.jsx(l,{Mode:"Dark",padding:0,children:e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:h.map(r=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(i,{...s(r),Variant:r})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(i,{...s(r),Variant:r,Device:"Mobile"})})]},r))})})},W=["Form","SubFooterSplit","SubFooterBackground","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Sub-footer split'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Sub-footer background'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ModeFrame Mode="Dark" padding={0}>
            <div style={{
      display: 'grid',
      gap: 'var(--spacing-lg)'
    }}>
                {VARIANTS.map(v => <div key={v} style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                        <div style={{
          width: 1440,
          flexShrink: 0
        }}>
                            <ContactCTA {...copy(v)} Variant={v} />
                        </div>
                        <div style={{
          width: 360,
          flexShrink: 0
        }}>
                            <ContactCTA {...copy(v)} Variant={v} Device="Mobile" />
                        </div>
                    </div>)}
            </div>
        </ModeFrame>
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Device (6).",...o.parameters?.docs?.description}}};export{o as AllVariants,t as Form,n as SubFooterBackground,a as SubFooterSplit,W as __namedExportsOrder,G as default};
