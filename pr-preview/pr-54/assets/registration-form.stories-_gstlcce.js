import{j as a}from"./iframe-CNsxMot_.js";import{R as i}from"./registration-form-BJg2Ievx.js";import"./preload-helper-PPVm8Dsz.js";import"./text-input-q419xv1W.js";import"./icon-B5n_Fust.js";import"./field-_j5bS6UR.js";import"./cx-BDMMs1jM.js";import"./field.module-CGPLDjcs.js";import"./radio-CKd7C0Xl.js";import"./checkbox-BpxFOaoy.js";import"./button-BRsdjWDC.js";import"./toaster-CAOwePAH.js";import"./index-BtE9JcUf.js";const R={title:"Components/Registration form",component:i,parameters:{layout:"padded"},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},defaultState:{control:"inline-radio",options:["Form","Registered"]}},args:{Device:"Desktop",defaultState:"Form",choice:{name:"slopes",label:"Will you join on the snow?",options:["Yes, I will join on the slopes","No, I will join the drinks and discussion off the slope"]},question:{name:"dietary",label:"Dietary requirements",placeholder:"For the seated dinner"},onSubmit:()=>new Promise(e=>setTimeout(e,800))},render:e=>a.jsx("div",{style:{maxWidth:e.Device==="Mobile"?343:740},children:a.jsx(i,{...e},e.defaultState)})},r={},o={args:{defaultState:"Registered"}},t={name:"Error",args:{onSubmit:()=>new Promise((e,n)=>setTimeout(()=>n(new Error("503")),600))}},s={args:{Device:"Mobile"}},w=["Default","Registered","Failed","Mobile"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
