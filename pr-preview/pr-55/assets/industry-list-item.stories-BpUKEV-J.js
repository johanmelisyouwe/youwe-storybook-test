import{j as e,r as b}from"./iframe-BSf27kik.js";import{I as k}from"./icon-CFiociWL.js";import{C as j}from"./card-media-BjTXrnD5.js";import{c}from"./cx-BDMMs1jM.js";import{r as I}from"./focus-ring.module-B3VHbehf.js";import{M as g}from"./mode-frame-B0BwUMRm.js";import"./preload-helper-PPVm8Dsz.js";import"./asset-81uOSvzA.js";const M="_root_ahomm_24",N="_number_ahomm_39",_="_sub_ahomm_51",T="_content_ahomm_60",D="_preview_ahomm_64",q="_text_ahomm_80",E="_chevron_ahomm_86",S="_customer_ahomm_134",s={"industry-list":"_industry-list_ahomm_11",root:M,number:N,sub:_,content:T,preview:D,text:q,chevron:E,customer:S};function l({Number:r,Title:t,Subtitle:i,preview:n,href:m,Device:a="Desktop",Expanded:f="No",onActivate:v,className:w}){const h=a==="Desktop";return e.jsx("li",{children:e.jsxs("a",{href:m,"data-device":a.toLowerCase(),"data-expanded":f==="Yes"||void 0,className:c(s.root,I.root,w),onMouseEnter:v,onFocus:v,children:[e.jsxs("span",{className:s.content,children:[e.jsx("span",{className:[s.number,h?"yw-body-xl-reg":"yw-body-lg-reg"].join(" "),children:r}),e.jsxs("span",{className:s.text,children:[e.jsx("span",{className:"yw-heading-lg",children:t}),i&&e.jsx("span",{className:c(s.sub,"yw-body-md-reg"),children:e.jsx("span",{children:i})})]})]}),e.jsx("span",{className:s.chevron,"aria-hidden":"true",children:e.jsx(k,{name:"chevron-right",size:24})}),h&&n&&e.jsx(j,{src:n.image,className:s.preview,children:e.jsx("span",{className:c(s.customer,"yw-body-sm-reg"),children:n.customer})})]})})}function y({items:r,Device:t="Desktop"}){const[i,n]=b.useState(0);return e.jsx("ul",{"data-mobile":t==="Mobile"||void 0,className:c(s["industry-list"]),children:r.map((m,a)=>e.jsx(l,{...m,Device:t,Expanded:a===i?"Yes":"No",onActivate:()=>n(a)},m.Number))})}l.__docgenInfo={description:"",methods:[],displayName:"IndustryListItem",props:{Number:{required:!0,tsType:{name:"string"},description:""},Title:{required:!0,tsType:{name:"string"},description:""},Subtitle:{required:!1,tsType:{name:"string"},description:""},preview:{required:!1,tsType:{name:"signature",type:"object",raw:"{ image?: ImageInput; customer: string }",signature:{properties:[{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1}},{key:"customer",value:{name:"string",required:!0}}]}},description:"Preview image (desktop) and the customer shown on it (Figma: Show preview image)"},href:{required:!0,tsType:{name:"string"},description:""},Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device",defaultValue:{value:"'Desktop'",computed:!1}},Expanded:{required:!1,tsType:{name:"union",raw:"'No' | 'Yes'",elements:[{name:"literal",value:"'No'"},{name:"literal",value:"'Yes'"}]},description:"Figma: Expanded",defaultValue:{value:"'No'",computed:!1}},onActivate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};y.__docgenInfo={description:"List of industries; the first is active and the active row follows hover and focus.",methods:[],displayName:"IndustryList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    Number: string
    Title: string
    Subtitle?: string
    /** Preview image (desktop) and the customer shown on it (Figma: Show preview image) */
    preview?: { image?: ImageInput; customer: string }
    href: string
}`,signature:{properties:[{key:"Number",value:{name:"string",required:!0}},{key:"Title",value:{name:"string",required:!0}},{key:"Subtitle",value:{name:"string",required:!1}},{key:"preview",value:{name:"signature",type:"object",raw:"{ image?: ImageInput; customer: string }",signature:{properties:[{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1}},{key:"customer",value:{name:"string",required:!0}}]},required:!1},description:"Preview image (desktop) and the customer shown on it (Figma: Show preview image)"},{key:"href",value:{name:"string",required:!0}}]}}],raw:"Industry[]"},description:""},Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"",defaultValue:{value:"'Desktop'",computed:!1}}}};const L=["Retail & Consumer Goods","Wholesale","Fashion & Lifestyle","Manufacturing","Financial Services","Food & Agriculture","Healthcare & Pharma","Industrial Supplies & Components","Construction & Building Materials","Home & Living","Automotive & Cycling","Education & Training","IT & Technology Services","Travel and Hospitality"],p=L.map((r,t)=>({Number:String(t+1).padStart(2,"0"),Title:r,Subtitle:t===0?"eCommerce Infrastructures for Modern Retail":void 0,preview:t===0?{customer:"G-Star RAW"}:void 0,href:"#"})),x={Desktop:1280,Mobile:336},H={title:"Components/Industry List Item",parameters:{layout:"padded",docs:{description:{component:"**Parked (9 November 2026):** the Industries template has a new design; this component is kept for reference and will be revisited with that template. Numbered list row for industries. Collapsed: dimmed title. Expanded (hover/focus): white title, subtitle and, on desktop, a floating preview image. In `IndustryList` the first item is active and the active row follows hover and focus."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Expanded:{control:"inline-radio",options:["No","Yes"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Expanded:"Yes",Mode:"Dark"},render:({Device:r,Expanded:t,Mode:i})=>e.jsx(g,{Mode:i,children:e.jsx("div",{style:{maxWidth:x[r],paddingTop:120},children:e.jsx("ul",{className:s["industry-list"],children:e.jsx(l,{...p[0],Device:r,Expanded:t})})})})},u={},o={parameters:{controls:{include:["Device","Mode"]}},render:({Device:r,Mode:t})=>e.jsx(g,{Mode:t,children:e.jsx("div",{style:{maxWidth:x[r],paddingTop:120},children:e.jsx(y,{items:p.slice(0,6),Device:r})})})},d={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(g,{Mode:r,children:e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-xl)",paddingTop:120},children:[["No","Yes"].map(t=>e.jsx("div",{style:{maxWidth:1280},children:e.jsx("ul",{className:s["industry-list"],children:e.jsx(l,{...p[0],Expanded:t})})},t)),e.jsx("div",{style:{width:336},children:e.jsx("ul",{"data-mobile":!0,className:s["industry-list"],children:["No","Yes"].map(t=>e.jsx(l,{...p[0],Device:"Mobile",Expanded:t},t))})})]})},r))})},G=["Default","List","AllVariants"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['Device', 'Mode']
    }
  },
  render: ({
    Device,
    Mode
  }) => <ModeFrame Mode={Mode}>
            <div style={{
      maxWidth: W[Device],
      paddingTop: 120
    }}>
                <IndustryList items={ITEMS.slice(0, 6)} Device={Device} />
            </div>
        </ModeFrame>
}`,...o.parameters?.docs?.source},description:{story:"The full list: hover or tab through the rows.",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        gap: 'var(--spacing-xl)',
        paddingTop: 120
      }}>
                        {(['No', 'Yes'] as const).map(e => <div key={e} style={{
          maxWidth: 1280
        }}>
                                <ul className={styles['industry-list']}>
                                    <IndustryListItem {...ITEMS[0]} Expanded={e} />
                                </ul>
                            </div>)}
                        <div style={{
          width: 336
        }}>
                            <ul data-mobile className={styles['industry-list']}>
                                {(['No', 'Yes'] as const).map(e => <IndustryListItem key={e} {...ITEMS[0]} Device="Mobile" Expanded={e} />)}
                            </ul>
                        </div>
                    </div>
                </ModeFrame>)}
        </div>
}`,...d.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Expanded × Mode.",...d.parameters?.docs?.description}}};export{d as AllVariants,u as Default,o as List,G as __namedExportsOrder,H as default};
