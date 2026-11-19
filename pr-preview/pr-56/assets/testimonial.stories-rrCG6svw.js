import{j as e}from"./iframe-CMEFyaA1.js";import{T as s}from"./testimonial-yOrdpatJ.js";import{C as g}from"./client-logo-D9StZU-G.js";import{a as m}from"./media-CIA0hqPx.js";import{M as c}from"./mode-frame-DuaNV45j.js";import{I as p}from"./testimonial.copy-YvanwUHH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtE9JcUf.js";import"./asset-g08xwDaq.js";import"./button-B_oW282Y.js";import"./icon-a91ShoXL.js";import"./cx-BDMMs1jM.js";import"./index-CdDwsZdN.js";import"./card-media-0_57ir45.js";import"./block.module-ifZFSSN6.js";import"./logo-Z3BTtYTX.js";const l=[{Quote:"“We turned the vision into a platform. Now we’re adding new customers and suppliers.”",Name:"Frank Daamen",Role:"Digital Director Bunzl & Founder of BunzlOne",logo:e.jsx("span",{className:"yw-heading-md",children:"Bunzl"})},{Quote:"“How a Design System strengthened G-Star’s brand consistency.”",Name:"G-Star RAW",Role:"Case · Design System",logo:e.jsx(g,{name:"G-Star",width:190})}],v={Desktop:"100%",Mobile:390},E={title:"Content blocks/Testimonial",parameters:{layout:"fullscreen",docs:{description:{component:'Client quote with attribution; optional full-bleed photo with the tint-1 overlay. With several quotes it auto-advances every 7s (View Transition: old quote blurs and lifts, new one rises in) and pauses on hover, focus and when off-screen. Layout Tabs (Home "In their words"): a tab per client on the left, with the same 7s rotation.'}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Device:"Desktop","Show logo":!0,"Show image":!1},render:({Device:t="Desktop","Show image":u,...h})=>e.jsx("div",{style:{maxWidth:v[t]},children:e.jsx(s,{quotes:l.slice(0,1),image:u?m("006"):void 0,...h})})},i={},n={args:{"Show image":!0}},a={render:()=>e.jsx("div",{style:{maxWidth:1440},children:e.jsx(s,{quotes:l})})},r={name:"Tabs (In their words)",parameters:{controls:{disable:!0}},render:()=>e.jsx(c,{Mode:"Light",padding:0,children:e.jsx("div",{style:{maxWidth:1440},children:e.jsx(s,{Layout:"Tabs",kicker:"In their words",quotes:p})})})},d={name:"Tabs mobile",parameters:{controls:{disable:!0}},render:()=>e.jsx(c,{Mode:"Light",padding:0,children:e.jsx("div",{style:{maxWidth:360},children:e.jsx(s,{Layout:"Tabs",Device:"Mobile",kicker:"In their words",quotes:p})})})},o={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[!1,!0].map(t=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440},children:e.jsx(s,{quotes:l.slice(0,1),image:t?m("006"):void 0,autoAdvance:!1})}),e.jsx("div",{style:{width:390},children:e.jsx(s,{quotes:l.slice(0,1),image:t?m("006"):void 0,autoAdvance:!1})})]},String(t)))})},O=["Default","WithImage","Rotating","Tabs","TabsMobile","AllVariants"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    'Show image': true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 1440
  }}>
            <Testimonial quotes={QUOTES} />
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Two quotes: auto-advance every 7s with the View Transition.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Tabs (In their words)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ModeFrame Mode="Light" padding={0}>
            <div style={{
      maxWidth: 1440
    }}>
                <Testimonial Layout="Tabs" kicker="In their words" quotes={IN_THEIR_WORDS} />
            </div>
        </ModeFrame>
}`,...r.parameters?.docs?.source},description:{story:`Layout Tabs — Home "In their words": a tab per client (arrow keys move between them) and the quote with
Read the case. Moves to the next client every 7s while in view; hover or focus pauses it.`,...r.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Tabs mobile',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ModeFrame Mode="Light" padding={0}>
            <div style={{
      maxWidth: 360
    }}>
                <Testimonial Layout="Tabs" Device="Mobile" kicker="In their words" quotes={IN_THEIR_WORDS} />
            </div>
        </ModeFrame>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {[false, true].map(img => <div key={String(img)} style={{
      display: 'flex',
      gap: 'var(--spacing-lg)',
      alignItems: 'start'
    }}>
                    <div style={{
        width: 1440
      }}>
                        <Testimonial quotes={QUOTES.slice(0, 1)} image={img ? abstract('006') : undefined} autoAdvance={false} />
                    </div>
                    <div style={{
        width: 390
      }}>
                        <Testimonial quotes={QUOTES.slice(0, 1)} image={img ? abstract('006') : undefined} autoAdvance={false} />
                    </div>
                </div>)}
        </div>
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant (Device), with and without image.",...o.parameters?.docs?.description}}};export{o as AllVariants,i as Default,a as Rotating,r as Tabs,d as TabsMobile,n as WithImage,O as __namedExportsOrder,E as default};
