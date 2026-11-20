import{j as e}from"./iframe-YLxJkV3Y.js";import{S as i}from"./stats-block-DTBhFsWV.js";import{C as g}from"./client-logo-AUvWfzCY.js";import{M as c}from"./mode-frame-wQB139ZV.js";import"./preload-helper-PPVm8Dsz.js";import"./prose-CC0spGf2.js";import"./cx-BDMMs1jM.js";import"./stat-B1CN4jza.js";import"./asset-DxwWGYn5.js";import"./card-reveal-X558JT50.js";import"./icon-kvpOkNOe.js";import"./card-media-CwR6Uwur.js";import"./block.module-ifZFSSN6.js";import"./stats-block.module-BUD_PW8o.js";import"./logo-C0t2_hTF.js";import"./media-D6l-TJH3.js";const d=a=>e.jsx("span",{className:"yw-body-md-bold",children:a}),h={intro:{kicker:"What changed for our clients",title:"Most of our clients have a large catalog, more than one market and an ERP that is staying put. We work with that."},stats:[{Value:"+12.7%",Label:"More checkout starts in the first UK post-launch comparison",logo:d("Quooker"),href:"#"},{Value:"+43%",Label:"Marketable catalog uplift",logo:e.jsx(g,{name:"G-Star",width:80}),href:"#"},{Value:"800+",Label:"Categories active",logo:d("Chadwicks"),href:"#"},{Value:"+93%",Label:"Average match score",logo:d("Symson"),href:"#"}]},u={intro:{title:"Global thinking, local understanding",body:"We’re a driven collective of over 250 specialists working across strategy, design, technology and growth. Wherever you are, we know your market."},stats:[{Value:"25",Label:"Years building digital commerce"},{Value:"900+",Label:"Projects delivered since 2000"},{Value:"250+",Label:"Specialists across every digital discipline"},{Value:"8",Label:"Offices in the Netherlands, the UK, Sweden, Indonesia and Ukraine"}]},p={Desktop:"100%",Mobile:360},l=a=>a==="Plain"?u:h,F={title:"Content blocks/Stats",parameters:{layout:"fullscreen",docs:{description:{component:"Key figures: intro and a row of Stat tiles (borders overlap). Type Client adds client logos and arrows. Motion: numbers count up once when scrolled into view (1.6s ease-out)."}}},argTypes:{Type:{control:"inline-radio",options:["Client","Plain"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Type:"Client",Device:"Desktop",Mode:"Dark"},render:({Type:a,Device:t="Desktop",Mode:m})=>e.jsx(c,{Mode:m,padding:0,children:e.jsx("div",{style:{maxWidth:p[t]},children:e.jsx(i,{Type:a,...l(a)})})})},n={},s={args:{Type:"Plain"}},r={args:{Type:"Plain"},render:({Device:a="Desktop",Mode:t})=>e.jsx(c,{Mode:t,padding:0,children:e.jsx("div",{style:{maxWidth:p[a]},children:e.jsx(i,{Type:"Plain",...l("Plain"),outcomes:["A consistent global brand across 17 markets","Faster rollout of new markets","More efficient content creation","Front end and back end evolve independently"]})})})},o={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(a=>e.jsx(c,{Mode:a,padding:0,children:["Client","Plain"].map(t=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[e.jsx("div",{style:{width:1440,flexShrink:0},children:e.jsx(i,{Type:t,...l(t)})}),e.jsx("div",{style:{width:360,flexShrink:0},children:e.jsx(i,{Type:t,...l(t)})})]},t))},a))})},V=["Default","Plain","WithOutcomes","AllVariants"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Type: 'Plain'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    Type: 'Plain'
  },
  render: ({
    Device = 'Desktop',
    Mode
  }) => <ModeFrame Mode={Mode} padding={0}>
            <div style={{
      maxWidth: W[Device]
    }}>
                <StatsBlock Type="Plain" {...copy('Plain')} outcomes={['A consistent global brand across 17 markets', 'Faster rollout of new markets', 'More efficient content creation', 'Front end and back end evolve independently']} />
            </div>
        </ModeFrame>
}`,...r.parameters?.docs?.source},description:{story:'Outcomes: a list of results under the stats (v2 case "The results"); also takes CMS rich text.',...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
                    {(['Client', 'Plain'] as const).map(t => <div key={t} style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                            <div style={{
          width: 1440,
          flexShrink: 0
        }}>
                                <StatsBlock Type={t} {...copy(t)} />
                            </div>
                            <div style={{
          width: 360,
          flexShrink: 0
        }}>
                                <StatsBlock Type={t} {...copy(t)} />
                            </div>
                        </div>)}
                </ModeFrame>)}
        </div>
}`,...o.parameters?.docs?.source},description:{story:"Every Figma variant: Type × Mode × Device.",...o.parameters?.docs?.description}}};export{o as AllVariants,n as Default,s as Plain,r as WithOutcomes,V as __namedExportsOrder,F as default};
