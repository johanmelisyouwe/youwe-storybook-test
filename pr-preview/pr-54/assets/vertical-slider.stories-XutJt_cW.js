import{j as e}from"./iframe-RIzWv_pe.js";import{V as n,S,I as u}from"./vertical-slider-Ccvh57H8.js";import{M as m}from"./mode-frame-6HDYIqWE.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DTlfqX8k.js";import"./icon-DifRw7KX.js";import"./cx-BDMMs1jM.js";import"./card-media-CdJfsXN_.js";import"./asset-Uklxo8LF.js";import"./focus-ring.module-B3VHbehf.js";const h={Type:"Service",eyebrow:"01 · Digital Infrastructure",Title:"Build it.",body:"Commerce, PIM, portals and experience platforms, connected to your ERP and built to carry more customers, products and markets.",pills:["B2B Enterprise Commerce","D2C Commerce","PIM/MDM","Digital Experience (DXP)","Customer & Partner Portals","Cloud Architecture"],button:{label:"Explore Digital Infrastructure",href:"#"}},g={Type:"Quote",quote:"“We turned the vision into a platform. Now we’re adding new customers and suppliers.”",name:"Frank Daamen",role:"Digital Director Bunzl & Founder of BunzlOne",button:{label:"Read the case",href:"#"}},v={Type:"Stat",eyebrow:"BunzlOne · B2B Commerce",value:"+43%",statement:"more marketable catalog after moving product data to one PIM, live in 14 weeks.",button:{label:"Read the case",href:"#"}},f={Type:"Case",eyebrow:"Case · G-Star RAW",Title:"How a Design System strengthened G-Star’s brand consistency",body:"One shared library for every market and channel, so new campaigns ship without rebuilding the basics.",button:{label:"Read the case",href:"#"}},w={Type:"Content",eyebrow:"02 · How we work",Title:"Start small. Prove it. Then scale.",body:"We begin with one process that hurts, put it live in weeks, and use the result to plan the next step.",list:["A two-week discovery with your own data","A working first release, not a slide deck","A roadmap you can fund step by step"]},b=[{label:"Digital Infrastructure",slide:h},{label:"Operational Optimization & Intelligence",slide:v},{label:"Foundation for Data & Integrations",slide:g}],l={Kicker:"What we do",Tagline:"Three kinds of work, built to fit together.",items:b},R={title:"Content blocks/Vertical slider",parameters:{layout:"fullscreen",docs:{description:{component:'Full-viewport chapters section with two behaviours. Home "What we do" uses Index Right with Behaviour Scroll (chapters pin while you scroll). **Click** (default): index items are buttons; hover, focus and click switch slides; mobile is stacked. **Scroll**: the section stays in the viewport while you scroll through it, the progress line at the bottom fills with the scroll and the slides change one by one, on desktop and mobile (Scroll stories). With reduced motion Scroll falls back to Click. Slide text rolls in per line (duration/zoom); case media opens with a circular wipe and settles from 1.15 to 1.'}}},argTypes:{Index:{control:"inline-radio",options:["Right","Left"]},Behaviour:{control:"inline-radio",options:["Click","Scroll"],description:"Code variant: Scroll pins the section and follows scroll"},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{Index:"Right",Device:"Desktop",Mode:"Dark",Behaviour:"Click","Show progress":!1},render:({Mode:t,Device:r,...x})=>e.jsx(m,{Mode:t,padding:0,children:e.jsx("div",{style:{maxWidth:r==="Mobile"?360:1440},children:e.jsx(n,{...l,...x,Device:r})})})},d={},c={args:{Index:"Left"}},p={args:{Device:"Mobile"},globals:{viewport:{value:"mobile"}}},y=(t,r)=>e.jsxs(m,{Mode:r,padding:0,children:[e.jsx("div",{style:{height:200,display:"grid",placeItems:"center"},className:"yw-body-md-reg",children:"Scroll down"}),t,e.jsx("div",{style:{height:400}})]}),s={args:{Behaviour:"Scroll"},render:({Mode:t,...r})=>y(e.jsx(n,{...l,...r,Device:"Desktop"}),t)},i={args:{Behaviour:"Scroll",Device:"Mobile"},globals:{viewport:{value:"mobile"}},render:({Mode:t,...r})=>y(e.jsx("div",{style:{maxWidth:360},children:e.jsx(n,{...l,...r,Device:"Mobile"})}),t)},o={parameters:{layout:"padded",controls:{include:["Mode"]}},render:({Mode:t})=>e.jsx(m,{Mode:t,padding:40,children:e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-4xl)",maxWidth:760},children:[[h,g,v,f,w].map(r=>e.jsx(S,{...r},r.Type)),e.jsxs("div",{children:[e.jsx(u,{label:"Digital Infrastructure",active:!0}),e.jsx(u,{label:"Digital Infrastructure"}),e.jsx(u,{label:"Digital Infrastructure",className:"pseudo-hover"})]})]})})},a={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(t=>["Right","Left"].map(r=>e.jsx(m,{Mode:t,padding:0,children:e.jsxs("div",{style:{display:"flex",alignItems:"start"},children:[e.jsx("div",{style:{width:1440},children:e.jsx(n,{...l,Index:r})}),e.jsx("div",{style:{width:360},children:e.jsx(n,{...l,items:b.slice(0,1),Index:r,Device:"Mobile"})})]})},t+r)))})},F=["Default","IndexLeft","Mobile","Scroll","ScrollMobile","Slides","AllVariants"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    Index: 'Left'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  },
  globals: {
    viewport: {
      value: 'mobile'
    }
  }
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Behaviour: 'Scroll'
  },
  render: ({
    Mode,
    ...args
  }) => scrollFrame(<VerticalSlider {...BASE} {...args} Device="Desktop" />, Mode)
}`,...s.parameters?.docs?.source},description:{story:"Behaviour Scroll: scroll the canvas. The section stays in view, the line at the bottom fills and the slides change one by one.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Behaviour: 'Scroll',
    Device: 'Mobile'
  },
  globals: {
    viewport: {
      value: 'mobile'
    }
  },
  render: ({
    Mode,
    ...args
  }) => scrollFrame(<div style={{
    maxWidth: 360
  }}>
                <VerticalSlider {...BASE} {...args} Device="Mobile" />
            </div>, Mode)
}`,...i.parameters?.docs?.source},description:{story:"Behaviour Scroll on mobile: one slide at a time in a pinned full-screen frame, with step bars and the progress line.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode} padding={40}>
            <div style={{
      display: 'grid',
      gap: 'var(--spacing-4xl)',
      maxWidth: 760
    }}>
                {[SERVICE, QUOTE, STAT, CASE, CONTENT].map(s => <Slide key={s.Type} {...s} />)}
                <div>
                    <IndexItem label="Digital Infrastructure" active />
                    <IndexItem label="Digital Infrastructure" />
                    <IndexItem label="Digital Infrastructure" className="pseudo-hover" />
                </div>
            </div>
        </ModeFrame>
}`,...o.parameters?.docs?.source},description:{story:"The five slide types and the index item states (Active, Rest, Hover).",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Dark', 'Light'] as Mode[]).map(m => (['Right', 'Left'] as const).map(ix => <ModeFrame key={m + ix} Mode={m} padding={0}>
                        <div style={{
        display: 'flex',
        alignItems: 'start'
      }}>
                            <div style={{
          width: 1440
        }}>
                                <VerticalSlider {...BASE} Index={ix} />
                            </div>
                            <div style={{
          width: 360
        }}>
                                <VerticalSlider {...BASE} items={ITEMS.slice(0, 1)} Index={ix} Device="Mobile" />
                            </div>
                        </div>
                    </ModeFrame>))}
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Every Figma variant: Index × Mode × Device.",...a.parameters?.docs?.description}}};export{a as AllVariants,d as Default,c as IndexLeft,p as Mobile,s as Scroll,i as ScrollMobile,o as Slides,F as __namedExportsOrder,R as default};
