import{j as t}from"./iframe-RIzWv_pe.js";import{T as s}from"./timetable-DIux5GHL.js";import"./preload-helper-PPVm8Dsz.js";import"./cx-BDMMs1jM.js";const d={title:"Components/Timetable",component:s,parameters:{layout:"padded"},argTypes:{items:{control:"object"}},args:{items:[{time:"2:00 PM – 3:00 PM",title:"Arrival, coffee and pastries"},{time:"3:00 PM – 4:00 PM",title:"Keynote: what is next for product data, with Pimcore"},{time:"7:00 PM – 9:00 PM",title:"Seated dinner into après with PIM specialists from Youwe and Pimcore"}]},render:a=>t.jsx("div",{style:{maxWidth:740},children:t.jsx(s,{...a})})},e={},r={render:a=>t.jsx("div",{style:{maxWidth:343},children:t.jsx(s,{...a})})},c=["Default","Narrow"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 343
  }}>
            <Timetable {...args} />
        </div>
}`,...r.parameters?.docs?.source}}};export{e as Default,r as Narrow,c as __namedExportsOrder,d as default};
