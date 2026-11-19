import{j as e}from"./iframe-CbOnJm3P.js";import{L as a,a as s,C as l}from"./location-Bygp32kp.js";import{M as m}from"./mode-frame-Bj7QCpey.js";import"./preload-helper-PPVm8Dsz.js";import"./cx-BDMMs1jM.js";const u={Desktop:1280,Mobile:336},d=[{City:"Rotterdam",Country:"The Netherlands",Timezone:"GMT+1",timeZone:"Europe/Amsterdam"},{City:"Groningen",Country:"The Netherlands",Timezone:"GMT+1",timeZone:"Europe/Amsterdam"},{City:"London",Country:"United Kingdom",Timezone:"GMT+0",timeZone:"Europe/London"},{City:"Leeds",Country:"United Kingdom",Timezone:"GMT+0",timeZone:"Europe/London"},{City:"Shrewsbury",Country:"United Kingdom",Timezone:"GMT+0",timeZone:"Europe/London"},{City:"Stockholm",Country:"Sweden",Timezone:"GMT+1",timeZone:"Europe/Stockholm"},{City:"Bandung",Country:"Indonesia",Timezone:"GMT+7",timeZone:"Asia/Jakarta"},{City:"Kyiv",Country:"Ukraine",Timezone:"GMT+2",timeZone:"Europe/Kyiv"}],v={title:"Components/Location",parameters:{layout:"padded",docs:{description:{component:"Office row with city, country, timezone and a live Clock. Stack rows in `LocationList`. Motion: clock digits flip on change (520ms, ease/emphasized)."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Mode:"Dark"},render:({Device:o,Mode:p})=>e.jsx(m,{Mode:p,children:e.jsx("div",{style:{maxWidth:u[o]},children:e.jsx(a,{children:d.map(c=>e.jsx(s,{...c,Device:o},c.City))})})})},i={},r={args:{Device:"Mobile"}},t={parameters:{layout:"centered",controls:{include:["Mode"]}},render:({Mode:o})=>e.jsx(m,{Mode:o,children:e.jsx(l,{timeZone:"Europe/Amsterdam",label:"Rotterdam"})})},n={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(o=>e.jsx(m,{Mode:o,children:e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[e.jsx("div",{style:{maxWidth:1280},children:e.jsx(a,{children:e.jsx(s,{...d[0],time:"11:12"})})}),e.jsx("div",{style:{width:336},children:e.jsx(a,{children:e.jsx(s,{...d[0],Device:"Mobile",time:"11:12"})})}),e.jsx(l,{timeZone:"Europe/Amsterdam",time:"11:12"})]})},o))})},L=["Default","Mobile","ClockOnly","AllVariants"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode}>
            <Clock timeZone="Europe/Amsterdam" label="Rotterdam" />
        </ModeFrame>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Dark', 'Light'] as Mode[]).map(m => <ModeFrame key={m} Mode={m}>
                    <div style={{
        display: 'grid',
        gap: 'var(--spacing-lg)'
      }}>
                        <div style={{
          maxWidth: 1280
        }}>
                            <LocationList>
                                <Location {...OFFICES[0]} time="11:12" />
                            </LocationList>
                        </div>
                        <div style={{
          width: 336
        }}>
                            <LocationList>
                                <Location {...OFFICES[0]} Device="Mobile" time="11:12" />
                            </LocationList>
                        </div>
                        <Clock timeZone="Europe/Amsterdam" time="11:12" />
                    </div>
                </ModeFrame>)}
        </div>
}`,...n.parameters?.docs?.source},description:{story:"Every Figma variant: Location Mode × Device, and Clock Mode (fixed at 11:12 as in Figma).",...n.parameters?.docs?.description}}};export{n as AllVariants,t as ClockOnly,i as Default,r as Mobile,L as __namedExportsOrder,v as default};
