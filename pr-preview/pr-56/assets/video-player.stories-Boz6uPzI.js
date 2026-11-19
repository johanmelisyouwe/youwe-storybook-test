import{j as r}from"./iframe-CxYQBuog.js";import{V as i}from"./video-player-DRchYkJI.js";import{a as p,v as d,Q as c,c as m}from"./media-CIA0hqPx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtE9JcUf.js";import"./asset-PQUp4Kqr.js";import"./card-media-CGZdVCCm.js";import"./cx-BDMMs1jM.js";import"./icon-CfAeCo3R.js";import"./focus-ring.module-B3VHbehf.js";const V={title:"Components/Video Player",parameters:{layout:"padded",docs:{description:{component:'Basic video player: a 16:9 poster with the red play button. Autoplay "Off" plays on click with the browser controls. Autoplay "In view" plays muted and looped while at least half of it is on screen, with a pause button in the corner; once paused by the viewer it stays paused. With reduced motion it never autoplays. Optional WebVTT captions.'}}},argTypes:{Autoplay:{control:"inline-radio",options:["Off","In view"]}},args:{Autoplay:"Off"},render:({Autoplay:e})=>r.jsx("div",{style:{maxWidth:600},children:r.jsx(i,{Autoplay:e,src:d("011"),poster:p("011"),title:"Demo: ACI Weave in action"},e)})},n={},l={name:"Autoplay in view",args:{Autoplay:"In view"}},a={args:{Autoplay:"In view"},render:({Autoplay:e})=>r.jsx("div",{style:{maxWidth:800},children:r.jsx(i,{Autoplay:e,src:c,poster:m("quooker-1","wide"),title:"Quooker: late summer video"},e)})},t={parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"var(--spacing-xl)"},children:["Off","In view"].map(e=>r.jsx(i,{Autoplay:e,src:d("011"),poster:p("011"),title:`Autoplay ${e}`},e))})},o={parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{maxWidth:600},children:r.jsx(i,{poster:p("015"),title:"Coming soon"})})},s={name:"In view while scrolling",parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"grid",gap:"var(--spacing-4xl)",maxWidth:600,paddingBlock:"60vh"},children:["011","015","016"].map(e=>r.jsx(i,{Autoplay:"In view",src:d(e),poster:p(e),title:`Placeholder clip ${e}`},e))})},b=["Default","AutoplayInView","Vimeo","AllVariants","PosterOnly","InViewScroll"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Autoplay in view',
  args: {
    Autoplay: 'In view'
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    Autoplay: 'In view'
  },
  render: ({
    Autoplay
  }) => <div style={{
    maxWidth: 800
  }}>
            <VideoPlayer key={Autoplay} Autoplay={Autoplay} src={QUOOKER_VIDEO} poster={caseImage('quooker-1', 'wide')} title="Quooker: late summer video" />
        </div>
}`,...a.parameters?.docs?.source},description:{story:'A Vimeo URL as src: background mode for "In view", the Vimeo player with sound for "Off".',...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'var(--spacing-xl)'
  }}>
            {(['Off', 'In view'] as const).map(a => <VideoPlayer key={a} Autoplay={a} src={video('011')} poster={abstract('011')} title={\`Autoplay \${a}\`} />)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Autoplay Off and In view.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    maxWidth: 600
  }}>
            <VideoPlayer poster={abstract('015')} title="Coming soon" />
        </div>
}`,...o.parameters?.docs?.source},description:{story:"Without a video file: poster and a decorative play button only.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'In view while scrolling',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-4xl)',
    maxWidth: 600,
    paddingBlock: '60vh'
  }}>
            {['011', '015', '016'].map(k => <VideoPlayer key={k} Autoplay="In view" src={video(k)} poster={abstract(k)} title={\`Placeholder clip \${k}\`} />)}
        </div>
}`,...s.parameters?.docs?.source},description:{story:"Scroll the in-view videos in and out: each plays while half of it is visible and pauses when it leaves.",...s.parameters?.docs?.description}}};export{t as AllVariants,l as AutoplayInView,n as Default,s as InViewScroll,o as PosterOnly,a as Vimeo,b as __namedExportsOrder,V as default};
