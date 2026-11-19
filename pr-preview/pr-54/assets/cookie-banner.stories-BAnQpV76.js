import{r as d,j as e}from"./iframe-RIzWv_pe.js";import{B as p}from"./button-DTlfqX8k.js";import{c as m}from"./cx-BDMMs1jM.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-DifRw7KX.js";const h="_root_ydh8m_21",x="_actions_ydh8m_48",b="_message_ydh8m_65",n={root:h,actions:x,message:b},D={region:"Cookie consent",accept:"Accept",settings:"Cookie settings"};function s({Device:t="Desktop",fixed:u=!1,privacyHref:f="#",onAccept:v,onSettings:g,autoFocus:l=!1,labels:y}){const r={...D,...y},c=d.useRef(null);return d.useEffect(()=>{l&&c.current?.focus()},[l]),e.jsxs("section",{ref:c,tabIndex:-1,role:"region","aria-label":r.region,"data-mobile":t==="Mobile"||void 0,"data-fixed":u||void 0,className:m(n.root),children:[e.jsxs("p",{className:m(n.message,"yw-body-md-reg"),children:["We collect data to optimize your online experience. Want to know more? Check out our ",e.jsx("a",{href:f,children:"Privacy Policy"}),"."]}),e.jsxs("div",{className:n.actions,children:[e.jsx(p,{Variant:"Primary",Size:"M",label:r.accept,onClick:v}),e.jsx(p,{Variant:"Solid",Size:"M",label:r.settings,onClick:g})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"CookieBanner",props:{Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device",defaultValue:{value:"'Desktop'",computed:!1}},fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed to the bottom of the viewport (off in stories)",defaultValue:{value:"false",computed:!1}},privacyHref:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}},onAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSettings:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Move focus into the banner when it appears (Figma interaction note)",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"COOKIE_BANNER_LABELS"}],raw:"Partial<typeof COOKIE_BANNER_LABELS>"},description:"UI text, for translations: { ...COOKIE_BANNER_LABELS }"}}};const j={title:"Components/Cookie Banner",component:s,parameters:{layout:"centered",docs:{description:{component:"Bottom-right on desktop, full width at the bottom on mobile. Motion: enters from the bottom (distance/md, duration/slow, ease/emphasized). Focus moves into the banner when it appears."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Device:"Desktop",fixed:!1},render:t=>e.jsx("div",{style:{width:t.Device==="Mobile"?366:600},children:e.jsx(s,{...t},t.Device)})},a={},i={args:{Device:"Mobile"}},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-xl)",alignItems:"start"},children:[e.jsx("div",{style:{width:600},children:e.jsx(s,{Device:"Desktop"})}),e.jsx("div",{style:{width:366},children:e.jsx(s,{Device:"Mobile"})})]})},C=["Default","Mobile","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--spacing-xl)',
    alignItems: 'start'
  }}>
            <div style={{
      width: 600
    }}>
                <CookieBanner Device="Desktop" />
            </div>
            <div style={{
      width: 366
    }}>
                <CookieBanner Device="Mobile" />
            </div>
        </div>
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant (Device).",...o.parameters?.docs?.description}}};export{o as AllVariants,a as Default,i as Mobile,C as __namedExportsOrder,j as default};
