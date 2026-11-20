import{r as y,j as e}from"./iframe-YLxJkV3Y.js";import{B as p}from"./button-2sIXhgoB.js";import{C as v,r as D}from"./card-media-CwR6Uwur.js";import{c as n}from"./cx-BDMMs1jM.js";import{r as E}from"./focus-ring.module-B3VHbehf.js";const L="_root_eibj3_20",z="_frame_eibj3_29",H="_header_eibj3_48",Q="_kicker_eibj3_48",O="_slide_eibj3_52",P="_bg_eibj3_57",U="_chapters_eibj3_65",Y="_body_eibj3_94",G="_progress_eibj3_166",J="_line_eibj3_228",W="_chapter_eibj3_65",X="_mask_eibj3_254",Z="_index_eibj3_301",$="_vindex_eibj3_313",K="_stack_eibj3_480",ee="_step_eibj3_485",ae="_current_eibj3_490",se="_steps_eibj3_499",a={root:L,frame:z,header:H,kicker:Q,slide:O,bg:P,chapters:U,body:Y,"slide-image":"_slide-image_eibj3_119",progress:G,line:J,chapter:W,mask:X,"slide-heading":"_slide-heading_eibj3_268","slide-text":"_slide-text_eibj3_268",index:Z,vindex:$,"vindex-bar":"_vindex-bar_eibj3_333","slide-secondary":"_slide-secondary_eibj3_435","slide-value":"_slide-value_eibj3_438","slide-pills":"_slide-pills_eibj3_441","slide-attribution":"_slide-attribution_eibj3_446","slide-person":"_slide-person_eibj3_453","slide-list":"_slide-list_eibj3_458",stack:K,step:ee,current:ae,steps:se};function f(s){switch(s.Type){case"Service":return e.jsxs("div",{className:a.slide,children:[e.jsxs("div",{className:a["slide-text"],children:[e.jsxs("h3",{className:a["slide-heading"],children:[e.jsx("span",{className:"yw-body-sm-bold",children:s.eyebrow}),e.jsx("span",{className:n("yw-heading-3xl",a.mask),children:e.jsx("span",{children:s.Title})})]}),e.jsx("p",{className:"yw-body-lg-reg",children:s.body})]}),s.pills&&e.jsx("div",{className:a["slide-pills"],children:s.pills.map(l=>e.jsx("span",{className:n(D.tag,"yw-body-xs-reg"),children:l},l))}),s.button&&e.jsx(p,{Variant:"Solid",Size:"M",label:s.button.label,href:s.button.href})]});case"Quote":return e.jsxs("figure",{className:a.slide,style:{margin:0},children:[e.jsx("blockquote",{className:"yw-heading-2xl",children:s.quote}),e.jsxs("figcaption",{className:a["slide-attribution"],children:[e.jsxs("span",{className:a["slide-person"],children:[e.jsx("span",{className:"yw-body-lg-med",children:s.name}),s.role&&e.jsx("span",{className:n(a["slide-secondary"],"yw-body-md-reg"),children:s.role})]}),s.button&&e.jsx(p,{Variant:"Outline",Size:"M",label:s.button.label,href:s.button.href})]})]});case"Stat":return e.jsxs("div",{className:a.slide,children:[e.jsxs("h3",{className:a["slide-heading"],children:[e.jsx("span",{className:"yw-body-sm-bold",children:s.eyebrow}),e.jsx("span",{className:n(a["slide-value"],"yw-heading-3xl",a.mask),children:e.jsx("span",{children:s.value})})]}),e.jsx("p",{className:"yw-heading-md",children:s.statement}),s.button&&e.jsx(p,{Variant:"Outline",Size:"M",label:s.button.label,href:s.button.href})]});case"Case":return e.jsxs("div",{"data-case":!0,className:n(a.slide),children:[e.jsx(v,{src:s.image,className:a["slide-image"]}),e.jsxs("div",{className:a["slide-text"],children:[e.jsx("span",{className:"yw-body-sm-bold",children:s.eyebrow}),e.jsx("h3",{className:n("yw-heading-xl",a.mask),style:{margin:0},children:e.jsx("span",{children:s.Title})}),e.jsx("p",{className:n(a["slide-secondary"],"yw-body-lg-reg"),children:s.body}),s.button&&e.jsx(p,{Variant:"Solid",Size:"M",label:s.button.label,href:s.button.href})]})]});default:return e.jsxs("div",{className:a.slide,children:[e.jsxs("h3",{className:a["slide-heading"],children:[e.jsx("span",{className:"yw-body-sm-bold",children:s.eyebrow}),e.jsx("span",{className:n("yw-heading-xl",a.mask),children:e.jsx("span",{children:s.Title})})]}),e.jsx("p",{className:n(a["slide-secondary"],"yw-body-lg-reg"),children:s.body}),s.list&&e.jsx("ul",{className:a["slide-list"],children:s.list.map(l=>e.jsx("li",{className:"yw-body-md-med",children:l},l))})]})}}function I({label:s,active:l,onSelect:u,hoverSelect:g=!0,className:i}){return e.jsxs("button",{type:"button",className:n(a.vindex,E.root,i),"aria-current":l?"true":void 0,onClick:u,onMouseEnter:g?u:void 0,onFocus:g?u:void 0,children:[e.jsx("span",{className:a["vindex-bar"],"aria-hidden":"true"}),e.jsx("span",{className:"yw-body-sm-bold",children:s})]})}const re=(s,l=0,u=1)=>Math.min(u,Math.max(l,s));function te({Index:s="Right",Device:l="Desktop",Kicker:u,Tagline:g,items:i,backgroundImage:j,"Show progress":M,"Show steps":k=!0,Behaviour:q,pin:C=!1,initial:A=0}){const[d,N]=y.useState(A),h=y.useRef(null),o=i.length,[B,V]=y.useState(!1);y.useEffect(()=>{V(window.matchMedia("(prefers-reduced-motion: reduce)").matches)},[]);const c=(q==="Scroll"||C)&&!B,T=M??q==="Scroll";y.useEffect(()=>{if(!c)return;let t=0;const r=()=>{t=0;const m=h.current;if(!m)return;const R=m.getBoundingClientRect(),S=re(-R.top/Math.max(1,m.offsetHeight-window.innerHeight));m.style.setProperty("--p",S.toFixed(4)),N(Math.min(o-1,Math.floor(S*o*.9999)))},b=()=>{t||(t=requestAnimationFrame(r))};return r(),window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b),cancelAnimationFrame(t)}},[c,o]);const F=t=>{if(!c){N(t);return}const r=h.current;if(!r)return;const b=r.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:b+(t+.5)/o*(r.offsetHeight-window.innerHeight),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},x=e.jsxs("div",{className:a.header,children:[e.jsxs("h2",{className:a.kicker,children:[e.jsx("span",{className:a.line,"aria-hidden":"true"}),e.jsx("span",{className:"yw-body-sm-bold",children:u})]}),g&&e.jsx("span",{className:"yw-body-sm-bold",children:g})]}),_=!!j||i.some(t=>t.image),w=j===!0?void 0:j;return l==="Mobile"&&c?e.jsx("section",{ref:h,"data-mobile":!0,"data-pinned":!0,className:n(a.root),style:{"--_steps":o},"aria-label":u,children:e.jsxs("div",{className:a.frame,children:[_&&i.map((t,r)=>e.jsx(v,{src:t.image??w,className:a.bg,placeholder:!1,style:{"--_i":r,"--r":r===0?"150%":void 0}},r)),x,e.jsx("div",{className:a.current,children:k&&e.jsx("span",{className:a.steps,"aria-hidden":"true",children:i.map((t,r)=>e.jsx("span",{"data-done":r<=d||void 0},r))})}),e.jsx("div",{className:a.chapters,"aria-live":"polite",children:i.map((t,r)=>e.jsx("div",{"data-active":r===d||void 0,"data-past":r<d||void 0,className:n(a.chapter),"aria-hidden":r!==d,inert:r!==d?!0:void 0,children:e.jsx(f,{...t.slide})},t.label))}),T&&e.jsx("div",{className:a.progress,"aria-hidden":"true",children:e.jsx("span",{})})]})}):l==="Mobile"?e.jsx("section",{"data-mobile":!0,"data-left":s==="Left"||void 0,className:n(a.root),"aria-label":u,children:e.jsxs("div",{className:a.frame,children:[_&&e.jsx(v,{src:i[0].image??w,className:a.bg,placeholder:!1}),x,e.jsx("div",{className:a.stack,children:i.map((t,r)=>e.jsxs("div",{"data-active":!0,className:a.step,children:[e.jsx("div",{className:a.current,children:k&&e.jsx("span",{className:a.steps,"aria-hidden":"true",children:i.map((b,m)=>e.jsx("span",{"data-done":m<=r||void 0},m))})}),e.jsx(f,{...t.slide})]},t.label))})]})}):e.jsx("section",{ref:h,"data-pinned":c||void 0,"data-left":s==="Left"||void 0,className:n(a.root),style:{"--_steps":o,"--p":c?void 0:(d+.5)/o},"aria-label":u,children:e.jsxs("div",{className:a.frame,children:[_&&i.map((t,r)=>e.jsx(v,{src:t.image??w,className:a.bg,placeholder:!1,style:{"--_i":r,"--r":r===0?"150%":void 0}},r)),x,e.jsxs("div",{className:a.body,children:[e.jsx("div",{className:a.chapters,"aria-live":"polite",children:i.map((t,r)=>e.jsx("div",{"data-active":r===d||void 0,"data-past":r<d||void 0,className:n(a.chapter),"aria-hidden":r!==d,inert:r!==d?!0:void 0,children:e.jsx(f,{...t.slide})},t.label))}),e.jsx("ul",{className:a.index,children:i.map((t,r)=>e.jsx("li",{style:{"--_i":r},children:e.jsx(I,{label:t.label,active:r===d,onSelect:()=>F(r),hoverSelect:!c})},t.label))})]}),T&&e.jsx("div",{className:a.progress,"aria-hidden":"true",children:e.jsx("span",{})})]})})}f.__docgenInfo={description:"",methods:[],displayName:"Slide"};I.__docgenInfo={description:"",methods:[],displayName:"IndexItem",props:{label:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hoverSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};te.__docgenInfo={description:"",methods:[],displayName:"VerticalSlider",props:{Index:{required:!1,tsType:{name:"union",raw:"'Right' | 'Left'",elements:[{name:"literal",value:"'Right'"},{name:"literal",value:"'Left'"}]},description:"Figma: Index",defaultValue:{value:"'Right'",computed:!1}},Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device",defaultValue:{value:"'Desktop'",computed:!1}},Kicker:{required:!0,tsType:{name:"string"},description:""},Tagline:{required:!1,tsType:{name:"string"},description:"Figma: Tagline (Show tagline)"},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; slide: SlideData; image?: ImageInput }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"slide",value:{name:"union",raw:`| {
      Type: 'Service'
      eyebrow: string
      Title: string
      body: string
      pills?: string[]
      button?: Btn
  }
| {
      Type: 'Quote'
      quote: string
      name: string
      role?: string
      button?: Btn
  }
| {
      Type: 'Stat'
      eyebrow: string
      value: string
      statement: string
      button?: Btn
  }
| {
      Type: 'Case'
      eyebrow: string
      Title: string
      body: string
      image?: ImageInput
      button?: Btn
  }
| {
      Type: 'Content'
      eyebrow: string
      Title: string
      body: string
      list?: string[]
  }`,elements:[{name:"signature",type:"object",raw:`{
    Type: 'Service'
    eyebrow: string
    Title: string
    body: string
    pills?: string[]
    button?: Btn
}`,signature:{properties:[{key:"Type",value:{name:"literal",value:"'Service'",required:!0}},{key:"eyebrow",value:{name:"string",required:!0}},{key:"Title",value:{name:"string",required:!0}},{key:"body",value:{name:"string",required:!0}},{key:"pills",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"button",value:{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
    Type: 'Quote'
    quote: string
    name: string
    role?: string
    button?: Btn
}`,signature:{properties:[{key:"Type",value:{name:"literal",value:"'Quote'",required:!0}},{key:"quote",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"role",value:{name:"string",required:!1}},{key:"button",value:{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
    Type: 'Stat'
    eyebrow: string
    value: string
    statement: string
    button?: Btn
}`,signature:{properties:[{key:"Type",value:{name:"literal",value:"'Stat'",required:!0}},{key:"eyebrow",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"statement",value:{name:"string",required:!0}},{key:"button",value:{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
    Type: 'Case'
    eyebrow: string
    Title: string
    body: string
    image?: ImageInput
    button?: Btn
}`,signature:{properties:[{key:"Type",value:{name:"literal",value:"'Case'",required:!0}},{key:"eyebrow",value:{name:"string",required:!0}},{key:"Title",value:{name:"string",required:!0}},{key:"body",value:{name:"string",required:!0}},{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1}},{key:"button",value:{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
    Type: 'Content'
    eyebrow: string
    Title: string
    body: string
    list?: string[]
}`,signature:{properties:[{key:"Type",value:{name:"literal",value:"'Content'",required:!0}},{key:"eyebrow",value:{name:"string",required:!0}},{key:"Title",value:{name:"string",required:!0}},{key:"body",value:{name:"string",required:!0}},{key:"list",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],required:!0}},{key:"image",value:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}],required:!1}}]}}],raw:"{ label: string; slide: SlideData; image?: ImageInput }[]"},description:"Chapters; `image` is the chapter's full-bleed background (opens with a circular wipe)"},backgroundImage:{required:!1,tsType:{name:"union",raw:"ImageInput | true",elements:[{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}]},{name:"literal",value:"true"}]},description:"Figma: Show background image"},"Show progress":{required:!1,tsType:{name:"boolean"},description:"Figma: Show progress (default on for Behaviour Scroll)"},"Show steps":{required:!1,tsType:{name:"boolean"},description:"Figma: Show steps (mobile)",defaultValue:{value:"true",computed:!1}},Behaviour:{required:!1,tsType:{name:"union",raw:"'Click' | 'Scroll'",elements:[{name:"literal",value:"'Click'"},{name:"literal",value:"'Scroll'"}]},description:"Click: hover / click switches slides. Scroll: the section pins, the progress line fills with scroll and slides change one by one (desktop and mobile)."},pin:{required:!1,tsType:{name:"boolean"},description:'@deprecated Use Behaviour="Scroll"',defaultValue:{value:"false",computed:!1}},initial:{required:!1,tsType:{name:"number"},description:"Initially active item",defaultValue:{value:"0",computed:!1}}}};export{I,f as S,te as V};
