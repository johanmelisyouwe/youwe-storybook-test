import{j as i}from"./iframe-CBcYq4hM.js";import{R as n}from"./registration-form-CXcfD0dH.js";import"./preload-helper-PPVm8Dsz.js";import"./text-input-DF17IDYk.js";import"./icon-DPzqSC0C.js";import"./field-DZH91c6e.js";import"./cx-BDMMs1jM.js";import"./field.module-CGPLDjcs.js";import"./radio-Cq8gK-0_.js";import"./text-area-BHsFxwAD.js";import"./dropdown-BHU2cLSs.js";import"./options-panel-1PTecIhP.js";import"./use-listbox-JJuLDCZh.js";import"./checkbox-CpP8Yvx_.js";import"./button-BY_kcHvm.js";import"./toaster-B1O8JdPY.js";import"./index-BtE9JcUf.js";const R={title:"Components/Registration form",component:n,parameters:{layout:"padded"},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},defaultState:{control:"inline-radio",options:["Form","Registered"]}},args:{Device:"Desktop",defaultState:"Form",choice:{name:"slopes",label:"Will you join on the snow?",options:["Yes, I will join on the slopes","No, I will join the drinks and discussion off the slope"]},question:{name:"dietary",label:"Dietary requirements",placeholder:"For the seated dinner"},onSubmit:()=>new Promise(e=>setTimeout(e,800))},render:e=>i.jsx("div",{style:{maxWidth:e.Device==="Mobile"?343:740},children:i.jsx(n,{...e},e.defaultState)})},r={},t={args:{defaultState:"Registered"}},s={name:"Error",args:{onSubmit:()=>new Promise((e,c)=>setTimeout(()=>c(new Error("503")),600))}},a={args:{Device:"Mobile"}},o={args:{choice:void 0,question:void 0,phone:!0,optIn:!1,notice:i.jsxs("p",{children:["Youwe needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our"," ",i.jsx("a",{href:"#",children:"Privacy Policy"}),"."]}),labels:{submit:"Download the whitepaper",successTitle:"Thank you, {name}",successMessage:"The whitepaper arrives in your inbox straight away."}}},F=["Default","Registered","Failed","Mobile","Download"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultState: 'Registered'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    onSubmit: () => new Promise((_, reject) => setTimeout(() => reject(new Error('503')), 600))
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    choice: undefined,
    question: undefined,
    phone: true,
    optIn: false,
    notice: <p>
                Youwe needs the contact information you provide to us to contact
                you about our products and services. You may unsubscribe from
                these communications at any time. For information on how to
                unsubscribe, as well as our privacy practices and commitment to
                protecting your privacy, please review our{' '}
                <a href="#">Privacy Policy</a>.
            </p>,
    labels: {
      submit: 'Download the whitepaper',
      successTitle: 'Thank you, {name}',
      successMessage: 'The whitepaper arrives in your inbox straight away.'
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Whitepaper download: phone field, privacy notice instead of the opt-in, own button and confirmation text",...o.parameters?.docs?.description}}};export{r as Default,o as Download,s as Failed,a as Mobile,t as Registered,F as __namedExportsOrder,R as default};
