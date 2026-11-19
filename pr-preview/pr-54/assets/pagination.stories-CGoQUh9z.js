import{j as e,r as N}from"./iframe-B4H4D0rs.js";import{f as A}from"./index-BtE9JcUf.js";import{I as b}from"./icon-BnH5x8Cc.js";import{C}from"./compact-dropdown-Dbskyzmy.js";import{c as p}from"./cx-BDMMs1jM.js";import"./preload-helper-PPVm8Dsz.js";import"./field.module-CGPLDjcs.js";const S="_root_2bkpa_14",l={"page-btn":"_page-btn_2bkpa_9 _root_17q0n_11",root:S,"page-btn-prev":"_page-btn-prev_2bkpa_58","page-btn-next":"_page-btn-next_2bkpa_62","page-gap":"_page-gap_2bkpa_73","view-amount":"_view-amount_2bkpa_82"};function T(n,a){if(a<=5)return Array.from({length:a},(w,h)=>h+1);const t=Math.max(1,Math.min(n-1,a-2)),s=[t,t+1,t+2],o=[];return s[0]>1&&o.push(1),s[0]>2&&o.push("gap"),o.push(...s),s[2]<a-1&&o.push("gap"),s[2]<a&&o.push(a),o}const I={nav:"Pagination",first:"First page",prev:"Prev page",page:"Page {n}",next:"Next page",last:"Last page"};function g({Variant:n="Pagination",Device:a="Desktop",page:t=1,total:s=12,onPageChange:o,perPage:w=12,perPageOptions:h=[12,24,48],onPerPageChange:_,buttonClassName:D,className:P,labels:k}){const i={...I,...k};if(n==="View amount")return e.jsxs("div",{className:p(p(l["view-amount"],"yw-body-md-reg"),P),children:[e.jsx("span",{id:"yw-view-max",children:"View max."}),e.jsx(C,{options:h,value:w,onChange:r=>_?.(Number(r)),"aria-labelledby":"yw-view-max yw-per-page"}),e.jsx("span",{id:"yw-per-page",children:"per page"})]});const c=r=>o?.(Math.min(s,Math.max(1,r))),d=(r="")=>p(p(l["page-btn"],"yw-body-md-reg"),r,D),V=t<=1,j=t>=s;return e.jsxs("nav",{className:p(l.root,P),"aria-label":i.nav,children:[a==="Mobile"&&e.jsx("button",{type:"button",className:d(),disabled:V,onClick:()=>c(1),"aria-label":i.first,children:e.jsx(b,{name:"first-page",size:24})}),e.jsxs("button",{type:"button",className:d(l["page-btn-prev"]),disabled:V,onClick:()=>c(t-1),"aria-label":i.prev,children:[e.jsx(b,{name:"chevron-left",size:24}),"Prev"]}),e.jsx("ol",{children:(a==="Mobile"?[t]:T(t,s)).map((r,M)=>e.jsx("li",{children:r==="gap"?e.jsx("span",{className:p(l["page-gap"],"yw-body-md-reg"),"aria-hidden":"true",children:"…"}):e.jsx("button",{type:"button",className:d(),"aria-current":r===t?"page":void 0,"aria-label":A(i.page,{n:r}),onClick:()=>c(r),children:r})},r==="gap"?`gap-${M}`:r))}),e.jsxs("button",{type:"button",className:d(l["page-btn-next"]),disabled:j,onClick:()=>c(t+1),"aria-label":i.next,children:["Next",e.jsx(b,{name:"chevron-right",size:24})]}),a==="Mobile"&&e.jsx("button",{type:"button",className:d(),disabled:j,onClick:()=>c(s),"aria-label":i.last,children:e.jsx(b,{name:"last-page",size:24})})]})}g.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{Variant:{required:!1,tsType:{name:"union",raw:"'View amount' | 'Pagination'",elements:[{name:"literal",value:"'View amount'"},{name:"literal",value:"'Pagination'"}]},description:"Figma: Variant",defaultValue:{value:"'Pagination'",computed:!1}},Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device — mobile shows first/last and only the current page",defaultValue:{value:"'Desktop'",computed:!1}},page:{required:!1,tsType:{name:"number"},description:"Current page (1-based)",defaultValue:{value:"1",computed:!1}},total:{required:!1,tsType:{name:"number"},description:"Number of pages",defaultValue:{value:"12",computed:!1}},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},perPage:{required:!1,tsType:{name:"number"},description:"View amount: items per page and the options",defaultValue:{value:"12",computed:!1}},perPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[12, 24, 48]",computed:!1}},onPerPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(n: number) => void",signature:{arguments:[{type:{name:"number"},name:"n"}],return:{name:"void"}}},description:""},buttonClassName:{required:!1,tsType:{name:"string"},description:"Story helper: classes per button for pseudo states"},className:{required:!1,tsType:{name:"string"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"PAGINATION_LABELS"}],raw:"Partial<typeof PAGINATION_LABELS>"},description:"UI text, for translations: { ...PAGINATION_LABELS }"}}};function q(n){const[a,t]=N.useState(n.page??1),[s,o]=N.useState(12);return e.jsx(g,{...n,page:a,onPageChange:t,perPage:s,onPerPageChange:o})}const G={title:"Components/Pagination",parameters:{layout:"padded",docs:{description:{component:'Page navigation (Prev, numbered pages with an ellipsis, Next; mobile adds First/Last and shows only the current page) and the "View max. … per page" amount selector. Buttons change background on hover (duration/fast).'}}},argTypes:{Variant:{control:"inline-radio",options:["View amount","Pagination"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},page:{control:{type:"number",min:1}},total:{control:{type:"number",min:1}}},args:{Variant:"Pagination",Device:"Desktop",page:1,total:12},render:n=>e.jsx(q,{...n},`${n.Variant}-${n.Device}-${n.page}-${n.total}`)},v={},y={args:{page:6}},f={args:{Device:"Mobile"}},x={args:{Variant:"View amount"}},m={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[["Rest",""],["Hover","pseudo-hover"],["Focused","pseudo-focus-visible"]].map(([n,a])=>e.jsxs("div",{children:[e.jsx("p",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",marginBottom:"var(--spacing-2xs)"},children:`State=${n} (Active = current page, Disabled = Prev/First on page 1)`}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-xl)",flexWrap:"wrap"},children:[e.jsx(g,{page:1,total:12,buttonClassName:a||void 0}),e.jsx(g,{Device:"Mobile",page:1,total:12,buttonClassName:a||void 0})]})]},n))})},u={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3xl)",flexWrap:"wrap"},children:["View amount","Pagination"].flatMap(n=>["Desktop","Mobile"].filter(a=>n==="Pagination"||a==="Desktop").map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"yw-body-xs-reg",style:{color:"var(--color-shared-content-secondary)",marginBottom:"var(--spacing-2xs)"},children:`Variant=${n}, Device=${a}`}),e.jsx(g,{Variant:n,Device:a,page:1,total:12})]},n+a)))})},R=["Default","MiddlePage","Mobile","ViewAmount","States","AllVariants"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"{}",...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    page: 6
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'View amount'
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {([['Rest', ''], ['Hover', 'pseudo-hover'], ['Focused', 'pseudo-focus-visible']] as const).map(([label, cls]) => <div key={label}>
                    <p className="yw-body-xs-reg" style={{
        color: 'var(--color-shared-content-secondary)',
        marginBottom: 'var(--spacing-2xs)'
      }}>{\`State=\${label} (Active = current page, Disabled = Prev/First on page 1)\`}</p>
                    <div style={{
        display: 'flex',
        gap: 'var(--spacing-xl)',
        flexWrap: 'wrap'
      }}>
                        <Pagination page={1} total={12} buttonClassName={cls || undefined} />
                        <Pagination Device="Mobile" page={1} total={12} buttonClassName={cls || undefined} />
                    </div>
                </div>)}
        </div>
}`,...m.parameters?.docs?.source},description:{story:"_Pagination buttons: State (Rest, Hover, Focused, Active, Disabled).",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-3xl)',
    flexWrap: 'wrap'
  }}>
            {(['View amount', 'Pagination'] as const).flatMap(v => (['Desktop', 'Mobile'] as const).filter(d => v === 'Pagination' || d === 'Desktop').map(d => <div key={v + d}>
                            <p className="yw-body-xs-reg" style={{
        color: 'var(--color-shared-content-secondary)',
        marginBottom: 'var(--spacing-2xs)'
      }}>{\`Variant=\${v}, Device=\${d}\`}</p>
                            <Pagination Variant={v} Device={d} page={1} total={12} />
                        </div>))}
        </div>
}`,...u.parameters?.docs?.source},description:{story:"Every Figma variant: View amount (Desktop), Pagination × Desktop / Mobile (3).",...u.parameters?.docs?.description}}};export{u as AllVariants,v as Default,y as MiddlePage,f as Mobile,m as States,x as ViewAmount,R as __namedExportsOrder,G as default};
