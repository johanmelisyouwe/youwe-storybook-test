import{j as e}from"./iframe-D-lR058l.js";import{L as s,P as l}from"./leadership-COQYmxx-.js";import{M as d}from"./mode-frame-DTiheZq0.js";import"./preload-helper-PPVm8Dsz.js";import"./card-media-C8lSSrRG.js";import"./cx-BDMMs1jM.js";import"./icon-CJEChwe5.js";import"./asset-vJr1Gz6M.js";import"./section-header-DVin_6u5.js";import"./prose-DvbM_XmN.js";import"./block.module-ifZFSSN6.js";import"./accordion-list.module-B4IZp007.js";const t=[["Rob Wiek","CEO"],["Rogier Hosman","CMO"],["Pieter Halenbeek","COO"],["Steve Hulmes","Board of Directors"],["Anneloes van der Wal","CHRO"],["Erwin Idelenburg","CCO"],["Jitze Bakker","CTO"],["Tjitte Folkertsma","CGO"],["Nathalie Seffinga","Operations manager NL"],["Steve Hoyle","Operations manager UK"]].map(([r,i])=>({name:r,role:i})),p={Desktop:"100%",Mobile:360},w={title:"Content blocks/Leadership",parameters:{layout:"fullscreen",docs:{description:{component:"Section intro and Person Cards (no photo), four per row on desktop and two on mobile. Motion: block reveal staggered."}}},argTypes:{Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Device:"Desktop",Mode:"Dark"},render:({Device:r="Desktop",Mode:i})=>e.jsx(d,{Mode:i,padding:0,children:e.jsx("div",{style:{maxWidth:p[r]},children:e.jsx(s,{kicker:"Leadership",title:"The people who lead Youwe",people:t})})})},n={},o={parameters:{layout:"padded",controls:{include:["Mode"]}},render:({Mode:r})=>e.jsx(d,{Mode:r,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx(l,{Photo:"Yes",name:"Henk Mensinga",role:"Director of Product Implementation",email:"h.mensinga@youweagency.com"}),e.jsx(l,{Photo:"No",name:"Henk Mensinga",role:"Director of Product Implementation",email:"h.mensinga@youweagency.com"})]})})},a={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(d,{Mode:r,padding:0,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(s,{kicker:"Leadership",title:"The people who lead Youwe",people:t})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(s,{kicker:"Leadership",title:"The people who lead Youwe",people:t})})]})},r))})},D=["Default","PersonCards","AllVariants"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode}>
            <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 300px)',
      gap: 'var(--spacing-lg)',
      alignItems: 'start'
    }}>
                <PersonCard Photo="Yes" name="Henk Mensinga" role="Director of Product Implementation" email="h.mensinga@youweagency.com" />
                <PersonCard Photo="No" name="Henk Mensinga" role="Director of Product Implementation" email="h.mensinga@youweagency.com" />
            </div>
        </ModeFrame>
}`,...o.parameters?.docs?.source},description:{story:"Person Card: Photo Yes / No (Figma copy).",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Dark', 'Light'] as Mode[]).map(m => <ModeFrame key={m} Mode={m} padding={0}>
                    <div style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                        <div style={{
          width: 1440,
          flexShrink: 0
        }}>
                            <Leadership kicker="Leadership" title="The people who lead Youwe" people={PEOPLE} />
                        </div>
                        <div style={{
          width: 360,
          flexShrink: 0
        }}>
                            <Leadership kicker="Leadership" title="The people who lead Youwe" people={PEOPLE} />
                        </div>
                    </div>
                </ModeFrame>)}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Mode × Device.",...a.parameters?.docs?.description}}};export{a as AllVariants,n as Default,o as PersonCards,D as __namedExportsOrder,w as default};
