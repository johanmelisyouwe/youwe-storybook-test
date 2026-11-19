import{j as e}from"./iframe-BGyXAfDM.js";import{C as y}from"./card-media-smYYa_3r.js";import{c as n}from"./cx-BDMMs1jM.js";import{r as h}from"./focus-ring.module-B3VHbehf.js";import{M as c}from"./mode-frame-v4DrqJV0.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-d7Tk8VzI.js";import"./asset-ZYTJMLL-.js";const f="_root_1yb9s_7",v="_media_1yb9s_18",x="_caption_1yb9s_32",o={root:f,media:v,caption:x};function s({image:r,alt:i="",Caption:d,ratio:g="416 / 300",href:l,className:u}){const m=e.jsxs(e.Fragment,{children:[e.jsx(y,{className:o.media,src:r,alt:i,ratio:g}),d&&e.jsx("span",{className:n(o.caption,"yw-body-sm-reg"),children:d})]}),p=n(o.root,u);return l?e.jsx("a",{href:l,className:n(p,h.root),children:m}):e.jsx("figure",{className:p,children:m})}s.__docgenInfo={description:"",methods:[],displayName:"ImageCard",props:{image:{required:!1,tsType:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}]},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},Caption:{required:!1,tsType:{name:"string"},description:"Figma: Caption (Show caption)"},ratio:{required:!1,tsType:{name:"string"},description:"Aspect ratio of the image when the card does not fill a grid cell (Figma: 416 × 300)",defaultValue:{value:"'416 / 300'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Components/Image Card",parameters:{layout:"centered",docs:{description:{component:"Image-only tile for card grids with an optional caption. When linked, the image zooms to 1.04 on hover (duration/zoom, ease/emphasized)."}}},argTypes:{Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Mode:"Dark",Caption:"Higher Ground at SnowWorld Zoetermeer"},render:({Mode:r,Caption:i})=>e.jsx(c,{Mode:r,children:e.jsx("div",{style:{width:416},children:e.jsx(s,{Caption:i})})})},t={},a={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(c,{Mode:r,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:416},children:e.jsx(s,{})}),e.jsx("div",{style:{width:416},children:e.jsx(s,{Caption:"Higher Ground at SnowWorld Zoetermeer"})})]})},r))})},F=["Default","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
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
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                        <div style={{
          width: 416
        }}>
                            <ImageCard />
                        </div>
                        <div style={{
          width: 416
        }}>
                            <ImageCard Caption="Higher Ground at SnowWorld Zoetermeer" />
                        </div>
                    </div>
                </ModeFrame>)}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant (Mode), with and without caption.",...a.parameters?.docs?.description}}};export{a as AllVariants,t as Default,F as __namedExportsOrder,I as default};
