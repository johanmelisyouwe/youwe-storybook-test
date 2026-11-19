import{j as a}from"./iframe-DgyRRh4Z.js";import{E as s}from"./event-details-Cr9wfLGp.js";import"./preload-helper-PPVm8Dsz.js";import"./button-BfkNqhRD.js";import"./icon-BJIRriEA.js";import"./cx-BDMMs1jM.js";const d={title:"Components/Event details",component:s,parameters:{layout:"padded"},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},items:{control:"object"}},args:{Device:"Desktop",items:[{label:"Date",value:"December 3, 2026"},{label:"Time",value:"2:00 PM to 9:00 PM (CET)"},{label:"Venue",value:`SnowWorld Zoetermeer
Buytenparklaan 30
2717 AX Zoetermeer
Netherlands`}],primary:{label:"Register now",href:"#"},secondary:{label:"Plan your route",href:"#"}},render:t=>a.jsx("div",{style:{maxWidth:t.Device==="Mobile"?343:405},children:a.jsx(s,{...t})})},e={},r={args:{Device:"Mobile"}},o={name:"Without buttons",args:{primary:void 0,secondary:void 0}},u=["Desktop","Mobile","WithoutButtons"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Without buttons',
  args: {
    primary: undefined,
    secondary: undefined
  }
}`,...o.parameters?.docs?.source}}};export{e as Desktop,r as Mobile,o as WithoutButtons,u as __namedExportsOrder,d as default};
