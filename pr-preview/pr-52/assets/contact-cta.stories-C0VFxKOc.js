import{j as e}from"./iframe-FrZ6yjpt.js";import{C as i}from"./contact-cta-p_Jltfv4.js";import{M as l}from"./mode-frame-BbupKq1R.js";import{a as d}from"./media-CIA0hqPx.js";import"./preload-helper-PPVm8Dsz.js";import"./text-input-CvI4r0WP.js";import"./icon-BCH5y6oG.js";import"./field-D5SBQcOc.js";import"./cx-BDMMs1jM.js";import"./field.module-CGPLDjcs.js";import"./dropdown-BEJy6xTV.js";import"./options-panel-yCajoUhW.js";import"./use-listbox-PVtmLI_z.js";import"./text-area-3L4gqhgR.js";import"./checkbox-CkDsLx09.js";import"./button-Dv8ebaqZ.js";import"./card-media-DJ8hY_y-.js";import"./asset-BwYZ-r8z.js";import"./block.module-ifZFSSN6.js";const p=["The Netherlands","United Kingdom","Sweden","Belgium","Germany","Indonesia","Ukraine","Other"].map(r=>({value:r,label:r})),m={title:"Get in touch with our experts",body:"Ready to take the next step? Feel free to contact us. You can reach our experts personally or call us at our general phone number:",phone:"+31 10 466 86 38",countries:p},u={title:"Where does growth get stuck?",body:"Tell us what you want to achieve and we will think along with you.",primary:{label:"Contact us",href:"#"},secondary:{label:"Submit an RFP",href:"#"},image:d("005"),offices:["Rotterdam","Groningen","London","Leeds","Shrewsbury","Stockholm","Bandung","Kyiv"]},s=r=>r==="Form"?m:u,g={Desktop:"100%",Mobile:360},h=["Form","Sub-footer split","Sub-footer background"],E={title:"Content blocks/Contact CTA",parameters:{layout:"fullscreen",docs:{description:{component:"Contact form or sub-footer call to action (split with an image, or over a background image). Motion: block reveal; image variants use a clip reveal on scroll."}}},argTypes:{Variant:{control:"inline-radio",options:["Form","Sub-footer split","Sub-footer background"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Variant:"Form",Device:"Desktop"},render:({Variant:r="Form",Device:c="Desktop"})=>e.jsx(l,{Mode:"Dark",padding:0,children:e.jsx("div",{style:{maxWidth:g[c]},children:e.jsx(i,{...s(r),Variant:r,Device:c})})})},t={},a={args:{Variant:"Sub-footer split"}},n={args:{Variant:"Sub-footer background"}},o={parameters:{controls:{disable:!0}},render:()=>e.jsx(l,{Mode:"Dark",padding:0,children:e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:h.map(r=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(i,{...s(r),Variant:r})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(i,{...s(r),Variant:r,Device:"Mobile"})})]},r))})})},N=["Form","SubFooterSplit","SubFooterBackground","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Device (6).",...o.parameters?.docs?.description}}};export{o as AllVariants,t as Form,n as SubFooterBackground,a as SubFooterSplit,N as __namedExportsOrder,E as default};
