import{j as e}from"./iframe-D-lR058l.js";import{U as d,E as p}from"./upcoming-events-YOs4dDbb.js";import{M as c}from"./mode-frame-DTiheZq0.js";import"./preload-helper-PPVm8Dsz.js";import"./card-reveal-GtrU1sIt.js";import"./icon-CJEChwe5.js";import"./cx-BDMMs1jM.js";import"./card-media-C8lSSrRG.js";import"./asset-vJr1Gz6M.js";import"./button-link-_Gs_Ikx6.js";const i=[{Day:"28",Month:"OCT",Title:"PIM Clinic | Product Data Advice | 28 October",Place:"Online session",date:"28 October",href:"#"},{Day:"13",Month:"NOV",Title:"aiGrunn & Youwe Business Track",Place:"Forum Groningen",date:"13 November",href:"#"},{Day:"3",Month:"DEC",Title:"Higher Ground | Product data event, 3 December",Place:"SnowWorld Zoetermeer",date:"3 December",href:"#"},{Day:"21",Month:"JAN",Title:"Higher Ground online: what’s next for product data",Place:"Online",date:"21 January",href:"#"}],f={title:"Components/Upcoming events",parameters:{layout:"padded",docs:{description:{component:"Up to four event cards with a link to all events; sits under the featured Insight Card. Each card is one link; hover/focus plays the red reveal."}}},argTypes:{Mode:{control:"inline-radio",options:["Dark","Light"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},events:{control:{type:"range",min:2,max:4},description:"Figma: Show event 3 / Show event 4"}},args:{Mode:"Dark",Device:"Desktop",events:4},render:({Mode:r,Device:n,events:l})=>e.jsx(c,{Mode:r,children:e.jsx("div",{style:{maxWidth:n==="Mobile"?336:1280},children:e.jsx(d,{Device:n,events:i.slice(0,l)})})})},a={},o={args:{Device:"Mobile"}},s={parameters:{controls:{include:["Mode"]}},render:({Mode:r})=>e.jsx(c,{Mode:r,children:e.jsx("div",{style:{display:"flex",gap:"var(--spacing-sm)"},children:["Rest","Hover"].map(n=>e.jsx("div",{style:{width:360},children:e.jsx(p,{...i[0],className:n==="Hover"?"pseudo-hover":void 0})},n))})})},t={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(r=>e.jsx(c,{Mode:r,children:e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-xl)",alignItems:"start"},children:[e.jsx("div",{style:{width:1280},children:e.jsx(d,{events:i})}),e.jsx("div",{style:{width:336},children:e.jsx(d,{Device:"Mobile",events:i})})]})},r))})},j=["Default","Mobile","EventStates","AllVariants"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode}>
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-sm)'
    }}>
                {(['Rest', 'Hover'] as const).map(s => <div key={s} style={{
        width: 360
      }}>
                        <EventCard {...EVENTS[0]} className={s === 'Hover' ? 'pseudo-hover' : undefined} />
                    </div>)}
            </div>
        </ModeFrame>
}`,...s.parameters?.docs?.source},description:{story:"_Upcoming events/Row: State Rest and Hover.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
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
        gap: 'var(--spacing-xl)',
        alignItems: 'start'
      }}>
                        <div style={{
          width: 1280
        }}>
                            <UpcomingEvents events={EVENTS} />
                        </div>
                        <div style={{
          width: 336
        }}>
                            <UpcomingEvents Device="Mobile" events={EVENTS} />
                        </div>
                    </div>
                </ModeFrame>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Mode × Device.",...t.parameters?.docs?.description}}};export{t as AllVariants,a as Default,s as EventStates,o as Mobile,j as __namedExportsOrder,f as default};
