import{j as e}from"./iframe-CMEFyaA1.js";import{H as s,a as v,b as p}from"./hero-BDFdH71h.js";import{H as b}from"./header-CY7sQXyn.js";import{C as y}from"./client-logo-D9StZU-G.js";import{a as L,c as j}from"./media-CIA0hqPx.js";import"./preload-helper-PPVm8Dsz.js";import"./asset-g08xwDaq.js";import"./button-B_oW282Y.js";import"./icon-a91ShoXL.js";import"./cx-BDMMs1jM.js";import"./breadcrumbs-DUmYq1jo.js";import"./button-filter-CIBs4kmi.js";import"./focus-ring.module-B3VHbehf.js";import"./card-media-0_57ir45.js";import"./stat-DD2x0ohW.js";import"./card-reveal-hVFynon-.js";import"./video-player-CMXydmXa.js";import"./index-BtE9JcUf.js";import"./block.module-ifZFSSN6.js";import"./responsive.module-DNdN40Bf.js";import"./youwe-logo-BldAvTqb.js";import"./button-utility-DyvsyowB.js";import"./ask-youwe-DtsbTXiT.js";import"./ask-zb9yjCMq.js";import"./prose-Dt4Zp9cL.js";import"./logo-Z3BTtYTX.js";const x="Business improvement agency",W=["Exigent","G-Star","GoCardless","ING","LaSalle","Munich Re","Newland","Subway"],S=W.map(r=>e.jsx(y,{name:r,width:118},r)),k=[{value:"17",label:"markets supported",client:"Quooker"},{value:"−86%",label:"response time",client:"De Heus Animal Nutrition"},{value:"93%",label:"average match score",client:"Symson"},{value:"41%",label:"IT cost reduction",client:"PostNL"},{value:"43%",label:"marketable catalog uplift",client:"Chadwicks"}],u=["Services","Work","Industries","Tech Partners","Insights","About Us"].map(r=>({label:r,href:"#"})),c={image:L("016"),title:["Complex products.","Clear platforms."],body:"Digital transformation is about reshaping how platforms, processes, data and people work together. We design connected digital ecosystems and help teams adopt new ways of working, so change leads to lasting performance.",label:{Type:"Subtitle",Subtitle:x},buttons:[{label:"See our work",href:"#"},{label:"What we do",href:"#"}],bar:{Type:"Logos",logos:S}},g={image:j("quooker-1","wide"),Variant:"Title + image",title:["Scaling smart: Quooker’s expansion to 17 countries"],label:{Type:"Breadcrumb",crumbs:[{label:"Home",href:"#"},{label:"Work",href:"#"},{label:"Quooker"}]},logo:e.jsx(y,{name:"Quooker",width:150})},re={title:"Content blocks/Hero",parameters:{layout:"fullscreen",docs:{description:{component:'Hero. Gradient: optional moving WebGL background (`Background="WebGL"`, the image stays as fallback and for reduced motion), kicker + heading/3xl title (2nd line brand red), body and up to 2 buttons, optional bottom bar (client logos or stats, slow marquee). Title + image: case/detail pages. Motion: title rises line by line in a mask; with `recede`, the hero recedes over the first 860px of scroll.'}}},argTypes:{Variant:{control:"inline-radio",options:["Gradient","Title + image"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Bar:{control:"inline-radio",options:["Logos","Stats","None"]},Background:{control:"inline-radio",options:["Image","WebGL"],description:"Gradient: moving WebGL ribbons over the image (the image is the fallback and stays for reduced motion)"}},args:{Variant:"Gradient",Device:"Desktop",Bar:"Logos",Background:"Image","Show header":!0},render:({Variant:r,Device:m,Bar:h,Background:f,"Show header":T})=>{const w=r==="Gradient"?c:g,H=h==="None"?void 0:h==="Stats"?{Type:"Stats",stats:k}:c.bar;return e.jsx("div",{style:{maxWidth:m==="Mobile"?360:1440},children:e.jsx(s,{...w,Device:m,Background:f,bar:r==="Gradient"?H:void 0,header:T?e.jsx(b,{Device:m,nav:u}):void 0})})}},n={},a={name:"WebGL background",args:{Background:"WebGL"}},i={args:{Bar:"Stats"}},l={args:{Variant:"Title + image","Show header":!1}},d={args:{Device:"Mobile"},globals:{viewport:{value:"mobile"}}},o={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)",maxWidth:1440},children:[e.jsx(v,{Type:"Logos",logos:S}),e.jsx(v,{Type:"Stats",stats:k}),e.jsx(p,{Type:"Subtitle",Subtitle:x}),e.jsx(p,{Type:"Breadcrumb",crumbs:[{label:"Home",href:"#"},{label:"Work",href:"#"},{label:"Quooker"}]}),e.jsx("div",{style:{width:360},children:e.jsx(p,{Type:"Breadcrumb",Device:"Mobile",crumbs:[{label:"Home",href:"#"},{label:"Work",href:"#"},{label:"Quooker"}]})})]})},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-2xl)"},children:[e.jsx("div",{style:{maxWidth:1440},children:e.jsx(s,{...c,header:e.jsx(b,{nav:u})})}),e.jsx("div",{style:{maxWidth:1440},children:e.jsx(s,{...g})}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2xl)",alignItems:"start"},children:[e.jsx("div",{style:{width:360},children:e.jsx(s,{...c,Device:"Mobile",header:e.jsx(b,{Device:"Mobile",nav:u})})}),e.jsx("div",{style:{width:360},children:e.jsx(s,{...g,Device:"Mobile"})})]})]})},ae=["Default","WebGLBackground","StatsBar","TitleImage","Mobile","Parts","AllVariants"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'WebGL background',
  args: {
    Background: 'WebGL'
  }
}`,...a.parameters?.docs?.source},description:{story:"The Home hero: moving WebGL background (silk ribbons in the brand colours) with the client logo bar.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    Bar: 'Stats'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    Variant: 'Title + image',
    'Show header': false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    Device: 'Mobile'
  },
  globals: {
    viewport: {
      value: 'mobile'
    }
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)',
    maxWidth: 1440
  }}>
            <HeroBar Type="Logos" logos={LOGOS} />
            <HeroBar Type="Stats" stats={STATS} />
            <HeroLabel Type="Subtitle" Subtitle={KICKER} />
            <HeroLabel Type="Breadcrumb" crumbs={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Work',
      href: '#'
    }, {
      label: 'Quooker'
    }]} />
            <div style={{
      width: 360
    }}>
                <HeroLabel Type="Breadcrumb" Device="Mobile" crumbs={[{
        label: 'Home',
        href: '#'
      }, {
        label: 'Work',
        href: '#'
      }, {
        label: 'Quooker'
      }]} />
            </div>
        </div>
}`,...o.parameters?.docs?.source},description:{story:"_Hero/Bar (Logos, Stats) and _Hero/Label (Subtitle, Breadcrumb).",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-2xl)'
  }}>
            <div style={{
      maxWidth: 1440
    }}>
                <Hero {...GRADIENT} header={<Header nav={NAV} />} />
            </div>
            <div style={{
      maxWidth: 1440
    }}>
                <Hero {...CASE} />
            </div>
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-2xl)',
      alignItems: 'start'
    }}>
                <div style={{
        width: 360
      }}>
                    <Hero {...GRADIENT} Device="Mobile" header={<Header Device="Mobile" nav={NAV} />} />
                </div>
                <div style={{
        width: 360
      }}>
                    <Hero {...CASE} Device="Mobile" />
                </div>
            </div>
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Variant.",...t.parameters?.docs?.description}}};export{t as AllVariants,n as Default,d as Mobile,o as Parts,i as StatsBar,l as TitleImage,a as WebGLBackground,ae as __namedExportsOrder,re as default};
