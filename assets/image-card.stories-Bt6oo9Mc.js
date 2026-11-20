import{j as e}from"./iframe-bLWXZ3wW.js";import{I as o}from"./image-card-BOvlxH9e.js";import{M as n}from"./mode-frame-BpU4Oy_c.js";import"./preload-helper-PPVm8Dsz.js";import"./card-media-Bb49Efag.js";import"./cx-BDMMs1jM.js";import"./icon-B8SBafv4.js";import"./asset-Lxe__8FL.js";import"./focus-ring.module-B3VHbehf.js";const u={title:"Components/Image Card",parameters:{layout:"centered",docs:{description:{component:"Image-only tile for card grids with an optional caption. When linked, the image zooms to 1.04 on hover (duration/zoom, ease/emphasized)."}}},argTypes:{Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Mode:"Dark",Caption:"Higher Ground at SnowWorld Zoetermeer"},render:({Mode:a,Caption:i})=>e.jsx(n,{Mode:a,children:e.jsx("div",{style:{width:416},children:e.jsx(o,{Caption:i})})})},t={},r={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(a=>e.jsx(n,{Mode:a,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:416},children:e.jsx(o,{})}),e.jsx("div",{style:{width:416},children:e.jsx(o,{Caption:"Higher Ground at SnowWorld Zoetermeer"})})]})},a))})},v=["Default","AllVariants"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Every Figma variant (Mode), with and without caption.",...r.parameters?.docs?.description}}};export{r as AllVariants,t as Default,v as __namedExportsOrder,u as default};
