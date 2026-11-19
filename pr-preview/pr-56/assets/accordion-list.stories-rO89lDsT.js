import{j as e}from"./iframe-CMEFyaA1.js";import{A as n}from"./accordion-list-DUE5dPQ5.js";import{M as d}from"./mode-frame-DuaNV45j.js";import"./preload-helper-PPVm8Dsz.js";import"./prose-Dt4Zp9cL.js";import"./cx-BDMMs1jM.js";import"./accordion-DJhwN-Ly.js";import"./icon-a91ShoXL.js";import"./focus-ring.module-B3VHbehf.js";import"./button-B_oW282Y.js";import"./list-item-DapGFZf4.js";import"./section-header-B-mswgBl.js";import"./block.module-ifZFSSN6.js";import"./accordion-list.module-B4IZp007.js";import"./stats-block.module-BUD_PW8o.js";const p=[["What is ACI Weave?","ACI Weave by Youwe is an AI platform that organizations use to build and run AI agents connected to their ERP, PIM, CRM and commerce platform, with access to more than 25,000 AI models."],["What does ACI stand for?","ACI stands for Artificial Corporate Intelligence. ACI Weave is the platform that orchestrates agents between your data layer, such as ERP, CRM, PIM, a data lake and file shares, and the places where work happens."],["When does a person approve the work of an agent?","At the steps you choose. For each workflow you decide which steps need approval from an employee. At Kingspan Insulated Panels, no order reaches SAP until a person has approved it."]],l={kicker:"Industries we serve",heading:"Selected case studies",body:"Explore how we’ve helped organizations build and scale their digital infrastructure, from custom commerce platforms to high-performing cloud environments.",bullets:["Fragmented customer data across siloed systems","Inability to personalize at scale","Bottlenecks that delay time to market","Poor visibility into customer journeys","Manual processes that don’t scale"],items:p.map(([o,t])=>({label:o,content:e.jsx("p",{style:{margin:0},children:t})})),cta:{title:"More questions?",body:"Get in touch and we’ll connect you to one of our experts.",button:{label:"Get in touch",href:"#"}}},m={Desktop:"100%",Mobile:390},D={title:"Content blocks/Accordion list",parameters:{layout:"fullscreen",docs:{description:{component:'Section header plus Plus-Minus accordions for FAQs and "Problems we solve". Split puts the header (and optional bullets and CTA) on the left. Motion: items expand like the Accordion; block reveal staggered.'}}},argTypes:{Layout:{control:"inline-radio",options:["Stacked","Split","Split list"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Layout:"Stacked",Device:"Desktop",Mode:"Dark"},render:({Layout:o,Device:t="Desktop",Mode:c})=>e.jsx(d,{Mode:c,padding:0,children:e.jsx("div",{style:{maxWidth:m[t]},children:e.jsx(n,{Layout:o,...l})})})},s={},r={args:{Layout:"Split"}},i={args:{Layout:"Split list"}},a={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(o=>e.jsx(d,{Mode:o,padding:0,children:["Stacked","Split","Split list"].map(t=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(n,{Layout:t,...l})}),e.jsx("div",{style:{width:390,flexShrink:0},children:e.jsx(n,{Layout:t,...l})})]},t))},o))})},j=["Default","Split","SplitList","AllVariants"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Split'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Split list'
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                    {(['Stacked', 'Split', 'Split list'] as const).map(l => <div key={l} style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                            <div style={{
          width: 1440,
          flexShrink: 0
        }}>
                                <AccordionList Layout={l} {...COPY} />
                            </div>
                            <div style={{
          width: 390,
          flexShrink: 0
        }}>
                                <AccordionList Layout={l} {...COPY} />
                            </div>
                        </div>)}
                </ModeFrame>)}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Layout × Device × Mode.",...a.parameters?.docs?.description}}};export{a as AllVariants,s as Default,r as Split,i as SplitList,j as __namedExportsOrder,D as default};
