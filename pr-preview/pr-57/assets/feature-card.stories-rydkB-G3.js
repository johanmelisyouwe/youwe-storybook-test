import{j as e,r as v}from"./iframe-YLxJkV3Y.js";import{F as t}from"./feature-card-WrQbPYB6.js";import{M as c}from"./mode-frame-wQB139ZV.js";import{u as w}from"./ask-DnemNK4y.js";import"./preload-helper-PPVm8Dsz.js";import"./card-reveal-X558JT50.js";import"./icon-kvpOkNOe.js";import"./cx-BDMMs1jM.js";import"./card-media-CwR6Uwur.js";import"./asset-DxwWGYn5.js";import"./pills-BjlF9bNc.js";import"./focus-ring.module-B3VHbehf.js";import"./button-2sIXhgoB.js";import"./button-link-CLDG0YUI.js";const d={Desktop:416,Mobile:336},l=[{Number:"01",Title:"B2B Enterprise Commerce",Description:"B2B webshops and procurement portals with customer-specific pricing and self-service ordering."},{Number:"02",Title:"PIM/MDM",Description:"One source of truth for your product and master data, from PIM to customer and supplier records."},{Number:"03",Title:"Cloud Architecture",Description:"Scalable cloud architectures for your applications and machine learning workloads."}],P={title:"Components/Feature Card",parameters:{layout:"centered",docs:{description:{component:"Text-only card for features, solutions and numbered benefits. Card sits on a surface, Plain uses a top divider for lists, AI uses the Ask Youwe surface and aura; with `ask` the whole card opens Ask Youwe with that question (on the templates: the docked bar, see Services detail). With `href` the whole card is a link. Both get the card hover (red reveal with `Hover CTA`, also on keyboard focus). Motion: scroll block reveal (`reveal` prop)."}}},argTypes:{Variant:{control:"inline-radio",options:["Card","Plain","AI"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Variant:"Card",Device:"Desktop",Mode:"Dark"},render:({Variant:r,Device:a,Mode:s})=>e.jsx(c,{Mode:s,children:e.jsx("div",{style:{width:d[a]},children:e.jsx(t,{...l[0],Variant:r})})})},p={},m={args:{Variant:"Plain"}},u={args:{Variant:"AI"}};function M(){const[r,a]=v.useState(null);return w(a),e.jsx("p",{className:"yw-body-sm-reg",style:{margin:"var(--spacing-sm) 0 0",color:"var(--color-shared-content-secondary)"},"aria-live":"polite",children:r?`Opens Ask Youwe with: “${r}” (on the templates the docked bar opens).`:"Click the card: it asks Ask Youwe instead of going to a page."})}const n={name:"AI asks Youwe",parameters:{controls:{include:["Mode"]}},render:({Mode:r})=>e.jsx(c,{Mode:r,padding:32,children:e.jsxs("div",{style:{maxWidth:420},children:[e.jsx(t,{Variant:"AI",Number:"01",Title:"A legacy platform that limits growth",Description:"Adding customers, assortments and markets takes months.",link:{label:"Learn more"},ask:'How does Youwe solve "A legacy platform that limits growth"?'}),e.jsx(M,{})]})})},o={parameters:{controls:{include:["Mode"]}},render:({Mode:r})=>e.jsx(c,{Mode:r,padding:32,children:e.jsx("div",{style:{maxWidth:420},children:e.jsx(t,{Title:"Dealer & distributor portals",Description:"One platform for every channel, with its own range and prices.","Show arrow":!0,"Hover CTA":"Explore the building block",href:"#"})})})},h={render:({Variant:r,Device:a,Mode:s})=>e.jsx(c,{Mode:s,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)",alignItems:"start"},children:[e.jsx("div",{style:{width:d[a]},children:e.jsx(t,{...l[1],Variant:r,image:!0,tags:["PIM","MDM","Pimcore"],"Show arrow":!0})}),e.jsx("div",{style:{width:d[a]},children:e.jsx(t,{...l[2],Variant:r,button:{label:"Contact us",href:"#"}})}),e.jsx("div",{style:{width:d[a]},children:e.jsx(t,{...l[0],Variant:r,link:{label:"Read more"}})})]})})},i={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(c,{Mode:r,children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-lg)",alignItems:"start"},children:["Desktop","Mobile"].flatMap(a=>["Card","Plain","AI"].map((s,g)=>e.jsx("div",{style:{width:d[a]},children:e.jsx(t,{...l[g],Variant:s})},a+s)))})},r))})},W=["Default","Plain","AI","AIAsksYouwe","Clickable","WithOptions","AllVariants"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Plain'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'AI'
  }
}`,...u.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'AI asks Youwe',
  parameters: {
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode} padding={32}>
            <div style={{
      maxWidth: 420
    }}>
                <FeatureCard Variant="AI" Number="01" Title="A legacy platform that limits growth" Description="Adding customers, assortments and markets takes months." link={{
        label: 'Learn more'
      }} ask='How does Youwe solve "A legacy platform that limits growth"?' />
                <AskNote />
            </div>
        </ModeFrame>
}`,...n.parameters?.docs?.source},description:{story:"AI card that hands its question to Ask Youwe. On a template the docked bar opens with it (Services detail).",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode} padding={32}>
            <div style={{
      maxWidth: 420
    }}>
                <FeatureCard Title="Dealer & distributor portals" Description="One platform for every channel, with its own range and prices." {...{
        'Show arrow': true,
        'Hover CTA': 'Explore the building block'
      }} href="#" />
            </div>
        </ModeFrame>
}`,...o.parameters?.docs?.source},description:{story:"Optional parts switched on: image, arrow, tags, button and link.\nClickable: with `href` the whole card is a link with the card hover (red reveal). Hover or tab to it.",...o.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ({
    Variant,
    Device,
    Mode
  }) => <ModeFrame Mode={Mode}>
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-sm)',
      alignItems: 'start'
    }}>
                <div style={{
        width: W[Device]
      }}>
                    <FeatureCard {...ITEMS[1]} Variant={Variant} image tags={['PIM', 'MDM', 'Pimcore']} {...{
          'Show arrow': true
        }} />
                </div>
                <div style={{
        width: W[Device]
      }}>
                    <FeatureCard {...ITEMS[2]} Variant={Variant} button={{
          label: 'Contact us',
          href: '#'
        }} />
                </div>
                <div style={{
        width: W[Device]
      }}>
                    <FeatureCard {...ITEMS[0]} Variant={Variant} link={{
          label: 'Read more'
        }} />
                </div>
            </div>
        </ModeFrame>
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        flexWrap: 'wrap',
        gap: 'var(--spacing-lg)',
        alignItems: 'start'
      }}>
                        {(['Desktop', 'Mobile'] as const).flatMap(d => (['Card', 'Plain', 'AI'] as const).map((v, i) => <div key={d + v} style={{
          width: W[d]
        }}>
                                    <FeatureCard {...ITEMS[i]} Variant={v} />
                                </div>))}
                    </div>
                </ModeFrame>)}
        </div>
}`,...i.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Variant × Mode.",...i.parameters?.docs?.description}}};export{u as AI,n as AIAsksYouwe,i as AllVariants,o as Clickable,p as Default,m as Plain,h as WithOptions,W as __namedExportsOrder,P as default};
