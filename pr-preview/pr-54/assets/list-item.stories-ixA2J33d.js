import{j as e}from"./iframe-RIzWv_pe.js";import{L as n,a as o}from"./list-item-D8lhlvDS.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-DifRw7KX.js";import"./cx-BDMMs1jM.js";const d=["Your piste score from the Higher Ground guide, and what it says about your data foundation.","Direct access to the Youwe and Pimcore specialists who work on product data every day.","A clear view of what is next for product data and what it means for your 2027 roadmap."],p=["Fragmented customer data across siloed systems","Manual processes that don’t scale","Bottlenecks that delay time to market","Poor visibility into customer journeys","Inability to personalize at scale"],c={Desktop:632,Mobile:336},x={title:"Components/List Item",component:n,parameters:{layout:"padded",docs:{description:{component:"One line in a bulleted or checked list. Stack items in `List` (gap 2xs). Device only changes the width; the text style is responsive."}}},argTypes:{Icon:{control:"inline-radio",options:["Bullet","Check"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Icon:"Bullet",Device:"Desktop",label:p[0]},render:({Device:s,...t})=>e.jsx("div",{style:{width:c[s]},children:e.jsx(o,{children:e.jsx(n,{...t})})})},i={},r={args:{Icon:"Check"},render:({Device:s,Icon:t})=>e.jsx("div",{style:{width:c[s]},children:e.jsx(o,{children:d.map(l=>e.jsx(n,{Icon:t,label:l},l))})})},a={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-xl)"},children:["Desktop","Mobile"].map(s=>e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-xl)",alignItems:"start"},children:[e.jsx("div",{style:{width:c[s]},children:e.jsx(o,{children:p.slice(0,3).map(t=>e.jsx(n,{Icon:"Bullet",label:t},t))})}),e.jsx("div",{style:{width:c[s]},children:e.jsx(o,{children:d.map(t=>e.jsx(n,{Icon:"Check",label:t},t))})})]},s))})},I=["Default","CheckList","AllVariants"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: 'Check'
  },
  render: ({
    Device,
    Icon
  }) => <div style={{
    width: WIDTH[Device]
  }}>
            <List>
                {EVENT.map(t => <ListItem key={t} Icon={Icon} label={t} />)}
            </List>
        </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-xl)'
  }}>
            {(['Desktop', 'Mobile'] as const).map(d => <div key={d} style={{
      display: 'flex',
      gap: 'var(--spacing-xl)',
      alignItems: 'start'
    }}>
                    <div style={{
        width: WIDTH[d]
      }}>
                        <List>
                            {PAINS.slice(0, 3).map(t => <ListItem key={t} Icon="Bullet" label={t} />)}
                        </List>
                    </div>
                    <div style={{
        width: WIDTH[d]
      }}>
                        <List>
                            {EVENT.map(t => <ListItem key={t} Icon="Check" label={t} />)}
                        </List>
                    </div>
                </div>)}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Icon.",...a.parameters?.docs?.description}}};export{a as AllVariants,r as CheckList,i as Default,I as __namedExportsOrder,x as default};
