import{j as e,r as h}from"./iframe-LpDsZ16Y.js";import{F as s}from"./feature-card-CPHWWDRa.js";import{M as u}from"./mode-frame-BO4mAc5W.js";import{u as v}from"./ask-Bkk-PJ1g.js";import"./preload-helper-PPVm8Dsz.js";import"./card-reveal-fF-obe18.js";import"./icon-C1E7HJA3.js";import"./cx-BDMMs1jM.js";import"./card-media-hJoseLg7.js";import"./asset-DfmyhR1b.js";import"./pills-Cwr6cLN4.js";import"./focus-ring.module-B3VHbehf.js";import"./button-ZS8US7Tq.js";import"./button-link-DVh9jek0.js";const d={Desktop:416,Mobile:336},l=[{Number:"01",Title:"B2B Enterprise Commerce",Description:"B2B webshops and procurement portals with customer-specific pricing and self-service ordering."},{Number:"02",Title:"PIM/MDM",Description:"One source of truth for your product and master data, from PIM to customer and supplier records."},{Number:"03",Title:"Cloud Architecture",Description:"Scalable cloud architectures for your applications and machine learning workloads."}],P={title:"Components/Feature Card",parameters:{layout:"centered",docs:{description:{component:"Text-only card for features, solutions and numbered benefits. Card sits on a surface, Plain uses a top divider for lists, AI uses the Ask Youwe surface and aura; with `ask` its link opens Ask Youwe with that question (on the templates: the docked bar, see Services detail). Motion: scroll block reveal (`reveal` prop)."}}},argTypes:{Variant:{control:"inline-radio",options:["Card","Plain","AI"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Variant:"Card",Device:"Desktop",Mode:"Dark"},render:({Variant:r,Device:a,Mode:t})=>e.jsx(u,{Mode:t,children:e.jsx("div",{style:{width:d[a]},children:e.jsx(s,{...l[0],Variant:r})})})},c={},p={args:{Variant:"Plain"}},m={args:{Variant:"AI"}};function y(){const[r,a]=h.useState(null);return v(a),e.jsx("p",{className:"yw-body-sm-reg",style:{margin:"var(--spacing-sm) 0 0",color:"var(--color-shared-content-secondary)"},"aria-live":"polite",children:r?`Opens Ask Youwe with: “${r}” (on the templates the docked bar opens).`:'Click "Learn more": it asks Ask Youwe instead of going to a page.'})}const n={name:"AI asks Youwe",parameters:{controls:{include:["Mode"]}},render:({Mode:r})=>e.jsx(u,{Mode:r,padding:32,children:e.jsxs("div",{style:{maxWidth:420},children:[e.jsx(s,{Variant:"AI",Number:"01",Title:"A legacy platform that limits growth",Description:"Adding customers, assortments and markets takes months.",link:{label:"Learn more"},ask:'How does Youwe solve "A legacy platform that limits growth"?'}),e.jsx(y,{})]})})},o={render:({Variant:r,Device:a,Mode:t})=>e.jsx(u,{Mode:t,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)",alignItems:"start"},children:[e.jsx("div",{style:{width:d[a]},children:e.jsx(s,{...l[1],Variant:r,image:!0,tags:["PIM","MDM","Pimcore"],"Show arrow":!0})}),e.jsx("div",{style:{width:d[a]},children:e.jsx(s,{...l[2],Variant:r,button:{label:"Contact us",href:"#"}})}),e.jsx("div",{style:{width:d[a]},children:e.jsx(s,{...l[0],Variant:r,link:{label:"Read more"}})})]})})},i={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(u,{Mode:r,children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-lg)",alignItems:"start"},children:["Desktop","Mobile"].flatMap(a=>["Card","Plain","AI"].map((t,g)=>e.jsx("div",{style:{width:d[a]},children:e.jsx(s,{...l[g],Variant:t})},a+t)))})},r))})},T=["Default","Plain","AI","AIAsksYouwe","WithOptions","AllVariants"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Plain'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'AI'
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Optional parts switched on: image, arrow, tags, button and link.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Variant × Mode.",...i.parameters?.docs?.description}}};export{m as AI,n as AIAsksYouwe,i as AllVariants,c as Default,p as Plain,o as WithOptions,T as __namedExportsOrder,P as default};
