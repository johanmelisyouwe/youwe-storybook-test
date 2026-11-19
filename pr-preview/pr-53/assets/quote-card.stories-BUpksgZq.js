import{j as e}from"./iframe-BNIXmb8p.js";import{Q as n}from"./quote-card-CrYNRybG.js";import{M as i}from"./mode-frame-C9JYTzJq.js";import"./preload-helper-PPVm8Dsz.js";import"./asset-Ck6EZZQj.js";import"./button-DDYWGEnZ.js";import"./icon-DCU5zjMq.js";import"./cx-BDMMs1jM.js";const d={Desktop:416,Mobile:336},l={Quote:"“We turned the vision into a platform. Now we’re adding new customers and suppliers.”",Name:"Frank Daamen",Role:"Digital Director Bunzl & Founder of BunzlOne"},D={title:"Components/Quote Card",parameters:{layout:"centered",docs:{description:{component:"Small client quote for card grids. Stretches to fill its grid cell; the attribution stays at the bottom."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Mode:"Dark"},render:({Device:r,Mode:t})=>e.jsx(i,{Mode:t,children:e.jsx("div",{style:{width:d[r]},children:e.jsx(n,{...l})})})},o={},s={render:({Device:r,Mode:t})=>e.jsx(i,{Mode:t,children:e.jsx("div",{style:{width:d[r]},children:e.jsx(n,{...l,buttons:[{label:"Read the case",href:"#"}]})})})},a={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(i,{Mode:r,children:e.jsx("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:["Desktop","Mobile"].map(t=>e.jsx("div",{style:{width:d[t]},children:e.jsx(n,{...l})},t))})},r))})},M=["Default","WithButton","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    Device,
    Mode
  }) => <ModeFrame Mode={Mode}>
            <div style={{
      width: W[Device]
    }}>
                <QuoteCard {...QUOTE} buttons={[{
        label: 'Read the case',
        href: '#'
      }]} />
            </div>
        </ModeFrame>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                        {(['Desktop', 'Mobile'] as const).map(d => <div key={d} style={{
          width: W[d]
        }}>
                                <QuoteCard {...QUOTE} />
                            </div>)}
                    </div>
                </ModeFrame>)}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Mode × Device.",...a.parameters?.docs?.description}}};export{a as AllVariants,o as Default,s as WithButton,M as __namedExportsOrder,D as default};
