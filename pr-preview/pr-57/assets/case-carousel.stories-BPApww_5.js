import{j as t}from"./iframe-YLxJkV3Y.js";import{C as l}from"./case-carousel-BCHHfhOw.js";import{C as h}from"./client-logo-AUvWfzCY.js";import{d as g}from"./media-D6l-TJH3.js";import"./preload-helper-PPVm8Dsz.js";import"./button-2sIXhgoB.js";import"./icon-kvpOkNOe.js";import"./cx-BDMMs1jM.js";import"./case-card-B_W0dUs_.js";import"./asset-DxwWGYn5.js";import"./card-reveal-X558JT50.js";import"./card-media-CwR6Uwur.js";import"./block.module-ifZFSSN6.js";import"./logo-C0t2_hTF.js";const r=[{Title:"How a Design System strengthened G-Star’s brand consistency",Client:"G-Star RAW",logo:t.jsx(h,{name:"G-Star"}),href:"#"},{Title:"Scaling smarter: a digital platform for global growth",Client:"Quooker",stat:{value:"17",label:"markets supported"},href:"#"},{Title:"Booking.com builds Partner Hub with Youwe",Client:"Booking.com",stat:{value:"30",label:"languages"},href:"#"},{Title:"AI matching for pricing intelligence",Client:"Symson",stat:{value:"93%",label:"average match score"},href:"#"},{Title:"A PIM system and SAP integration",Client:"Heidelberg",stat:{value:"3",label:"SAP ERP systems integrated"},href:"#"},{Title:"Scaling product data with Pimcore & AI",Client:"Chadwicks Group",stat:{value:"+43%",label:"marketable catalog uplift"},href:"#"},{Title:"From inbox to SAP: AI order intake",Client:"Kingspan Insulated Panels",href:"#"},{Title:"Seamless replatforming for Fairphone commerce platform",Client:"Fairphone",href:"#"}],v=r.map(e=>({...e,image:g(e.Client),logo:t.jsx(h,{name:e.Client})}));r.splice(0,r.length,...v);const y={Title:"Selected case studies",body:"Explore how we’ve helped organizations build and scale their digital infrastructure, from custom commerce platforms to high-performing cloud environments. Each case highlights the impact of smart architecture and design choices."},m={Kicker:"Selected work",Title:"Commerce, portals and AI in production",button:{label:"All work",href:"#"}},u={Desktop:"100%",Mobile:390},c=e=>e==="Short"?y:m,d=e=>e==="Full width 3"?3:e==="Full width 4"?4:8,E={title:"Content blocks/Case carousel",parameters:{layout:"fullscreen",docs:{description:{component:"Section header and Case Cards: Short (prev/next + counter, cards bleed off the right edge), Full width 3 / 4 (a row of cards), Scroll (one row off the edge), Pinned (code layout for the Home reel: the section stays in view while scrolling moves the cards sideways, with a 01 / 09 counter; mobile and reduced motion swipe). Snapping native scroll; tabbing to a card scrolls it into view. Cards use the Case Card hover."}}},argTypes:{Layout:{control:"inline-radio",options:["Short","Full width 3","Full width 4","Scroll","Pinned"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Layout:"Short",Device:"Desktop"},render:({Layout:e="Short",Device:p="Desktop"})=>t.jsx("div",{style:{maxWidth:u[p]},children:t.jsx(l,{Layout:e,Device:p,...c(e),cases:r.slice(0,d(e))})})},o={},i={args:{Layout:"Full width 3"}},n={args:{Layout:"Scroll"}},s={args:{Layout:"Pinned"},render:({Device:e="Desktop"})=>t.jsxs("div",{style:{maxWidth:u[e]},children:[t.jsx("div",{style:{height:"50vh"}}),t.jsx(l,{Layout:"Pinned",Device:e,...m,cases:r}),t.jsx("div",{style:{height:"80vh"}})]})},a={parameters:{controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Short","Full width 3","Full width 4","Scroll"].map(e=>t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[t.jsx("div",{style:{width:1440,flexShrink:0},children:t.jsx(l,{Layout:e,...c(e),cases:r.slice(0,d(e))})}),t.jsx("div",{style:{width:390,flexShrink:0},children:t.jsx(l,{Layout:e,...c(e),cases:r.slice(0,Math.min(3,d(e)))})})]},e))})},I=["Default","FullWidth3","Scroll","Pinned","AllVariants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Full width 3'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Scroll'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Pinned'
  },
  render: ({
    Device = 'Desktop'
  }) => <div style={{
    maxWidth: W[Device]
  }}>
            <div style={{
      height: '50vh'
    }} />
            <CaseCarousel Layout="Pinned" Device={Device} {...WIDE} cases={CASES} />
            <div style={{
      height: '80vh'
    }} />
        </div>
}`,...s.parameters?.docs?.source},description:{story:"Pinned: scroll the canvas. The reel stays in view, the cards move sideways and the counter follows.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Short', 'Full width 3', 'Full width 4', 'Scroll'] as const).map(l => <div key={l} style={{
      display: 'flex',
      gap: 'var(--spacing-lg)',
      alignItems: 'start'
    }}>
                        <div style={{
        width: 1440,
        flexShrink: 0
      }}>
                            <CaseCarousel Layout={l} {...props(l)} cases={CASES.slice(0, count(l))} />
                        </div>
                        <div style={{
        width: 390,
        flexShrink: 0
      }}>
                            <CaseCarousel Layout={l} {...props(l)} cases={CASES.slice(0, Math.min(3, count(l)))} />
                        </div>
                    </div>)}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Layout × Device.",...a.parameters?.docs?.description}}};export{a as AllVariants,o as Default,i as FullWidth3,s as Pinned,n as Scroll,I as __namedExportsOrder,E as default};
