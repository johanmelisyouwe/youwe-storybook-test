import{j as e}from"./iframe-DhUkatZW.js";import{O as r}from"./offices-CBdK9k5F.js";import{M as d}from"./mode-frame-TxBzz9zF.js";import"./preload-helper-PPVm8Dsz.js";import"./location-CWut6Lnu.js";import"./cx-BDMMs1jM.js";import"./block.module-ifZFSSN6.js";import"./accordion-list.module-B4IZp007.js";const s=[{City:"Rotterdam",Country:"The Netherlands",Timezone:"GMT+1",timeZone:"Europe/Amsterdam"},{City:"Groningen",Country:"The Netherlands",Timezone:"GMT+1",timeZone:"Europe/Amsterdam"},{City:"London",Country:"United Kingdom",Timezone:"GMT+0",timeZone:"Europe/London"},{City:"Leeds",Country:"United Kingdom",Timezone:"GMT+0",timeZone:"Europe/London"},{City:"Shrewsbury",Country:"United Kingdom",Timezone:"GMT+0",timeZone:"Europe/London"},{City:"Stockholm",Country:"Sweden",Timezone:"GMT+1",timeZone:"Europe/Stockholm"},{City:"Bandung",Country:"Indonesia",Timezone:"GMT+7",timeZone:"Asia/Jakarta"},{City:"Kyiv",Country:"Ukraine",Timezone:"GMT+2",timeZone:"Europe/Kyiv"}],a={Kicker:"Our offices",Title:"Eight offices, one team",Body:"Live local time in every Youwe office. Whatever the hour, someone on the team is at work."},l={Desktop:"100%",Mobile:360},k={title:"Content blocks/Offices",parameters:{layout:"fullscreen",docs:{description:{component:"Header and the list of offices with a live local clock. Motion: block reveal; clock digits flip on change."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Mode:"Dark","Show header":!0},render:({Device:i="Desktop",Mode:o,"Show header":m})=>e.jsx(d,{Mode:o,padding:0,children:e.jsx("div",{style:{maxWidth:l[i]},children:e.jsx(r,{Device:i,...m?a:{},offices:s})})})},t={},n={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(i=>e.jsx(d,{Mode:i,padding:0,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(r,{...a,offices:s.map(o=>({...o,time:"11:12"}))})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(r,{Device:"Mobile",...a,offices:s.map(o=>({...o,time:"11:12"}))})})]})},i))})},x=["Default","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Dark', 'Light'] as Mode[]).map(m => <ModeFrame key={m} Mode={m} padding={0}>
                    <div style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                        <div style={{
          width: 1440,
          flexShrink: 0
        }}>
                            <Offices {...HEAD} offices={OFFICES.map(o => ({
            ...o,
            time: '11:12'
          }))} />
                        </div>
                        <div style={{
          width: 360,
          flexShrink: 0
        }}>
                            <Offices Device="Mobile" {...HEAD} offices={OFFICES.map(o => ({
            ...o,
            time: '11:12'
          }))} />
                        </div>
                    </div>
                </ModeFrame>)}
        </div>
}`,...n.parameters?.docs?.source},description:{story:"Every Figma variant: Mode × Device (clocks fixed at 11:12 as in Figma).",...n.parameters?.docs?.description}}};export{n as AllVariants,t as Default,x as __namedExportsOrder,k as default};
