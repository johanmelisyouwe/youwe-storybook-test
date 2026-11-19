import{j as a}from"./iframe-CMEFyaA1.js";import{I as f,i as v}from"./icon-a91ShoXL.js";import{c as g}from"./cx-BDMMs1jM.js";import"./preload-helper-PPVm8Dsz.js";const y="_root_kym8z_11",h="_icon_kym8z_41",i={root:y,icon:h};function s({Variant:e="Info",Size:r="S","Show icon":c=!0,label:d,iconName:m="star-full",className:p}){return a.jsxs("span",{"data-variant":e.toLowerCase(),"data-size":r.toLowerCase(),className:g(i.root,p),children:[c&&a.jsx("span",{className:i.icon,"aria-hidden":"true",children:a.jsx(f,{name:m,size:r==="M"?16:12})}),a.jsx("span",{className:r==="M"?"yw-body-sm-reg":"yw-body-xs-reg",children:d})]})}s.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{Variant:{required:!1,tsType:{name:"union",raw:"'Info' | 'Neutral'",elements:[{name:"literal",value:"'Info'"},{name:"literal",value:"'Neutral'"}]},description:"Figma: Variant",defaultValue:{value:"'Info'",computed:!1}},Size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:"Figma: Size",defaultValue:{value:"'S'",computed:!1}},"Show icon":{required:!1,tsType:{name:"boolean"},description:"Figma: Show icon",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},iconName:{required:!1,tsType:{name:"union",raw:"keyof typeof paths",elements:[{name:"literal",value:"'first-page'"},{name:"literal",value:"'last-page'"},{name:"literal",value:"'shopping-basket'"},{name:"literal",value:"'show-password'"},{name:"literal",value:"info"},{name:"literal",value:"'star-full'"},{name:"literal",value:"'filter-tune'"},{name:"literal",value:"close"},{name:"literal",value:"'close-md'"},{name:"literal",value:"'link-chevron'"},{name:"literal",value:"check"},{name:"literal",value:"remove"},{name:"literal",value:"'more-settings-horizontal'"},{name:"literal",value:"'chevron-right'"},{name:"literal",value:"'chevron-left'"},{name:"literal",value:"'account-circle'"},{name:"literal",value:"'arrow-forward'"},{name:"literal",value:"'arrow-upward'"},{name:"literal",value:"image"},{name:"literal",value:"'hamburger-menu'"},{name:"literal",value:"language"},{name:"literal",value:"'chevron-down'"},{name:"literal",value:"'arrow-drop-down'"},{name:"literal",value:"'arrow-drop-up'"},{name:"literal",value:"search"},{name:"literal",value:"add"},{name:"literal",value:"'info-filled'"},{name:"literal",value:"error"},{name:"literal",value:"warning"},{name:"literal",value:"'success-check'"},{name:"literal",value:"'info-two-tone'"}]},description:"Figma icon (default: star-full)",defaultValue:{value:"'star-full'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Components/Tag",component:s,parameters:{layout:"centered",docs:{description:{component:"Non-interactive status label (Info, Neutral) in two sizes, with an optional icon."}}},argTypes:{Variant:{control:"inline-radio",options:["Info","Neutral"]},Size:{control:"inline-radio",options:["S","M"]},"Show icon":{control:"boolean"},iconName:{control:"select",options:v}},args:{Variant:"Info",Size:"S","Show icon":!0,label:"Featured"}},u=({children:e})=>a.jsx("div",{style:{padding:"var(--spacing-lg)",borderRadius:"var(--component-radius-card)",background:"var(--color-shared-surface-base-3)",display:"flex",gap:"var(--spacing-sm)",alignItems:"center"},children:e}),l={},t={args:{Variant:"Info",label:"Featured"}},o={args:{Variant:"Neutral",label:"Case study"},decorators:[e=>a.jsx(u,{children:a.jsx(e,{})})]},n={parameters:{controls:{disable:!0}},render:()=>a.jsx(u,{children:["Info","Neutral"].flatMap(e=>["S","M"].map(r=>a.jsxs("div",{style:{display:"grid",gap:"var(--spacing-2xs)",justifyItems:"start"},children:[a.jsx(s,{Variant:e,Size:r,label:e==="Info"?"Featured":"Case study"}),a.jsx(s,{Variant:e,Size:r,label:e==="Info"?"Featured":"Case study","Show icon":!1})]},`${e}${r}`)))})},N=["Default","Info","Neutral","AllVariants"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Info',
    label: 'Featured'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Neutral',
    label: 'Case study'
  },
  decorators: [S => <Backdrop>
                <S />
            </Backdrop>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Backdrop>
            {(['Info', 'Neutral'] as const).flatMap(v => (['S', 'M'] as const).map(z => <div key={\`\${v}\${z}\`} style={{
      display: 'grid',
      gap: 'var(--spacing-2xs)',
      justifyItems: 'start'
    }}>
                        <Tag Variant={v} Size={z} label={v === 'Info' ? 'Featured' : 'Case study'} />
                        <Tag Variant={v} Size={z} label={v === 'Info' ? 'Featured' : 'Case study'} {...{
        'Show icon': false
      }} />
                    </div>))}
        </Backdrop>
}`,...n.parameters?.docs?.source},description:{story:"Every Figma variant: Variant × Size, with and without icon.",...n.parameters?.docs?.description}}};export{n as AllVariants,l as Default,t as Info,o as Neutral,N as __namedExportsOrder,x as default};
