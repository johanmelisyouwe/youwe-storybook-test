import{j as r}from"./iframe-Bhg6XAGb.js";import{F as o}from"./feature-list-co6zaIMx.js";import"./preload-helper-PPVm8Dsz.js";import"./feature-card-juvl_gqD.js";import"./card-reveal-8ZbpWhzn.js";import"./icon-qAUSsq5c.js";import"./cx-BDMMs1jM.js";import"./card-media-BLVjU-7P.js";import"./asset-sClvoiV0.js";import"./pills-DiT1aTYY.js";import"./focus-ring.module-B3VHbehf.js";import"./button-BoY_vgh9.js";import"./button-link--v0lVSyY.js";import"./ask-x-qhOn70.js";import"./section-header-BSng5zMv.js";import"./prose-CzvDEmKn.js";import"./block.module-ifZFSSN6.js";import"./stats-block.module-C-q_n2vd.js";const a={kicker:"Industries we serve",heading:"Selected case studies",body:"Explore how we’ve helped organizations build and scale their digital infrastructure, from custom commerce platforms to high-performing cloud environments. Each case highlights the impact of smart architecture and design choices."},l=[{Title:"B2B Enterprise Commerce",Description:"B2B webshops and procurement portals with customer-specific pricing, quote-to-order and 24/7 self-service ordering."},{Title:"D2C Commerce",Description:"B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly."},{Title:"PIM/MDM",Description:"One source of truth for your product and master data, from PIM to customer and supplier records."},{Title:"Digital Experience (DXP)",Description:"Digital experience platforms that combine content management, personalization and marketing automation."},{Title:"Customer & Partner Portals",Description:"Self-service portals that bring information together for your customers and partners."},{Title:"Cloud Architecture",Description:"Scalable cloud architectures for your applications and machine learning workloads."}],p={Desktop:"100%",Mobile:390},n=e=>e==="Split"?l.slice(0,4):l,M={title:"Content blocks/Feature list",parameters:{layout:"fullscreen",docs:{description:{component:"Section header plus Feature Cards: Grid (rows of three Cards) or Split (header left, numbered Plain list right). Motion: block reveal staggered."}}},argTypes:{Layout:{control:"inline-radio",options:["Grid","Split"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Layout:"Grid",Device:"Desktop"},render:({Layout:e="Grid",Device:c="Desktop"})=>r.jsx("div",{style:{maxWidth:p[c]},children:r.jsx(o,{Layout:e,...a,items:n(e)})})},i={},s={args:{Layout:"Split"}},t={parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Grid","Split"].map(e=>r.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[r.jsx("div",{style:{width:1440,flexShrink:0},children:r.jsx(o,{Layout:e,...a,items:n(e)})}),r.jsx("div",{style:{width:390,flexShrink:0},children:r.jsx(o,{Layout:e,...a,items:n(e)})})]},e))})},T=["Default","Split","AllVariants"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Split'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Grid', 'Split'] as const).map(l => <div key={l} style={{
      display: 'flex',
      gap: 'var(--spacing-lg)',
      alignItems: 'start'
    }}>
                    <div style={{
        width: 1440,
        flexShrink: 0
      }}>
                        <FeatureList Layout={l} {...HEAD} items={items(l)} />
                    </div>
                    <div style={{
        width: 390,
        flexShrink: 0
      }}>
                        <FeatureList Layout={l} {...HEAD} items={items(l)} />
                    </div>
                </div>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Layout × Device.",...t.parameters?.docs?.description}}};export{t as AllVariants,i as Default,s as Split,T as __namedExportsOrder,M as default};
