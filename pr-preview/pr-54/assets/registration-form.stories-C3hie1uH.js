import{j as a}from"./iframe-RIzWv_pe.js";import{R as i}from"./registration-form-BLgEfQke.js";import"./preload-helper-PPVm8Dsz.js";import"./text-input-D3TOETeX.js";import"./icon-DifRw7KX.js";import"./field-n-1VCLi3.js";import"./cx-BDMMs1jM.js";import"./field.module-CGPLDjcs.js";import"./radio-BHFgIq22.js";import"./checkbox-CtIKwqeS.js";import"./button-DTlfqX8k.js";import"./toaster-BzkJgQ64.js";import"./index-BtE9JcUf.js";const R={title:"Components/Registration form",component:i,parameters:{layout:"padded"},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},defaultState:{control:"inline-radio",options:["Form","Registered"]}},args:{Device:"Desktop",defaultState:"Form",choice:{name:"slopes",label:"Will you join on the snow?",options:["Yes, I will join on the slopes","No, I will join the drinks and discussion off the slope"]},question:{name:"dietary",label:"Dietary requirements",placeholder:"For the seated dinner"},onSubmit:()=>new Promise(e=>setTimeout(e,800))},render:e=>a.jsx("div",{style:{maxWidth:e.Device==="Mobile"?343:740},children:a.jsx(i,{...e},e.defaultState)})},r={},o={args:{defaultState:"Registered"}},t={name:"Error",args:{onSubmit:()=>new Promise((e,n)=>setTimeout(()=>n(new Error("503")),600))}},s={args:{Device:"Mobile"}},w=["Default","Registered","Failed","Mobile"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultState: 'Registered'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    onSubmit: () => new Promise((_, reject) => setTimeout(() => reject(new Error('503')), 600))
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...s.parameters?.docs?.source}}};export{r as Default,t as Failed,s as Mobile,o as Registered,w as __namedExportsOrder,R as default};
